const mongoose = require("mongoose");
const db = require("../models");
const faker = require('faker');

mongoose.connect(
  "mongodb://localhost/CTS-db",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

let fakeUsers = [];

for(var i = 0; i < 50; i++) {
  fakeUsers.push({
    username: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  })
}


db.User
  .deleteMany({})
  .then(() => db.User.insertMany(fakeUsers))
  .then(data => {
    console.log(data);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });