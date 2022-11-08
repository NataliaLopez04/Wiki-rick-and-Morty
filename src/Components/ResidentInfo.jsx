import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ResidentInfo = ({ url }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setCharacter(res.data));
  }, []);

  console.log(character);

  return (
    <div className="card">
      <div className="cardImage">
        <img className="image" src={character.image} alt="" />
      </div>

      <h1>
        <b>Name: </b>
        {character.name}
      </h1>
      <br />
      <ul>
        <li>Status: {character.status}</li>
        <li>Origin: {character.origin?.name}</li>
        <li>Episodes where appear: {character.episode?.length}</li>
      </ul>
      <div class="toggle">
        <i class="fa fa-chevron-down" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default ResidentInfo;
