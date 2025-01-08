
import { Ubuntu, Rozha_One } from "next/font/google"
const UbuntuFont = Ubuntu({
    subsets: ["latin"],
    preload: true,
    weight: "400"
})

const RozhaOne = Rozha_One({
    subsets: ["latin"],
    preload: true,
    weight: "400"
})

const HeroSection = () => {
    return (
        <section
            id="Home"
            className={
                `w-full flex flex-col items-start
                min-h-[calc(100vh-180px)] pb-16 md:pb-0 pt-20 mb-0 md:mb-6
                bg-gradient-to-b from-[#09090959] to-[#0909095e]
                `
            }>
            <div className={
                `w-full flex flex-col justify-around`
            }>
                <main className="mb-5 flex flex-col md:gap-y-2 text-lg md:text-2xl">
                    <h1 className={`text-3xl ${UbuntuFont.className}`}>Pavan Kumar Chennupati</h1>
                    <p className="text-neutral-300">[full-stack-web-dev]</p>
                </main>
                <p className={
                    `${RozhaOne.className} text-5xl md:text-6xl lg:text-7xl
                    mb-5 md:mb-7
                    `
                }>
                    Web Developer
                </p>
                <div className={`text-lg md:text-2xl mb-32 md:mb-36 ${UbuntuFont.className}`}>
                    <p>ensuring effortless simplicity</p>
                    <p>& user-friendly functionality</p>
                </div>
                <div className={`flex justify-end text-right text-neutral-500 text-sm ${UbuntuFont.className}`}>
                    <div>
                        <p>Student at PVPSIT,</p>
                        <p>CS Undergrad</p>
                    </div>
                </div>

            </div>

        </section>
    )
}
export default HeroSection