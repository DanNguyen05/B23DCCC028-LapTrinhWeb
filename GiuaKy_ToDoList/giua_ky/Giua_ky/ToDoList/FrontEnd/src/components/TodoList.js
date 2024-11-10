import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ 
  tasks, 
  onDeleteTask, 
  onToggleComplete,
  onStartEditing,
  editingTask,
  editText,
  editDueDate,
  onEditTextChange,
  onEditDueDateChange,
  onSaveEdit,
  onCancelEdit
}) {
  return (
    <div className="todo-wrapper">
      <div className="ToDoList">
        <h1 style={{
          color: '#2c3e50',
          fontSize: '2rem',
          marginBottom: '30px',
          fontWeight: 'bold',
          textAlign: 'left',
          paddingLeft: '10px',
          borderLeft: '5px solid #4CAF50'
        }}>My work 🎯</h1>
        <ul className="todo-list">
          {tasks.map(task => (
            <TodoItem 
              key={task.id} 
              task={task} 
              onDelete={onDeleteTask}
              onToggleComplete={onToggleComplete}
              onStartEditing={onStartEditing}
              isEditing={editingTask?.id === task.id}
              editText={editText}
              editDueDate={editDueDate}
              onEditTextChange={onEditTextChange}
              onEditDueDateChange={onEditDueDateChange}
              onSaveEdit={onSaveEdit}
              onCancelEdit={onCancelEdit}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList; 