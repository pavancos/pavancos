import { Seaweed_Script } from "next/font/google";
import Card from "../_components/Card";
import trackCode from "../../assets/projectAssets/trackCodePreview.gif"
import abbrevit from "../../assets/projectAssets/abbrevitPreview.gif"
import vitaminD from "../../assets/projectAssets/vitamindPreview.png"
import taskScheduler from "../../assets/projectAssets/taskSchedulerPreview.gif"
import rToD from "../../assets/projectAssets/rToDPreview.png"

export const SeaweedScript = Seaweed_Script({
  subsets: ["latin"],
  preload: true,
  weight: "400",
});

const Projects=[
  {
    title:"TrackCode",
    description:"Competitive Coding Performance Tracker",
    techStack:"React JS, Tailwind CSS, GSAP, MongoDB, Recharts, Express JS, Node JS, Bottleneck",
    siteLink:"https://trackcode.in",
    codeLink:"https://github.com/pavancos/trackCP",
    preview:trackCode
  },
  {
    title:"Abbrev-It",
    description:"Generates Cool possibilities for a Word",
    techStack:"React JS, Tailwind CSS, GSAP,Express JS, Node JS",
    siteLink:"https://abbrevit.vercel.app/",
    codeLink:"https://github.com/vigneshvaranasi/TextFX",
    preview:abbrevit
  },
  {
    title:"VitaMin-D",
    description:"A Vitamin Deficiency Finder",
    techStack:"React JS, Tailwind CSS, Node Js",
    siteLink:"https://vitamindfind.vercel.app/",
    codeLink:"https://github.com/pavancos/vitamind",
    preview:vitaminD

  },
  {
    title:"Task Scheduler",
    description:"Simple Productivity Tool for task management",
    techStack:"React JS, Tailwind CSS, Javascript",
    siteLink:"https://pavancos.github.io/TaskScheduler/",
    codeLink:"https://github.com/pavancos/taskscheduler",
    preview:taskScheduler
  },
  {
    title:"R to D",
    description:"A Simple Currency Converter",
    techStack:"React JS, Tailwind CSS, Javascript",
    siteLink:"https://inrtousd.vercel.app/",
    codeLink:"https://github.com/pavancos/CurrencyConverter",
    preview:rToD
  }
]

const ProjectsSection = () => {
  return (
   <section
    id="Projects"
    className={
      `w-full flex flex-col items-start justify-center 
      min-h-[calc(100vh-180px)] pb-16 md:pb-0 pt-20`
    }>
      <h1 className={
        `ml-2 text-3xl ${SeaweedScript.className}`
      }>
        projects
      </h1>
      <main
        className="w-full flex flex-col md:flex-row md:flex-wrap md:gap-14 gap-y-4  mt-5">

        {
          Projects.map((project,index)=>(
            <Card
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              siteLink={project.siteLink}
              codeLink={project.codeLink}
              preview={project.preview}
            />
          ))
        }

      </main>

   </section>
  )
}
export default ProjectsSection