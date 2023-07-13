import { matchers } from '@emotion/jest';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Select from './Select';

expect.extend(matchers);

describe('Select render', () => {
  it('should render a Select', () => {
    const screen = render(
      <Select items={[{ value: 'Sports', label: 'Sports' }]} />
    );
    const element = screen.getByTestId('Select');
    expect(element).not.toBeUndefined();
    expect(screen.container.childElementCount).toBe(1);
  });
});
