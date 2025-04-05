import React, { useRef,useEffect} from 'react'
import {PropTypes} from "prop-types"


const Navbar = ({navOpen}) => {
const lastActiveLink=useRef()
const activebox =useRef()
const initActivebox=()=>{
  console.log(lastActiveLink.current)
  console.log(activebox.current)
  activebox.current.style.top=lastActiveLink.current.offsetTop + "px"
   activebox.current.style.left=lastActiveLink.current.offsetLeft + "px"
    activebox.current.style.width=lastActiveLink.current.offsetWidth + "px"
     activebox.current.style.height=lastActiveLink.current.offsetHeight + "px"
}

const activeCurrentLink=(event)=>{
  lastActiveLink.current?.classList.remove('active');
  event.target.classList.add('active')
  lastActiveLink.current=event.target


  activebox.current.style.top=event.target.offsetTop + "px"
   activebox.current.style.left=event.target.offsetLeft + "px"
    activebox.current.style.width=event.target.offsetWidth + "px"
     activebox.current.style.height=event.target.offsetHeight + "px"
}

useEffect(() => {
  // Set the initial active link
  const firstActiveLink = document.querySelector('.nav-link.active');
  if (firstActiveLink) {
    lastActiveLink.current = firstActiveLink;
    initActivebox();
  }

  // Resize event listener
  window.addEventListener('resize', initActivebox);
  return () => window.removeEventListener('resize', initActivebox);
}, []);

  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link'
    },
    {
      label: 'Skills',
      link: '#technology',
      className: 'nav-link'
    },
    {
      label: 'Experience',
      link: '#experience',
      className: 'nav-link'
    },
    {
      label: 'Projects',
      link: '#projects',
      className: 'nav-link'
    },
   
     
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden'
    }
  ];

  return (
    <nav className={'navbar ' + (navOpen ? "active":"")}>
     {
      navItems.map(({label,link,className,ref},key) => (
        <a
        key={key}
        ref={ref}
        className={className}
        href={link}
       onClick={activeCurrentLink}>
        {label}
        </a>

      ))
     }
 
 <div className='active-box' ref={activebox}></div>
 
 
 
    </nav>
  )
}
Navbar.PropTypes={
  navOpen:PropTypes.bool.isRequired,
}

export default Navbar




  