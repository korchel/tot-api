const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id = $1";
const getUserByEmail = "SELECT * FROM users WHERE email = $1";
const checkEmailExists = "SELECT u FROM users u WHERE u.email = $1"
const addUser = "INSERT INTO users (email) VALUES ($1)";
const updateUser = "UPDATE users SET email = $1 WHERE id = $2";
const deleteUser = "DELETE FROM users WHERE id = $1";



module.exports = {
    getUsers,
    getUserById,
    getUserByEmail,
    checkEmailExists,
    addUser,
    updateUser,
    deleteUser,
}