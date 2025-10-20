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
        <div className='link'>( <a target="_blank" href='https://vimeo.com/1116453067'>Experimental / Music Video )</a></div>
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

        <p className="link">Official Selection<br></br><a target="_blank" href='https://www.newfilmmakers.com/fall-series-november-1-30/'>NewFilmmakers NY</a><br></br><a target="_blank"href="https://liftoff.network/">Lift-Off Sessions 2025 Volume 10</a></p>
      <><p>Synopsis<br></br><br></br>A secret island popped up in an hourglass of a fountain, skeleton dancers bring you back to the 90s by their iconic dance moves and choreography inspired by popular American MVs of the era and Avant-garde artists who broke the rules. To remind people that interesting things out of the mainstream did happen in the past, but were overlooked.<br></br>
<br></br>
Soundtrack by Polypores <br></br>( Stephen James Buckley)</p></><br></br>
<p>Note</p><br></br>
I discovered Polypores' music on Bandcamp in 2023 while I was in Paris. It wasn't a fun trip, so I was looking for something to help me escape and came across <a className="roseLink" target="_blank" href="https://polypores.bandcamp.com/album/ecco">Polypores' albums</a>. Listening to one of them during an Uber ride felt like being on another planet. I remember thinking, 'This is exactly where I want to be right now.' 
Later, I met him at a gig in Liverpool, and we quickly became friends. <br></br><br></br>After he saw <a className="earthyLink" href="https://yinwrong.com/thethirdcircuit">The Third Circuit</a>, he asked if I wanted to make a music video for him. I agreed to give it a try, so I visited Preston for inspiration. I spent some time in the park, wandering around, taking photos and videos. I was especially drawn to <a className="bewaterLink" target="_blank" href="https://telegra.ph/Whorl-Moodboard-02-28">a fountain</a> that looked abandoned, but I imagined it was once full of life, so I placed an hourglass there. This made me think about what influences Polypores' music. 
<br></br><br></br>Since he grew up in the 90s, I watched a lot of dance videos from that era. While talking to <a className="earthyLink" target="_blank" href="https://emtingler.com/">Em Tingler</a>, they mentioned that <a className="roseLink" target="_blank" href="https://youtu.be/-1v_q6TWAL4?si=xCJ-_TAxLUyMrOJL&t=25">Buffy the Vampire Slayer</a> is very 90s, so I watched the first episode and noticed a guy on a skateboard. That made me think of the <a className="earthyLink" href="https://youtu.be/0yrEHjl1vFo?si=E55m-f2e9pqlt4DZ">Z-Boys</a>, so I decided to include <a className="earthyLink" href="https://youtu.be/sCk0XHs_FIc?si=2tV5WdmaJsoeA1iD">Jay Adams</a>. Em also suggested <a className="bewaterLink" href="https://youtu.be/shKJ3kcSkh0?si=oW7W-Tj33edLwQLt">Jason Lee</a>, so I added him too.
<br></br><br></br>
The dance moves take inspiration from well-known 90s American music videos, such as those featuring <a className="roseLink" target="_blank" href="https://youtu.be/1yXiUco7gHE?si=zm8Ury5gZYUgC-CL">Bart Simpson</a>/<a className="bewaterLink" target="_blank" href="https://youtu.be/82L37zmXjU4?si=W9GdZfMJhyCe-Ms9&t=36">'Creep'</a>, and <a className="earthyLink" target="_blank" href="https://youtu.be/rKf6jsYlnN8?si=0qdvwA0bNHUnIW7B&t=65">the Butterfly</a>. 
They also draw from choreographers like <a className="roseLink" target="_blank" href="https://youtu.be/jrbdzPk2Xi0?si=zhnT9siGh8Nj57O1">Michael Clark</a> and <a className="bewaterLink" target="_blank" href="https://youtu.be/L_EVQQ9Wybg?si=Qz1mSxnFP3ACfLWr">Anne Teresa De Keersmaeker</a>, who are respected in experimental and avant-garde circles but often missed by mainstream audiences.



        {/* <button onClick={() => {setActiveIndex(2)}}>Click</button> */}
      </main>
    )
  
}