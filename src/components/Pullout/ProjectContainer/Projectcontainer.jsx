import React, { useState } from 'react'
import {SiGreensock,SiReact,SiTailwindcss,SiJavascript,SiNodedotjs,SiExpress,SiAntdesign,SiMongodb,SiHtml5,SiCss3,SiBootstrap,SiExpo, SiFigma, SiGooglegemini} from '@icons-pack/react-simple-icons'
import Project from './Project/Project'
import trackCode from '../../../assets/projectShow/trackCode.png'
import Abbrev_it from '../../../assets/projectShow/Abbrev-it.png'
import Vitamind from '../../../assets/projectShow/VitaMin-D.png'
import FarmConnect from '../../../assets/projectShow/FarmConnect.png'
const Projectcontainer = (props) => {

    const [myProjects,setMyProjects]=useState([
        {
            id: 1,
            title: "trackCode",
            description: "Allows Users to View Progress in Competitive Programming Platforms.",
            show: trackCode,
            liveLink: "https://trackcode.vercel.app/",
            gitLink: "https://github.com/pavancos/trackCP",
            skills: [
                <SiReact/>, <SiJavascript/>, <SiNodedotjs/>,
                <SiMongodb/>, <SiTailwindcss/>, <SiExpress/>,
                <SiAntdesign/>, <SiGreensock/>
            ]
        },
        {
            id: 2,
            title: "VitaMin-D",
            description: "Finds Vitamin Deficiency based on User's selection of Symptoms.",
            show: Vitamind,
            liveLink: "https://vitamindfind.vercel.app/",
            gitLink: "https://github.com/pavancos/vitamind",
            skills: [
                <SiJavascript/>,<SiTailwindcss/>,
                <SiFigma/>, <SiHtml5/>,<SiCss3/>
            ]
        },
        {
            id: 3,
            title: "Abbrev-It",
            description: "Generate cool possibilities with User entered Text, using Gemini SDK and JS logic.",
            show: Abbrev_it,
            liveLink: "https://abbrevit.vercel.app/",
            gitLink: "https://github.com/vigneshvaranasi/TextFX",
            
            skills: [
                <SiExpress/>, <SiNodedotjs/>, <SiGreensock/>,
                <SiGooglegemini/>,<SiTailwindcss/>,
            ]
        },
        {
            id: 5,
            title: "FarmConnect",
            description: "Mobile app allows Farmers to Put their Crop in Listings that Consumers, Traders can buy/negotiate",
            show: FarmConnect,
            liveLink: "https://www.figma.com/proto/cvhk2BC9dWjpnsvyllvlXM/FarmConnect?page-id=0%3A1&node-id=4-83&starting-point-node-id=3%3A640&t=W55bkd4g6OPHfErU-1",
            gitLink: "https://github.com/pavancos/FarmConnect",
            skills: [
                <SiReact/>, <SiNodedotjs/>,
                <SiMongodb/>, <SiTailwindcss/>, <SiExpress/>,
            ]
        }
    ]);

    return (
        <div className=' mb-4 border-black border-2 w-11/12  sm:w-[700px] rounded flex flex-col justify-center items-center py-5  '>
            <h1 className='font-castoroItalic text-lg sm:text-2xl mb-2 w-full text-center bg-white '>
                {props.title}
            </h1>
            <div className='font-castoro w-full overflow-scroll h-[30vh]'>
                {
                    myProjects.map((project)=>{
                        return(
                            <Project key={project.id} project={project}></Project>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Projectcontainer