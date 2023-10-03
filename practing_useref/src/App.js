import './App.css';

import { useRef, useState, useEffect, useReducer } from "react";
/**
 * 
 * function App() {
 * const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue])
  

  return (
    <>
      <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
      <h2>Current value: {inputValue}</h2>
      <h2>Previous value: {previousInputValue.current}</h2>
    </>
  );
  }
 * 
 * ? */
const initialTodos = [
    {
      id: 1,
      title: "Todo 1",
      complete: false,
    },
    {
      id: 2,
      title: "Todo 2",
      complete: false,
    },
];
  
const reducer = (state, action) => {
    switch (action.type) {
      case "COMPLETE":
        return state.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
        });
      default:
        return state;
    }
  };
  
function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  
  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };
  
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}
  

export default App;
