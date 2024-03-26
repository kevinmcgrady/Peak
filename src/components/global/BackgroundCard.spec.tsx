import '@testing-library/jest-dom/vitest';

import { render } from '@testing-library/react';
import React from 'react';
import { expect,test } from 'vitest';

import { BackgroundCard } from './BackgroundCard';

test('BackgroundCard component should render with default gray background', () => {
  const { container } = render(<BackgroundCard>Test Content</BackgroundCard>);
  const backgroundCard = container.firstChild;

  expect(backgroundCard).toBeInTheDocument();
  expect(backgroundCard).toHaveClass('bg-gray-100');
});

test('BackgroundCard component should render with green background when color prop is set to green', () => {
  const { container } = render(
    <BackgroundCard color='green'>Test Content</BackgroundCard>,
  );
  const backgroundCard = container.firstChild;

  expect(backgroundCard).toBeInTheDocument();
  expect(backgroundCard).toHaveClass('bg-green-100');
});

test('BackgroundCard component should render with additional custom className', () => {
  const { container } = render(
    <BackgroundCard className='custom-class'>Test Content</BackgroundCard>,
  );
  const backgroundCard = container.firstChild;

  expect(backgroundCard).toBeInTheDocument();
  expect(backgroundCard).toHaveClass('custom-class');
});

test('BackgroundCard component should render children', () => {
  const { getByText } = render(<BackgroundCard>Test Content</BackgroundCard>);
  expect(getByText('Test Content')).toBeInTheDocument();
});
