/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('pets', (table) => {
    table.increments('id')
    table.string('name')
    table.string('species')
    table.string('breed')
    table.integer('age')
    table.string('food')
    table.string('fun_fact')
    table.integer('room_id').references('rooms.id')
    table.string('image')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('pets')
}
