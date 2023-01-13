import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import Navbar from './Navbar';

describe('Component Navbar', () => {
  it('Should match to snapshot', () => {
    const result = render(<Navbar />);
    expect(result).toMatchSnapshot();
  });

  it('Should accesible Navbar', async () => {
    const { container } = render(<Navbar />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
