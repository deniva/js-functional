const { db, elementId } = require("../src/db");
const showStudent = require("../src/showStudent");
const sinon = require("sinon");

QUnit.module("showStudent", {
  afterEach: () => {
    console.log("after each");
    sinon.restore();
  },
});

QUnit.test("showStudent - ok", assert => {
  sinon.replace(
    db,
    "find",
    sinon.fake(ssn => ({
      ssn,
      firstname: "Denis",
      lastname: "Ivanov",
    }))
  );

  assert.equal(showStudent("444-44-4444"), undefined);
});

QUnit.test("showStudent - throw exception", assert => {
  sinon.replace(
    db,
    "find",
    sinon.fake(ssn => null)
  );

  assert.throws(() => showStudent("444-44-4444"), /Student not found!/);
});
