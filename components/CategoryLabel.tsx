import Link from "next/link";
import React from "react";

export default function CategoryLabel({ children }) {
  const colorKey = {
    JavaScript: "yellow",
    CSS: "blue",
    Linux: "black",
  };

  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded `}
    >
      <Link
        href={`/blog/category/${children.toLowerCase()}`}
        legacyBehavior
      >
        {children}
      </Link>
    </div>
  );
}
