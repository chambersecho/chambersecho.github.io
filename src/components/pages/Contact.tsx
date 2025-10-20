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
          <Link className="earthyLink" to="/">Yin Wrong</Link> is a Hong Kong-born, London-based artist exploring themes of existentialism, time, and identity through frame-by-frame animation and willow charcoal painting. Their work draws from the aesthetic of <Link className="roseLink" to="/">Memento Mori</Link>, the persistence of <Link className="bewaterLink" to="/">Norman McLaren</Link>, and the spirit of resistance embodied in the <Link className="earthyLink" to="/">Harlem Renaissance</Link>. They explore the relationship between Ephemerality, Momentariness, and Timelessness. They constantly ask what is <Link to="" className='earthyLink'>"real”</Link> amidst delirium and chaos, and wonder what would be the last picture of Evanescence we see when the robots of re-education come to wipe our memories. 
<div >
  <br></br>They joined the <Link className="snowyLink" to="https://nwu.org/">NWU</Link> during the <Link className="snowyLink" to="https://yinwrong.com/antielab">Hong Kong political movement</Link>, and they learned about ethics,credibility, and consent; how to conduct anonymous interviews and protect sensitive sources without exploiting them, they have different aliases for media work, and all of their works in journalism are linked with one single ORCID. <br></br><br></br>

When they are not working as a front-end developer on SaaS or sticking labels on envelopes as an eBay seller, they are usually watching something on Criterion Channel or reading books about race, gender, or politics. If they have more free time, they wish to make more music as <Link className="bewaterLink" to="https://music.apple.com/tr/album/selfish-ep/1796697829">Chamber's Echo</Link> and <Link className="earthyLink" to="https://soundcloud.com/freelespanda">Free lesPanda</Link>, sourcing materials for Toni Morrison or Oscar Wilde related production or create a graphic novel featuring Socrates and Plato as a couple fixing problems together in a dystopian future, learn how to Macramé, and learn how to make authentic crêpes. <br></br>
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
