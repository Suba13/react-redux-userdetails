import React, {Component} from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {store} from '../index';
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */
class Order_detail extends Component {
    componentDidMount(){
        const a = fetch('http://localhost:3005/Orders/'+this.props.match.params.id).then(
             data =>
                 ({
                     type: "ORDERED_ITEM",
                     payload: data.json()
                 }),
             error => console.log(error));

         store.dispatch(
             a
         );
     };
    render() {
        console.log("order-detail");
        return (
            <div>
                {console.log(this.props.user)}
                  {/* <h2>USERNAME:{this.props.user.Name}</h2>
                <h3>QUANTITY: {this.props.user.Totalquantity}</h3>
                <h3>TOTALAMOUNT: {this.props.user.TotalAmount}</h3> 
                <ul>
                    {this.props.user.map((user) => {
                        return (
                            <div>
                         <h2>ITEMNAME:{Orderitems.item}</h2>
                <h3>QUANTITY: {Orderitems.quantity}</h3>
                            </div>
                        );
                    })}
                </ul> */}
                <Link to="/" >Back</Link>
                </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(Order_detail);
