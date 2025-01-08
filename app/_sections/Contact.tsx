"use client";
import {
  SiGithub, SiInstagram,
  SiInstagramHex, SiLinkedin,
  SiLinkedinHex, SiX
} from '@icons-pack/react-simple-icons';
import Image from 'next/image';
import gmailIcon from "../../assets/icons/gmail.svg"


const Contact = () => {
  return (
    <footer className={
      `bg-gradient-to-br from-[#2126298e] to-[#21262900] 
        text-neutral-200 py-5 h-[400px] 
        md:rounded-[10px_350px_0px_0px] rounded-[8px_200px_0px_0px] 
        px-4 flex flex-col justify-around gap-4 pb-32
      `
    }
    >
      <p className="font-mono w-2/3 md:w-1/2 text-sm md:text-xl">
        Whether you have a question or just want
        to say hi, feel free to contact me and
        I'll try my best to get back to you!
      </p>
      <main className='relative'>
        <div className='flex gap-4'>
          <a href="mailto:pavankc005@gmail.com">
            <Image
              src={gmailIcon}
              alt="pavankc005@gmail.com"
              width={30}
            />
          </a>
          <a href="https://github.com/pavancos">
            <SiGithub className={`cursor-pointer`} title='pavancos' />
          </a>
          <a href="https://linkedin.com/in/pavankch">
            <SiLinkedin color={SiLinkedinHex} className={`cursor-pointer`} title='pavankch' />
          </a>
          <a href="https://x.com/pavancos">
            <SiX className={`cursor-pointer`} title='pavancos' />
          </a>
          <a href="https://www.instagram.com/pavan.cos/">
            <SiInstagram color={SiInstagramHex} className={`cursor-pointer`} title='pavan.cos' />
          </a>
        </div>

        <div className='pt-4 my-3'>
          <a
            href='/Pavan_Kumar_Chennupati.pdf'
            download='PavanKumarChennupati.pdf'
            className={
              `bg-gradient-to-t from-[#282e31] to-[#3c4447]
              px-2 md:px-3 py-1 rounded-lg 
              hover:shadow-[#333333]
              hover:cursor-pointer transition-colors ease-in-out
              `
            }
          >
            View My Resume
          </a>
        </div>

      </main>
      <div className='flex flex-col gap-y-3 relative bottom-2'>
        <p className='text-xs'>
          Built with NextJs and TailwindCSS & Loosely Designed using Figma
        </p>
        <p className="text-xs text-neutral-300">
          © 2024 Pavan Kumar Chennupati
        </p>
      </div>
    </footer>
  )
}
export default Contact
