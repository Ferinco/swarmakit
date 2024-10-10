import React, { useState } from 'react';
import Slider from './Slider';

export default {
  title: 'Input/Slider',
  component: Slider,
};

const Template = (args) => {
  const [value, setValue] = useState(args.min);
  return <Slider {...args} value={value} onChange={(e) => setValue(Number(e.target.value))} />;
};

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  isDisabled: false,
};

export const Min = Template.bind({});
Min.args = {
  min: 0,
  max: 100,
  value: 0,
  isDisabled: false,
};

export const Max = Template.bind({});
Max.args = {
  min: 0,
  max: 100,
  value: 100,
  isDisabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  min: 0,
  max: 100,
  isDisabled: true,
};