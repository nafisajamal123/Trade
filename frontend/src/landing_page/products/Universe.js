import React from 'react';
import { Link } from 'react-router-dom';
function Universe({ imageURL1, imageURL2, imageURL3, imageURL4, imageURL5, imageURL6 }) {
    return (
        <div className='conatiner text-center mt-5'><br />
            <div className='row mb-5'>
                <div className='col-2'></div>
                <div className='col-3'>
                    <img src={imageURL1} style={{ width: "45%" }} />
                    <p className='mt-4 text-muted' style={{ fontSize: "80%" }}>
                        Our asset management venture<br />
                        that is creating simple and transparent index<br />
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className='col-3'>
                    <img src={imageURL2} style={{ width: "45%" }} />
                    <p className='mt-4 text-muted' style={{ fontSize: "80%" }}>
                        Our asset management venture<br />
                        that is creating simple and transparent index<br />
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className='col-3'>
                    <img src={imageURL3} style={{ width: "35%" }} />
                    <p className='mt-2 text-muted' style={{ fontSize: "80%" }}>
                        Our asset management venture<br />
                        that is creating simple and transparent index<br />
                        funds to help you save for your goals.
                    </p>
                </div>
            </div>

            <div className='row'>
                <div className='col-2'></div>
                <div className='col-3'>
                    <img src={imageURL4} style={{ width: "45%" }} />
                    <p className='mt-4 text-muted' style={{ fontSize: "80%" }}>
                        Our asset management venture<br />
                        that is creating simple and transparent index<br />
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className='col-3'>
                    <img src={imageURL5} style={{ width: "45%" }} />
                    <p className='mt-4 text-muted' style={{ fontSize: "80%" }}>
                        Our asset management venture<br />
                        that is creating simple and transparent index<br />
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className='col-3'>
                    <img src={imageURL6} style={{ width: "30%" }} />
                    <p className='mt-4 text-muted' style={{ fontSize: "80%" }}>
                        Our asset management venture<br />
                        that is creating simple and transparent index<br />
                        funds to help you save for your goals.
                    </p>
                </div>
            </div><br /><br />

            <Link to="/signup">
                <button className="btn btn-primary btn-sm col-2 p-2 mt-3 fs-6 mb-5" style={{ margin: "0 auto" }}>
                    Sign up for free
                </button>
            </Link>

        </div>
    );
}

export default Universe;