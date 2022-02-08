
 
import React from 'react';
import avatar from './pictures/avatar.png'
import { useSelector,useDispatch } from 'react-redux';
import {sign,profile} from '../../store/profile'

export function ProfileSigned(props) {
    const store = useSelector(state => state.profile)
    const dis = useDispatch()
    const logout = () => {
        dis(sign(false))
        dis(profile({}))
    }
    return (
        <div className='flex flex-col justify-center items-center mx-auto h80 w-full'>
            <div className='flex flex-col justify-center items-center h-96 w-9/12 rounded-2xl'>
                <div className='flex flex-row justify-center items-center'>
                    <img src={avatar} alt="avatar" className=' h-24 w-24' />
                    <div className='flex flex-col justify-center items-start'>
                        <h1 className='font-bold text-3xl'>{store.profile.name}</h1>
                        <p className=' font-medium text-xl'>{store.profile.username}</p>
                    </div>
                </div>
                    <button onClick={logout} className='bg-blue-500 rounded-2xl w-9/12 h-16 text-white text-xl outline-none mt-10 '>
                        logout
                    </button>
            </div>
        </div>
    );
}
