import React from 'react';
import { render, screen } from '@testing-library/react';
// components
import Reviews from '../client/src/components/reviews/Reviews.jsx';
import AddReview from '../client/src/components/reviews/AddReview.jsx';
import ReviewEntry from '../client/src/components/reviews/ReviewEntry.jsx';
import ReviewList from '../client/src/components/reviews/ReviewList.jsx';
import ReviewSummary from '../client/src/components/reviews/ReviewSummary.jsx';
import SortingBar from '../client/src/components/reviews/SortingBar.jsx';
// sample data
import reviewsMeta from '../client/src/sample-data/reviewsMeta.js';
import reviews from '../client/src/sample-data/reviews.js';

describe('Reviews Component', function () {
  it('should have a title', function () {
    render(<Reviews
      reviews={reviews.results}
      reviewMetaData={reviewsMeta}
    />);
    expect(screen.getByText('Ratings & Reviews')).toBeDefined();
  });
});

describe('ReviewEntry Component', function () {
  it('should have helpful text', function () {
    render(<ReviewEntry review={reviews.results[0]}/>);
    expect(screen.getByText('Helpful?', {exact: false})).toBeDefined();
  });
});

describe('AddReview Component', function () {
  it('should have authentication disclaimer', function () {
    render(<AddReview showModal={true}/>);
    expect(screen.getByText('For authentication reasons, you will not be emailed')).toBeDefined();
  });
});

describe('Review Summary Component', function () {
  it('should have reviews recommend this product text', function () {
    render(<ReviewSummary reviewMetaData={reviewsMeta}/>);
    expect(screen.getByText('% of reviews recommend this product', {exact: false})).toBeDefined();
  });
});

describe('SortingBar Component', function () {
  it('should have reviews sorted by text', function () {
    render(<SortingBar reviewMetaData={reviewsMeta} reviews={reviews.results}/>);
    expect(screen.getByText('reported reviews), sorted by', {exact: false})).toBeDefined();
  });
});

describe('ReviewList Component', function () {
  it('should have more reviews text', function () {
    render(<ReviewList
      reviews={reviews.results}
      reviewMetaData={reviewsMeta}
    />);
    expect(screen.getByText('More Reviews', {exact: false})).toBeDefined();
  });
});
