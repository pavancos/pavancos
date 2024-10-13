import React from 'react'
import Aboutcontainer from './AboutContainer/Aboutcontainer'
import Projectcontainer from './ProjectContainer/Projectcontainer'
const Pullout = () => {
  return (
    <div className={
        `border-t-2 border border-black rounded-t-3xl z-50 relative
        h-[70vh] bg-white shadow-xl shadow-neutral-800 drop-shadow-xl
        flex flex-col items-center   pt-6`
      }>
        <Aboutcontainer title="about" ></Aboutcontainer>
        <Projectcontainer title="projects"></Projectcontainer>
    </div>
  )
}

export default Pullout