const people = [
  {
    name: "Bugsy",
    role: "Developer",
    imageUrl:
      "/assets/team/bugsy.png",
  },
  {
    name: "Mark",
    role: "Operations Manager",
    imageUrl:
      "/assets/team/mark.png",
  },
  {
    name: "Cloudy",
    role: "Team Leader",
    imageUrl:
      "/assets/team/cloudy.png",
  },
];

export default function Example() {
  return (
    <div className="from-gray-900 to-black py-24 sm:py-16 ">
      <div className="mx-auto grid  gap-20 xl:grid-cols-3">
        <div>
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-100 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            These people have worked hard for their positions and all put in
            significant contribution to Astro Birb.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-300">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-400">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
