import React from 'react';
import LocationListItem from './LocationListItem';

export default {
  component: LocationListItem
};

export const With_Items = () => <LocationListItem empty={false} name={'Lake'} city={'Invermere'} province={'BC'} />;