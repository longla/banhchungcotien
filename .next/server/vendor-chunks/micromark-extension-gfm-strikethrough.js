"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-extension-gfm-strikethrough";
exports.ids = ["vendor-chunks/micromark-extension-gfm-strikethrough"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/html.js":
/*!****************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-strikethrough/dev/lib/html.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmStrikethroughHtml: () => (/* binding */ gfmStrikethroughHtml)\n/* harmony export */ });\n/**\n * @import {HtmlExtension} from 'micromark-util-types'\n */\n\n/**\n * Create an HTML extension for `micromark` to support GFM strikethrough when\n * serializing to HTML.\n *\n * @returns {HtmlExtension}\n *   Extension for `micromark` that can be passed in `htmlExtensions`, to\n *   support GFM strikethrough when serializing to HTML.\n */\nfunction gfmStrikethroughHtml() {\n  return {\n    enter: {\n      strikethrough() {\n        this.tag('<del>')\n      }\n    },\n    exit: {\n      strikethrough() {\n        this.tag('</del>')\n      }\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tc3RyaWtldGhyb3VnaC9kZXYvbGliL2h0bWwuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsWUFBWSxlQUFlO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL2xvbmdsYS9jb2RlL2JhbmhjaHVuZ2NvdGllbi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tc3RyaWtldGhyb3VnaC9kZXYvbGliL2h0bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAaW1wb3J0IHtIdG1sRXh0ZW5zaW9ufSBmcm9tICdtaWNyb21hcmstdXRpbC10eXBlcydcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhbiBIVE1MIGV4dGVuc2lvbiBmb3IgYG1pY3JvbWFya2AgdG8gc3VwcG9ydCBHRk0gc3RyaWtldGhyb3VnaCB3aGVuXG4gKiBzZXJpYWxpemluZyB0byBIVE1MLlxuICpcbiAqIEByZXR1cm5zIHtIdG1sRXh0ZW5zaW9ufVxuICogICBFeHRlbnNpb24gZm9yIGBtaWNyb21hcmtgIHRoYXQgY2FuIGJlIHBhc3NlZCBpbiBgaHRtbEV4dGVuc2lvbnNgLCB0b1xuICogICBzdXBwb3J0IEdGTSBzdHJpa2V0aHJvdWdoIHdoZW4gc2VyaWFsaXppbmcgdG8gSFRNTC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdmbVN0cmlrZXRocm91Z2hIdG1sKCkge1xuICByZXR1cm4ge1xuICAgIGVudGVyOiB7XG4gICAgICBzdHJpa2V0aHJvdWdoKCkge1xuICAgICAgICB0aGlzLnRhZygnPGRlbD4nKVxuICAgICAgfVxuICAgIH0sXG4gICAgZXhpdDoge1xuICAgICAgc3RyaWtldGhyb3VnaCgpIHtcbiAgICAgICAgdGhpcy50YWcoJzwvZGVsPicpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/html.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/syntax.js":
/*!******************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-strikethrough/dev/lib/syntax.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmStrikethrough: () => (/* binding */ gfmStrikethrough)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devlop */ \"(rsc)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var micromark_util_chunked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-chunked */ \"(rsc)/./node_modules/micromark-util-chunked/dev/index.js\");\n/* harmony import */ var micromark_util_classify_character__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-util-classify-character */ \"(rsc)/./node_modules/micromark-util-classify-character/dev/index.js\");\n/* harmony import */ var micromark_util_resolve_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-resolve-all */ \"(rsc)/./node_modules/micromark-util-resolve-all/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/types.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/constants.js\");\n/**\n * @import {Options} from 'micromark-extension-gfm-strikethrough'\n * @import {Event, Extension, Resolver, State, Token, TokenizeContext, Tokenizer} from 'micromark-util-types'\n */\n\n\n\n\n\n\n\n/**\n * Create an extension for `micromark` to enable GFM strikethrough syntax.\n *\n * @param {Options | null | undefined} [options={}]\n *   Configuration.\n * @returns {Extension}\n *   Extension for `micromark` that can be passed in `extensions`, to\n *   enable GFM strikethrough syntax.\n */\nfunction gfmStrikethrough(options) {\n  const options_ = options || {}\n  let single = options_.singleTilde\n  const tokenizer = {\n    name: 'strikethrough',\n    tokenize: tokenizeStrikethrough,\n    resolveAll: resolveAllStrikethrough\n  }\n\n  if (single === null || single === undefined) {\n    single = true\n  }\n\n  return {\n    text: {[micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.tilde]: tokenizer},\n    insideSpan: {null: [tokenizer]},\n    attentionMarkers: {null: [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.tilde]}\n  }\n\n  /**\n   * Take events and resolve strikethrough.\n   *\n   * @type {Resolver}\n   */\n  function resolveAllStrikethrough(events, context) {\n    let index = -1\n\n    // Walk through all events.\n    while (++index < events.length) {\n      // Find a token that can close.\n      if (\n        events[index][0] === 'enter' &&\n        events[index][1].type === 'strikethroughSequenceTemporary' &&\n        events[index][1]._close\n      ) {\n        let open = index\n\n        // Now walk back to find an opener.\n        while (open--) {\n          // Find a token that can open the closer.\n          if (\n            events[open][0] === 'exit' &&\n            events[open][1].type === 'strikethroughSequenceTemporary' &&\n            events[open][1]._open &&\n            // If the sizes are the same:\n            events[index][1].end.offset - events[index][1].start.offset ===\n              events[open][1].end.offset - events[open][1].start.offset\n          ) {\n            events[index][1].type = 'strikethroughSequence'\n            events[open][1].type = 'strikethroughSequence'\n\n            /** @type {Token} */\n            const strikethrough = {\n              type: 'strikethrough',\n              start: Object.assign({}, events[open][1].start),\n              end: Object.assign({}, events[index][1].end)\n            }\n\n            /** @type {Token} */\n            const text = {\n              type: 'strikethroughText',\n              start: Object.assign({}, events[open][1].end),\n              end: Object.assign({}, events[index][1].start)\n            }\n\n            // Opening.\n            /** @type {Array<Event>} */\n            const nextEvents = [\n              ['enter', strikethrough, context],\n              ['enter', events[open][1], context],\n              ['exit', events[open][1], context],\n              ['enter', text, context]\n            ]\n\n            const insideSpan = context.parser.constructs.insideSpan.null\n\n            if (insideSpan) {\n              // Between.\n              (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_1__.splice)(\n                nextEvents,\n                nextEvents.length,\n                0,\n                (0,micromark_util_resolve_all__WEBPACK_IMPORTED_MODULE_2__.resolveAll)(insideSpan, events.slice(open + 1, index), context)\n              )\n            }\n\n            // Closing.\n            (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_1__.splice)(nextEvents, nextEvents.length, 0, [\n              ['exit', text, context],\n              ['enter', events[index][1], context],\n              ['exit', events[index][1], context],\n              ['exit', strikethrough, context]\n            ])\n\n            ;(0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_1__.splice)(events, open - 1, index - open + 3, nextEvents)\n\n            index = open + nextEvents.length - 2\n            break\n          }\n        }\n      }\n    }\n\n    index = -1\n\n    while (++index < events.length) {\n      if (events[index][1].type === 'strikethroughSequenceTemporary') {\n        events[index][1].type = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.data\n      }\n    }\n\n    return events\n  }\n\n  /**\n   * @this {TokenizeContext}\n   * @type {Tokenizer}\n   */\n  function tokenizeStrikethrough(effects, ok, nok) {\n    const previous = this.previous\n    const events = this.events\n    let size = 0\n\n    return start\n\n    /** @type {State} */\n    function start(code) {\n      ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.tilde, 'expected `~`')\n\n      if (\n        previous === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.tilde &&\n        events[events.length - 1][1].type !== micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.characterEscape\n      ) {\n        return nok(code)\n      }\n\n      effects.enter('strikethroughSequenceTemporary')\n      return more(code)\n    }\n\n    /** @type {State} */\n    function more(code) {\n      const before = (0,micromark_util_classify_character__WEBPACK_IMPORTED_MODULE_5__.classifyCharacter)(previous)\n\n      if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.tilde) {\n        // If this is the third marker, exit.\n        if (size > 1) return nok(code)\n        effects.consume(code)\n        size++\n        return more\n      }\n\n      if (size < 2 && !single) return nok(code)\n      const token = effects.exit('strikethroughSequenceTemporary')\n      const after = (0,micromark_util_classify_character__WEBPACK_IMPORTED_MODULE_5__.classifyCharacter)(code)\n      token._open =\n        !after || (after === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_6__.constants.attentionSideAfter && Boolean(before))\n      token._close =\n        !before || (before === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_6__.constants.attentionSideAfter && Boolean(after))\n      return ok(code)\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tc3RyaWtldGhyb3VnaC9kZXYvbGliL3N5bnRheC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCLFlBQVksc0VBQXNFO0FBQ2xGOztBQUVtQztBQUNVO0FBQ3NCO0FBQ2Q7QUFDUTs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0QkFBNEIsV0FBVztBQUNsRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsQ0FBQyx3REFBSyxtQkFBbUI7QUFDcEMsaUJBQWlCLGtCQUFrQjtBQUNuQyx1QkFBdUIsT0FBTyx3REFBSztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLG1DQUFtQztBQUNuQzs7QUFFQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyw4REFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0VBQVU7QUFDMUI7QUFDQTs7QUFFQTtBQUNBLFlBQVksOERBQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLCtEQUFNOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyx3REFBSztBQUNyQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZUFBZSxPQUFPO0FBQ3RCO0FBQ0EsTUFBTSwyQ0FBTSxVQUFVLHdEQUFLOztBQUUzQjtBQUNBLHFCQUFxQix3REFBSztBQUMxQiw4Q0FBOEMsd0RBQUs7QUFDbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLE9BQU87QUFDdEI7QUFDQSxxQkFBcUIsb0ZBQWlCOztBQUV0QyxtQkFBbUIsd0RBQUs7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isb0ZBQWlCO0FBQ3JDO0FBQ0EsNkJBQTZCLDREQUFTO0FBQ3RDO0FBQ0EsK0JBQStCLDREQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvbG9uZ2xhL2NvZGUvYmFuaGNodW5nY290aWVuL25vZGVfbW9kdWxlcy9taWNyb21hcmstZXh0ZW5zaW9uLWdmbS1zdHJpa2V0aHJvdWdoL2Rldi9saWIvc3ludGF4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGltcG9ydCB7T3B0aW9uc30gZnJvbSAnbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tc3RyaWtldGhyb3VnaCdcbiAqIEBpbXBvcnQge0V2ZW50LCBFeHRlbnNpb24sIFJlc29sdmVyLCBTdGF0ZSwgVG9rZW4sIFRva2VuaXplQ29udGV4dCwgVG9rZW5pemVyfSBmcm9tICdtaWNyb21hcmstdXRpbC10eXBlcydcbiAqL1xuXG5pbXBvcnQge29rIGFzIGFzc2VydH0gZnJvbSAnZGV2bG9wJ1xuaW1wb3J0IHtzcGxpY2V9IGZyb20gJ21pY3JvbWFyay11dGlsLWNodW5rZWQnXG5pbXBvcnQge2NsYXNzaWZ5Q2hhcmFjdGVyfSBmcm9tICdtaWNyb21hcmstdXRpbC1jbGFzc2lmeS1jaGFyYWN0ZXInXG5pbXBvcnQge3Jlc29sdmVBbGx9IGZyb20gJ21pY3JvbWFyay11dGlsLXJlc29sdmUtYWxsJ1xuaW1wb3J0IHtjb2RlcywgY29uc3RhbnRzLCB0eXBlc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sJ1xuXG4vKipcbiAqIENyZWF0ZSBhbiBleHRlbnNpb24gZm9yIGBtaWNyb21hcmtgIHRvIGVuYWJsZSBHRk0gc3RyaWtldGhyb3VnaCBzeW50YXguXG4gKlxuICogQHBhcmFtIHtPcHRpb25zIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29wdGlvbnM9e31dXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcmV0dXJucyB7RXh0ZW5zaW9ufVxuICogICBFeHRlbnNpb24gZm9yIGBtaWNyb21hcmtgIHRoYXQgY2FuIGJlIHBhc3NlZCBpbiBgZXh0ZW5zaW9uc2AsIHRvXG4gKiAgIGVuYWJsZSBHRk0gc3RyaWtldGhyb3VnaCBzeW50YXguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZm1TdHJpa2V0aHJvdWdoKG9wdGlvbnMpIHtcbiAgY29uc3Qgb3B0aW9uc18gPSBvcHRpb25zIHx8IHt9XG4gIGxldCBzaW5nbGUgPSBvcHRpb25zXy5zaW5nbGVUaWxkZVxuICBjb25zdCB0b2tlbml6ZXIgPSB7XG4gICAgbmFtZTogJ3N0cmlrZXRocm91Z2gnLFxuICAgIHRva2VuaXplOiB0b2tlbml6ZVN0cmlrZXRocm91Z2gsXG4gICAgcmVzb2x2ZUFsbDogcmVzb2x2ZUFsbFN0cmlrZXRocm91Z2hcbiAgfVxuXG4gIGlmIChzaW5nbGUgPT09IG51bGwgfHwgc2luZ2xlID09PSB1bmRlZmluZWQpIHtcbiAgICBzaW5nbGUgPSB0cnVlXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRleHQ6IHtbY29kZXMudGlsZGVdOiB0b2tlbml6ZXJ9LFxuICAgIGluc2lkZVNwYW46IHtudWxsOiBbdG9rZW5pemVyXX0sXG4gICAgYXR0ZW50aW9uTWFya2Vyczoge251bGw6IFtjb2Rlcy50aWxkZV19XG4gIH1cblxuICAvKipcbiAgICogVGFrZSBldmVudHMgYW5kIHJlc29sdmUgc3RyaWtldGhyb3VnaC5cbiAgICpcbiAgICogQHR5cGUge1Jlc29sdmVyfVxuICAgKi9cbiAgZnVuY3Rpb24gcmVzb2x2ZUFsbFN0cmlrZXRocm91Z2goZXZlbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4ID0gLTFcblxuICAgIC8vIFdhbGsgdGhyb3VnaCBhbGwgZXZlbnRzLlxuICAgIHdoaWxlICgrK2luZGV4IDwgZXZlbnRzLmxlbmd0aCkge1xuICAgICAgLy8gRmluZCBhIHRva2VuIHRoYXQgY2FuIGNsb3NlLlxuICAgICAgaWYgKFxuICAgICAgICBldmVudHNbaW5kZXhdWzBdID09PSAnZW50ZXInICYmXG4gICAgICAgIGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ3N0cmlrZXRocm91Z2hTZXF1ZW5jZVRlbXBvcmFyeScgJiZcbiAgICAgICAgZXZlbnRzW2luZGV4XVsxXS5fY2xvc2VcbiAgICAgICkge1xuICAgICAgICBsZXQgb3BlbiA9IGluZGV4XG5cbiAgICAgICAgLy8gTm93IHdhbGsgYmFjayB0byBmaW5kIGFuIG9wZW5lci5cbiAgICAgICAgd2hpbGUgKG9wZW4tLSkge1xuICAgICAgICAgIC8vIEZpbmQgYSB0b2tlbiB0aGF0IGNhbiBvcGVuIHRoZSBjbG9zZXIuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXZlbnRzW29wZW5dWzBdID09PSAnZXhpdCcgJiZcbiAgICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS50eXBlID09PSAnc3RyaWtldGhyb3VnaFNlcXVlbmNlVGVtcG9yYXJ5JyAmJlxuICAgICAgICAgICAgZXZlbnRzW29wZW5dWzFdLl9vcGVuICYmXG4gICAgICAgICAgICAvLyBJZiB0aGUgc2l6ZXMgYXJlIHRoZSBzYW1lOlxuICAgICAgICAgICAgZXZlbnRzW2luZGV4XVsxXS5lbmQub2Zmc2V0IC0gZXZlbnRzW2luZGV4XVsxXS5zdGFydC5vZmZzZXQgPT09XG4gICAgICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS5lbmQub2Zmc2V0IC0gZXZlbnRzW29wZW5dWzFdLnN0YXJ0Lm9mZnNldFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZXZlbnRzW2luZGV4XVsxXS50eXBlID0gJ3N0cmlrZXRocm91Z2hTZXF1ZW5jZSdcbiAgICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS50eXBlID0gJ3N0cmlrZXRocm91Z2hTZXF1ZW5jZSdcblxuICAgICAgICAgICAgLyoqIEB0eXBlIHtUb2tlbn0gKi9cbiAgICAgICAgICAgIGNvbnN0IHN0cmlrZXRocm91Z2ggPSB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpa2V0aHJvdWdoJyxcbiAgICAgICAgICAgICAgc3RhcnQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50c1tvcGVuXVsxXS5zdGFydCksXG4gICAgICAgICAgICAgIGVuZDogT2JqZWN0LmFzc2lnbih7fSwgZXZlbnRzW2luZGV4XVsxXS5lbmQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKiBAdHlwZSB7VG9rZW59ICovXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0ge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaWtldGhyb3VnaFRleHQnLFxuICAgICAgICAgICAgICBzdGFydDogT2JqZWN0LmFzc2lnbih7fSwgZXZlbnRzW29wZW5dWzFdLmVuZCksXG4gICAgICAgICAgICAgIGVuZDogT2JqZWN0LmFzc2lnbih7fSwgZXZlbnRzW2luZGV4XVsxXS5zdGFydClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3BlbmluZy5cbiAgICAgICAgICAgIC8qKiBAdHlwZSB7QXJyYXk8RXZlbnQ+fSAqL1xuICAgICAgICAgICAgY29uc3QgbmV4dEV2ZW50cyA9IFtcbiAgICAgICAgICAgICAgWydlbnRlcicsIHN0cmlrZXRocm91Z2gsIGNvbnRleHRdLFxuICAgICAgICAgICAgICBbJ2VudGVyJywgZXZlbnRzW29wZW5dWzFdLCBjb250ZXh0XSxcbiAgICAgICAgICAgICAgWydleGl0JywgZXZlbnRzW29wZW5dWzFdLCBjb250ZXh0XSxcbiAgICAgICAgICAgICAgWydlbnRlcicsIHRleHQsIGNvbnRleHRdXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIGNvbnN0IGluc2lkZVNwYW4gPSBjb250ZXh0LnBhcnNlci5jb25zdHJ1Y3RzLmluc2lkZVNwYW4ubnVsbFxuXG4gICAgICAgICAgICBpZiAoaW5zaWRlU3Bhbikge1xuICAgICAgICAgICAgICAvLyBCZXR3ZWVuLlxuICAgICAgICAgICAgICBzcGxpY2UoXG4gICAgICAgICAgICAgICAgbmV4dEV2ZW50cyxcbiAgICAgICAgICAgICAgICBuZXh0RXZlbnRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIHJlc29sdmVBbGwoaW5zaWRlU3BhbiwgZXZlbnRzLnNsaWNlKG9wZW4gKyAxLCBpbmRleCksIGNvbnRleHQpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2xvc2luZy5cbiAgICAgICAgICAgIHNwbGljZShuZXh0RXZlbnRzLCBuZXh0RXZlbnRzLmxlbmd0aCwgMCwgW1xuICAgICAgICAgICAgICBbJ2V4aXQnLCB0ZXh0LCBjb250ZXh0XSxcbiAgICAgICAgICAgICAgWydlbnRlcicsIGV2ZW50c1tpbmRleF1bMV0sIGNvbnRleHRdLFxuICAgICAgICAgICAgICBbJ2V4aXQnLCBldmVudHNbaW5kZXhdWzFdLCBjb250ZXh0XSxcbiAgICAgICAgICAgICAgWydleGl0Jywgc3RyaWtldGhyb3VnaCwgY29udGV4dF1cbiAgICAgICAgICAgIF0pXG5cbiAgICAgICAgICAgIHNwbGljZShldmVudHMsIG9wZW4gLSAxLCBpbmRleCAtIG9wZW4gKyAzLCBuZXh0RXZlbnRzKVxuXG4gICAgICAgICAgICBpbmRleCA9IG9wZW4gKyBuZXh0RXZlbnRzLmxlbmd0aCAtIDJcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5kZXggPSAtMVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgICBpZiAoZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnc3RyaWtldGhyb3VnaFNlcXVlbmNlVGVtcG9yYXJ5Jykge1xuICAgICAgICBldmVudHNbaW5kZXhdWzFdLnR5cGUgPSB0eXBlcy5kYXRhXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGV2ZW50c1xuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gICAqIEB0eXBlIHtUb2tlbml6ZXJ9XG4gICAqL1xuICBmdW5jdGlvbiB0b2tlbml6ZVN0cmlrZXRocm91Z2goZWZmZWN0cywgb2ssIG5vaykge1xuICAgIGNvbnN0IHByZXZpb3VzID0gdGhpcy5wcmV2aW91c1xuICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuZXZlbnRzXG4gICAgbGV0IHNpemUgPSAwXG5cbiAgICByZXR1cm4gc3RhcnRcblxuICAgIC8qKiBAdHlwZSB7U3RhdGV9ICovXG4gICAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgICAgYXNzZXJ0KGNvZGUgPT09IGNvZGVzLnRpbGRlLCAnZXhwZWN0ZWQgYH5gJylcblxuICAgICAgaWYgKFxuICAgICAgICBwcmV2aW91cyA9PT0gY29kZXMudGlsZGUgJiZcbiAgICAgICAgZXZlbnRzW2V2ZW50cy5sZW5ndGggLSAxXVsxXS50eXBlICE9PSB0eXBlcy5jaGFyYWN0ZXJFc2NhcGVcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgICB9XG5cbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3N0cmlrZXRocm91Z2hTZXF1ZW5jZVRlbXBvcmFyeScpXG4gICAgICByZXR1cm4gbW9yZShjb2RlKVxuICAgIH1cblxuICAgIC8qKiBAdHlwZSB7U3RhdGV9ICovXG4gICAgZnVuY3Rpb24gbW9yZShjb2RlKSB7XG4gICAgICBjb25zdCBiZWZvcmUgPSBjbGFzc2lmeUNoYXJhY3RlcihwcmV2aW91cylcblxuICAgICAgaWYgKGNvZGUgPT09IGNvZGVzLnRpbGRlKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgdGhlIHRoaXJkIG1hcmtlciwgZXhpdC5cbiAgICAgICAgaWYgKHNpemUgPiAxKSByZXR1cm4gbm9rKGNvZGUpXG4gICAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgICBzaXplKytcbiAgICAgICAgcmV0dXJuIG1vcmVcbiAgICAgIH1cblxuICAgICAgaWYgKHNpemUgPCAyICYmICFzaW5nbGUpIHJldHVybiBub2soY29kZSlcbiAgICAgIGNvbnN0IHRva2VuID0gZWZmZWN0cy5leGl0KCdzdHJpa2V0aHJvdWdoU2VxdWVuY2VUZW1wb3JhcnknKVxuICAgICAgY29uc3QgYWZ0ZXIgPSBjbGFzc2lmeUNoYXJhY3Rlcihjb2RlKVxuICAgICAgdG9rZW4uX29wZW4gPVxuICAgICAgICAhYWZ0ZXIgfHwgKGFmdGVyID09PSBjb25zdGFudHMuYXR0ZW50aW9uU2lkZUFmdGVyICYmIEJvb2xlYW4oYmVmb3JlKSlcbiAgICAgIHRva2VuLl9jbG9zZSA9XG4gICAgICAgICFiZWZvcmUgfHwgKGJlZm9yZSA9PT0gY29uc3RhbnRzLmF0dGVudGlvblNpZGVBZnRlciAmJiBCb29sZWFuKGFmdGVyKSlcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/syntax.js\n");

/***/ })

};
;