import { render, screen } from '@testing-library/react';

import { Card } from './Card';

describe('Card', () => {
  test('render', () => {
    render(<Card />);

    screen.debug();
  });
});
