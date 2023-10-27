import Post from "./Post";

export default function SearchResults({ results }) {
  if (results.length === 0) return <></>;

  return (
    <div className="absolute right-0 top-20 z-10 w-full rounded-2xl border-4 border-gray-500 bg-white text-black md:right-10 md:w-6/12">
      <div className="p-10">
        <h2 className="mb-3 text-3xl">{results.length} Results</h2>
        {results.map((result, index) => (
          <Post key={index} post={result} compact={true} />
        ))}
      </div>
    </div>
  );
}
