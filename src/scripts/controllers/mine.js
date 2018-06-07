const mineTpl = require("../views/mine.html")
const minecontroller = {
    render(){
        $(".container main").html(mineTpl);
     
    }
}
module.exports = minecontroller;