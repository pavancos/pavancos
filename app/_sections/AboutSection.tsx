import { Ubuntu } from "next/font/google"
const UbuntuFont = Ubuntu({
  subsets: ["latin"],
    preload: true,
    weight: "400"
})
const AboutSection = () => {
  return (
    <section
      className={
        `w-full flex flex-col   items-start
        pb-16 md:pb-0 pt-20 mb-0 md:mb-6
        bg-gradient-to-b from-[#09090959] to-[#0909095e]
        ${UbuntuFont.className}
        `
      }
      id="About"
    >
      <main className="flex flex-col gap-y-2 mb-5">
        <h1 className={`text-3xl`}>About Me</h1>
        <p className="text-neutral-400">
          Developer | Designer | Student.
        </p>
        <p>
          I&apos;m currently majoring in Computer Science at PVPSIT.
        </p>
        <p>
          I love building cool, user-friendly, responsive websites.
        </p>
      </main>
      <main className="flex flex-col gap-y-2">
      <h1 className={`text-3xl`}>Skills</h1>
        <p className="flex flex-col gap-2 text-sm md:text-base mb-2">
          <span className="text-neutral-400">Programming Languages:</span>
           Javascript, C++, Java, Python
        </p>
        <p className="flex flex-col gap-2 text-sm md:text-base mb-2">
          <span className="text-neutral-400">Frontend:</span>
          Next Js, React Js, Tailwind CSS, Bootstrap CSS, GSAP
        </p>
        <p className="flex flex-col gap-2 text-sm md:text-base mb-2">
          <span className="text-neutral-400">Backend:</span>
          NextAuth, MonoRepo, Node Js, Express Js, Websockets, Typescript, Mongoose, Prisma
        </p>
        <p className="flex flex-col gap-2 text-sm md:text-base mb-2">
          <span className="text-neutral-400">Databases:</span>
          MongoDB, MySQL, PostgreSQL
        </p>
        <p className="flex flex-col gap-2 text-sm md:text-base mb-2">
          <span className="text-neutral-400">Mobile Development:</span>
          React Native, NativeWind
        </p>
        <p className="flex flex-col gap-2 text-sm md:text-base mb-2">
          <span className="text-neutral-400">Tools:</span>
          Figma, TurboRepo, Linux, Git/Github, Visual Studio Code
        </p>
      </main>
    </section>
  )
}
export default AboutSection