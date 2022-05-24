const OrderService = require('../services/order-service');

class OrderController {
    async addOrder(req, res) {
        try {
            const { name, surname, secondName, phone, adress, product } =
                req.body;

            const saveOrder = await OrderService.addOrder({
                name,
                surname,
                secondName,
                phone,
                adress,
                product,
            });

            res.json(saveOrder);
        } catch (e) {
            console.log(e);
        }
    }

    async getAllOrders(req, res) {
        try {
            const allOrders = await OrderService.getAllOrders();
            res.json(allOrders);
        } catch (e) {
            console.log(e);
        }
    }

    async getOneOrder(req, res) {
        try {
            const id = parseInt(req.params.id);
            const order = await OrderService.getOneOrder(id);
            res.json(order);
        } catch (e) {
            console.log(e);
        }
    }

    async deleteOrder(req, res) {
        try {
            const id = req.params.id;
            const deletedOrder = await OrderService.deleteOrder(id);
            res.json(deletedOrder);
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new OrderController();
