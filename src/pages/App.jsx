import "./App.css";

import logo from "../assets/devflix.png";
import searchIcon from "../assets/search.svg";
import MovieCard from "../components/movieCard/movieCard";

import { useEffect } from "react";
import { useState } from "react";

const App = () =>{
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    const apiKey = "e4d577fa";
    const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

    useEffect(() =>{
        searchMovies("Batman")
    }, []);

    const searchMovies = async (title) =>{
        const response = await fetch(`${apiUrl}&s=${title}`);
        const data = await response.json();

        console.log(data.Search); /*Retorna objetos*/
        setMovies(data.Search); /*Retorna parâmetros*/
    }

    const handleKeyPress = (e) =>{
        e.kay === "Enter" && searchMovies(searchTerm);
    }

    return(
        <div id="app">
            <div className="logo">
                <img src={logo} alt="Logo DevFlix escrita em vermelho" />
            </div>
            <div className="search">
                <input placeholder="Pesquise por filmes" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyPress} />
                <img src={searchIcon} alt="ícone de pesquisa, lupa" onClick={() => searchMovies(searchTerm)}/>
            </div>

            {movies?.length > 0 ? (
                <div className="container"> {movies.map((movie) => (<MovieCard key={movie.imdbID} movies={movie} />))} </div>
            ) : (
                <div className="empty"><h2>Nenhum filme encontrado 😢</h2></div>
            )}
        </div>
    )
}

export default App;