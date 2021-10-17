import React, { FunctionComponent, useEffect, useState } from 'react';
import { TimelineParsed } from '#/app/models/timeline';
import { constructTimeline } from '#/app/utilities/time';
import { CalendarItem } from './calendar-item';
import { getWeekTimeLine } from '#/app/services';
import './styles.scss';

export const Calendar: FunctionComponent = () => {
  const [daysOfWeek, setDaysOfWeek] = useState<TimelineParsed>({});

  useEffect(() => {
    const fetchTimeline = async () => {
      const response = await getWeekTimeLine();
      setDaysOfWeek(constructTimeline(response));
    };

    fetchTimeline();
  }, []);

  const renderCalendarItems = () => {
    return Object.entries(daysOfWeek).map(([day, openingHours], idx) => (
      <CalendarItem key={idx} day={day} openingHours={openingHours} />
    ));
  };

  return (
    <article className='calendar'>
      <header>
        <i className='far fa-clock header-icon'></i>
        <h1 className='header-text'>Opening hours</h1>
      </header>
      <section className='calendar-section'>{renderCalendarItems()}</section>
    </article>
  );
};
