import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import './styles.scss';
import { isToday } from '#/app/utilities/time';

type Props = {
  day: string;
  openingHours: string;
};

export const CalendarItem: FunctionComponent<Props> = ({
  day,
  openingHours,
}) => {
  return (
    <div
      className={classNames(
        'calendar-item',
        openingHours === 'Closed' && 'calendar-item--closed'
      )}
    >
      <p className='day-text'>
        {day} {isToday(day) && <span className='today-text'>Today</span>}
      </p>
      <p className='time-text'>{openingHours}</p>
    </div>
  );
};
