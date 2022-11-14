const pool = require('../../db');
const queries = require('./queries');

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addUser = (req, res) => {
    const { email } = req.body;

    // check if email exists

    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results && results.rows.length) {
            res.status(400).json({message: "Email уже зарегистрирован"});
        } else {
            // add user to db
            pool.query(queries.addUser, [email], (error, results) => {
                if (error) throw error;

                pool.query(queries.getUserByEmail, [email], (error, results) => {
                    if (results.rows.length) {
                        res.status(201).json(results.rows[0]);
                    } 
                });
            });
        }

        
    });
}

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { email } = req.body;

    pool.query(queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;

        if (noUserFound) {
            res.status(400).json({message: "User does not exist."})
        } else {
            pool.query(queries.updateUser, [email, id], (error, results) => {
                if (error) throw error;
    
                res.status(200).json({message: "user email updated"})
            })
        }
        
    });
}

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;

        if (noUserFound) {
            res.status(400).json({message: "User does not exist."})
        } else {
            pool.query(queries.deleteUser, [id], (error, results) => {
                if (error) throw error;
    
                res.status(200).json({message: "User removed successfully"})
            })
        }

    }) 
}


module.exports = {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
}