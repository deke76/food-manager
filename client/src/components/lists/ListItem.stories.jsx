import React from 'react';
import ListItem from './ListItem';

export default {
  component: ListItem
};

export const Empty = () => <ListItem empty={true} name={'Home'} detailHeader={'Calgary'} detailFooter={'AB'} quantity={0}/>
export const With_Items = () => <ListItem empty={false} name={'Lake'} detailHeader={'Invermere'} detailFooter={'BC'} quantity={2}/>