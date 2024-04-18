
const getTodos = "SELECT * FROM todo";
const getTodoById = "SELECT * FROM todo WHERE id = $1";
const addTodo = "INSERT INTO todo (task, done) VALUES ($1, $2)";
const getTodoByTask = "SELECT * FROM todo WHERE task = $1";
const checkTaskExists = "SELECT u FROM todo u WHERE u.task = $1"
const deleteTodo = "DELETE FROM todo WHERE id = $1";




module.exports = {
    getTodos,
    getTodoById,
    getTodoByTask,
    addTodo,
    checkTaskExists,
    deleteTodo
}