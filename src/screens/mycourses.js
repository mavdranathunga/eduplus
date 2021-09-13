import React, { useEffect } from 'react'

function MycoursesPage() {

    useEffect(()=>{
        document.title = "My-Courses"
    })

    return (
        <div className="mycourses-page">
            <h2>My Courses</h2>
        </div>
    )
}

export default MycoursesPage;
