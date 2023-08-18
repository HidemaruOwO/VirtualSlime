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
    { name: "misskey", url: "https://misskeyshare.link/share.html?text=" },
  ];

  const router = useRouter();
  const url = "https://v-sli.me" + router.asPath;

  return (
    <a className="menu-button">
      <i className="zmdi zmdi-share"></i>
      <a
        href={sites[0].url + title + "\n" + url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="zmdi zmdi-twitter"></i>
      </a>
      <a
        href={sites[1].url + title + "\n" + url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="zmdi zmdi-facebook"></i>
      </a>
      <a href={sites[2].url + url} target="_blank" rel="noopener noreferrer">
        <i className="icon-line"></i>
      </a>
      <a
        href={sites[3].url + title + "\n" + url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="relative mx-auto"
          style={{ width: 66 + "px", height: 66 + "px" }}
        >
          <div className="text-center m-auto absolute inset-x-0 inset-y-0 w-12 h-12">
            <img width={32} height={32} src="/images/misskey-logo.svg" />
          </div>
        </div>
      </a>
    </a>
  );
}
