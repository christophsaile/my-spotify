import Footer from '@/components/footer';
import { currentlyPlayingSong } from '../libs/spotify';
import { Fragment } from 'react';
import Logo from '@/components/logo';
import RankedTimeRange from '@/components/ranked-time-range';
import RankedList from '@/components/ranked-list';

export default async function Home() {
  // const currentlyPlaying = await (await currentlyPlayingSong())?.json();

  return (
    <Fragment>
      <main className='flex flex-col py-12 gap-16 mx-auto max-w-screen-lg min-h-screen'>
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
      <Footer></Footer>
    </Fragment>
  );
}
