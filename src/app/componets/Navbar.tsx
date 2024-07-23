import React from 'react'
import { AcademicCapIcon, Bars3Icon, UserIcon } from "@heroicons/react/16/solid";
import Image from 'next/image';
import sunset from '@/img/2b02b824-a084-4f0b-8d40-71353ae10517-removebg-preview.png'


const Navlinks = [
    { name: "INICIO" },
    { name: "INICIO" },
    { name: "INICIO" },
    { name: "INICIO" }
    

];

function Navbar() {
    return (
        <nav className="flex w-full items-center justify-between  px-[1.1rem] py-[1rem] lg:container lg:mx-auto lg:px-[0.5rem] ">
            <div className="flex items-center justify-center">
                <Image alt='' 
                       src={sunset} 
                       className='w-[3rem] '
                />
                <span className='font-bold text-gradient text-xl'>SUNSET INNOVATION</span>
            </div>

            <div className="hidden lg:flex justify-center  pr-[6rem] gap-x-[4.0rem] ">
                {Navlinks.map((item, index) => (
                    <p className="text-[#d3cece] font-medium" key={index}>{item.name} </p>
                ))}
            </div>

            <div className="flex items-center gap-x-5">


                <div className="flex  items-center gap-x-2">
                    <span className="bg-white rounded-2xl p-2">REGISTRARTE</span>
                </div>
                <div>
                    <Bars3Icon className="h-12 w-12  text-white lg:hidden" />
                </div>
            </div>


        </nav>
    )
}

export default Navbar
