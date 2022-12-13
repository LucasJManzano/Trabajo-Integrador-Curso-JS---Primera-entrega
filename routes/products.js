const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const logRutas = require('../middlewares/logRutas');

router.get('/productos',logRutas, controller.products);
router.get('/productos/detail/:id',logRutas, controller.detail);
router.get('/productos/create',logRutas, controller.create);
router.get('/productos/edit',logRutas, controller.edit);


module.exports = router;