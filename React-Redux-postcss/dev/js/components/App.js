import React, { Component } from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import AddDetail from '../containers/add-detail';
import ViewDetail from '../containers/view-details';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
class App extends Component {

    render() {
        console.log("inside app render");
        return (
            <Router>
                <div>

                    <h2>User List</h2>
                    <Route exact path="/" component={UserList} />
                    <Route path="/add" component={AddDetail} />
                    <Route path="/view" component={ViewDetail} />
                    <Route path="/edit" component={UserDetails} />


                </div>
            </Router>
        );
    }
}
function mapStateToProps(state) {
    return {
        showContent: state.showContent
    };
}

export default connect(mapStateToProps)(App);

