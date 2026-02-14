import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Button from './Button';

describe('Button Component', () => {
  it('renders children correctly', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies the primary variant class by default', () => {
    render(<Button>Submit</Button>);
    // The button has "bg-primary text-primary-foreground" mapped from variants
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('bg-primary');
  });

  it('handles click events properly', () => {
    let clicked = false;
    render(<Button onClick={() => (clicked = true)}>Test Click</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(clicked).toBe(true);
  });
});
