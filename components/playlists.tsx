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
              className='group relative flex flex-col gap-2 w-full rounded-lg focus:outline-4 focus:outline-dashed focus:outline-green-600'
              href={playlist.external_urls.spotify}
              target='_blank'
              rel='noreferrer'
            >
              <div className='relative shrink-0 flex transform-three-d after:vinyl after:content-[""] left-[0] after:-z-10 after:rounded-full after:h-[94%] after:w-[94%] after:absolute after:left-[3%] after:top-[3%] before:content-[""] before:rounded-sm before:-z-10 before:bg-text-lvl-4 before:h-full before:w-full before:absolute before:right-[0px] before:top-[0] before:transition-all before:duration-[400ms] before:ease-in-out before:delay-[100ms] group-hover:album-rotate group-hover:-left-6 group-hover:after:left-12 transition-all duration-500 ease-in-out after:transition-all after:duration-[400ms] after:ease-in-out after:delay-[100ms] group-hover:before:-right-[4px]'>
                <Image
                  className='aspect-square rounded-lg'
                  src={playlist.images[0].url}
                  alt=''
                  width={250}
                  height={250}
                />
              </div>
              <span>{playlist.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
