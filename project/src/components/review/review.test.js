import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Review from './review';

const testReview = {
  'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'date': '2019-05-08T14:13:56.569Z',
  'id': 1,
  'rating': 4,
  'user': {
    'avatarUrl': 'img/1.png',
    'id': 4,
    'isPro': false,
    'name': 'Max',
  },
};

it('Render \'Review\'', () => {
  render(
    <Review review={testReview} />,
  );

  expect(screen.getByTestId('reviews-item')).toBeInTheDocument();
  expect(screen.getByTestId('reviews-info')).toBeInTheDocument();

  expect(screen.getByText('A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.')).toBeInTheDocument();
});
