import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserList } from '.';

test('renders User List', () => {
  render(<UserList />);
  const linkElement = screen.getByText(/Slack Users/i);
  expect(linkElement).toBeInTheDocument();
});
