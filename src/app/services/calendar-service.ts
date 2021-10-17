import { Timeline } from '../models/timeline';

export const getWeekTimeLine = async (): Promise<Timeline> => {
  return await fetch(`${process.env.WEEK_ENDPOINT}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      mode: 'cors',
    },
  })
    .then((response) => response.json())
    .then((response) => response);
};
