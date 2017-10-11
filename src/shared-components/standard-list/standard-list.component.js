import React from 'react';
import { List, ListItem, ListItemText } from 'material-ui';


export const StandardList = props => (<List>
  {props.data.map(item => (
    <ListItem key={item}>
    <ListItemText primary={item} />
  </ListItem>
  ))}
</List>);