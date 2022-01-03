var _ = require("lodash");

const find = _.curry((db, id) => {
  let obj = db.find(id);
  if (obj === null) {
    throw new Error("Object not found!");
  }
  return obj;
});

const csv = student =>
  `${student.ssn}, ${student.firstname}, ${student.lastname}`;

const append = _.curry((selector, info) => {
  console.log(selector, info);
});

module.exports = { find, csv, append };
