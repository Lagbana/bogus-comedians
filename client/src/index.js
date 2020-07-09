// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
// import faker from 'faker';
// import CommentDetail from './CommentDetail'
// import ApprovalCard from './ApprovalCard'
// import BackgroundCard from './components/BackgroundCard'
import App from "./components/App";
import Login from "./pages/login";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withUser, update } from './services/withUser'

class BogusComedians extends React.Component {
  componentDidMount() {
    axios.get(`http://localhost:8080/v1/api/user`).then(res => update(res.data))
  }

  render() {
    const { user } = this.props
    console.log(user)
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <App user={user} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const EntryPoint = withUser(BogusComedians)

// Take the react component and show on the screen
ReactDOM.render(<EntryPoint />, document.querySelector("#root"));
