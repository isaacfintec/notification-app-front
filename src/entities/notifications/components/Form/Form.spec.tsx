import { matchers } from '@emotion/jest';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import FormPage from './Form';

expect.extend(matchers);

describe('FormPage render', () => {
  it('should render a FormPage', () => {
    const screen = render(<FormPage />);
    const element = screen.container.querySelector('section');
    expect(element).not.toBeUndefined();
    expect(screen.container.childElementCount).toBe(1);
  });
});
