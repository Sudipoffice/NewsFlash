import React from 'react'

const Footer = () => {
  const date = new Date()
  return (
    <div className=' w-screen z-0 h-fit flex flex-col justify-center items-center pb-20 md:pb-0 px-2 md:px-[10%] divide-dashed divide-y-[1.5px] md:divide-y-2 divide-gray-400'>
    {/* News Source */}
    <section className='px-2 md:px-8 flex flex-col justify-center items-center'>
    <h1 className='text-xs md:text-lg text-gray-500' style={{fontFamily: "Antonio"}}>News Sourced from</h1>
    <div className='grid grid-cols-3 md:grid-cols-5 grid-flow-row justify-items-center place-items-center '>
        <img className=' icons rounded-3xl' src="https://www.storybench.org/wp-content/uploads/2018/01/nytdev.jpg" alt=""/>
        <img className=' icons' src="https://newsdata.io/blog/wp-content/uploads/2023/02/62ed0cf319dc399d5441e66a.png" alt=""/>
        <img className='px-[15%] icons' src="https://gnews.io/assets/images/logo-black.svg" alt=""/>
        <img className=' icons' src="https://worldnewsapi.com/img/world-news-api-logo.svg" alt=""/>
        <img className='px-[10%] icons' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbqwGOwwYXQG7glq8mvc6i4evgiwsmPs82A&s" alt=""/>
    </div>
    </section>
    {/* Rest */}
    <section className='flex flex-row justify-center items-center w-screen py-2 md:py-8'>
        <div className='flex justify-center items-center text-xs md:text-2xl w-2/6 md:w-1/4' style={{fontFamily: "Antonio"}}>
        &copy;{date.getFullYear()} <p className="text-base md:text-3xl" style={{ fontFamily: "Lobster Two, sans-serif", fontWeight: 900, fontStyle: "bold",}}
          >NewsFlash</p>
        </div>

        <div className=' flex flex-col justify-center items-center text-center gap-2 md:gap-8 w-3/6 md:w-2/4'>
          <div className='flex flex-col gap-2 w-full items-center'>
          <h1 className="text-sm md:text-2xl" style={{ fontFamily: "Lobster Two"}}>Sudip Mandal</h1>
          <h1 className="text-sm md:text-2xl" style={{fontFamily: "Antonio"}}>+91 7003071143</h1>
          <h1 className="text-sm md:text-2xl" style={{ fontFamily: "Lobster Two"}}>mandalsudipoffice@gmail.com</h1>
          </div>
          <p className='text-[0.6rem] md:text-base' style={{ fontFamily: "Young Serif"}}>
          Designed and Developed by Sudip Mandal
          </p>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center text-lg md:text-2xl gap-2 md:gap-8 w-1/6 md:w-1/4' >
        
        <a
            className="bi bi-linkedin transition-transform duration-300 hover:scale-110 hover:text-blue-600 "
            href="https://www.linkedin.com/in/sudipmandal/"
            target="_blank"
          ></a>
        <a
            className="bi bi-github transition-transform duration-300 hover:scale-110 hover:text-gray-900 dark:hover:text-gray-500 z-10"
            href="https://github.com/Sudipoffice"
            target="_blank"
          ></a>
          <a
            className="bi bi-envelope-fill transition-transform duration-300 hover:scale-110 hover:text-yellow-400 z-10"
            href="mailto:mandalsudipoffice@gmail.com"
            target="_blank"
          ></a>
          <a
            className="bi bi-whatsapp transition-transform duration-300 hover:scale-110 hover:text-green-500 z-10"
            href="https://api.whatsapp.com/send?phone=7003071143"
            target="_blank"
          ></a>
        </div>
    
    </section>
    </div>
  )
}

export default Footer
