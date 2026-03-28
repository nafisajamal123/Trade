import React from 'react';

function CommodityTable() {
    return (
        <div className='container mt-5'>
            <div className='row text-muted'>
                <div>

                    <table style={{ border: "1px solid black",marginRight:"10%",backgroundColor:"grey"}}>
                        <thead>
                            <tr style={{ borderBottom: "1px solid black", textAlign: "left" }}>
                                <th className="px-3 py-3" style={{ fontSize: '0.95rem' }}></th>
                                <th className="px-3 py-3" style={{ fontSize: '0.95rem' }}>Equity delivery</th>
                                <th className="px-3 py-3" style={{ whiteSpace: "nowrap", fontSize: '0.95rem' }}>Equity intraday</th>
                                <th className="px-3 py-3" style={{ fontSize: '0.95rem' }}>F&O - Futures</th>
                                <th className="px-3 py-3" style={{ fontSize: '0.95rem' }}>F&O - Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-3 py-3" style={{ fontSize: '0.95rem' }}>Brokerage</td>
                                <td className="px-3 py-3" style={{ fontSize: '0.95rem' }}>Zero Brokerage</td>
                                <td className="px-3 py-3" style={{ fontSize: '0.95rem' }}>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td className="px-3 py-3" style={{ fontSize: '0.95rem' }}>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td className="px-3 py-3" style={{ fontSize: '0.95rem' }}>Flat Rs. 20 per executed order</td>
                            </tr>

                            <tr>
                                <td className="px-3 py-3" style={{ fontSize: '0.95rem' }}>STT/CTT</td>
                                <td className="px-3 py-3" style={{ fontSize: '0.95rem' }}>0.1% on buy & sell</td>
                                <td className="px-3 py-3" style={{ fontSize: '0.95rem' }}>0.025% on the sell side</td>
                                <td className="px-3 py-3" style={{ fontSize: '0.95rem' }}>0.02% on the sell side</td>
                                <td className="px-3 py-3" style={{ fontSize: '0.95rem' }}>
                                    <ul style={{ fontSize: '0.95rem' }}>
                                        <li>0.125% of the intrinsic value on options that are bought and exercised</li>
                                        <li>0.1% on sell side (on premium)</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td className="px-3 py-3" style={{ whiteSpace: 'nowrap', fontSize: '0.95rem' }}>Transaction<br />charges</td>
                                <td className="px-3 py-3" style={{ whiteSpace: 'nowrap', fontSize: '0.95rem' }}>
                                    NSE: 0.00297% <br />BSE: 0.00375%
                                </td>
                                <td className="px-3 py-3" style={{ whiteSpace: 'nowrap', fontSize: '0.95rem' }}>
                                    NSE: 0.00173%<br /> BSE: 0
                                </td>
                                <td className="px-3 py-3" style={{ whiteSpace: 'nowrap', fontSize: '0.95rem' }}>
                                    NSE: 0.00297%<br /> BSE: 0.00375%
                                </td>
                                <td className="px-3 py-3" style={{ whiteSpace: 'nowrap', fontSize: '0.95rem' }}>
                                    NSE: 0.03503% (on premium)<br /> BSE: 0.0325% (on premium)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default CommodityTable;
