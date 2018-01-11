import React from 'react';
import OrderList from '../containers/order-list';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Order_detail from '../containers/order-detail';



const App = () => (
    
        <Router>
            <div>
            <Route exact path="/" component={OrderList} />
            <Route path="/admin-view/:id" component={Order_detail} />
            </div>
        </Router>
    
);

export default App;