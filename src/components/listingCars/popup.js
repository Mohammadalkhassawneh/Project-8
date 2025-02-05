import React from "react";
import { useNavigate } from "react-router-dom";
import "./popup.css";
const Popup = (props) => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    let resArr = JSON.parse(localStorage.getItem("reservations"));
    resArr.push(props.res);
    localStorage.setItem("reservations", JSON.stringify(resArr));
    props.setDisabledItem(resArr);
    navigate("/listingcars");
  };
  return (
    <div className="popup-box">
      <div className="box">
        <div className="box-title">
          <h3>Are you sure ? </h3>
        </div>
        <div className="box-illustrate">
          <h6>
            You will not be able to cancel this resrvation, nor reserve this car
            before this reservation ends
          </h6>
        </div>
        <div className="box-btns">
          <button
            className="finalBtn-cancel"
            onClick={() => props.setSubmitted(false)}
          >
            Cancel
          </button>
          <button className="finalBtn" onClick={handleSubmit}>
            Yes, Explore More !
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
