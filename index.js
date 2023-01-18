const express = require("express");
const app = express();

app.set("view engine", "ejs");


const data = [
    { id: 1, name: "iphone 11", price: 30000, isActive: true },
    { id: 2, name: "iphone 12", price: 35000, isActive: true },
    { id: 3, name: "iphone 13", price: 40000, isActive: false },
]


//routes
app.use("/products/:id", (req, res) => {
    const _product = data.find(o => o.id == req.params.id);
    res.render("product-detail", _product);
});

app.use("/products", (req, res) => {
    res.render("products", {
        productList: data
    });
});

app.use("/", (req, res) => {
    res.render("index")
});

app.listen(3000, () => {
    console.log("3000 port")
});