/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it, jest} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, { act } from 'react-test-renderer';

it('renders correctly', async () => {
  jest.useFakeTimers();
  let root: any;
  await act(async () => {
    root = renderer.create(<App />);
  });

  await act(async () => {
    jest.advanceTimersByTime(3000);
  });

  root.unmount();
  jest.useRealTimers();
});
