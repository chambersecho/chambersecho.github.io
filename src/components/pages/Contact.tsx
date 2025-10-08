import { useEffect } from "react";
import './Contact.css';
import yinwoods_head from '../assets/images/yinwoods_head.jpeg';
import { Link } from "react-router-dom";

export const Contact = () => {
    useEffect(() => {
        document.title = 'Contact - Yin';
      }, []);
    return (
      <main className="contact">
        <div className="desc">
          <img alt='' src={yinwoods_head}></img>
          <Link to="/">Yin Wrong</Link> is a Hong Kong-born, London-based Artist exploring existentialism, time, and identity through frame-by-frame 2D animation and willow charcoal painting. 
            Per style is heavily influenced by the aesthetic of Memento Mori and spirit of Norman McLaren. 

          <div >
            <br/>
            <br/>
            <br/>
            Please, no junk mail.
            <br/>
            contact@yinwrong.com
          </div>
        </div>
        
      </main>
    )
}
