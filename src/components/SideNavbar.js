import React, { useState } from 'react'
import logo from '../assets/freshcart-logo.svg'
import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import '../components/SlideNavbar.css'

const SideNavbar = ({hambuger , setHamburger}) => {
    const [isclick , setClick] = useState(false)
  return (
    <div className='bg-white'>
        <div className='container '>
            <div className='d-flex justify-content-between p-3'> <img src={logo}/>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" d="m6 6l12 12m0-12L6 18" stroke-width="1" onClick={()=>setHamburger(!hambuger)}/></svg>
            </div>
           <div className='border d-flex justify-content-between m-3 rounded-4 p-1'>
           <input type='text' className='outline-none border-0 ps-3' placeholder='search for holders'/>
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0" /></svg>
           </div>

           <button className='btn btn-success col-12 ' onClick={()=>setClick(!isclick)}>All  Deparments</button>
           {isclick && <MDBListGroup style={{ minWidth: "22rem" }}className='alldeparments_details' light>
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
              </MDBListGroup>}
        </div>

        <div className='container'>
        <div class="dropdown d-flex justify-content-between">
          <button
            data-mdb-button-init
            data-mdb-ripple-init
            data-mdb-dropdown-init
            class="btn btn-link  text-dark no-hover"
            type="button"
            id="dropdownMenuButton"
            
            aria-expanded="false"
          >
            Home
          </button>
          <div className='dropdown-toggle'></div>
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
        <div class="dropdown d-flex justify-content-between">
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
          <div className='dropdown-toggle'></div>
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
        <div class="dropdown d-flex justify-content-between">
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
          <div className='dropdown-toggle'></div>
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
        </div>
    </div>
  )
}

export default SideNavbar