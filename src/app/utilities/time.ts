import { OpenHourEnum } from '../consts/enums/open-hour-enum';
import { DayNames, DaysEnum } from '../consts/enums';
import { Timeline, TimelineParsed } from '../models/timeline';
import { millisecondsToHours } from 'date-fns';

export const constructTimeline = (timeline: Timeline): TimelineParsed => {
  const result: TimelineParsed = {};
  let i = 0;
  const keys = Object.keys(timeline);
  let openedDay = '';
  let timeString = '';

  while (i < keys.length) {
    const day = keys[i];
    const openHours = timeline[day as DaysEnum];

    if (openHours.length === 0) {
      result[day] = 'Closed';
    }

    openHours.forEach((v, idx) => {
      const isLastItem = idx === openHours.length - 1;

      if (v.type === OpenHourEnum.Open) {
        timeString += `${toTimeString(v.value)} - `;
        openedDay = day;
      }

      if (v.type === OpenHourEnum.Close) {
        timeString += `${toTimeString(v.value)}, `;

        const isPreviousDay = openedDay !== day;

        if (isPreviousDay) {
          result[openedDay] = timeString;
          timeString = '';
          openedDay = day;
        } else {
          result[day] = timeString;
          if (isLastItem) {
            timeString = '';
          }
        }
      }
    });

    i++;
  }

  return trimEnds(result);
};

export const toTimeString = (intervalInSeconds: number): string => {
  let pacificTiming = 'AM';
  const milliseconds = intervalInSeconds * 1000;
  let hours = millisecondsToHours(milliseconds);

  if (hours > 12) {
    hours = hours % 12;
    pacificTiming = 'PM';
  }

  return `${hours} ${pacificTiming}`;
};

const trimEnds = (obj: TimelineParsed) => {
  Object.entries(obj).forEach(([key, val]) => {
    const newVal = val.trim();
    if (newVal.charAt(newVal.length - 1) === ',') {
      obj[key] = newVal.slice(0, -1);
    }
  });

  return obj;
};

export const isToday = (day: string): boolean => {
  const today = new Date();
  return DayNames[today.getDay()] === day;
};
