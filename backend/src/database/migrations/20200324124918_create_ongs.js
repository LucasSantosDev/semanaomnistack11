exports.up = function(knex) {
  return knex.schema.createTable("ongs", function(table) {
    table.string("id").primary();
    table.string("name", 255).notNullable();
    table
      .string("email", 255)
      .unique()
      .notNullable();
    table.string("password", 255).notNullable();
    table.string("whatsapp", 255).notNullable();
    table.string("city", 255).notNullable();
    table.string("state", 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("ongs");
};
