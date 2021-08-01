import React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import ReviewForm from './review-form';
import '@testing-library/jest-dom/extend-expect';
import { ReviewData } from '../../common/const';

const mockStore = configureStore();

it('Render \'ReviewForm\'', () => {

  render(
    <redux.Provider store={mockStore({DATA: {currentProperty: {id: 1}}})}>
      <ReviewForm placeId={1} />
    </redux.Provider>,
  );

  expect(screen.getByTestId('reviews-form')).toBeInTheDocument();

  expect(screen.getByText('Submit')).toBeInTheDocument();

  userEvent.type(screen.getByTestId('reviews-textarea'), 'Test');
  expect(screen.getByDisplayValue('Test')).toBeInTheDocument();
  expect(screen.getAllByTestId('stars-rating')).toHaveLength(ReviewData.MAX_RATING);
  expect(screen.getAllByTestId('stars-rating-label')).toHaveLength(ReviewData.MAX_RATING);
});

