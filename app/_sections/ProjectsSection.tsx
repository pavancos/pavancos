import { Seaweed_Script } from "next/font/google";
import Card from "../_components/Card";
import xenFolio from "../../assets/projectAssets/xenFolioPreview.gif"
import askIt from "../../assets/projectAssets/askItPreview.gif";
import markMe from "../../assets/projectAssets/markMePreview.gif";
import xenKit from "../../assets/projectAssets/xenKitPreview.gif";
import trackCode from "../../assets/projectAssets/trackCodePreview.gif";
import pWallet from "../../assets/projectAssets/pWalletPreview.gif"
import abbrevit from "../../assets/projectAssets/abbrevitPreview.gif";

export const SeaweedScript = Seaweed_Script({
  subsets: ["latin"],
  preload: true,
  weight: "400",
});

const Projects = [
  {
    title:"XenFolio",
    description:"A No-Code Portfolio Builder",
    techStack:"React JS, Gemini API, Tailwind CSS, Mongoose, Express JS, GitHub OAuth 2.0",
    siteLink:"https://xenfolio.vercel.app",
    codeLink:"https://github.com/pavancos/folioEngine",
    preview:xenFolio
  },
  {
    title: "AskIt",
    description: "Realtime Brainstorming and Q&A Tool",
    techStack:
      "React JS, WebSockets, Tailwind CSS, OAuth 2.0, Framer Motion, MongoDB, Express JS, Node JS",
    siteLink: "https://askitengine.centralindia.cloudapp.azure.com/",
    codeLink: "https://github.com/pavancos/askItEngine",
    preview: askIt,
  },
  {
    title: "MarkMe",
    description: "Mobile Application for Event Management",
    techStack: "React Native, Expo, Node JS, Express JS, Reaimated, MongoDB",
    siteLink:
      "https://expo.dev/accounts/xendev/projects/markme/builds/96a2dc40-5cd7-496f-9ef1-8ca79eef1a5d",
    codeLink: "https://github.com/pavancos/markme",
    preview: markMe,
    isApp: true,
  },
  {
    title: "TrackCode",
    description: "Competitive Coding Performance Tracker",
    techStack:
      "React JS, Tailwind CSS, GSAP, MongoDB, Recharts, Express JS, Node JS, Bottleneck",
    siteLink: "https://trackcode.in",
    codeLink: "https://github.com/pavancos/trackCP",
    preview: trackCode,
  },
  {
    title:"pWallet",
    description:"Multi-chain crypto wallet - Seed & Balances",
    techStack:"Next JS, Tailwind CSS, TypeScript, Solana Web3, Ethers, JSON RPC",
    siteLink:"https://pwall.vercel.app",
    codeLink:"https://github.com/pavancos/pWallet",
    preview: pWallet
  },
  {
    title: "XenKit",
    description: "UI Library along with CLI for Installation",
    techStack: "Next JS, Tailwind CSS, Typescript, Framer Motion, NPM CLI",
    siteLink: "https://xenkit.vercel.app/loading-animations/dash-trail",
    codeLink: "https://github.com/xen-devs/Xenkit",
    underDevelopment: true,
    preview: xenKit,
  },
  {
    title: "Abbrev-It",
    description: "Generates Cool possibilities for a Word",
    techStack: "React JS, Tailwind CSS, GSAP,Express JS, Node JS",
    siteLink: "https://abbrevit.vercel.app/",
    codeLink: "https://github.com/vigneshvaranasi/TextFX",
    preview: abbrevit,
  }
];

const ProjectsSection = () => {
  return (
    <section
      id="Projects"
      className={`w-full flex flex-col items-start justify-center 
      min-h-[calc(100vh-180px)] pb-16 md:pb-0 pt-20`}
    >
      <h1 className={`ml-2 text-3xl ${SeaweedScript.className}`}>projects</h1>
      <main className="w-full flex flex-col md:flex-row md:flex-wrap md:gap-14 gap-y-4  mt-5">
        {Projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            siteLink={project.siteLink ? project.siteLink : "#"}
            codeLink={project.codeLink ? project.codeLink : "https://github.com/pavancos"}
            preview={project.preview}
            isApp={project.isApp}
          />
        ))}
      </main>
    </section>
  );
};
export default ProjectsSection;
