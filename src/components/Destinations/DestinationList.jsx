import React from 'react';
import { destinations } from '../../assets/data/destinations';
import DestinationCard from './DestinationCard';

const DestinationList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
      {destinations.map((item) => <DestinationCard key={item.id} destinations={item} />)}
    </div>
  )
}

export default DestinationList