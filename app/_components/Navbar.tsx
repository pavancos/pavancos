const Navbar = () => {
  return (
    <header className={
        `
        flex justify-between items-center sticky top-0 z-50
        text-neutral-200
        mx-auto px-4 md:px-48 py-5
        filter backdrop-blur-lg backdrop-brightness-125
        
        `
    }>
        <div>
            <a href="/" 
                className=" md:text-lg font-mono font-semibold hover:backdrop-brightness-125">
                &lt; pavan /&gt;
            </a>
        </div>
        <div>
            <button className={
                `bg-[#5515387c] px-2 md:px-3 py-1 rounded-3xl
                flex justify-center items-center text-center
                hover:shadow-[2px_3px_140px_#d9db44] hover:backdrop-brightness-125
                hover:text-[#fff] hover:bg-[#551538]
                `
            }>
                contact
            </button>
        </div>

    </header>
  )
}
export default Navbar