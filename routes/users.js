const express = require("express");
const router = express.Router();

const usersController = require("../controllers/userController");
const validate = require("../middleware/validate");

router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserById);
router.post("/", validate.saveUser, usersController.createUser);
router.put("/:id", validate.saveUser, usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
