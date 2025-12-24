import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Optional icon
import './search.css'

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
    // handleSearch() //allow this to automatically bring out search results
    setQuery()  //or choose this to type item then press enter
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="search-input"
        style={{fontFamily:'Libre Baskerville'}}
      />
      <button onClick={handleSearch} className="search-button">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;