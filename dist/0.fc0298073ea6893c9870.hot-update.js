webpackHotUpdate(0,{

/***/ 16:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/kevin/Projects/quadrados/node_modules/cache-loader/dist/cjs.js!/Users/kevin/Projects/quadrados/node_modules/css-loader?{"sourceMap":true}!/Users/kevin/Projects/quadrados/node_modules/postcss-loader/lib?{"config":{"path":"/Users/kevin/Projects/quadrados/resources/assets/build","ctx":{"open":true,"copy":"images/**_/*","proxyUrl":"http://localhost:3960","cacheBusting":"[name]_[hash:8]","paths":{"root":"/Users/kevin/Projects/quadrados","assets":"/Users/kevin/Projects/quadrados/resources/assets","dist":"/Users/kevin/Projects/quadrados/dist"},"enabled":{"sourceMaps":true,"optimize":false,"cacheBusting":false,"watcher":true},"watch":["app/**_/*.php","config/**_/*.php","resources/views/**_/*.php"],"entry":{"main":["./scripts/main.js","./styles/style.scss"],"customizer":["./scripts/customizer.js"]},"publicPath":"/wp-content/themes/quadrados/dist/dist/","devUrl":"http://kevincarmonamurphy.local:8000","env":{"production":false,"development":true},"manifest":{}}},"sourceMap":true}!/Users/kevin/Projects/quadrados/node_modules/resolve-url-loader?{"sourceMap":true}!/Users/kevin/Projects/quadrados/node_modules/sass-loader/lib/loader.js?{"sourceMap":true}!/Users/kevin/Projects/quadrados/node_modules/import-glob!./styles/style.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ 25);
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ 26)(true);
// imports


// module
exports.push([module.i, "/** Import everything from autoload */\n\n/**\n * Import npm dependencies\n *\n * Prefix your imports with `~` to grab from node_modules/\n * @see https://github.com/webpack-contrib/sass-loader#imports\n */\n\n/** Import theme styles */\n\n/** Common */\n\n/** Colors */\n\n/** Box Model  */\n\n/** Background Colours */\n\nhtml {\n  background-color: #f0f0f0;\n  height: 100%;\n  margin: 0 !important;\n}\n\nbody {\n  margin: 0 auto;\n  padding: 0;\n  height: 100%;\n  max-width: 1280px;\n}\n\n[role=document] {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nmain {\n  padding: 25px;\n  overflow-y: scroll;\n  width: 100%;\n}\n\nheader.container {\n  display: block;\n}\n\n@media (min-width: 768px) {\n  header.container {\n    display: none;\n  }\n}\n\naside.sidebar {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  aside.sidebar {\n    display: block;\n  }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nspan,\np,\na,\ninput,\ntime {\n  font-family: 'Fira Mono', monospace;\n  font-weight: normal;\n  color: #252525;\n}\n\nh1 {\n  font-size: 5vw;\n}\n\nh2 {\n  font-size: 4vw;\n}\n\nh3,\ninput {\n  font-size: 3vw;\n}\n\nh4 {\n  font-size: 2vw;\n}\n\nh5 {\n  font-size: 1vw;\n}\n\nh6 {\n  font-size: 0.5vw;\n}\n\np {\n  font-size: 1.8vw;\n}\n\n/** Layouts */\n\naside.sidebar {\n  background-color: white;\n  width: 350px;\n  overflow-y: scroll;\n}\n\n.sidebar-container {\n  margin: 30px;\n}\n\n.name-stacked {\n  margin-bottom: 30px;\n}\n\n.name-stacked h1 {\n  z-index: 5;\n  position: relative;\n  margin: 15px 0;\n  margin-top: -45px;\n}\n\n.name-stacked .grey-square {\n  height: 45px;\n  width: 45px;\n  background-color: #f0f0f0;\n}\n\n.entry-meta {\n  margin-bottom: 25px;\n}\n\narticle img.full-width {\n  width: 100%;\n}\n\nbody#tinymce {\n  margin: 12px !important;\n}\n\nheader.section-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  margin-bottom: 20px;\n}\n\narticle .thumbnail img {\n  width: 100%;\n  height: auto;\n}\n\nh2,\np {\n  margin-bottom: 10px;\n}\n\n.initials-horizontal {\n  display: inline-block;\n}\n\n.initials-horizontal h1 {\n  z-index: 5;\n  position: relative;\n}\n\n.initials-horizontal .grey-square {\n  height: 45px;\n  width: 45px;\n  background-color: #f0f0f0;\n  margin: 0 8px;\n  display: inline-block;\n}\n\n.initials-horizontal .grey-square:first-of-type {\n  margin-left: 0;\n}\n\n.nav-menu {\n  display: none;\n}\n\n.hamburger-menu {\n  float: right;\n  display: inline-block;\n  width: 45px;\n  height: 45px;\n  background-color: #f0f0f0;\n}\n\n.hamburger-menu div {\n  height: 95%;\n  width: 100%;\n  cursor: pointer;\n}\n\n.hamburger-menu .closed {\n  background: url(" + escape(__webpack_require__(/*! ../images/icons8-menu.png */ 27)) + ") no-repeat center center;\n}\n\n.hamburger-menu .open {\n  display: none;\n  background: url(" + escape(__webpack_require__(/*! ../images/icons8-delete_sign.png */ 28)) + ") no-repeat center center;\n}\n\nheader.container {\n  background-color: white;\n  padding: 0 25px;\n}\n\n.sidebar-section {\n  margin: 25px 0;\n}\n\n.sidebar-section h3 {\n  margin: 6px 0;\n}\n\n.social-icons {\n  padding-bottom: 25px;\n}\n\na:hover > h3 {\n  background-color: #f0f0f0;\n}\n\ninput[type=search] {\n  background-color: white;\n  background-image: url(" + escape(__webpack_require__(/*! ../images/icons8-search.png */ 29)) + ");\n  background-position: 10px 10px;\n  background-repeat: no-repeat;\n  padding-left: 40px;\n  height: 45px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border: 1px solid black;\n  width: 100%;\n}\n\ninput[type=submit] {\n  height: 45px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border: 1px solid black;\n  border-left: 0;\n  padding: 0 10px;\n  cursor: pointer;\n}\n\nform[role=search] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nform[role=search] label {\n  width: 100%;\n}\n\n.social-icons a {\n  text-decoration: none;\n}\n\n/** Components */\n\n.articles,\n.portfolio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: wrap;\n      flex-flow: wrap;\n  margin-bottom: 20px;\n}\n\n.articles .article-tile-container,\n.portfolio .article-tile-container {\n  padding: 20px;\n  background-color: white;\n  border: 1px solid #bbb;\n  margin: 0 10px;\n  margin-bottom: 20px;\n}\n\n@media (max-width: 480px) {\n  .articles article,\n  .portfolio article {\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n  }\n\n  .articles article .article-tile-container,\n  .portfolio article .article-tile-container {\n    margin-left: 0;\n    margin-right: 0;\n  }\n}\n\n@media (min-width: 480px) and (max-width: 1023px) {\n  .articles article,\n  .portfolio article {\n    -ms-flex-preferred-size: 50%;\n        flex-basis: 50%;\n  }\n\n  .articles article:nth-child(2n+1) .article-tile-container,\n  .portfolio article:nth-child(2n+1) .article-tile-container {\n    margin-left: 0;\n  }\n\n  .articles article:nth-child(2n) .article-tile-container,\n  .portfolio article:nth-child(2n) .article-tile-container {\n    margin-right: 0;\n  }\n}\n\n@media (min-width: 1024px) {\n  .articles article,\n  .portfolio article {\n    -ms-flex-preferred-size: 33.33%;\n        flex-basis: 33.33%;\n  }\n\n  .articles article:nth-child(3n+1) .article-tile-container,\n  .portfolio article:nth-child(3n+1) .article-tile-container {\n    margin-left: 0;\n  }\n\n  .articles article:nth-child(3n) .article-tile-container,\n  .portfolio article:nth-child(3n) .article-tile-container {\n    margin-right: 0;\n  }\n}\n\narticle .thumbnail img {\n  width: 100%;\n  height: auto;\n}\n\n/** Search form */\n\n/**\n * WordPress Generated Classes\n * @see http://codex.wordpress.org/CSS#WordPress_Generated_Classes\n */\n\n/** Media alignment */\n\n.alignnone {\n  margin-left: 0;\n  margin-right: 0;\n  max-width: 100%;\n  height: auto;\n}\n\n.aligncenter {\n  display: block;\n  margin: 1rem auto;\n  height: auto;\n}\n\n.alignleft,\n.alignright {\n  margin-bottom: 1rem;\n  height: auto;\n}\n\n@media (min-width: 30rem) {\n  .alignleft {\n    float: left;\n    margin-right: 1rem;\n  }\n\n  .alignright {\n    float: right;\n    margin-left: 1rem;\n  }\n}\n\n/** Captions */\n\n/** Text meant only for screen readers */\n\n.screen-reader-text {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  color: #000;\n  background: #fff;\n}\n\n.page-header,\n.alert {\n  margin-bottom: 20px;\n}\n\n", "", {"version":3,"sources":["/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/style.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/style.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/common/_variables.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/common/_global.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/common/_media-queries.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/layouts/_sidebar.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/layouts/_pages.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/layouts/_posts.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/layouts/_tinymce.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/layouts/_index.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/layouts/_mobile-menu.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/layouts/_nav-menu.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/components/_article-tile.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/components/_forms.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/components/_wp-classes.scss"],"names":[],"mappings":"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","file":"style.scss","sourcesContent":["/** Import everything from autoload */\n;\n\n/**\n * Import npm dependencies\n *\n * Prefix your imports with `~` to grab from node_modules/\n * @see https://github.com/webpack-contrib/sass-loader#imports\n */\n// @import \"~some-node-module\";\n\n/** Import theme styles */\n\n/** Common */\n@import \"common/variables\";\n@import \"common/media-queries\";\n@import \"common/global\";\n\n/** Layouts */\n@import \"layouts/sidebar\";\n@import \"layouts/footer\";\n@import \"layouts/pages\";\n@import \"layouts/posts\";\n@import \"layouts/tinymce\";\n@import \"layouts/index\";\n@import \"layouts/mobile-menu\";\n@import \"layouts/nav-menu\";\n\n/** Components */\n@import \"components/article-tile\";\n@import \"components/buttons\";\n@import \"components/comments\";\n@import \"components/forms\";\n@import \"components/wp-classes\";\n","/** Import everything from autoload */\n\n/**\n * Import npm dependencies\n *\n * Prefix your imports with `~` to grab from node_modules/\n * @see https://github.com/webpack-contrib/sass-loader#imports\n */\n\n/** Import theme styles */\n\n/** Common */\n\n/** Colors */\n\n/** Box Model  */\n\n/** Background Colours */\n\nhtml {\n  background-color: #f0f0f0;\n  height: 100%;\n  margin: 0 !important;\n}\n\nbody {\n  margin: 0 auto;\n  padding: 0;\n  height: 100%;\n  max-width: 1280px;\n}\n\n[role=document] {\n  height: 100%;\n  display: flex;\n}\n\nmain {\n  padding: 25px;\n  overflow-y: scroll;\n  width: 100%;\n}\n\nheader.container {\n  display: block;\n}\n\n@media (min-width: 768px) {\n  header.container {\n    display: none;\n  }\n}\n\naside.sidebar {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  aside.sidebar {\n    display: block;\n  }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nspan,\np,\na,\ninput,\ntime {\n  font-family: 'Fira Mono', monospace;\n  font-weight: normal;\n  color: #252525;\n}\n\nh1 {\n  font-size: 5vw;\n}\n\nh2 {\n  font-size: 4vw;\n}\n\nh3,\ninput {\n  font-size: 3vw;\n}\n\nh4 {\n  font-size: 2vw;\n}\n\nh5 {\n  font-size: 1vw;\n}\n\nh6 {\n  font-size: 0.5vw;\n}\n\np {\n  font-size: 1.8vw;\n}\n\n/** Layouts */\n\naside.sidebar {\n  background-color: white;\n  width: 350px;\n  overflow-y: scroll;\n}\n\n.sidebar-container {\n  margin: 30px;\n}\n\n.name-stacked {\n  margin-bottom: 30px;\n}\n\n.name-stacked h1 {\n  z-index: 5;\n  position: relative;\n  margin: 15px 0;\n  margin-top: -45px;\n}\n\n.name-stacked .grey-square {\n  height: 45px;\n  width: 45px;\n  background-color: #f0f0f0;\n}\n\n.entry-meta {\n  margin-bottom: 25px;\n}\n\narticle img.full-width {\n  width: 100%;\n}\n\nbody#tinymce {\n  margin: 12px !important;\n}\n\nheader.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 20px;\n}\n\narticle .thumbnail img {\n  width: 100%;\n  height: auto;\n}\n\nh2,\np {\n  margin-bottom: 10px;\n}\n\n.initials-horizontal {\n  display: inline-block;\n}\n\n.initials-horizontal h1 {\n  z-index: 5;\n  position: relative;\n}\n\n.initials-horizontal .grey-square {\n  height: 45px;\n  width: 45px;\n  background-color: #f0f0f0;\n  margin: 0 8px;\n  display: inline-block;\n}\n\n.initials-horizontal .grey-square:first-of-type {\n  margin-left: 0;\n}\n\n.nav-menu {\n  display: none;\n}\n\n.hamburger-menu {\n  float: right;\n  display: inline-block;\n  width: 45px;\n  height: 45px;\n  background-color: #f0f0f0;\n}\n\n.hamburger-menu div {\n  height: 95%;\n  width: 100%;\n  cursor: pointer;\n}\n\n.hamburger-menu .closed {\n  background: url(\"../images/icons8-menu.png\") no-repeat center center;\n}\n\n.hamburger-menu .open {\n  display: none;\n  background: url(\"../images/icons8-delete_sign.png\") no-repeat center center;\n}\n\nheader.container {\n  background-color: white;\n  padding: 0 25px;\n}\n\n.sidebar-section {\n  margin: 25px 0;\n}\n\n.sidebar-section h3 {\n  margin: 6px 0;\n}\n\n.social-icons {\n  padding-bottom: 25px;\n}\n\na:hover > h3 {\n  background-color: #f0f0f0;\n}\n\ninput[type=search] {\n  background-color: white;\n  background-image: url(\"../images/icons8-search.png\");\n  background-position: 10px 10px;\n  background-repeat: no-repeat;\n  padding-left: 40px;\n  height: 45px;\n  box-sizing: border-box;\n  border: 1px solid black;\n  width: 100%;\n}\n\ninput[type=submit] {\n  height: 45px;\n  box-sizing: border-box;\n  border: 1px solid black;\n  border-left: 0;\n  padding: 0 10px;\n  cursor: pointer;\n}\n\nform[role=search] {\n  display: flex;\n}\n\nform[role=search] label {\n  width: 100%;\n}\n\n.social-icons a {\n  text-decoration: none;\n}\n\n/** Components */\n\n.articles,\n.portfolio {\n  display: flex;\n  flex-flow: wrap;\n  margin-bottom: 20px;\n}\n\n.articles .article-tile-container,\n.portfolio .article-tile-container {\n  padding: 20px;\n  background-color: white;\n  border: 1px solid #bbb;\n  margin: 0 10px;\n  margin-bottom: 20px;\n}\n\n@media (max-width: 480px) {\n  .articles article,\n  .portfolio article {\n    flex-basis: 100%;\n  }\n\n  .articles article .article-tile-container,\n  .portfolio article .article-tile-container {\n    margin-left: 0;\n    margin-right: 0;\n  }\n}\n\n@media (min-width: 480px) and (max-width: 1023px) {\n  .articles article,\n  .portfolio article {\n    flex-basis: 50%;\n  }\n\n  .articles article:nth-child(2n+1) .article-tile-container,\n  .portfolio article:nth-child(2n+1) .article-tile-container {\n    margin-left: 0;\n  }\n\n  .articles article:nth-child(2n) .article-tile-container,\n  .portfolio article:nth-child(2n) .article-tile-container {\n    margin-right: 0;\n  }\n}\n\n@media (min-width: 1024px) {\n  .articles article,\n  .portfolio article {\n    flex-basis: 33.33%;\n  }\n\n  .articles article:nth-child(3n+1) .article-tile-container,\n  .portfolio article:nth-child(3n+1) .article-tile-container {\n    margin-left: 0;\n  }\n\n  .articles article:nth-child(3n) .article-tile-container,\n  .portfolio article:nth-child(3n) .article-tile-container {\n    margin-right: 0;\n  }\n}\n\narticle .thumbnail img {\n  width: 100%;\n  height: auto;\n}\n\n/** Search form */\n\n/**\n * WordPress Generated Classes\n * @see http://codex.wordpress.org/CSS#WordPress_Generated_Classes\n */\n\n/** Media alignment */\n\n.alignnone {\n  margin-left: 0;\n  margin-right: 0;\n  max-width: 100%;\n  height: auto;\n}\n\n.aligncenter {\n  display: block;\n  margin: 1rem auto;\n  height: auto;\n}\n\n.alignleft,\n.alignright {\n  margin-bottom: 1rem;\n  height: auto;\n}\n\n@media (min-width: 30rem) {\n  .alignleft {\n    float: left;\n    margin-right: 1rem;\n  }\n\n  .alignright {\n    float: right;\n    margin-left: 1rem;\n  }\n}\n\n/** Captions */\n\n/** Text meant only for screen readers */\n\n.screen-reader-text {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  color: #000;\n  background: #fff;\n}\n\n.page-header,\n.alert {\n  margin-bottom: 20px;\n}\n\n","/** Colors */\n$brand-primary:         #27ae60;\n\n/** Box Model  */\n$spacer:                2rem;\n\n/** Background Colours */\n$background-grey:     #f0f0f0;\n","html {\n  background-color: $background-grey;\n  height: 100%;\n  margin: 0 !important;\n}\n\nbody {\n  margin: 0 auto;\n  padding: 0;\n  height: 100%;\n  max-width: 1280px;\n}\n\n[role=document] {\n  height: 100%;\n  display: flex;\n}\n\nmain {\n  padding: 25px;\n  overflow-y: scroll;\n  width: 100%;\n}\n\nheader.container {\n  display: block;\n\n  @include sidebar-breakpoint {\n    display: none;\n  }\n}\n\naside.sidebar {\n  display: none;\n\n  @include sidebar-breakpoint {\n    display: block;\n  }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nspan,\np,\na,\ninput,\ntime {\n  font-family: 'Fira Mono', monospace;\n  font-weight: normal;\n  color: #252525;\n}\n\nh1 {\n  font-size: 5vw;\n}\n\nh2 {\n  font-size: 4vw;\n}\n\nh3,\ninput {\n  font-size: 3vw;\n}\n\nh4 {\n  font-size: 2vw;\n}\n\nh5 {\n  font-size: 1vw;\n}\n\nh6 {\n  font-size: 0.5vw;\n}\n\np {\n  font-size: 1.8vw;\n}\n\n","$phone-width: 480px;\n$tablet-width: 768px;\n$desktop-width: 1024px;\n\n@mixin phone {\n  @media (max-width: #{$phone-width}) {\n    @content;\n  }\n}\n\n@mixin tablet {\n  @media (min-width: #{$phone-width}) and (max-width: #{$desktop-width - 1px}) {\n    @content;\n  }\n}\n\n@mixin desktop {\n  @media (min-width: #{$desktop-width}) {\n    @content;\n  }\n}\n\n@mixin sidebar-breakpoint {\n  @media (min-width: #{$tablet-width}) {\n    @content;\n  }\n}\n","aside.sidebar {\n  background-color: white;\n  width: 350px;\n  overflow-y: scroll;\n}\n\n.sidebar-container {\n  margin: 30px;\n}\n\n.name-stacked {\n  h1 {\n    z-index: 5;\n    position: relative;\n    margin: 15px 0;\n    margin-top: -45px;\n  }\n\n  .grey-square {\n    height: 45px;\n    width: 45px;\n    background-color: $background-grey;\n  }\n\n  margin-bottom: 30px;\n}\n",".entry-meta {\n  margin-bottom: 25px;\n}\n","article img.full-width {\n  width: 100%;\n}\n","body#tinymce {\n  margin: 12px !important;\n}\n","header.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 20px;\n}\n\narticle .thumbnail img {\n  width: 100%;\n  height: auto;\n}\n\nh2,\np {\n  margin-bottom: 10px;\n}\n",".initials-horizontal {\n  display: inline-block;\n\n  h1 {\n    z-index: 5;\n    position: relative;\n  }\n\n  .grey-square {\n    height: 45px;\n    width: 45px;\n    background-color: $background-grey;\n    margin: 0 8px;\n    display: inline-block;\n  }\n\n  .grey-square:first-of-type {\n    margin-left: 0;\n  }\n}\n\n.nav-menu {\n  display: none;\n}\n\n.hamburger-menu {\n  float: right;\n  display: inline-block;\n  width: 45px;\n  height: 45px;\n  background-color: $background-grey;\n\n  div {\n    height: 95%;\n    width: 100%;\n    cursor: pointer;\n  }\n\n  .closed {\n    background: url('../images/icons8-menu.png') no-repeat center center;\n  }\n\n  .open {\n    display: none;\n    background: url('../images/icons8-delete_sign.png') no-repeat center center;\n  }\n}\n\nheader.container {\n  background-color: white;\n  padding: 0 25px;\n}\n",".sidebar-section {\n  margin: 25px 0;\n\n  h3 {\n    margin: 6px 0;\n  }\n}\n\n.social-icons {\n  padding-bottom: 25px;\n}\n\na:hover > h3 {\n  background-color: $background-grey;\n}\n\ninput[type=search] {\n  background-color: white;\n  background-image: url('../images/icons8-search.png');\n  background-position: 10px 10px;\n  background-repeat: no-repeat;\n  padding-left: 40px;\n  height: 45px;\n  box-sizing: border-box;\n  border: 1px solid black;\n  width: 100%;\n}\n\ninput[type=submit] {\n  height: 45px;\n  box-sizing: border-box;\n  border: 1px solid black;\n  border-left: 0;\n  padding: 0 10px;\n  cursor: pointer;\n}\n\nform[role=search] {\n  display: flex;\n\n  label {\n    width: 100%;\n  }\n}\n\n.social-icons a {\n  text-decoration: none;\n}\n",".articles,\n.portfolio {\n  display: flex;\n  flex-flow: wrap;\n  margin-bottom: 20px;\n\n  .article-tile-container {\n    padding: 20px;\n    background-color: white;\n    border: 1px solid #bbb;\n    margin: 0 10px;\n    margin-bottom: 20px;\n  }\n\n  @include phone {\n    article {\n      flex-basis: 100%;\n\n      .article-tile-container {\n        margin-left: 0;\n        margin-right: 0;\n      }\n    }\n  }\n\n  @include tablet {\n    article {\n      flex-basis: 50%;\n    }\n\n    article:nth-child(2n+1) .article-tile-container {\n      margin-left: 0;\n    }\n\n    article:nth-child(2n) .article-tile-container {\n      margin-right: 0;\n    }\n  }\n\n  @include desktop {\n    article {\n      flex-basis: 33.33%;\n    }\n\n    article:nth-child(3n+1) .article-tile-container {\n      margin-left: 0;\n    }\n\n    article:nth-child(3n) .article-tile-container {\n      margin-right: 0;\n    }\n  }\n}\n\narticle .thumbnail img {\n  width: 100%;\n  height: auto;\n}\n","/** Search form */\n// TODO: .search-form {}\n// TODO: .search-form label {}\n// TODO: .search-form .search-field {}\n// TODO: .search-form .search-submit {}\n","/**\n * WordPress Generated Classes\n * @see http://codex.wordpress.org/CSS#WordPress_Generated_Classes\n */\n\n/** Media alignment */\n.alignnone {\n  margin-left: 0;\n  margin-right: 0;\n  max-width: 100%;\n  height: auto;\n}\n\n.aligncenter {\n  display: block;\n  margin: ($spacer / 2) auto;\n  height: auto;\n}\n\n.alignleft,\n.alignright {\n  margin-bottom: ($spacer / 2);\n  height: auto;\n}\n\n@media (min-width: 30rem) {\n  .alignleft {\n    float: left;\n    margin-right: ($spacer / 2);\n  }\n\n  .alignright {\n    float: right;\n    margin-left: ($spacer / 2);\n  }\n}\n\n/** Captions */\n\n// TODO: .wp-caption {}\n// TODO: .wp-caption img {}\n// TODO: .wp-caption-text {}\n\n/** Text meant only for screen readers */\n.screen-reader-text {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  color: #000;\n  background: #fff;\n}\n\n.page-header,\n.alert {\n  margin-bottom: 20px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

})
//# sourceMappingURL=0.fc0298073ea6893c9870.hot-update.js.map