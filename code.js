(function() {

  var dppx = window.devicePixelRatio || 0,
      meta = document.getElementById('meta'),
      mq = window.matchMedia("(max-width: 600px)"),
      screenWidth = document.documentElement.clientWidth,
      size;

  size = (mq.matches) ? "<= 600" : "> 600";

  meta.innerHTML =  "Device pixel ratio = " + dppx + "<br>" +
                    "Screen size of " + screenWidth + " is " + size;
})();