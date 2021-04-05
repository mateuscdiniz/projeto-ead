import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BackendService from "../servicos/BackendService";

function Aula() {
  const [aulas, setAulas] = useState([]);

  useEffect(() => {
    (async () => {
      setAulas(await BackendService.getAulas());
    })();
  }, []);

  return (
    <div className="aula" key={aulas.id}>
      <h1> TODAS AS AULAS </h1>
      {aulas.map((aula, index) => (
        <div key={index}>
          {console.log(aulas)}
          <Link to={`/conteudos/${aula.name}`}>{aula.nome}</Link>
        </div>
      ))}
    </div>
  );
}

export default Aula;
