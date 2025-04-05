import React from 'react'

const Hero = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Ensure resume.pdf is in the public folder
    link.download = 'ShreyaSahu_Resume.pdf';
    link.click();
  }
  const scrollToBottom = () => {
    window.scrollTo({ 
      top: document.body.scrollHeight, 
      behavior: 'smooth' 
    });
  ;
    
  };
  return (
   
      <section id='home' className='py-20 pb-24 border-b pt-28 lg:pt-36 border-neutral-800'>
        <div className="container items-center px-10 lg:grid lg:grid-cols-2 lg:gap-10">
            <div>
                <div className='flex items-center gap-3 '>
                    <figure className='rounded-lg img-box w-9 h-9'>
                        <img src="/iconpic.jpg" width={9} height={9} alt="Avatar-Shreya Sahu" className='img-cover'/>
                    </figure>

                    <div className='flex items-baseline font-medium gap-1.5 tracking-wide text-gray-400'>  
                        <span  className='relative w-2 h-2 rounded-full bg-emerald-400'>
                            <span className='absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping'>
                           
                            </span>
                        </span>
                        Available for work — Let’s connect!

                    </div>
                </div>
                <h2 className='reveal-up text-5xl font-bold leading-tight lg:leading-[1.15] lg:text-[55px] text-gray-100 headline-1 max-w-[15ch] mt-5 mb-8 lg:mb-10 lg:max-[15ch] sm:max-[20ch]'>    
                Building
                <span className="text-emerald-400"> Digital Experiences </span>  with <span className="text-cyan-400">Passion</span> and <span className="text-blue-400">Precision</span>.
                </h2>
                <div className='flex items-center gap-3 lg:gap-6'>
                <button 
      type="button"
      onClick={downloadResume} 
      className="text-white bg-gradient-to-r from-slate-600 via-indigo-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center gap-2"
    >
      <span className="material-symbols-rounded">download</span>
      My Resume
    </button>
                
    <button 
      type="button" 
      onClick={scrollToBottom}
      className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center gap-2"
    >
      <span className="material-symbols-rounded " >keyboard_arrow_down</span>
      Scroll Down
    </button>
                </div>
            </div>
            <div className='hidden lg:block'>
                <figure className='w-full max-w-[480px] ml-auto rounded-[60px] overflow-hidden bg-gradient-to-t from-sky-400 via-25% via-sky-600/40 to-65%'>
                    <img src="
                    /images/d.png" alt="Shreya Sahu"  className='w-full h-[600px] mt-0 '/>
                     {/* /Portfoliopic.jpg */}
                </figure>
            </div>
        </div>
      </section>
   
  )
}

export default Hero
