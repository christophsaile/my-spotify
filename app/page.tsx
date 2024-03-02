import Header from '@/components/header';
import { Fragment } from 'react';
import RankedTimeRange from '@/components/ranked-time-range';
import RankedList from '@/components/ranked-list';

export default async function Home() {
  return (
    <div className='flex flex-col py-12 gap-16 mx-auto max-w-screen-lg min-h-screen'>
      <Header></Header>
      <main className='flex flex-col gap-16'>
        <section>
          <div className='flex gap-6 mb-8 '>
            <h2 className='text-2xl'>Top Artists</h2>
            <RankedTimeRange variant='artists'></RankedTimeRange>
          </div>
          <RankedList timeRange='short_term' variant='artists' />
          <RankedList timeRange='medium_term' variant='artists' />
          <RankedList timeRange='long_term' variant='artists' />
        </section>
        <section>
          <div className='flex gap-6 mb-8 '>
            <h2 className='text-2xl'>Top Tracks</h2>
            <RankedTimeRange variant='tracks'></RankedTimeRange>
          </div>
          <RankedList timeRange='short_term' variant='tracks' />
          <RankedList timeRange='medium_term' variant='tracks' />
          <RankedList timeRange='long_term' variant='tracks' />
        </section>
        <section>
          <h2 className='mb-8 text-2xl'>My Playlists</h2>
        </section>
      </main>
    </div>
  );
}
