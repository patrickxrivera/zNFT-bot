/* eslint-disable camelcase */

exports.shorthands = undefined;

const tableName = "blocks";

exports.up = (pgm) => {
  pgm.createTable(tableName, {
    id: "id",
    number: {
      type: "bigint",
      unique: true,
      notNull: true,
    },
    processedAt: "timestamp",
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

  pgm.createIndex(tableName, "number");
};

exports.down = (pgm) => {
  pgm.dropTable(tableName);
};
