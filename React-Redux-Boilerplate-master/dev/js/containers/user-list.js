import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser, deleteUser, showDetails } from '../actions/index'
class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uservalue: {},
        };
    }
    selected(user) {
        console.log(user);
        this.setState({
            uservalue: user
        });
       
        // console.log(this.state.uservalue);
    }
    componentWillMount() {
        console.log("inside component will mount");
    }
    componentDidMount() {
        console.log("inside component did mount");
    }
    editUser(newUser) {
        this.props.selectUser(newUser);
        this.props.showDetails(2);
    }
    addUser() {
        this.props.showDetails(1);
    }
    deleteUser(deleteUser) {
        this.props.deleteUser(deleteUser);
    }
    viewUser(editUser) {
        this.props.selectUser(editUser);
        this.props.showDetails(3);
    }
    renderList() {
        return this.props.users.map((user) => {
            return (
                <div key={user.id}>
                    <input type="radio"
                        onClick={this.selected.bind(this, user)} />
                    <li

                    //onClick={() => this.props.selectUser(user)}
                    >
                        {user.first} {user.last} {user.age} {user.description}
                    </li>
                </div>
            );
        });
    }
    render() {
        console.log("inside list render");
        return (
            <div>
                <ul>
                    {this.renderList()}
                </ul>
                <button onClick={this.addUser.bind(this)}> Add  </button>
                <button onClick={this.editUser.bind(this, this.state.uservalue)}> Edit </button>
                <button onClick={this.viewUser.bind(this, this.state.uservalue)}> View </button>
                <button onClick={this.deleteUser.bind(this, this.state.uservalue)}> Delete </button>
            </div>

        );
    }
}
// Get apps state and pass it as props to UserList
// > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}
// Get actions and pass them as props to to UserList
// > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectUser: selectUser, deleteUser: deleteUser, showDetails: showDetails }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
// > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);