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
          <Link className="earthyLink" to="/">Yin Wrong</Link> is a Hong Kong-born Asian American, ( London-based atm ) artist exploring themes of existentialism, time, and identity through frame-by-frame animation and willow charcoal painting. Their work draws from the aesthetic of <Link className="roseLink" to="/">Memento Mori</Link>, the persistence of <Link className="bewaterLink" to="/">Norman McLaren</Link>, and the spirit of resistance embodied in the <Link className="earthyLink" to="/">Harlem Renaissance</Link>. They explore the relationship between Ephemerality, Momentariness, and Timelessness. They constantly ask what is <Link to="" className='earthyLink'>"real”</Link> amidst delirium and chaos, and wonder what, if anything, outlasts us. 
<div ><br></br><br></br>
  They are currently drawing on lottery slips, transit tickets, and tracing paper imprinted with patterns of chance to create time-based media and frame-by-frame animation. They believe that what keeps them an artist and grants them the privilege to draw is merely a matter of luck. The motif of chance serves as both a reminder and an echo of the days they survived on “false hope.”<br></br>
            <br/>
            A fully autodidactic artist, raised in an indifferent and unsupportive environment, their work is built on creative rebellion, and their very being is a testament to self-reliance.
            They were a web designer and front-end developer before transitioning to an independent animator and artist.
            <br/>
            <br/>
            <Link className="roseLink" to="">Please</Link>, no junk mail. <Link className="earthyLink" to="">contact@yinwrong.com</Link> <br></br>Any email related to my career as an artist would be cc to <Link className="bewaterLink" to="">edulaweb@gmail.com</Link><br></br>Simon Edwards - my favourite manager in the world. 
          </div>
        </div>

      </main>
    )
}
