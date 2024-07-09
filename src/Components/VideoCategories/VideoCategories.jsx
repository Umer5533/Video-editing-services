import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../Banner/banner.css";
const VideoCategories = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
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
      <div className="bg-custom-skyblue-rgb pt-12 lg:pt-28 lg:mt-32 lg:mb-36 ">
        <div className=" lg:w-11/12 mx-auto ">
          <h2 className="capitalize text-4xl font-bold lg:font-extrabold text-custom-darkblue-rgb w-11/12 lg:w-8/12 text-center mx-auto lg:leading-relaxed">
            Some of the Popular Video Categories We Support
          </h2>
          <div className=" slider-container mt-10 w-11/12 mx-auto">
            <Slider className="h-96"  {...settings}>
              <div className=" ">
                <div className="flex flex-row justify-center items-center gap-x-4 h-20 ">
                  <div className="flex-1 w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-custom-pink-rgb text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-500 ">
                      my Videos
                    </Link>
                  </div>
                  <div className="flex-1 w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-custom-pink-rgb text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-500 ">
                      my Videos
                    </Link>
                  </div>
                  <div className="flex-1 w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-custom-pink-rgb text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-500 ">
                      my Videos
                    </Link>
                  </div>
                  <div className="flex-1 w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-custom-pink-rgb text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-500 ">
                      my Videos
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" ">
                <div className="flex flex-row justify-center items-center gap-x-4 h-20 ">
                  <div className="flex-1 w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-custom-pink-rgb text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-500 ">
                      my Videos
                    </Link>
                  </div>
                  <div className="flex-1 w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-custom-pink-rgb text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-500 ">
                      my Videos
                    </Link>
                  </div>
                  <div className="flex-1 w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-custom-pink-rgb text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-500 ">
                      my Videos
                    </Link>
                  </div>

                </div>
              </div>

              <div>
                <div className="flex flex-row justify-center items-center gap-x-4 h-20 ">
                  <div className="flex-1 w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-custom-pink-rgb text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-500 ">
                      my Videos
                    </Link>
                  </div>
                  <div className="flex-1 w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-custom-pink-rgb text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-500 ">
                      my Videos
                    </Link>
                  </div>
                  <div className="flex-1 w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-custom-pink-rgb text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-500 ">
                      my Videos
                    </Link>
                  </div>
                  <div className="flex-1 w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-custom-pink-rgb text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-500 ">
                      my Videos
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-row justify-center items-center gap-x-4 h-20 ">
                  <div className="flex-1 w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-custom-pink-rgb text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-500 ">
                      my Videos
                    </Link>
                  </div>
                  <div className="flex-1 w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-custom-pink-rgb text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-500 ">
                      my Videos
                    </Link>
                  </div>
                  <div className="flex-1 w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-custom-pink-rgb text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-500 ">
                      my Videos
                    </Link>
                  </div>
                 
                </div>
              </div>

              <div>
                <div className="flex flex-row justify-center items-center gap-x-4 h-20 ">
                  <div className="flex-1 w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-custom-pink-rgb text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-500 ">
                      my Videos
                    </Link>
                  </div>
                  <div className="flex-1 w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-custom-pink-rgb text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-500 ">
                      my Videos
                    </Link>
                  </div>
                  <div className="flex-1 w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-custom-pink-rgb text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-500 ">
                      my Videos
                    </Link>
                  </div>
                  <div className="flex-1 w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-custom-pink-rgb text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-500 ">
                      my Videos
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-row justify-center items-center gap-x-4 h-20 ">
                  <div className="flex-1 w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-custom-pink-rgb text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-500 ">
                      my Videos
                    </Link>
                  </div>
                  <div className="flex-1 w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-custom-pink-rgb text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-500 ">
                      my Videos
                    </Link>
                  </div>
                  <div className="flex-1 w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-custom-pink-rgb text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-500 ">
                      my Videos
                    </Link>
                  </div>
                  
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCategories;
