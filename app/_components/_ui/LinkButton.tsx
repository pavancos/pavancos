type LinkButtonProps = {
  text: "View Site"| "Codebase";
  href?: string;
}


export const LinkButton = ({text,href}:LinkButtonProps) => {
  return (
    <a
      className={
        `bg-gradient-to-t from-[#282e31] to-[#3c4447]
          px-2 md:px-3 py-1 rounded-lg 
          hover:shadow-[#333333]
          hover:cursor-pointer transition-colors ease-in-out
        `
      }
      href={href}
      target="_blank"
    >
      {text}
    </a>
  )
}