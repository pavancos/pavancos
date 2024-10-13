import React from 'react'

const Aboutcontainer = (props) => {
    return (
        <div className=' mb-4 border-black border-2  w-11/12  sm:w-[700px] h-auto rounded flex flex-col justify-center items-center py-5 px-3 sm:px-28 '>
            <h1 className='font-castoroItalic text-lg sm:text-2xl mb-2'>
                {props.title}
            </h1>
            <div className='font-castoro '>
                <p className={`text-center  sm:text-lg`}>
                    Hey, I'm Pavan, a developer, designer, student. I'm currently majoring in Computer Science at PVPSIT. I love building cool, user-friendly, responsive websites.
                </p>
            </div>
        </div>
    )
}

export default Aboutcontainer