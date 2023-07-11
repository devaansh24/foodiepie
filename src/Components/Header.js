import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SupportIcon from "@mui/icons-material/Support";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const Header = () => {
  return (
    <div>
      <div className="nav-items">
        <div className="logo">
          <img
            src="https://img.freepik.com/premium-vector/burger-fast-food-restaurant-mascot-logo-design-template-vector_498048-779.jpg?w=1380"
            alt=""
          />
        </div>
        <ul>
          <li>
            <SearchIcon />
            Search
          </li>
          <li>
            <LocalOfferIcon />
            Offers
          </li>
          <li>
            <SupportIcon />
            Help
          </li>
          <li>
            <PermIdentityIcon />
            Sign In
          </li>
          <li>
            <ShoppingCartIcon />
            Cart
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header