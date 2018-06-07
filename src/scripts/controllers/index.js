const model = require("../models/index")
const indexdata = require("../views/indexdata.html")

const home = require("../views/home.html")

const controller = {
       async render(){ 
            let result = await model.find();
            let html = template.render(indexdata, result)
          
            $(".container main").html(home)
           $("#wrap1").html(html)
           
    }
}
module.exports = controller;
