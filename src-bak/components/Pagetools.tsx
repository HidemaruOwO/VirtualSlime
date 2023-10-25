import React from "react";

export function Section({ title, content }) {
  return (
    <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
      <h3 className="text-2xl mb-4 font-semibold">{title}</h3>
      <p className="mb-3">{content}</p>
    </div>
  );
}

export function ExternalUrl({ content, url }) {
  return (
    <a
      href={url}
      className="!text-blue-400 hover:!text-blue-500"
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
}
