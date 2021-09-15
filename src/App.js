import React from 'react';
import './CSS/App.css';
import './CSS/props.css';

//screen-----------------------------------------
import Header from './screens/header'
import Sidebar from './screens/sidebar'
import HomePage from './screens/home'
import CoursePage from './screens/course'
import AboutPage from './screens/about'
import CategoriesPage from './screens/categories'
import MycoursesPage from './screens/mycourses'
import RoadMapPage from './screens/roadMap'



import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

function App() {

  return (
    <div className="App flex">
      <HashRouter>

        <Sidebar />
         
        <div className="app-content">
          <Route exact path="/" component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/course/:courseid" component={CoursePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/cates" component={CategoriesPage} />
          <Route path="/my-courses" component={MycoursesPage} />
          <Route path="/roadMap" component={RoadMapPage} />
        </div>

      </HashRouter>
    </div>
  );
}

export default App;
 