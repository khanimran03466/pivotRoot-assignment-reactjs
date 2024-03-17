import React, { useState } from 'react';

import indianFlagIcon from "/images/flag-icon.jpg";
import { GoPerson } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";
import { BiSearch } from "react-icons/bi";




const Header = () => {

const [active, setActive] = useState(false);

const activeNav = () => {
    setActive(!active);
}
  return (
    <header className='container'>
        
        <div className="header-top">
            <div className="header-top-left">
                <ul>
                    <li> <a href="#"> New </a> </li>
                    <li> <a href="#"> Pre-Owned </a> </li>
                </ul>
            </div>
            <div className="header-top-right icons">
                <button> Sell with us </button>
                <ul>
                    <li> <a href="#"> <img src={indianFlagIcon} alt="" />  </a> </li>
                    <li> <a href="#"> <GoPerson /> </a> </li>
                    <li> <a href="#"> <IoHeartOutline /> </a> </li>
                    <li> <a href="#"> <SlHandbag /> </a> </li>
                </ul>
            </div>
        </div>
        <div className="header-bottom">
            <div className="header-bottom-left">
                <nav className={`${active? "active":""}`}>
                    <ul onClick={activeNav}>
                        <li> <a href="#"> Just In </a> </li>
                        <li> <a href="#"> Brand </a> </li>
                        <li> <a href="#"> Women </a> </li>
                        <li> <a href="#"> Men </a> </li>
                        <li> <a href="#"> Kids </a> </li>
                        <li> <a href="#" className='active'> Watches </a> </li>
                        <li> <a href="#" > Jewellery </a> </li>
                        <li> <a href="#" > Home </a> </li>
                    </ul>
                </nav>
            </div>
            <div className="header-bottom-right">
                <div class={`hamburger ${active? "active":""}`} onClick={activeNav}>
                    <div class="toggle-buton"></div>
                </div>
                <div className="search-input-wrraper">
                    <input type="text" placeholder='What are you looking for' />
                    <BiSearch />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header