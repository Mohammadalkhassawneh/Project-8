import React from "react";
import "./ListingCars.css";
import { useNavigate } from "react-router-dom";

function CarItem(props) {
  let navigate = useNavigate();
  let logged = localStorage.getItem("logged_user");
  let { carsData, blocked } = props;
  return (
    <div className="subject-item">
      <div className="subject-container">
        <div className="img">
          <img src={`subject/${carsData.src}`} alt="subject" />
        </div>
        <div className="text">
          <h3>
            Subject: <b>{carsData.title}</b>
          </h3>
          <h4>
            Teacher: <b>{carsData.ins}</b>
          </h4>
          <p className="price">
            Price: <b>{carsData.price} JD /per season</b>
          </p>
          <p className="time">
            Date: <b>{carsData.time} /</b> <b>{carsData.time2} </b>
          </p>
          <p className="available">
            Status: <b>Available</b>{" "}
          </p>
          <button
            disabled={blocked === "yes" && logged ? "disabled" : ""}
            className={blocked === "yes" && logged ? "btn disabled" : "btn"}
            onClick={() => {
              logged
                ? navigate(`/bookingForm/${carsData.id}`)
                : sessionStorage.setItem("from", "listing") ||
                  navigate("/Login");
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarItem;
