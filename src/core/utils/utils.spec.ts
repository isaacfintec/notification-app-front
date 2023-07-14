import * as utils from './index';

describe('@Utils', () => {
  it('@utils:getColorByCategory: should get a hex color by category', () => {
    let color = utils.getColorByCategory('Sports');
    expect(color).toBe('#82a9bd');

    color = utils.getColorByCategory('Finance');
    expect(color).toBe('#CFD8DC');

    color = utils.getColorByCategory('Movies');
    expect(color).toBe('#BDBDBD');

    // @ts-ignore
    color = utils.getColorByCategory();
    expect(color).toBe('#FFFFFF');
  });

  it('@utils:formatDate: should format a date', () => {
    const date = utils.formatDate(new Date().toDateString());
    const regex = new RegExp(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{2,4})/); // expect 7/14/2023
    expect(regex.test(date)).toBe(true);
  });

  it('@utils:noEmptyData: should validate empty object values', () => {
    let isValid = utils.noEmptyData({ success: 'All its ok' });
    expect(isValid).toBe(true);

    isValid = utils.noEmptyData({
      noEmptyData: '',
      success: 'All its ok'
    });
    expect(isValid).toBe(false);
  });
});
