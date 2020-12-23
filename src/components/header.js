import React from "react";
import logo from "./logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} />
      </Link>

      <div className="header__search">
        <input className="header__search__searchInput" type="text" />
        <SearchIcon className="header__search__searchIcon" />
      </div>

      <div className="header__nav active">
        <Link to={(!user && "/login") || "/"}>
          <div className="header__nav__option" onClick={handleAuthentication}>
            <span className="header__nav__option__optionLineOne">
              Hello {!user ? "Guest" : user?.email.split("@")[0]}
            </span>
            <span className="header__nav__option__optionLineTwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__nav__option">
            <span className="header__nav__option__optionLineOne">Returns</span>
            <span className="header__nav__option__optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* <div className="header__nav__option">
          <span className="header__nav__option__optionLineOne">Your</span>
          <span className="header__nav__option__optionLineTwo">Prime</span>
        </div> */}
        <Link to="/checkout">
          <div className="header__nav__optionBasket header__nav__option">
            <ShoppingBasketIcon />
            <span className="header__nav__optionBasket__optionLineTwo header__nav__optionBasket__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>

      {isMobile() && (
        <p className="header__icon" onClick={() => myFunction()}>
          <MenuIcon />
        </p>
      )}
    </div>
  );
};

function myFunction() {
  var x = document.querySelector(".active");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function isMobile() {
  return window.innerWidth < 600 ? true : false;
}

export default Header;
