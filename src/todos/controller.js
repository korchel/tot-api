const pool = require('../../db');
const queries = require('./queries');



////////////////////////////
// todo controller

const DEFAULT_STATUS = false;

const getTodos = (req, res) => {
    pool.query(queries.getTodos, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addTodo = (req, res) => {
  const { task, done } = req.body;

  const isTaskDone = done ?? DEFAULT_STATUS;

    // check if task exists

    pool.query(queries.checkTaskExists, [task], (error, results) => {
        if (results && results.rows.length) {
            res.status(400).json({message: "Таск уже создан"});
        } else {
            // add task to db
            pool.query(queries.addTodo, [task, isTaskDone], (error, results) => {
                if (error) throw error;

                pool.query(queries.getTodoByTask, [task], (error, results) => {
                    if (results.rows.length) {
                        res.status(201).json(results.rows[0]);
                    } 
                });
            });
        }

        
    });
}

const getTodoById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getTodoById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}


function updateTodo(req, res) {

  const id = parseInt(req.params.id);
  const { task, done } = req.body;
  
  let query = 'UPDATE todo SET ';
  const params = [];

  if (task !== undefined) {
    params.push(task);
    query += `task = $${params.length}, `;
  }

  if (done !== undefined) {
    params.push(done);
    query += `done = $${params.length}, `;
  }

  // Remove the last comma and space
  query = query.slice(0, -2);

  // Add the WHERE clause
  params.push(id);
  query += ` WHERE id = $${params.length}`;

  pool.query(queries.getTodoById, [id], (error, results) => {
    const noTodoFound = !results.rows.length;

    if (noTodoFound) {
      res.status(400).json({ message: "Task does not exist." })
    } else {
      pool.query(query, params, (error, results) => {
        if (error) throw error;

        res.status(200).json({ message: "task updated" })
      });
    }
  })
}

const deleteTodo = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getTodoById, [id], (error, results) => {
        const noTodoFound = !results.rows.length;

        if (noTodoFound) {
            res.status(400).json({message: "Task does not exist."})
        } else {
            pool.query(queries.deleteTodo, [id], (error, results) => {
                if (error) throw error;
    
                res.status(200).json({message: "Task removed successfully"})
            })
        }

    }) 
}

module.exports = {
    getTodos,
    getTodoById,
    addTodo,
    updateTodo,
    deleteTodo
}