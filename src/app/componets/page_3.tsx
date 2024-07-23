import React from 'react'
import Image from 'next/image'
import loguito from '@/img/2b02b824-a084-4f0b-8d40-71353ae10517-removebg-preview.png'

function page_3() {
    return (
        <>
            <div className='py-[10rem] mx-[10rem] flex flex-col gap-[12rem] ' >
                <div className='flex flex-row  '>

                    <div className='w-[55%]  flex flex-col justify-center gap-[3rem]'>

                        <div className='flex flex-col gap-[0.5rem] '>
                            <span className='text-[#F65D40] text-5xl font-bold'>TU MAMA CALATA</span>
                            <span className='text-white text-5xl font-bold'>TU MAMA CALATA</span>
                        </div>

                        <div className=' flex flex-col gap-[2rem] w-[40rem] '>
                            <span className='text-white text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quam deleniti,
                                iusto aliquam ullam dolores? Illo eligendi eaque tempora earum suscipit aut repellendus nobis deserunt in, accusantium offici
                                a. Impedit, exercitationem?
                            </span>
                            <span className='text-white text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quam deleniti,
                                iusto aliquam ullam dolores? Illo eligendi
                            </span>
                        </div>


                        <div className='flex items-end gap-[5rem] '>
                            <button className='h-[4.5rem] text-lg bg-white px-[4rem] rounded-[2.5rem]'>

                                Read case study
                            </button>

                            <div className='flex flex-col  '>

                                <span className='text-[#F65D40] font-bold text-6xl'>0%</span>
                                <span className='text-white text-lg'>RO increase</span>

                            </div>

                            <div className="h-full border-r-2 border-[#e6e6e654] "></div>


                            <div className='flex flex-col '>

                                <span className='text-[#F65D40] font-bold  text-6xl'>0K</span>
                                <span className='text-white  text-lg' >Montly website visits</span>

                            </div>
                        </div>



                    </div>

                    <div className=' w-[45%] h-[30rem] border-2 rounded-3xl  '>
                        <Image alt='' src={loguito}
                            className="w-full h-full "
                        />
                    </div>

                </div>


                <div className='px-[6rem] gap-[9rem] flex flex-row'>

                    <div className=' w-[40%] h-[30rem] '>
                        <Image alt='' src={loguito}
                            className="w-full h-full "
                        />
                    </div>
                    <div className=' w-[60%] flex flex-col gap-[3rem] '>
                        <div className='flex flex-col gap-[0.5rem] '>
                            <span className='text-[#F65D40] text-5xl font-bold'>TU MAMA CALATA</span>
                            <span className='text-white text-5xl font-bold'>TU MAMA CALATA</span>
                        </div>
                        <div className=' flex flex-col gap-[2rem] w-[40rem] '>
                            <span className='text-white text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quam deleniti,
                                iusto aliquam ullam dolores? Illo eligendi eaque tempora earum suscipit aut repellendus nobis deserunt in, accusantium offici
                                a. Impedit, exercitationem?
                            </span>
                            <span className='text-white text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quam deleniti,
                                iusto aliquam ullam dolores? Illo eligendi
                            </span>
                            <span className='text-white text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quam deleniti,
                                iusto aliquam ullam dolores? Illo eligendi
                                iusto aliquam ullam dolores? Illo eligendi
                            </span>
                        </div>
                    </div>


                </div>

                <div className='flex flex-row justify-center gap-[8rem] '>
                    <div className='flex flex-col items-center justify-start'>

                        <Image alt=''
                            src={loguito}
                            className='w-[10rem] h-[8rem]' />
                        <span className='font-bold text-gradient text-xl'>SUNSET INNOVATION</span>

                    </div>
                    <div className='flex flex-row items-center gap-[10rem] '>
                        <div className='flex flex-col gap-[2rem] '>
                                <span className='text-white'>INICIO</span>
                                <span className='text-white'>INICIO</span>
                                <span className='text-white'>INICIO</span>
                                <span className='text-white'>INICIO</span>
                                <span className='text-white'>INICIO</span>
                             
                                
                        </div>
                        <div className='flex flex-col  gap-[2rem] '>
                                <span className='text-white'>INICIO</span>
                                <span className='text-white'>INICIO</span>
                                <span className='text-white'>INICIO</span>
                                <span className='text-white'>INICIO</span>
                                <span className='text-white'>INICIO</span>
                               
                                
                        </div>
                        <div className='flex flex-col  gap-[2rem]'>
                                <span className='text-white'>INICIO</span>
                                <span className='text-white'>INICIO</span>
                                <span className='text-white'>INICIO</span>
                                <span className='text-white'>INICIO</span>
                                <span className='text-white'>INICIO</span>
                               
                                
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default page_3
