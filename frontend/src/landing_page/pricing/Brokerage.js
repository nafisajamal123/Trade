import React, { useState } from "react";
import { Link } from "react-router-dom";

function Brokerage() {
    // Set default active tab
    const [activeTab, setActiveTab] = useState("equity");

    // Function to handle active tab change
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='container mt-5'>
            <div className='border-bottom' style={{ paddingBottom: "8px" }}>
                <div className='row text-muted'>

                    <div className='col-2'>
                        <h3
                            onClick={() => handleTabClick("equity")}
                            style={{
                                
                                color: activeTab === "equity" ? "gray" : "blue",
                                borderBottom: activeTab === "equity" ? "2px solid blue" : "none",
                                fontWeight: activeTab === "equity" ? "bold" : "normal",
                                paddingBottom: "18px", // Moves both border
                                marginBottom: "-10px", // Aligns border which appears on clicking with surrounding border
                            }}
                        >
                            <Link className="nav-link" to="/pricing/equity" style={{ color: 'inerit'}}>
                                Equity
                            </Link>
                        </h3>
                    </div>
                    <div className='col-2'>
                        <h3
                            onClick={() => handleTabClick("currency")}
                            style={{
                                color: activeTab === "currency" ? "gray" : "blue",
                                borderBottom: activeTab === "currency" ? "2px solid blue" : "none",
                                fontWeight: activeTab === "currency" ? "bold" : "normal",
                                paddingBottom: "18px", 
                                marginBottom: "-10px",
                            }}
                        >
                            <Link className="nav-link" to="/pricing/currency" style={{ color: 'inherit' }}>
                                Currency
                            </Link>
                        </h3>
                    </div>
                    <div className='col-2'>
                        <h3
                            onClick={() => handleTabClick("commodity")}
                            style={{
                                color: activeTab === "commodity" ? "gray" : "blue",
                                borderBottom: activeTab === "commodity" ? "2px solid blue" : "none",
                                fontWeight: activeTab === "commodity" ? "bold" : "normal",
                                paddingBottom: "18px", // Moves both border
                                marginBottom: "-10px",
                            }}
                        >
                            <Link className="nav-link" to="/pricing/commodity" style={{ color: 'inherit' }}>
                                Commodity
                            </Link>
                        </h3>
                    </div>  

                </div>
            </div>
        </div>
    );
}
export default Brokerage;
