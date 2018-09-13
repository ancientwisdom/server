const express = require('express');
const Poetry = require('../models/Poetry');
const router = express.Router();

router.get('/', (req, res) => {
  Poetry.find()
    .select({ title: 1 })
    .then(data => {
      res.json(data);
    });
});

router.get('/:chapter', (req, res) => {
  const { chapter } = req.params;
  Poetry.find({ chapter })
    .select({ title: 1, _id: 0, section: 1 })
    .then(data => {
      res.json(data);
    });
});

router.get('/:chapter/:section', (req, res) => {
  const { section } = req.params;
  Poetry.find({ section })
    .select({ title: 1, _id: 0, section: 1 })
    .then(data => {
      res.json(data);
    });
});

module.exports = router;
