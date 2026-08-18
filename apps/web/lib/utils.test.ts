import { describe, expect, it } from 'vitest';
import { cn } from './utils';

describe('cn', () => {
  it('joins truthy class values', () => {
    expect(cn('a', 'b', false && 'c', undefined, 'd')).toBe('a b d');
  });

  it('resolves conflicting Tailwind classes in favor of the later one', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
  });
});
