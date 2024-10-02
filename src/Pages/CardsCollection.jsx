import React from 'react'
import leftarrow from '../assets/leftarrow.svg'
import rightarrow from '../assets/rightarrow.svg'
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'
const CardsCollection = () => {
  return (
    <>
    <div className='flex  justify-between items-center pt-32 pb-16'>
      <div>
        <h1 className='text-5xl font-bold text-[#181818]'>NOTEABLE COLLECTION</h1>
       
        </div>
        <div className='flex gap-4'>
          <div className=' p-3 border-2 border-[#4E4FEB] h-12 w-12'>

          <img src={leftarrow} alt="" />
          </div>
          <div className='bg-gradient-to-l from-[#7D3CC1] to-[#4E4FEB] p-3  h-12 w-12 '>
          <img src={rightarrow} alt="" />
          </div>
      </div>
    </div>
    <div className='flex justify-between gap-4 items-center'>

    <div className='bg-[#E8E8E8C2] h-[650px] w-[546px] shadow-2xl rounded-3xl '>
      <div >
        <img src={card1} alt="" className='h-[505px] w-[546px] rounded-t-3xl' />
       <div className='pt-8 px-6'>
        <h1 className='text-3xl font-semibold'>TITLE OF NFT </h1>
        <div className='flex justify-between items-center  ' >
          
          <div>
            <h1 className='text-base font-normal font-[#5C5C5C]'>Floor </h1>
            <p className='text-xl font-bold text-[#303030]'>0.04 ETH </p>
          </div>
          <div>
            <h1 className='text-base font-normal font-[#5C5C5C]'>24TH volume </h1>
            <p className='text-xl font-bold text-[#303030]'>45 ETH </p>
          </div>
         
        </div>

       </div>
      </div>
      
    </div>
    <div className='bg-[#E8E8E8C2] h-[650px] w-[546px] shadow-2xl rounded-3xl '>
      <div >
        <img src={card2} alt="" className='h-[505px] w-[546px] rounded-t-3xl' />
       <div className='pt-8 px-6'>
        <h1 className='text-3xl font-semibold'>TITLE OF NFT </h1>
        <div className='flex justify-between items-center  ' >
          
          <div>
            <h1 className='text-base font-normal font-[#5C5C5C]'>Floor </h1>
            <p className='text-xl font-bold text-[#303030]'>0.04 ETH </p>
          </div>
          <div>
            <h1 className='text-base font-normal font-[#5C5C5C]'>24TH volume </h1>
            <p className='text-xl font-bold text-[#303030]'>45 ETH </p>
          </div>
         
        </div>

       </div>
      </div>
      
    </div>
    <div className='bg-[#E8E8E8C2] h-[650px] w-[546px] shadow-2xl rounded-3xl '>
      <div >
        <img src={card3} alt="" className='h-[505px] w-[546px] rounded-t-3xl' />
       <div className='pt-8 px-6'>
        <h1 className='text-3xl font-semibold'>TITLE OF NFT </h1>
        <div className='flex justify-between items-center  ' >
          
          <div>
            <h1 className='text-base font-normal font-[#5C5C5C]'>Floor </h1>
            <p className='text-xl font-bold text-[#303030]'>0.04 ETH </p>
          </div>
          <div>
            <h1 className='text-base font-normal font-[#5C5C5C]'>24TH volume </h1>
            <p className='text-xl font-bold text-[#303030]'>45 ETH </p>
          </div>
         
        </div>

       </div>
      </div>
      
    </div>
    </div>
    </>
  )
}

export default CardsCollection