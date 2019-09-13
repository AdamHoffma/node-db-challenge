
exports.up = function(knex) {
  return knex.schema.createTable('project', tbl => {
    tbl.increments()
    tbl
        .string('project_name')
        .notNullable()
    tbl
        .string('description', 255)
    tbl
        .boolean('completed')
    
  })
  .createTable('resource', tbl => {
    tbl.increments()
    tbl
        .string('resource_name')
        .unique()
        .notNullable()        
    tbl
        .string('description')    
  })
  .createTable('task', tbl => {
    tbl.increments()
    tbl
        .string('description')
        .notNullable()
    tbl
        .string('notes')
    tbl
        .boolean('completed')
    // foreign key
    tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('project')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
  .createTable('projectkeys', tbl => {
    tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('project')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    tbl
        .integer('resource_id')
        .unsigned()
        .references('id')
        .inTable('resource')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    tbl.primary(['project_id', 'resource_id'])
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project')
    .dropTableIfExists('resource')
    .dropTableIfExists('task')
    .dropTableIfExists('projectkeys')
};
