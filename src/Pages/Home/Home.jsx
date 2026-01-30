import React from 'react';
import Banner from '../../Components/Banner/Banner';
import DocCard from '../../Components/DocCard/DocCard';
import CompleteHook from '../CountAnimation/CompleteHook';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
          <div>
              <DocCard></DocCard>
            <CompleteHook></CompleteHook>
          </div>
        </div>
    );
};

export default Home;