import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 mb-5'>
                    <img src="media/image/largestBroker.svg" alt="trophy" />
                </div>

                <div className='col-6 pr-3 mb-5'>
                    <h2>Largest stock broker in India</h2>
                    <p style={{width:"95%"}}>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='container'>
                        <div className='row pt-3'>
                            <div className='col-6'>
                                <ul style={{lineHeight:2.5}}>
                                    <li>Future and Options</li>
                                    <li>Commodity derivatives</li>
                                    <li>Currency derivatives</li>
                                </ul>
                            </div>
                            <div className='col-6'>
                                <ul style={{lineHeight:2.5}}>
                                    <li>Stocks and IPOs</li>
                                    <li>Direct mutual funds</li>
                                    <li>Bonds and Govt. Securities</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <img src="media/image/pressLogos.png" className='pt-3' style={{width:"80%"}} alt="error"/>
                </div>
            </div>

        </div>

    );
}
export default Awards;