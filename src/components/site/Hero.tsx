type HeroProps = {
  title: string;
  subtitle: string;
};

export const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <div className='h-[400px] bg-gradient-to-tl from-[#00c6ff] to-[#0072ff] mb-5 rounded-xl flex items-center justify-center flex-col'>
      <h1 className='font-bold text-9xl text-white text-center'>{title}</h1>
      <h2 className='font-light text-2xl text-center'>{subtitle}</h2>
    </div>
  );
};
