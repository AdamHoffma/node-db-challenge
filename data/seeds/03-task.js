exports.seed = function(knex, promise) {
    return knex('task').insert([
        {
            task_description: "Fire up computer",
            notes: "press on button",
            task_completed: false,
            project_id: 1
        },
        {
            task_description: "Setup Environment",
            notes: "Pain in ol buttocks",
            task_completed: false,
            project_id: 1
        },
        {
            task_description: "type",
            notes: "testing",
            task_completed: false,
            project_id: 2
        }
    ])
}