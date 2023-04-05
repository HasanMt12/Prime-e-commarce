import React from 'react';
import brandLogo from '../../assets/ebay.png.png'
import { BsFillShareFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import headPhone from '../../assets/headphone.jpg'
import { Link } from 'react-router-dom';
import newsLogo from '../../assets/nbc-news.png'
const CashBackOffer = () => {

  const items = [...Array(10)];
  const items2 = [...Array(5)];
  const items3 = [...Array(5)];
    return (
        <div className='bg-[#F4F4F4] py-6' >
            <h2 className='text-center lg:text-3xl md:text-xl text-lg my-12'> Check out today 's top Cash Back offers & hand picked deals</h2>
            <div className='lg:w-9/12 md:w-10/12 w-11/12 mx-auto '>

            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 '>
               {items.map((item, index) => (
           <div className='w-[100%] h-[180px] border-dotted border-[1px] rounded border-gray-400 bg-white'>
               <div className='lg:p-6 md:p-3 p-1'>
                 <img className='w-[70%] mx-auto ' src={brandLogo} alt=''></img>
               </div> 
                <hr className=''></hr>
                    <h2 className='text-center mt-4 text-green-500'>Up to <span className='font-bold text-lg text-green-700'>10%</span></h2>

           </div>
          ))}
            </div>

             <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2 my-14'>
               {items2.map((item, index) => (
           <div className='w-[100%]  border-t-2 border-indigo-700 bg-white'>
            <div className='border-[1px] border-gray-400 border-t-none'>
              <div className='flex justify-between items-center mb-4'>
                <div className='flex justify-start items-start'>
                    <div className='text-center -mt-[1px] text-white text-sm font-semibold bg-indigo-700 w-[36px] h-[25px]'>
                        Deal
                    </div>
                    <h2 className='text-gray-600 text-xs ml-2 '>9 hours age</h2>
                </div>

                <div className='pr-2 text-gray-400 flex justify-end items-center text-lg gap-2'>
                    <BsFillShareFill></BsFillShareFill>
                    <AiFillStar></AiFillStar>
                </div>
              </div>
              <img src={headPhone} alt=''></img>
              <div className='px-2 mt-8'>
                <h2 className='text-gray-500 cursor-pointer my-4 hover:text-cyan-800 text-sm font-semibold'>JLab JBuddies Pro Kids Headphones</h2>
                <h2 className='text-xs text-gray-400'>Walmart</h2>
                <h2 className='text-lg hover:text-cyan-800 cursor-pointer mb-4 font-bold text-gray-800'>$10 <span className='text-gray-400 font-medium text-xs ml-2 line-through'>25</span></h2>
              </div>
                </div>
           </div>
          ))}
            </div>
            </div>

           <Link to='/'>
           <h2  className='text-center my-8 text-blue-600 underline font-semibold text-lg cursor-pointer'>Browse full site</h2>
            </Link> 
            <div className='bg-white '>

                <div className='lg:w-8/12 md:w-10/12 w-11/12 mx-auto p-8'>
                    <h2 className='text-xs -mt-6 mb-6'>As Seen On:</h2>
                    <div className = 'grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-3'>
                       {items2.map((item, index) => (
                        <img src={newsLogo} alt=''></img>
          ))}  
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CashBackOffer;