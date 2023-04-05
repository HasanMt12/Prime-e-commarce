import React from 'react';

const Nav = () => {
    return (
        <div className='flex justify-between items-center lg:px-52 md:px-32 px-12 h-16 bg-white'>
            <h2 className='text-teal-800 lg:text-2xl italic font-bold md:text-lg text-sm'>PRIME <span className='text-red-700'>XI</span></h2>
            <div className='flex justify-between items-center'>
            <button className='text-blue-500 text-md lg:mr-6 md:mr-3 mr-1 hover:bg-blue-200/80 px-12 py-1'>Login</button>
            <button className='text-white text-md hover:bg-red-600/80 lg:px-8 md:px-4 px-2 bg-[#FF6633] py-1'>Join Now</button>
            </div>
        </div>
    );
};

export default Nav;