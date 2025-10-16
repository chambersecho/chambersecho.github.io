import { useEffect } from "react";
import './Contact.css';
import yw_profilepic_03 from '../assets/images/ProfilePic/yw_profilepic_03.jpg';
import { Link } from "react-router-dom";

export const Contact = () => {
    useEffect(() => {
        document.title = 'Contact - Yin';
      }, []);
    return (
      <main className="contact">
        <div className="desc">
          <img alt='' src={yw_profilepic_03}></img>
          <Link to="/">Yin Wrong</Link> is a Hong Kong-born, London-based artist exploring themes of existentialism, time, and identity through frame-by-frame animation and willow charcoal painting. Their work draws from the aesthetic of <Link to="/">Memento Mori</Link>, the persistence of <Link to="/">Norman McLaren</Link>, and the spirit of resistance embodied in the <Link to="/">Harlem Renaissance</Link>. They explore the relationship between Ephemerality, Momentariness, and Timelessness. They constantly ask what is “real” amidst delirium and chaos, and wonder what would be the last picture of Evanescence we see when the robots of re-education come to wipe our memories. 
<div >
            <br/>
            Fully autodidact, raised in an indifferent and unsupportive environment, their work is built on creative rebellion, and their very being is a testament to self-reliance.
            <br/>
            <br/>
            Please, no junk mail. contact@yinwrong.com <br></br>Any email related to my career as an artist would be cc to edulaweb@gmail.com <br></br>Simon Edwards - my favourite manager in the world. 
          </div>
        </div>

      </main>
    )
}
