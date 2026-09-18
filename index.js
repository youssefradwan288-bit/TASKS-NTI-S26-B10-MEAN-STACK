const fs = require("fs");

const file = "todos.json";

function readTodos() {
  if (!fs.existsSync(file)) {
    return [];
  }

  const data = fs.readFileSync(file, "utf8");

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}

function writeTodos(todos) {
  fs.writeFileSync(file, JSON.stringify(todos, null, 2));
}

function add(text) {
  const todos = readTodos();

  let id = 1;

  if (todos.length > 0) {
    id = todos[todos.length - 1].id + 1;
  }

  todos.push({
    id: id,
    text: text
  });

  writeTodos(todos);

  console.log("Entry added");
}

function list() {
  const todos = readTodos();

  if (todos.length === 0) {
    console.log("No entries");
    return;
  }

  todos.forEach(todo => {
    console.log(todo.id + " - " + todo.text);
  });
}

function edit(id, text) {
  const todos = readTodos();

  const todo = todos.find(item => item.id === Number(id));

  if (!todo) {
    console.log("Entry not found");
    return;
  }

  todo.text = text;

  writeTodos(todos);

  console.log("Entry updated");
}

function remove(id) {
  const todos = readTodos();

  const index = todos.findIndex(item => item.id === Number(id));

  if (index === -1) {
    console.log("Entry not found");
    return;
  }

  todos.splice(index, 1);

  writeTodos(todos);

  console.log("Entry deleted");
}

const command = process.argv[2];

if (command === "add") {
  add(process.argv[3]);
} else if (command === "list") {
  list();
} else if (command === "edit") {
  edit(process.argv[3], process.argv[4]);
} else if (command === "delete") {
  remove(process.argv[3]);
} else {
  console.log("Use: add, list, edit or delete");
}