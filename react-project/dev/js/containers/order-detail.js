import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { store } from '../index';
import '../components/app.css';
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */
class Order_detail extends Component {
    componentDidMount() {
        const a = fetch('http://localhost:3005/Orders/' + this.props.match.params.id).then(
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
    TableRow(row) {
        console.log(row);
        return (
            
               
            <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.item}</td>
                <td><img className="img_size" src={row.image}/></td>
                <td>{row.price}</td>
                 <td>{row.quantity}</td>
            </tr>
            
        )
    };

    Table(items) {
        return (<table>
            <th>S.no</th>
            <th>Food-Items</th>
            <th></th>
            <th>Price</th>
            <th>Quantity</th>
            {items.map(row => {
                return this.TableRow(row);
            })}
        </table>);
    };

    render() {
        if (!this.props.user) {
            return (<div>Select a order...</div>);
        }
        return (
            <div>
                 <div>
            <header>
                    <div className="title">Photon Cafe</div>
                        <div className="Admin_name">Admin Name:Sundaram</div>
                    </header>
                <div className="sub-title">List of Items</div>
                </div>
                <h2>USERNAME:{this.props.user.Name}</h2>
                <h2>QUANTITY: {this.props.user.Totalquantity}</h2>
                <h2>TOTALAMOUNT: {this.props.user.TotalAmount}</h2>
                {this.Table(this.props.user.Orderitems)}
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
