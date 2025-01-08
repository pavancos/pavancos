import DockItems from "./_ui/DockItems"

const Dock = () => {
    return (
        <div
            className={
                `w-screen flex justify-center items-center  fixed bottom-5`
            }
        >

            <nav className={
                `
                flex justify-around items-center
                bg-[#29292952] text-neutral-200
                w-[85vw] md:w-[500px] py-2 px-2 rounded-2xl text-center
                filter backdrop-blur-lg 
                `
            }>
                <DockItems src="/dock/home.svg" alt="Home" section="Home" isTop={true}></DockItems>
                <DockItems src="/dock/programming.svg" alt="Projects" section="Projects"></DockItems>
                <DockItems src="/dock/person.svg" alt="About" section="About"></DockItems>
                <DockItems src="/dock/contact.svg" alt="Contact" section="Contact" isBottom={true}></DockItems>
            </nav>

        </div>
    )
}
export default Dock