import React, { useState } from "react";
import "./Navbar.css";
import { IoDocumentText } from "react-icons/io5";
import { MdOutlineLayers } from "react-icons/md";
import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import menu from "../assets/menu-banner.jpg";

const Navbar = () => {
  const [ismenu, setMenu] = useState(false);
  return (
    <div className="border-bottom border-secondary pb-3 d-none d-lg-block ">
      <div className="container mt-3 d-flex gap-3  ">
        <div class="dropdown">
          <button
            data-mdb-button-init
            data-mdb-ripple-init
            data-mdb-dropdown-init
            class="btn btn-success dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            All Daparments
          </button>
          <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton">
            <li>
              <a class="dropdown-item" href="#">
                Dairy
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Snakcs
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                milk
              </a>
            </li>
          </ul>
        </div>

        <div class="dropdown">
          <button
            data-mdb-button-init
            data-mdb-ripple-init
            data-mdb-dropdown-init
            class="btn btn-link dropdown-toggle text-dark no-hover"
            type="button"
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            Home
          </button>
          <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton">
            <li>
              <a class="dropdown-item" href="#">
                Home default
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Home Modern
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Creative
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <button
            data-mdb-button-init
            data-mdb-ripple-init
            data-mdb-dropdown-init
            class="btn btn-link dropdown-toggle text-dark no-hover"
            type="button"
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            shop
          </button>
          <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton">
            <li>
              <a class="dropdown-item" href="#">
                Shop Filter
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Shop wide
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Shop Single
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <button
            data-mdb-button-init
            data-mdb-ripple-init
            data-mdb-dropdown-init
            class="btn btn-link dropdown-toggle text-dark no-hover"
            type="button"
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            store
          </button>
          <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton">
            <li>
              <a class="dropdown-item" href="#">
                Store List
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Store Grid
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Store Single
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <button
            data-mdb-button-init
            data-mdb-ripple-init
            data-mdb-dropdown-init
            class="btn btn-link dropdown-toggle text-dark no-hover"
            type="button"
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
            onMouseEnter={()=>setMenu(true)}
            onMouseLeave={()=>setMenu(false)}
          >
            Mega menu
          </button>
        </div>
        <div class="dropdown ">
          <button
            data-mdb-button-init
            data-mdb-ripple-init
            data-mdb-dropdown-init
            class="btn btn-link text-dark dropdown-toggle no-hover"
            type="button"
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            Pages
          </button>
          <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton">
            <li>
              <a class="dropdown-item" href="#">
                Blog
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Blog Single
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Blog Catagory
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown ">
          <button
            data-mdb-button-init
            data-mdb-ripple-init
            data-mdb-dropdown-init
            class="btn btn-link dropdown-toggle text-dark no-hover"
            type="button"
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            Account
          </button>
          <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton">
            <li>
              <a class="dropdown-item" href="#">
                Sign in
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Sign up
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Forget Password
              </a>
            </li>
            <li>
              <div class="dropend">
                <button
                  data-mdb-button-init
                  data-mdb-ripple-init
                  data-mdb-dropdown-init
                  class="btn btn-link dropdown-toggle text-dark"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  My Account
                </button>
                <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton">
                  <li>
                    <a class="dropdown-item" href="#">
                      Order
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Sittings
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Address
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Payment Method
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <button className="btn btn-link text-dark no-hover">
            Dash Board
          </button>
        </div>

        <div class="dropdown">
          <button
            data-mdb-button-init
            data-mdb-ripple-init
            data-mdb-dropdown-init
            class="btn btn-link dropdown-toggle text-dark no-hover"
            type="button"
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            Docs
          </button>
          <ul class="dropdown-menu mw-50" aria-labelledby="dropdownMenuButton">
            <li>
              <a class="dropdown-item " href="#">
                <div className="d-flex rounded p-2 border">
                  <div>
                    <IoDocumentText className="text-success bi bi-alarm fs-2" />
                  </div>
                  <div>
                    <h5>Documentaion</h5>
                    <p className="text-secondary">
                      Browse the All Documentaion
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <div className="d-flex rounded p-2 border">
                  <div>
                    <MdOutlineLayers className="text-success bi bi-alarm fs-2" />
                  </div>
                  <div>
                    <h5>Changevlog v1.0.0</h5>
                    <p className="text-secondary">
                      Browse the All Documentaion
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {ismenu && (
        <div className="container">
          <div className="row">
            <div className="col-3">
              <MDBListGroup style={{ minWidth: "22rem" }} light>
                <MDBListGroupItem noBorders>Cras justo odio</MDBListGroupItem>
                <MDBListGroupItem noBorders>
                  Dapibus ac facilisis in
                </MDBListGroupItem>
                <MDBListGroupItem noBorders>Morbi leo risus</MDBListGroupItem>
                <MDBListGroupItem noBorders>
                  Porta ac consectetur ac
                </MDBListGroupItem>
                <MDBListGroupItem noBorders>
                  Vestibulum at eros
                </MDBListGroupItem>
              </MDBListGroup>
            </div>
            <div className="col-3">
              <MDBListGroup style={{ minWidth: "22rem" }} light>
                <MDBListGroupItem noBorders>Cras justo odio</MDBListGroupItem>
                <MDBListGroupItem noBorders>
                  Dapibus ac facilisis in
                </MDBListGroupItem>
                <MDBListGroupItem noBorders>Morbi leo risus</MDBListGroupItem>
                <MDBListGroupItem noBorders>
                  Porta ac consectetur ac
                </MDBListGroupItem>
                <MDBListGroupItem noBorders>
                  Vestibulum at eros
                </MDBListGroupItem>
              </MDBListGroup>
            </div>
            <div className="col-3">
              <MDBListGroup style={{ minWidth: "22rem" }} light>
                <MDBListGroupItem noBorders>Cras justo odio</MDBListGroupItem>
                <MDBListGroupItem noBorders>
                  Dapibus ac facilisis in
                </MDBListGroupItem>
                <MDBListGroupItem noBorders>Morbi leo risus</MDBListGroupItem>
                <MDBListGroupItem noBorders>
                  Porta ac consectetur ac
                </MDBListGroupItem>
                <MDBListGroupItem noBorders>
                  Vestibulum at eros
                </MDBListGroupItem>
              </MDBListGroup>
            </div>
            <div className="col-3">
              <img src={menu} className="w-100" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
