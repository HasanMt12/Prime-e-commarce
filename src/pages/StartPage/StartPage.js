import React from 'react';
import StartPageBanner from './StartPageBanner/StartPageBanner';
import Brand from './Brand';
import SliderReview from './SliderReview';
import PaidSection from './PaidSection';
import CashBackOffer from './CashBackOffer';
import StartPageFooter from './StartPageFooter';
import ScrollToTop from "react-scroll-to-top";
import { AiOutlineArrowUp } from 'react-icons/ai';
const StartPage = () => {
    return (
        <div>
            <ScrollToTop smooth component={<div style={{ color: "blue", width:"46px" , height:"46px", background:"#4d93cc", borderRadius:"full",  }} className=' flex justify-center items-center ' >
                <AiOutlineArrowUp className='text-white text-xl text-bold'></AiOutlineArrowUp>
            </div>} />
            <StartPageBanner></StartPageBanner>
            <Brand></Brand>
            <SliderReview></SliderReview>
            <PaidSection></PaidSection>
            <CashBackOffer></CashBackOffer>
            <StartPageFooter></StartPageFooter>
        </div>
    );
};

export default StartPage;