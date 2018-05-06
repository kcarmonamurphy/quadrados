webpackHotUpdate(0,{

/***/ 16:
false,

/***/ 24:
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/cache-loader/dist/cjs.js!../../../node_modules/css-loader??ref--4-3!../../../node_modules/postcss-loader/lib??ref--4-4!../../../node_modules/resolve-url-loader??ref--4-5!../../../node_modules/sass-loader/lib/loader.js??ref--4-6!../../../node_modules/import-glob!./style.scss */ 34);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ 30)(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/cache-loader/dist/cjs.js!../../../node_modules/css-loader??ref--4-3!../../../node_modules/postcss-loader/lib??ref--4-4!../../../node_modules/resolve-url-loader??ref--4-5!../../../node_modules/sass-loader/lib/loader.js??ref--4-6!../../../node_modules/import-glob!./style.scss */ 34, function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/cache-loader/dist/cjs.js!../../../node_modules/css-loader??ref--4-3!../../../node_modules/postcss-loader/lib??ref--4-4!../../../node_modules/resolve-url-loader??ref--4-5!../../../node_modules/sass-loader/lib/loader.js??ref--4-6!../../../node_modules/import-glob!./style.scss */ 34);

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 25:
false,

/***/ 27:
false,

/***/ 28:
false,

/***/ 29:
false,

/***/ 34:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/kevin/Projects/quadrados/node_modules/cache-loader/dist/cjs.js!/Users/kevin/Projects/quadrados/node_modules/css-loader?{"sourceMap":true}!/Users/kevin/Projects/quadrados/node_modules/postcss-loader/lib?{"config":{"path":"/Users/kevin/Projects/quadrados/resources/assets/build","ctx":{"open":true,"copy":"images/**_/*","proxyUrl":"http://localhost:3960","cacheBusting":"[name]_[hash:8]","paths":{"root":"/Users/kevin/Projects/quadrados","assets":"/Users/kevin/Projects/quadrados/resources/assets","dist":"/Users/kevin/Projects/quadrados/dist"},"enabled":{"sourceMaps":true,"optimize":false,"cacheBusting":false,"watcher":true},"watch":["app/**_/*.php","config/**_/*.php","resources/views/**_/*.php","resources/scripts/*.js"],"entry":{"main":["./scripts/main.js","./styles/style.scss"],"customizer":["./scripts/customizer.js"]},"publicPath":"/wp-content/themes/quadrados/dist/dist/","devUrl":"http://kevincarmonamurphy.local:8000","env":{"production":false,"development":true},"manifest":{}}},"sourceMap":true}!/Users/kevin/Projects/quadrados/node_modules/resolve-url-loader?{"sourceMap":true,"absolute":false,"fail":false,"silent":false,"keepQuery":false,"attempts":0,"debug":false,"root":null,"includeRoot":false}!/Users/kevin/Projects/quadrados/node_modules/sass-loader/lib/loader.js?{"sourceMap":true}!/Users/kevin/Projects/quadrados/node_modules/import-glob!./styles/style.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ 26)(true);
// imports


// module
exports.push([module.i, "/** Import everything from autoload */\n\n/**\n * Import npm dependencies\n *\n * Prefix your imports with `~` to grab from node_modules/\n * @see https://github.com/webpack-contrib/sass-loader#imports\n */\n\n/** Import theme styles */\n\n/** Common */\n\n", "", {"version":3,"sources":["/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/style.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/style.scss"],"names":[],"mappings":"AAAA,sCAAA;;AAGA;;;;;GCIG;;ADIH,0BAAA;;AAEA,aAAA","file":"style.scss","sourcesContent":["/** Import everything from autoload */\n;\n\n/**\n * Import npm dependencies\n *\n * Prefix your imports with `~` to grab from node_modules/\n * @see https://github.com/webpack-contrib/sass-loader#imports\n */\n// @import \"~some-node-module\";\n\n/** Import theme styles */\n\n/** Common */\n// @import \"common/reset\";\n// @import \"common/variables\";\n// @import \"common/media-queries\";\n// @import \"common/fonts\";\n// @import \"common/global\";\n\n// /** Layouts */\n// @import \"layouts/sidebar\";\n// @import \"layouts/pages\";\n// @import \"layouts/posts\";\n// @import \"layouts/tinymce\";\n// @import \"layouts/index\";\n// @import \"layouts/mobile-menu\";\n// @import \"layouts/nav-menu\";\n\n// /** Components */\n// @import \"components/article-tile\";\n// @import \"components/buttons\";\n// @import \"components/comments\";\n// @import \"components/forms\";\n// @import \"components/wp-classes\";\n","/** Import everything from autoload */\n\n/**\n * Import npm dependencies\n *\n * Prefix your imports with `~` to grab from node_modules/\n * @see https://github.com/webpack-contrib/sass-loader#imports\n */\n\n/** Import theme styles */\n\n/** Common */\n\n"],"sourceRoot":""}]);

// exports


/***/ })

})
//# sourceMappingURL=0.15affcc87d0b37afa872.hot-update.js.map