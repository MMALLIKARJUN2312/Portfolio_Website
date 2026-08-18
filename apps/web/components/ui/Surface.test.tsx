import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Surface } from './Surface';

describe('Surface', () => {
  it('applies default variant and padding classes', () => {
    render(<Surface data-testid="surface">content</Surface>);
    const surface = screen.getByTestId('surface');
    expect(surface).toHaveClass('rounded-xl', 'border', 'p-6');
  });

  it('applies the elevated variant classes', () => {
    render(
      <Surface data-testid="surface" variant="elevated" padding="lg">
        content
      </Surface>,
    );
    const surface = screen.getByTestId('surface');
    expect(surface).toHaveClass('shadow-lg', 'p-8');
  });
});
