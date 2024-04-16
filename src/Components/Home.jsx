import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css"
import Logo from "../assets/smc logo.png"
import ContactPhoto from "../assets/skolnickmediacontact.jpg"


export default function Home(){

    

    return(
        <>
        <div className="home_container">
            <h1 className="home_moto">Unleash Growth through connections: Your Success is our Story!</h1>
           <Link to="/HowWeDoit"><button>How We Do It</button></Link> 
        </div>
        <div className="bottom-container">
        <div className="homebottom">
            <div className="block-quote">
            <img src={Logo}/>
            <h3>It’s not about selling products and services…it’s about understanding your customer…</h3>
            <p>At SMC, we analyze a client’s customer base or trade area before we start recommending any advertising strategies or tactics.</p>
            <p>The SMC team is made up of seasoned professionals. We are here to help you grow your business in the most cost effective way possible.</p>
            </div>
            <div className="contact-block">
                <img src={ContactPhoto}/>
                <h3>Take a look into what we do....Then give us a call.</h3>
                <p>Phone: (703)216-4334</p>
                <p>Email: beths@skolnickmedia.com</p>
            </div>
        </div>
        <h2 className="tip-head">Marketing Tips to get the word out.</h2>
        <div className="marketing-tips">
            
                <div className="tip">
                    <h4>Radio Gets Results</h4>
                    <p>Radio: We get the word out about your business Catch your customers in their car, at work and at play: radio is a great medium to share a current offer or put out a timely</p>
                   <Link to="/Radioforyou"><a className="readmore" >Read more...</a></Link> 
                </div>

                <div className="tip">
                    <h4>Should you be on TV?</h4>
                    <p>Television: Results you’ll see and believe Cable can be one of the most effective mediums to use to build awareness of your business and product. More Here’s an example of a TV spot we did</p>
                    <Link to="/TVforYou"><a className="readmore" >Read more...</a></Link> 
                </div>

                <div className="tip">
                    <h4>What About Direct Mail?</h4>
                    <p>Direct Mail: Your message, right in the hands of your market  Direct marketing is more targetd and more effective than ever. Let us show you how a well-designed direct mail campaign can be a solid</p>
                    <Link to="/Directmail"><a className="readmore" >Read more...</a></Link>
                </div>

                <div className="tip">
                    <h4>20 Years and Counting…</h4>
                    <p>Celebrating 20 Years of imMEDIAte Results! Skolnick Media and Communications is able to provide you with all the research necessary to make the most cost effective and efficient advertising plan that best fits your needs.</p>
                   <Link to="/SMC"><a className="readmore">Read more...</a></Link> 
                </div>
            </div>
            <FooterHome/>
            </div>
        </>
    )
}

function FooterHome(){
    return(
        <div className="footer-container">
            <h2 className="footer-header">Get in Touch</h2>
            <div className="description">
                <h4>Serving Northern Virginia & Hampton Roads</h4>
                
            </div>
        </div>
    )
}