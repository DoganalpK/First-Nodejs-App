const express = require("express");
const router = express.Router();
const db = require("../data/db");

router.use("/products/:id", async (req, res) => {
    try {
        const [results] = await db.execute("select * from products where Id=?", [req.params.id]);
        res.render("product-detail", {
            product: results[0]
        });
    }
    catch (err) {
        console.log(err);
    }
});

router.use("/products", async (req, res) => {
    try {
        const [results] = await db.execute("select * from products");
        res.render("products", {
            productList: results
        });
    }
    catch (err) {
        console.log(err);
    }
});

router.use("/", async (req, res) => {
    //async-await
    try {
        const [results] = await db.execute("select * from products");
        res.render("index", {
            productList: results
        });
    }
    catch (err) {
        console.log(err);
    }

    // db.execute("select * from products")
    //     .then(result => {
    //         console.log(result);
    //         res.render("index", {
    //             productList: result
    //         });
    //     })
    //     .catch(err => console.log(err));
});

module.exports = router;