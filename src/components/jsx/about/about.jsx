import React from 'react';
// import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
// import {Link,useNavigate} from 'react-router-dom';
import '../../css/about/about.css';
import Frame from '../../jsx/home/frame_part_home';
import Craft from '../../jsx/home/shop_craft_home';
function About() {
    return (
        <div className='background-container'>
            <title>About Us | AohoShop</title>
            <div className='heading-background'>
                <img src='/assets/picture/about_us.png' className='heading-background'/>
                <h1>About Us</h1>
            </div>
            <div className='one-para'>
                <h1>Who we are</h1><br/>
                <p>Welcome to <bold>aoho!</bold> an Indian ethnic wear brand</p>
            </div>
            <div className='separator'/>
            <div className='two-para'>
                <p>At aoho! we go beyond being just a brand; we're a movement that is redefining the way women experience ethnic wear. </p>
            </div>
            <div className='separator'/>
            <div className='three-para'>
                <img src='/assets/picture/crafted_by.png'/>
                <h1>Handcrafted by master artisans</h1>
                <p>We take pride in the fact that our collection is handcrafted, featuring</p>
            </div>
            <div className='four-para-white'>
                <div className='separator-brown'/>
                <img src='/assets/logo/fair_wages.png' alt='equal wages' className='logo-1'/>
                <h1>Fair Wages</h1>
                <p>At <bold>aoho!</bold>, we strongly believe in providing fair wages to our artists, 
                    ensuring that they have a sustainable livelihood while pursuing their craft. 
                    We strive to create a sense of community 
                    among our artists and are committed to paying them 
                    fairly without any negotiations. 
                    This not only enriches their art but also helps to 
                    uplift their lives and the lives of their families.</p>
                <div className='separator-brown'/>
            </div>
            <div className='gap'></div>
            <div className='four-para-white'>
                <div className='separator-brown'/>
                <img src='/assets/logo/size-inclusive.png' alt='equal wages' className='logo-1'/>
                <h1>Size-Inclusive</h1>
                <p>We strive to break stereotypes surrounding women's sizes and promote 
                    body <bold>positivity.</bold></p>
                <div className='separator-brown'/>

            </div>
            <div className='founder-para'>
                <img src='/assets/picture/founder.png'/>
                <h1>The Founder</h1>
                <p>Anindita, the founder of Aoho, is an engineer-turned-fashion designer who pursued her childhood 
                    dream of starting a clothing line.</p>
            </div>
            <div className='four-para-white'>
                            <div className='separator-brown'/>
                <h1>Naming Our Brand</h1>
                <p>Despite brainstorming for several months, we were unable to find a name that 
                    truly resonated with us.</p>
                <div className='separator-brown'/>
            </div>
        <Frame/>
        <Craft/>
        </div>
        );
    }
    export default About;










