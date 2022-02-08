

import React from 'react';
import { useRef,useState} from 'react';
import { LoginForm } from './forms/login-form';
import { SignupForm } from './forms/signup-form';

export function Login() {

    const formDad = useRef(null);
    const [active,setActive] = useState('login')
    const nonActiveClass = 'w-1/2 h-full text-blue-700 font-bold text-2xl flex justify-center items-center'
    const activeClass = 'w-1/2 h-full bg-blue-300 text-blue-700 font-bold text-2xl flex justify-center items-center'

    return (
        <div className=' h-screen mx-auto flex justify-center items-center -mt-32'>
            <div className=' shadow-2xl shadow-blue-500/50 py-10 w-11/12 bg-blue-500 rounded-3xl flex flex-col justify-center items-center ' >
                <div className ='h-20 w-10/12 mb-5 rounded-3xl bg-blue-100 flex justify-center items-center overflow-hidden'>
                    
                <button onClick={()=> setActive('login')} className={active ==='login' ? activeClass : nonActiveClass}>Login</button>
                <button onClick= {()=> setActive('signup')} className={active ==='signup' ? activeClass : nonActiveClass}>Signup</button>

                    
                </div>

                <div ref={formDad} id='formDad'>
                    {
                        active === 'login' ? <LoginForm /> : <SignupForm />
                    }
                </div>


            </div>
        </div>
    );
}

