(function() {

  document.getElementById('notice').style.display = "none";

  var dppx = window.devicePixelRatio || 0,
      meta = document.getElementById('js-meta'),
      mq600 = window.matchMedia("(max-width: 600px)"),
      mq1000 = window.matchMedia("(max-width: 1000px)"),
      screenWidth = document.documentElement.clientWidth,
      imgSidebar = document.getElementById('img--sidebar').width,
      imgContent = document.getElementById('img--content').width,
      sizesSidebar,
      sizesContent;



  if (mq600.matches) {
    sizesSidebar = screenWidth - 32;
    sizesContent = screenWidth - 32;
  } 
  else if (mq1000.matches) {
    sizesSidebar = Math.round(screenWidth * 33.33/100 - 32, 0);
    sizesContent = Math.round(screenWidth * 66.67/100 - 32, 0);
  }
  else {
    sizesSidebar = 301;
    sizesContent = 635;
  }

  meta.innerHTML =  "Device pixel ratio = " + dppx + "<br>" +
                    "Screen size = " + screenWidth + "<br>" +
                    "Measured sidebar img width = " + imgSidebar + " (predicted by sizes = " + sizesSidebar + ")<br>" +
                    "Measured content img width = " + imgContent + " (predicted by sizes = " + sizesContent + ")";

  window.onresize = function(){
    document.getElementById('notice').style.display = "block";
  }

})();