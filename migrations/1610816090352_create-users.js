/* eslint-disable camelcase */

exports.shorthands = undefined;

const tableName = "users";

exports.up = (pgm) => {
  pgm.createTable(tableName, {
    id: "id",
    email: {
      type: "varchar(255)",
      unique: true,
      notNull: true,
    },
    password: {
      type: "varchar(255)",
      notNull: true,
    },
    createdAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    updatedAt: {
      type: "timestamp",
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable(tableName);
};
