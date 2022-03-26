import React from 'react';
import LocationListCard from './LocationListCard';

export default {
  component: LocationListCard
};

export const With_Items = () => <LocationListCard empty={false} name={'Lake'} city={'Invermere'} province={'BC'} />;