import React from "react";
import banner from '../img/banner.png';

const Home = () => {
    return (
        <>
            <div className="row backgroundimg ">
                <div className="col-md-12">
                    <img src={banner} className="img-fluid" alt="Responsive image" />
                </div>
            </div>
            <div className="col-md-12 d-flex align-items-center">
                <h1>Welcome to Warez Geeks</h1>
            </div>

        </>
    )
}

export default Home;