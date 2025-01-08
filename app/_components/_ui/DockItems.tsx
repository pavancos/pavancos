"use client";
import Home from '../../../public/dock/home.svg'
import Image from 'next/image'

type DockItemsProps={

  src:string;
  alt:string;
  section:string;
  isTop?:boolean;
  isBottom?:boolean;
}

const handleScroll = (isTop?: boolean, isBottom?: boolean, section?: string) => {
  if (isTop) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (isBottom) {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  } else if (section) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}

const DockItems = ({ src, alt, section, isTop, isBottom }: DockItemsProps) => {
  return (
    <div className="relative group p-1 bg-gradient-to-t from-zinc-800 bg-[#4e4e4eb7] outline-stone-800 outline-1
      hover:bg-[#636262b7] hover:backdrop-brightness-125
      hover:backdrop-blur-2xl hover:shadow-[2px_3px_140px_#d9db44]
      hover:cursor-pointer
      rounded-xl flex justify-center items-center
      transform transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105
      focus:scale-110 focus:translate-y-2
      "
      onClick={() => {
        handleScroll(isTop, isBottom, section);
      }}
    >
      
      <Image
        src={src}
        alt={alt}
        width={30}
        height={30}
        color="white"
        loading="eager"
        priority={true}
        draggable={false}
        quality={100}
        placeholder="empty"
        unoptimized={true}
        objectFit="contain"
      />
      <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 bg-[#4e4e4e00] text-white text-center text-xs rounded-lg py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {section}
      </span>
    </div>
  );
};
export default DockItems;