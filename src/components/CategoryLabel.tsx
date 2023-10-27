export default function CategoryLabel({ children }) {
  const colorKey = {
    JavaScript: "yellow",
    CSS: "blue",
    Linux: "black",
  };

  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]}-600 rounded font-bold text-gray-400 hover:underline`}
    >
      <a href={`/blog/category/${children.toLowerCase()}`} legacyBehavior>
        {children}
      </a>
    </div>
  );
}
