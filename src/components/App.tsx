import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../assets/css/normalize.css";
import * as Page from "./pages";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Route path="/" exact>
            <Page.Home />
          </Route>

          <Route path="/room/:id" exact>
            <Page.RoomMovie />
          </Route>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
