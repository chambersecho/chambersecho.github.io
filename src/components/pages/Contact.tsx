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
          <Link to="/">Yin Wrong</Link> is a Hong Kong-born, London-based artist exploring themes of existentialism, time, and identity through frame-by-frame 2D animation and willow charcoal painting. Their work draws from the aesthetic of memento mori, the persistence of Norman McLaren, and the spirit of resistance embodied in the Harlem Renaissance. Yin's practice navigates the tension between memory, ephemerality, and endurance, They constantly ask what is “real” amidst delirium and chaos, and wonder what would be the last shape and shade an individual sees when the robots of re-education come to wipe our memories. 


          <div >
            <br/>
            Fully autodidact and raised in an indifferent and unsupportive environment, their work is built on creative rebellion, and their very being is a testament to self-reliance.
            <br/>
            <br/>
            Please, no junk mail. contact@yinwrong.com <br></br> Any email related to my career as an artist would be cc to @edulaweb@gmail.com <br></br>Simon Edwards - my favourite manager in the world. 
          </div>
        </div>
        
      </main>
    )
}
