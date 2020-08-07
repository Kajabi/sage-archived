import React from 'react';
import { storiesOf } from '@storybook/react';
import { centerXY } from './decorators';

storiesOf('Sage/_Welcome', module)
  .addDecorator(centerXY)
  .add('Default', () => (
    <p>Hello, world</p>
  ));
