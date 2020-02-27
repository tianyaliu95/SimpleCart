const express = require("express");
const router = express.Router();

const {
    create,
    productById,
    remove,
    list,
    photo,
} = require("../controllers/product");

router.get("/products", list);
router.post("/product/create", create);
router.delete("/product/:productId", remove);
router.get("/product/photo/:productId", photo);

router.param("productId", productById);

module.exports = router;
