import Image from 'next/image';

export default function Card(props: {
  title: string;
  description: string;
  image: string;
  link: string;
}) {
  return (
    <a
      href={props.link}
      className='h-full w-full flex gap-6 px-4 py-4 bg-neutral-800 hover:bg-neutral-700 rounded-xl focus:bg-neutral-700 focus:outline-4 focus:outline-dashed focus:outline-orange-500'
    >
      <Image
        className='min-w-20 w-20 h-20 rounded-sm'
        alt=''
        src={props.image}
        width={300}
        height={300}
      ></Image>
      <div>
        <h3 className='mb-2'>{props.title}</h3>
        <p className='text-neutral-400 text-xs'>{props.description}</p>
      </div>
    </a>
  );
}
