import React from "react";

import "./App.css";

import "./components/Primeiro";
import Primeiro from "./components/Primeiro";
import ComParametro from "./components/ComParametro";
import Filhos from "./components/Filhos";
import Card from "./components/layout/Card";

export default (props) => (
  <div className="App">
    <Card titulo="#01Exercicio X">Conteudo</Card>

    <Card titulo="#02 Componente com parametroi">
      <ComParametro
        titulo="Esse e o titulo"
        subtitulo="Esse e meu subtituto"
      ></ComParametro>
    </Card>

    <Card titulo="#03 Componentes com filhos">
      <Filhos>
        <ul>
          <li>Carluzo</li>
          <li>Ana</li>
          <li>John</li>
          <li>Lili</li>
        </ul>
      </Filhos>
    </Card>
  </div>
);
