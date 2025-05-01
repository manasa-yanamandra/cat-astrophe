/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('bookings', (table) => {
    table.increments('id')
    table.string('date')
    table.integer('pets_id').references('pets.id')
    table.integer('customer_id').references('customers.id')
    table.integer('room_id').references('rooms.id')
    table.integer('schedule_id').references('schedule.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('bookings')
}
