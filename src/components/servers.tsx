import React from "react";

const servers = [
  {
    name: "Florida State Roleplay",
    members: "17,000",
    logo: "/assets/servers/fsrp.png",
  },
  {
    name: "Soundboard Hub",
    members: "22,000",
    logo: "/assets/servers/soundhub.png",
  },
  {
    name: "Broward County Roleplay",
    members: "13,000",
    logo: "/assets/servers/broward.png",
  },
  {
    name: "ERM Systems",
    members: "3,000",
    logo: "/assets/servers/erm.png",
  },
];

const TrustedServers = () => {
  return (
    <div className=" text-white mt-32">
      <h3 className="text-center text-gray-400 mb-5 text-sm uppercase">
        Trusted by over <span className="font-bold">6,000</span> Discord servers
      </h3>
      <div className="flex justify-center space-x-8">
        {servers.map((server, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2"
          >
            <img
              src={server.logo}
              alt={server.name}
              className="h-10 w-10 object-cover rounded-full border border-gray-700"
            />
            <p className="text-sm font-semibold">{server.name}</p>
            <p className="text-xs text-gray-400">{server.members} Members</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedServers;
