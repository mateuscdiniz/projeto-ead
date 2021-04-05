import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./componentes/Home";
import NaoEncontrada from "./componentes/NaoEncontrada";
import Conteudo from "./componentes/Conteudo";
import Aula from "./componentes/Aula";
import Navbar from "./componentes/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/aulas/" exact={true}>
          <Aula />
        </Route>
        <Route path="/conteudos/:id" exact={true}>
          <Conteudo />
        </Route>
        <Route path="*">
          <NaoEncontrada />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
