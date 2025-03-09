const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

// The routing done to create API endpoints for necessary pages.
// Data is rendered and validated in the dataController for a structured design.
router.get("/", dataController.getHomePage);
router.get("/page-one", dataController.getPageOne);
router.get("/page-two", dataController.getPageTwo);
router.get("/page-three", dataController.getPageThree);

module.exports = router;
