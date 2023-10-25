import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Skeleton from "react-loading-skeleton";

const CodeBlock = ({ inline, className, children }) => {
  if (inline) {
    return <code className={className}>{children}</code>;
  }
  const match = /language-(\w+)/.exec(className || "");
  const lang = match && match[1] ? match[1] : "";
  if (lang === "twitter") {
    return (
      <TwitterTweetEmbed
        tweetId={String(children).replace(/\n$/, "")}
        placeholder={<Skeleton height={300} />}
      />
    );
  }
  return (
    <SyntaxHighlighter
      style={okaidia}
      language={lang}
      children={String(children).replace(/\n$/, "")}
    />
  );
};

export default CodeBlock;
