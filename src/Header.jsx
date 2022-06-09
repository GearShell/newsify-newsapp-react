import React, {useEffect, useState} from "react";
import "./Header.css";
import axios from "axios";

function Header() {

    useEffect(() => {
        getNews();
    }, []);
    
    const[data, setData] = useState([]);

    const getNews = () => {
        axios({
            method: "GET",
            url: `https://newsapi.org/v2/top-headlines?country=in&apiKey=689e981c52a347a5ad9a3a30f92c4863`
        })
        .then((response) => {
            console.log(response);
            setData(response.data.articles);
        })
    }

  return (
    <div className="header">
        <div>
            <h1>Newsify</h1>
        </div>
        <div className="main_card">
            {
                data.map((value) => {
                    return (
                            <div className="card" style={{width: "18rem"}}>
                                <img src={value.urlToImage} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                <p className="card-text">{value.description}</p>
                            </div>
                            </div>
                    )
                })
            }
        </div>        
    </div> 
  );
};

export default Header;
