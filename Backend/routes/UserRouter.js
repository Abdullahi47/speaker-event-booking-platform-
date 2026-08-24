const express = require("express");
const {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} = require("../controllers/UserController");

const router = express.Router();

router.route("/").post(createUser).get(getUsers);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
