const router = require("express").Router();
// BOOK
const {
  findAllBooks,
  detailBook,
  tambahBuku,
  deleteBuku,
  updateBuku,
} = require("../controllers/BookControllers");

// USER
const {
  findAllUsers,
  detailUser,
  tambahUser,
  deleteUser,
  updateUser,
} = require("../controllers/userControllers");

// const { Book } = require("../models");

// endpoint book
router.get("/books", findAllBooks);
router.get("/findbook", detailBook);
router.post("/book", tambahBuku);
router.delete("/apus", deleteBuku);
router.put("/up", updateBuku);

// endpoint user
router.get("/user", findAllUsers);
router.get("/user/:id", detailUser);
router.post("/user", tambahUser);
router.delete("/user", deleteUser);
router.put("/user", updateUser);

module.exports = router;
