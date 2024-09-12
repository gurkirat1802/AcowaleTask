import React, {useState,useEffect} from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {

  const [articles,setArticles] = useState(null)

  useEffect(()=>{

    let url = `https://gnews.io/api/v4/top-headlines?q=None&lang=en&country=in&sortby=publishedAt&category=general&max=10&apikey=81d4161d1d42ab816aa108c257777a06`;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let articles = data.articles;
        console.log(data);
        if(articles.length===0){
          alert("No article available according to your search! change your filters or query.")
          return;
        }
        setArticles(articles);
      });

  },[]);

  return (
  <div>
    <Header setArticles={setArticles}></Header>
    <Body articles={articles}></Body>
    <Footer/>
  </div>

  );
}

export default App;
