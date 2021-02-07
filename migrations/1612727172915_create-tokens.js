/* eslint-disable camelcase */

exports.shorthands = undefined;

const tableName = "tokens";

exports.up = (pgm) => {
  pgm.createTable(tableName, {
    id: "id",
    transactionHash: {
      type: "varchar(256)",
      unique: true,
      notNull: true,
    },
    tokenId: {
      type: "int",
      unique: true,
      notNull: true,
    },
    ownerAddress: {
      type: "varchar(256)",
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

  pgm.createIndex(tableName, "tokenId");
  pgm.createIndex(tableName, "ownerAddress");
};

exports.down = (pgm) => {
  pgm.dropTable(tableName);
};
