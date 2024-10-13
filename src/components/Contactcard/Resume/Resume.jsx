import React from 'react'

const Resume = () => {
    return (
        <div className={
            `border border-1 border-slate-800 rounded-2xl px-1 sm:px-2 sm:py-1
            flex flex-row 
        `
        }>
            <a href='/Resume.pdf' download='Pavan_Kumar_Chennupati.pdf'
                target='_blank'
                className={
                    `text-xs md:text-base font-castoro flex flex-row justify-center items-center
          `}
            >
                <p className='text-center'>
                    View Resume
                </p>
            </a>
        </div>
    )
}

export default Resume
