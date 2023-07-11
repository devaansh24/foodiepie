import React, { useState } from "react";
import resList from "../datafile";
import Restaurants from "./Restaurants";
import "./Home.css"

const Home = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = resList.filter((item, index) => {
    const currentName = item.data.name.toLowerCase();
    const searchTerm = search.toLowerCase();
    const isDuplicate = resList.findIndex(
      (res, idx) => res.data.name.toLowerCase() === currentName && idx < index
    );
    return currentName.includes(searchTerm) && isDuplicate === -1;
  });

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search restaurants..."
        />
      </div>

      <div className="res-container">
        {filteredData.map((restaurant) => (
          <Restaurants key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Home;
