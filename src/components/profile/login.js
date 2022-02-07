

import React from 'react';
import { useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { sign } from '../../store/profile';

export function Login({}) {

    const store = useSelector(state => state.profile)
    const dis = useDispatch()
    const password = useRef(null);
    const username = useRef(null);


    const formSubmit = (e) => {
        e.preventDefault()
        if(username.current.value === store.profile.username && password.current.value === store.profile.password ){
            dis(sign(true)) 
        }else{
            alert('wrong password')
        }

    }

    return (
        <div className=' h-screen mx-auto flex justify-center items-center'>
            <div className=' shadow-2xl shadow-blue-500/50 h-96 w-11/12 bg-blue-500 rounded-3xl flex flex-col justify-center items-center ' >
                <form action="" onSubmit={formSubmit} class ='flex flex-col justify-center items-center w-full' >
                    <input ref={username} type="text" name='username' placeholder='username' className='rounded-full h-16 w-10/12 pl-10 outline-none text-2xl bg-blue-300 text-blue-900 placeholder-blue-400 font-bold'/>
                    <input ref={password} type="password" name='password' placeholder='paasword' className='mt-5 rounded-full h-16 w-10/12 pl-10 outline-none text-2xl bg-blue-300 text-blue-900 placeholder-blue-400 font-bold'/>
                    <button type="submit" className='mt-5 rounded-full h-16 w-10/12 outline-none text-2xl bg-white text-blue-500 font-bold active:bg-blue-300'>login</button>
                </form>
            </div>
        </div>
    );
}

