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
      <><p>Synopsis<br></br><br></br>A secret island popped up in an hourglass of a fountain, skeleton dancers bring you back to the 90s by their iconic dance moves and choreography inspired by popular American MVs of the era. To remind people that interesting things out of the mainstream did happen in the past, but were overlooked.<br></br>
<br></br>
Soundtrack by Polypores ( Stephen James Buckley)</p></><br></br>
<p>Note</p><br></br>
I discovered Polypores' music on Bandcamp in 2023 while I was in Paris. It wasn't a fun trip, so I was looking for something to help me escape and came across <a target="_blank" href="https://polypores.bandcamp.com/album/ecco">Polypores' albums</a>. Listening to one of them during an Uber ride felt like being on another planet. I remember thinking, 'This is exactly where I want to be right now.' 
Later, I met him at a gig in Liverpool, and we quickly became friends. After he saw <a href="https://yinwrong.com/thethirdcircuit">The Third Circuit</a>, he asked if I wanted to make a music video for him. I agreed to give it a try, so I visited Preston for inspiration. I spent some time in the park, wandering around, taking photos and videos. I was especially drawn to <a target="_blank" href="https://telegra.ph/Whorl-Moodboard-02-28">a fountain</a> that looked abandoned, but I imagined it was once full of life, so I placed an hourglass there. This made me think about what influences Polypores' music. Since he grew up in the 90s, I watched a lot of dance videos from that era. While talking to Em Tingler, they mentioned that Buffy the Vampire Slayer is very 90s, so I watched the first episode and noticed a guy on a skateboard. That made me think of the Z-Boys, so I decided to include Jay Adams. Em also suggested Jason Lee, so I added him too.




        {/* <button onClick={() => {setActiveIndex(2)}}>Click</button> */}
      </main>
    )
  
}