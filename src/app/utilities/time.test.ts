import { Timeline } from '../models/timeline';
import { constructTimeline, toTimeString } from './time';

describe('constructTimeline', () => {
  it('returns all days Closed when the arrays passed are empty', () => {
    const payload = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
    };

    const output = constructTimeline(payload);
    const expected = {
      monday: 'Closed',
      tuesday: 'Closed',
      wednesday: 'Closed',
      thursday: 'Closed',
      friday: 'Closed',
      saturday: 'Closed',
      sunday: 'Closed',
    };

    expect(output).toStrictEqual(expected);
  });

  it('parses timeline properly', () => {
    let payload: Timeline = {
      monday: [],
      tuesday: [
        { type: 'open', value: 36000 },
        { type: 'close', value: 64800 },
      ],
      wednesday: [],
      thursday: [
        { type: 'open', value: 36000 },
        { type: 'close', value: 64800 },
      ],
      friday: [{ type: 'open', value: 36000 }],
      saturday: [
        { type: 'close', value: 3600 },
        { type: 'open', value: 36000 },
      ],
      sunday: [
        { type: 'close', value: 3600 },
        { type: 'open', value: 43200 },
        { type: 'close', value: 75600 },
      ],
    };

    let output = constructTimeline(payload);
    let expected = {
      friday: '10 AM - 1 AM',
      monday: 'Closed',
      saturday: '10 AM - 1 AM',
      sunday: '12 AM - 9 PM',
      thursday: '10 AM - 6 PM',
      tuesday: '10 AM - 6 PM',
      wednesday: 'Closed',
    };

    expect(output).toStrictEqual(expected);

    payload = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [
        {
          type: 'open',
          value: 64800,
        },
      ],
      saturday: [
        {
          type: 'close',
          value: 3600,
        },
        {
          type: 'open',
          value: 32400,
        },
        {
          type: 'close',
          value: 39600,
        },
        {
          type: 'open',
          value: 57600,
        },
        {
          type: 'close',
          value: 82800,
        },
      ],
      sunday: [],
    };

    output = constructTimeline(payload);
    expected = {
      friday: '6 PM - 1 AM',
      monday: 'Closed',
      saturday: '9 AM - 11 AM, 4 PM - 11 PM',
      sunday: 'Closed',
      thursday: 'Closed',
      tuesday: 'Closed',
      wednesday: 'Closed',
    };

    expect(output).toStrictEqual(expected);
  });
});

describe('toTimeString', () => {
  it('parses seconds properly', () => {
    let output = toTimeString(36000);
    let expected = '10 AM';

    expect(output).toBe(expected);

    output = toTimeString(75600);
    expected = '9 PM';

    expect(output).toBe(expected);
  });
});
