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
   await queryInterface.bulkInsert('Districts', [
      {
        provinceId:1,
        name: 'Gasabo',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        provinceId:1,
        name: 'Kicukiro',
        createdAt: new Date(),
        updatedAt: new Date(),
       },
      {
        provinceId:1,
       name: 'Nyarugenge',
       createdAt: new Date(),
       updatedAt: new Date(),
      },
      {
        provinceId:2,
        name: 'Karongi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        provinceId:2,
       name: 'Ngororero',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        provinceId:2,
       name: 'Nyabihu',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        provinceId:2,
       name: 'Nyamasheke',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        provinceId:2,
        name: 'Rubavu',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        provinceId:2,
        name: 'Rusizi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        provinceId:2,
       name: 'Rutsiro',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       provinceId:3,
       name: 'Bugesera',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       provinceId:3,
       name: 'Gatsibo',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       provinceId:3,
       name: 'Kayonza',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       provinceId:3,
       name: 'Kirehe',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       provinceId:3,
       name: 'Ngoma',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       provinceId:3,
       name: 'Nyagatare',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       provinceId:3,
       name: 'Rwamagana',
       createdAt: new Date(),
       updatedAt: new Date()
      },
       {
        provinceId:4,
        name: 'Burera',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        provinceId:4,
        name: 'Gakenke',
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        provinceId:4,
        name: 'Gicumbi',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        provinceId:4,
        name: 'Musanze',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        provinceId:4,
        name: 'Rulindo',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        provinceId:5,
        name: 'Gisagara',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        provinceId:5,
        name: 'Huye',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        provinceId:5,
        name: 'Kamonyi',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        provinceId:5,
        name: 'Muhanga',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        provinceId:5,
        name: 'Nyamagabe',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        provinceId:5,
        name: 'Nyanza',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        provinceId:5,
        name: 'Nyaruguru',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        provinceId:5,
        name: 'Ruhango',
        createdAt: new Date(),
        updatedAt: new Date()
       }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Districts', null, {});

  }
};
