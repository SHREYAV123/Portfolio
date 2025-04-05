
import Navbar from "./Navbar"
import { useState } from "react"



const Header=()=> {
  const [navOpen,setNavOpen]=useState(false);

    return (
      <>
        <header className="fixed top-0 left-0 z-40 flex items-center w-full h-20 bg-gradient-to-b from-zinc-900 to-zinc-900/0">  
         <div className="flex items-center justify-between w-full px-4 mx-auto max-w-screen-2xl md:px-6 md:grid-cols-[1fr,3fr,1fr]">
         <h1>
  <div className="flex items-center space-x-2">
    <a href="/" className="flex items-center space-x-2 logo" style={{ textDecoration: 'none' }}>
      <img src="/favicon.ico" alt="Logo" width="48" height="48" />
      <div>
        <h1 className="text-xl font-bold leading-tight text-blue-100 cursor-pointer">
          Shrey<span className="text-3xl font-extrabold text-green-700">a</span>
        </h1>
        <p className="text-sm font-semibold text-blue-100 ">Web Developer</p>
      </div>
    </a>
  </div>
</h1>

            <div className="relative flex items-center">
                <button onClick={()=>setNavOpen((prev)=>!prev)} className="menu-btn md:invisible ">
                <span className="material-symbols-rounded md:hidden">{navOpen?"close":"menu"}</span>
                </button>
                <Navbar navOpen={navOpen }/>
            
            </div>
            <button
  type="button"
  onClick={() => window.location.href = '#contact'}
  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 md:justify-self-end max-md:hidden"
>
  Contact Me
</button>





            
         </div>
          
        </header>
      </>
    )
  }
  
  export default Header
  