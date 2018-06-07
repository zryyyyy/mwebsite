const  indexTpl = require("../views/index.html");
const footer = require("../views/footer.html")
const classifyTpl = require("../views/classify.html");

const controller = require("../controllers/index");
  console.log(controller.render())
const classifycontroller = require("../controllers/classify");

module.exports = function(){
    var hash = location.hash.substr(1);

     $('.container main').remove()
  switch (hash) {
    case '':
    case '/index':
    //   ;(async () => {
    //     const html = await homeController.render()
    //     $('.container header').after(homeTpl)
    //     $('#poslist').html(html)
    //   })()
    $(".container").html(indexTpl+footer)
    // $("#wrap1").html(controller.render)
    // controller.render
      break
    case '/classify':
      $(".container main").html(classifyTpl)
      $('main').html(mineController.render())
      break
    default:
      break
  }
}