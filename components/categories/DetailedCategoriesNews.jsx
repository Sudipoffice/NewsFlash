import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const DetailedCategoriesNews = () => {
    const location = useLocation()
    const news = location.state
    const apiKey = import.meta.env.VITE_NEWSDATA_API_KEY
    const [newsData,setNewsData] = useState([])

    useEffect(()=>{
        fetch(`https://newsdata.io/api/1/latest?language=en&apikey=${apiKey}`)
        .then((res)=> res.json())
        .then((data)=> {
            const uniqueNews = data.results.filter(
                (news, index, self) =>
                  index === self.findIndex((n) => n.title === news.title)
              );
            setNewsData(uniqueNews)
            // console.log(data.results)
        })
    },[])

    if(!news) return <div className='flex h-screen justify-center items-center'>Loading...</div>
  return (
    <div id="detailedCategoriesNews" className='flex flex-col md:flex-row min-h-screen w-screen justify-center items-start p-4 py-2 md:p-20 gap-2 md:gap-12'>
     {/* DetailedNews */}
        <section className='flex flex-col w-full md:w-4/6 gap-1 md:gap-4 py-12 text-start'>
            <img className='aspect-5/3' src={news?.multimedia[0].url} alt={news.title}/>
            <p className='font-semibold text-xs md:text-lg text-gray-600' style={{fontFamily: "Antonio"}}>{news.published_date.slice(0,10)}</p>
            <h1 className='text-xl md:text-5xl text-bold uppercase' style={{fontFamily: "Anton"}}>{news.title}</h1>
            <p className='text-sm md:text-lg w-3/4'>{news.abstract}</p>
            <p className='uppercase font-semibold text-[0.6rem] md:text-xl text-gray-600' style={{fontFamily: "Antonio"}}>{news.byline}</p>
        </section>
        {/*Extra News */}
        <section className='w-full md:w-2/6 py-2 md:py-12 flex flex-col justify-center items-center divide-solid divide-y-2 divide-gray-300'>
        {newsData.map((news) => {
           return news.image_url && <div key={news.title} className='flex flex-row p-2 md:p-4 gap-6 justify-center'>
                <div className='flex flex-col w-4/5 justify-center items-center'>
                    <div className='text-sm md:text-xl font-semibold'>{news.title}</div>
                    {news.description ? <div className='text-xs md:text-base'>{news.description.slice(0, 200)}...</div> : ''}
                </div>
                <img className='aspect-1/1 h-fit w-3/6 md:w-2/6' src={news.image_url} alt={news.title}/>
            </div>

        })}
        </section>
    </div>
  )
}

export default DetailedCategoriesNews
