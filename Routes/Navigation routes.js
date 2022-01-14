const {Router} = require('express');
const router = Router();
router.get("/signup",(req,res) => {
    res.render("signup");
});
router.get("/login",(req,res) => {
    res.render("login");
});
router.get("/products",(req,res) => {
    res.render("products");
});
router.get("/cart",(req,res) => {
    res.render("cart");
});
router.get("/about",(req,res) => {
    res.render("about");
});

module.exports = router;