import React from "react";
import { Link } from "react-router-dom";
const Cards = ({ src, title, des }) => {
  return (
    <div className="cars-cards">
      <div
        className="card"
        style={{
          width: "20rem",
          marginBottom: "50px",
          boxShadow: "4px 3px 23px 5px rgba(0,0,0,0.39)",
          borderRadius: "10px",
          height: "400px",
        }}
      >
        <img className="card-img-top" src={src} alt="Card one" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{des}</p>
          <Link to="/listingcars" className="btn btn-primary">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
