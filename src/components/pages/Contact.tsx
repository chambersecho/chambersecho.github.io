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
          <Link to="/">Yin Wrong</Link> is a Hong Kong-born, London-based artist exploring themes of existentialism, time, and identity through frame-by-frame 2D animation and willow charcoal painting.

Their work draws from the aesthetic of memento mori, the persistence of Norman McLaren, and the spirit of resistance embodied in the Harlem Renaissance. Yin's practice navigates the tension between memory, ephemerality, and endurance—asking what it means to exist, to vanish, and to leave a trace.
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
