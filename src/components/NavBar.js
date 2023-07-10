import React from "react";
import {BiSearch} from 'react-icons/bi';

function NavBar() {
    return(
        <div className='h-20 w-screen flex justify-center items-center shadow-2xl'>
            <div className='w-[90%] flex justify-between '>
                <h1 className='font-bold font-Abril text-white text-2xl tracking-wider '>Dashboard</h1>
                <div className='flex items-center rounded-3xl shadow-2xl px-3 h-10'>
                    <BiSearch color={'#FFFFFF'} size={20}/>
                    <input className='bg-inherit rounded-2xl mx-2 outline-0 text-white text-lg placeholder:text-white' placeholder='Search'/>
                </div>
            </div>

        </div>
    )
}

export default NavBar