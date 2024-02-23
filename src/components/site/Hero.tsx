type HeroProps = {
  title: string;
  subtitle: string;
};

export const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <header className='relative flex items-center justify-center h-[400px] mb-5 overflow-hidden rounded-xl'>
      <div className='relative z-30 p-5 text-2xl rounded-xl bg-gradient-to-tl from-[#00c6ff] to-[#0072ff] opacity-50 h-full w-full flex items-center justify-center flex-col' />
      <div className='absolute z-40'>
        <h1 className='font-bold text-9xl text-white text-center font-shadow mb-4'>
          {title}
        </h1>
        <h2 className='font-light text-xl text-center'>{subtitle}</h2>
      </div>
      <video
        autoPlay
        muted
        loop
        className='absolute z-10 w-auto min-w-full min-h-full max-w-none'
      >
        <source src='/videos/hero-video.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </header>
  );
};
