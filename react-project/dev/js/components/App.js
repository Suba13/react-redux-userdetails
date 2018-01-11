import React from 'react';
import UserList from '../containers/user-list';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Order_detail from '../containers/order-detail';



const App = () => (
    
        <Router>
            <div>
            <Route exact path="/" component={UserList} />
            <Route path="/admin-view/:id" component={Order_detail} />
            </div>
        </Router>
    
);

export default App;