import Main from "components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/about">
          <Main description="This is the About Page" />
        </Route>
      </Switch>
    </Router>
  );
}
