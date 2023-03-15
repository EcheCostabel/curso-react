


export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((todo) => todo.id !== action.payload);

    case "toggle":
      return state.map((todo) =>   //esto uso para tachar las todo hechas  si el todo.id es = al action.payload devuelvo lo que tenia en el todo y le cambio el done, sino devuelvo el todo
        todo.id === action.payload 
        ? { ...todo, done: !todo.done } 
        : todo
      );

    default:
      return state;
  }
};
