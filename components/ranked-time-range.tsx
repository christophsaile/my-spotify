'use client';
import { useEffect, useState } from 'react';
import Button from './button';
import { TimeRange } from '@/libs/spotify';

export default function RankedTimeRange({ variant }: { variant: 'artists' | 'tracks' }) {
  const [timeRange, setTimeRange] = useState<TimeRange>('short_term');

  useEffect(() => {
    const elems = document.querySelectorAll(`.${variant}.ranked-list`);
    elems.forEach((elem) => {
      elem.classList.contains(timeRange)
        ? elem.classList.remove('hidden')
        : elem.classList.add('hidden');
    });
  }, [timeRange, variant]);

  return (
    <ul className='flex gap-4'>
      <li>
        <Button active={timeRange === 'short_term'} onClick={() => setTimeRange('short_term')}>
          recent
        </Button>
      </li>
      <li>
        <Button active={timeRange === 'medium_term'} onClick={() => setTimeRange('medium_term')}>
          last 6 months
        </Button>
      </li>
      <li>
        <Button active={timeRange === 'long_term'} onClick={() => setTimeRange('long_term')}>
          all time
        </Button>
      </li>
    </ul>
  );
}
