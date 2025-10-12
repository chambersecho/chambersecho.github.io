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
        
        {/* <button onClick={() => {setActiveIndex(2)}}>Click</button> */}
      </main>
    )
}