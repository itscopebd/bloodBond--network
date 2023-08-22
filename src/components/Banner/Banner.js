"use client";
// import { FcSearch } from "react-icons/fc";

// import AwesomeSlider from "react-awesome-slider";
// import withAutoplay from "react-awesome-slider/dist/autoplay";
// import "react-awesome-slider/dist/styles.css";
// import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import { FcSearch } from "react-icons/fc";
import Aboutus from './Aboutus';


// import required modules
const AutoplaySlider = withAutoplay(AwesomeSlider);

export const metadata = {
  title: "BloodBond--Network || Home",
  description: "Spider Alpha",
};
const Banner = () => {
  return (
    <>
      <div className=" flex justify-center  gap-2">
        <div>
          <input
            type="text"
            placeholder="Search Your Location"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn btn-outline btn-error ">
          Search <FcSearch className=" text-3xl"></FcSearch>
        </button>
      </div>

      {/* banner section */}

      <section className="w-[100%] mx-auto pt-12">
        <AutoplaySlider
          animation="cubeAnimation"
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
        >
          <div
            className="rounded-md"
            data-src="https://i.ibb.co/rkbNpFV/pic-5.jpg"
          />
          <div
            className="rounded-md"
            data-src="https://i.ibb.co/9ZvZr5r/pic-3.jpg"
          />
          <div
            className="rounded-md"
            data-src="https://i.ibb.co/GV7bvZ7/pic-4.jpg"
          />
          <div
            className="rounded-md"
            data-src="https://i.ibb.co/zr85Nds/pic-2.jpg"
          />
          <div
            className="rounded-md"
            data-src="https://i.ibb.co/zm0HPrZ/pic-1.jpg"
          />
        </AutoplaySlider>
      </section>

      {/* about section */}

     <Aboutus></Aboutus>
    </>
  );
};
export default Banner;