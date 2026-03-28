import React from 'react';
import Awards from './Awards';
import OpenAccount from '../../OpenAccount';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import Hero from './Hero';
function HomePage() {
    return ( 
        <>
        
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        
        </>
     );
}
export default HomePage;