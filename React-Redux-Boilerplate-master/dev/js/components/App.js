import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import AddDetail from '../containers/add-detail';
import ViewDetail from '../containers/view-details';
const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
        <ViewDetail />
        <AddDetail />
    </div>
);

export default App;
