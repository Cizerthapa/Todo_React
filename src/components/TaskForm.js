import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Input, Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const { dispatch } = useContext(TaskContext);

  const addTask = () => {
    dispatch({ type: 'ADD_TASK', payload: { id: uuidv4(), name: taskName, completed: false } });
    setTaskName('');
  };

  return (
    <div>
      <Input
        placeholder="Enter task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <Button onClick={addTask}>Add Task</Button>
    </div>
  );
};

export default TaskForm;
