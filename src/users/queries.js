const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id = $1";
const getUserByEmail = "SELECT * FROM users WHERE email = $1";
const checkEmailExists = "SELECT u FROM users u WHERE u.email = $1"
const addUser = "INSERT INTO users (email) VALUES ($1)";
const updateUser = "UPDATE users SET email = $1 WHERE id = $2";
const deleteUser = "DELETE FROM users WHERE id = $1";

const getTodos = "SELECT * FROM todo";
const getTodoById = "SELECT * FROM todo WHERE id = $1";
const addTodo = "INSERT INTO todo (task, status) VALUES ($1)";
const getTodoByTask = "SELECT * FROM todo WHERE task = $1";
const checkTaskExists = "SELECT u FROM todo u WHERE u.task = $1"
const updateTodo = "UPDATE users SET task = $1, status = $2 WHERE id = $3";
const deleteTodo = "DELETE FROM todo WHERE id = $1";


module.exports = {
    getUsers,
    getUserById,
    getUserByEmail,
    checkEmailExists,
    addUser,
    updateUser,
    deleteUser,
    getTodos,
    getTodoById,
    getTodoByTask,
    addTodo,
    checkTaskExists,
    updateTodo,
    deleteTodo
}