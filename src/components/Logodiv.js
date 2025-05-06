import React, { useContext } from 'react'
import { FaHeart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { IoSearchSharp } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

import freshcart from '../assets/freshcart-logo.svg'
const Logodiv = ({hambuger , setHamburger}) => {
  
  return (
    <div className='container d-flex justify-content-between mt-3' >
       <div className='d-flex gap-3'>
            <span className='me-4'>
                <img src={freshcart}/>
            </span>
            <div className='border border-dark d-flex justify-content-between d-none d-lg-block'>
                <input type='text' className='border-0 ps-3 ' placeholder='Search for products'/>
                <IoSearchSharp className='m-2'/>
            </div>
            <div className='border border-dark rounded-3 p-2 d-none d-lg-block'>
                <IoLocationOutline /> <span>Location</span>
        </div>
    </div>

       <div className='d-flex gap-3'>
         
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047a9.005 9.005 0 0 1 5.9 8.181a.75.75 0 1 1-1.499.044a7.5 7.5 0 0 0-14.993 0a.75.75 0 0 1-1.5-.045a9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5M8 8a4 4 0 1 0 8 0a4 4 0 0 0-8 0"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M6 3.586A2 2 0 0 1 7.414 3h9.172A2 2 0 0 1 18 3.586L20.414 6A2 2 0 0 1 21 7.414V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7.414A2 2 0 0 1 3.586 6zM16.586 5H7.414l-2 2h13.172zM10 12a1 1 0 1 0-2 0a4 4 0 0 0 8 0a1 1 0 1 0-2 0a2 2 0 1 1-4 0"/></g></svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 15.61L19.59 17l-5.01-5l5.01-5L21 8.39L17.44 12zM3 6h13v2H3zm0 7v-2h10v2zm0 5v-2h13v2z" className='d-lg-none' onClick={()=>setHamburger(!hambuger)}/></svg>
       </div>
       
    </div>
  )
}

export default Logodiv