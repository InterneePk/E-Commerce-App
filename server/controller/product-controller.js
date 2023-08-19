import Product from '../model/productSchema.js';


export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});
        response.json(products);
    } catch (error) {
        // Handle the error here
        response.status(500).json({ error: 'An error occurred' });
    }
}

export const getProductById = async (request, response) => {
    try {
        const product = await Product.findOne({ 'id': request.params.id });
        if (product) {
            response.json(product);
        } else {
            response.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        // Handle the error here
        response.status(500).json({ error: 'An error occurred' });
    }
}
