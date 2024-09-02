import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { List, Checkbox, Button } from 'antd';

const TaskList = () => {
  const { tasks, dispatch } = useContext(TaskContext);

  const toggleTask = (id) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const removeTask = (id) => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  };

  return (
    <List
      dataSource={tasks}
      renderItem={task => (
        <List.Item
          actions={[<Button onClick={() => removeTask(task.id)}>Delete</Button>]}
        >
          <Checkbox checked={task.completed} onChange={() => toggleTask(task.id)}>
            {task.name}
          </Checkbox>
        </List.Item>
      )}
    />
  );
};

export default TaskList;
