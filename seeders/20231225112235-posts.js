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
    var dates = [
      new Date("2014-1-1"),
      new Date("2015-1-1"),
      new Date("2016-1-1"),
      new Date("2017-1-1"),
    ];
    var posts = [];
    for (let user_id = 1; user_id <= 10; user_id++) {
      for (let i = 0; i < 10; i++) {
        posts.push({
          title: `Lorem ipsum dolor ${user_id}-${i}`,
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod doloremque minima similique nostrum repudiandae esse quo aliquid, veritatis velit minus ipsam eaque magnam quis, necessitatibus sunt perferendis nam praesentium est.",
          publishedDate: dates[i % dates.length],
          user_id: user_id,
        });
      }
    }
    return queryInterface.bulkInsert("Posts", posts);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("Posts", null, {}, models.Post);
  },
};
