import Header from '@/components/header';
import RankedTimeRange from '@/components/ranked-time-range';
import RankedList from '@/components/ranked-list';
import Intro from '@/components/intro';
import Playlists from '@/components/playlists';

export default async function Home() {
  return (
    <div className='flex flex-col px-4 py-12 gap-16 mx-auto max-w-screen-lg min-h-screen'>
      <Header></Header>
      <main className='flex flex-col gap-16'>
        <Intro></Intro>
        <section>
          <div className='flex flex-col md:flex-row gap-6 mb-8 '>
            <h2 id='artists' className='text-2xl'>
              Top Artists
            </h2>
            <RankedTimeRange variant='artists'></RankedTimeRange>
          </div>
          <RankedList timeRange='short_term' variant='artists' />
          <RankedList timeRange='medium_term' variant='artists' />
          <RankedList timeRange='long_term' variant='artists' />
        </section>
        <section>
          <div className='flex flex-col md:flex-row gap-6 mb-8 '>
            <h2 id='tracks' className='text-2xl'>
              Top Tracks
            </h2>
            <RankedTimeRange variant='tracks'></RankedTimeRange>
          </div>
          <RankedList timeRange='short_term' variant='tracks' />
          <RankedList timeRange='medium_term' variant='tracks' />
          <RankedList timeRange='long_term' variant='tracks' />
        </section>
        <section>
          <Playlists></Playlists>
        </section>
      </main>
    </div>
  );
}
