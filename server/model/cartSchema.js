import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    user: {
        username: String,
        ref: 'User', // Reference to the 'User' model
        required: true 
    },
    cartItems: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product' // Reference to the 'Product' model
            },
            quantity: {
                type: Number,
                default: 1
            },
            price: {
                type: Number,
                required: true
            }
        }
    ]
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
