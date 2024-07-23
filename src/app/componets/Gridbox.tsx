import React from 'react'
import MenuEnd from '@/app/componets/subComponets/menuEnd'
import Image from 'next/image'
import logo from '@/img/2b02b824-a084-4f0b-8d40-71353ae10517-removebg-preview.png'

function Gridbox() {
    return (
        <>
            <div className=' flex flex-col  '>
                <div className='  flex flex-row justify-center items-center  ' >

                    <div className='w-auto '>
                        <div className="flex flex-col items-center justify-center p-4">
                            <h1 className="text-8xl font-bold text-gradient-web3">Web3 Design</h1>
                            <h1 className="text-7xl font-bold text-gradient-agency mt-4">Agency.</h1>
                        </div>


                    </div>
                </div>
                <div className='flex justify-center gap-[6rem] mt-10'>

                    <div className='w-[18rem] h-[20rem] row-span-2  p-2 flex flex-col justify-center items-start gap-[3rem]'>
                        <div className='w-auto bg-gradient-to-r from-[#dbdbdb00] to-[#fffefe11] border-r-[0.5px] border-y-[0.5px]  border-y-[#f1ecec0c] border-r-[#f1ecec18] rounded-r-3xl'>
                            <div className='flex flex-col gap-4 py-10 px-14 '>
                                <p className='font-bold text-white text-2xl'>240+</p>
                                <span className='text-white' >PARTNERS</span>
                            </div>
                        </div>
                        <div className='w-auto bg-gradient-to-r from-[#dbdbdb10] border-l-[0.5px] border-y-[0.5px] border-y-[#f1ecec0c] border-l-[#f1ecec0c]  rounded-s-3xl ml-[3.25rem] border-gradient'>
                            <div className='flex flex-col gap-4  py-10 px-14'>
                                <p className='font-bold text-white text-2xl'>2407+</p>
                                <span className='text-white'>PARTNERS</span>
                            </div>
                        </div>
                    </div>

                    <div className='w-[35rem] h-[30rem] row-span-3  p-2 flex flex-col items-center'>
                        <Image
                            alt=''
                            src={logo} // Ruta a la imagen en la carpeta public
                            className="w-full h-full "
                        />
                    </div>
                    <div className='w-[18rem] h-[20rem] row-span-2  gap-10  p-2 flex flex-col items-baseline justify-center'>
                        <h2 className='text-xl text-left text-white'>
                            minus molestiae sapiente dolor iure maxime quaerat rem dolorum ea. Praesentium non maxime eos eum accusantium voluptatem.
                        </h2>
                        <button className='bg-white rounded-2xl p-4'>GET STARTED</button>
                    </div>

                    

                </div>
                
                <div className='w-full' >
                <MenuEnd />
                </div>
                
            </div>
            
        </>
    )
}

export default Gridbox
