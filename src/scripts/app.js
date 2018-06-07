const indexTpl = require("./views/index.html");


const indexcontroller = require("./controllers/index");
const classifycontroller = require("./controllers/classify");
const shopcontroller = require("./controllers/shop");
const minecontroller = require("./controllers/mine");
const Router = require("./utils/router")
const gocontroller = require("./controllers/goto")

$(".root").html(indexTpl)
gocontroller.footerAction()

const router = new Router()
router.route('/index', indexcontroller.render)
router.route('/classify', classifycontroller.render)
router.route('/shop', shopcontroller.render)
router.route('/mine', minecontroller.render)
router.init()



// indexcontroller.footerAction()