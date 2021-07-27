import React from 'react';
import { render, screen } from '@testing-library/react';
import Star from './star';
import '@testing-library/jest-dom/extend-expect';


const testStar= [
  {
    value: 5,
    title: 'perfect',
  },
  {
    value: 4,
    title: 'good',
  },
  {
    value: 3,
    title: 'not bad',
  },
  {
    value: 2,
    title: 'badly',
  },
  {
    value: 1,
    title: 'terribly',
  },
];

it('Render \'Star\'', () => {
  render(
    <Star rate={testStar[0]} />,
  );

  expect(screen.getByTestId('stars-rating')).toBeInTheDocument();
  expect(screen.getByTestId('stars-rating-label')).toBeInTheDocument();
});
