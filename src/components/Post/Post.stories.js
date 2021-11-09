import React from 'react';

import Post from './Post';

export default {
  title: 'Components/Post',
  component: Post
};

const Template = () => (
  <Post 
    content='Hello World'
    date='4/4/2015' 
  />
);

export const Default = Template.bind({});
