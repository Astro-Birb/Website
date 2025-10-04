"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { signOut } from "~/auth";
import { UserAvatar } from "./user-avatar";

type UserMenuProps = {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
};

// what the fuck :Sob:

export function UserMenu({ user }: UserMenuProps) {
  if (!user) return null;

  const displayName = user.name || user.email || "User";

  return (
    <Menu as="div" className="relative inline-block text-left z-10">
      <div>
        <Menu.Button className="inline-flex w-full justify-center items-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <UserAvatar user={user} className="w-8 h-8 mr-2" />
          {displayName}
          <ChevronDownIcon
            className="ml-2 h-5 w-5 text-white"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-lg bg-gray-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-2 py-2">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/api/auth/signout"
                  className={`${
                    active ? "bg-gray-800 text-white" : "text-gray-300"
                  } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                >
                  Sign Out
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/servers"
                  className={`${
                    active ? "bg-gray-800 text-white" : "text-gray-300"
                  } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                >
                  Servers
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
