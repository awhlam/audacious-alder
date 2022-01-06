import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
// components
import Reviews from '../client/src/components/reviews/Reviews.jsx';
import AddReview from '../client/src/components/reviews/AddReview.jsx';
import ReviewEntry from '../client/src/components/reviews/ReviewEntry.jsx';
import ReviewList from '../client/src/components/reviews/ReviewList.jsx';
import ReviewSummary from '../client/src/components/reviews/ReviewSummary.jsx';
import SortingBar from '../client/src/components/reviews/SortingBar.jsx';
// sample data
import reviewsMeta from './Fixtures/reviewsMeta.js';
import reviews from './Fixtures/reviews.js';

describe('Reviews', function () {
  it('should have a title', function () {
    render(<Reviews
      reviews={reviews.results}
      reviewMetaData={reviewsMeta}
    />);
    expect(screen.getByText('Ratings & Reviews')).toBeDefined();
  });
});

describe('ReviewSummary', function () {
  it('should have reviews recommend this product text', function () {
    render(<ReviewSummary reviewMetaData={reviewsMeta}/>);
    expect(screen.getByText('% of reviews recommend this product', {exact: false})).toBeDefined();
  });
});

describe('SortingBar', function () {
  it('should have reviews sorted by text', function () {
    render(<SortingBar reviewMetaData={reviewsMeta} reviews={reviews.results}/>);
    expect(screen.getByText('reported reviews), sorted by', {exact: false})).toBeDefined();
  });
});

describe('ReviewList', function () {
  it('should have more reviews text', function () {
    render(<ReviewList
      reviews={reviews.results}
      reviewMetaData={reviewsMeta}
    />);
    expect(screen.getByText('More Reviews', {exact: false})).toBeDefined();
  });

  it('should increase review list when clicking button', async () => {
    const { getAllByText } = render(<ReviewList
      reviews={reviews.results}
      reviewMetaData={reviewsMeta}
    />);
    const numReviewsBefore = getAllByText('Helpful?', {exact: false});
    expect(numReviewsBefore).toHaveLength(2);

    const button = await waitFor(() => screen.getByText('More Reviews', {exact: false}));
    fireEvent.click(button);

    const numReviewsAfter = getAllByText('Helpful?', {exact: false});
    expect(numReviewsAfter).toHaveLength(4);
  });
});

describe('ReviewEntry', function () {
  it('should have helpful text', function () {
    render(<ReviewEntry review={reviews.results[0]}/>);
    expect(screen.getByText('Helpful?', {exact: false})).toBeDefined();
  });
});

describe('AddReview', function () {
  it('should have authentication disclaimer', function () {
    render(<AddReview showModal={true}/>);
    expect(screen.getByText('For authentication reasons, you will not be emailed')).toBeDefined();
  });

  it('should display and close the modal on button click', async () => {
    render(<ReviewList
      reviews={reviews.results}
      reviewMetaData={reviewsMeta}
    />);

    const AddButton = await waitFor(() => screen.getByText('Add a Review', {exact: false}));
    fireEvent.click(AddButton);
    const modal = await waitFor(() => screen.getByText('Write Your Review', {exact: false}));
    expect(modal).toBeVisible();

    const CloseButton = await waitFor(() => screen.getByText('Close', {exact: false}));
    fireEvent.click(CloseButton);
    expect(modal).not.toBeVisible();
  });
});
