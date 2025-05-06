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
import snack from "../assets/category-snack-munchies.jpg";
import tea from "../assets/category-tea-coffee-drinks.jpg";

import banner1 from "../assets/grocery-banner.png";
import banner2 from "../assets/grocery-banner-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../components/Catagories.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBBtn,
} from "mdb-react-ui-kit";

const categories = [
  { title: "Fruits & Vegetables", image: atta },
  { title: "Fruits & Vegetables", image: babyCare },
  { title: "Dairy, Bread & Eggs", image: bakery },
  { title: "Snack & Munchies", image: chicken },
  { title: "Backery & Biscuits", image: cleaning },
  { title: "CoolDrinks", image: cold },
  { title: "Dairy, Bread & eggs", image: dairy },
  { title: "Fruits", image: fruits },
  { title: "Instant Food", image: instant },
  { title: "Pet Food", image: pet },
  { title: "Snacks", image: snack },
  { title: "Tea", image: tea },
];

const Categories = () => {
  return (
    <div>
      <div className="  container">
        <h2 className="text-xl font-semibold mb-4 mt-4">Featured Categories</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
         width={1200}
        
          slidesPerView={6}
          
          loop
          className=""
        >
          {categories.map((cat, index) => (
            <SwiperSlide
              key={index}
              className=" d-flex justify-content-center align-items-center col-3"
              
              
            >
              <div className=" bg-white shadow-md  text-center slide border h-25 mx-2 rounded-5">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-32 object-contain mb-2 img-fluid"
                />
                <p className="text-sm font-medium">{cat.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container mt-5 d-flex gap-4 flex-wrap flex-lg-nowrap">
        
          <div className="col-12 col-lg-6  text-dark  Banner_1 d-flex align-items-end p-4 rounded-6"  style={{fontWeight:"700px"}}>
              <div className="mb-2">
                <h2>Friuts & Vegtbles</h2>
                <p>Get Upto 30% Off</p>
                <button className="btn btn-dark">Shop Now</button>
              </div>
          </div>

          <div className="col-12 col-lg-6  text-dark Banner_2 d-flex align-items-end p-4 rounded-6" style={{fontWeight:"700px"}}>
              <div className="mb-2">
                <h2>Friuts & Vegtbles</h2>
                <p>Get Upto 30% Off</p>
                <button className="btn btn-dark">Shop Now</button>
              </div>
        
         
        </div>
      </div>
    </div>
  );
};

export default Categories;
