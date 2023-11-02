'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      Nama: 'Ardithya',
      Alamat: 'Sukabumi',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Nama: 'Gita',
      Alamat: 'Bandungi',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Nama: 'Aqila',
      Alamat: 'Bandung',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
