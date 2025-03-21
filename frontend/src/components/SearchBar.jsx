import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 2) {
      fetch(`https://openlibrary.org/search.json?q=${query}`)
        .then((response) => response.json())
        .then((data) =>
          setSuggestions(
            data.docs.map((book) => ({
              id: book.key,
              title: book.title,
              author: book.author_name ? book.author_name.join(", ") : "Unknown",
            }))
          )
        )
        .catch(() => []);
    }
  }, [query]);

  const handleSearchClick = () => {
    if (query.trim()) {
      navigate(`/search-results?query=${query}`);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="search"
        placeholder="Search a book..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
        className="w-full py-2 px-3 bg-gray-200 rounded-sm outline-none text-black placeholder-gray-600"
      />
      <button 
        className="px-6 py-2 bg-red-800 text-white rounded-sm hover:bg-red-900 transition-all font-medium"
        onClick={handleSearchClick}
      >
        Search
      </button>
      {showDropdown && suggestions.length > 0 && (
        <div className="absolute w-full bg-white shadow-lg max-h-60 overflow-y-auto mt-1 rounded-md">
          {suggestions.map((book) => (
            <div 
              key={book.id} 
              className="p-3 cursor-pointer hover:bg-gray-100" 
              onClick={() => window.location.href = `https://openlibrary.org${book.id}`}
            >
              <p className="font-semibold">{book.title}</p>
              <p className="text-sm text-gray-600">by {book.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;