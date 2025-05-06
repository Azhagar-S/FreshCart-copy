import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import "../components/Products.css";

import atta from "../assets/category-atta-rice-dal.jpg";
import babyCare from "../assets/category-baby-care.jpg";
import bakery from "../assets/category-bakery-biscuits.jpg";
import chicken from "../assets/category-chicken-meat-fish.jpg";
import cleaning from "../assets/category-cleaning-essentials.jpg";
import cold from "../assets/category-cold-drinks-juices.jpg";
import dairy from "../assets/category-dairy-bread-eggs.jpg";
import fruits from "../assets/category-fruits-vegetables.jpg";
import instant from "../assets/category-instant-food.jpg";
import pet from "../assets/category-pet-care.jpg";

const Products = () => {
  const products = [
    {
      title: "Fruits & Vegetables",
      image: atta,
      foodName: "Haldiram's Sev Bhujia",
      price: "$35",
    },
    {
      title: "Fruits & Vegetables",
      image: babyCare,
      foodName: "NutriChoice Digestive",
      price: "$35",
    },
    {
      title: "Dairy, Bread & Eggs",
      image: bakery,
      foodName: "Blueberry Greek Yogurt",
      price: "$35",
    },
    {
      title: "Snack & Munchies",
      image: chicken,
      foodName: "Britannia Cheese Slices",
      price: "$35",
    },
    {
      title: "Backery & Biscuits",
      image: cleaning,
      foodName: "Kellogg's Original Cereals",
      price: "$35",
    },
    {
      title: "CoolDrinks",
      image: cold,
      foodName: "NutriChoice Digestive",
      price: "$35",
    },
    {
      title: "Dairy, Bread & eggs",
      image: dairy,
      foodName: "Slurrp Millet Chocolate",
      price: "$35",
    },
    {
      title: "Fruits",
      image: fruits,
      foodName: "Amul Butter - 500 g, ",
      price: "$35",
    },
    {
      title: "Instant Food",
      image: instant,
      foodName: "NutriChoice Digestive",
      price: "$35",
    },
    {
      title: "Pet Food",
      image: pet,
      foodName: "Slurrp Millet Chocolate",
      price: "$35",
    },
  ];
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Popular Products</h2>
      <div className=" row">
        {products.map((data, index) => (
          <div className="col-xxl-3  mb-3  col-md-6 col-6">
            <MDBCard key={index} className="item bg-white">
              <div
                className="text-start text-white"
                style={{ fontSize: "10.5px" }}
              >
                <p
                  className="d-inline text-start rounded p-1 "
                  style={{ backgroundColor: "red" }}
                >
                  sale
                </p>
                <div className="mt-2">
                  <p
                    className="d-inline bg-warning text-start rounded p-1 "
                    style={{ backgroundColor: "yellow" }}
                  >
                    10%
                  </p>
                </div>
              </div>
              <MDBCardImage
                src={data.image}
                alt="..."
                className="w-50  col-2 img-fluid mx-auto"
                style={{height:"38%"}}
              />
              <MDBCardBody className="p-0 mt-2">
                <MDBCardTitle style={{fontSize:"12.25px"}}>{data.foodName}</MDBCardTitle>
                <MDBCardText style={{fontSize:'14px',fontWeight:"700px"}}>{data.title}</MDBCardText>
                <div className="d-flex justify-content-between w-100 mb-3" style={{height:"30px"}}>
                  <p className="fw-bold align-self-start">{data.price}</p>
                  <button className="btn btn-success px-2 py-0" style={{fontSize:"12.25px"}}>Shop Now</button>
                </div>
              </MDBCardBody>
            </MDBCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
