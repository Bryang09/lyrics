import React from "react";

import { Switch, Route } from "react-router-dom";

import Landing from "./Components/Landing/Landing";
import Artist from "./Components/Artist/Artist";
import Album from "./Components/Album/Album";
import Song from "./Components/Song/Song";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/artist/:id" component={Artist} />
      <Route exact path="/album/:id" component={Album} />
      <Route exact path="/song/:id" component={Song} />
    </Switch>
  );
};

export default Routes;
