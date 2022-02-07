

import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../../store/profile';

export function SignupForm() {
    const name = useRef(null);
    const lastname = useRef(null);
    const username = useRef(null);
    const password = useRef(null);

    const dis = useDispatch();
    const formSubmit = (e) => {
        e.preventDefault()
        dis(signup({
            name: name.current.value,
            lastname: lastname.current.value,
            username: username.current.value,
            password: password.current.value
        }))
    }

    return (
        <form  onSubmit={formSubmit}  action="" className =' flex flex-col justify-center items-center w-full' >
            <input ref={name} type="text" name='name' placeholder='name' className='rounded-full h-16 w-10/12 pl-10 outline-none text-2xl bg-blue-300 text-blue-900 placeholder-blue-400 font-bold'/>
            <input ref={lastname} type="text" name='lastname' placeholder='lastname' className='mt-5 mb-5 rounded-full h-16 w-10/12 pl-10 outline-none text-2xl bg-blue-300 text-blue-900 placeholder-blue-400 font-bold'/>
            <input ref={username} type="text" name='username' placeholder='username' className='rounded-full h-16 w-10/12 pl-10 outline-none text-2xl bg-blue-300 text-blue-900 placeholder-blue-400 font-bold'/>
            <input ref={password} type="password" name='password' placeholder='paasword' className='mt-5 rounded-full h-16 w-10/12 pl-10 outline-none text-2xl bg-blue-300 text-blue-900 placeholder-blue-400 font-bold'/>
            <button type="submit" className='mt-5 rounded-full h-16 w-10/12 outline-none text-2xl bg-white text-blue-500 font-bold active:bg-blue-300'>signup</button>
    </form>
    );
}
