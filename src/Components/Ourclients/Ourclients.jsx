import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Ourclients.css";
import "../Banner/banner.css";
import Janine from "../../assets/Janine.webp"


const Ourclients = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows:false,
    autoplay: true,
    pauseOnHover: false,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    appendDots: (dots) => (
      <div>
        <ul className="custom-dots">
          {React.Children.map(dots, (dot) =>
            React.cloneElement(dot, {
              className: `${dot.props.className} custom-dot`,
            })
          )}
        </ul>
      </div>
    ),
  beforeChange: function (currentSlide, nextSlide) {
    console.log("before change", currentSlide, nextSlide);
  },
  afterChange: function (currentSlide) {
    console.log("after change", currentSlide);
  },
  };
  return (
    <>
<div className="lg:w-11/12 mx-auto mb-20">
<h2 className="capitalize text-4xl font-bold lg:font-extrabold text-custom-darkblue-rgb w-11/12 lg:w-8/12 text-center mx-auto lg:leading-relaxed">What Our Client Say</h2>
<div className=" slider-container">
      <Slider className=" h-96 mt-20 " {...settings}>
        <div className="h-72  shadow-custom-inset-2xl shadow-blue-200 ">
          <div className=" flex justify-between pt-8 mt-12 w-11/12 mx-auto h-full shadow-2xl rounded-2xl">
            <div className="h-40 w-40 ml-8 "><img className="object-cover rounded-xl border-2 border-gray-500 border-solid " src={Janine} alt="" /></div>
            <div className="w-80 mr-8">
              <h2 className="text-2xl font-bold text-custom-darkblue-rgb">Janine</h2>
              <p className="text-base text-gray-500 mt-2">Great job! my ideas were realised and I like the result. This company is highly recommended. Thank you very much.</p>
              <h3 className="text-custom-pink-rgb text-right mr-4 mt-2">Germany</h3>
            </div>
          </div>
        </div>


        <div className="h-72 shadow-custom-inset-2xl shadow-blue-200">
          <div className=" flex justify-between pt-8 mt-12 w-11/12 mx-auto h-full shadow-2xl rounded-2xl">
            <div className="h-40 w-40 ml-8 "><img className="object-cover rounded-xl border-2 border-gray-500 border-solid " src={Janine} alt="" /></div>
            <div className="w-80 mr-8">
              <h2 className="text-2xl font-bold text-custom-darkblue-rgb">Janine</h2>
              <p className="text-base text-gray-500 mt-2">Great job! my ideas were realised and I like the result. This company is highly recommended. Thank you very much.</p>
              <h3 className="text-custom-pink-rgb text-right mr-4 mt-2">Germany</h3>
            </div>
          </div>
        </div>


        <div className="h-72 shadow-custom-inset-2xl shadow-blue-200">
          <div className=" flex justify-between pt-8 mt-12 w-11/12 mx-auto h-full shadow-2xl rounded-2xl">
            <div className="h-40 w-40 ml-8 "><img className="object-cover rounded-xl border-2 border-gray-500 border-solid " src={Janine} alt="" /></div>
            <div className="w-80 mr-8">
              <h2 className="text-2xl font-bold text-custom-darkblue-rgb">Janine</h2>
              <p className="text-base text-gray-500 mt-2">Great job! my ideas were realised and I like the result. This company is highly recommended. Thank you very much.</p>
              <h3 className="text-custom-pink-rgb text-right mr-4 mt-2">Germany</h3>
            </div>
          </div>
        </div>


        <div className="h-72 shadow-custom-inset-2xl shadow-blue-200">
          <div className=" flex justify-between pt-8 mt-12 w-11/12 mx-auto h-full shadow-2xl rounded-2xl">
            <div className="h-40 w-40 ml-8 "><img className="object-cover rounded-xl border-2 border-gray-500 border-solid " src={Janine} alt="" /></div>
            <div className="w-80 mr-8">
              <h2 className="text-2xl font-bold text-custom-darkblue-rgb">Janine</h2>
              <p className="text-base text-gray-500 mt-2">Great job! my ideas were realised and I like the result. This company is highly recommended. Thank you very much.</p>
              <h3 className="text-custom-pink-rgb text-right mr-4 mt-2">Germany</h3>
            </div>
          </div>
        </div>


        <div className="h-72 shadow-custom-inset-2xl shadow-blue-200">
          <div className=" flex justify-between pt-8 mt-12 w-11/12 mx-auto h-full shadow-2xl rounded-2xl">
            <div className="h-40 w-40 ml-8 "><img className="object-cover rounded-xl border-2 border-gray-500 border-solid " src={Janine} alt="" /></div>
            <div className="w-80 mr-8">
              <h2 className="text-2xl font-bold text-custom-darkblue-rgb">Janine</h2>
              <p className="text-base text-gray-500 mt-2">Great job! my ideas were realised and I like the result. This company is highly recommended. Thank you very much.</p>
              <h3 className="text-custom-pink-rgb text-right mr-4 mt-2">Germany</h3>
            </div>
          </div>
        </div>
        


        <div className="h-72 shadow-custom-inset-2xl shadow-blue-200">
          <div className=" flex justify-between pt-8 mt-12 w-11/12 mx-auto h-full shadow-2xl rounded-2xl">
            <div className="h-40 w-40 ml-8 "><img className="object-cover rounded-xl border-2 border-gray-500 border-solid " src={Janine} alt="" /></div>
            <div className="w-80 mr-8">
              <h2 className="text-2xl font-bold text-custom-darkblue-rgb">Janine</h2>
              <p className="text-base text-gray-500 mt-2">Great job! my ideas were realised and I like the result. This company is highly recommended. Thank you very much.</p>
              <h3 className="text-custom-pink-rgb text-right mr-4 mt-2">Germany</h3>
            </div>
          </div>
        </div>
      </Slider>
    </div>

    </div>
    </>
  );
};

export default Ourclients;
