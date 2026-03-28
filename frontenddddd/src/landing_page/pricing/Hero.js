import React from 'react';
function Hero() {
    return (
        <div className='container mt-5'><br />
            <br />
            <div className='row d-flex justify-content-center'>

                <div className='col-auto mx-3'>
                    <img src="media/image/pricing0.svg" style={{ width: "75%" }} />
                    <h2 className='text-muted fs-3 text-center mt-4'>Free equity delivery</h2>
                    <p className='text-muted text-center mt-4'>
                        All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>

                <div className='col-auto mx-3'>
                    <img src="media/image/20.svg" style={{ width: "75%" }} />
                    <h2 className='text-muted fs-3 text-center mt-3'>Intraday and F&O trades</h2>
                    <p className='text-muted text-center mt-4'>
                        Flat ₹ 20 or 0.03% (whichever is lower) per<br/> executed order on intraday trades across<br/> equity, currency, and commodity trades. Flat<br/> ₹20 on all option trades.
                    </p>
                </div>

                <div className='col-auto mx-3'>
                    <img src="media/image/pricing0.svg" style={{ width: "75%" }} />
                    <h2 className='text-muted fs-3 text-center mt-4'>Free direct MF</h2>
                    <p className='text-muted text-center mt-4'>
                        All direct mutual fund investments are<br/> absolutely free — ₹ 0 commissions & DP<br/> charges.
                    </p>
                </div>

            </div><br/><br/>
        </div>
    );
}
export default Hero;
