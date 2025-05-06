import React from 'react'
import TopContent from './TopContent'
import Logodiv from './Logodiv'
import Navbar from './Navbar'

const Header = ({hambuger , setHamburger}) => {
  return (
    <div >
        <TopContent />
        <Logodiv hambuger={hambuger} setHamburger={setHamburger}/>
        <Navbar />
    </div>
  )
}

export default Header