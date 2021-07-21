import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { SignUp } from "../pages/SignUp";

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/signup">
      <SignUp />
    </Route>
  </Switch>
);
