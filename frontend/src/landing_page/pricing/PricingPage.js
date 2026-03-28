import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Brokerage from "./Brokerage";
import EquityTable from "./EquityTable";
import CurrencyTable from "./CurrencyTable";
import CommodityTable from "./CommodityTable";
import Hero from "./Hero";
import OpenAccount from "../../OpenAccount";

function PricingPage() {
    return (
        <div>
            <Hero />
            <OpenAccount />
            <Brokerage />
            <Routes>
                <Route path="" element={<EquityTable />} />
                <Route path="equity" element={<EquityTable />} />
                <Route path="currency" element={<CurrencyTable />} />
                <Route path="commodity" element={<CommodityTable />} />
            </Routes>
            <p className="text-center mt-5 fs-4"><a href="" style={{ textDecoration: "none" }}>Calculate your costs upfront</a> using our brokerage calculator</p>
            <div className="container text-muted">
                <div className="row">
                    <h3 className="">Charges explained</h3>
                    <div className="col-6">
                        <h6 className="mt-5">Securities/Commodities transaction tax</h6>
                        <p className="mt-4" style={{ fontSize: "13px",paddingRight:"95px" }}>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.<br /><br />When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge.<br /> Important to keep a tab.</p>
                        <h6 className="mt-4">Transaction/Turnover Charges</h6>
                        <p className="mt-4" style={{ fontSize: "13px",paddingRight:"95px" }}>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.<br/><br/>
                            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)<br/><br/>
                            BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.<br/><br/>
                            BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.<br/><br/>
                            BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.
                        </p>
                    </div>

                    <div className="col-6">
                    <h6 className="mt-5">GST</h6>
                        <p className="mt-4" style={{ fontSize: "13px",paddingRight:"95px" }}>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                        <h6 className="mt-4">SEBI Charges</h6>
                        <p className="mt-4" style={{ fontSize: "13px",paddingRight:"95px" }}>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default PricingPage;




