import { Link,Outlet } from "react-router-dom"  
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import 'animate.css';


export function Body(){
  

  const home = useRef(null)
  const cat = useRef(null)
  const profile = useRef(null)
  const homeText = useRef(null)
  const catText = useRef(null)
  const profileText = useRef(null)



  const [page,setPage] = useState('home')


  useEffect (()=>{
    switch(page){
      case 'home':
        home.current.classList.remove('fill-transparent')
        home.current.classList.add('fill-black')
        homeText.current.classList.add('block')
        homeText.current.classList.remove('hidden')
        cat.current.classList.add('fill-transparent')
        cat.current.classList.remove('fill-black')
        catText.current.classList.remove('block')
        catText.current.classList.add('hidden')
        profile.current.classList.add('fill-transparent')        
        profile.current.classList.remove('fill-black')
        profileText.current.classList.remove('block')
        profileText.current.classList.add('hidden')
        break
      case 'cat':
        cat.current.classList.remove('fill-transparent')
        cat.current.classList.add('fill-black')
        catText.current.classList.add('block')
        catText.current.classList.remove('hidden')
        home.current.classList.add('fill-transparent')
        home.current.classList.remove('fill-black')
        homeText.current.classList.remove('block')
        homeText.current.classList.add('hidden')
        profile.current.classList.add('fill-transparent')        
        profile.current.classList.remove('fill-black')
        profileText.current.classList.remove('block')
        profileText.current.classList.add('hidden')
        break
      case 'profile':
        profile.current.classList.remove('fill-transparent')
        profile.current.classList.add('fill-black')
        profileText.current.classList.add('block')
        profileText.current.classList.remove('hidden')
        home.current.classList.add('fill-transparent')
        home.current.classList.remove('fill-black')
        homeText.current.classList.remove('block')
        homeText.current.classList.add('hidden')
        cat.current.classList.add('fill-transparent')
        cat.current.classList.remove('fill-black')
        catText.current.classList.remove('block')
        catText.current.classList.add('hidden')
        break
        default:
          console.log('default')
    }
  },[page])

  return(
      <div className=" w-screen min-h-screen">
          <Outlet>
          </Outlet>
          
          <div id="footer" className=" w-5/6 fixed h-24 bg-white shadow-slate-400 m-auto inset-x-0 bottom-9 rounded-3xl flex justify-between items-center overflow-hidden ">

                <div onClick={()=>{setPage('cat')}} className="animate__animated animate__fadeIn w-1/3 p-0 flex justify-center items-center select-none footer-btn">
                  <Link className="w-full h-full flex flex-row justify-center items-center" to={'/cat'}>
                    <svg id="cat" ref={cat} className=" fill-transparent h-8 w-8" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.2856 2H19.5522C20.9037 2 22.0001 3.1059 22.0001 4.47018V7.7641C22.0001 9.12735 20.9037 10.2343 19.5522 10.2343H16.2856C14.933 10.2343 13.8367 9.12735 13.8367 7.7641V4.47018C13.8367 3.1059 14.933 2 16.2856 2Z" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.44892 2H7.71449C9.06703 2 10.1634 3.1059 10.1634 4.47018V7.7641C10.1634 9.12735 9.06703 10.2343 7.71449 10.2343H4.44892C3.09638 10.2343 2 9.12735 2 7.7641V4.47018C2 3.1059 3.09638 2 4.44892 2Z" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.44892 13.7657H7.71449C9.06703 13.7657 10.1634 14.8716 10.1634 16.2369V19.5298C10.1634 20.8941 9.06703 22 7.71449 22H4.44892C3.09638 22 2 20.8941 2 19.5298V16.2369C2 14.8716 3.09638 13.7657 4.44892 13.7657Z" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.2856 13.7657H19.5522C20.9037 13.7657 22.0001 14.8716 22.0001 16.2369V19.5298C22.0001 20.8941 20.9037 22 19.5522 22H16.2856C14.933 22 13.8367 20.8941 13.8367 19.5298V16.2369C13.8367 14.8716 14.933 13.7657 16.2856 13.7657Z" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p ref={catText} className="animate__animated animate__fadeIn transition-all duration-75 ease-in  text-black font-extrabold ml-1">Category</p>
                  </Link>
                </div>  

              
                <div onClick={()=>{setPage('home')}} className="animate__animated animate__fadeIn w-1/3 flex justify-center items-center footer-btn relative ">
                  <Link className="w-full h-full flex flex-row justify-center items-center" to={'/'}>
                    <svg id="home" ref={home} className=" h-8 w-8 fill-transparent" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714V20.7714" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p ref={homeText} className="animate__animated animate__fadeIn text-black font-extrabold ml-1 ">Explore</p>
                  </Link>
                </div>

              
                <div onClick={()=>{setPage('profile')}} className="animate__animated animate__fadeIn w-1/3 flex justify-center items-center footer-btn ">
                  <Link className="w-full h-full flex flex-row justify-center items-center" to={'/profile'}>
                    <svg id="profile" ref={profile} className=" fill-transparent h-8 w-8" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="11.5791" cy="7.27803" r="4.77803" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.00002 18.7014C3.99873 18.3655 4.07385 18.0337 4.2197 17.7311C4.67736 16.8158 5.96798 16.3307 7.03892 16.111C7.81128 15.9462 8.59431 15.836 9.38217 15.7815C10.8408 15.6533 12.3079 15.6533 13.7666 15.7815C14.5544 15.8367 15.3374 15.9468 16.1099 16.111C17.1808 16.3307 18.4714 16.77 18.9291 17.7311C19.2224 18.3479 19.2224 19.064 18.9291 19.6808C18.4714 20.6419 17.1808 21.0812 16.1099 21.2918C15.3384 21.4634 14.5551 21.5766 13.7666 21.6304C12.5794 21.7311 11.3866 21.7494 10.1968 21.6854C9.92221 21.6854 9.65677 21.6854 9.38217 21.6304C8.59663 21.5773 7.81632 21.4641 7.04807 21.2918C5.96798 21.0812 4.68652 20.6419 4.2197 19.6808C4.0746 19.3747 3.99955 19.0401 4.00002 18.7014Z" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p ref={profileText} className="animate__animated animate__fadeIn text-black font-extrabold ml-1">Profile</p>
                  </Link>
                </div>

          </div>
      </div>
  )
}