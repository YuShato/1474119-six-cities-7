import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RatingList from './rating-list';
import { ReviewData } from '../../common/const';


const setRatingMockFn =jest.MockedFunction;


it('Render \'RatingList\'', () => {

  render(
    <RatingList rating={ReviewData.MAX_RATING} setRating={setRatingMockFn} />,
  );

  expect(screen.getAllByTestId('stars-rating')).toHaveLength(ReviewData.MAX_RATING);
  expect(screen.getAllByTestId('stars-rating-label')).toHaveLength(ReviewData.MAX_RATING);
});
