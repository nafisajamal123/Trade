import React from 'react';
function Team() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                

                <div className='col-6 text-center'>
                    <img className='mt-5' src="media/image/nithinKamath.jpg" alt="error" style={{ borderRadius: "100%", width: "50%" }}></img>
                    <div className='m-5 text-muted'>
                        <h4>Nithin Kamath</h4>
                        <p className='text-muted'>Founder, CEO</p>
                    </div>

                </div>

                <div className='col-6 '>
                    <h1 className='mb-5'>People</h1>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on Homepage / TradingQnA / Twitter</p>
                </div>
                
            </div>
        </div>
    );
}

export default Team;
<h1>Team</h1>