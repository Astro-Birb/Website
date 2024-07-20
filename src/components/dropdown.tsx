import React, { useState, useEffect, useRef } from "react";
//@ts-ignore

interface Role {
  id: number;
  name: string;
}

interface DropdownSearchProps {
  label: string;
  roles: Role[];
  selectedRoles: Role[];
  setSelectedRoles: React.Dispatch<React.SetStateAction<Role[]>>;
}

const DropdownSearch: React.FC<DropdownSearchProps> = ({
  label,
  roles,
  selectedRoles,
  setSelectedRoles,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);
  //@ts-ignore
  const filteredRoles = roles.filter((role) =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //@ts-ignore
  const handleSelectRole = (role) => {
    //@ts-ignore
    if (selectedRoles.some((selectedRole) => selectedRole.id === role.id)) {
      //@ts-ignore
      setSelectedRoles(
        selectedRoles.filter((selectedRole) => selectedRole.id !== role.id)
      );
    } else {
      setSelectedRoles([...selectedRoles, role]);
    }
  };
  //@ts-ignore
  const handleClickOutside = (event) => {
    //@ts-ignore
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
      >
        {selectedRoles.length > 0 ? (
          <div className="flex flex-wrap">
            {selectedRoles.map((role) => (
              <span
                key={role.id}
                className="flex items-center m-1 p-1 bg-zinc-600 text-white text-sm rounded"
              >
                {role.name}
                <button
                  onClick={() => handleSelectRole(role)}
                  className="ml-1 text-white"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        ) : (
          "Select roles"
        )}
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow dark:bg-zinc-800">
          <div className="p-3">
            <label htmlFor="input-group-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search role"
              />
            </div>
          </div>
          <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
            {filteredRoles.map((role) => (
              <li key={role.id}>
                <label className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedRoles.some(
                      (selectedRole) => selectedRole.id === role.id
                    )}
                    onChange={() => handleSelectRole(role)}
                    className="form-checkbox h-4 w-4 text-blue-600 cursor-pointer"
                  />
                  <span className="w-full py-2 ml-2 text-sm font-medium text-zinc-900 rounded dark:text-gray-300">
                    {role.name}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownSearch;
