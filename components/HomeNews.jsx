import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const HomeNews = () => {
  const [topStories, setTopStories] = useState([]);
  const apiKey = import.meta.env.VITE_NYT_API_KEY;
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          const filteredArticles = data.results.filter(
            (article) =>
              Array.isArray(article.multimedia) && article.multimedia[0]?.url
          );
          const chunkedData = Array.from({ length: 7 }, (_, i) =>
            filteredArticles.slice(i * 5, i * 5 + 5)
          );
          setTopStories(chunkedData);
          // console.log(chunkedData);
        }
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }, [apiKey]);

  useEffect(() => {
    if (topStories[0]?.length) {
      const interval1 = setInterval(() => {
        setCurrentIndex1((prevIndex) => (prevIndex + 1) % topStories[0].length);
      }, 6000);
      const interval2 = setInterval(() => {
        setCurrentIndex2((prevIndex) => (prevIndex + 1) % topStories[0].length);
      }, 9000);
      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
      };
    }
  }, [topStories]);

  const handleNext = () => {
    setCurrentIndex1((prevIndex) => (prevIndex + 1) % topStories[0].length);
  };
  const handlePrev = () => {
    setCurrentIndex1(
      (prevIndex) =>
        (prevIndex - 1 + topStories[0].length) % topStories[0].length
    );
  };

  if (topStories.length === 0) {
    return (
      <div
        className="w-screen  min-h-full flex flex-col justify-center items-center py-8 md:py-24"
        
      >
        <header
          className="text-xl md:text-7xl font-bold text-black py-0 md:py-10"
          style={{ fontFamily: "Uncial Antiqua" }}
        >
          TOP STORIES
        </header>

        <Shimmer />
      </div>
    );
  }



  return (
    <>
    <div
      className=" w-screen relative h-fit md:h-fit hidden md:flex flex-col  items-center py-0 px-2 md:px-12 responsive-homenews "
      // style={{
      //   // 2400
      //   opacity: scrollY < 2400 ? 0 : 1,
      //   transition: "opacity 0.2s ease-in",
      // }}
    >
      <header
        className="text-xl md:text-7xl font-bold text-black py-0 md:py-10"
        style={{
          fontFamily: "Uncial Antiqua",
          fontWeight: 700,
        }}
      >
        TOP STORIES
      </header>

      {/* 1st News Line */}
      <div className="relative w-full h-full overflow-x-hidden py-0 md:py-4 ">
        <div
          className="flex flex-row h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex1 * 100}%)` }}
        >
          {topStories[0]?.map((story) => {
            return (
              <div
                key={story.title}
                className="flex flex-col-reverse md:flex-row min-w-full h-96 md:h-fit duration-700 ease-in-out p-0.5"
              >
                <div className="w-full md:w-2/5 h-auto p-1 md:p-8 text-center outline outline-gray-500 outline-2">
                  <h1 className="text-sm md:text-5xl font-bold py-1 md:py-8">{story.title}</h1>
                  <p className="text-xs md:text-xl pt-1 md:pt-8">{story.abstract}</p>
                  <Link to="/detailedNews" state={{ ...story, source: "NYT" }}>
                    <button className="pb-1 md:pb-8 px-0 md:px-2 w-full text-end">
                      <i className="bi bi-arrow-up-right-circle text-lg md:text-2xl hover:text-gray-400 "></i>
                    </button>
                  </Link>
                  <p className="text-xs md:text-lg font-bold text-gray-800 text-end flex justify-end ">
                    {story.byline}
                  </p>
                </div>
                {story.multimedia && story.multimedia[0]?.url && (
                  <img
                    className="aspect-5/3 h-fit w-full md:w-2/3 object-cover"
                    src={story.multimedia[0].url}
                    alt={story.title}
                  />
                )}
              </div>
            );
          })}
        </div>
        <button
          onClick={handlePrev}
          type="button"
          className="absolute top-[30%] md:top-[50%] left-[-0.5%] z-30 px-4 cursor-pointer outline-none"
        >
          <i className="bi bi-arrow-left-circle-fill text-2xl md:text-4xl bg-gradient-to-br from-lime-300 to-sky-400 bg-clip-text text-transparent  hover:text-gray-700 "></i>
        </button>
        <button
          onClick={handleNext}
          type="button"
          className="absolute  top-[30%] md:top-[50%] right-[-0.5%] z-30 px-4 cursor-pointer outline-none"
        >
          <i className="bi bi-arrow-right-circle-fill text-2xl md:text-4xl bg-gradient-to-br from-lime-300 to-sky-400 bg-clip-text text-transparent  hover:text-gray-700"></i>
        </button>
      </div>

      {/* 2nd News Line */}
      <div className="p-2 md:p-12 grid grid-flow-row grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 w-screen h-full ">
        
        <div className="relative  h-fit md:h-full  border-solid border-gray-500 border-2 overflow-x-hidden ">
          <div
            className="flex flex-row-reverse transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${currentIndex2 * 100}%)` }}
          >
            {topStories[1]?.map((story) => {
              return (
                <div
                  key={story.title}
                  className="flex flex-col p-1 md:p-4 min-w-full duration-700 ease-in-out"
                >
                  <img
                    className="aspect-video object-cover"
                    src={story.multimedia[1].url}
                  />
                  <div className="p-1 md:p-2 divide-dashed divide-gray-500 divide-y-2">
                    <h1 className="text-sm md:text-3xl font-bold w-4/5 py-1 md:py-4 ">
                      {story.title}
                    </h1>

                    <p className="text-xs md:text-lg py-1 md:py-2 ">{story.abstract}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative  h-fit md:h-full  border-solid border-gray-500 border-2 overflow-x-hidden ">
          <div
            className="flex flex-row transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex1 * 100}%)` }}
          >
            {topStories[2]?.map((story) => {
              return (
                <div
                  key={story.title}
                  className="flex flex-col p-1 md:p-4 min-w-full duration-700 ease-in-out"
                >
                  <img
                    className="aspect-video object-cover"
                    src={story.multimedia[1].url}
                  />
                  <div className="p-1 md:p-2 divide-dashed divide-gray-500 divide-y-2">
                    <h1 className="text-sm md:text-3xl font-bold w-4/5 py-1 md:py-4 ">
                      {story.title}
                    </h1>

                    <p className="text-xs md:text-lg py-1 md:py-2 ">{story.abstract}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative  h-fit md:h-full  border-solid border-gray-500 border-2 overflow-x-hidden ">
          <div
            className="flex flex-row-reverse transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${currentIndex2 * 100}%)` }}
          >
            {topStories[3]?.map((story) => {
              return (
                <div
                  key={story.title}
                  className="flex flex-col p-1 md:p-4 min-w-full duration-700 ease-in-out"
                >
                  <img
                    className="aspect-video object-cover"
                    src={story.multimedia[1].url}
                  />
                  <div className="p-1 md:p-2 divide-dashed divide-gray-500 divide-y-2">
                    <h1 className="text-sm md:text-3xl font-bold w-4/5 py-1 md:py-4 ">
                      {story.title}
                    </h1>

                    <p className="text-xs md:text-lg py-1 md:py-2 ">{story.abstract}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      
      {/* 3rd News Line */}
      
        <div className=" p-1 md:p-4 h-full border-solid border-gray-500 border-2">
          {topStories[3]?.map((story, index) => {
            if (index === currentIndex1) {
              return (
                <div key={index} className="p-1 md:p-4 bg-gray-300 h-full w-full">
                  <h1 className="text-xl md:text-6xl text-gray-800 font-bold w-4/5 py-4 ">
                    {story.title}
                  </h1>
                </div>
              );
            }
            return null;
          })}
        </div>

        <div className="relative h-fit md:h-full  border-solid border-gray-500 border-2 overflow-x-hidden ">
          <div
            className="flex flex-row-reverse transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${currentIndex2 * 100}%)` }}
          >
            {topStories[4]?.map((story) => {
              return (
                <div
                  key={story.title}
                  className="flex flex-col p-1 md:p-4 min-w-full duration-700 ease-in-out"
                >
                  <img
                    className="aspect-video object-cover"
                    src={story.multimedia[1].url}
                  />
                  <div className="p-1 md:p-2 divide-dashed divide-gray-500 divide-y-2">
                    <h1 className="text-sm md:text-3xl font-bold w-4/5 py-1 md:py-4 ">
                      {story.title}
                    </h1>

                    <p className="text-xs md:text-lg py-1 md:py-2 ">{story.abstract}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative  h-fit md:h-full  border-solid border-gray-500 border-2 overflow-x-hidden ">
          <div
            className="flex flex-row transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex1 * 100}%)` }}
          >
            {topStories[5]?.map((story) => {
              return (
                <div
                  key={story.title}
                  className="flex flex-col p-1 md:p-4 min-w-full duration-700 ease-in-out"
                >
                  <img
                    className="aspect-video object-cover"
                    src={story.multimedia[1].url}
                  />
                  <div className="p-1 md:p-2 divide-dashed divide-gray-500 divide-y-2">
                    <h1 className="text-sm md:text-3xl font-bold w-4/5 py-1 md:py-4 ">
                      {story.title}
                    </h1>

                    <p className="text-xs md:text-lg py-1 md:py-2 ">{story.abstract}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    {/* Mobile */}
    <div
      className=" w-screen relative h-fit md:h-fit md:hidden flex flex-col  items-center p-0 responsive-homenews"
      style={{
        // 2400
        opacity: scrollY < 1 ? 0 : 1,
        transition: "opacity 0.2s ease-in",
      }}
    >
      <header
        className="text-xl md:text-7xl font-bold text-black py-0 md:py-10"
        style={{
          fontFamily: "Uncial Antiqua",
          fontWeight: 700,
        }}
      >
        TOP STORIES
      </header>

      {/* 1st News Line */}
      <div className="relative w-full h-full overflow-x-hidden py-0 md:py-4 ">
        <div
          className="flex flex-row h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex1 * 100}%)` }}
        >
          {topStories[0]?.map((story) => {
            return (
              <div
                key={story.title}
                className="flex flex-col-reverse md:flex-row min-w-full h-96 md:h-fit duration-700 ease-in-out p-0.5"
              >
                <div className="w-full md:w-2/5 h-auto p-1 md:p-8 text-center outline outline-gray-500 outline-2">
                  <h1 className="text-sm md:text-5xl font-bold py-1 md:py-8">{story.title}</h1>
                  <p className="text-xs md:text-xl pt-1 md:pt-8">{story.abstract}</p>
                  <Link to="/detailedNews" state={{ ...story, source: "NYT" }}>
                    <button className="pb-1 md:pb-8 px-0 md:px-2 w-full text-end">
                      <i className="bi bi-arrow-up-right-circle text-lg md:text-2xl hover:text-gray-400 "></i>
                    </button>
                  </Link>
                  <p className="text-xs md:text-lg font-bold text-gray-800 text-end flex justify-end ">
                    {story.byline}
                  </p>
                </div>
                {story.multimedia && story.multimedia[0]?.url && (
                  <img
                    className="aspect-5/3 h-fit w-full md:w-2/3 object-cover"
                    src={story.multimedia[0].url}
                    alt={story.title}
                  />
                )}
              </div>
            );
          })}
        </div>
        <button
          onClick={handlePrev}
          type="button"
          className="absolute top-[30%] md:top-[50%] left-[-0.5%] z-30 px-4 cursor-pointer outline-none"
        >
          <i className="bi bi-arrow-left-circle-fill text-2xl md:text-4xl bg-gradient-to-br from-lime-300 to-sky-400 bg-clip-text text-transparent  hover:text-gray-700 "></i>
        </button>
        <button
          onClick={handleNext}
          type="button"
          className="absolute  top-[30%] md:top-[50%] right-[-0.5%] z-30 px-4 cursor-pointer outline-none"
        >
          <i className="bi bi-arrow-right-circle-fill text-2xl md:text-4xl bg-gradient-to-br from-lime-300 to-sky-400 bg-clip-text text-transparent  hover:text-gray-700"></i>
        </button>
      </div>

      {/* 2nd News Line */}
      <div className="p-2 md:p-12 grid grid-flow-row grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 w-screen h-full ">
        
        <div className="relative  h-fit md:h-full  border-solid border-gray-500 border-2 overflow-x-hidden ">
          <div
            className="flex flex-row-reverse transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${currentIndex2 * 100}%)` }}
          >
            {topStories[1]?.map((story) => {
              return (
                <div
                  key={story.title}
                  className="flex flex-col p-1 md:p-4 min-w-full duration-700 ease-in-out"
                >
                  <img
                    className="aspect-video object-cover"
                    src={story.multimedia[1].url}
                  />
                  <div className="p-1 md:p-2 divide-dashed divide-gray-500 divide-y-2">
                    <h1 className="text-sm md:text-3xl font-bold w-4/5 py-1 md:py-4 ">
                      {story.title}
                    </h1>

                    <p className="text-xs md:text-lg py-1 md:py-2 ">{story.abstract}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative  h-fit md:h-full  border-solid border-gray-500 border-2 overflow-x-hidden ">
          <div
            className="flex flex-row transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex1 * 100}%)` }}
          >
            {topStories[2]?.map((story) => {
              return (
                <div
                  key={story.title}
                  className="flex flex-col p-1 md:p-4 min-w-full duration-700 ease-in-out"
                >
                  <img
                    className="aspect-video object-cover"
                    src={story.multimedia[1].url}
                  />
                  <div className="p-1 md:p-2 divide-dashed divide-gray-500 divide-y-2">
                    <h1 className="text-sm md:text-3xl font-bold w-4/5 py-1 md:py-4 ">
                      {story.title}
                    </h1>

                    <p className="text-xs md:text-lg py-1 md:py-2 ">{story.abstract}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative  h-fit md:h-full  border-solid border-gray-500 border-2 overflow-x-hidden ">
          <div
            className="flex flex-row-reverse transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${currentIndex2 * 100}%)` }}
          >
            {topStories[3]?.map((story) => {
              return (
                <div
                  key={story.title}
                  className="flex flex-col p-1 md:p-4 min-w-full duration-700 ease-in-out"
                >
                  <img
                    className="aspect-video object-cover"
                    src={story.multimedia[1].url}
                  />
                  <div className="p-1 md:p-2 divide-dashed divide-gray-500 divide-y-2">
                    <h1 className="text-sm md:text-3xl font-bold w-4/5 py-1 md:py-4 ">
                      {story.title}
                    </h1>

                    <p className="text-xs md:text-lg py-1 md:py-2 ">{story.abstract}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      
      {/* 3rd News Line */}
      
        <div className=" p-1 md:p-4 h-full border-solid border-gray-500 border-2">
          {topStories[3]?.map((story, index) => {
            if (index === currentIndex1) {
              return (
                <div key={index} className="p-1 md:p-4 bg-gray-300 h-full w-full">
                  <h1 className="text-xl md:text-6xl text-gray-800 font-bold w-4/5 py-4 ">
                    {story.title}
                  </h1>
                </div>
              );
            }
            return null;
          })}
        </div>

        <div className="relative h-fit md:h-full  border-solid border-gray-500 border-2 overflow-x-hidden ">
          <div
            className="flex flex-row-reverse transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${currentIndex2 * 100}%)` }}
          >
            {topStories[4]?.map((story) => {
              return (
                <div
                  key={story.title}
                  className="flex flex-col p-1 md:p-4 min-w-full duration-700 ease-in-out"
                >
                  <img
                    className="aspect-video object-cover"
                    src={story.multimedia[1].url}
                  />
                  <div className="p-1 md:p-2 divide-dashed divide-gray-500 divide-y-2">
                    <h1 className="text-sm md:text-3xl font-bold w-4/5 py-1 md:py-4 ">
                      {story.title}
                    </h1>

                    <p className="text-xs md:text-lg py-1 md:py-2 ">{story.abstract}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative  h-fit md:h-full  border-solid border-gray-500 border-2 overflow-x-hidden ">
          <div
            className="flex flex-row transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex1 * 100}%)` }}
          >
            {topStories[5]?.map((story) => {
              return (
                <div
                  key={story.title}
                  className="flex flex-col p-1 md:p-4 min-w-full duration-700 ease-in-out"
                >
                  <img
                    className="aspect-video object-cover"
                    src={story.multimedia[1].url}
                  />
                  <div className="p-1 md:p-2 divide-dashed divide-gray-500 divide-y-2">
                    <h1 className="text-sm md:text-3xl font-bold w-4/5 py-1 md:py-4 ">
                      {story.title}
                    </h1>

                    <p className="text-xs md:text-lg py-1 md:py-2 ">{story.abstract}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomeNews;
