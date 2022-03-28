import { React, FoodListItem } from '../../../../constants';

export default {
  component: FoodListItem
};

export const With_Items = () => 
<FoodListItem empty={false} name={'Banana'} expires={'2022-03-28'} purchased={'2022-03-21'} quantity={2}/>;
export const Expired = () => <FoodListItem empty={false} name={'Banana'} expires={'2022-03-20'} purchased={'2022-03-15'} quantity={2} expired={true}/>