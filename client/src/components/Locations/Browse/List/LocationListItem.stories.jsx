import React from 'react';
import LocationListItem from './LocationListItem';

export default {
  component: LocationListItem
};

export const Empty = () => <LocationListItem />;
export const With_Items = () => <LocationListItem empty={false} name={'Lake'} detailHeader={'Invermere'} detailFooter={'BC'} />;