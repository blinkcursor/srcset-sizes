(function() {

  var imgsLoaded = 0,
      imgSidebar = document.getElementById('img--sidebar'),
      imgContent = document.getElementById('img--content');

  imgSidebar.addEventListener('load', imgLoaded, false);
  imgContent.addEventListener('load', imgLoaded, false);

  function imgLoaded() {
    imgsLoaded++;
    if (imgsLoaded == 2) {
      doMeta();
    }
  }
  
  function doMeta() {

    var dppx = window.devicePixelRatio || 0,
        mq600 = window.matchMedia("(max-width: 600px)"),
        mq1000 = window.matchMedia("(max-width: 1000px)"),
        screenWidth = document.documentElement.clientWidth,
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

    // populate meta
    document.getElementById('js-meta-1').innerHTML = dppx;
    document.getElementById('js-meta-2').innerHTML = screenWidth;
    document.getElementById('js-meta-3').innerHTML = imgSidebar.width;
    document.getElementById('js-meta-4').innerHTML = sizesSidebar;
    document.getElementById('js-meta-5').innerHTML = sizesSidebar * dppx;
    document.getElementById('js-meta-6').innerHTML = imgContent.width;
    document.getElementById('js-meta-7').innerHTML = sizesContent;
    document.getElementById('js-meta-8').innerHTML = sizesContent * dppx;
  }

  window.onresize = function(){
    document.getElementById('notice').style.display = "block";
  }

})();