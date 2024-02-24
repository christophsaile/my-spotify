import Card from '@/components/card';
import Footer from '@/components/footer';
import { currentlyPlayingSong, myTopArtists, myTopTracks } from '../libs/spotify';
import { Fragment } from 'react';
import Logo from '@/components/logo';

export default async function Home() {
  const artists = await (await myTopArtists()).json();
  const songs = await (await myTopTracks()).json();
  const currentlyPlaying = await (await currentlyPlayingSong()).json();

  return (
    <Fragment>
      <main className='flex flex-col gap-16 mx-auto max-w-screen-lg min-h-screen'>
        <section>
          <h2 className='mb-8 text-2xl'>Top Artists</h2>
          <ol className='grid grid-cols-2 grid-rows-5 grid-flow-col gap-y-6 gap-x-10'>
            {artists.items.map((artist, index: number) => (
              <li className='flex items-center gap-4 w-full' key={artist.id}>
                <span className='text-2xl w-12'>{index + 1}.</span>
                <Card
                  link={artist.external_urls.spotify}
                  title={artist.name}
                  description={
                    artist.genres.length > 0 ? artist.genres.splice(0, 3).join(', ') : ''
                  }
                  image={artist.images[0].url}
                />
              </li>
            ))}
          </ol>
        </section>
        <section>
          <h2 className='mb-8 text-2xl'>Top Songs</h2>
          <ol className='grid grid-cols-2 grid-rows-5 grid-flow-col gap-y-6 gap-x-10'>
            {songs.items.map((song, index: number) => (
              <li className='flex items-center gap-4 w-full' key={song.id}>
                <span className='text-2xl w-12'>{index + 1}.</span>
                <Card
                  link={song.external_urls.spotify}
                  title={song.name}
                  description={song.artists.map((artist) => artist.name).join(',')}
                  image={song.album.images[0].url}
                />
              </li>
            ))}
          </ol>
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
