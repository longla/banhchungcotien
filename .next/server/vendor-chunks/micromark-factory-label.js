"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-factory-label";
exports.ids = ["vendor-chunks/micromark-factory-label"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-factory-label/dev/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark-factory-label/dev/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factoryLabel: () => (/* binding */ factoryLabel)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ \"(rsc)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-character */ \"(rsc)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/constants.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/types.js\");\n/**\n * @import {\n *   Effects,\n *   State,\n *   TokenizeContext,\n *   TokenType\n * } from 'micromark-util-types'\n */\n\n\n\n\n\n/**\n * Parse labels.\n *\n * > 👉 **Note**: labels in markdown are capped at 999 characters in the string.\n *\n * ###### Examples\n *\n * ```markdown\n * [a]\n * [a\n * b]\n * [a\\]b]\n * ```\n *\n * @this {TokenizeContext}\n *   Tokenize context.\n * @param {Effects} effects\n *   Context.\n * @param {State} ok\n *   State switched to when successful.\n * @param {State} nok\n *   State switched to when unsuccessful.\n * @param {TokenType} type\n *   Type of the whole label (`[a]`).\n * @param {TokenType} markerType\n *   Type for the markers (`[` and `]`).\n * @param {TokenType} stringType\n *   Type for the identifier (`a`).\n * @returns {State}\n *   Start state.\n */\nfunction factoryLabel(effects, ok, nok, type, markerType, stringType) {\n  const self = this\n  let size = 0\n  /** @type {boolean} */\n  let seen\n\n  return start\n\n  /**\n   * Start of label.\n   *\n   * ```markdown\n   * > | [a]\n   *     ^\n   * ```\n   *\n   * @type {State}\n   */\n  function start(code) {\n    ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket, 'expected `[`')\n    effects.enter(type)\n    effects.enter(markerType)\n    effects.consume(code)\n    effects.exit(markerType)\n    effects.enter(stringType)\n    return atBreak\n  }\n\n  /**\n   * In label, at something, before something else.\n   *\n   * ```markdown\n   * > | [a]\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */\n  function atBreak(code) {\n    if (\n      size > micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.linkReferenceSizeMax ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket ||\n      (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket && !seen) ||\n      // To do: remove in the future once we’ve switched from\n      // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,\n      // which doesn’t need this.\n      // Hidden footnotes hook.\n      /* c8 ignore next 3 */\n      (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.caret &&\n        !size &&\n        '_hiddenFootnoteSupport' in self.parser.constructs)\n    ) {\n      return nok(code)\n    }\n\n    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket) {\n      effects.exit(stringType)\n      effects.enter(markerType)\n      effects.consume(code)\n      effects.exit(markerType)\n      effects.exit(type)\n      return ok\n    }\n\n    // To do: indent? Link chunks and EOLs together?\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code)) {\n      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.lineEnding)\n      effects.consume(code)\n      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.lineEnding)\n      return atBreak\n    }\n\n    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.chunkString, {contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.contentTypeString})\n    return labelInside(code)\n  }\n\n  /**\n   * In label, in text.\n   *\n   * ```markdown\n   * > | [a]\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */\n  function labelInside(code) {\n    if (\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket ||\n      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code) ||\n      size++ > micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.linkReferenceSizeMax\n    ) {\n      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.chunkString)\n      return atBreak(code)\n    }\n\n    effects.consume(code)\n    if (!seen) seen = !(0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownSpace)(code)\n    return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.backslash ? labelEscape : labelInside\n  }\n\n  /**\n   * After `\\`, at a special character.\n   *\n   * ```markdown\n   * > | [a\\*a]\n   *        ^\n   * ```\n   *\n   * @type {State}\n   */\n  function labelEscape(code) {\n    if (\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.backslash ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket\n    ) {\n      effects.consume(code)\n      size++\n      return labelInside\n    }\n\n    return labelInside(code)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3RvcnktbGFiZWwvZGV2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFbUM7QUFDdUM7QUFDYjs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLFdBQVcsV0FBVztBQUN0QjtBQUNBLFdBQVcsV0FBVztBQUN0QjtBQUNBLFdBQVcsV0FBVztBQUN0QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLElBQUksMkNBQU0sVUFBVSx3REFBSztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNERBQVM7QUFDdEIsZUFBZSx3REFBSztBQUNwQixlQUFlLHdEQUFLO0FBQ3BCLGdCQUFnQix3REFBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdEQUFLO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHdEQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSw0RUFBa0I7QUFDMUIsb0JBQW9CLHdEQUFLO0FBQ3pCO0FBQ0EsbUJBQW1CLHdEQUFLO0FBQ3hCO0FBQ0E7O0FBRUEsa0JBQWtCLHdEQUFLLGVBQWUsYUFBYSw0REFBUyxtQkFBbUI7QUFDL0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0RBQUs7QUFDcEIsZUFBZSx3REFBSztBQUNwQixlQUFlLHdEQUFLO0FBQ3BCLE1BQU0sNEVBQWtCO0FBQ3hCLGVBQWUsNERBQVM7QUFDeEI7QUFDQSxtQkFBbUIsd0RBQUs7QUFDeEI7QUFDQTs7QUFFQTtBQUNBLHVCQUF1Qix1RUFBYTtBQUNwQyxvQkFBb0Isd0RBQUs7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxlQUFlLHdEQUFLO0FBQ3BCLGVBQWUsd0RBQUs7QUFDcEIsZUFBZSx3REFBSztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL2xvbmdsYS9jb2RlL2JhbmhjaHVuZ2NvdGllbi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3RvcnktbGFiZWwvZGV2L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGltcG9ydCB7XG4gKiAgIEVmZmVjdHMsXG4gKiAgIFN0YXRlLFxuICogICBUb2tlbml6ZUNvbnRleHQsXG4gKiAgIFRva2VuVHlwZVxuICogfSBmcm9tICdtaWNyb21hcmstdXRpbC10eXBlcydcbiAqL1xuXG5pbXBvcnQge29rIGFzIGFzc2VydH0gZnJvbSAnZGV2bG9wJ1xuaW1wb3J0IHttYXJrZG93bkxpbmVFbmRpbmcsIG1hcmtkb3duU3BhY2V9IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3RlcidcbmltcG9ydCB7Y29kZXMsIGNvbnN0YW50cywgdHlwZXN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbCdcblxuLyoqXG4gKiBQYXJzZSBsYWJlbHMuXG4gKlxuICogPiDwn5GJICoqTm90ZSoqOiBsYWJlbHMgaW4gbWFya2Rvd24gYXJlIGNhcHBlZCBhdCA5OTkgY2hhcmFjdGVycyBpbiB0aGUgc3RyaW5nLlxuICpcbiAqICMjIyMjIyBFeGFtcGxlc1xuICpcbiAqIGBgYG1hcmtkb3duXG4gKiBbYV1cbiAqIFthXG4gKiBiXVxuICogW2FcXF1iXVxuICogYGBgXG4gKlxuICogQHRoaXMge1Rva2VuaXplQ29udGV4dH1cbiAqICAgVG9rZW5pemUgY29udGV4dC5cbiAqIEBwYXJhbSB7RWZmZWN0c30gZWZmZWN0c1xuICogICBDb250ZXh0LlxuICogQHBhcmFtIHtTdGF0ZX0gb2tcbiAqICAgU3RhdGUgc3dpdGNoZWQgdG8gd2hlbiBzdWNjZXNzZnVsLlxuICogQHBhcmFtIHtTdGF0ZX0gbm9rXG4gKiAgIFN0YXRlIHN3aXRjaGVkIHRvIHdoZW4gdW5zdWNjZXNzZnVsLlxuICogQHBhcmFtIHtUb2tlblR5cGV9IHR5cGVcbiAqICAgVHlwZSBvZiB0aGUgd2hvbGUgbGFiZWwgKGBbYV1gKS5cbiAqIEBwYXJhbSB7VG9rZW5UeXBlfSBtYXJrZXJUeXBlXG4gKiAgIFR5cGUgZm9yIHRoZSBtYXJrZXJzIChgW2AgYW5kIGBdYCkuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gc3RyaW5nVHlwZVxuICogICBUeXBlIGZvciB0aGUgaWRlbnRpZmllciAoYGFgKS5cbiAqIEByZXR1cm5zIHtTdGF0ZX1cbiAqICAgU3RhcnQgc3RhdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmYWN0b3J5TGFiZWwoZWZmZWN0cywgb2ssIG5vaywgdHlwZSwgbWFya2VyVHlwZSwgc3RyaW5nVHlwZSkge1xuICBjb25zdCBzZWxmID0gdGhpc1xuICBsZXQgc2l6ZSA9IDBcbiAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICBsZXQgc2VlblxuXG4gIHJldHVybiBzdGFydFxuXG4gIC8qKlxuICAgKiBTdGFydCBvZiBsYWJlbC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IFthXVxuICAgKiAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGFzc2VydChjb2RlID09PSBjb2Rlcy5sZWZ0U3F1YXJlQnJhY2tldCwgJ2V4cGVjdGVkIGBbYCcpXG4gICAgZWZmZWN0cy5lbnRlcih0eXBlKVxuICAgIGVmZmVjdHMuZW50ZXIobWFya2VyVHlwZSlcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQobWFya2VyVHlwZSlcbiAgICBlZmZlY3RzLmVudGVyKHN0cmluZ1R5cGUpXG4gICAgcmV0dXJuIGF0QnJlYWtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBsYWJlbCwgYXQgc29tZXRoaW5nLCBiZWZvcmUgc29tZXRoaW5nIGVsc2UuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBbYV1cbiAgICogICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBhdEJyZWFrKGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICBzaXplID4gY29uc3RhbnRzLmxpbmtSZWZlcmVuY2VTaXplTWF4IHx8XG4gICAgICBjb2RlID09PSBjb2Rlcy5lb2YgfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLmxlZnRTcXVhcmVCcmFja2V0IHx8XG4gICAgICAoY29kZSA9PT0gY29kZXMucmlnaHRTcXVhcmVCcmFja2V0ICYmICFzZWVuKSB8fFxuICAgICAgLy8gVG8gZG86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIG9uY2Ugd2XigJl2ZSBzd2l0Y2hlZCBmcm9tXG4gICAgICAvLyBgbWljcm9tYXJrLWV4dGVuc2lvbi1mb290bm90ZWAgdG8gYG1pY3JvbWFyay1leHRlbnNpb24tZ2ZtLWZvb3Rub3RlYCxcbiAgICAgIC8vIHdoaWNoIGRvZXNu4oCZdCBuZWVkIHRoaXMuXG4gICAgICAvLyBIaWRkZW4gZm9vdG5vdGVzIGhvb2suXG4gICAgICAvKiBjOCBpZ25vcmUgbmV4dCAzICovXG4gICAgICAoY29kZSA9PT0gY29kZXMuY2FyZXQgJiZcbiAgICAgICAgIXNpemUgJiZcbiAgICAgICAgJ19oaWRkZW5Gb290bm90ZVN1cHBvcnQnIGluIHNlbGYucGFyc2VyLmNvbnN0cnVjdHMpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IGNvZGVzLnJpZ2h0U3F1YXJlQnJhY2tldCkge1xuICAgICAgZWZmZWN0cy5leGl0KHN0cmluZ1R5cGUpXG4gICAgICBlZmZlY3RzLmVudGVyKG1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdChtYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5leGl0KHR5cGUpXG4gICAgICByZXR1cm4gb2tcbiAgICB9XG5cbiAgICAvLyBUbyBkbzogaW5kZW50PyBMaW5rIGNodW5rcyBhbmQgRU9McyB0b2dldGhlcj9cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKHR5cGVzLmxpbmVFbmRpbmcpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlcy5saW5lRW5kaW5nKVxuICAgICAgcmV0dXJuIGF0QnJlYWtcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKHR5cGVzLmNodW5rU3RyaW5nLCB7Y29udGVudFR5cGU6IGNvbnN0YW50cy5jb250ZW50VHlwZVN0cmluZ30pXG4gICAgcmV0dXJuIGxhYmVsSW5zaWRlKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gbGFiZWwsIGluIHRleHQuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBbYV1cbiAgICogICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBsYWJlbEluc2lkZShjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gY29kZXMuZW9mIHx8XG4gICAgICBjb2RlID09PSBjb2Rlcy5sZWZ0U3F1YXJlQnJhY2tldCB8fFxuICAgICAgY29kZSA9PT0gY29kZXMucmlnaHRTcXVhcmVCcmFja2V0IHx8XG4gICAgICBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkgfHxcbiAgICAgIHNpemUrKyA+IGNvbnN0YW50cy5saW5rUmVmZXJlbmNlU2l6ZU1heFxuICAgICkge1xuICAgICAgZWZmZWN0cy5leGl0KHR5cGVzLmNodW5rU3RyaW5nKVxuICAgICAgcmV0dXJuIGF0QnJlYWsoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBpZiAoIXNlZW4pIHNlZW4gPSAhbWFya2Rvd25TcGFjZShjb2RlKVxuICAgIHJldHVybiBjb2RlID09PSBjb2Rlcy5iYWNrc2xhc2ggPyBsYWJlbEVzY2FwZSA6IGxhYmVsSW5zaWRlXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgYFxcYCwgYXQgYSBzcGVjaWFsIGNoYXJhY3Rlci5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IFthXFwqYV1cbiAgICogICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGxhYmVsRXNjYXBlKGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBjb2Rlcy5sZWZ0U3F1YXJlQnJhY2tldCB8fFxuICAgICAgY29kZSA9PT0gY29kZXMuYmFja3NsYXNoIHx8XG4gICAgICBjb2RlID09PSBjb2Rlcy5yaWdodFNxdWFyZUJyYWNrZXRcbiAgICApIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgc2l6ZSsrXG4gICAgICByZXR1cm4gbGFiZWxJbnNpZGVcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxJbnNpZGUoY29kZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-factory-label/dev/index.js\n");

/***/ })

};
;