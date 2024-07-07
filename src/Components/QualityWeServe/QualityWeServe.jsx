import React from "react";
import hicon1 from "../../assets/hicon1.png";
import hicon2 from "../../assets/hicon2.png";
import hicon3 from "../../assets/hicon3.png";
function QualityWeServe() {
  return (
    <div>
      <div className="">
        <div className="grid grid-cols-1 grid-rows-auto lg:grid-cols-3 lg:grid-rows-1">
          <div>
            <div>
              <img src={hicon1} alt="" />
              <h1>Picture Service</h1>
            </div>
            <div>
              <p>-Conform</p>
              <p>-Color Correction</p>
              <p>-Titles</p>
              <p>-Caption</p>
              <p>-Dubbing</p>
              <p>-Editorial</p>
              <p>-Storyboard</p>
            </div>
          </div>

          <div>
            <div>
              <img src={hicon2} alt="" />
              <h1>Visual Effects</h1>
            </div>
            <div>
              <p>-Rotoscoping</p>
              <p>-Motion tracking</p>
              <p>-Chroma Removal</p>
              <p>-Motion Graphics</p>
              <p>-Composition</p>
              <p>-Beauty</p>
              <p>-Cleanup</p>
              <p>-Animation</p>
            </div>
          </div>

          <div>
            <div>
              <img src={hicon3} alt="" />
              <h1>Picture Service</h1>
            </div>
            <div>
              <p>Ad Jingle Creation</p>
              <p>Corporate Audio</p>
              <p>Radio Program</p>
              <p>Music Mixing</p>
              <p>Audio Conversion</p>
              <p>Podcast Editing</p>
              <p>Adobe Audition</p>
              <p>Soundtrack Pro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QualityWeServe;
