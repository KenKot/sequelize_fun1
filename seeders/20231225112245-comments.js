"use strict";
var models = require("./../models");

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    var comments = [];
    for (let user_id = 1; user_id <= 10; user_id++) {
      for (let post_id = 1; post_id <= 100; post_id++) {
        comments.push({
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          user_id: user_id,
          post_id: post_id,
        });
      }
    }
    return queryInterface.bulkInsert("Comments", comments);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("Comments", null, {}, models.Comment);
  },
};
