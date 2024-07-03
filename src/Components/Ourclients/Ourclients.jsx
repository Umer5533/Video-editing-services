import React from "react";
import "./Ourclients.css";
import dotted from "../../assets/dotted.png";
import pak from "../../assets/pakistan.jpg";
import india from "../../assets/india.jpg";
import usa from "../../assets/usa.jpg";
import canada from "../../assets/canada.jpg";
import russia from "../../assets/russia.jpg";
import dubai from "../../assets/dubai.jpg";

import arrow from '../../assets/arrow.png'

const Ourclients = () => {
  return (
    <div className="ourClients Container" >
      <img className="dotted-img" src={dotted} alt="" />
      <h2>Our Clients</h2>

      <div className="clients">
        <div className="sep-client">
          <img src={pak} alt="" />
          <h3>pakistan</h3>
        </div>
        <div className="sep-client">
          <img src={india} alt="" />
          <h3>india</h3>
        </div>
        <div className="sep-client">
          <img src={usa} alt="" />
          <h3>usa</h3>
        </div>
        <div className="sep-client">
          <img src={canada} alt="" />
          <h3>canada</h3>
        </div>
        <div className="sep-client">
          <img src={russia} alt="" />
          <h3>russia</h3>
        </div>
        <div className="sep-client">
          <img src={dubai} alt="" />
          <h3>dubai</h3>
        </div>

      </div>
        <button className='btn'>See more <img src={arrow} alt="" /></button>
    </div>
  );
};

export default Ourclients;
