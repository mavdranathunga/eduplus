import React, { useState, useEffect } from 'react'

import "../CSS/course.css";

import course1 from "../ui/courseimg1.jpg"
import course2 from "../ui/courseimg2.jpg"
import course3 from "../ui/courseimg3.jpg"
import course4 from "../ui/courseimg4.png"
import course5 from "../ui/courseimg5.jpg"

import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import BatteryChargingFullRoundedIcon from '@material-ui/icons/BatteryChargingFullRounded';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined';



function CoursePage(props) {

    useEffect(()=>{
        document.title = "Course Page"
    })

    const [course, setCourse] = useState(
        {
            ID: 1,
            title: "Learning how to create beautiful scenes in ilustrator in 60 minutes",
            about: "In this course i'll teach you how to make your illustration look really good. We're gonna study a lot of cases here, setting your work panel, makingg some awesome actions and presets for future.<br />Hope you'll get some really usefull stuff out of this course. Good Luck to all!",
            tutor: {
                ID: 1,
                name: "Lana Marandina",
                username: "@lanamara",
                dp: "https://placeimg.com/100/100/people?tutor-" + 1,
            },
            duration: "82 mins",
            poster: course3,

            videos: [
                {
                    ID: 1,
                    title: "Introduction",
                    duration: "03 min 24 secs"
                },

                {
                    ID: 2,
                    title: "Getting Started",
                    duration: "09 min 55 secs"
                },

                {
                    ID: 3,
                    title: "Illustration",
                    duration: "60 min 48 secs"
                }
            ]
        },
    );

    
    const courseID = props.match.params.courseid;

    
    var courseVideos = [];
    for(let i = 0; i < course.videos.length; i++){
        courseVideos.push(
            <a href="#" key={"course-video-" + i} className="noul rel flex">
                <div className="id fontn">{course.videos[i].ID}</div>
                <div className="meta rel">
                    <h1 className="lbl fontb">{course.videos[i].title}</h1>
                    <h1 className="dur fontn">{course.videos[i].duration}</h1>
                </div>
            </a>            
        );
    }
    

    return (
        <div className="course-page rel flex">
    
            <div className="course-info rel">

                <div className="tutor rel flex">
                    <div className="pic">
                        <img src={course.tutor.dp} className="bl" />
                    </div>
                    <div className="meta rel">
                        <h2 className=" name fontb">{course.tutor.name}</h2>
                        <h2 className=" uname fontn">Course Tutor</h2>
                    </div>
                </div>

                <div className="course-meta">
                    <h2 className=" name fontn">{course.title}</h2>
                    <p className="about fontn"dangerouslySetInnerHTML={{ __html: course.about}} />

                    <div className="section section-b rel">
                        <h2 className="title s24 fontb">Course <span  className="fontn">Achievements</span></h2>
                        
                        <div className="course-stats aic flex">
                            <div className="stat-box flex">
                                <LoyaltyIcon className="icon" style={{ fontSize: 28 }, { color: 'green' }} />
                                <h2 className="val fontb">1800</h2>
                                <h2 className="lbl">Points</h2>
                            </div>
                            <div className="stat-box flex">
                                <AssignmentTurnedInIcon className="icon" style={{ fontSize: 28 } , { color: 'orange' }}/>
                                <h2 className="val fontb">45.3%</h2>
                                <h2 className="lbl">Complete</h2>
                            </div>
                            <div className="stat-box flex">
                                <GradeOutlinedIcon className="icon" style={{ fontSize: 28 } , { color: 'purple' }}/>
                                <h2 className="val fontb">+26</h2>
                                <h2 className="lbl">Level</h2>
                            </div>
                        </div>
                    </div>

                </div>

                
                <div className="section section-drop rel" id="acc">
                    <h2 className="title fontb">Course <span  className="fontn">Details</span></h2>
                    
                    <button className="accordion">Course Overview</button>
                    <div className="panel">
                        <p>welcome Message</p>
                        <p>Course Introduction</p>
                        <p>Objectives</p>
                        <p>What you'll learn</p>
                    </div>

                    
                    <button onClick="myfunction()" className="accordion active">Getting Started</button>
                    <div className="panel">
                        <p>Ready to start</p>
                        <p>welcome Message</p>
                        <p>Course Introduction</p>
                        <p>What you'll learn</p>
                    </div>
                    

                    
                    <button class="accordion">Setup The Environment</button>
                    <div class="panel">
                        <p>Installing Tools</p>
                        <p>Get familier with Tools</p>
                    </div>
                    

                    
                    <button class="accordion">Objectives</button>
                    <div class="panel">
                         <p>Learning Basics</p>
                    </div>

                    
                    <button class="accordion">Activities</button>
                    <div class="panel">
                        <p>Lecture 01</p>
                        <p>Lecture 02</p>
                        <p>Lecture 03</p>
                        <p>Lecture 04</p>
                        <p>Lecture 05</p>
                    </div>

                </div>

                <div className="course-videos flex">
                    {courseVideos}
                </div> 
                    
                    
                


            </div>

            <div className="course-preview flex">
                <h2 className="title fontb">Course <span  className="fontn">Preview</span></h2>
            
                <div className="preview-video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/X9l62w0VfuA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <h2 className="title fontb">You'll <span  className="fontn">Learn</span></h2>
                
                <div className="you-learn bl flex">
                    <div className="learn-item flex">
                        <DoneAllOutlinedIcon className="icon" style={{ fontSize: 28 } , { color: 'purple' }}/>
                        <h2 className="learn-point fontn">Setting up the environment</h2>
                    </div>
                    <div className="learn-item flex">
                        <DoneAllOutlinedIcon className="icon" style={{ fontSize: 28 } , { color: 'purple' }}/>
                        <h2 className="learn-point fontn">Advanced HTML Practices</h2>
                    </div>
                    <div className="learn-item flex">
                        <DoneAllOutlinedIcon className="icon" style={{ fontSize: 28 } , { color: 'purple' }}/>
                        <h2 className="learn-point fontn">Build a portfolio website</h2>
                    </div>
                    <div className="learn-item flex">
                        <DoneAllOutlinedIcon className="icon" style={{ fontSize: 28 } , { color: 'purple' }}/>
                        <h2 className="learn-point fontn">Start building beautiful websites</h2>
                    </div>
                    <div className="learn-item flex">
                        <DoneAllOutlinedIcon className="icon" style={{ fontSize: 28 } , { color: 'purple' }}/>
                        <h2 className="learn-point fontn">Start building beautiful websites</h2>
                    </div>
                    <div className="learn-item flex">
                        <DoneAllOutlinedIcon className="icon" style={{ fontSize: 28 } , { color: 'purple' }}/>
                        <h2 className="learn-point fontn">Start building beautiful websites</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CoursePage;
