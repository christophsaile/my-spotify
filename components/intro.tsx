import { myProfile } from "@/libs/spotify";

export default async function Intro() {
	const profile = await (await myProfile()).json();

  return (
    <div className='flex flex-col gap-6 md:w-7/12'>
      <h1 className="text-2xl">
        Welcome to <a href={profile.external_urls.spotify} className='underline'>my Spotify</a> dashboard!
      </h1>
      <p>
        This is the place where I share my <a href="#artists" className='underline'>top artists</a>, <a href="#tracks" className='underline'>tracks</a>, and my <a href="#playlists" className='underline'>playlists</a>. You can find the source code for this project on <a>GitHub</a>.
      </p>
    </div>
  );
}
