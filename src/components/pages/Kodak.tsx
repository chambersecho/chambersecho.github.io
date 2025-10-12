import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loadeK
import { Carousel } from 'react-responsive-carousel';
import './Kodak.css';
import ldn_aug2025_1 from '../assets/images/Kodak/ldn_aug2025_1.jpg';
import ldn_aug2025_2 from '../assets/images/Kodak/ldn_aug2025_2.jpg';
import ldn_aug2025_3 from '../assets/images/Kodak/ldn_aug2025_3.jpg';
import ldn_aug2025_4 from '../assets/images/Kodak/ldn_aug2025_4.jpg';
import ldn_aug2025_5 from '../assets/images/Kodak/ldn_aug2025_5.jpg';
import ldn_aug2025_6 from '../assets/images/Kodak/ldn_aug2025_6.jpg';
import ldn_aug2025_7 from '../assets/images/Kodak/ldn_aug2025_7.jpg';
import ldn_aug2025_8 from '../assets/images/Kodak/ldn_aug2025_8.jpg';
import ldn_aug2025_9 from '../assets/images/Kodak/ldn_aug2025_9.jpg';

export const Kodak = () => {
    useEffect(() => {
        document.title = 'Kodak - Yin';
      }, []);
    return (
      <main className="kodak">
        <div className='title'>Kodak films</div>
        <div className='link'>( Kodak Portra 800 / Ultramax 400 )</div>
        <Carousel swipeable={false} animationHandler={"fade"} thumbWidth={120} showIndicators={false}>
            <div>
              <img alt='' src={ldn_aug2025_1}></img>
            </div>
            <div>
              <img alt='' src={ldn_aug2025_2}></img>
            </div>
            <div>
              <img alt='' src={ldn_aug2025_3}></img>
            </div>
            <div>
              <img alt='' src={ldn_aug2025_4}></img>
            </div>
            <div>
              <img alt='' src={ldn_aug2025_5}></img>
            </div>
            <div>
              <img alt='' src={ldn_aug2025_6}></img>
            </div>
            <div>
              <img alt='' src={ldn_aug2025_7}></img>
            </div>
            <div>
              <img alt='' src={ldn_aug2025_8}></img>
            </div>
             <div>
              <img alt='' src={ldn_aug2025_9}></img>
            </div>
        </Carousel>
        
        {/* <button onClick={() => {setActiveIndex(2)}}>Click</button> */}
      </main>
    )
}