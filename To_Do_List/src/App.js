import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Học lập trình web với React', due: 'Tomorrow', completed: false },
    { id: 2, text: 'Gửi email nộp bài tập về nhà', due: 'Saturday', completed: false },
    { id: 3, text: 'Học từ vựng tiếng anh mỗi ngày', due: 'Monday', completed: false },
    { id: 4, text: 'Viết tiểu luận môn Triết học', due: 'Today', completed: false }
  ]);
  const [newTask, setNewTask] = useState('');
  const [dueDate, setDueDate] = useState('');

  // Hàm thêm công việc
  const addTask = () => {
    if (newTask && dueDate) {
      setTasks([...tasks, { id: Date.now(), text: newTask, due: dueDate, completed: false }]);
      setNewTask('');
      setDueDate('');
    }
  };

  // Hàm xóa công việc
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Hàm thay đổi trạng thái công việc
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Hàm xác định màu sắc dựa vào thời gian đến hạn
  const getDueDateColor = (due) => {
    switch (due.toLowerCase()) {
      case 'today':
        return '#e74c3c'; // đỏ
      case 'tomorrow':
        return '#e67e22'; // cam
      case 'saturday':
        return '#f1c40f'; // vàng
      case 'monday':
        return '#2ecc71'; // xanh lá
      default:
        return '#7f8c8d'; // xám cho ngày không xác định
    }
  };

  return (
    <div className="container">
      <h1>My work 🎯</h1>
      <ul className="todo-list">
        {tasks.map(task => (
          <li key={task.id} className={`todo-item ${task.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span 
              style={{
                cursor: 'pointer', 
                color: getDueDateColor(task.due),
                textDecoration: task.completed ? 'line-through' : 'none'
              }}
            >
              {task.text}
            </span>
            <span className="due-date" style={{ color: getDueDateColor(task.due) }}>{task.due}</span>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>X</button>
          </li>
        ))}
      </ul>
      <div className="add-task">
        <input
          type="text"
          placeholder="Add task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          type="text"
          placeholder="Due date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button onClick={addTask}>Add task</button>
      </div>
    </div>
  );
}

export default App;
const todosRouter = require('./routers/todos'); // Đường dẫn đến tệp todos.js
app.use('/todos', todosRouter);
