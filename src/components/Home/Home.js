import React from 'react';
import Banner from './Banner/Banner';
import DonateProcess from './DonateProcess/DonateProcess';
import Campaign from './Campaign/Campaign';
import CampaignGellery from './CampaignGellery/CampaignGellery';
import BeDonor from './BeDonor/BeDonor';
import Counter from './Counter/Counter';
import Review from './Review/Review';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DonateProcess></DonateProcess>
            <Campaign></Campaign>
            <CampaignGellery></CampaignGellery>
            <Counter></Counter>
            <BeDonor></BeDonor>
            <Review></Review>
             <Subscribe></Subscribe> 
        </div>
    );
};

export default Home;