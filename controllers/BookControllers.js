const { DatabaseError } = require("sequelize");
const { Book } = require("../models");

const findAllBooks = async (req, res) => {
  //   ambil data dari databse
  const data = await Book.findAll();
  // tampilkan
  res.json({
    message: "Ini dari router",
    data: data,
  });
};

const detailBook = async (req, res) => {
  //   get id dari request
  let id = parseInt(req.body.id);

  //   ambil data dari databse
  const data = await Book.findByPk(id);

  // tampilkan
  res.json({
    message: "Ini dari router",
    data: data,
  });
};

const tambahBuku = async (req, res) => {
  try {
    // ambil data dari request
    const data = req.body;
    const result = await Book.create(data);

    // insert ke database

    // tampilkan status
    res.json({
      result: result,
    });
    // res.send("Tambah");
  } catch (error) {
    res.json({
      message: "error : " + error,
    });
  }
};

const deleteBuku = async (req, res) => {
  try {
    // ambil data dari database
    const id = req.body.id;

    // hapus data dari database
    const result = await Book.destroy({
      where: {
        id: id,
      },
    });

    // tampilkan status
    res.json({
      message: "berhasil dihapus",
    });
  } catch (error) {
    res.json({
      message: "error : " + error,
    });
  }
};

const updateBuku = async (req, res) => {
  try {
    // ambil data dari database
    const id = req.body.id;

    const newData = req.body;

    // hapus data dari database
    const result = await Book.update(newData, {
      where: {
        id: id,
      },
    });

    // tampilkan status
    res.json({
      message: "berhasil ngapdet",
      data: result,
    });
  } catch (error) {
    res.json({
      message: "error : " + error,
    });
  }
};

module.exports = {
  findAllBooks,
  detailBook,
  tambahBuku,
  deleteBuku,
  updateBuku,
};
