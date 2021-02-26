// const Product = require('../../models/product.model');

module.exports = {
    Query: {
        products: () => {
            // .find()
        },
        product: (parent, args) => {
            console.log(args.id)
            //findById
        }
    //mutations // typer dans schema
        //createProduct
        // updateProduct
        // etc...
    }
}