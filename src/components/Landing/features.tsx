import { Hammer } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"

export default function Features (){
    return (
           <div className="flex flex-col gap-20">
            <div className="flex flex-col-reverse lg:flex-row gap-3">
              <Image
                src={"/assets/infractions.png"}
                width={500}
                height={1000}
                alt="idk"
                className=" border-neutral-600/40 border-8 rounded-xl w-[85%]"
              />
              <div className="lg:pl-[2rem] md:pl-0 flex justify-center items-center pb-4 lg:p-0">
                <div className="flex flex-col items-center">
                  <div className=" items-center justify-center space-y-6 ">
                    <div className="flex flex-row space-x-3 space-y-1">
                      <div className="w-10 h-10 bg-neutral-800 border-neutral-700 border-2 rounded-lg flex justify-center items-center text-neutral-300">
                        <Hammer />
                      </div>
                      <h3 className="scroll-m-20 text-2xl font-bold tracking-tight text-center text-neutral-300">
                        Infractions
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-xl">
                      If a staff member is causing issues you can easily run
                      /infract and log their punishment and have automated
                      actions happen to them.
                    </p>
                    <Button className="bg-indigo-500 text-white">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="lg:pr-[2rem] md:pr-0 flex justify-center items-center pb-4 lg:p-0">
                <div className="flex flex-col items-center">
                  <div className="items-center justify-center space-y-6 ">
                    <div className="flex flex-row space-x-3 space-y-1">
                      <div className="w-10 h-10 bg-neutral-800 border-neutral-700 border-2 rounded-lg flex justify-center items-center text-neutral-300">
                        <Hammer />
                      </div>
                      <h3 className="scroll-m-20 text-2xl font-bold tracking-tight text-center text-neutral-300">
                        Staff Panel
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-xl">
                      The staff list is a way of displaying all your staff on an
                      automatically updated list.
                    </p>
                    <Button className="bg-indigo-500 text-white">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
              <Image
                src={"/assets/panel.png"}
                width={500}
                height={1000}
                alt="idk"
                className="border-neutral-600/40 border-8 rounded-xl w-[85%]"
              />
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-3 ">
              <Image
                src={"/assets/quota.png"}
                width={500}
                height={1000}
                alt="idk"
                className=" border-neutral-600/40 border-8 rounded-xl w-[85%]"
              />
              <div className="lg:pl-[2rem] md:pl-0 flex justify-center items-center pb-4 lg:p-0">
                <div className="flex flex-col items-center">
                  <div className="items-center justify-center space-y-6 ">
                    <div className="flex flex-row space-x-3 space-y-1">
                      <div className="w-10 h-10 bg-neutral-800 border-neutral-700 border-2 rounded-lg flex justify-center items-center text-neutral-300">
                        <Hammer />
                      </div>
                      <h3 className="scroll-m-20 text-2xl font-bold tracking-tight text-center text-neutral-300">
                        Message Quota
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-xl">
                      Our system tracks and records each staff member's message
                      count, and the metrics are displayed on a custom staff
                      leaderboard which engages your team and provides timely
                      visibility.
                    </p>
                    <Button className="bg-indigo-500 text-white">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}