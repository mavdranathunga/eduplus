import React, { useState } from 'react';
import logo from '../ui/logo-udemy.svg';


import { NavLink } from "react-router-dom";



//ui--------------------------------------------------------------
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import BatteryChargingFullRoundedIcon from '@material-ui/icons/BatteryChargingFullRounded';
import { green, red } from '@material-ui/core/colors';



function Sidebar(){

    const [nav, setNav] = useState([
        {label: "Home", slug: "/", icon: <HomeIcon color="disabled"/> },
        {label: "Discover", slug: "discover", icon: <SearchIcon color="disabled"/> },
        {label: "Categories", slug: "cates", icon: <LocalOfferIcon color="disabled"/> },
        {label: "My Courses", slug: "my-courses", icon: <ImportContactsRoundedIcon color="disabled"/> },
    ])

    const [currentPage, setCurrentPage] = useState("/");


    var navigation = [];
    for(let i=0; i< nav.length; i++){
        navigation.push(
            <li key={"nav-" + i + "-" + nav[i].slug}>
                <NavLink to={nav[i].slug} className="link noul flex">
                    {nav[i].icon}
                    <h2 className="lbl">{nav[i].label}</h2>
                </NavLink>
            </li>
        );
    }
    return (
        <div className="sidebar">

            <a href="/" className="noul"><h2 className="logo-name"> EDUPlus+</h2></a>
            
            {/** 
            <a href="/" className="logo bl">
                <img src={logo} className="logo-img bl" />
            </a>
            */}
            <ul className="nav">
                {navigation}
            </ul>

            <div className="updated-course flex">
                <WbIncandescentOutlinedIcon className="icon" style={{ fontSize: 35 }} />
                <div className="lbl">
                    Updated courses
                    <h2>by Deshan Ranathunga</h2>
                </div>
            </div>

            <div className="stats flex">

                <div className="stat-box flex">
                    <VerifiedUserOutlinedIcon className="icon" style={{ fontSize: 28 }, { color: 'green' }} />
                    <h2 className="val">1800</h2>
                    <h2 className="lbl">Points</h2>
                </div>
                <div className="stat-box flex">
                    <BatteryChargingFullRoundedIcon className="icon" style={{ fontSize: 28 } , { color: 'red' }}/>
                    <h2 className="val">45.5</h2>
                    <h2 className="lbl">Complete</h2>
                </div>

            </div>

            <div className="me flex">
                 <div className="photo">
                    <img src="https://placeimg.com/100/100/people" className="bl"/>
                </div>
                <div className="name">
                    MAVD Ranathunga
                    <h2 className="uname">@deshan1211</h2>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;