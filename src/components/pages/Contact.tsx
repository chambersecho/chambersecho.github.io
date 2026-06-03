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
          <Link to="/">Yin Wrong</Link> is a Hong Kong-born, Autistic artist exploring themes of existentialism, time, and identity through frame-by-frame 2D animation, experiments with Marble, stones and woodcut. Their work draws from the aesthetic of memento mori, the persistence of Norman McLaren, and the spirit of resistance embodied in the Harlem Renaissance.
          <div >
            <br/>
            A fully autodidactic artist, raised in an indifferent and unsupportive environment, their work is built on creative rebellion, and their very being is a testament to self-reliance.
            They were a web designer and front-end developer before transitioning to an independent animator and artist.
            <br/>
            <br/>
            <Link className="roseLink" to="">Please</Link>, no junk mail. <Link className="earthyLink" to="">contact@yinwrong.com</Link> 
          </div>
        </div>

      </main>
    )
}
