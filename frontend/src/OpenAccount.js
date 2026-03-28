import React from 'react';
import { Link } from 'react-router-dom';
function OpenAccount() {
    return (
        <div className='mt-5 text-center'>
            <h2>Open a TradeX account</h2>
            <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>

            <Link to="/signup">
                <button className="btn btn-primary btn-sm col-2 p-2 mt-3 fs-6 mb-5" style={{ margin: "0 auto" }}>
                    Sign up for free
                </button>
            </Link>
        </div>
    );
}

export default OpenAccount;