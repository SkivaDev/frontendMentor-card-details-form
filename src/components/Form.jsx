import React from 'react'

function Form() {
  return (
    <div className='form flex flex-col w-2/5 gap-8 box-border'>
      <label className='flex flex-col gap-2'>
        <h3 className='text-lg font-medium uppercase tracking-widest'>Cardholder Name</h3>
        <input className='text-xl font-medium border rounded-md p-3 border-slate-300 focus:outline-none focus:border-violet-600  focus:ring-1 focus:ring-violet-600 invalid:border-red-500 focus:invalid:ring-red-500' type="text" placeholder='e.g. Fabrizio Ortiz' />
      </label>
      <label className='flex flex-col gap-2'>
        <h3 className='text-lg font-medium uppercase tracking-widest'>Card number</h3>
        <input className='text-xl font-medium border rounded-md p-3 border-slate-300 focus:outline-none focus:border-violet-600  focus:ring-1 focus:ring-violet-600 invalid:border-red-500 focus:invalid:ring-red-500' type="text" placeholder='e.g. 9591 6489 6389 1013' />
      </label>
      <div className='flex w-full justify-center items-center gap-5'>
        <div className='grow shrink basis-1/2'>
          <label className='flex flex-col gap-2'>
            <h3 className='text-lg font-medium uppercase tracking-widest'>EXP. DATE (MM/YY)</h3>
            <div className='flex gap-3'>
              <input className='text-xl font-medium border rounded-md p-3 border-slate-300 focus:outline-none focus:border-violet-600  focus:ring-1 focus:ring-violet-600 invalid:border-red-500 focus:invalid:ring-red-500 w-full' type="text" placeholder='MM'/>
              <input className='text-xl font-medium border rounded-md p-3 border-slate-300 focus:outline-none focus:border-violet-600  focus:ring-1 focus:ring-violet-600 invalid:border-red-500 focus:invalid:ring-red-500 w-full' type="text" placeholder='YY'/>
            </div>
          </label>
        </div>
        <div className='grow shrink basis-1/2'>
          <label className='flex flex-col gap-2'>
            <h3 className='text-lg font-medium uppercase tracking-widest'>CVC</h3>
            <input className='text-xl font-medium border rounded-md p-3 border-slate-300 focus:outline-none focus:border-violet-600  focus:ring-1 focus:ring-violet-600 invalid:border-red-500 focus:invalid:ring-red-500 w-full' type="text" placeholder='e.g. 123'/>
          </label>
        </div>
      </div>
      <button className='flex justify-center items-center bg-opacity-100 bg-indigo-900 h-12 rounded-md text-white hover:bg-black' type='submit'>
        Confirm
      </button>
    </div>
  )
}

export default Form