
const DEFAULT_STATE = [
  {
    type: 'text',
    label: 'hello message',
    defaultValue: 'Hello World',
  },
  {
    type: 'text',
    label: 'travel',
    defaultValue: 'Back to toronto today!',
  },
  {
    type: 'checkbox',
    label: 'had fun',
    defaultValue: true,
  },
  {
    type: 'textarea',
    label: 'comments',
    defaultValue: 'some long text area data to show comments or something else like them',
  }
];



export const DynamicFormReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};