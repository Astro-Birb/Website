import Header from "@/components/header";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
type RoadmapItem = {
  title: string;
  stage: 'Planned' | 'In Progress' | 'Complete';
  category: string;
};

const Roadmap = () => {
  const [items, setItems] = useState<RoadmapItem[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  //@ts-ignore




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/roadmap");
        const data = await response.json();
        setItems(data); 
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching roadmap data:', error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

      const SkeletonLoader = () => (
        <div role="status" className="max-w-sm animate-pulse mb-44">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        
        
        <span className="sr-only">Loading...</span>
    </div>
  );

  const itms = (stage: 'Planned' | 'In Progress' | 'Complete') => {
    const filteredItems = items.filter(item => item.stage === stage);
    if (filteredItems.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="bg-indigo-500 rounded-full w-16 h-16 flex items-center justify-center mb-4 opacity-70 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-question">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 20l-6 -3l-6 3v-13l6 -3l6 3l6 -3v7.5" />
              <path d="M9 4v13" />
              <path d="M15 7v5.5" />
              <path d="M19 22v.01" />
              <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
            </svg>
          </div>
          <p className="text-gray-500 text-center">Share your feedback and check back here for updates.</p>
        </div>
      );
    }

    return filteredItems.map((item, index) => (
      <div key={index} className="mb-4 p-4 my-4 bg-neutral-950 border border-neutral-900 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold">{item.title}</h2>
          </div>
        </div>
        <p className="text-sm text-gray-600 font-black mb-1 font-mono">{item.category}</p>
      </div>
    ));
  };

  const stageColColor = (stage: 'Planned' | 'In Progress' | 'Complete') => {
    switch (stage) {
      case 'Planned':
        return 'bg-blue-600';
      case 'In Progress':
        return 'bg-yellow-500';
      case 'Complete':
        return 'bg-green-500';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-950 text-white font-sans">
      <div className="fixed w-full z-10">
        <Header />
      </div>

      <main className="flex-grow container mx-auto px-4 py-8 mt-16 overflow-y-auto">
        <div className="flex justify-center mb-4">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => router.push("/roadmap")}
              className="onclickbutton px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-zinc-950 dark:border-zinc-800 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
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
              className="onclickbutton px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-zinc-950 dark:border-zinc-800 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Changelog
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(["Planned", "In Progress", "Complete"] as const).map((stage) => (
            <div
              key={stage}
              className="bg-gradient-to-b from-zinc-950 to-neutral-950 border-zinc-900 border rounded-lg shadow-lg p-6 h-[calc(100vh-200px)] flex flex-col"
            >
              <div className="flex items-center mb-2">
                <span
                  className={`w-3 h-3 rounded-full ${stageColColor(
                    stage
                  )} mr-2`}
                ></span>
                <h2 className="text-lg font-semibold">{stage}</h2>
              </div>
              <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-zinc-800"></hr>
              <div className="flex-grow overflow-y-auto">
                {loading ? <SkeletonLoader /> : itms(stage)}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Roadmap;
