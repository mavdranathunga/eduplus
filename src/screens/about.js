import React, { useEffect, useState} from 'react'
import '../CSS/about.css';

import githubimg from "../ui/githubimg.png";
import fbimg from "../ui/facebookimg.jpg";



import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';


function AboutPage() {

  const [libraryList] = useState([
    {
      Id: 1,
      name: "ReactJS",
      link: "https://reactjs.org/",
    },
    {
      Id: 2,
      name: "Create React App",
      link: "https://github.com/facebook/create-react-app",
    },
    {
      Id: 3,
      name: "MATERIAL-UI",
      link: "https://material-ui.com/",
    },
    {
      Id: 4,
      name: "Redux",
      link: "https://redux.js.org/",
    },
    {
      Id: 5,
      name: "REACT ROUTER DOM",
      link: "https://reacttraining.com/react-router/",
    },
    {
      Id: 6,
      name: "FireBase Hosting",
      link: "https://firebase.com/",
    },
    {
      Id: 5,
      name: "FireBase Authentication",
      link: "https://firebase.com/",
    },
    {
      Id: 5,
      name: "Firestore",
      link: "https://firebase.com/",
    },
  ]);
    
  
  var libraries = [];
  for(let i = 0; i < libraryList.length; i++){
    libraries.push(
      <a href={libraryList[i].link} className="libraries noul fex">
          <CheckCircleOutlineRoundedIcon />
          {libraryList[i].name}
      </a>            
    );
  }





  useEffect(()=>{
    document.title = "About"
  })

  return (
    <div className="aboutPage">
      <div className="about-page">
                
                
        <div className="content">
          <h2 className="title">About  <span className="fontn"> EDUPlus+ </span></h2>

          <p>This is an E-learning Web App was bootstrapped with Create React App and other libraries. The UI build base on Material-UI along with the associated library ecosystem.</p>
          <p>This Website is using sample data like image and description the courses from Udemy. It is for non-commercial learning purposes only.</p>

          <p className="fontb">THANK YOU, AUTHERS! <span className="fontn">for the following libraries: </span></p>

          <div className="library-set">
              {libraries}
          </div>


          <div className="about-developer flex">
                      
            <h2 className="fontn">contact me at: </h2>

            <a href="https://github.com/mavdranathunga">
                <img className="githubimg" src={githubimg}/>
            </a>
            <a href="https://www.facebook.com/deshan.ranathunga.948/">
                <img className="fbimg" src={fbimg}/>
            </a>
                      
          </div>

        </div>

      </div>

    </div>
  )
}

export default AboutPage;


