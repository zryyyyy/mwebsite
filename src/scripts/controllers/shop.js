const shopTpl = require("../views/shop.html")
const shopcontroller = {
    render(){
        $(".container main").html(shopTpl);

    }
}
module.exports = shopcontroller;