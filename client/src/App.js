import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  let lc = null;
  if (localStorage.token !== undefined) lc = JSON.parse(localStorage.token);
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {lc === null ? Landing : <Redirect to="/dashboard" />}
        </Route>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/create" component={Create} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </Router>
  );
};

export default App;
