import React from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import english from "../assets/english.svg";
import deutsch from "../assets/deutsch.svg";
import SideNavbar from "./SideNavbar";

const TopContent = () => {
  return (
    
    <div className="bg-secondary">
       <SideNavbar />
      <div className="container ">
        <div className="d-flex justify-content-between">
          <div >
            <p>Super Value Deals - Save more with coupons</p>
          </div>
          <div>
          <MDBDropdown>
              <MDBDropdownToggle className="bg-none " color="tertiary">
                <img src={english} />
                <span className="ps-1">English</span>
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link>
                  <img src={english} />
                  <span className="ps-1">English</span>
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  <img src={deutsch} />
                  <span className="ps-1">deutsch</span>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default TopContent;
