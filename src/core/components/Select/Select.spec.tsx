import { matchers } from '@emotion/jest';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Select from './Select';

expect.extend(matchers);

describe('Select render', () => {
  it('should render a Select component', () => {
    const screen = render(
      <Select value="Sports" items={[{ value: 'Sports', label: 'Sports' }]} />
    );
    const element = screen.getByTestId('select');
    expect(element).not.toBeUndefined();
    expect(screen.container.childElementCount).toBe(1);
  });
});
