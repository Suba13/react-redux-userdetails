/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */


const data = [
    {
        id: 1,
        first: "Bucky",
        last: "Roberts",
        age: 71,
        description: "Bucky is a React developer and YouTuber",
        thumbnail: "http://i.imgur.com/7yUvePI.jpg"
    },
    {
        id: 2,
        first: "Joby",
        last: "Wasilenko",
        age: 27,
        description: "Joby loves the Packers, cheese, and turtles.",
        thumbnail: "http://i.imgur.com/52xRlm8.png"
    },
    {
        id: 3,
        first: "Madison",
        last: "Williams",
        age: 24,
        description: "Madi likes her dog but it is really annoying.",
        thumbnail: "http://i.imgur.com/4EMtxHB.png"
    }
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
            case "ADD_USER":
            return [...state,action.payload];
        case "DELETE_USER":
            return state.filter(item => { return item.id != action.payload.id })
            console.log(del);
        default: return state;

    }

}