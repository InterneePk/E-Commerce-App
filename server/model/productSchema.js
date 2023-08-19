import mongoose from 'mongoose';
import autoIncrement from 'mongodb-autoincrement';

const productSchema = new mongoose.Schema({
    id: { type: Number, index: true },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

productSchema.plugin(autoIncrement.mongoosePlugin, { field: 'id', collection: 'product' });

const products = mongoose.model('product', productSchema);

export default products;
