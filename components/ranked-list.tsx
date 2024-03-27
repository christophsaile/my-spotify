import { TimeRange, myTopArtists, myTopTracks } from '@/libs/spotify';
import Card from './card';

export default async function RankedList(props: {
  timeRange: TimeRange;
  variant: 'artists' | 'tracks';
}) {
  const data = await (
    await (props.variant === 'artists'
      ? myTopArtists(props.timeRange)
      : myTopTracks(props.timeRange))
  ).json();

  return (
    <ol
      className={`ranked-list grid gap-y-6 gap-x-10 md:grid-cols-2 md:grid-rows-5 md:grid-flow-col ${props.variant} ${props.timeRange}`}
    >
      {data.items.map((item: any, index: number) => (
        <li className='flex items-center gap-4 w-full' key={item.id}>
          <span className='text-2xl w-12'>{index + 1}.</span>
          <Card
            link={
              props.variant === 'artists'
                ? item.external_urls.spotify
                : item.album.external_urls.spotify
            }
            title={item.name}
            description={
              props.variant === 'artists'
                ? item.genres.length > 0
                  ? item.genres.splice(0, 3).join(', ')
                  : ''
                : item.artists.map((artist: any) => artist.name).join(',')
            }
            image={props.variant === 'artists' ? item.images[0].url : item.album.images[0].url}
          />
        </li>
      ))}
    </ol>
  );
}
