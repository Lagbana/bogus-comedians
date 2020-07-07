// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
// import faker from 'faker';
// import CommentDetail from './CommentDetail'
// import ApprovalCard from './ApprovalCard'
// import BackgroundCard from './components/BackgroundCard'
import App from "./components/App";
import Login from "./pages/login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

class BogusComedians extends React.Component {
  constructor(props) {
      super(props)
      this.state = {}
  }

  render() {
    const isAuthenticated = localStorage.getItem("user");
    if (!isAuthenticated) {
      fetch(`http://localhost:8080/v1/api/user`)
        .then((response) => response.json())
        .then((response) => { 
            localStorage.setItem('user', JSON.stringify(response))
            console.log(this.props)
        });
    }

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {isAuthenticated ? (
              <App />
            ) : (
              <Redirect to={{ pathname: "/login" }} />
            )}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    );
  }
}

// Take the react component and show on the screen
ReactDOM.render(<BogusComedians />, document.querySelector("#root"));
