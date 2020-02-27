const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 64
        },
        price: {
            type: Number,
            trim: true,
            required: true,
        },
        quantity: {
            type: Number
        },
        photo: {
            data: Buffer,
            contentType: String
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
