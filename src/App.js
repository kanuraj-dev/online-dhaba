import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Search from "./pages/Search";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/sign-in" exact component={SignIn} />
          <Route path="/c/:categoryName" exact component={Category} />
          <Route path="/p/:pid" exact component={Product} />
          <Route path="/s/:searchValue" exact component={Search} />
          <Route path="/checkout" exact component={Checkout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
