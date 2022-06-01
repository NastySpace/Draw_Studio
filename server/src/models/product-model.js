const { Schema, model } = require('mongoose');

const ProductShema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String, required: true },
    size: { type: String, required: true },
    sex: { type: String, required: true },
    material: { type: String, required: true },
    style: { type: String, required: true },
    isAvailable: { type: Boolean, required: true },
});

module.exports = model('Product', ProductShema);
