export default function AppReducer(state, action) {

    switch(action.type){
        case "rate":
            console.log("Rate action");
            state.find(item=>item.id === action.id);
            item.rating = action.rating;
            return [...state];
        case "edit":
            console.log("edit");
            return state;
        case "delete":
            console.log("delete");
            return state;

    }
}