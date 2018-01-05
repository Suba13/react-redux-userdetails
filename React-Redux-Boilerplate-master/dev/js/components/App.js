import React, { Component } from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import AddDetail from '../containers/add-detail';
import ViewDetail from '../containers/view-details';
import {connect} from 'react-redux';
class App extends Component {

    render() {
        return(
        <div>
            <h2>User List</h2>
            <UserList />
            <hr />
            <h2>User Details</h2>
            {this.props.showContent.showContent == 1 ? <AddDetail /> : null}
            {this.props.showContent.showContent == 2 ? <UserDetails /> : null}
            {this.props.showContent.showContent == 3 ? <ViewDetail /> : null}


        </div>);
    }
}
function mapStateToProps(state) {
    return {
        showContent: state.showContent
    };
}

export default connect(mapStateToProps)(App);

