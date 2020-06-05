import Knex from 'knex';

export async function up(knex: Knex) {
	return knex.schema.createTable('jokes', table => {
		table.increments('id').primary();
		table.string('setup').notNullable();
		table.string('punch').notNullable();
	});
}

export async function down(knex: Knex) {
	return knex.schema.dropTable('jokes');
}