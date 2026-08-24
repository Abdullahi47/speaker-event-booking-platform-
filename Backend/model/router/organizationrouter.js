const express = require("express");

const router = express.Router();

const imagecontroller = require("../controller/Organizationcontroller");

const uploadiamge = require("../controller/middleware/upload");


// CREATE
router.post(
    "/",
    uploadiamge.single("image"),
    imagecontroller.create
);


// GET
router.get(
    "/",
    imagecontroller.get
);


// PUT
router.put(
    "/:id",
    uploadiamge.single("image"),
    imagecontroller.update
);


// DELETE
router.delete(
    "/:id",
    imagecontroller.remove
);


module.exports = router;
