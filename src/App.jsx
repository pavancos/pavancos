import { useState } from 'react'
import ContactCard from './components/Contactcard/ContactCard'

export default function App() {
  return (
    <>
      <div className='flex w-screen h-screen justify-center items-center'>
        <ContactCard />
      </div>
    </>
  )
}