const express = require("express");
const router = express.Router();

const charactersController = require("../controllers/characterController");
const validate = require("../middleware/validate");

router.get("/", charactersController.getAllCharacters);
router.get("/:id", charactersController.getCharacterById);
router.post("/", validate.saveCharacter, charactersController.createCharacter);
router.put(
  "/:id",
  validate.saveCharacter,
  charactersController.updateCharacter,
);
router.delete("/:id", charactersController.deleteCharacter);

module.exports = router;
