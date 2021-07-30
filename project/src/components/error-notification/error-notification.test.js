import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorNotification from './error-notification';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';


it('Render \'ErrorNotification\'', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <ErrorNotification />
    </Router>,
  );

  expect(screen.getByTestId('error-message')).toBeInTheDocument();
});
