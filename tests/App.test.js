import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../client/src/components/App.jsx';

describe('App Component', function () {
  it('should have a title', function () {
    render(<App />);
    expect(screen.getByText('Loading')).toBeDefined();
  });
});
