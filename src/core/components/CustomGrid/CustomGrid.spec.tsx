import { matchers } from '@emotion/jest';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import CustomGrid from './CustomGrid.styled';

expect.extend(matchers);

describe('CustomGrid render', () => {
  it('should render a CustomGrid component', () => {
    const screen = render(<CustomGrid />);
    const element = screen.container.querySelector('section');
    expect(element).not.toBeUndefined();
    expect(screen.container.childElementCount).toBe(1);
  });
});
