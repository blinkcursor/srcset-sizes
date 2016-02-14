;(function(){

	var testing = {

		init: function(){

			this.cacheVars();
			this.bindEvents();

			this.showPageMeta();
			this.showTestMeta();

		},

		cacheVars: function(){
			this.dppx = window.devicePixelRatio || 1;
			this.elButton = document.querySelector('button');
		},

		bindEvents: function(){
			window.addEventListener('resize', this.showPageMeta.bind(this), false);
			window.addEventListener('resize', this.showTestMeta.bind(this), false);
			if (this.elButton) {
				this.elButton.addEventListener('click', this.cloneImg, false);
			}
		},

		showPageMeta: function(){
			// show screen width
			var elWidth = document.querySelector('.js-width--screen');
			elWidth.innerHTML = document.documentElement.clientWidth;
			// show dppx
			var elDppx = document.querySelector('.js-dppx');
			elDppx.innerHTML = this.dppx;
		},

		showTestMeta: function(){
			var elsTest = document.querySelectorAll('.test');
			for (var i = 0; i < elsTest.length; ++i) { // loop over each test

				// fill code block
				var elCode = elsTest[i].querySelector('.js-code');
				var elImg = elsTest[i].querySelector('img');
				elCode.innerHTML = htmlEncode(elImg.outerHTML);

				// show container width in CSS px
				var elCSS = elsTest[i].querySelector('.js-width--css'),
					cssWidth = elsTest[i].clientWidth;
				elCSS.innerHTML = cssWidth;

				// show container width in display pixels
				var elDppx = elsTest[i].querySelector('.js-width--dppx'),
					dppxWidth = this.dppx * cssWidth;

				elDppx.innerHTML = dppxWidth;

				// highlight expected srcset
				var elsExpected = elsTest[i].querySelectorAll('.meta__expected > span');
				for (var j = 0; j < elsExpected.length; ++j) { // loop over sizes 300,500,700,1200
					var currentSize = elsExpected[j].textContent;
					if ( currentSize >= dppxWidth || j === elsExpected.length - 1 ) {
						elsExpected[j].classList.add('expected');
						break;
					}
				}
			}
		},

		cloneImg: function(){
			var elClone = document.querySelector('.clone-wrapper'),
				newImg = document.querySelector('.width-33 > img').cloneNode(true);
			newImg.setAttribute('sizes', '50vw');
			// add newImg with updated sizes to the DOM
			elClone.appendChild(newImg);
		}
	}
	testing.init();


	/* helper functions */
	function htmlEncode( html ) {
	    return document.createElement( 'a' ).appendChild( 
	        document.createTextNode( html ) ).parentNode.innerHTML;
	};
})()