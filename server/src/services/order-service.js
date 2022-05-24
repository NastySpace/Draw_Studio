const OrderModel = require('../models/order-model');

class OrderService {
    async addOrder({ name, surname, secondName, phone, adress, productID }) {
        const order = await OrderModel.create({
            name,
            surname,
            secondName,
            phone,
            adress,
            product: productID,
        });

        return order;
    }

    async getAllOrders() {
        const allOrders = await OrderModel.find();
        return allOrders;
    }

    async getOneOrder(id) {
        const order = await OrderModel.findOne({ id });
        return order;
    }

    async deleteOrder(id) {
        const order = await OrderModel.deleteOne({ _id: id });
        return order;
    }
}

module.exports = new OrderService();
