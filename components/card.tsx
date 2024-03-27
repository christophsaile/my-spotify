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
      className='group h-full w-full relative flex gap-6 px-4 py-4 bg-neutral-800 hover:bg-neutral-700 rounded-xl focus:bg-neutral-700 focus:outline-4 focus:outline-dashed focus:outline-green-600 transition-background'
    >
      <div className='w-20 h-20 relative shrink-0 flex transform-three-d after:vinyl after:content-[""] left-[0] after:-z-10 after:rounded-full after:h-[94%] after:w-[94%] after:absolute after:left-[3%] after:top-[3%] before:content-[""] before:rounded-sm before:-z-10 before:bg-text-lvl-4 before:h-full before:w-full before:absolute before:right-[0px] before:top-[0] before:transition-all before:duration-[400ms] before:ease-in-out before:delay-[100ms] group-hover:album-rotate group-hover:-left-4 group-hover:after:left-10 transition-all duration-500 ease-in-out after:transition-all after:duration-[400ms] after:ease-in-out after:delay-[100ms] group-hover:before:-right-[4px]'>
        <Image
          className='min-w-20 w-20 h-20 rounded-sm'
          alt=''
          src={props.image}
          width={300}
          height={300}
        ></Image>
      </div>
      <div>
        <h3 className='mb-2 text-sm'>{props.title}</h3>
        <p className='text-neutral-400 text-xs'>{props.description}</p>
      </div>
    </a>
  );
}
