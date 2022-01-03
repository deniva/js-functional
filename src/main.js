const showStudent = require("./showStudent");

showStudent("444-44-4444");

const _ = require("lodash");
const { db, elementId } = require("./db");
const { find, csv, append } = require("./showStudent2");

const showStudent2 = _.flow([find(db), csv, append(elementId)]);
showStudent2("444-44-4444");
