import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ContactUs from "./components/contactUs/Contactus";
import Listingcars from "./components/listingCars/Listingcars";
import BookingForm from "./components/listingCars/BookingForm";
import carsData from "./components/listingCars/carsData";
import Signup from "./components/registration/Signup";
import Login from "./components/registration/Login";
import Landingpage from "./components/landingpage/Landingpage";
import Footer from "./components/footer/Footer";
import Aboutus from "./components/aboutUs/Aboutus";
import User from "./components/userprofile/User";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import { useState, useEffect } from "react";
function App() {
  const [logged, setLogged] = useState(localStorage.getItem("logged_user"));

  const [submitted, setSubmitted] = useState(
    localStorage.getItem("logged_user")
  );

  const [cars_Data, setData] = useState(carsData);

  const [disabledItem, setDisabledItem] = useState(
    JSON.parse(localStorage.getItem("reservations"))
  );

  const toggleVisibility = () => {
    let jump = document.querySelector(".jump");
    if (window.scrollY > 200) {
      jump.style.display = "";
    } else {
      jump.style.display = "none";
    }
  };

  const arrowUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="jump" style={{ display: "none" }}>
          <button onClick={arrowUp}>
            <i className="fa-solid fa-arrow-up" />
          </button>
        </div>
        <ScrollToTop />
        <Navbar
          logged={logged}
          setLogged={setLogged}
          submitted={submitted}
          setSubmitted={setSubmitted}
        />
        <div className="routes-div">
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route
              path="/listingcars"
              element={
                <Listingcars disabledItem={disabledItem} cars={cars_Data} />
              }
            />
            <Route
              path="/bookingForm/:id"
              element={
                <BookingForm
                  setDisabledItem={setDisabledItem}
                  cars={cars_Data}
                />
              }
            />
            <Route
              path="/Login"
              element={
                <Login setLogged={setLogged} setSubmitted={setSubmitted} />
              }
            />
            <Route
              path="/signup"
              element={
                <Signup setSubmitted={setSubmitted} setLogged={setLogged} />
              }
            />
            <Route path="/user" element={<User />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
