import React from "react";
import img1 from '../../../images/team_6.jpg';
import img2 from '../../../images/team_7.jpg';
import img3 from '../../../images/team_9.jpg';
import './Volunteers.css';
const Volunteers = () => {
  return (
    <div className="back">
      <div className="text-center py-36">
        <h1 className="text-2xl text-white">OUR VOLUNTEERS</h1>
        <hr className="text-white w-14 h-1 mx-auto" />
        <h2 className="text-4xl lg:text-6xl font-black text-white lg:px-36 mx-auto mt-14">
          The volunteers who give their time and talents help to fulfill our
          mission.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 pt-36 justify-items-center">
            <div className="bg-white shadow-lg shadow-indigo-500/40">
                <img src={img1} alt="" />
                <div className="my-3">
                <h1 className="text-xl font-bold">MELICIA ARNOLD</h1>
                <h2 className="text-xl text-red-500 font-semibold">Co-Founder</h2>
            </div>
            </div>

            <div className="bg-white shadow-lg shadow-indigo-500/40 my-8 lg:my-0">
            <img src={img3} alt="" />
            <div className="my-3">
            <h1 className="text-xl font-bold">Rian Sark</h1>
                <h2 className="text-xl text-red-500 font-semibold">Founder</h2>
            </div>
            </div>

            <div className="bg-white shadow-lg shadow-indigo-500/40">
            <img src={img2} alt="" />
            <div className="my-3">
            <h1 className="text-xl font-bold">Antonella</h1>
                <h2 className="text-xl text-red-500 font-semibold">Co-Founder</h2>
            </div>

            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Volunteers;
