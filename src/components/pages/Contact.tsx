import { useEffect } from "react";
import './Contact.css';
import both from '../assets/images/ProfilePic/both.jpg';
import { Link } from "react-router-dom";

export const Contact = () => {
    useEffect(() => {
        document.title = 'Contact - Yin';
      }, []);
    return (
      <main className="contact">
        <div className="desc">
          <img alt='' src={both}></img>
          Hello, I am Yin. 
          <br/>
          I like frame-by-frame experimental animation & memento mori. 
          Sometimes I carve on woodblock, marble or other stones, 
          or shape them into something they are not supposed to be. 
          <div >
            <br/>
           I am splitting my time between London, Manchester and NYC.
           (mostly depends on the boyfriend ) <br/>I am usually at places with birds or squirrels and nice water. <br/>
           or spaces where people who know Bell Hooks is.
           <br/>
            <br/>
            Don't like AI generated anything.
            <br/>
            Tired of socials and people who tell you to "stand up straight"
            <br/>
            ( omg so scary, control freaks!)
            <br></br>
            <br/>
            <Link className="roseLink" to="">Don't need to contact me </Link><br/>if you are not an artist / musician / model or playwright I like, <br/>I just want to be honest and don't want to waste time. 
            <br/><Link className="earthyLink" to="">contact@yinwrong.com</Link> 
          </div>
        </div>

      </main>
    )
}
