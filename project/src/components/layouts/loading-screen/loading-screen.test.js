import React from 'react';
import {render} from '@testing-library/react';
import LoadingScreen from './loading-screen';

describe('Component: LoadingScreen', () => {
  test('should be render correctly', () => {
    const {container} = render(<LoadingScreen/>);
    expect(container).toMatchSnapshot();
  });
});
