const db = {
  find: ssn => ({
    ssn,
    firstname: "firstname",
    lastname: "lastname",
  }),
};
const elementId = "element";

module.exports = { db, elementId };
