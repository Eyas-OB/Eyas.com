import { render, screen } from '@testing-library/react';
import App from './App';

test('renders example cards', () => {
  render(<App />);
  // Verify that the first card is rendered by checking for its heading text.
  const cardHeading = screen.getByRole('heading', { name: /card 1/i });
  expect(cardHeading).toBeInTheDocument();
});
