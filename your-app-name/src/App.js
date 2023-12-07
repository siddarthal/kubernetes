import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [text, setText] = useState(''); 
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('/api/todos')  
      .then(res => {
        setTodos(res.data);
      });
  }, []);

  const addTodo = () => {
    
    axios.post('/api/todos', {text})
      .then(res => {
         setTodos(prev => [...prev, text]);
      });

  } 
   
  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)}/>
      <button onClick={addTodo}>Add Todo</button> 
    </div>
  );
}

export default App;