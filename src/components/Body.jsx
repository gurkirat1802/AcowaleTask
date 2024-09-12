import React from 'react'
import ImageWithPlaceholder from './ImageWithPlaceholder';

function Body(props) {
  function getDiff(time) {
    // Get the current time in UTC
    const now = new Date();
    // Convert the given ISO 8601 string to a Date object
    const past = new Date(time);
    // Calculate the difference in milliseconds
    const diffMs = now - past;
    // Convert milliseconds to years, months, days, hours, minutes, and seconds
    const years = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diffMs - years * 1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24 * 30)) % 12;
    const days = Math.floor((diffMs - years * 1000 * 60 * 60 * 24 * 365 - months * 1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24)) % 30;
    const hours = Math.floor((diffMs - years * 1000 * 60 * 60 * 24 * 365 - months * 1000 * 60 * 60 * 24 * 30 - days * 1000 * 60 * 60 * 24) / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor((diffMs - years * 1000 * 60 * 60 * 24 * 365 - months * 1000 * 60 * 60 * 24 * 30 - days * 1000 * 60 * 60 * 24 - hours * 1000 * 60 * 60) / (1000 * 60)) % 60;
    const seconds = Math.floor((diffMs - years * 1000 * 60 * 60 * 24 * 365 - months * 1000 * 60 * 60 * 24 * 30 - days * 1000 * 60 * 60 * 24 - hours * 1000 * 60 * 60 - minutes * 1000 * 60) / 1000) % 60;
    if (years) return `${years} years ago`;
    if (months) return `${months} months ago`;
    if (days) return `${days} days ago`;
    if (hours) return `${hours} hours ago`;
    if (minutes) return `${minutes} minutes ago`;
    if (seconds) return `${seconds} seconds ago`;
  }

  return (
    <div className="flex flex-wrap justify-center mt-8 gap-8 p-6 bg-gradient-to-r from-gray-600 to-gray-800">
      {props.articles && props.articles.length !== 0 &&
        props.articles.map((article, index) => (
          <div key={index} className="relative flex flex-col border border-transparent shadow-md rounded-xl p-6 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 w-96 md:w-[40vw] transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <ImageWithPlaceholder
              src={article["image"]}
              alt={article["title"]}
              placeholder="https://www.drsubhashr.com/wp-content/uploads/2018/12/news-placeholder.png"
              className="rounded-lg mb-4 shadow-inner"
            />
            <div className='flex justify-between mb-3 text-xs text-gray-500'>
              <a className='text-blue-500 font-semibold hover:underline transition-colors duration-200' href={article["source"]["url"]} target="_blank" rel="noopener noreferrer">
                {article["source"]["name"]}
              </a>
              <div className="italic">{getDiff(article["publishedAt"])}</div>
            </div>
            <div className="font-semibold text-lg text-gray-700 mb-2">
              {article["title"].length >= 200 ? article["title"].slice(0, 100) + "..." : article["title"]}
            </div>
            <div className="text-gray-600 mb-4">
              {article["description"].length >= 250 ? article["description"].slice(0, 250) + "..." : article["description"]}
            </div>
            <a className='mt-auto' href={article["url"]} target='_blank' rel="noreferrer">
              <button className="border border-transparent text-white rounded-full w-full h-10 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 active:shadow-lg font-medium transition-transform transform hover:scale-105 duration-300">
                Read More
              </button>
            </a>
          </div>
        ))
      }
    </div>
  )
}

export default Body;