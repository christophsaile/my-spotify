import { myProfile } from '@/libs/spotify';
import Image from 'next/image';

export default async function Profile() {
  const profile = await (await myProfile()).json();

  return (
    <a
      className='flex gap-4 items-center pl-2 pr-4 py-2 rounded-full focus:outline-4 focus:outline-dashed focus:outline-green-600'
      href={profile.external_urls.spotify}
    >
      <Image
        className='min-w-10 w-10 h-10 rounded-full'
        alt=''
        src={profile.images[0].url}
        width={64}
        height={64}
      ></Image>
      <span>{profile.display_name}</span>
    </a>
  );
}
