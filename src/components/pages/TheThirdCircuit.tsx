import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loadeK
import { Carousel } from 'react-responsive-carousel';
import './TheThirdCircuit.css';
import The_Third_Circuit_Poster from '../assets/images/TheThirdCircuit/The_Third_Circuit_Poster.jpg';
import The_Third_Circuit_Still from '../assets/images/TheThirdCircuit/The_Third_Circuit_Still.jpg';
import The_Third_Circuit_Still_title from '../assets/images/TheThirdCircuit/The_Third_Circuit_Still_title.jpg';
import The_Third_Circuit_still_02 from '../assets/images/TheThirdCircuit/The_Third_Circuit_still_02.jpg';

export const TheThirdCircuit = () => {
    useEffect(() => {
        document.title = 'The Third Circuit - Yin';
      }, []);
    return (
      <main className="thethirdcircuit">
        <div className='title'>The Third Circuit</div>
        <div className='link'>( <a target="_blank" href='https://vimeo.com/1121671615'>Experimental Animation )</a></div>
        <Carousel swipeable={false} animationHandler={"fade"} thumbWidth={120} showIndicators={false}>
            <div>
              <img alt='' src={The_Third_Circuit_Poster}></img>
            </div>
            <div>
              <img alt='' src={The_Third_Circuit_Still_title}></img>
            </div>
            <div>
              <img alt='' src={The_Third_Circuit_Still}></img>
            </div>
            <div>
              <img alt='' src={The_Third_Circuit_still_02}></img>
            </div>
        </Carousel>
        <p className='link'>Official Selection<br></br><a target="_blank" href='https://corkfilmfest.org/events/free-radicals-68ebdf9330ca32d686a9ad95/'>The 70th Cork International Film Festival - Free Radicals</a></p>

      </main>
    )
}