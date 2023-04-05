import React from 'react';
import brandPhoto from '../../assets/Brand_logo.png'

const Brand = () => {
    return (
        <div className='px-36 mt-20'>
            <h2 className='text-md font-semibold text-gray-700 '> BeFrugal features over 5000 stores including:</h2>
            <img src={brandPhoto} alt=''/>
        </div>
    );
};

export default Brand;