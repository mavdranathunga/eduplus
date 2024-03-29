import React, { useState } from 'react';

import course1 from "../ui/courseimg1.jpg"
import course2 from "../ui/courseimg2.jpg"
import course3 from "../ui/courseimg3.jpg"
import course4 from "../ui/courseimg4.png"
import course5 from "../ui/courseimg5.jpg"
import offerImg from "../ui/offerimg1.jpg"

import CakeIcon from '@material-ui/icons/Cake';

function Rightbar() {

    const [popularRoadMap, setPopularRoadMap] = useState([
        {
            ID: 1,
            title: "learning how to create beautiful scenes in ilustrator in 60 minutes",
            tutor: {
                ID: 1,
                name: "Lana Marandina",
                username: "@lanamara",
                dp: "https://placeimg.com/100/100/people?tutor-" + 1,
            },
            duration: "82 mins",
            poster: course1
        },

        {
            ID: 2,
            title: "Leaning a beautiful Portrait illustration. Learning new Technics and Tricks",
            tutor: {
                ID: 2,
                name: "David Miller",
                username: "@dmiller",
                dp: "https://placeimg.com/100/100/people?tutor-" + 2,
            },
            duration: "1 hr 26 mins",
            poster: course4
        },

        {
            ID: 3,
            title: "Leaning a beautiful Portrait illustration. Learning new Technics and Tricks",
            tutor: {
                ID: 3,
                name: "David Miller",
                username: "@dmiller",
                dp: "https://placeimg.com/100/100/people?tutor-" + 3,
            },
            duration: "1 hr 26 mins",
            poster: course5
        }
    ]);


    var roadMapList = [];
    for(let i=0; i<popularRoadMap.length; i++){
        roadMapList.push(
            <a href="#" className="course rel" key={"popular-course-" + i }>
                <div className="block" style={{
                    background:"#e2e2e2 url(" + popularRoadMap[i].poster + ") no-repeat center"
                }}>
                    
                    <div className="user abs flex">
                        <div className="pic">
                            <img src={popularRoadMap[i].tutor.dp} className="bl" />
                        </div>
                        <div className="meta rel">
                            <h2 className=" name fontb">{popularRoadMap[i].tutor.name}</h2>
                            <h2 className=" uname fontn">{popularRoadMap[i].tutor.username}</h2>
                        </div>
                    </div>

                    <div className="duration abs">
                        <h2 className="fontb">{popularRoadMap[i].duration}</h2>
                    </div>

                    <div className="course-title abs">
                        <h2 className="fontn">{popularRoadMap[i].title}</h2>
                    </div>

                </div>
            </a>
        )
    }


    return (
        <div className="rightbar rel">

            <div className="section rel">
                 <h2 className="title fontb">Advanced <span className="fontn">Search</span></h2>

                 <div className="search-box rel flex">
                     <input type="text" placeholder="Start writing something..." className="qry fontb" />
                     <button className="go fontb">Find</button>
                 </div>
             </div>

             <div className="section section-b rel">
                 
                 <div className="courses rel flex">
                    <div className="course-a rel flex">
                        {roadMapList[0]}
                    </div>
                    <div className="flex cols">
                        {roadMapList[1]}
                        {roadMapList[2]}
                    </div>
                 </div>
             </div>

             <div className="section section-c rel">
                <h2 className="title fontb">Special <span className="fontn">Offers</span></h2>

                <div className="offer rel flex">
                    <div className="meta">
                        <h2 className="h1 fontb">50 Days Premium</h2>
                        <h2 className="h2 fontn">Get it before 31.11.2021</h2>
                        <button className="getOffer">Learn More...</button>
                    </div>

                    <div className="vector">
                        <CakeIcon style={{ fontSize: 80 }} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Rightbar;
