import React from 'react'

const LinkedIcon = ({icon,name,link}) => {
  return (
    <div className={
      `flex flex-row justify-center items-center`
    }>
      <a href={link} target="_blank" rel="noopener noreferrer" className={
      `flex flex-row justify-evenly items-center gap-1`
    }>
      {icon}
      <p className={
        `text-xs md:text-base font-castoro
        `
      }>
        {name}
      </p>
      </a>
      
    </div>
  )
}

export default LinkedIcon
