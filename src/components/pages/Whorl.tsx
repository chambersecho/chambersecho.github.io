import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loadeK
import { Carousel } from 'react-responsive-carousel';
import './Whorl.css';
import Whorl_Poster_title from '../assets/images/Whorl/Whorl_Poster_title.jpg';
import Whorl_Still01 from '../assets/images/Whorl/Whorl_Still01.jpg';
import Whorl_Still from '../assets/images/Whorl/Whorl_Still.jpg';
import Whorl_Still_03 from '../assets/images/Whorl/Whorl_Still_03.jpg';

export const Whorl = () => {
    useEffect(() => {
        document.title = 'Whorl - Yin';
      }, []);
    return (
      <main className="whorl">
        <div className='title'>Whorl</div>
        <div className='link'>( <a target="_blank" rel="noreferrer" href='https://vimeo.com/1116453067'>Experimental / Music Video )</a></div>
        <Carousel swipeable={false} animationHandler={"fade"} thumbWidth={120} showIndicators={false}>
            <div>
              <img alt='' src={Whorl_Poster_title}></img>
            </div>
            <div>
              <img alt='' src={Whorl_Still01}></img>
            </div>
            <div>
              <img alt='' src={Whorl_Still}></img>
            </div>
            <div>
              <img alt='' src={Whorl_Still_03}></img>
            </div>
        </Carousel>

        <p className="link">Official Selection<br/><a target="_blank" rel="noreferrer" href='https://www.newfilmmakers.com/fall-series-november-1-30/'>NewFilmmakers NY</a><br/><a target="_blank" rel="noreferrer"href="https://liftoff.network/ft-filmmaker-sessions-2025-v10/">Lift-Off Sessions 2025 Volume 10</a></p>
      <><p>Synopsis<br/><br/>Music Video for WHORL by Polypores ( Preston based Musician )<br/>
<br/>
Soundtrack by Polypores <br/>( Stephen James Buckley )</p></><br/>
<p>Note</p><br/>
The dance moves take inspiration from well-known 90s American music videos, such as those featuring <a className="roseLink" target="_blank" rel="noreferrer" href="https://youtu.be/1yXiUco7gHE?si=zm8Ury5gZYUgC-CL">Bart Simpson</a>/<a className="bewaterLink" target="_blank" rel="noreferrer" href="https://youtu.be/82L37zmXjU4?si=W9GdZfMJhyCe-Ms9&t=36">'Creep'</a>, and <a className="earthyLink" target="_blank" rel="noreferrer" href="https://youtu.be/rKf6jsYlnN8?si=0qdvwA0bNHUnIW7B&t=65">the Butterfly</a>. 
They also draw from choreographers like <a className="roseLink" target="_blank" rel="noreferrer" href="https://youtu.be/jrbdzPk2Xi0?si=zhnT9siGh8Nj57O1">Michael Clark</a> and <a className="bewaterLink" target="_blank" rel="noreferrer" href="https://youtu.be/L_EVQQ9Wybg?si=Qz1mSxnFP3ACfLWr">Anne Teresa De Keersmaeker</a>, who are respected in experimental and avant-garde circles but often missed by mainstream audiences.
        {/* <button onClick={() => {setActiveIndex(2)}}>Click</button> */}
      </main>
    )
  
}