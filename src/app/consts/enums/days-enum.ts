export enum DaysEnum {
  Monday = 'monday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
  Thursday = 'thursday',
  Friday = 'friday',
  Saturday = 'saturday',
  Sunday = 'sunday',
}

export const DayNames: { [dayIndex: number]: string } = {
  0: DaysEnum.Sunday,
  1: DaysEnum.Monday,
  2: DaysEnum.Tuesday,
  3: DaysEnum.Wednesday,
  4: DaysEnum.Thursday,
  5: DaysEnum.Friday,
  6: DaysEnum.Saturday,
};
