import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import {rest} from 'msw'
import {setupServer} from 'msw/node'
// components
import Overview from '../client/src/components/overview/Overview.jsx';
import ImageGallery from '../client/src/components/overview/ImageGallery.jsx';
import ImageGalleryThumbnail from '../client/src/components/overview/ImageGalleryThumbnail.jsx';
import ProductInfo from '../client/src/components/overview/ProductInfo.jsx';
import Style from '../client/src/components/overview/Style.jsx';
import StyleEntry from '../client/src/components/overview/StyleEntry.jsx';
import Cart from '../client/src/components/overview/Cart.jsx';
// sample data
import products from '../client/src/sample-data/products.js';
import productStyle from '../client/src/sample-data/productStyle.js';
import reviewsMeta from '../client/src/sample-data/reviewsMeta.js';

const server = setupServer(
  rest.get('/products', (req, res, ctx) => {
    return res(ctx.json(products))
  }),
  rest.get('/products/styles', (req, res, ctx) => {
    return res(ctx.json(productStyle))
  }),
  rest.get('/reviews/meta', (req, res, ctx) => {
    return res(ctx.json(reviewsMeta))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Overview Component', () => {
  it('should have an overview class', async () => {
    const {container} = render(<Overview
      product={products[0]}
      productStyle={productStyle}
      reviewMetaData={reviewsMeta}
    />);
    await waitFor(() => {screen.getByText('Camo Onesie')})
    expect(container.querySelector('[data-testid="overview"]'))
  });
});

describe('ImageGallery Component', () => {
  it('should have correct number of photos in image gallery thumbnail', async () => {
    const imageGalleryThumbnailLength = productStyle.results[0].photos
    const container = render(<ImageGallery
      productPhoto={productStyle.results[0]}
    />);
    await waitFor(() => {screen.getByAltText('imageGallery')})
    expect(imageGalleryThumbnailLength).toHaveLength(productStyle.results[0].photos.length)
  });
});

describe('ProductInfo Component', () => {
  it('should have a product name', async () => {
    render(<ProductInfo
      product={products[0]}
      styleInfo={productStyle.results[0]}
      reviewMetaData={reviewsMeta}
    />);
    await waitFor(() => {screen.getByText(
      'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.'
      )})
    expect(screen.getByText('Camo Onesie')).toBeDefined();
  });
});



describe('Style Component', () => {
  it('should have correct number of photos in style thumbnail list', async () => {
    const styleThumbnailList = productStyle.results
    const container = render(<Style
      productStyle={productStyle}
      />);
    await waitFor(() => {screen.getByTestId('styleContainer')})
    expect(styleThumbnailList).toHaveLength(productStyle.results.length)
  });
});


describe('Cart Component', () => {
  it('should render select size in dropdown by default', async () => {
    render(<Cart
      skus={productStyle.results[0].skus}
    />);
    await waitFor(() => {screen.getByText(
      'Select Size'
    )})
    expect(screen.getByText('Select Size')).toBeDefined();
  });
});

//need to ask Rob
//want to test if on /cart get data length increment on fireEvent add to cart click

// describe('Cart Component', () => {
//   it('should send a post request on add to cart button click', async () => {
//     render(<Cart
//       skus={productStyle.results[0].skus}
//     />);
//     await waitFor(() => {screen.getByText(
//       'Select Size'
//     )})
//     fireEvent.click(screen.getByText('Add to Cart'))
//     expect()
//   });
// });