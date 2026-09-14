const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());


let todos = [];


app.post('/todos', (req, res) => {
  const newTodo = {
    id: Date.now().toString(), 
    title: req.body.title,
    status: 'to-do' 
  };
  
  todos.push(newTodo);
  res.status(201).json({
    message: "Todo created successfully",
    todo: newTodo
  });
});


app.get(['/todos', '/toods'], (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const skip = parseInt(req.query.skip) || 0;
  
  const paginatedTodos = todos.slice(skip, skip + limit);
  res.json({
    count: paginatedTodos.length,
    limit,
    skip,
    todos: paginatedTodos
  });
});


app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === req.params.id);
  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  res.json(todo);
});


app.patch('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === req.params.id);
  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  
  if (req.body.title !== undefined) {
    todo.title = req.body.title;
  }
  
  res.json({
    message: "Todo updated successfully",
    todo
  });
});

app.delete('/todos/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  
  const deletedTodo = todos.splice(index, 1);
  res.json({
    message: 'Todo deleted successfully',
    deletedTodo: deletedTodo[0]
  });
});

app.listen(PORT, () => {
  console.log(`Server is running smoothly on port ${PORT}`);
});