import React from 'react';

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-2'>
      
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full p-2 border rounded-lg'>
        <div className='flex flex-col w-full pb-2'>
            <p className='text-xl font-bold'>$7,865</p>
            <p className='text-gray-600'>Daily Revenue</p>
        </div>
        <p className='bg-green-200 flex justify-center items-center p-1 rounded-lg'>
            <span className='text-green-700 text-md'>+18%</span>
        </p>
      </div>

      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full p-2 border rounded-lg'>
        <div className='flex flex-col w-full pb-2'>
            <p className='text-xl font-bold'>$1,437,876</p>
            <p className='text-gray-600'>YTD Revenue</p>
        </div>
        <p className='bg-green-200 flex justify-center items-center p-1 rounded-lg'>
            <span className='text-green-700 text-md'>+21%</span>
        </p>
      </div>
    
      <div className='bg-white flex justify-between w-full p-2 border rounded-lg'>
        <div className='flex flex-col w-full pb-2'>
            <p className='text-xl font-bold'>11,437</p>
            <p className='text-gray-600'>Customers</p>
        </div>
        <p className='bg-green-200 flex justify-center items-center p-1 rounded-lg'>
            <span className='text-green-700 text-md'>+15%</span>
        </p>
      </div>

    </div>
  )
}

export default TopCards;
