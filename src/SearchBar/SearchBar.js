
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CgMic } from "react-icons/cg";
import "./SearchBar.css";
import SearchResults from "./SearchList";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [results, setResult] = useState([]);
  function FetchData(value) {
    fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states")
      .then((res) => res.json())
      .then((deta) => deta.states)
      .then((states) => {
        const results = states.filter((users) => {
          return users && users.state_name.toLowerCase().includes(value);
        });
        setResult(results);
      });
  }

  function handleChange(value) {
    setInput(value);
    FetchData(value);
  }
  return (
    <div>
        <img src={require("./google.jpg")} height='100px' />
    <div className="searchBar">
      <div className="inputSearchBar">
        <FaSearch id="searchicon" />
        <input
          placeholder="Search or type..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          
        /><CgMic className="mic"/>
      </div>
      <SearchResults results={results} />
    </div></div>
  );
}
