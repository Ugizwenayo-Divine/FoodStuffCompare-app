'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Provinces',[
     {
       name:'Kigali',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name:'Western',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'Eastern',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'Northern',
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      name:'Southern',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ],{});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Provinces', null, {});
  }
};
