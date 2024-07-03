import React from "react";
import "./About.css";
import aboutimg from "../../assets/aboutus.jpg";
import playicon from "../../assets/playbtn.png";
const About = ({setplay}) => {
  return (
    <div className="about">
      <div className="aboutleft">
        <img className="about-img" src={aboutimg} alt="" />
        <img className="play-icon" src={playicon} alt="" onClick={()=>{setplay(true)}} />
      </div>
      <div className="aboutright">
        <h3>About NextGen</h3>
        <h2>Welcome to NextGen Media Solutions</h2>
        <p>
          We've worked with companies all over the world, no matter how big or
          small.
        </p>
        <p>
        NextGen Media Solutions is a video production company that specializes in making
          video content and animation that highlights your key message and
          spearheads your marketing campaigns, reaching new audiences, and
          driving business.
        </p>

        <p>
          We want to excite and inspire people, that’s why we never compromise
          on quality or originality. no matter if it’s a TV commercial or social
          media video. A special combination of creativity and technical
          expertise is used at every stage of our video production to ensure
          that your business or marketing goal is visually represented in an
          accurate and appealing way.
        </p>
      </div>
    </div>
  );
};

export default About;
