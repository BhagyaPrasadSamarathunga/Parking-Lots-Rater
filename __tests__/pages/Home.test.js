import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../src/pages/home/Home';

describe('Home component', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});