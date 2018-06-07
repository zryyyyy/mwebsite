const classifyTpl = require("../views/classify.html")
const classifycontroller = {
    render(){
        $(".container main").html(classifyTpl);
        // $(".container").html("这是分类...");
    }
}
module.exports = classifycontroller;