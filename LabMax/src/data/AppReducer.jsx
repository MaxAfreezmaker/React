export default function AppReducer(state, action) {
  console.log("Action received in reducer:", action);

  switch (action.type) {
      case "add":
          return [...state, action.data];

      case "edit":
          return state.map((item) =>
              item.id === action.data.id
                  ? { ...item, ...action.data }
                  : item
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
  