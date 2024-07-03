import React, { useState } from "react";
import NavComponent from "./Components/NavBar/NavComponent";
import Banner from "./Components/Banner/banner";
import Ourwork from "./Components/OurWork/ourwork";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Ourclients from "./Components/Ourclients/Ourclients";
import Services from "./Components/Services/services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import { Outlet } from "react-router-dom";
const App = () => {
  const [play, setplay] = useState(false);
  return (
    <>
      <NavComponent />
      <Outlet/>
      {/* <Banner /> */}
      {/* <div className="Container">
        <Title
          title="Our Inspiring Work"
          subtitle="These are just a few snapshots of our projects. We’ve successfully delivered thousands of projects worldwide."
        />
        <Ourwork />
        <About setplay={setplay}/>
      </div>
      <div>
        <Ourclients />
      </div>

      <div className="Container">
        <Title title="Our Production Services" />
        <Services />
        <Title title="Let's Start a Conversation" />
        <Contact />
      </div> */}
        <Footer/>
        {/* <VideoPlayer play={play} setplay={setplay}/> */}
    </>
  );
};

export default App;
