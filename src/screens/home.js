import React, { useState } from 'react'

import course1 from "../ui/courseimg1.jpg"
import course2 from "../ui/courseimg2.jpg"
import course3 from "../ui/courseimg3.jpg"
import course4 from "../ui/courseimg4.png"
import course5 from "../ui/courseimg5.jpg"

function HomePage() {


    const [popularCourse, setPopularCourse] = useState([
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
            poster: course3
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
            poster: course2
        }
    ]);

    const [topTutors, setTopTutors] = useState([
        {
            ID: 1,
            name: "Lana Marandina",
            username: "@lanamara",
            dp: "https://placeimg.com/100/100/people?tutors-" + 1,
        },

        {
            ID: 2,
            name: "David Miller",
            username: "@dmiller",
            dp: "https://placeimg.com/100/100/people?tutors-" + 2,
        },

        {
            ID: 3,
            name: "Kane wotson",
            username: "@kwotson",
            dp: "https://placeimg.com/100/100/people?tutors-" + 3,
        },

        {
            ID: 4,
            name: "Lana Marandina",
            username: "@lanamara",
            dp: "https://placeimg.com/100/100/people?tutors-" + 4,
        },

        {
            ID: 5,
            name: "David Miller",
            username: "@dmiller",
            dp: "https://placeimg.com/100/100/people?tutors-" + 5,
        },

        {
            ID: 6,
            name: "Kane wotson",
            username: "@kwotson",
            dp: "https://placeimg.com/100/100/people?tutors-" + 6,
        }
    ]);

    // live tutor list
    var tutorList = [];
    for(let i=0; i<10; i++){
        tutorList.push(
            <button className="tutor rel" key={"tutor-live-" + i }>
                <img src={"https://placeimg.com/100/100/people?" + i} className="bl"/>
            </button>
        )
    }

    // course list
    var courseList = [];
    for(let i=0; i<popularCourse.length; i++){
        courseList.push(
            <a href="#" className="course rel" key={"popular-course-" + i }>
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
                        <h2 className="fontn">{popularCourse[i].title}</h2>
                    </div>

                </div>
            </a>
        )
    }

    // Top Tutor list
    var topTutorsList = [];
    for(let i=0; i<topTutors.length; i++){
        topTutorsList.push(
            <a href="#" className="user-block rel noul" key={"top-tutors-" + i }>

                <div className="user flex">
                    <div className="pic">
                        <img src={topTutors[i].dp} className="bl" />
                    </div>
                    <div className="meta rel">
                        <h2 className=" name fontb">{topTutors[i].name}</h2>
                        <h2 className=" uname fontn">{topTutors[i].username}</h2>
                    </div>
                </div>

            </a>
        )
    }


    return (
        <div className="home-page rel">
            
            {/** Tutors ive */}
             <div className="section rel">
                 <h2 className="title">Streaming <span className="fontn"> Now </span></h2>

                 <div className="tutors rel flex">
                     {tutorList}
                 </div>
             </div>

             {/** popular courses now */}
             <div className="section section-b rel">
                 <h2 className="title">Popular <span className="fontn"> This Week </span></h2>

                 <div className="courses rel flex">
                     {courseList}
                 </div>
             </div>

             {/** Top Tutors */}
             <div className="section section-c rel">
                 <h2 className="title">Top <span className="fontn"> Tutors</span></h2>

                 <div className="topTutors rel flex">
                     {topTutorsList}
                 </div>
             </div>


        </div>
    )
}

export default HomePage;
