const Router = require('express').Router;
const router = new Router();
const OrderController = require('../controllers/order-controller');

router.post('/', OrderController.addOrder);
router.get('/', OrderController.getAllOrders);
router.get('/:id', OrderController.getOneOrder);
router.delete('/:id', OrderController.deleteOrder);

module.exports = router;
