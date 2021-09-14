import React, { useEffect } from 'react'
import '../CSS/mycourses.css';


function MycoursesPage() {

    useEffect(()=>{
        document.title = "My-Courses"
    })

    return (
        <div className="mycourses">
        
            <div className="mycourses-page flex">
                <h2>My Courses</h2>
            </div>

        </div>
    )
}

export default MycoursesPage;
