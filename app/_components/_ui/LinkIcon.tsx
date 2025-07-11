type LinkIconProps = {
    link: string;
    children: React.ReactNode;
    className?: string;
}

const LinkIcon = ({ link,children, className }: LinkIconProps) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer"
            className={`${className}`}
        >
            {children}
        </a>
    )
}
export default LinkIcon