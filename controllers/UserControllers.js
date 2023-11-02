const { User } = require("../models");

const findAllUsers = async (req, res) => {
    try {
      //   ambil data dari databse
      const data = await User.findAll();
      // tampilkan
      res.json({
        message: "Ini dari router",
        data: data,
      });
    } catch (error) {
        res.json({
          message: "error ya kak",
        });
    }
};

const detailUser = async (req, res) => {
  //   get id dari request
  let id = parseInt(req.params.id);

  //   ambil data dari databse
  const data = await User.findByPk(id);

  // tampilkan
  res.json({
    message: "Ini dari router",
    data: data,
  });
};

const tambahUser = async (req, res) => {
  try {
    // ambil data dari request
    const data = req.body;
    const result = await User.create(data);

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

const deleteUser = async (req, res) => {
  try {
    // ambil data dari database
    const id = req.body.id;

    // hapus data dari database
    const result = await User.destroy({
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

const updateUser = async (req, res) => {
  try {
    // ambil data dari database
    const id = req.body.id;

    const newData = req.body;

    // hapus data dari database
    const result = await User.update(newData, {
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
  findAllUsers,
  detailUser,
  tambahUser,
  deleteUser,
  updateUser,
};
