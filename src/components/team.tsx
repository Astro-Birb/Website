const people = [
    {
      name: 'Bugsy',
      role: 'Developer',
      imageUrl:
        'https://cdn.discordapp.com/avatars/795743076520820776/0e1af7258171dacfcdfd17274a4b030e.webp?size=1024&width=486&height=486',
    },
    {
        name: "Mark",
        role: 'Operations Manager',
        imageUrl: "https://cdn.discordapp.com/avatars/856971748549197865/d71c92941e69c4889dfc82ed2e320314.webp?size=1024&width=486&height=486"
    },
    {
        name: "Zippy",
        role: 'Community Manager',
        imageUrl: 'https://cdn.discordapp.com/avatars/1125518069482139658/33a409bc5171c00e1ceaef1330851b87.webp?size=1024&width=486&height=486'
    }
  ]
  
  export default function Example() {
    return (
      <div className="from-gray-900 to-black py-24 sm:py-16 ">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-100 sm:text-4xl">
              Meet our leadership
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              These people have worked hard for their positions and all put in significant contribution to Astro Birb.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-300">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-400">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }