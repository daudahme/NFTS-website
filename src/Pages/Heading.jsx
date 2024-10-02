import React from 'react'
import Buttons from '../Components/Buttons/Buttons'
import Headingimg from '../assets/Headingimg.svg'
const Heading = () => {
    return (
        <>
        <div className='flex justify-between items-start gap-5 py-6' >
            <div className=' flex flex-col gap-6 items-start  pt-9'> 
                <h1 className='text-6xl font-semibold text-[#181818] leading-[4.5rem]'>
                    NFTs Empowering <br /> Content Creators  in the <br />  Digital Age
                </h1>
                <p  className='text-justify leading-7'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.  Laudantium neque cupiditate  <br />officiis iusto vel , atque inventore non numquam maiores hic,  praesentium repellat <br /> provident veritatis id cumque rem a impedit. Officia!
                </p>
                

                <Buttons text={"Explore NFT"} />
                
            </div>

            <div>
                <div  >

                    <img src={Headingimg} alt=""   />
                </div>
            </div>
        

        </div>

        <div className='flex  gap-16 items-center justify-end '>
                    <div>
                        <h1 className='text-4xl font-semibold'>10.5K <span className='text-[#4E4FEB]'>+</span></h1>
                        <p className='text-base font-semibold text-[#787878]'>Artwork</p>
                    </div>
                    <div>
                        <h1 className='text-4xl font-semibold'>10K <span className='text-[#4E4FEB]'>+</span></h1>
                        <p className='text-base font-semibold text-[#787878]'>Artist</p>
                    </div>
                    <div>
                        <h1 className='text-4xl font-semibold'>5k <span className='text-[#4E4FEB]'>+</span></h1>
                        <p className='text-base font-semibold text-[#787878]'>Collection</p>
                    </div>
                    <div>
                        <h1 className='text-4xl font-semibold'>5M <span className='text-[#4E4FEB]'>+</span></h1>
                        <p className='text-base font-semibold text-[#787878]'>Sale</p>
                    </div>
                   

                </div>
        </>
    )
}

export default Heading