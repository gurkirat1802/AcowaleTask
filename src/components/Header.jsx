import React, { useState } from 'react'

function Header(props) {

  const [filterFlag, setFilterFlag] = useState(false);
  const [display, setDisplay] = useState('hidden')
  const [country, setCountry] = useState('in')
  const [language, setLanguage] = useState('en')
  const [category, setCategory] = useState('general')
  const [sortBy, setSortBy] = useState('relevance')
  const [query, setQuery] = useState('')

  const countryCodes = {
    Australia: 'au',
    Brazil: 'br',
    Canada: 'ca',
    China: 'cn',
    Egypt: 'eg',
    France: 'fr',
    Germany: 'de',
    Greece: 'gr',
    'Hong Kong': 'hk',
    India: 'in',
    Ireland: 'ie',
    Israel: 'il',
    Italy: 'it',
    Japan: 'jp',
    Netherlands: 'nl',
    Norway: 'no',
    Pakistan: 'pk',
    Peru: 'pe',
    Philippines: 'ph',
    Portugal: 'pt',
    Romania: 'ro',
    'Russian Federation': 'ru',
    Singapore: 'sg',
    Spain: 'es',
    Sweden: 'se',
    Switzerland: 'ch',
    Taiwan: 'tw',
    Ukraine: 'ua',
    'United Kingdom': 'gb',
    'United States': 'us'
  };

  const languageCodes = {
    Arabic: 'ar',
    Chinese: 'zh',
    Dutch: 'nl',
    English: 'en',
    French: 'fr',
    German: 'de',
    Greek: 'el',
    Hebrew: 'he',
    Hindi: 'hi',
    Italian: 'it',
    Japanese: 'ja',
    Malayalam: 'ml',
    Marathi: 'mr',
    Norwegian: 'no',
    Portuguese: 'pt',
    Romanian: 'ro',
    Russian: 'ru',
    Spanish: 'es',
    Swedish: 'sv',
    Tamil: 'ta',
    Telugu: 'te',
    Ukrainian: 'uk'
  };

  const categories = {
    General: "general",
    World: "world",
    Nation: "nation",
    Business: "business",
    Technology: "technology",
    Entertainment: "entertainment",
    Sports: "sports",
    Science: "science",
    Health: "health"
  };

  function handleFilterFlag() {

    setFilterFlag(!filterFlag)
    if (display === '') {
      setDisplay('hidden')
    } else {
      setDisplay('')
    }
  }

  function handleSearch() {


    let url = `https://gnews.io/api/v4/top-headlines?q=${query}&lang=${language}&country=${country}&sortby=${sortBy}&category=${category}&max=10&apikey=YOUR_API_KEY`;


    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let articles = data.articles;

        if (articles.length === 0) {
          alert("No article available according to your search! change your filters or query.")
          return;
        }
        props.setArticles(articles);
      });
  }

  function handleFilter() {

    handleFilterFlag();

    let url = `https://gnews.io/api/v4/top-headlines?q=${query}&lang=${language}&country=${country}&sortby=${sortBy}&category=${category}&max=10&apikey=YOUR_API_KEY`;


    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let articles = data.articles;

        if (articles.length === 0) {
          alert("No article available according to your search! change your filters or query.")
          return;
        }
        props.setArticles(articles);
      });

  }

  function handleQuery(q) {

    q.trim();
    if (q === '') {
      setQuery("None");
      return;
    }

    let newQ = `"${q}"`;
    setQuery(newQ);
  }

  return (
    <div>
      <div className='flex flex-wrap gap-2 bg-gradient-to-r from-slate-900 to-slate-700 text-white items-center font-semibold justify-between px-5 py-5 md:px-14'>
        <div className="text-2xl font-bold font-sans">Acowale News</div>
        <div className='flex flex-wrap gap-2'>
          <input onChange={(e) => handleQuery(e.target.value)} className='px-2 h-10 text-black rounded-lg' type="text" placeholder='Search News Here' />
          <button onClick={handleSearch} className='border border-white w-20 h-8 mt-1 hover:bg-slate-200 hover:text-black active:bg-slate-200 rounded-lg'>Search</button>
        </div>
        <div>
          {filterFlag ?
            <button onClick={handleFilterFlag} className='border border-white rounded w-10 h-10 hover:bg-white hover:text-black active:bg-slate-200'>X</button>
            : <button onClick={handleFilterFlag} className='border border-white rounded-lg w-20 h-10 hover:bg-white hover:text-black active:bg-slate-200'>Filter</button>}
        </div>
      </div>
      <div className={`flex flex-wrap gap-4 bg-gradient-to-r from-slate-900 to-slate-700 items-center justify-end px-6 py-6 md:px-16 ${display} shadow-lg`}>
        <select className='rounded-lg border border-gray-300 text-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400' onChange={(e) => setCountry(e.target.value)} value={country}>
          {Object.entries(countryCodes).map(([country, code]) => (
            <option key={code} value={code}>
              {country}
            </option>
          ))}
        </select>
        <select className='rounded-lg border border-gray-300 text-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400' onChange={(e) => setLanguage(e.target.value)} value={language}>
          {Object.entries(languageCodes).map(([language, code]) => (
            <option key={code} value={code}>
              {language}
            </option>
          ))}
        </select>
        <select className='rounded-lg border border-gray-300 text-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400' onChange={(e) => setCategory(e.target.value)} value={category}>
          {Object.entries(categories).map(([categoryK, categoryV]) => (
            <option key={categoryV} value={categoryV}>
              {categoryK}
            </option>
          ))}
        </select>
        <select className='rounded-lg border border-gray-300 text-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400' onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="relevance">Relevance</option>
          <option value="publishedAt">Published At</option>
        </select>
        <button onClick={handleFilter} className='border border-white rounded-lg w-24 h-10 hover:bg-white hover:text-black focus:ring-2 focus:ring-cyan-400 active:bg-slate-200 text-white font-semibold transition-all duration-300'>
          Filter
        </button>
      </div>
    </div>

  )
}

export default Header;
