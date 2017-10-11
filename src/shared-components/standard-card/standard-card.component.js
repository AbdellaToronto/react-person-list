import React from 'react';
import { Card, CardContent } from 'material-ui';

export const StandardCard = props => (
  <Card>
    <CardContent>
      {props.children}
    </CardContent>
  </Card>
);