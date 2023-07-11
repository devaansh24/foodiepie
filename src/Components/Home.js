import React from "react";
import resList from "../datafile";
import Restaurants from "./Restaurants";

const Home = () => {
  return (
    <div className="body">
          <div className="search">Search</div>
          
      <div className="res-container">
        {resList.map((restaurant) => {
          return <Restaurants resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Home;
