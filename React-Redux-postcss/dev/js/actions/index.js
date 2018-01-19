export const selectUser = (user) => {
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const addUser = (user) => {
    return fetch('http://localhost:3001/user',
        {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(
        data =>
            ({
                type: "ADD_USER",
                payload: data.json()
            }),

        error => console.log(error)
        );

};

export const deleteUser = (user) => {
    return fetch('http://localhost:3001/user/' + user.id,
        {
            method: 'DELETE',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
        }).then(
        data =>
            ({
                type: 'DELETE_USER',
                payload: user
            }),

        error => console.log(error)
        );

};
export const modify = (user) => {
    return fetch('http://localhost:3001/user/' + user.id,
        {
            method: 'PUT',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(
        data =>
            ({
                type: "MODIFY_USER",
                payload: data.json()
            }),

        error => console.log(error)
        );

};
export const showDetails = (value) => {
    return {
        type: 'showDetails',
        payload: { showContent: value }
    }
};
