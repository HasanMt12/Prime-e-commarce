import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";
import { FaApple } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
const Login = () => {
    return (
        <div className='bg-white lg:mb-2 md:mb-12 mt-6 lg:w-9/12 md:w-11/12 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]  mx-auto py-8 lg:px-16 md:px-10 px-16' >
            <h2 className='lg:text-xl  rounded md:text-lg text-lg font-bold text-center text-blue-900'>Join for Free & Get a <span className='text-green-400'>$10 Bonus</span></h2>
            <input type='email' placeholder='Enter Your Email' className='bg-gray-50 rounded shadow-inner placeholder:text-center h-10 mt-4  focus:outline-blue-800 border-[1px] border-gray-800 w-full '/>
            <button className='h-10 w-full hover:bg-orange-600 bg-[#FF6633] mt-2 rounded text-white text-center'>Continue with Email</button>
            <h2 className='text-center my-4 text-gray-500 text-semibold'>or</h2>
            <div className='h-10 w-full px-2 flex justify-between items-center   mt-2 rounded text-white border-[1px] border-gray-500 hover:border-gray-900 cursor-pointer shadow-sm hover:shadow-lg'>
                <FcGoogle className='text-2xl'></FcGoogle>
                <h2 className='text-gray-900 '>Continue With Google</h2>
                <h2 className=''> </h2>
            </div>
            <div className='h-10 w-full px-2 flex justify-between items-center   mt-2 rounded text-white border-[1px] border-gray-500 hover:border-gray-900 cursor-pointer shadow-sm hover:shadow-lg'>
                <GrFacebookOption className='text-2xl text-blue-800'></GrFacebookOption>
                <h2 className='text-gray-900 '>Continue With Facebook</h2>
                <h2 className=''> </h2>
            </div>
            <div className='h-10 w-full px-2 flex justify-between items-center   mt-2 rounded text-white border-[1px] border-gray-500 hover:border-gray-900 cursor-pointer shadow-sm hover:shadow-lg'>
                <FaApple className='text-2xl text-gray-900'></FaApple>
                <h2 className='text-gray-900 '>Continue With Apple</h2>
                <h2 className=''> </h2>
            </div>
            <div className='flex justify-center items-center mt-2'>
                <input type="checkbox" className=" checked:bg-blue-500 ..." />
                <h2 className='text-gray-400 text-sm ml-1'>Receive exclusive coupons and deals newsletter</h2>
            </div>
             <h2 className='text-gray-400 text-xs text-center mt-6'>By joining, you agree to the BeFrugal Terms & Privacy Policy .</h2>

            <div className='flex justify-center items-center mt-2'>
                <h2 className='text-gray-400 text-xs text-center '>* $10 Bonus Terms </h2>
                <AiOutlineQuestionCircle className='text-gray-400 text-xs ml-2'></AiOutlineQuestionCircle>
            </div>
        </div>
    );
};

export default Login;