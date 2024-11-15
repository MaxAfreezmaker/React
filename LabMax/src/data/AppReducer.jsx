export default function AppReducer(state, action) {
    console.log("Action received in reducer:", action);
  
    switch (action.type) {
      case "edit":
        return state.map((person) =>
          person.id === action.id
            ? { ...person, name: action.newName }
            : person
        );
  
      case "rate":
        return state.map((person) =>
          person.id === action.id
            ? { ...person, rating: action.rating }
            : person
        );
  
      case "delete":
        return state.filter((person) => person.id !== action.id);
  
      default:
        return state;
    }
  }
  