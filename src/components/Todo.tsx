import React from 'react';
import { ListItem, ListItemText, Checkbox, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ id, text, completed, onToggle, onDelete }) => {
  return (
    <Paper elevation={2} sx={{ mb: 1 }}>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={() => onDelete(id)}>
            <DeleteIcon />
          </IconButton>
        }
      >
        <Checkbox
          edge="start"
          checked={completed}
          onChange={() => onToggle(id)}
        />
        <ListItemText
          primary={text}
          sx={{
            textDecoration: completed ? 'line-through' : 'none',
            color: completed ? 'text.secondary' : 'text.primary',
          }}
        />
      </ListItem>
    </Paper>
  );
};

export default Todo; 