import React from 'react';
import {render, screen} from '@testing-library/react';
import LoadingScreen from './loading-screen';
import '@testing-library/jest-dom/extend-expect';

describe('Component: LoadingScreen', () => {

  it('Render \'FavoritesEmpty\'', () => {
    render(
      <LoadingScreen />,
    );

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('should be render correctly', () => {
    const {container} = render(<LoadingScreen/>);
    expect(container).toMatchSnapshot();
  });
});
