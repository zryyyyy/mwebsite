const gocontroller = {
  footerAction() {
    const pagelist = ['/index', '/classify', '/shop','/mine']
    $('footer li').on('click', function(){
      location.hash = pagelist[$(this).index()]
      $(this).addClass('licolor').siblings().removeClass('licolor')
    })
  },
  scrollAction() {
    new IScroll('#scrollarea', {})
  }
}

module.exports = gocontroller
