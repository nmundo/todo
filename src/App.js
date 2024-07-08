import {
  Grid,
  Container,
  TextField,
  Typography,
  Button,
  Card,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (todo) {
      const newTodo = {
        id: crypto.randomUUID(),
        text: todo,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTodo("");
    }
  };

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">To Do List</Typography>
        </Grid>
        <Grid item xs={12} md={10}>
          <TextField
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Button variant="contained" size="medium" onClick={addTodo} fullWidth>
            Add
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <List>
              {todos.map(({ id, text }, index) => (
                <Fragment key={id}>
                  {index !== 0 && <Divider />}
                  <ListItem>
                    <ListItemText>{text}</ListItemText>
                  </ListItem>
                </Fragment>
              ))}
            </List>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
