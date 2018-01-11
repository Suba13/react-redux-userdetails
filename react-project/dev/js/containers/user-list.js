import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class UserList extends Component {

    render() {
        console.log("user-list");
        return (
            <div>
                <ul>
                    {this.props.users.map((a) => {
                        return (
                          
                            <div key={a.id}>
                                {a.id},{a.Name},{a.TotalAmount},{a.Totalquantity}
                                <Link to={`/admin-view/${a.id}`}> <button > view  </button></Link>
                            </div>
                        );
                    })}
                </ul>
            </div>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser


// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps)(UserList);