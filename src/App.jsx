import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'

function App() {

  return (
    <main className='w-full h-screen flex'>
      <div className='bg-[url("./src/assets/bg-main-desktop.png")] h-full w-1/3 bg-no-repeat bg-cover  bg-center'></div>
      <div className='flex justify-center items-center w-2/3'>
        <Form />
      </div>
    </main>
  )
}

export default App
