import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };
  useEffect(() => {
    const url = "http://todoback-svc:80/todos";
    // const url = "http://localhost:3001/todos";
    axios.get(url).then((res) => {
      setTodo(res.data.todos);
      console.log(res.data.todos);
    });
  }, []);
  const handleTodo = () => {
    if (text.trim() !== "" && text.length <= 140) {
      setTodo([...todo, text]);
      // const url = "http://localhost:3001/todos";
      const url = "http://todoback-svc:80/todos";

      axios.post(url, { todo: [text] }).then((res) => console.log(res.data));
      setText("");
    } else {
      alert("Todo should not be empty and should be 140 characters or less.");
    }
  };
  return (
    <div style={styles}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleTodo}>Create todo</button>
      <ul>
        {todo.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
