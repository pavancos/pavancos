

"use client";
import DockItems from "./_ui/DockItems"
import HomeIcon from "./_ui/icons/HomeIcon"
import ProgrammingIcon from "./_ui/icons/ProgrammingIcon"
import PersonIcon from "./_ui/icons/PersonIcon"
import ContactIcon from "./_ui/icons/ContactIcon"

const Dock = () => {
    return (
        <div
            className={
                `w-screen flex justify-center items-center  fixed bottom-5 md:bottom-12`
            }
        >
            <nav
                className={
                    `
                    flex justify-around items-center
                    bg-[#29292952] text-neutral-200
                    w-[85vw] md:w-[340px] py-3 px-2 rounded-2xl text-center
                    filter backdrop-blur-xl shadow-lg shadow-black/40
                    `
                }
                aria-label="Section navigation"
            >
                <DockItems Icon={HomeIcon} label="home" section="home" isTop={true} />
                <DockItems Icon={ProgrammingIcon} label="projects" section="projects" />
                <DockItems Icon={PersonIcon} label="about" section="about" />
                <DockItems Icon={ContactIcon} label="contact" section="contact" isBottom={true} />
            </nav>

        </div>
    )
}
export default Dock