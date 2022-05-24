const Router = require('express').Router;
const productRouter = require('./product-router');
const orderRouter = require('./order-router');

const router = new Router();

router.use('/product', productRouter);
router.use('/order', orderRouter);

module.exports = router;
