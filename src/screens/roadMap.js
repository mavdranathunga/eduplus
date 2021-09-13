import React, { useState, useEffect } from 'react'
import '../CSS/roadMap.css';

import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';

function RoadMapPage() {

    useEffect(()=>{
        document.title = "RoadMap Page"
    })

    return (
        <div className="roadMaps-page">

            <div className="webDeveloper-roadmap">
                <h2 className="main-title">Web-Development <span className="fontn"> Roadmap </span></h2>

                <div className="front-end flex">
                    <h2 className="title2">Front-End <span className="fontn"> Roadmap </span></h2>

                    <div className="step-1 flex">

                        <div className="section-1 fontb">
                            <h2 className="title fontb">Step 1 : <span  className="fontn">learn the basics</span></h2>
                        </div>
                        
                        <p className="section-2 fontn">
                            Every Web Developer must have a basic understanding of HTML, CSS, and JavaScript.<br />
                            Responsive Web Design is used in all types of modern web development.<br />
                            ECMAScript 5 (JavaScript 5) is supported in all modern browsers. Take a good look at it, especially the new array functions.
                        </p>

                        <div className="section-3 flex">
                            <div className="tab">
                                <h2 className="item1">HTML</h2>
                                <h2 className="item fontn">HTML</h2>
                                <h2 className="item fontn">HTTP / XHR</h2>
                            </div>

                            <div className="tab">
                                <h2 className="item1">CSS</h2>
                                <h2 className="item fontn">CSS</h2>
                                <h2 className="item fontn">CSS Responsive</h2>
                            </div>

                            <div className="tab">
                                <h2 className="item1">JavaScript</h2>
                                <h2 className="item fontn">JavaScript</h2>
                                <h2 className="item fontn">ECMAScript 5</h2>
                            </div>
                            
                        </div>
                    </div>

                    <div className="step-2 flex">
                        <div className="section-1">
                            <h2 className="title fontb">Step 2 : <span  className="fontn">Dig Deeper</span></h2>
                        </div>
                        
                        <p className="section-2">
                        When you feel comfortable with HTML and CSS, it is time to dig deeper.<br />
                        You should learn how to use Maps, Fonts and Icons in HTML.<br />
                        On the JavaScript side, you should learn how to access the HTML DOM.<br />
                        You should also learn how to use AJAX and JSON for making server requests.<br />
                        </p>

                        <div className="section-3 flex">
                            <div className="tab">
                                <h2 className="item1">HTML</h2>
                                <h2 className="item fontn">HTML DOM</h2>
                                <h2 className="item fontn">Google Maps</h2>
                                <h2 className="item fontn">Google Fonts</h2>
                                <h2 className="item fontn">Google Charts</h2>
                            </div>

                            <div className="tab">
                                <h2 className="item1">CSS</h2>
                                <h2 className="item fontn">CSS Icons</h2>
                            </div>

                            <div className="tab">
                                <h2 className="item1">JavaScript</h2>
                                <h2 className="item fontn">XML</h2>
                                <h2 className="item fontn">JSON</h2>
                                <h2 className="item fontn">AJAX</h2>
                            </div>
                            
                        </div>
                    </div>

                    <div className="step-3 flex">
                        <div className="section-1">
                            <h2 className="title fontb">Step 3 : <span  className="fontn">Choose Frameworks</span></h2>
                        </div>
                        
                        <p className="section-2">
                        Now it is time to look at some Frameworks.<br />
                        On the CSS side you should choose a framework for reponsive web design:
                        Bootstrap  /  Material Design  /  W3.CSS<br />
                        On the JavaScript side you should learn at least one modern framework:
                        React.js  /  Angular.js  /  Vue.js   /  W3.JS<br />
                        Maybe the popularity of jQuery has passed the top, but it is still the most used JavaScript framework.<br />
                        </p>

                        <div className="section-3 flex">
                            <div className="tab">
                                <h2 className="item1">CSS</h2>
                                <h2 className="item fontn">Bootstrap</h2>
                                <h2 className="item fontn">Material Design</h2>
                            </div>

                            <div className="tab">
                                <h2 className="item1">JavaScript</h2>
                                <h2 className="item fontn">React.Js</h2>
                                <h2 className="item fontn">JQuery</h2>
                                <h2 className="item fontn">AngularJs</h2>
                                <h2 className="item fontn">Vue.Js</h2>
                            </div>

                            <div className="tab">
                                <h2 className="item1">XML</h2>
                                <h2 className="item fontn">XPath</h2>
                                <h2 className="item fontn">XQuery</h2>
                            </div>
                            
                        </div>
                    </div>


                </div>

                <div className="back-end">
                    <h2 className="title2">Back-End <span className="fontn"> Roadmap </span></h2>

                    <div className="step-4 flex">
                        <div className="section-1">
                        <h2 className="title">Step 4 : <span className="fontn"> Back-End </span></h2>
                            
                        </div>

                        <div className="section-3 flex">
                            <div className="tab">
                                <h2 className="item1">Fullstack</h2>
                                <h2 className="item fontn">SQL</h2>
                                <h2 className="item fontn">PHP</h2>
                                <h2 className="item fontn">ASP</h2>
                                <h2 className="item fontn">Python</h2>
                            </div>

                            <div className="tab">
                                <h2 className="item1">Fullstack JS</h2>
                                <h2 className="item fontn">SQL</h2>
                                <h2 className="item fontn">Node.Js</h2>
                                <h2 className="item fontn">MySQL</h2>
                                <h2 className="item fontn">Mongo.db</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RoadMapPage
