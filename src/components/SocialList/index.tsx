import { socialLinks } from "@assets/data/socialLinks";

const SocialList = () => {
  return (
    <ul className="flex">
      {socialLinks.map((social) => (
        <li
          key={social.id}
          className="ml-2 first-of-type:ml-0 rounded-full overflow-hidden text-white [&_svg]:p-2"
        >
          <a href={social.url} target="_blanket">
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
