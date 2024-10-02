import React from 'react'
import icon from '../../assets/icon.svg'
import sandwich from '../../assets/sandwich.svg'
import wallet from '../../assets/wallet.svg'
import Buttons from '../Buttons/Buttons'
const Navbar = () => {
  return (
    <>
    
    <div className='flex justify-between items-center'>

        {/* logo */}
    <div>
        <img src={icon} alt="" />
    </div>

         {/* center elements  */}
         <div className='flex items-center justify-between gap-16 text-xl font-semibold'>

        <div>ABOUT</div>
        <div>PRICING</div>
        <div>NFT'S</div>
        <div>FAVORITES</div>

         </div>

         <div className='flex items-center justify-between gap-5'>
            {/* carts  */}
            <div>
                <img src={sandwich} alt="" height={40} width={40} />
                
            </div>
            <div>
            <img src={wallet} alt=""   height={40} width={40} />
            </div>
            <div>
                <Buttons text={"Connect Wallet"}/>
            </div>
         </div>
    </div>
    
    </>
  )
}

export default Navbar