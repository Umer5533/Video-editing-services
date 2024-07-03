import React, { useRef } from "react";
import "./services.css";
import nextbtn from "../../assets/next.png";
import previousbtn from "../../assets/previous.png";

import corporate from "../../assets/corporate.png";
import commercial from "../../assets/commercial.png";
import explain from "../../assets/explain.png";
import tv from "../../assets/tv.png";
import animate from "../../assets/animate.png";
import editing from "../../assets/editing.png";

const Services = () => {
const slider = useRef();
let tx = 0;
    const slideforward = ()=>{
        if(tx> -67){
            tx-=16.7;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slidebackward = ()=>{
        if(tx < 0){
            tx+=16.7;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className="services" >
      <img src={nextbtn} alt="" className="next-btn" onClick={slideforward}/>
      <img src={previousbtn} alt="" className="previous-btn" onClick={slidebackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="service-info">
                <img src={corporate} alt="" />
                <div>
                  <h3>CORPORATE VIDEO</h3>
                </div>
              </div>
              <p>
                Be one step ahead of your competitors with the help of our
                high-quality video production company. Whether your business is
                big or small, Artx Films offers customized ideas to create a
                visually appealing story that showcases your business’s value.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="service-info">
                <img src={commercial} alt="" />
                <div>
                  <h3>VIDEO COMMERCIAL</h3>
                </div>
              </div>
              <p>
                We are a professional video production company that makes
                interesting digital video commercials to step-up your business’s
                visibility and increase conversion rates on social media, such
                as YouTube, Vimeo, Facebook, Instagram and more.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="service-info">
                <img src={explain} alt="" />
                <div>
                  <h3>EXPLAINER VIDEO</h3>
                </div>
              </div>
              <p>
                Our video production house turns complicated ideas and stories
                into an engaging explainer video that presents your business’s
                audience with all the relevant details they need to know about
                your company and what you offer.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="service-info">
                <img src={tv} alt="" />
                <div>
                  <h3>TV COMMERCIAL</h3>
                </div>
              </div>
              <p>
                Make your brand their first choice! ArtX Films is a video
                production house that creates the most unique TV commercials to
                showcase your brand, boost your sales, and put your brand in
                front of huge numbers of customers.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="service-info">
                <img src={animate} alt="" />
                <div>
                  <h3>VIDEO ANIMATION</h3>
                </div>
              </div>
              <p>
                Video animation can be used to teach difficult procedures or
                principles, promote a product, or even establish product
                awareness. With the rising need for digital.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="service-info">
                <img src={editing} alt="" />
                <div>
                  <h3>VIDEO EDITING</h3>
                </div>
              </div>
              <p>
                Our professional video production company has all the high-end
                video editing technology and software which makes your video
                more detailed and appealing for your audience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
