import React from 'react'
import mentors from '../mentors.json';
const Mentors = () => {
  return (
    <div className='w-[65%] py-12 text-white flex flex-col justify-center gap-12 items-center '>
      <div className="text-[2.5rem] font-semibold">Your Program Mentors</div>
      <div className="grid grid-cols-4   gap-4">
        {
          mentors.map((key, index) => {
            const isLastItem = index === mentors.length - 1;
            return(
              <div className=" flex flex-col pb-2 my-2  mentor justify-between items-center rounded-2xl">
                <img className=' w-[100%] border-b-2 border-blue-300 object-cover rounded-t-2xl h-48' src={key.image} alt="" />
                <div className="flex flex-col justify-center items-center gap-2">
                  <div className="">{`${key.name}`}</div>
                  <div className="">{`${key.designation}`}</div>
                  <img src={key.company} className='w-24' alt="" />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Mentors