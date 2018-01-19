/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */


const data = [
    
];

export default function (state = data, action) {
    switch (action.type) {
        case 'MODIFY_USER':
            return state.map((n) => {
                if (n.id == action.payload.id) {

                    return action.payload;
                }
                return n;
            });
            
        case "DELETE_USER":
            return state.filter(item => { return item.id != action.payload.id })
            console.log(del);
            case "ADD_USER":
            return [...state,action.payload];
            case "LOAD":
            return action.payload
        default: return state;

    }

}
