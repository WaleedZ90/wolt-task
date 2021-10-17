import { getWeekTimeLine } from './calendar-service';

describe('calendar-service', () => {
  const mockSuccessResponse = {
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  global.fetch = jest.fn((): any =>
    Promise.resolve({
      json: () => Promise.resolve(mockSuccessResponse),
    })
  );

  it('returns response correctly', async () => {
    const json = await getWeekTimeLine();
    expect(json).toBe(mockSuccessResponse);
  });
});
