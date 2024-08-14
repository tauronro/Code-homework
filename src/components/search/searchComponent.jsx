import React, { useEffect, useState } from "react";
import CharacterCardComponent from "../characterCard/CharacterCardComponent";
import { useLocation, useNavigate } from "react-router-dom";

const SearchComponent = () => {
  const [charactersList, setCharactersList] = useState([]);
  const [query, setQuery] = useState('');
  const navigate = useNavigate()
  const urlData = useLocation()
  const queryParams = new URLSearchParams(urlData.search)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(query){
      navigate(`/?character=${query}`);
    }else{
      navigate('/')
    }
  }

  useEffect(() => {
    
    const fetchCharacters = async () => {
      if (queryParams.get('character')) {
        const url = `https://rickandmortyapi.com/api/character/?name=${queryParams.get('character')}`;
        try {
          const res = await fetch(url);
          const data = await res.json();
          setCharactersList(data.results);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      } else {
        const url = `https://rickandmortyapi.com/api/character/`;
        try {
          const res = await fetch(url);
          const data = await res.json();
          setCharactersList(data.results);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      }
    }; 
    fetchCharacters();
  }, [queryParams]);
  

  return (
    <div>
      <div className="search">
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <label
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  onChange={(e => setQuery(e.target.value))}
                />
              <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
          </div>

        </form>
      </div>
      <div className="card">
        {charactersList.length > 0 && charactersList.map((characters) => {
          return (
            <CharacterCardComponent
              id={characters.id}
              page="/characters/"
              nombre={characters.name}
              imagen={characters.image}
              genero={characters.genre}
              estatus={characters.status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchComponent;
