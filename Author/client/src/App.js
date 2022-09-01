import logo from './logo.svg';
import './App.css';
import { Paper, Card, Button, TextField } from "@material-ui/core";
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import ListAuthors from './components/ListAuthors';
import UpdateAuthor from './components/UpdateAuthor';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ListAuthors />
          </Route>
          <Route  path="/new">
            <Main />
          </Route>
          <Route  path="/update/:author_id">
            <UpdateAuthor />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
