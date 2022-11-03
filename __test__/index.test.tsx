import { render, screen } from '@testing-library/react';
import Index from '../pages/index';
import '@testing-library/jest-dom';

import 'i18n/index.ts';

describe('Home', () => {
  it('renders a title', () => {
    render(<Index />);

    const heading = screen.getByRole('heading', {
      level: 1,
    });

    expect(heading).toBeInTheDocument();
  });
  it('renders a disclaimer', () => {
    render(<Index />);

    const disclaimer = screen.getByText(/One old Chinese said/i);
    expect(disclaimer).toBeInTheDocument();
  });
});
