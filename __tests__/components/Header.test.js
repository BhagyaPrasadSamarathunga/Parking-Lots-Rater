import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../src/components/header/Header';

describe('Header component', () => {

  test('renders with correct label', () => {
    render(<Header />);
    const headerElement = screen.getByText(/Park Rater/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});