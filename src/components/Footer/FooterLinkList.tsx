import Link from "next/link";

import { FooterLinkListProps } from "@models/static/footerSocialList.interface";

const FooterLinkList = ({ listTitle, data }: FooterLinkListProps) => {
  return (
    <div>
      <p className="text-xs text-zinc-500 mb-3">{listTitle}</p>
      <ul>
        {data.map((link) => (
          <li
            key={link.path}
            className="mb-2 last-of-type:mb-0 text-sm text-sky-600 hover:text-red-500 hover:underline"
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkList;
