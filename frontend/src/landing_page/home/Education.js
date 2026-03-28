import React from 'react';
function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 mb-5'>
                    <img src="media/image/education.svg"/>
                </div>
                <div className='col-6 mt-5 mb-5'>
                    <h1 className='pb-4 fs-2'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:"none"}}>Varsity <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    <p className='pt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-arrow-right" aria-hidden="true"></i></a>

                </div>
            </div>
        </div>
     );
}

export default Education;