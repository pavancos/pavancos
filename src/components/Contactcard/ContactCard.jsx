import React from 'react';
import { SiGithub, SiLinkedin } from '@icons-pack/react-simple-icons';
import LinkedIcon from './Linkedicon/LinkedIcon';
import Resume from './Resume/Resume';
import Connect from './Connect/Connect';
const ContactCard = () => {
  return (
    <div
      className='w-10/12 sm:w-[45%] max-w-[600px]  bg-white p-4 rounded-md shadow-lg mt-16 mb-48 '
    >
      <div
        className={
          `h-full w-full border border-1 border-slate-800 rounded-sm flex flex-col justify-between
           pb-3 p-2 sm:p-4 gap-20
          `
        }
      >
        <div
          className={
            `flex flex-row justify-between items-center`
          }
        >
          <LinkedIcon icon={<SiGithub className='w-4 sm:w-6 text-neutral-800' />} name={"/pavancos"} link={"https://github.com/pavancos/"} />
          <LinkedIcon icon={<SiLinkedin className='w-4 sm:w-6 text-neutral-800' />} name={"/pavankch"} link={"https://www.linkedin.com/in/pavankch/"} />
        </div>
        <div>
          <h1
            className={
              `text-xl md:text-3xl font-castoro
              text-center leading-4
              `
            }
          >
            Pavan Kumar Chennupati
          </h1>
          <p
            className={
              `text-xs md:text-base font-castoro
              text-center
              `
            }
          >
            Full Stack Developer
          </p>
        </div>

        <div
          className={
            `flex flex-row justify-evenly `
          }
        >
          <Resume />
          <Connect />
        </div>

      </div>
    </div>
  )
}

export default ContactCard
