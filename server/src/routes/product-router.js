const Router = require('express').Router;
const router = new Router();
const ProductController = require('../controllers/product-controller');

router.post('/', ProductController.addProduct);
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getOneProduct);
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;
