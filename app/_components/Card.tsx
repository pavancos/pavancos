import Image, { StaticImageData } from "next/image"
import { Ubuntu } from "next/font/google"
import { LinkButton } from "./_ui/LinkButton"

const UbuntuFont = Ubuntu({
    preload: true,
    weight: "400"
})

type CardProps = {
    title: string;
    description: string;
    techStack: string;
    siteLink?: string;
    codeLink?: string;
    preview: StaticImageData;
}


const Card = ({ title, description, techStack, siteLink, codeLink, preview }: CardProps) => {
    return (
        <div className={
            `w-full bg-[#1a1a1a] rounded-md
        flex flex-col lg:w-[45%] justify-evenly
        md:gap-x-4 ${UbuntuFont.className}
        `
        }
        >
            <div
                className={
                    `w-full
                flex flex-col items-center justify-center
                rounded-lg
                `
                }
            >

                <Image
                    src={preview}
                    alt="TrackCode Preview"
                    className={
                        `rounded-lg
                `
                    }
                    style={{ objectFit: "contain" }}
                    layout="responsive"
                    width={16}
                    height={9}
                    unoptimized
                    priority
                />

            </div>

            <div className="h-full py-2 px-4 pb-3">
                <h2 className="text-2xl md:text-3xl mb-2 text-neutral-200">{title}</h2>
                <p className="mb-2 md:mb-3 opacity-85">{description}</p>
                <p className="flex gap-x-2 opacity-85">
                    <span >&gt; </span>
                    <span>
                        {
                            techStack
                        }
                    </span>
                </p>
                <div className="flex flex-row gap-x-4 mt-4 transition-all ease-in-out bottom-2 opacity-85">
                    <LinkButton text="View Site" href={siteLink} />
                    <LinkButton text="Codebase" href={codeLink} />
                </div>
            </div>

        </div>
    )
}
export default Card