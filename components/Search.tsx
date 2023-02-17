import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import React from "react";

export default function Search() {
   const [searchTerm, setSearchTerm] = useState("");
   const [searchResults, setSearchResults] = useState([]);

   useEffect(() => {
      const getResults = async () => {
         if (searchTerm === "") {
            setSearchResults([]);
         } else {
            const res = await fetch(`/api/search?q=${searchTerm}`);
            const { results } = await res.json();
            setSearchResults(results);
         }
      };

      getResults();
   }, [searchTerm]);

   return (
      <div className="relative bg-gray-900 p-4 h-12">
         <div className="container mx-auto flex items-center justify-center md:justify-end">
            <div className="relative text-gray-600 w-82 bottom-3">
               {/*  
<form>
            <input
              type="search"
              name="search"
              id="search"
              className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-72"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Articles..."
            />

            <FaSearch className="absolute top-0 right-0 text-black mt-3 mr-4" />
          </form>
*/}
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
                     <i className="zmdi zmdi-search search-icon" />
                  </label>
               </form>
            </div>
         </div>

         <SearchResults results={searchResults} />
      </div>
   );
}
