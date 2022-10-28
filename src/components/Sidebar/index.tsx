import Link from "next/link";

import { sidebarData } from "@assets/data/sidebarData";

const Sidebar = () => {
  return (
    <div className="pr-10 border-r border-r-zinc-300">
      <ul>
        {sidebarData.map((link) => (
          <li
            key={link.path}
            className="mb-2 last-of-type:mb-0 text-sm text-sky-600 hover:text-red-500 hover:underline"
          >
            <Link href={link.path} passHref>
              <a className="flex items-center [&_svg]:mr-2">
                {link.icon}
                {link.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
