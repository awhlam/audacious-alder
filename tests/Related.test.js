import React from 'react';
import { render, screen } from '@testing-library/react';

// Components
import Related from '../client/src/components/related/Related.jsx';
import RelatedProductsList from '../client/src/components/related/RelatedProductsList.jsx';
import RelatedProductsCard from '../client/src/components/related/RelatedProductsCard.jsx';
import RelatedModal from '../client/src/components/related/RelatedModal.jsx';
import RelatedModalContent from '../client/src/components/related/RelatedModalContent.jsx';

describe('Related Component', function () {
  it('should have "Related Products" as title', function () {
    render(
      <Related />
    );
    expect(screen.getByText('Related Products')).toBeDefined();
  });
});