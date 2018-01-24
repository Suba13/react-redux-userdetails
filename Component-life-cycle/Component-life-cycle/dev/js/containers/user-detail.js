import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { modify } from '../actions/index';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends Component {
    constructor(props) {
        console.log("constructor-userdetail")
        super(props);
        this.state = {
            user: {}
        };
    }
    componentWillMount(){
        console.log("componentwillmount-userdetail")
    }
    componentDidMount(){
        console.log("componentdidmount-userdetail")
    }

    ageChange(event) {
        this.state.user.age = event.target.value;
        this.setState({ user: this.state.user });
    }
    descChange(eve){
        this.state.user.description =eve.target.value;
        this.setState({user:this.state.user});
    }
    componentWillReceiveProps(nextProps) {
        console.log("componentwillreceiveprops-userdetail")
        this.setState({
            user: {
                first: nextProps.user.first,
                last: nextProps.user.last,
                age: nextProps.user.age,
                description: nextProps.user.description,
                id: nextProps.user.id
            }
        })
    }
   shouldComponentUpdate(){
    console.log("shouldcomponentupdate-userdetail")
    return true;
   }
   componentWillUpdate(){
    console.log("componentwillupdate-userdetail")
   }
   componentDidUpdate(){
    console.log("componentdidupdate-userdetail")
   }
    render() {
        console.log("render-userdetail")
        if (!this.props.user) {
            return (<div>Select a user...</div>);
        }
        return (
            <div>
                <img src={this.props.user.thumbnail} />
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Age: <input type="text" placeholder={this.props.user.age} value ={this.state.user.age}  onChange={this.ageChange.bind(this)}  ></input></h3>
                <button onClick={this.props.modify.bind(this,this.state.user)}> save</button>
                <h3>Description: <input type="text" placeholder={this.props.user.description} value={this.state.user.description} onChange={this.descChange.bind(this)}></input></h3>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ modify: modify }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(UserDetail);