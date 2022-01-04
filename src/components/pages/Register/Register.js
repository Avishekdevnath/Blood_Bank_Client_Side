import React from 'react';
import { Link } from 'react-router-dom';
import registerImg from '../../../images/blood-donate.jpg';

const Register = () => {
    return (
        <div className='grid grid-cols-2'>
            <div>
                <form className='w-3/4 mx-auto mt-36' action="">
                <input class="placeholder:italic placeholder:text-gray-400 block bg-white w-3/4 border border-red-400 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter name.." type="text" name="search"/>
                <input class="placeholder:italic placeholder:text-gray-400 block bg-white w-3/4 border border-red-400 rounded-md py-2 pl-2 pr-3 my-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter email.." type="text" name="search"/>
                <input class="placeholder:italic placeholder:text-gray-400 block bg-white w-3/4 border border-red-400 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter password.." type="password" name="search"/>
                <input class="placeholder:italic placeholder:text-gray-400 block bg-white w-3/4 border border-red-500 rounded-md py-2 pl-2 pr-3 mt-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Confirm password.." type="password" name="search"/>

                <Link className='underline underline-offset-1 block py-4' to="/login">are you already user?</Link>

                <button type='submit' class="rounded-none bg-red-500 w-32 py-2 mt-3 font-medium text-white">Register</button>

                </form>
            </div>
            <div>
                <img src={registerImg} width={600} alt="" />
            </div>
        </div>
    );
};

export default Register;