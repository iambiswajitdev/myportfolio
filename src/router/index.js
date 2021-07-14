import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { FrontLayout, AppRouter } from "./routerUtility";
import Home from "../components/home";
import Student from "../components/student";
import Settings from "../components/settings";

const Router = () => {
  return (
    <BrowserRouter>
        <Switch>
          <AppRouter path="/" layout={FrontLayout} exact component={Home} />
          <AppRouter
            path="/stdunts"
            layout={FrontLayout}
            exact
            component={Student}
          />
          <AppRouter
            layout={FrontLayout}
            path="/settings"
            exact
            component={Settings}
          />
        </Switch>
      </BrowserRouter>
  );
};

export default Router;
