export const selectUser = (user) => {
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
export const deleteUser = (user) => {
    return {
        type: 'DELETE_USER',
        payload: user
    }
};
export const modify = (user) => {
    return {
        type: 'MODIFY_USER',
        payload: user
    }
};
