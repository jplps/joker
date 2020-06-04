import Knex from 'knex';

export async function up(knex: Knex) {
	return knex.schema.createTable('jokes', table => {
		table.increments('id').primary();
		table.string('text').notNullable();
	});
}

export async function down(knex: Knex) {
	return knex.schema.dropTable('jokes');
}