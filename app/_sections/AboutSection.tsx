import { Ubuntu } from "next/font/google";
const UbuntuFont = Ubuntu({
  subsets: ["latin"],
  preload: true,
  weight: "400",
});

const mySkills = [
  {
    type: "Programming Languages",
    skills: "TypeScript, JavaScript, C++, Python, Java",
  },
  {
    type: "Frontend",
    skills:
      "Next.js, React.js, Tailwind CSS, Bootstrap CSS, Framer Motion, GSAP, HTML",
  },
  {
    type: "Backend",
    skills:
      "Node.js, Express.js, Mongoose, WebSockets, NextAuth, Prisma, Spring Boot, FastAPI",
  },
  {
    type: "Databases",
    skills: "SQL, PostgreSQL, MongoDB, Firebase, Redis, MySQL",
  },
  {
    type: "Mobile Development",
    skills: " Expo, React Native, NativeWind, Reanimated",
  },
  {
    type: "AI & ML",
    skills: "Crew AI, LangGraph, Predictive Modeling, Pinecone, Qdrant Vector Database, RAG Pipelines",
  },
  {
    type: "Tools",
    skills: "Solana Web3.js, Ethers, Figma, Docker, TurboRepo, Linux, Git/Github, Visual Studio Code, Cheerio, Puppeteer",
  },
  {
    type:"Cloud & Deployement",
    skills:"Microsoft Azure, Render, Vercel, Cloudflare, AWS, Google Cloud Platform, Railway, Netlify, DigitalOcean"
  }
];

const AboutSection = () => {
  return (
    <section
      className={`w-full flex flex-col   items-start
        pb-16 md:pb-0 pt-20 mb-0 md:mb-6
        bg-gradient-to-b from-[#09090959] to-[#0909095e]
        ${UbuntuFont.className}
        `}
      id="about"
    >
      <main className="flex flex-col gap-y-2 mb-5">
        <h2 className={`text-3xl`}>About Me</h2>
        <p className="text-neutral-400">Developer | Designer | Student.</p>
        <p>I&apos;m currently majoring in Computer Science at PVPSIT.</p>
        <p>I love building cool, user-friendly, responsive websites.</p>
      </main>
      <main className="flex flex-col gap-y-2 mb-5">
        <h2 className={`text-3xl`}>Experience</h2>
        <div>
          <p className="flex flex-row flex-wrap gap-2 text-sm md:text-base mb-1">
            <span className="">Packaged App Development Associate</span>
            <span className="text-neutral-400"> | </span>
            <span className="">Accenture</span>
            <span className="text-neutral-400">| May - July 2025</span>
          </p>
          <p className="text-neutral-400 text-sm md:text-base mb-2">
            Worked on Full-Stack Development and Microservices using Java &
            Spring Boot. Also took part in code reviews and testing.
          </p>
        </div>
      </main>
      <main className="flex flex-col gap-y-2">
        <h2 className={`text-3xl`}>Skills</h2>
        {mySkills.map((mySkill: {type: string, skills: string}, index: number) => {
          return (
            <p key={index} className="flex flex-col gap-2 text-sm md:text-base mb-2">
              <span className="text-neutral-400">{mySkill.type}:</span>
              {mySkill.skills}
            </p>
          );
        })}
      </main>
    </section>
  );
};
export default AboutSection;
