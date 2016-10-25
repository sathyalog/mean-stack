module.exports = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Request-Headers","Content-Type, Authorization");
    res.header("Access-Control-Allow-Headers","Content-Type, Authorization");
    next();
}
