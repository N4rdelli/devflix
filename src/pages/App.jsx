import "./App.css"

import logo from "../assets/devflix.png"
import searchIcon from "../assets/search.svg"
import { useEffect } from "react";
import { useState } from "react";

const App = () =>{
    const [searchTerm, setSearchTerm] = useState("");
    const apiKey = "e4d577fa";
    const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

    useEffect(() =>{
        searchMovies("Batman")
    }, []);

    const searchMovies = async (title) =>{
        const response = await fetch(`${apiUrl}&s=${title}`);
        const data = await response.json();

        console.log(data);
    }

    const handleKeyPress = (e) =>{
        e.kay === "Enter" && searchMovies(searchTerm)
    }

    return(
        <div id="app">
            <div className="logo">
                <img src={logo} alt="Logo DevFlix escrita em vermelho" />
            </div>
            <div className="search">
                <input placeholder="Pesquise por filmes" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <img src={searchIcon} alt="ícone de pesquisa, lupa" onClick={() => searchMovies(searchTerm)}/>
            </div>
        </div>
    )
}

export default App;