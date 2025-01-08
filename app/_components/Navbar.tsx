import ContactButton from "./ContactButton"
import { Ubuntu } from "next/font/google"
const UbuntuFont = Ubuntu({
    subsets: ["latin"],
    preload: true,
    weight: "400"
})
const Navbar = () => {
  return (
    <header className={
        `
        flex justify-between items-center sticky top-0 z-50
        filter backdrop-blur-lg
        text-neutral-200 bg-[#0909091a]
        mx-auto px-4 md:px-48 py-5
        ${UbuntuFont.className}
        
        `
    }>
        <div>
            <p
                className="text-neutral-300 md:text-lg font-mono font-semibold hover:backdrop-brightness-125">
                &lt; pavan /&gt;
            </p>
        </div>
        <div>
            <ContactButton/>
        </div>

    </header>
  )
}
export default Navbar