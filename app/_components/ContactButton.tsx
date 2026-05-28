"use client";

const ContactButton = () => {
    return (
        <a className={
            `bg-gradient-to-t from-[#282e31] to-[#3c4447] px-2 md:px-3 py-1 rounded-3xl
            flex justify-center items-center text-center
            hover:shadow-[2px_3px_140px_#d9db44] hover:backdrop-brightness-125
            hover:text-[#fff] hover:bg-[#3f484d]
            `
        }
            href="#contact"
        >
            contact
        </a>
    )
}
export default ContactButton
