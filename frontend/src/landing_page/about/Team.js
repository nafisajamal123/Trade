import React from 'react';
function Team() {
    return (
        <div className='container mt-5'>
            <div className='row'>


                <div className='col-6 text-center'>
                    <img className='mt-5' src="media/image/full.jpeg" alt="error" style={{borderRadius: "50%",width: "200px",height: "200px",objectFit: "cover" }}></img>
                    <div className='m-5 text-muted'>
                        <h4>Rakesh Jhunjhunwala</h4>
                        <p className='text-muted'>Founder, CEO</p>
                    </div>

                </div>

                <div className='col-6 '>
                    <h1 className='mb-5'>People</h1>
                    <p>Rakesh bootstrapped and founded Tradex in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, TradeX has changed the landscape of the Indian broking industry.</p>
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