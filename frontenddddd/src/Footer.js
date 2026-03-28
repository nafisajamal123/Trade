import React from 'react';
function Footer() {
    return (
        <div className='container border-top mt-5'>
            <div className='row mt-5'>

                <div className='col-3'>
                    <img className="ms-auto mb-4" src="media/image/logo.svg" alt="error" style={{ width: "45%" }} />
                    <p>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
                    <div className='row'>
                        <div className='col-1'><a href='' style={{ textDecoration: "none", color: "black" }}><i class="fa fa-twitter" aria-hidden="true"></i></a></div>
                        <div className='col-1'><a href='' style={{ textDecoration: "none", color: "black" }}><i class="fa fa-facebook-official" aria-hidden="true"></i></a></div>
                        <div className='col-1'><a href='' style={{ textDecoration: "none", color: "black" }}><i class="fa fa-instagram" aria-hidden="true"></i></a></div>
                        <div className='col-1'><a href='' style={{ textDecoration: "none", color: "black" }}><i class="fa fa-linkedin" aria-hidden="true"></i></a></div>
                        <div className='col-1'><a href='' style={{ textDecoration: "none", color: "black" }}><i class="fa fa-telegram" aria-hidden="true"></i></a></div>
                    </div>
                </div>

                <div className='col-3 '>
                    <h3 className='fs-5'>Company</h3>
                    <ul className='p-2' style={{ listStyleType: "none", lineHeight: "2" }}>

                        <a href="" style={{ textDecoration: "none", color: "black" }}>About</a><br />
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Products</a><br />
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Pricing</a><br />
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Referral programme</a><br />
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Careers</a><br />
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Zerodha.tech</a><br />
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Press & media</a><br />
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Zerodha cares (CSR)</a><br />

                    </ul>
                </div>

                <div className='col-3'>
                    <h3 className='fs-5'>Support</h3>
                    <ul className='p-2' style={{ listStyleType: "none", lineHeight: "2" }}>
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Contact</a><br />
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Support portal</a><br />
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Z-Connect blog</a><br />
                        <a href="" style={{ textDecoration: "none", color: "black" }}>List of charges</a><br />
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Downloads & resources</a><br />
                    </ul>
                </div>

                <div className='col-3'>
                    <h3 className='fs-5'>Account</h3>
                    <ul className='p-2' style={{ listStyleType: "none", lineHeight: "2" }}>
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Open an account</a><br />
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Fund transfer</a><br />
                        <a href="" style={{ textDecoration: "none", color: "black" }}>60 day challenge</a><br />
                    </ul>
                </div>
            </div>
            <div className='row text-muted' style={{ fontSize: "11px" }}>
                <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

                <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

                <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

            </div>

        </div>
    );
}
export default Footer;