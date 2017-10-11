import React from 'react';
import { Button, withStyles } from 'material-ui';


const styles = (theme) => ({
  danger: {
    color: 'orange',
  },
});

export const DangerButton = withStyles(styles)
(props => <Button className={props.classes.danger}>Danger Button</Button>);

