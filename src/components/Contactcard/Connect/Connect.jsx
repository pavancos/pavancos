import React from 'react'
import { SiDiscord, SiX, SiGmail } from '@icons-pack/react-simple-icons'
const Connect = () => {
    return (
        <div className={
            `border border-1 border-slate-800 rounded-2xl px-1 sm:px-2
        flex flex-row justify-around items-center gap-5 sm:py-1
    `
        }>
            <a href="https://discordapp.com/users/1009802691121266778" target="_blank" rel="noopener noreferrer">
                <SiDiscord className='text-neutral-800 w-4 sm:w-6' />
            </a>
            <a href="https://x.com/pavancos" target="_blank" rel="noopener noreferrer">
                <SiX className='text-neutral-800 w-4 sm:w-6' />
            </a>

            <a href="mailto:pavankc005@gmail.com"
                className='flex flex-row justify-center items-center'
            >
                <SiGmail className='text-neutral-800 w-4 sm:w-6' />
            </a>

        </div>
    )
}

export default Connect
