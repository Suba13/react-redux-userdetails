import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modify } from '../actions/index';
import { bindActionCreators } from 'redux';
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */
class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:this.props.user
        };
    }

    handleAgeChange(event) {
        this.state.user.age = event.target.value;
        this.setState({ user: this.state.user });
    }
    handleDesChange(eventdes) {
        this.state.user.description = eventdes.target.value;
        this.setState({ user: this.state.user });
    }
    handleLastNameChange(eventlast) {
        this.state.user.last = eventlast.target.value;
        this.setState({ user: this.state.user });
    }
    componentWillReceiveProps(nextProps) {
        console.log("inside componentwillreceiveprops");
            this.setState({
                user: {
                    first: nextProps.user.first,
                    last: nextProps.user.last,
                    age: nextProps.user.age,
                    thumbnail: nextProps.user.thumbnail,
                    description: nextProps.user.description,
                    id: nextProps.user.id
                }
            });
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("should component update");
        return true;

    }
    componentWillUpdate(nextProps, nextState) {
        console.log(" componentwillupdate");
    }
    componentDidUpdate() {
        console.log(" componentdidupdate");
    }
  
    render() {
        console.log("inside render -edit")
        // if (!this.props.user) {
        //     return (<div> <h2>User Details</h2> Select a user...</div>);
        // }
    
        return (
      
            <div> 
                    <img src={this.props.user.thumbnail} />
                    <h2>{this.props.user.first} <input type="text" value={this.state.user.last} onChange={this.handleLastNameChange.bind(this)} ></input></h2>
                    <h3>Age: <input type="text" value={this.state.user.age} onChange={this.handleAgeChange.bind(this)} ></input></h3>
                    <h3>Description: <input type="text"  value={this.state.user.description} onChange={this.handleDesChange.bind(this)}></input></h3>
                    <button onClick={this.props.modify.bind(this, this.state.user)}> Save</button>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser,
        showContent: state.showContent
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ modify: modify }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(UserDetail);
