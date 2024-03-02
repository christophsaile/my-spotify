import CurrentlyPlaying from './currently-playing';
import Profile from './profile';

export default function Header() {
  return (
    <footer className='flex justify-between'>
      <Profile></Profile>
      <CurrentlyPlaying></CurrentlyPlaying>
    </footer>
  );
}
