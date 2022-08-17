const express = require('express');
const router = express.Router();
let todos = [
    { id: 1, todo: 'Assessment test 1', done: true },
    { id: 2, todo: 'Assessment test 2', done: false },
    { id: 3, todo: 'Assessment test 3', done: true },
    { id: 4, todo: 'Assessment test 4', done: false }
];
let lastTodo = 5;
router.get('/todo', (req, res) => {
  res.json({ todos: todos });
});

router.get('/todo/:todoId', (req, res) => {
  const todoId = parseInt(req.params.todoId);
  console.log(todoId);
  const id  = todos.find((id) => id.id === todoId);
  if (id) {
    res.json({ id: id });
  } else {
    res.json({ error: true, message: 'todo not found' })
  }
});



router.get('/todoDone', (req, res) => {
    
    const done  = todos.filter((todo) => todo.done );
    console.log(done);
    if (done) {
      res.json({ done: done });

    } else {
      res.json({ error: true, message: 'todo not found' })
    }
  });


router.post('/add_todo', (req, res) => {
  const todo = req.body; 
  todo.id = lastTodo;
  lastTodo++;
  todos.push(todo);
  res.json({ success: true, message: 'todo is added' });
});


router.put('/update_todo', (req, res) => {
  const todoId = req.body.todoId;
  const todoTitle = req.body.todoTitle;
  const updateddone = req.body.updateddone;

  const todo = todos.find(todo => todo.id === todoId);
  
  if (todo) {
    todo.done = updateddone;
    todo.todo  =todoTitle;
    res.json({ success: true, message: `The Todo's done is updated to ${todoTitle} and is ${updateddone}`});
  } else {
    res.json({ error: true, message: 'Todo not found' });
  }
});
router.delete('/todo/:todoId', (req, res) => {
  const todoId = parseInt(req.params.todoId);
  const newTodo = todos.filter(todo => todo.id != todoId);
  todos = newTodo;
  res.json({ success: true, message: 'Todo Deleted' });
});
module.exports = router;
