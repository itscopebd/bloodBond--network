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

      <section className="mt-16 w-[90%] grid grid-cols-2 gap-5 mx-auto">
        
          <div className="avatar">
            <div className="w-auto rounded">
              <img src="https://i.ibb.co/3RRXjvG/about-1.jpg" />
            </div>
          </div>
        
        <div>
          <h1 className="text-5xl text-center font-bold text-red-500 pt-12">
            About Us
          </h1>
          <p className="text-gray-500 pt-10">
            Safe blood saves lives. Blood is needed by women with complications
            during pregnancy and childbirth, children with severe anaemia, often
            resulting from malaria or malnutrition, accident victims and
            surgical and cancer patients. There is a constant need for a regular
            supply of blood because it can be stored only for a limited period
            of time before use. Regular blood donation by a sufficient number of
            healthy people is needed to ensure that blood will always be
            available whenever and wherever it is needed. Blood is the most
            precious gift that anyone can give to another person – the gift of
            life. A decision to donate your blood can save a life, or even
            several if your blood is separated into its components – red cells,
            platelets and plasma – which can be used individually for patients
            with specific conditions and support. <button className="btn btn-outline btn-error btn-xs">see more</button>
          </p>
        </div>
      </section>
    </>
  );
};
export default Banner;