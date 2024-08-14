import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./cardDetailComponent.css";

const CardDetailComponent = () => {
  const [character, setCharacter] = useState("");
  let { id } = useParams();

  useEffect(() => {
    const fetchCharacters = async () => {
      const url = `https://rickandmortyapi.com/api/character/${id}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchCharacters();
  }, [id]);
  return (
    <div>
      <div>
        <button className="pagination-button ">
          <Link to="/characters">Regresa a home</Link>
        </button>
      </div>
      <div className="card">
        <div className="cardArchitecture">
          <div className="image">
            <img src={character.image} alt={character.name} />
          </div>
          <div className="circle">{character.status}</div>
          <div className="content">
            <div className="title">
              <h1>{character.name}</h1>
            </div>
            <div className="detail">
              <p>{character.gender}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailComponent;
