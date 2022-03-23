import React from 'react';
import ListItem from './ListItem';

export default {
  component: ListItem
};

export const Empty = () => <ListItem empty={true} name={'Home'} city={'Calgary'} province={'AB'}/>
export const With_Items = () => <ListItem empty={false} name={'Lake'} city={'Invermere'} province={'BC'}/>