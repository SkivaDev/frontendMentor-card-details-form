import React from 'react'

function Form() {
  return (
    <div className='form flex flex-col w-2/5 gap-8 box-border'>
      <label className='flex flex-col gap-2'>
        <h3 className='text-lg font-medium uppercase tracking-widest'>Cardholder Name</h3>
        <input className='text-xl font-medium border rounded-md p-3 border-slate-300 focus:outline-none focus:border-violet-600  focus:ring-1 focus:ring-violet-600 invalid:border-red-500 focus:invalid:ring-red-500' type="text" placeholder='Fabrizio Ortiz' />
      </label>
      <label className='flex flex-col gap-2'>
        <h3 className='text-lg font-medium uppercase tracking-widest'>Card number</h3>
        <input className='text-xl font-medium border rounded-md p-3 border-slate-300 focus:outline-none focus:border-violet-600  focus:ring-1 focus:ring-violet-600 invalid:border-red-500 focus:invalid:ring-red-500' type="text" placeholder='9591 6489 6389 1013' />
      </label>
      <div className='flex w-full gap-3 box-border'>
        <div className="flex box-border">
          <label className='flex flex-col gap-2'>
            <h3 className='text-lg font-medium uppercase tracking-widest'>EXP. DATE</h3>
              <input className='text-xl font-medium border rounded-md p-3 border-slate-300 focus:outline-none focus:border-violet-600  focus:ring-1 focus:ring-violet-600 invalid:border-red-500 focus:invalid:ring-red-500' type="text" placeholder='00' />
          </label>
          <label className='flex flex-col gap-2'>
            <h3 className='text-lg font-medium uppercase tracking-widest'>(MM/YY)</h3>
            <input className='text-xl font-medium border rounded-md p-3 border-slate-300 focus:outline-none focus:border-violet-600  focus:ring-1 focus:ring-violet-600 invalid:border-red-500 focus:invalid:ring-red-500' type="text" placeholder='YY' />
          </label>
        </div>
        <div className='flex box-border'>
          <label className='flex flex-col gap-2'>
            <h3 className='text-lg font-medium uppercase tracking-widest'>CVC</h3>
            <input className='text-xl font-medium border rounded-md p-3 border-slate-300 focus:outline-none focus:border-violet-600  focus:ring-1 focus:ring-violet-600 invalid:border-red-500 focus:invalid:ring-red-500' type="text" placeholder='e.g. 123' />
          </label>
        </div>
      </div>
    </div>
  )
}

export default Form