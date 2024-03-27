import { myPlaylists } from '@/libs/spotify';
import Image from 'next/image';

export default async function Playlists() {
  const playlists = await (await myPlaylists()).json();
  const playlistNames = [
    'We Grow You Decline',
    'Calm Down',
    'Various',
    'Vocals',
    'Summer Vibes',
    'Rock',
    'Classic',
  ];
  const filteredPlaylists = playlists.items.filter((item: any) =>
    playlistNames.includes(item.name)
  );

  return (
    <div>
      <h2 id='playlists' className='mb-8 text-2xl'>
        My Playlists
      </h2>
      <ul className={`grid gap-y-6 gap-x-10 grid-cols-2 md:grid-cols-4`}>
        {filteredPlaylists.map((playlist: any) => (
          <li key={playlist.id}>
            <a
              className='flex flex-col gap-2 w-full rounded-lg focus:outline-4 focus:outline-dashed focus:outline-green-600'
              href={playlist.external_urls.spotify}
              target='_blank'
              rel='noreferrer'
            >
              <Image
                className='aspect-square rounded-lg'
                src={playlist.images[0].url}
                alt=''
                width={250}
                height={250}
              />
              <span>{playlist.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
