import React, { useState } from 'react'
import "./header.css";
import {images} from "../../contants/images"


function Nav() {
    const [overlay, setOverlay] = useState(false)
    const [selected, setSelected] = React.useState("#")
    function clicked(e) {
      setSelected(e)
    }
    const styles = {
      borderBottom : "2px var(--color-main) solid",
      // color : "var(--color-main)",
      opacity: "1"
    }
    function toggle() {
      setOverlay(true)
    }
    function toggleClose() {
      setOverlay(false)
    }
    const overlayDisplay = {
      animationDirection: overlay ? "normal" : "reverse",
      display: overlay ? "flex" : "none"
    }
    return(
        <nav className='header__nav'>
          <div className='header__nav_logo'>
            <img className='header__nav_logo-img' src={images.logo} alt="" />
            <h1 className='header__nav_logo-h1'>
              perfume
            </h1>
          </div>
          <div className='header__navbar-lg'>
            <ul className='list header__navbar-list'>
              <li className='home'>
                <a style={selected === ("#home" || "#") ? styles : {}} href='#home'  onClick={()=>clicked("#home")}>
                  home
                </a>
              </li>
              <li className='collections'>
                <a style={selected === ("#collections") ? styles : {}} href='#collections'  onClick={()=>clicked("#collections")}>
                  collections
                </a>
              </li>
              <li className='About'>
                <a style={selected === ("#about") ? styles : {}} href='#about'  onClick={()=>clicked("#about")}>
                  About
                </a>
              </li>
              <li className='Contact'>
                <a style={selected === ("#contact") ? styles : {}} href='#contact'  onClick={()=>clicked("#contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className='header__navbar-sm'>
            <div className='header-sm__overlay' style={overlayDisplay} >
              <img src={images.close} alt="" onClick={toggleClose}/>
              <ul className='list'>
                <li className='home'>
                  <a style={selected === ("#home" || "#") ? styles : {}} href='#home'  onClick={()=>clicked("#home")}>
                    home
                  </a>
                </li>
                <li className='collections'>
                  <a style={selected === ("#collections") ? styles : {}} href='#collections'  onClick={()=>clicked("#collections")}>
                    collections
                  </a>
                </li>
                <li className='About'>
                  <a style={selected === ("#about") ? styles : {}} href='#about'  onClick={()=>clicked("#about")}>
                    About
                  </a>
                </li>
                <li className='Contact'>
                  <a style={selected === ("#contact") ? styles : {}} href='#contact'  onClick={()=>clicked("#contact")}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <img className='' src={images.menu} alt="" onClick={toggle} />
          </div>
        </nav>
    )
}
const Header = () => {
  return (
    <header className='header container'>
        <Nav />
    </header>
  )
}

export default Header