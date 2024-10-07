import {useTodos} from "./hooks/useTodos.js"


function App() {

  const {visibleTodos, removeTodo, clearCompleted, toggleFilter, toggleTodo, showCompleted} = useTodos()
  
  return (
    <div>
      <p>
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={toggleFilter}
        />
        Afficher les tâches accomplies
      </p>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.name}>
            <input
              type="checkbox"
              onChange={() => toggleTodo(todo)}
              checked={todo.checked}
            />
            {todo.name}
            <button
              onClick={() => removeTodo(todo) }
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
      <button onClick={clearCompleted}>
        Supprimer les tâches accomplies
      </button>
    </div>
  );
}

export default App;
