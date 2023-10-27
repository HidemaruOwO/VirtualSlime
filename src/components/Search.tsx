import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SearchResults from "./SearchResults.tsx";
import "../styles/search.css";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log("searching...");
    const getResults = async () => {
      if (searchTerm === "") {
        setSearchResults([]);
      } else {
        console.log(searchTerm);
        const res = await fetch(
          `https://api.v-sli.me/v1/posts?q=${searchTerm}`
        );
        const { results } = await res.json();
        console.debug(results);
        setSearchResults(results);
      }
    };

    getResults();
  }, [searchTerm]);

  return (
    <div className="relative h-12 bg-gray-900 p-4">
      <div className="container mx-auto flex items-center justify-center md:justify-end">
        <div className="w-82 relative bottom-3 text-gray-600">
          <form className="search-container">
            <input
              id="search-box"
              type="text"
              className="search-box"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Articles..."
            />
            <label htmlFor="search-box">
              <AiOutlineSearch className="search-icon" />
            </label>
          </form>
        </div>
      </div>

      <SearchResults results={searchResults} />
    </div>
  );
}
