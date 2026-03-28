import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
function ProductPage() {
    return (
        <>
            <Hero />
            <LeftSection
                imageURL="media/image/kite.png"
                heading="Kite"
                description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo="Try demo →"
                learnMore="Learn more →"
                googlePlay="media/image/googlePlayBadge.svg"
                appStore="media/image/appstoreBadge.svg"
            />

            <RightSection
                heading="Console"
                description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                learnMore="Learn more →"
                imageURL="media/image/productsconsole.png"
            />

            <LeftSection
                imageURL="media/image/productscoin.png"
                heading="Coin"
                description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo="Coin →"
                learnMore=""
                googlePlay="media/image/googlePlayBadge.svg"
                appStore="media/image/appstoreBadge.svg"
            />

            <RightSection
                heading="Kite Connect API"
                description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                learnMore="Kite Connect →"
                imageURL="media/image/productskiteconnect.png"
            />

            <LeftSection 
            imageURL="media/image/varsity.png"
            heading="Varsity mobile"
            description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
            tryDemo=""
            learnMore=""
            googlePlay="media/image/googlePlayBadge.svg"
            appStore="media/image/appstoreBadge.svg"
            />

            <p className='text-center text-muted fs-4 mt-5 '>Want to know more about our technology stack? Check out the <a href='' style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</p><br/>
            <h2 className='text-center mt-5 mb-4'>The Zerodha Universe</h2>
            <p className='text-center text-muted fs-5 '>Extend your trading and investment experience even further with our partner platforms</p>


            <Universe 
            imageURL1="media/image/zerodhaFundhouse.png"
            imageURL2="media/image/sensibullLogo.svg"
            imageURL3="media/image/image.png"
            imageURL4="media/image/streakLogo.png"
            imageURL5="media/image/smallcaseLogo.png"
            imageURL6="media/image/dittoLogo.png"
            />
        </>
    );
}
export default ProductPage;