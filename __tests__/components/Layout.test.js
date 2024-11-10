import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Layout from '../../src/components/layout/Layout';

describe('Layout component', () => {

  test('matches snapshot', () => {
    const { asFragment } = render(<Layout><div>Home</div></Layout>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders children components', () => {
    render(<Layout><div>Home</div></Layout>);
    const layoutElement = screen.getByText(/Home/i);
    expect(layoutElement).toBeInTheDocument();
  });

  test('renders header component with the given content', () => {
    render(<Layout><div>Home</div></Layout>);
    const headerElement = screen.getByText(/Park Rater/i);
    expect(headerElement).toBeInTheDocument();
  });
});