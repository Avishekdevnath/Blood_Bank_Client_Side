import React from "react";
import blood from "../../../images/blood-donate.jpg";

const Hero = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1">
        <div className="">
          <img src={blood} alt="" />
        </div>
        <div className="mt-36 p-4">
          <h1 className="text-5xl font-black tracking-widest leading-relaxed">BLOOD<br />DONATION</h1>

          <p className="w-full md:w-2/3 lg:w-2/3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, dolore ut. Numquam impedit vel, harum ea sapiente delectus non aliquid molestiae repudiandae ipsam aperiam ratione aliquam quaerat iure! Necessitatibus ullam ipsam sunt aliquid deleniti hic quas harum voluptatibus a cumque ad, quod aliquam dolorum quidem dolor nihil molestias vel recusandae. Aliquam optio quasi, officiis temporibus quo voluptate quae debitis adipisci
          </p>

          <button class="rounded-full  py-2 px-4 font-semibold text-indigo-50 tracking-wide bg-red-500 mt-8 hover:bg-pink-500">Learn More</button>

        </div>
      </div>
    </div>
  );
};

export default Hero;
