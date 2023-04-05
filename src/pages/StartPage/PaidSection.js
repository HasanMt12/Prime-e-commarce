import React from 'react';
import samplePhoto from '../../assets/samplePhoto.png'
const PaidSection = () => {
    return (
        <>
         <div className='bg-gray-300 '>
            <div className = 'grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-12  lg:px-40 md:px-20 px-6'>
               <div className='flex justify-center items-center'>
                <div>
                <h2 className='lg:text-2xl md:text-xl text-lg font-bold'>Paid.</h2>
                <h2 className='lg:text-lg md:text-md text-sm mt-4'>
                    Shop through befrugal.com, our mobile app or the BeFrugal extension at any of 5000+ stores and earn Cash Back whenever you make a purchase. When you're ready, request your cash from your BeFrugal account via check, PayPal, direct deposit, Venmo, Zelle or gift card. It's that easy!
                </h2>
                </div>
               </div>
               <div>
                <img className='flex justify-center items-center my-6' src={samplePhoto} alt=''></img>
               </div>
            </div>
</div>
<div>
             <div className = 'grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-12  lg:px-40 md:px-20 px-6'>
                <div>
                <img className='flex justify-center items-center my-6' src={samplePhoto} alt=''></img>
               </div>
               <div className='flex justify-center items-center'>
                <div>
                <h2 className='lg:text-2xl md:text-xl text-lg font-bold '>Automatically Apply Coupons & Cash Back</h2>
                <h2 className='lg:text-lg md:text-md text-sm mt-4'>
                    Never worry about searching for coupons or forgetting to activate Cash Back. The BeFrugal extension does it for you. Free download for Chrome, Edge, Firefox and Safari.
                </h2>
                </div>
               </div>
               
            </div>
            <div className='bg-[#FF6633] py-20 ' >
                <div className='flex justify-center items-center'>
                    <div>
                        <h2 className='text-white font-bold lg:text-3xl md:text-xl text-lg'>Join BeFrugal for Free and get a $10 Bonus!</h2>
                        
                    </div>

                </div>
                <div className='flex justify-center items-center w-2/12 mt-4 h-14 mx-auto bg-white text-center text-[#A92500] cursor-pointer rounded font-bold text-xl hover:text-[#7e1e04] shadow-sm hover:shadow-lg' > Join Now
                
                </div>
            </div>
        </div>
        </>
    );
};

export default PaidSection;