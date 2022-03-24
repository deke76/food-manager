import React from 'react';
import FoodListItem from './FoodListItem';

export default {
  component: FoodListItem
};

export const Empty = () => <FoodListItem />;
export const With_Items = () => <FoodListItem empty={false} name={'Lake'} detailHeader={'Invermere'} detailFooter={'BC'} quantity={2}/>;