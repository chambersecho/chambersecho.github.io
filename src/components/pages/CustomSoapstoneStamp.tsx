import { useEffect } from "react";
import './CustomSoapstoneStamp.css';

import stamp_01 from '../assets/images/stamp_01.jpg';
import stamp_02 from '../assets/images/stamp_02.jpg';
import stamp_03 from '../assets/images/stamp_03.jpg';

export const CustomSoapstoneStamp = () => {
  useEffect(() => {
    document.title = 'Custom Soapstone Stamp - Yin';
  }, []);
  return (
    <main className="custom-soapstone-stamp">
      <div className='title'>Bespoke / Custom-Made Soapstone Stamp</div>

      <div className='desc'>Hand-carved from natural soapstone, made to your design with a unique handcrafted finish. Perfect for printing, display, branding, or personal projects.</div>

      <div className="image-content">
        <img alt='Custom made soapstone' title='Custom made soapstone' src={stamp_01}></img>
      </div>

      <div className="desc">
        Size: 80 × 60 x 10 mm<br />
        Price: £275<br />
        Lead Time: 3–5 working days<br /><br />

        Includes one oil-based ink pad.<br />
        Shipped via Royal Mail First Class.<br />

        Hand delivery available in Manchester / London<br />
        On selected days only.<br />
        <br />
        For orders outside the UK,<br /> the oil-based ink pad will be replaced with a water-based ink pad <br />due to shipping policy.<br />
        <br />
        Payment Methods<br />
        Revolut / Venmo: @yinwrong<br />
        Stripe / Etsy / eBay available<br /><br />

        Questions / Inquiries<br />
        contact@yinwrong.com<br /><br />

        Instagram<br />
        @yinwrong<br />

      </div>

      <div className="image-content">
        <img alt='Hand-carved bespoke soapstone stamp in progress' title='Hand-carved bespoke soapstone stamp in progress' src={stamp_02}></img>
      </div>

      <div className="image-content">
        <img alt='Soapstone closeup' title='Soapstone closeup' src={stamp_03}></img>
      </div>
    </main>)
}