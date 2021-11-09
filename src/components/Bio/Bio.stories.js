import React from 'react';

import Bio from './Bio';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Bio',
  component: Bio
};

const Template = () => (
  <Bio 
    headshot='https://images.unsplash.com/photo-1574047473179-a73921fc1eb6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhciUyMHdhcnN8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    name='Fizzy'
    tagline='Hello world'
    role='Whatever' 
  />
);

export const Default = Template.bind({});