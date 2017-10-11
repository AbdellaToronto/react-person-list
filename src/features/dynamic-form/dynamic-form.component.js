import React from 'react';
import { Checkbox, Input, TextField } from 'material-ui';


export const DynamicForm = (props) => {
  return <div style={{display: 'flex', flexDirection:'column', width: 300}}>
    {
      props.data.map(inputData => {
        switch (inputData.type) {
          case 'text':
           return <TextField {...inputData} />;
          case 'textarea':
            return <Input multiline={true} {...inputData} />;
          case 'checkbox':
            return <Checkbox checked={inputData.defaultValue} />;
        }
      })
    }
  </div>
};