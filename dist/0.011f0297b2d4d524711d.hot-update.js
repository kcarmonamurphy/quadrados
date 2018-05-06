webpackHotUpdate(0,{

/***/ 21:
/*!**********************************!*\
  !*** ./scripts/routes/common.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery, $) {/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
    // JavaScript to be fired on all pages

    /* eslint-disable */
    !function(a){"use strict";a.fn.succinct=function(b){var c=a.extend({size:240,omission:"...",ignore:!0},b);return this.each(function(){var b,d,e=a(this),f=/[!-\/:-@\[-`{-~]$/,g=function(){e.each(function(){b=a(this).html(),b.length>c.size&&(d=a.trim(b).substring(0,c.size).split(" ").slice(0,-1).join(" "),c.ignore&&(d=d.replace(f,"")),a(this).html(d+c.omission))})};g()})}}(jQuery);
    /* eslint-enable */

    $('.hamburger-menu').click(function() {
      $('.closed').toggle();
      $('.open').toggle();
      $('.nav-menu').toggle();
    });

    $('.truncate').succinct({
      size: 30,
    });
  },
  finalize: function finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ 1), __webpack_require__(/*! jquery */ 1)))

/***/ })

})
//# sourceMappingURL=0.011f0297b2d4d524711d.hot-update.js.map