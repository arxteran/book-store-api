'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Books', [
      {
      judul: 'Tokyo Revengers 06',
      penerbit: 'Elex Media Komputindo',
      deskripsi:'Tokyo Revengers adalah karya Ken Wakui yang dirilis di Jepang pada tahun 2017 lalu dan sampai saat ini, sirkulasinya sudah mencapai lebih dari lima puluh juta eksemplar. Pada tahun 2020, komik ini berhasil memenangkan Kodansha Manga Award kategori komik remaja cowok.',
      gambar:'h53egupmgr5xqa7bbgzrgq.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
      },
    ]);
},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
