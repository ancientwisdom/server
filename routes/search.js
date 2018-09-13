const express = require('express');
const Peotry = require('../models/Poetry');
const router = express.Router();

router.get('/', (req, res) => {
  const { search } = req.query;
});
