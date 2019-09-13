exports.seed = function(knex, promise) {
    return knex('task').insert([
        {
            description: "Fire up computer",
            notes: "press on button",
            completed: false,
            project_id: 1
        },
        {
            description: "Setup Environment",
            Notes: "Pain in ol buttocks",
            completed: false,
            project_id: 1
        }
    ])
}