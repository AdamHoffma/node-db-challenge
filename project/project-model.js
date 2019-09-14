const db = require('../data/db-config.js')

module.exports = {
    findProjectTasks,
    findProjectResources,
    getResources,
    getAllResources,
    insert,
    getTasks,
    getTask,
    insertTask,
    intToBoolean
}

function findProjectTasks(id) {
    return db('task')
    
    .where({project_id: id})
    //.select('p.project_name', 'p.description', 'p.completed', 't.id', 't.task_description', 't.notes', 't.task_completed',)
    .then(projects => {
        return projects
    })
}

function findProjectResources(id) {
    return db('projectkeys as PK')
    .innerJoin('resource as R', "PK.resource_id", 'R.id')
    .innerJoin('project as P', "PK.project_id", 'P.id')
    .select('p.project_name', 'p.description', 'p.completed', 'R.resource_name', 'R.resource_description')
    .where("PK.project_id", id)
}

function getResources(id) {
    return db('resource').where({id: Number(id)})
}

function getAllResources() {
    return db('resource')
}

function insert(resource) {
    return db('resource')
    .insert(resource)
    .then(ids => ({id: ids[0]}))
}

function getTasks() {
    return db('task')
    .then(tasks => tasks.map(task  => {
      return ({...task, completed: Boolean(task.completed)})
    }))
}

function getTask(id) {
    return db('task').where({id: Number(id)})
}

function insertTask(task) {
    return db('task')
    .insert(task)
    .then(ids => ({id: ids[0]}))
}

function intToBoolean(int) {
    return int === 1 ? true: false
}




/*function getShoppingList(id) {
    return db("recipe_ingredients as R")
        .innerJoin("recipes as RE", "R.recipe_id", "=", "RE.id")
        .innerJoin("ingredients as I", "R.ingredient_id", "=", "I.id")
        .select("RE.recipe_name", "I.ingredient_name", "R.quantity", "R.measurement")
        .where("RE.id", id)
}*/

