import React from "react";
import "./Blog.css";

export default function RadioBlog(){

    return(
        <div  className="blog-container">
            <h1 className="blog-head">Radio Gets Results!</h1>
            <p className="blog-subhead">Here are some thoughts to consider:</p>
            <br/>
            <ul className="ordered-list">
                <li>Should your radio buy include AM/FM, satellite, or an internet platform such as YouTube, Spotify or Pandora?</li>
                <br/>
                <li> How do you know which is most effective for your business?</li>
                <br/>
                <li> How do you measure the results of your radio buys?</li>
                <br/>
                <li> How do you determine a budget for radio?</li>
            </ul>
            <br/>
            <p className="blog-subhead">These are just a few things to consider with considering a radio campaign. Our many years of experience in radio and TV have produced excellent results with our clients.</p>
        </div>
    )
}