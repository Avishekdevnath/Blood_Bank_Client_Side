import React from 'react';
import bg from "../../../images/blood-donate.jpg";

const About = () => {
    return (
       <div>
            <div className='grid lg:grid-cols-2 my-32'>
            <div className='px-4 lg:ml-20 mt-32'>
            <h1 className='text-6xl font-medium text-red-500'>Who We Are?</h1>
            <p className='text-xl my-5'>
            Blood Buddies is for public donation center with blood donation members in the changing health care system.
            </p>
            <ul className='list-disc text-xl'>
                <li>Specialist blood donors and clinical supervision.</li>
                <li className='py-2'>Increasing communication with our members.</li>
                <li>High quality assessment, diagnosis and treatment.</li>
                <li className='py-2'>Examine critically to ensure alignment.</li>
                <li>The extra care of a multi-disciplinary team.</li>
            </ul>
            </div>
            <div className='lg:block hidden'>
                <img src={bg} width={500} alt="" />
            </div>
        </div>
       </div>
    );
};

export default About;