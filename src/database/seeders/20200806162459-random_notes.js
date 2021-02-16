'use strict';
const faker = require('faker');
const notes = [...Array(10)].map((notes) => (
  {
    user_id: 1,
    title: faker.random.words(5),
    text: faker.random.words(30),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('notes', notes, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('notes', null, {});
  }
};