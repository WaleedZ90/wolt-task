import { DaysEnum } from '../consts/enums/days-enum';
export type Timeline = {
  [DaysEnum.Monday]: OpenHourItem[];
  [DaysEnum.Tuesday]: OpenHourItem[];
  [DaysEnum.Wednesday]: OpenHourItem[];
  [DaysEnum.Thursday]: OpenHourItem[];
  [DaysEnum.Friday]: OpenHourItem[];
  [DaysEnum.Saturday]: OpenHourItem[];
  [DaysEnum.Sunday]: OpenHourItem[];
};

export type TimelineParsed = {
  [day: string]: string;
};

export type OpenHourItem = {
  type: 'open' | 'close';
  value: number;
};
