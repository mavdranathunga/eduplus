import React from 'react';
//import logo from './ui/logo-udemy.svg';
import './CSS/App.css';
import './CSS/props.css';

//screen-----------------------------------------
import Header from './screens/header'
import Sidebar from './screens/sidebar'
import HomePage from './screens/home'
import CoursePage from './screens/course'
import DiscoverPage from './screens/discover'
import CategoriesPage from './screens/categories'
import MycoursesPage from './screens/mycourses'
import RoadMapPage from './screens/roadMap'



import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

function App() {

  //<Rightbar />
  return (
    <div className="App flex">
      <HashRouter>

        <Sidebar />
        
        <div className="app-content">
          <Route exact path="/" component={HomePage} />
          <Route path="/course/:courseid" component={CoursePage} />
          <Route path="/discover" component={DiscoverPage} />
          <Route path="/cates" component={CategoriesPage} />
          <Route path="/my-courses" component={MycoursesPage} />
          <Route path="/roadMap" component={RoadMapPage} />
        </div>

      </HashRouter>
    </div>
  );
}

export default App;
 