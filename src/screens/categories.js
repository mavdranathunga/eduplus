import React, { useState, useEffect } from 'react'

import course1 from "../ui/courseimg1.jpg"
import course2 from "../ui/courseimg2.jpg"
import course3 from "../ui/courseimg3.jpg"
import course4 from "../ui/courseimg4.png"
import course5 from "../ui/courseimg5.jpg"
import roadmap1 from "../ui/roadmapimg1.jpg"
import roadmap2 from "../ui/roadmap2.png"
import roadmap3 from "../ui/roadmap3.jpg"
import roadmap4 from "../ui/roadmap4.jpg"

import { NavLink } from "react-router-dom";

function CategoriesPage() {

    useEffect(()=>{
        document.title = "Categories"
    })

    const [popularCourse, setPopularCourse] = useState([
        {
            ID: 1,
            titleBrief: "Illustrator Full Course",
            title: "learning how to create beautiful scenes in ilustrator in 60 minutes",
            tutor: {
                ID: 1,
                name: "Lana Marandina",
                username: "@lanamara",
                dp: "https://placeimg.com/100/100/people?tutor-" + 1,
            },
            duration: "82 mins",
            poster: course3
        },

        {
            ID: 2,
            titleBrief: "Illustrator Full Course",
            title: "Leaning a beautiful Portrait illustration. Learning new Technics and Tricks",
            tutor: {
                ID: 2,
                name: "David Miller",
                username: "@dmiller",
                dp: "https://placeimg.com/100/100/people?tutor-" + 2,
            },
            duration: "1 hr 26 mins",
            poster: course2
        },

        {
            ID: 3,
            titleBrief: "Illustrator Full Course",
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
            ID: 4,
            titleBrief: "Illustrator Full Course",
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
            ID: 5,
            titleBrief: "Illustrator Full Course",
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

    var courseList = [];
    for(let i=0; i<popularCourse.length; i++){
        courseList.push(
            <NavLink to={"/course/" + popularCourse[i].ID} className="course rel" key={"popular-course-" + i }>
                <div className="block" style={{ background:"#e2e2e2 url(" + popularCourse[i].poster + ") no-repeat center"}}>
                    
                    <div className="user abs flex">
                        <div className="pic">
                            <img src={popularCourse[i].tutor.dp} className="bl" />
                        </div>
                        <div className="meta rel">
                            <h2 className=" name fontb">{popularCourse[i].tutor.name}</h2>
                            <h2 className=" uname fontn">{popularCourse[i].tutor.username}</h2>
                        </div>
                    </div>

                    <div className="duration abs">
                        <h2 className="fontb">{popularCourse[i].duration}</h2>
                    </div>

                    <div className="course-title abs">
                        <h2 className="fontn">{popularCourse[i].titleBrief}</h2>
                    </div>

                </div>
            </NavLink>
        )
    }

    const [popularRoadMap, setPopularRoadMap] = useState([
        {
            ID: 1,
            title: "Web Developer RoadMap",
            poster: roadmap1
        },

        {
            ID: 2,
            title: "Graphic Designer RoadMap",
            poster: roadmap2
        },

        {
            ID: 2,
            title: "Game Developer RoadMap",
            poster: roadmap4
        },
    ]);


    var roadMapList = [];
    for(let i=0; i<popularRoadMap.length; i++){
        roadMapList.push(
            <NavLink to="/roadMap" className="course rel" key={"popular-RoadMap-" + i }>
                <div className="block" style={{
                    background:"#e2e2e2 url(" + popularRoadMap[i].poster + ") no-repeat center"
                    }}>

                    <div className="course-title abs">
                        <h2 className="fontn">{popularRoadMap[i].title}</h2>
                    </div>

                </div>
            </NavLink>
        )
    }

    return (
        <div className="category">
            <div className="category-page">

                <div className="section category-courses">
                    <h2 className="title">ALL <span className="fontn"> Categories </span></h2>
                    <div className="course-cates rel flex">
                        <div className="flex">
                            <h2 className="fontn">Web Development</h2>
                            <h2 className="fontn">JavaScript</h2>
                            <h2 className="fontn">React</h2>
                            <h2 className="fontn">CSS</h2>
                            <h2 className="fontn">Angular</h2>
                            <h2 className="fontn">Node Js</h2>
                            <h2 className="fontn">PHP</h2>
                            <h2 className="fontn">Django</h2>
                        </div>
                        
                        <div className="flex">
                            <h2 className="fontn">It & Software</h2>
                            <h2 className="fontn">Design</h2>
                            <h2 className="fontn">Mobile Development</h2>
                            <h2 className="fontn">Game Development</h2>
                            <h2 className="fontn">Enterpreneurship</h2>
                            <h2 className="fontn">Digital Marketting</h2>
                        </div>

                        <div className="flex">
                            <h2 className="fontn">Lifesycle</h2>
                            <h2 className="fontn">Photograpy</h2>
                            <h2 className="fontn">Health and fitness</h2>
                            <h2 className="fontn">Music</h2>
                            <h2 className="fontn">Teaching and Academics</h2>
                            <h2 className="fontn">Digital Marketting</h2>
                        </div>
                        
                        
                    </div>
                </div>

                <div className="section category-courses flex">
                    <h2 className="title">ALL COURSES <span className="fontn"> Available </span></h2>
                    <div className="courses rel flex">
                        {courseList}
                    </div>
                    <div className="courses rel flex">
                        {courseList}
                    </div>
                </div>

                <div className="section category-roadMaps flex">
                    <h2 className="title">ALL RoadMaps <span className="fontn"> Available </span></h2>
                    <div className="courses rel flex">
                        {roadMapList}
                    </div> 
                    <div className="courses rel flex">
                        {roadMapList}
                    </div>
                </div>

            </div>
        </div>
        
    )
}

export default CategoriesPage;
