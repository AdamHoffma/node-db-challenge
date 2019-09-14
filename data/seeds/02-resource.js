exports.seed = function(knex, promise) {
    return knex('resource').insert([
        {
            resource_name: "computer",
            resource_description: "wires, bytes, and keys"
        },
        {
            resource_name: "mouse",
            resource_description: 'Not a fuzzy mammal'
        }
    ])
}