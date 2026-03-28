import React from 'react';
function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5'>
                <h1 className='mt-5' style={{fontSize:"50px",color: "#504646"}}>TradeX Products</h1>
                <p className='fs-4 mt-2' style={{color: "#504646"}}>Sleek, modern, and intuitive trading platforms</p>
                <p className='mt-3 mb-4' style={{color: "#504646"}}>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings →</a></p>
            </div>
            <br/><br/><br/>
            <hr style={{border: "1px solid rgba(0, 0, 0, 0.2)"}} />

        </div>
     );
}

export default Hero;