import React from 'react';

function TodoItem({ 
  task, 
  onDelete, 
  onToggleComplete,
  onStartEditing,
  isEditing,
  editText,
  editDueDate,
  onEditTextChange,
  onEditDueDateChange,
  onSaveEdit,
  onCancelEdit
}) {
  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete(task.id);
    }
  };

  const handleToggle = (e) => {
    e.stopPropagation();
    onToggleComplete(task.id);
  };

  if (isEditing) {
    return (
      <li className="todo-item editing">
        <div className="todo-content">
          <input
            type="text"
            value={editText}
            onChange={(e) => onEditTextChange(e.target.value)}
            className="edit-input"
          />
          <input
            type="date"
            value={editDueDate}
            onChange={(e) => onEditDueDateChange(e.target.value)}
            className="edit-date"
          />
          <div className="edit-buttons">
            <button onClick={onSaveEdit} className="save-btn">Save</button>
            <button onClick={onCancelEdit} className="cancel-btn">Cancel</button>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li className="todo-item">
      <div className="todo-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
          className="todo-checkbox"
        />
        <div className="todo-text">
          <div className="task-title">
            {task.text}
          </div>
          <div className="task-due">
            Thời hạn: {new Date(task.due).toLocaleDateString()}
          </div>
        </div>
      </div>
      <div className="todo-actions">
        <button onClick={() => onStartEditing(task)} className="edit-btn">Edit</button>
        <button onClick={handleDelete} className="delete-btn">Delete</button>
      </div>
    </li>
  );
}

export default TodoItem; 