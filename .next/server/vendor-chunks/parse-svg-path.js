/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/parse-svg-path";
exports.ids = ["vendor-chunks/parse-svg-path"];
exports.modules = {

/***/ "(ssr)/./node_modules/parse-svg-path/index.js":
/*!**********************************************!*\
  !*** ./node_modules/parse-svg-path/index.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\nmodule.exports = parse\n\n/**\n * expected argument lengths\n * @type {Object}\n */\n\nvar length = {a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0}\n\n/**\n * segment pattern\n * @type {RegExp}\n */\n\nvar segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig\n\n/**\n * parse an svg path data string. Generates an Array\n * of commands where each command is an Array of the\n * form `[command, arg1, arg2, ...]`\n *\n * @param {String} path\n * @return {Array}\n */\n\nfunction parse(path) {\n\tvar data = []\n\tpath.replace(segment, function(_, command, args){\n\t\tvar type = command.toLowerCase()\n\t\targs = parseValues(args)\n\n\t\t// overloaded moveTo\n\t\tif (type == 'm' && args.length > 2) {\n\t\t\tdata.push([command].concat(args.splice(0, 2)))\n\t\t\ttype = 'l'\n\t\t\tcommand = command == 'm' ? 'l' : 'L'\n\t\t}\n\n\t\twhile (true) {\n\t\t\tif (args.length == length[type]) {\n\t\t\t\targs.unshift(command)\n\t\t\t\treturn data.push(args)\n\t\t\t}\n\t\t\tif (args.length < length[type]) throw new Error('malformed path data')\n\t\t\tdata.push([command].concat(args.splice(0, length[type])))\n\t\t}\n\t})\n\treturn data\n}\n\nvar number = /-?[0-9]*\\.?[0-9]+(?:e[-+]?\\d+)?/ig\n\nfunction parseValues(args) {\n\tvar numbers = args.match(number)\n\treturn numbers ? numbers.map(Number) : []\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGFyc2Utc3ZnLXBhdGgvaW5kZXguanMiLCJtYXBwaW5ncyI6IjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUEsY0FBYzs7QUFFZDtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9wYXJzZS1zdmctcGF0aC9pbmRleC5qcz9hYmI3Il0sInNvdXJjZXNDb250ZW50IjpbIlxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVxuXG4vKipcbiAqIGV4cGVjdGVkIGFyZ3VtZW50IGxlbmd0aHNcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cblxudmFyIGxlbmd0aCA9IHthOiA3LCBjOiA2LCBoOiAxLCBsOiAyLCBtOiAyLCBxOiA0LCBzOiA0LCB0OiAyLCB2OiAxLCB6OiAwfVxuXG4vKipcbiAqIHNlZ21lbnQgcGF0dGVyblxuICogQHR5cGUge1JlZ0V4cH1cbiAqL1xuXG52YXIgc2VnbWVudCA9IC8oW2FzdHZ6cW1obGNdKShbXmFzdHZ6cW1obGNdKikvaWdcblxuLyoqXG4gKiBwYXJzZSBhbiBzdmcgcGF0aCBkYXRhIHN0cmluZy4gR2VuZXJhdGVzIGFuIEFycmF5XG4gKiBvZiBjb21tYW5kcyB3aGVyZSBlYWNoIGNvbW1hbmQgaXMgYW4gQXJyYXkgb2YgdGhlXG4gKiBmb3JtIGBbY29tbWFuZCwgYXJnMSwgYXJnMiwgLi4uXWBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxuZnVuY3Rpb24gcGFyc2UocGF0aCkge1xuXHR2YXIgZGF0YSA9IFtdXG5cdHBhdGgucmVwbGFjZShzZWdtZW50LCBmdW5jdGlvbihfLCBjb21tYW5kLCBhcmdzKXtcblx0XHR2YXIgdHlwZSA9IGNvbW1hbmQudG9Mb3dlckNhc2UoKVxuXHRcdGFyZ3MgPSBwYXJzZVZhbHVlcyhhcmdzKVxuXG5cdFx0Ly8gb3ZlcmxvYWRlZCBtb3ZlVG9cblx0XHRpZiAodHlwZSA9PSAnbScgJiYgYXJncy5sZW5ndGggPiAyKSB7XG5cdFx0XHRkYXRhLnB1c2goW2NvbW1hbmRdLmNvbmNhdChhcmdzLnNwbGljZSgwLCAyKSkpXG5cdFx0XHR0eXBlID0gJ2wnXG5cdFx0XHRjb21tYW5kID0gY29tbWFuZCA9PSAnbScgPyAnbCcgOiAnTCdcblx0XHR9XG5cblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0aWYgKGFyZ3MubGVuZ3RoID09IGxlbmd0aFt0eXBlXSkge1xuXHRcdFx0XHRhcmdzLnVuc2hpZnQoY29tbWFuZClcblx0XHRcdFx0cmV0dXJuIGRhdGEucHVzaChhcmdzKVxuXHRcdFx0fVxuXHRcdFx0aWYgKGFyZ3MubGVuZ3RoIDwgbGVuZ3RoW3R5cGVdKSB0aHJvdyBuZXcgRXJyb3IoJ21hbGZvcm1lZCBwYXRoIGRhdGEnKVxuXHRcdFx0ZGF0YS5wdXNoKFtjb21tYW5kXS5jb25jYXQoYXJncy5zcGxpY2UoMCwgbGVuZ3RoW3R5cGVdKSkpXG5cdFx0fVxuXHR9KVxuXHRyZXR1cm4gZGF0YVxufVxuXG52YXIgbnVtYmVyID0gLy0/WzAtOV0qXFwuP1swLTldKyg/OmVbLStdP1xcZCspPy9pZ1xuXG5mdW5jdGlvbiBwYXJzZVZhbHVlcyhhcmdzKSB7XG5cdHZhciBudW1iZXJzID0gYXJncy5tYXRjaChudW1iZXIpXG5cdHJldHVybiBudW1iZXJzID8gbnVtYmVycy5tYXAoTnVtYmVyKSA6IFtdXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/parse-svg-path/index.js\n");

/***/ })

};
;