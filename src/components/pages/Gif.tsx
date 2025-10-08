import './Gif.css';
import eyes1Gif from '../assets/images/Eyes1.gif';
import eyes2Gif from '../assets/images/Eyes2.gif';
import eyeBlinking from '../assets/images/Eyes_Blinking.gif';
import eyesLooking from '../assets/images/Eyes_Looking.gif';
import SkatingJasonLee from '../assets/images/Skating_Jason_Lee.gif';
import SkatingJayAdams from '../assets/images/Skating_Jay_Adams.gif';
import SkullSkeleton from '../assets/images/Skull_Skeleton.gif'
import Television from '../assets/images/Television.gif'
import FlowerBloom from '../assets/images/Flower_Bloom.gif'
import BlackSheep from '../assets/images/Black_Sheep.gif'

export const Gif = () => {
    return (
        <main className="gallery">

                <div className="SkullSkeleton"><img src={SkullSkeleton} alt=''></img></div>
                <div className="SkatingJasonLee"><img src={SkatingJasonLee} alt=''></img></div>
                <div className="SkatingJayAdams"><img src={SkatingJayAdams} alt=''></img></div>
                <div className="Television"><img src={Television} alt=''></img></div>
                <div className="eyesLooking"><img src={eyesLooking} alt=''></img></div>
                <div className="BlackSheep"><img src={BlackSheep} alt=''></img></div>
                <div className="FlowerBloom"><img src={FlowerBloom} alt=''></img></div>
                <div className="eyes1Gif"><img src={eyes1Gif} alt=''></img></div>
                <div className="eyes2Gif"><img src={eyes2Gif} alt=''></img></div>
                <div className="eyeBlinking"><img src={eyeBlinking} alt=''></img></div>

        </main>
    )
}     