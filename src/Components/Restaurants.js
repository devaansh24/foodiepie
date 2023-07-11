import React from "react";
import "./Restaurants.css";
import resList from "../datafile";
import StarIcon from "@mui/icons-material/Star";
const Restaurants = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.data;
  return (
    <div className="res-card" >
      <img
        className="image-body"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
          cloudinaryImageId
        }
        alt="res"
      />
      <div className="card__data1">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
      </div>
      <div className="card__data2">
        <StarIcon />
        <h4>{avgRating}</h4>
        <h4>{costForTwo / 100} for two</h4>

        <h4>{deliveryTime+" mins"}</h4>
      </div>
    </div>
  );
};

export default Restaurants;
