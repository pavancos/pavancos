import React, { useEffect } from 'react'
import { SiGit, SiGithub } from '@icons-pack/react-simple-icons'
import trackCode from '../../../../assets/projectShow/trackCode.png'
import livePng from '../../../../assets/Browser.svg'

const Project = (props) => {

    let localProject = props.project;
    let { skills, title, liveLink, gitLink, description,show } = localProject;
    return (
        <div className={
            `border border-black w-11/12 mb-7 h-[166px] rounded-sm mx-auto 
            flex flex-row scroll
            `
        }>
            <div className={
                `w-1/2 flex justify-center items-center overflow-hidden`
            }>
                <img loading='lazy' className="w-full" src={show} alt="" />
            </div>

            <div className={
                `w-1/2 flex flex-col justify-around items-center overflow-hidden pl-2`
            }>
                <div className={
                    `w-full flex justify-between items-center `
                }>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-lg sm:text-xl'>{title}</h1>
                    </div>

                    <ul className='flex justify-evenly items-center w-1/3'>
                        <li className='flex justify-evenly items-center'>
                            <a className='flex justify-evenly items-center' href={liveLink} target="_blank" rel="noopener noreferrer">
                                <img src={livePng} className='' />
                            </a>
                        </li >
                        <li className='flex justify-evenly items-center'>
                            <a className='flex justify-evenly items-center' href={gitLink} target="_blank" rel="noopener noreferrer">
                                <SiGithub stroke='' color='rgba(0,0,0,0.9)' />
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <p>
                        {description}
                    </p>
                </div>
                <div className='flex flex-row justify-around items-center w-full'>
                    {
                        skills.map((s, index) => {
                            return (
                                <div key={index} className='skill-icon'>
                                    {s}
                                </div>
                            );
                        })
                    }
                </div>


            </div>


        </div>
    )
}

export default Project