import React from 'react';
import Banner from '../../Components/Banner/Banner';
import DocCard from '../../Components/DocCard/DocCard';
import CompleteHook from '../CountAnimation/CompleteHook';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DocCard></DocCard>
            <CompleteHook></CompleteHook>
        </div>
    );
};

export default Home;