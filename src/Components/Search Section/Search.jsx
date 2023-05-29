import "./Search.css";
import { useState, useEffect } from "react";
import Output from "../Output Section/Output";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = "849ab1ae3061bace28cb4bb138c26442";
  

  useEffect(() => {
    const fetchData = async () => {
      if (search.trim() === "") {
        return; // Don't make the request if search is empty
      }

      try {
        const response = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${search},&appid=${apiKey}`
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setSearchResults(data);
        } else {
          console.log("Request failed:", response.status);
          setSearchResults([]);
        }
      } catch (error) {
        console.log("Error:", error);
        setSearchResults([]);
      }
    };

    fetchData();
  }, [search, apiKey]);

  const getInput = (e) => {
    e.preventDefault();
    setSearch(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim === "") {
      alert("Please enter an area for the weather");
    } else {
      setSearchResults([]);
      setSearch(search);
    }
  };

  return (
    <>
      <div className="search-section">
        <h2>Enter your area to view the weather!</h2>
        <div className="search-container">
          <input
            placeholder="Enter your area..."
            value={search}
            onChange={getInput}
          ></input>
          <button onClick={handleSubmit}>Search</button>
        </div>
      </div>
      {searchResults.length > 0 && (
        <Output area={search} results={searchResults} />
      )}
    </>
  );
};

export default Search;
