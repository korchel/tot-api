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
        if (results.rows.length) {
            res.send("Email уже зарегистрирован");
        } 

         // add user to db
        pool.query(queries.addUser, [email], (error, results) => {
            if (error) throw error;

            pool.query(queries.getUserByEmail, [email], (error, results) => {
                if (results.rows.length) {
                    res.status(201).json(results.rows);
                } 
            });
        });
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
            res.send("User does not exist.")
        }

        pool.query(queries.updateUser, [email, id], (error, results) => {
            if (error) throw error;

            res.status(200).send("user email updated")
        })
    });
}

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;

        if (noUserFound) {
            res.send("User does not exist.")
        }

        pool.query(queries.deleteUser, [id], (error, results) => {
            if (error) throw error;

            res.status(200).send("User removed successfully")
        })
    }) 
}


module.exports = {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
}