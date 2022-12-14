import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaViber,
  FaTelegramPlane,
} from "react-icons/fa";

export const socialLinks = [
  {
    id: "1",
    url: "https://www.facebook.com/rozetka.ua",
    icon: <FaFacebookF fontSize={32} style={{ background: "#6977a6" }} />,
  },
  {
    id: "2",
    url: "https://twitter.com/rozetka_ua",
    icon: <FaTwitter fontSize={32} style={{ background: "#89d0fc" }} />,
  },
  {
    id: "3",
    url: "https://www.youtube.com/channel/UCr7r1-z79TYfqS2IPeRR47A",
    icon: <FaYoutube fontSize={32} style={{ background: "#eb2626" }} />,
  },
  {
    id: "4",
    url: "https://www.instagram.com/rozetkaua/",
    icon: (
      <FaInstagram
        fontSize={32}
        style={{
          background:
            "linear-gradient(45deg,#ffb700 14.65%,#ff6800 31.68%,#cb217d 54.72%,#7e00aa 85.35%)",
        }}
      />
    ),
  },
  {
    id: "5",
    url: "https://invite.viber.com/?g2=AQB9mwM%2F5f%2FxJUlMxP4V9flr2%2BvXTC1MpxdGFZ0P6d%2Fs6Ws%2FFe%2FQtLiZwA4E28sj&lang=ru",
    icon: <FaViber fontSize={32} style={{ background: "#8F59BA" }} />,
  },
  {
    id: "6",
    url: "https://t.me/rrozetka",
    icon: <FaTelegramPlane fontSize={32} style={{ background: "#2699d2" }} />,
  },
];
