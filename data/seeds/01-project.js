exports.seed = function(knex, promise) {
    return knex('project').insert([
        {
            project_name: 'Create a BE server w/DB',
            description: 'Create and seed a DB and connect with a server',
            completed: false
        },
        {
            project_name: 'seed another project',
            description: "Create an Object with Name, description, completed",
            completed: false 
        }
    ])
}