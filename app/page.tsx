import Footer from '@/components/footer';
import { currentlyPlayingSong } from '../libs/spotify';
import { Fragment } from 'react';
import Logo from '@/components/logo';
import RankedTimeSelection from '@/components/ranked-time-selection';
import RankedList from '@/components/ranked-list';

export default async function Home() {
  const currentlyPlaying = await (await currentlyPlayingSong()).json();

  return (
    <Fragment>
      <main className='flex flex-col py-12 gap-16 mx-auto max-w-screen-lg min-h-screen'>
        <section>
          <RankedTimeSelection variant='artists'></RankedTimeSelection>
          <RankedList timeRange='short_term' variant='artists' />
          <RankedList timeRange='medium_term' variant='artists' />
          <RankedList timeRange='long_term' variant='artists' />
        </section>
        <section>
          <RankedTimeSelection variant='tracks'></RankedTimeSelection>
          <RankedList timeRange='short_term' variant='tracks' />
          <RankedList timeRange='medium_term' variant='tracks' />
          <RankedList timeRange='long_term' variant='tracks' />
        </section>
        <section>
          <h2 className='mb-8 text-2xl'>My Playlists</h2>
        </section>
      </main>
      <Footer>
        <Logo />
        <div>{currentlyPlaying.item.name}</div>
      </Footer>
    </Fragment>
  );
}
