const express = require('express');
const Poetry = require('../models/Poetry');
const router = express.Router();

router.get('/:title', (req, res) => {
  const { title } = req.params;
  console.log(title);
  Poetry.findOne({title})
    .select({ _id: 0 })
    .then(data => {
      res.json(data);
    });
});

module.exports = router;
