import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReviewFeedback from './review-feedback';

const testComment = 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor';
const testSetCommentFn =jest.MockedFunction;

it('Render \'ReviewFeedback\'', () => {
  render(
    <ReviewFeedback comment={testComment} setComment={testSetCommentFn} />,
  );

  expect(screen.getByTestId('reviews-textarea')).toBeInTheDocument();
  expect(screen.getByTestId('reviews-output')).toBeInTheDocument();
});
