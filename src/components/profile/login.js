

import React from 'react';

export function Login({}) {
    return (
        <div className=' h-screen mx-auto flex justify-center items-center'>
            <div className=' h-96 w-11/12 bg-blue-500 rounded-3xl flex flex-col justify-center items-center ' >
                <form action="" class ='flex flex-col justify-center items-center w-full' >
                    <input type="text" name='username' placeholder='username' className='rounded-full h-16 w-10/12 pl-10 outline-none text-2xl'/>
                    <input type="password" name='password' placeholder='paasword' className='mt-10 rounded-full h-16 w-10/12 pl-10 outline-none text-2xl'/>
                </form>
            </div>
        </div>
    );
}

