import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Header from "@/components/header";
import { useSession } from "next-auth/react";

interface Post {
  _id: string;
  title: string;
  content: string;
  author_icon: string;
  author_name: string;
  createdAt: string;
  status: string;
  tag?: string;
}

interface Comment {
  _id: string;
  postId: string;
  author: string;
  content: string;
  createdAt: string;
  author_icon?: string;
}

interface UserRoles {
  [key: string]: "staff" | "operator" | "admin";
}

const userRoles: UserRoles = {
  bugze: "operator",
  markination: "operator",
  zippybonzo: "admin",
};

const statuscolors: { [key: string]: string } = {
  "Under Review":
    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  Implemented:
    "'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  "In Development":
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  Denied: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
};

const PostPage = () => {
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [status, setStatus] = useState<string>("Under Review");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { id } = router.query;
  const { data: session, status: sessionStatus } = useSession();

  const author_icon = session?.user?.image || "";
  const author_name = session?.user?.name || "";
  const userRole = userRoles[author_name] || "";

  if (sessionStatus === "unauthenticated") {
    router.push("/api/auth/signin");
    return null;
  }

  useEffect(() => {
    const fetchposts = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/posts/${id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch post");
          }
          const data = await response.json();
          setPost(data[0]);
          setStatus(data[0]?.status || "Under Review");
        } catch (error) {
          setError("Error fetching post");
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    };

    const fetchcomments = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/posts/comments?postId=${id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch comments");
          }
          const data = await response.json();
          setComments(data);
        } catch (error) {
          setError("Error fetching comments");
          console.error(error);
        }
      }
    };

    fetchposts();
    fetchcomments();
  }, [id]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!comment) return;

    try {
      const response = await fetch("/api/posts/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: id,
          author: author_name,
          content: comment,
          author_icon: author_icon,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to post comment");
      }
      setComment("");

      const updatedCommentsResponse = await fetch(
        `/api/posts/comments?postId=${id}`
      );
      const updatedCommentsData = await updatedCommentsResponse.json();
      setComments(updatedCommentsData);
    } catch (error) {
      setError("Error submitting comment");
      console.error(error);
    }
  };

  const handleCommentDelete = async (commentId: string) => {
    try {
      const response = await fetch("/api/posts/comment/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ commentId }),
      });
      if (!response.ok) {
        throw new Error("Failed to delete comment");
      }
      setComments((prevComments) =>
        prevComments.filter((comment) => comment._id !== commentId)
      );
    } catch (error) {
      setError("Error deleting comment");
      console.error(error);
    }
  };

  const handlePostDelete = async () => {
    try {
      const response = await fetch(`/api/posts/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error("Failed to delete post");
      }
      router.push("/feedback");
    } catch (error) {
      setError("Error deleting post");
      console.error(error);
    }
  };

  const handwelstguchange = async (newStatus: string) => {
    setStatus(newStatus);

    try {
      const response = await fetch(`/api/posts/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (!response.ok) {
        throw new Error("Failed to update status");
      }
    } catch (error) {
      setError("Error updating status");
      console.error(error);
    }
  };

  const badgecolor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "staff":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "operator":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      default:
        return "";
    }
  };

  if (loading)
    return (
      <div className="dark absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
          >
            <animateTransform
              attributeName="transform"
              dur="0.75s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            />
          </path>
        </svg>
        <p className="text-xl text-gray-300">Loading post...</p>
      </div>
    );

  if (!post) {
    router.push("/feedback");
    return null;
  }

  return (
    <div className="dark flex flex-col min-h-screen bg-gradient-to-b from-zinc-950 to-neutral-950 border-zinc-900 text-white font-sans">
      <div className="fixed top-0 left-0 w-full z-50 bg-zinc-950 shadow-md">
        <Header />
      </div>

      <main className="pt-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
          <div className="flex justify-center mb-4">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => router.push("/roadmap")}
                className="px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-700 dark:bg-zinc-950 dark:border-zinc-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500"
              >
                Roadmap
              </button>
              <button
                onClick={() => router.push("/feedback")}
                className="px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-none hover:bg-gray-100 focus:ring-2 focus:ring-blue-700 dark:bg-zinc-950 dark:border-zinc-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500"
              >
                Feedback
              </button>
              <button
                onClick={() => router.push("/changelog")}
                className="px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:bg-zinc-950 dark:border-zinc-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500"
              >
                Changelog
              </button>
            </div>
          </div>

          <div className="overflow-auto bg-white dark:bg-zinc-950 border border-zinc-900 rounded-lg shadow-md mb-6 max-w-4xl mx-auto relative">
            <div className="flex items-center p-6 border-b border-zinc-900 dark:border-zinc-700 flex-wrap">
              <img
                className="mr-4 w-12 h-12 rounded-full"
                src={post.author_icon}
                alt={post.author_name}
              />
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {post.title}
                </h1>
                <div className="flex items-center mt-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    By {post.author_name} on{" "}
                    {post.createdAt
                      ? new Date(post.createdAt).toLocaleDateString()
                      : ""}
                  </p>
                  {post.tag && (
                    <span className="ml-2 inline-block rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      {post.tag}
                    </span>
                  )}
                  <span
                    className={`ml-2 inline-block rounded px-2.5 py-0.5 text-xs font-medium ${statuscolors[status]}`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </span>
                </div>
              </div>
              <div className="ml-auto flex items-center space-x-4 mt-4 sm:mt-0">
                {["admin", "operator"].includes(userRole) && (
                  <div className="relative">
                    <button
                      onClick={() => setDropdownOpen((prev) => !prev)}
                      className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </button>
                    {dropdownOpen && (
                      <div
                        ref={dropdownRef}
                        className="absolute right-0 mt-2 w-48 bg-zinc-950 border border-zinc-700 rounded-lg shadow-lg"
                      >
                        <button
                          onClick={handlePostDelete}
                          className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-zinc-800"
                        >
                          Delete Post
                        </button>
                        <div className="border-t border-zinc-700">
                          <select
                            value={status}
                            onChange={(e) => handwelstguchange(e.target.value)}
                            className="block w-full bg-zinc-950 text-white border-none focus:ring-blue-500 dark:focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="Under Review">Under Review</option>
                            <option value="In Development">
                              In Development
                            </option>
                            <option value="Implemented">Implemented</option>
                            <option value="Denied">Denied</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <p className="text-base sm:text-lg text-gray-900 dark:text-white">
                {post.content}
              </p>
            </div>
          </div>

          <section className="dark:bg-zinc-950 border border-zinc-900 rounded-lg shadow-md mb-6 max-w-4xl mx-auto p-4 sm:p-6 lg:p-12">
            <div>
              <div className="flex justify-between items-center mb-4 sm:mb-8">
                <h2 className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                  Discussion
                </h2>
              </div>
              <ul className="space-y-6">
                {comments.map((comment) => {
                  const userRole = userRoles[comment.author] || "";
                  return (
                    <li
                      key={comment._id}
                      className="p-4 border-b border-gray-300 dark:border-gray-700"
                    >
                      <div className="flex items-start mb-4">
                        <img
                          className="mr-4 w-10 sm:w-12 h-10 sm:h-12 rounded-full"
                          src={comment.author_icon || author_icon}
                          alt={comment.author}
                        />
                        <div className="flex-1">
                          <div className="flex items-center">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {comment.author}
                            </p>
                            {userRole && (
                              <span
                                className={`ml-1.5 inline-block rounded px-1 py-0 text-xs font-medium ${badgecolor(
                                  userRole
                                )}`}
                              >
                                {userRole.charAt(0).toUpperCase() +
                                  userRole.slice(1)}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {new Date(comment.createdAt).toLocaleDateString()}
                          </p>
                          <p className="mt-2 text-sm sm:text-base text-gray-800 dark:text-gray-300">
                            {comment.content}
                          </p>
                        </div>
                        {comment.author === author_name && (
                          <button
                            onClick={() => handleCommentDelete(comment._id)}
                            className="text-xs sm:text-sm text-red-600 dark:text-red-500 ml-4"
                          >
                            Delete
                          </button>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <form
                onSubmit={handleCommentSubmit}
                className="mt-6 sm:mt-10 space-y-4 sm:space-y-6"
              >
                <textarea
                  rows={4}
                  className="block w-full p-3 text-sm text-gray-900 bg-gray-50 dark:bg-zinc-950 dark:text-white rounded-lg border border-gray-300 dark:border-zinc-800 focus:ring-blue-500 dark:focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Leave a comment..."
                  value={comment}
                  onChange={handleCommentChange}
                />
                <button
                  type="submit"
                  className="inline-flex items-center px-3 sm:px-4 py-2  text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 focus:outline-none"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PostPage;
