import React from 'react'
import apple from '../assets/apple.png'
import microsoft from '../assets/microsoft.svg'
import google from '../assets/google.svg'
import blaze from '../assets/blaze.png'
import expo from '../assets/expo.webp'
import multiplier from '../assets/multiplier.png'
import morgan from '../assets/morgan.png'
import meta from '../assets/meta.svg'
import nvidea from '../assets/nvidea.svg'
import people from '../assets/people.png' 
import shell from '../assets/shell.png'

const Companies = () => {
  const companies = [apple, microsoft, google, blaze, expo, multiplier, morgan, meta, nvidea, people, shell ];
  return (
    <div className='text-white w-[65%] gap-12 pb-8 flex flex-col justify-center items-center'>
      <div className="">Learn Cloud Data engineering from mentors who have worked with brands like</div>
      <div className=" grid grid-cols-4 gap-8 items-center">
        {
          companies.map((key, index) => {
            return(
              <div className='h-[56px] w-[150px] p-4 rounded-lg bg-neutral-800 border flex justify-center items-center'>
                <img src={key} className='max-h-[50px] '  alt="" />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Companies