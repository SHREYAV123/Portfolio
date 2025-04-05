import Header from "./components/Header"
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {ReactLenis} from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';



gsap.registerPlugin(useGSAP,ScrollTrigger); 

function App() {
  useGSAP(()=>{
    const elements = gsap.utils.toArray('.reveal-up')
 elements.forEach((element)=>{
  gsap.to(element,{ScrollTrigger:{
    trigger:element,
   start:'-200 bottom',
   end:'bottom 80%',
    scrub:true,
  markers:true},
  y: 0, 
  opacity: 1,
duration:1,
ease:'power2.out'})

 })
  })

  return (
    <>
      <div className=""> 
        <ReactLenis root>
       <Header></Header>
       <main>  <Hero></Hero>
       <About/>
       <Skills/>
       <Experience/>
       <Project/>
       <Contact/>
     
       </main>
       <Footer/>
       </ReactLenis> 
     
        
      </div>
    </>
  )
}

export default App
