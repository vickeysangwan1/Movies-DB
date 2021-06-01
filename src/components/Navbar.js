import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <section className="navbar">
      <nav>
        <div className="nav-container">
          <div className="icon">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
              alt="TMDB"
            />
          </div>
          <ul className="nav-links">
            <li>movies</li>
            <li>tv shows</li>
          </ul>
        </div>

        <form className="search-form">
          <input type="text" placeholder="Search for movies and tv shows...." />
        </form>
      </nav>
    </section>
  );
};

export default Navbar;
