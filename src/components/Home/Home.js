import React from 'react';
import Banner from './Banner/Banner';
import DonateProcess from './DonateProcess/DonateProcess';
import Campaign from './Campaign/Campaign';
import CampaignGellery from './CampaignGellery/CampaignGellery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DonateProcess></DonateProcess>
            <Campaign></Campaign>
            <CampaignGellery></CampaignGellery>
        </div>
    );
};

export default Home;