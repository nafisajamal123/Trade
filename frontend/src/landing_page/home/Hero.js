import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {
    return (
        <div className='container p-5'>
            <div className='row text-center'>
                <img src="media/image/homeHero.png" alt="hero image" className='mb-5'></img>
                <h2>Invest in everything</h2>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <Link to="/signup">
                    <button className="btn btn-primary btn-sm col-2 p-2 mt-3 fs-6 mb-5" style={{ margin: "0 auto" }}>
                        Signup Now
                    </button>
                </Link>

            </div>
        </div>
    );
}

export default Hero;