import React from "react";
import { useRouter } from "next/router";

type Props = {
  title: string;
};

export default function SnsButtons({ title }: Props) {
  type Site = {
    name: string;
    url: string;
  };
  const sites: Site[] = [
    { name: "twitter", url: "https://twitter.com/intent/tweet?url=" },
    { name: "facebook", url: "https://www.facebook.com/sharer/sharer.php?u=" },
    { name: "line", url: "https://social-plugins.line.me/lineit/share?url=" },
  ];

  const router = useRouter();
  const url = "https://v-sli.me" + router.asPath;

  return (
    <div className="menu-button">
      <i className="zmdi zmdi-share"></i>
      <a href={sites[0].url + title + "\n" + url}>
        <i className="zmdi zmdi-twitter"></i>
      </a>
      <a href={sites[1].url + title + "\n" + url}>
        <i className="zmdi zmdi-facebook"></i>
      </a>
      <a href={sites[2].url + url}>
        <i className="icon-line"></i>{" "}
      </a>
    </div>
  );
}
