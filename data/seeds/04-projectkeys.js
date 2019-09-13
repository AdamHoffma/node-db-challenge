exports.seed = function(knex, Promise) {
    return knex('projectkeys').insert([
        {project_id: 1, resource_id: 1}
    ])
}