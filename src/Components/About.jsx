import React from "react";
import bethPhoto from "../assets/skolnickmediacontact.jpg";
import "../Styles/About.css";

export default function About(){

    return(
        <div className="about-container">
            <div className="container-2">  
                <img className="bethPhoto" src={bethPhoto} />
                <div className="history-container">
                    <p>A History of Success</p>
                    <span>Skolnick Media and Communications, Inc. was started in 1998, made up with the same clients that remain key clients to this day. This local agency/client relationship exemplifies a key benefit of utilizing Skolnick Media and Communications’ 20-plus years of advertising experience. Effective and efficient advertising is one of the most important things you can do for your business. Choosing the right advertising agency is the next. </span>
                    <br/>
                    <p>The Perfect Fit With Your Marketing</p>
                    <span>Whatever your needs may be, Skolnick Media and Communications, Inc. will meet goals, utilizing the best media to deliver your audience on a commission, monthly fee, or project fee basis. Skolnick Media’s low overhead operation allows our company to offer the services of a full service agency, without the costs involved and never sacrificing the quality of production, placement or promotional opportunities. </span>
                </div> 
                </div>
                <div className="lower-container">
                    <div>
                    <p>Our Mission:</p>
                    <span>Create data-driven, multi-channel marketing campaigns – constantly adjusted to maximize lifetime returns.  Vital to our success are our systems, processes, intellectual property and people.</span>
                    </div>
                    <div>
                        <p>Our Approach:</p>
                        <ol>
                            <li>Leverage data analytics to drive orders/results using a synergistic approach across all marketing channels.</li>
                            <li>Engage the best people in their respective fields. Clients are serviced by experienced, senior-level talent.</li>
                            <li>Demonstrate our value through Proof of Concept before the client spends a dime.</li>
                            <li>No long-term commitments.  We will earn your ongoing loyalty with results.</li>
                            
                        </ol>
                    </div>

                    <div className="call-us">
                        <p>Call us!</p>
                        <span>Phone:(703) 216-4334</span>
                        <span>E-mail:beths@skolnickmedia.com</span>
                    </div>

                </div>
           

          
            
        </div>
    )
}