import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReviewFeedback from './review-feedback';

const testComment = 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor';

it('Render \'ReviewFeedback\'', () => {
  render(
    <ReviewFeedback comment={testComment} />,
  );

  expect(screen.getByTestId('reviews-textarea')).toBeInTheDocument();
});
