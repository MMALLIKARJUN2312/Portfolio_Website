import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Heading } from './Heading';

describe('Heading', () => {
  it('defaults to an h2 element', () => {
    render(<Heading>Title</Heading>);
    expect(screen.getByRole('heading', { level: 2, name: 'Title' })).toBeInTheDocument();
  });

  it('renders the requested heading level', () => {
    render(<Heading level={1}>Page title</Heading>);
    expect(screen.getByRole('heading', { level: 1, name: 'Page title' })).toBeInTheDocument();
  });
});
