import React from 'react'
import Image from 'next/image'
import phoenix from '@/img/2b02b824-a084-4f0b-8d40-71353ae10517-removebg-preview.png'
import MenuEnd from './subComponets/menuEnd'

function page_2() {
    return (
        <>
            <div className=' mx-[2rem] '>
                <div className='flex  items-center '>

                    <div className='w-[60%] h-[50rem]'>
                        <Image
                            alt=''
                            src={phoenix} // Ruta a la imagen en la carpeta public
                            className="w-full h-full"
                        />
                    </div>

                    <div className='w-[35%] h-[45rem] flex flex-col justify-center gap-10'>
                        <div className='flex flex-col gap-4'>
                            <span className='font-bold text-6xl text-[#F65D40] '>tu mama calata</span>
                            <span className='font-bold text-6xl text-white'>tu mama calata</span>


                        </div>
                        <div className=' '>
                            <span className=' text-white text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas officiis id ipsa dolorem,
                                hic repellat aspernatur, eveniet corrupti eos maxime asperiores odio et facere blanditiis, praesentium dolores
                                tempore doloribus autem.
                            </span>
                        </div>
                    </div>
                </div>


                <div className='  flex flex-row  justify-center gap-8'>
                    <div className=' w-[20rem] h-[20rem]  flex flex-col items-center justify-center gap-8 p-10 bg-gradient-to-r from-[#dbdbdb00] to-[#fffefe11] border-[1px]  border-[#f1ecec0c] rounded-3xl'>

                        <Image alt=''
                            src={phoenix}
                            className='w-[6rem] h-[5rem]' />



                        <span className='text-white font-bold'>Packet tracer</span>


                        <span className='text-white text-sm text-center'>Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Repudiandae,
                            d voluptate ipsa aspernaiam sed?
                        </span>


                    </div>
                    <div className=' w-[20rem] h-[20rem]  flex flex-col items-center justify-center gap-8 p-10 bg-gradient-to-r from-[#dbdbdb00] to-[#fffefe11] border-[1px]  border-[#f1ecec0c] rounded-3xl'>

                        <Image alt=''
                            src={phoenix}
                            className='w-[6rem] h-[5rem]' />



                        <span className='text-white font-bold'>Packet tracer</span>


                        <span className='text-white text-sm text-center'>Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Repudiandae,
                            d voluptate ipsa aspernaiam sed?
                        </span>


                    </div>
                    <div className=' w-[20rem] h-[20rem]  flex flex-col items-center justify-center gap-8 p-10 bg-gradient-to-r from-[#dbdbdb00] to-[#fffefe11] border-[1px]  border-[#f1ecec0c] rounded-3xl'>

                        <Image alt=''
                            src={phoenix}
                            className='w-[6rem] h-[5rem]' />



                        <span className='text-white font-bold'>Packet tracer</span>


                        <span className='text-white text-sm text-center'>Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Repudiandae,
                            d voluptate ipsa aspernaiam sed?
                        </span>


                    </div>



                </div>


                <div className='flex flex-col items-center p-[6rem] gap-10'>
                    <div className='flex flex-col items-center gap-4'>
                        <span className='font-bold text-3xl text-[#F65D40]'>tu mama calata</span>

                    </div>

                    <div className=' w-[40%] '>
                        <span className=' text-white text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas officiis id ipsa dolorem,
                            hic repellat aspernatur, eveniet corrupti eos maxime asperiores odio et facere blanditiis, praesentium dolores
                            tempore doloribus autem.
                        </span>
                    </div>
                </div>



            </div >

                <MenuEnd />
        </>
    )
}

export default page_2
