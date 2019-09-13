exports.seed = function(knex, promise) {
    return knex('resource').insert([
        {
            resource_name: "computer",
            description: "wires, bytes, and keys"
        },
        {
            resource_name: "mouse",
            description: 'Not a fuzzy mammal'
        }
    ])
}