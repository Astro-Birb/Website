import Header from "@/components/header";
import { useState } from "react";
import { useRouter } from "next/navigation";

type ChangeLogItem = {
  date: string;
  version: string;
  changes: string[];
};

const Changelogdata: ChangeLogItem[] = [
  {
    date: "21-07-24",
    version: "3.0",
    changes: ["Added staff lists module"]
  },    
  {
    date: "21-07-24",
    version: "2.9.7",
    changes: ["You can extend your loas in /loa manage", "You can now plan loas before hand using the optional start argument"]
  },

  {
    date: "19-07-24",
    version: "2.9.3",
    changes: [
      "Documentation updated",
      "Road map & Change log added",
      "Online suggestions!",
    ],
  },
  {
    date: "19-07-24",
    version: "2.9.4",
    changes: ["Bug fixes and performance improvements", "UI enhancements"],
  },
  {
    date: "20-07-24",
    version: "2.9.5",
    changes: ["/mass promotion - You can now mass promote people.", "You now do anonymous modmail with /modmail reply.", "Added notes to /suspend."],
  },

];

const Changelog = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const SkeletonLoader = () => (
    <div role="status" className="max-w-sm animate-pulse mb-44">
      <div className="bg-gray-300 dark:bg-gray-700 h-48 rounded-lg"></div>
    </div>
  );

  const renderChangelog = () => {
    if (Changelogdata.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="bg-indigo-500 rounded-full w-16 h-16 flex items-center justify-center mb-4 opacity-70 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icon-tabler-map-question"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 20l-6 -3l-6 3v-13l6 -3l6 3l6 -3v7.5" />
              <path d="M9 4v13" />
              <path d="M15 7v5.5" />
              <path d="M19 22v.01" />
              <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
            </svg>
          </div>
          <p className="text-gray-500 text-center">
            No updates found in the changelog.
          </p>
        </div>
      );
    }

    return (
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {Changelogdata.map((item, index) => (
          <li key={index} className="relative mb-8">
            <div className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icon-tabler-edit"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                <path d="M16 5l3 3" />
              </svg>
            </div>
            <div className="ml-12">
              <h3 className="text-xl font-semibold">{item.version}</h3>
              <span className="text-gray-500">{item.date}</span>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                {item.changes.map((change, idx) => (
                  <li key={idx}>{change}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-950 text-white font-sans">
      <div className="fixed w-full z-10">
        <Header />
      </div>

      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <div className="max-w-4xl mx-auto">
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
          <h1 className="text-3xl font-semibold mb-8">Changelog</h1>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-zinc-800" />
          {loading ? <SkeletonLoader /> : renderChangelog()}
        </div>
      </main>
    </div>
  );
};

export default Changelog;
