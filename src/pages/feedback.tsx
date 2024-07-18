import { useEffect, useState } from 'react';
import Header from '@/components/header';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export interface Post {
  _id: string;
  title: string;
  content: string;
  author_name: string;
  author_icon: string;
  createdAt: string;
  tag?: string;
}

const Page = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPost, setNewPost] = useState<{ title: string; content: string; tag?: string }>({
    title: '',
    content: '',
    tag: 'Suggestion',
  });
  const [searchQuery, setSearchQuery] = useState('');
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'unauthenticated') {
    router.push('/api/auth/signin');
    return null;
  }

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts/view');
      if (response.ok) {
        const data: Post[] = await response.json();
        setPosts(data);
      } else {
        throw new Error('Failed to fetch posts');
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setNewPost(prevState => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/posts/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      if (response.ok) {
        const newPostData: Post = await response.json();
        setPosts(prevPosts => [newPostData, ...prevPosts]);
        handleCloseModal();
        router.refresh();
      } else {
        throw new Error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission or any default action
    }
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-950 to-neutral-950 border-zinc-900 text-white font-sans">
      <div className="fixed w-full z-10">
        <Header />
      </div>

      <div className="flex-grow pt-24 px-4 md:px-8">
        <div className="flex justify-center mb-0">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => router.push("/roadmap")}
              className="onclickbutton px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-md hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-zinc-950 dark:border-zinc-800 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Roadmap
            </button>
            <button
              onClick={() => router.push("/feedback")}
              className="onclickbutton px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-zinc-950 dark:border-zinc-800 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Feedback
            </button>
            <button
              onClick={() => router.push("/changelog")}
              className="onclickbutton px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-zinc-950 dark:border-zinc-800 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Changelog
            </button>
          </div>
        </div>

        <section className="py-8 antialiased md:py-12">
          <div className="mx-auto max-w-screen-lg px-4 2xl:px-0">
            <div className="lg:flex lg:items-center lg:justify-between lg:gap-4">
              <h2 className="shrink-0 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                Posts ({filteredPosts.length})
              </h2>
              <form className="mt-4 w-full gap-4 sm:flex sm:items-center sm:justify-end lg:mt-0">
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full flex-1 lg:max-w-sm">
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                    <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onKeyDown={handleSearchKeyDown} // Prevent Enter key default behavior
                    className="block w-full rounded-lg border border-gray-300 bg-zinc-400 px-4 py-2.5 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Search Posts"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleOpenModal}
                  className="mt-4 w-full shrink-0 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0 sm:w-auto"
                >
                  Create a Post
                </button>
              </form>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200 dark:divide-gray-800">
                {filteredPosts.map((post) => (
                  <div key={post._id} className="space-y-4 py-6 md:py-8">
                    <div className="grid gap-4">
                      <div>
                        <span className="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                          Posted on {new Date(post.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <a onClick={() => router.push(`/feedback/post/${post._id}`)} className="text-xl font-semibold text-gray-900 hover:underline dark:text-white">
                        {post.title}
                      </a>
                    </div>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      {post.content}
                    </p>
                    <div className="flex items-center gap-2">
                      <img src={post.author_icon} alt={post.author_name} className="h-8 w-8 rounded-full" />
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {post.author_name}
                      </p>
                      {post.tag && (
                        <span className="ml-2 inline-block rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                          {post.tag}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
            <div className="relative w-full max-w-lg p-4 bg-white rounded-lg dark:bg-zinc-900">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Create a Post</h3>
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                  <input
                    type="text"
                    id="title"
                    value={newPost.title}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm dark:border-gray-700 dark:bg-zinc-900 dark:text-white dark:placeholder:text-gray-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Content</label>
                  <textarea
                    id="content"
                    value={newPost.content}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm dark:border-gray-700 dark:bg-zinc-900 dark:text-white dark:placeholder:text-gray-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="tag" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Tag</label>
                  <select
                    id="tag"
                    value={newPost.tag}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm dark:border-gray-700 dark:bg-zinc-900 dark:text-white dark:placeholder:text-gray-400"
                  >
                    <option value="Suggestion">Suggestion</option>
                  </select>
                </div>
                <div className="flex justify-end space-x-2">
                  <button type="button" onClick={handleCloseModal} className="inline-flex items-center rounded-md border border-transparent bg-gray-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-primary-700">
                    Cancel
                  </button>
                  <button type="submit" className="inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:focus:ring-primary-700">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;