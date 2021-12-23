import React from 'react';

const ReviewSummary = () => {
  return (
    <div className="box">
      <h2>Summary</h2>
      <div>
        3.5 stars<br />
        100% of reviews recommend this product<br />
        5 stars<br />
        4 stars<br />
        3 stars<br />
        2 stars<br />
        1 stars<br />
      </div>
      <div>
        <h3>Size</h3>
        Too small / Perfect / Too large
      </div>
      <div>
        <h3>Comfort</h3>
        Poor / Perfect
      </div>
    </div>
  );
};

export default ReviewSummary;
