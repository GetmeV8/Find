import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: newTodo, priority: priority }]);
    setNewTodo("");
    setPriority("medium"); 
  };

  const handleDelete = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  const handleUpdate = (indexToUpdate) => {
    setTodos(todos.map((todo, index) => index === indexToUpdate ? {...todo, priority: priority} : todo));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "#ff4444";
      case "medium":
        return "#ffbb33";
      case "low":
        return "#00C851";
      default:
        return "#ffbb33";
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>List</h1>
      {todos.map((todo, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            padding: "10px",
            margin: "5px 0",
            backgroundColor: "#f8f9fa",
            borderRadius: "4px",
            border: "1px solid #dee2e6"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                padding: "4px 8px",
                borderRadius: "4px",
                backgroundColor: getPriorityColor(todo.priority),
                color: "white",
                fontSize: "12px"
              }}
            >
              {todo.priority}
            </span>
            <span>{todo.text}</span>
          </div>
          
          <button
            onClick={() => handleDelete(index)}
            style={{
              padding: "4px 8px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Remove
          </button>
        </div>
      ))}
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Add a new todo"
            value={newTodo}
            onChange={handleChange}
            style={{
              flex: 1,
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ced4da"
            }}
          />
          <select
            value={priority}
            onChange={handlePriorityChange}
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ced4da",
              backgroundColor: "white"
            }}
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
        </div>
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default Todo;
