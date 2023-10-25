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
      className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-400 font-bold rounded hover:underline`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`} legacyBehavior>
        {children}
      </Link>
    </div>
  );
}
