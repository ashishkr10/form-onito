const express = require("express");
const router = express.Router();

const FormData = require("../models/Form");

router.get("/get", (req, res) => {
  FormData.find()
    .then((item) => res.json(item))
    .catch((err) => res.status(404).json({ mesg: "No Data found" }));
});

router.post("/add", async (req, res) => {
  const doc = await FormData(req.body);

  res.status(200).json(await doc.save());
});

module.exports = router;
