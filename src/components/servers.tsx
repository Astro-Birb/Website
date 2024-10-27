import React from "react";

const servers = [
  {
    name: "Florida State Roleplay",
    members: "17,000",
    logo: "https://cdn.discordapp.com/icons/1036752281858744410/619f5c96b200a0881119e591925d0dd9.webp?size=1024&width=486&height=486",
  },
  {
    name: "Soundboard Hub",
    members: "22,000",
    logo: "https://cdn.discordapp.com/icons/1148053174247243776/dbbd0e204d54c054d5700dbb8bdcc63f.webp?size=1024",
  },
  {
    name: "Broward County Roleplay",
    members: "13,000",
    logo: "https://cdn.discordapp.com/icons/1026286407997722705/facb17316bbbcb6b3515f59790885ac2.webp?size=1024&width=486&height=486",
  },
  {
    name: "ERM Systems",
    members: "3,000",
    logo: "https://cdn.discordapp.com/icons/987798554972143728/1d4ffdb407b2454c41a1129418fd0891.webp?size=1024&width=486&height=486",
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
