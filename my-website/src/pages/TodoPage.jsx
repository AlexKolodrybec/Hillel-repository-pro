import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

function TodoPage() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask('');
  };

  return (
    <Container>
      <TextField
        label="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button onClick={addTask}>Add Task</Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default TodoPage;