const ProductService = require('../services/product-service');
const uuid = require('uuid');
const path = require('path');

class ProductController {
    async addProduct(req, res) {
        try {
            const { name, price, size, sex, material, style, isAvailable } =
                req.body;
            const img = req.files.img;
            const fileName = uuid.v4() + '.jpg';
            img.mv(path.resolve(__dirname, '..', '..', 'public', fileName));

            const saveProduct = await ProductService.addProduct({
                name,
                price,
                img: fileName,
                size,
                sex,
                material,
                style,
                isAvailable,
            });

            return res.json(saveProduct);
        } catch (e) {
            console.log(e);
        }
    }

    async getAllProducts(req, res) {
        try {
            const allProducts = await ProductService.getAllProducts();
            res.json(allProducts);
        } catch (e) {
            console.log(e);
        }
    }

    async getOneProduct(req, res) {
        try {
            const id = req.params.id;
            console.log(id);
            const product = await ProductService.getOneProduct(id);
            res.json(product);
        } catch (e) {
            console.log(e);
        }
    }

    async deleteProduct(req, res) {
        try {
            const id = req.params.id;
            const deletedProduct = await ProductService.deleteProduct(id);
            res.json(deletedProduct);
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new ProductController();
