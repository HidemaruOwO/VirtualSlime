type Props = {
  category: string;
};

export default function CategoryLabel(props: Props) {
  const colorKey = {
    JavaScript: "yellow",
    CSS: "blue",
    Linux: "black",
  };

  return (
    <div
      className={`px-2 py-1 bg-${
        colorKey[props.category]
      }-600 rounded font-bold text-gray-400 hover:underline`}
    >
      <a href={`/blog/category/${props.category.toLowerCase()}`}>
        {props.category}
      </a>
    </div>
  );
}
