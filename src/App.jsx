import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'
import CardOne from './components/CardOne'

function App() {

  return (
    <main className='w-full h-screen flex flex-col lg:flex-row'>
      <div className='bg-[url("./src/assets/bg-main-desktop.png")] h-2/5 w-full lg:h-full lg:w-1/3 bg-no-repeat bg-cover bg-center relative'>
        <div className='absolute '>

        </div>
      </div>
      <div className='flex justify-center items-center w-full h-3/5 lg:w-2/3 lg:h-auto'>
        <Form />
      </div>
    </main>
  )
}

export default App
