import { INotification } from '@core/interfaces';
import { matchers } from '@emotion/jest';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Notification from './Notification';

expect.extend(matchers);

describe('Notification render', () => {
  it('should render a FormPage', () => {
    const defaultNotification: INotification = {
      type: 'SMS',
      category: 'Sports',
      message: 'Real madrid gana',
      username: 'Oscar.Cassin24',
      time: '2023-07-13T20:02:33.084Z'
    };
    const screen = render(<Notification item={defaultNotification} />);
    const element = screen.container.querySelector('section');
    expect(element).not.toBeUndefined();
    expect(screen.container.childElementCount).toBe(1);
  });
});
