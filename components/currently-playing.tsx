import { currentlyPlayingSong } from '@/libs/spotify';
import Image from 'next/image';

export default async function CurrentlyPlaying() {
  const response = await currentlyPlayingSong();

  if (response.status === 204 || response.status > 400) {
    return;
  }

  const song = await response.json();

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist: any) => _artist.name).join(', ');
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return (
    isPlaying && (
      <a
        href={songUrl}
        className='flex gap-4 items-center pl-2 pr-4 py-2 rounded-full focus:outline-4 focus:outline-dashed focus:outline-green-600'
      >
        <Image
          className='min-w-10 w-10 h-10 rounded-full'
          alt=''
          src={albumImageUrl}
          width={64}
          height={64}
        ></Image>
        <div className='flex flex-col'>
          <span className='mb-2 text-sm'>{title}</span>
          <span className='text-neutral-400 text-xs'>{artist}</span>
        </div>
      </a>
    )
  );
}
