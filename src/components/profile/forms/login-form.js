

import React from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';



export function LoginForm() {
    // const state = useSelector(state => state.profile)
    const username = useRef(null);
    const password = useRef(null);
    const formSubmit = (e) => {
        e.preventDefault()
        // if(username.current.value === state.profile.username && password.current.value === state.profile.password){
        //     alert('login success')
        // }else{
        //     alert('login failed')
        // }
    }
    return (
        <form  action="" className =' flex flex-col justify-center items-center w-full' >
            <input ref={username} type="text" name='username' placeholder='username' className='rounded-full h-16 w-10/12 pl-10 outline-none text-2xl bg-blue-300 text-blue-900 placeholder-blue-400 font-bold'/>
            <input ref={password} type="password" name='password' placeholder='paasword' className='mt-5 rounded-full h-16 w-10/12 pl-10 outline-none text-2xl bg-blue-300 text-blue-900 placeholder-blue-400 font-bold'/>
            <button type="submit" className='mt-5 rounded-full h-16 w-10/12 outline-none text-2xl bg-white text-blue-500 font-bold active:bg-blue-300'>login</button>
        </form>

    );
}
