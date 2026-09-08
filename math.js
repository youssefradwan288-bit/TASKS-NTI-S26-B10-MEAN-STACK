const fs = require('fs');
const FILE_NAME = 'todos.json';
// 1 - Users can add entry,
// Example
// node index.js add “To do entry”
// Notes:
// The entry should contain an incremental id

function getTodos() {
    if (!fs.existsSync(FILE_NAME)) {
        return [];
    }
    const fileData = fs.readFileSync(FILE_NAME, 'utf8');
    return JSON.parse(fileData);
}

function saveTodos(todos) {
    fs.writeFileSync(FILE_NAME, JSON.stringify(todos, null, 2));
}

const args = process.argv.slice(2);
const action = args[0];

if (action === 'add') {
    const taskTitle = args[1];
    
    if (!taskTitle) {
        console.log("Please write a task name.");
        return;
    }

    const todos = getTodos();
    
    let newId = 1;
    if (todos.length > 0) {
        newId = todos[todos.length - 1].id + 1;
    }

    todos.push({ id: newId, title: taskTitle });
    saveTodos(todos);
    console.log("Task added successfully!");
}


// 2 - Users Can list Entries
// 	-  All entries:
// 		node index.js list


else if (action === 'list') {
    const todos = getTodos();
    
    if (todos.length === 0) {
        console.log("No tasks found.");
        return;
    }

    todos.forEach(function(t) {
        console.log(t.id + " - " + t.title);
    });
}


// 3 - Users can edit their entry through the id
// Make individual edits
// Examples
//             node index.js edit 123 “Edited title”
// ===> will edit entry with id  123  to be “Edited title”


else if (action === 'edit') {
    const targetId = parseInt(args[1]);
    const updatedTitle = args[2];

    if (!targetId || !updatedTitle) {
        console.log("Please provide an ID and the new title.");
        return;
    }

    const todos = getTodos();
    let found = false;

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === targetId) {
            todos[i].title = updatedTitle;
            found = true;
            break;
        }
    }

    if (found) {
        saveTodos(todos);
        console.log("Task updated!");
    } else {
        console.log("Task ID not found.");
    }
}

// 4 - Users can delete their entry using their id
// 	Example
// 		node index.js delete 123


else if (action === 'delete') {
    const targetId = parseInt(args[1]);

    if (!targetId) {
        console.log("Please provide a valid ID to delete.");
        return;
    }

    let todos = getTodos();
    const filteredTodos = todos.filter(function(t) {
        return t.id !== targetId;
    });

    if (todos.length === filteredTodos.length) {
        console.log("Task ID not found.");
    } else {
        saveTodos(filteredTodos);
        console.log("Task deleted!");
    }
}

else {
    console.log("Unknown command. Use add, list, edit, or delete.");
}

