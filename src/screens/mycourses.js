import React, { useEffect } from 'react'
import '../CSS/mycourses.css';


function MycoursesPage() {

    useEffect(()=>{
        document.title = "My-Courses"
    })

    return (
        <div className="mycourses">
        
            <div className="mycourses-page">
                <h2>My Courses</h2>
                <h2 className="content fontn">You have not enrolled to any course yet...</h2>
            </div>

        </div>
    )
}

export default MycoursesPage;
