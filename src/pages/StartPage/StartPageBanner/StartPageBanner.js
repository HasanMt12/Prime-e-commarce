import React from 'react';
import {  ImCheckmark} from 'react-icons/im';
import './StartPageBanner.css'
import Login from '../../shared/LoginForm/Login';
const StartPageBanner = () => {
    return (
        <div className='mainDiv '>
            <div className = 'grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:px-40 md:px-20 px-6'>
                <div className='mt-12 hidden lg:block md:block'>
                    <h2 className='text-white  font-bold lg:text-4xl md:text-2xl'>Get up to 40% Cash Back </h2>
                    <h2 className='text-white font-bold lg:text-4xl md:text-2xl'>at 5000+ Stores</h2>
                    <div className='mt-8 flex justify-start items-center gap-2'>
                        <ImCheckmark className='lg:text-3xl md:text-xl text-lg  font-bold text-yellow-600'></ImCheckmark>
                        <h2 className='text-white  lg:text-2xl md:text-xl text-lg  '>Highest Cash Back Guaranteed</h2>
                    </div>
                     <div className='mt-4 flex justify-start items-center gap-2'>
                        <ImCheckmark className='lg:text-3xl md:text-xl text-lg  font-bold text-yellow-600'></ImCheckmark>
                        <h2 className='text-white  lg:text-2xl md:text-xl text-lg  '>No Confusing Points or Rewards</h2>
                    </div>
                     <div className='mt-4 flex justify-start items-center gap-2'>
                        <ImCheckmark className='lg:text-3xl md:text-xl text-lg  font-bold text-yellow-600'></ImCheckmark>
                        <h2 className='text-white  lg:text-2xl md:text-xl text-lg  '>Always 100% FREE</h2>
                    </div>
                     <div className='mt-4 flex justify-start items-start gap-2'>
                        <ImCheckmark className='lg:text-3xl md:text-xl text-lg font-bold text-yellow-600'></ImCheckmark>
                        <h2 className='text-white  lg:text-2xl md:text-xl text-lg  '>Fast Cash Payout via Check, PayPal, Direct Deposit</h2>
                    </div>
                </div>
                 <div>
                    <Login></Login>
                 </div>
            </div>
        </div>
    );
};

export default StartPageBanner;