"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/header';
import { useSession } from 'next-auth/react';

interface Post {
  _id: string;
  title: string;
  content: string;
  author_icon: string;
  author_name: string;
  createdAt: string;
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

const PostPage = () => {
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);
  
  const { id } = router.query;
  const { data: session, status } = useSession();

  const author_icon = session?.user?.image || '';
  const author_name = session?.user?.name || '';
  if (status === 'unauthenticated') {
    router.push('/api/auth/signin');
    return null;
  }

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/posts/${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch post');
          }
          const data = await response.json();
          setPost(data[0]);
        } catch (error) {
          setError('Error fetching post');
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    };

    const fetchComments = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/posts/comments?postId=${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch comments');
          }
          const data = await response.json();
          setComments(data);
        } catch (error) {
          setError('Error fetching comments');
          console.error(error);
        }
      }
    };

    fetchPost();
    fetchComments();
  }, [id]);

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!comment) return;

    try {
      const response = await fetch('/api/posts/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postId: id,
          author: author_name,
          content: comment,
          author_icon: author_icon,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to post comment');
      }
      setComment('');

      const updatedCommentsResponse = await fetch(`/api/posts/comments?postId=${id}`);
      const updatedCommentsData = await updatedCommentsResponse.json();
      setComments(updatedCommentsData);
    } catch (error) {
      setError('Error submitting comment');
      console.error(error);
    }
  };

  const handleCommentDelete = async (commentId: string) => {
    try {
      const response = await fetch('/api/posts/comment/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ commentId }),
      });
      if (!response.ok) {
        throw new Error('Failed to delete comment');
      }
      setComments(prevComments => prevComments.filter(comment => comment._id !== commentId));
    } catch (error) {
      setError('Error deleting comment');
      console.error(error);
    }
  };

  if (loading) return (
    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 z-50">
      <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
        <path fill="white" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
          <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
        </path>
      </svg>
      <p className="text-xl text-gray-300">Loading post...</p>
    </div>
  );

  if (!post) {
    router.push('/feedback');
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-950 to-neutral-950 border-zinc-900 text-white font-sans">
      <div className="fixed top-0 left-0 w-full z-50 bg-zinc-950 shadow-md">
        <Header />
      </div>

      <main className="pt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-center mb-4">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => router.push("/roadmap")}
                className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-700 dark:bg-zinc-950 dark:border-zinc-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500"
              >
                Roadmap
              </button>
              <button
                onClick={() => router.push("/feedback")}
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:bg-zinc-950 dark:border-zinc-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500"
              >
                Feedback
              </button>
              <button
                onClick={() => router.push("/changelog")}
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:bg-zinc-950 dark:border-zinc-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500"
              >
                Changelog
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-950 border border-zinc-900 rounded-lg shadow-md mb-6">
            <div className="flex items-center p-6 border-b border-zinc-900 dark:border-zinc-700">
              <img className="mr-4 w-12 h-12 rounded-full" src={post.author_icon} alt={post.author_name} />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{post.title}</h1>
                <div className="flex items-center mt-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    By {post.author_name} on {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : ''}
                  </p>
                  {post.tag && (
                    <span className="ml-2 inline-block rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      {post.tag}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-lg text-gray-900 dark:text-white">{post.content}</p>
            </div>
          </div>

          <section className="dark:bg-zinc-950 border border-zinc-900 rounded-lg shadow-md mb-6 py-12 lg:py-20">
            <div className="max-w-2xl mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                  Discussion
                </h2>
              </div>
              <ul className="space-y-6">
                {comments.map((comment) => (
                  <li key={comment._id} className="p-4 border-b border-gray-300 dark:border-gray-700">
                    <div className="flex items-start mb-4">
                      <img className="mr-4 w-12 h-12 rounded-full" src={comment.author_icon || author_icon} alt={comment.author} />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{comment.author}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{new Date(comment.createdAt).toLocaleDateString()}</p>
                        <p className="mt-2 text-gray-800 dark:text-gray-300">{comment.content}</p>
                      </div>
                      {comment.author === author_name && (
                        <button
                          onClick={() => handleCommentDelete(comment._id)}
                          className="text-sm text-red-600 dark:text-red-500 ml-4"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <form onSubmit={handleCommentSubmit} className="mt-10 space-y-6">
                <textarea
                  rows={5}
                  className="block w-full p-3 text-sm text-gray-900 bg-gray-50 dark:bg-gray-800 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Leave a comment..."
                  value={comment}
                  onChange={handleCommentChange}
                />
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 focus:outline-none"
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