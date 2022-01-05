import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
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
    render(<Overview
      product={products[0]}
      productStyle={productStyle}
      reviewMetaData={reviewsMeta}
    />);
    await waitFor(() => {screen.getByClassId('overview')})
    expect(getByClassId(screen.documentElement, 'overview')).toBeInTheDocument()
  });
});

describe('ImageGallery Component', () => {
  it('should have correct number of photos in image gallery thumbnail', async () => {
    render(<ImageGallery
      productStyle={productStyle}
    />);
    await waitFor(() => {screen.getByTestId('overview')})
    expect(getByTestId(screen.documentElement, 'overview')).toBeInTheDocument()
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