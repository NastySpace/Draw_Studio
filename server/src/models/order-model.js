const { Schema, model } = require('mongoose');

const OrderShema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    secondName: { type: String, required: false },
    phone: { type: Number, required: true },
    adress: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
});

module.exports = model('Order', OrderShema);
