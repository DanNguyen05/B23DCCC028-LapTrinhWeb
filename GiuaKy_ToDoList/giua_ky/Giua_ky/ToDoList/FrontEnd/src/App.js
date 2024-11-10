import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState('');
  const [editDueDate, setEditDueDate] = useState('');

  // Fetch todos from backend when component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/todos');
      const formattedTasks = response.data.map(task => ({
        id: task.id,
        text: task.title,
        description: task.description || '',
        due: task.due_date,
        completed: task.completed === 1
      }));
      setTasks(formattedTasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async () => {
    if (!newTask.trim()) {
      alert('Please enter a task title');
      return;
    }
    if (!dueDate) {
      alert('Please select a due date');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/todos', {
        title: newTask.trim(),
        description: '',
        due_date: dueDate,
        completed: 0
      });
      await fetchTasks();
      setNewTask('');
      setDueDate('');
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Failed to add task. Please try again.');
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      fetchTasks(); // Refresh the list
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const task = tasks.find(t => t.id === id);
      if (!task) return;

      // Cập nhật UI ngay lập tức
      const updatedTasks = tasks.map(t => 
        t.id === id ? {...t, completed: !t.completed} : t
      );
      setTasks(updatedTasks);

      // Gửi request lên server
      await axios.put(`http://localhost:5000/api/todos/${id}`, {
        title: task.text,
        description: task.description || '',
        due_date: task.due,
        completed: !task.completed ? 1 : 0
      });
    } catch (error) {
      console.error('Error toggling task:', error);
      // Nếu có lỗi, fetch lại
      fetchTasks();
    }
  };

  const startEditing = (task) => {
    try {
      setEditingTask(task);
      setEditText(task.text);
      
      // Xử lý ngày an toàn hơn
      const dateObj = new Date(task.due);
      if (isNaN(dateObj.getTime())) {
        // Nếu ngày không hợp lệ, sử dụng ngày hiện tại
        setEditDueDate(new Date().toISOString().split('T')[0]);
      } else {
        setEditDueDate(dateObj.toISOString().split('T')[0]);
      }
    } catch (error) {
      console.error('Error starting edit:', error);
      // Fallback to current date if there's an error
      setEditDueDate(new Date().toISOString().split('T')[0]);
    }
  };

  const cancelEditing = () => {
    setEditingTask(null);
    setEditText('');
    setEditDueDate('');
  };

  const saveEdit = async () => {
    if (!editText.trim()) {
      alert('Task title cannot be empty');
      return;
    }
    if (!editDueDate) {
      alert('Please select a due date');
      return;
    }

    try {
      await axios.put(`http://localhost:5000/api/todos/${editingTask.id}`, {
        title: editText.trim(),
        description: editingTask.description || '',
        due_date: editDueDate,
        completed: editingTask.completed ? 1 : 0
      });
      await fetchTasks();
      cancelEditing();
    } catch (error) {
      console.error('Error updating task:', error);
      alert('Failed to update task. Please try again.');
    }
  };

  return (
    <div className="app">
      <TodoList 
        tasks={tasks} 
        onDeleteTask={deleteTask}
        onToggleComplete={toggleComplete}
        onStartEditing={startEditing}
        editingTask={editingTask}
        editText={editText}
        editDueDate={editDueDate}
        onEditTextChange={setEditText}
        onEditDueDateChange={setEditDueDate}
        onSaveEdit={saveEdit}
        onCancelEdit={cancelEditing}
      />
      <div className="add-task">
        <input
          type="text"
          placeholder="Enter task title"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
}

export default App;
