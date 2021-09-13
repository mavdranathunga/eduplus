import React, { useEffect} from 'react'

function DiscoverPage() {


    useEffect(()=>{
        document.title = "Discover"
    })

    return (
        <div className="discover-page">
            <h1>Discover</h1>
        </div>
    )
}

export default DiscoverPage;
