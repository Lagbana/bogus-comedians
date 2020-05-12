// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
// import faker from 'faker';
// import CommentDetail from './CommentDetail'
// import ApprovalCard from './ApprovalCard'
// import BackgroundCard from './components/BackgroundCard'
import App from './components/App'


class BogusComedians extends React.Component {
    // state = {}

    // componentDidMount() {

    // }

    render () {

         return <App />

    }
}

// Take the react component and show on the screen
ReactDOM.render(
    <BogusComedians />,
    document.querySelector('#root')
);