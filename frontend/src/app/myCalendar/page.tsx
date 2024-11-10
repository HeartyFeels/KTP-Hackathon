'use client';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';

const localizer = momentLocalizer(moment);

interface Event {
  title: string;
  start: Date;
  end: Date;
}

const MyCalendar = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchedEvents: Event[] = [
      {
        title: 'Hackathon',
        start: new Date(2024, 10, 9, 10, 0),
        end: new Date(2024, 10, 9, 22, 0),
      },
      {
        title: 'Field Day',
        start: new Date(2024, 10, 10, 13, 0),
        end: new Date(2024, 10, 10, 16, 0),
      },
      {
        title: 'Charades or Movie Night',
        start: new Date(2024, 10, 12, 19, 0),
        end: new Date(2024, 10, 12, 20, 0),
      },
      {
        title: 'AWS Workshop',
        start: new Date(2024, 10, 19, 19, 0),
        end: new Date(2024, 10, 19, 20, 0),
      },
    ];
    setEvents(fetchedEvents);
  }, []);

  return (
    <div className="h-auto bg-[#082A69] p-4 rounded-lg shadow-md">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        className="bg-white rounded-md shadow-md"
      />
    </div>
  );
};

export default MyCalendar;