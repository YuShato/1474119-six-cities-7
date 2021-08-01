import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RatingList from './rating-list';
import { cleanup } from '@testing-library/react';

const testRatingData= [
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


describe('Render \'RatingList\'', () => {
  afterEach(cleanup);

  render(
    <RatingList rating={testRatingData} />,
  );

  expect(screen.getAllByTestId('stars-rating')).toHaveLength(5);
  expect(screen.getAllByTestId('stars-rating-label')).toHaveLength(5);

});
