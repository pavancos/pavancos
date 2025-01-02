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
                flex justify-between items-center
                bg-[#29292952] text-neutral-200 border-[1px] border-[#808080]
                w-[500px] p-4 mt-2 rounded-full text-center
                filter backdrop-blur-lg 
                `
            }>
                <DockItems></DockItems>
            </nav>

        </div>
    )
}
export default Dock