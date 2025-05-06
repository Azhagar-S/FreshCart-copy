import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide_1 from "../assets/slide-1.jpg";
import slide_2 from "../assets/slide-2.jpg";
import { FaArrowRight } from "react-icons/fa6";
import '../components/Slides.css'

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

const Slides = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
  };
  return (
    <div className="container mt-5" style={{ boxSizing: "border-box" }}>
      <Slider {...settings} className=" " >
        <div className=" banner1  d-flex align-items-center flex-column-center ">
           <div  className="m-5  w-25 text-dark w-lg-100 w-75"> 
              <span style={{fontWeight:"700px"}} className="bg-warning p-1 rounded-5">Opening Sale Discount 50% </span>
              <h2 style={{fontWeight:"700px"}} className="mt-5">Free Shipping On Orders Over $500</h2>
              <p>Introduced new model for online Grocery shoping and convenient
              home delivery.</p>
              <button className="btn btn-dark">Show now <FaArrowRight /></button>
           </div>
        </div>
        <div className=" banner2  d-flex align-items-center flex-column-center"  >
           <div  className="m-5  w-lg-100 text-dark w-75"> 
              <span style={{fontWeight:"700px"}} className="bg-warning p-1 rounded-5">Opening Sale Discount 50% </span>
              <h2 style={{fontWeight:"700px"}} className="mt-5">Free Shipping On Orders Over $500</h2>
              <p>Introduced new model for online Grocery shoping and convenient
              home delivery.</p>
              <button className="btn btn-dark">Show now <FaArrowRight /></button>
           </div>
        </div>
      </Slider>
    </div>
  );
};

export default Slides;
