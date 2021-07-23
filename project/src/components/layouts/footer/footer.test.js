import React from 'react';
import {render, screen} from '@testing-library/react';
import Footer from './footer';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';


it('Render \'Footer\'', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Footer />
    </Router>,
  );

  expect(screen.getByTestId('footer')).toBeInTheDocument();
  expect(screen.getByTestId('footer-logo')).toBeInTheDocument();
});
