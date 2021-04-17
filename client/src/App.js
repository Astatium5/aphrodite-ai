import Landing from "./pages/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route to="/" exact component={Landing} />
      </Switch>
    </Router>
  );
};

export default App;
