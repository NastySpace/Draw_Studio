const ProductModel = require('../models/product-model');

class ProductService {
    async addProduct({
        name,
        price,
        img,
        size,
        sex,
        material,
        style,
        isAvailable,
    }) {
        const product = await ProductModel.create({
            name,
            price,
            img,
            size,
            sex,
            material,
            style,
            isAvailable,
        });

        return product;
    }

    async getAllProducts() {
        const allProduct = await ProductModel.find();
        return allProduct;
    }

    async getOneProduct(id) {
        const product = await ProductModel.findOne({ _id: id });
        return product;
    }

    async deleteProduct(id) {
        const product = await ProductModel.findByIdAndDelete(id);
        return product;
    }
}

module.exports = new ProductService();
