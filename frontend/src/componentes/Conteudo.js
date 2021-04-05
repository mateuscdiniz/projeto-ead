import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BackendService from "../servicos/BackendService";

function Conteudo() {
  const [assuntos, setAssuntos] = useState([]);

  useEffect(() => {
    (async () => {
      setAssuntos(await BackendService.getAulas());
    })();
  }, []);

  return (
    <div className="aula" key={assuntos.id}>
      <h1> Todos os conteudos </h1>
      {assuntos.map((assuntos, index) => (
        <div key={index}>
          {console.log(assuntos.conteudo)}

          <Link to={`/conteudos/${assuntos._id}`}>
            {assuntos.conteudo.map((option) => (
              <p>{option.blocoConteudo}</p>
            ))}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Conteudo;
