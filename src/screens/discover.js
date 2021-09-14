import React, { useEffect} from 'react'
import '../CSS/discover.css';


function DiscoverPage() {


    useEffect(()=>{
        document.title = "Discover"
    })

    return (
        <div className="discover">

            <div className="discover-page flex">
                <h1>Discover</h1>
            </div>

        </div>
    )
}

export default DiscoverPage;
