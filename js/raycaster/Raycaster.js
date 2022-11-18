(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["main"] = factory();
	else
		root["main"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./raycaster/BoundsToPolygon.js":
/*!**************************************!*\
  !*** ./raycaster/BoundsToPolygon.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GetBounds_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetBounds.js */ "./raycaster/GetBounds.js");

const Polygon = Phaser.Geom.Polygon;
var BoundsToPolygon = function (gameObject, out) {
  if (out === undefined) {
    out = new Polygon();
  }
  var p0 = (0,_GetBounds_js__WEBPACK_IMPORTED_MODULE_0__.GetTopLeft)(gameObject),
    p1 = (0,_GetBounds_js__WEBPACK_IMPORTED_MODULE_0__.GetTopRight)(gameObject),
    p2 = (0,_GetBounds_js__WEBPACK_IMPORTED_MODULE_0__.GetBottomRight)(gameObject),
    p3 = (0,_GetBounds_js__WEBPACK_IMPORTED_MODULE_0__.GetBottomLeft)(gameObject);
  out.setTo([p0, p1, p2, p3, p0]);
  return out;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoundsToPolygon);

/***/ }),

/***/ "./raycaster/Clear.js":
/*!****************************!*\
  !*** ./raycaster/Clear.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Clear = function (obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    obj.length = 0;
  } else {
    for (var key in obj) {
      delete obj[key];
    }
  }
  return obj;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clear);

/***/ }),

/***/ "./raycaster/Clone.js":
/*!****************************!*\
  !*** ./raycaster/Clone.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Clear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Clear.js */ "./raycaster/Clear.js");


/**
 * Shallow Object Clone. Will not out nested objects.
 * @param {object} obj JSON object
 * @param {object} ret JSON object to return, set null to return a new object
 * @returns {object} this object
 */
var Clone = function (obj, out) {
  var objIsArray = Array.isArray(obj);
  if (out === undefined) {
    out = objIsArray ? [] : {};
  } else {
    (0,_Clear_js__WEBPACK_IMPORTED_MODULE_0__["default"])(out);
  }
  if (objIsArray) {
    out.length = obj.length;
    for (var i = 0, cnt = obj.length; i < cnt; i++) {
      out[i] = obj[i];
    }
  } else {
    for (var key in obj) {
      out[key] = obj[key];
    }
  }
  return out;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clone);

/***/ }),

/***/ "./raycaster/GetBounds.js":
/*!********************************!*\
  !*** ./raycaster/GetBounds.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetBounds": () => (/* binding */ GetBounds),
/* harmony export */   "GetTopLeft": () => (/* binding */ GetTopLeft),
/* harmony export */   "GetTopRight": () => (/* binding */ GetTopRight),
/* harmony export */   "GetBottomLeft": () => (/* binding */ GetBottomLeft),
/* harmony export */   "GetBottomRight": () => (/* binding */ GetBottomRight)
/* harmony export */ });
/* harmony import */ var _GetDisplaySize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetDisplaySize.js */ "./raycaster/GetDisplaySize.js");

const Rectangle = Phaser.Geom.Rectangle;
const Vector2 = Phaser.Math.Vector2;
const RotateAround = Phaser.Math.RotateAround;
var GetBounds = function (gameObject, output) {
  if (output === undefined) {
    output = new Rectangle();
  } else if (output === true) {
    if (GlobRect === undefined) {
      GlobRect = new Rectangle();
    }
    output = GlobRect;
  }
  if (gameObject.getBounds) {
    return gameObject.getBounds(output);
  }

  //  We can use the output object to temporarily store the x/y coords in:

  var TLx, TLy, TRx, TRy, BLx, BLy, BRx, BRy;

  // Instead of doing a check if parent container is
  // defined per corner we only do it once.
  if (gameObject.parentContainer) {
    var parentMatrix = gameObject.parentContainer.getBoundsTransformMatrix();
    GetTopLeft(gameObject, output);
    parentMatrix.transformPoint(output.x, output.y, output);
    TLx = output.x;
    TLy = output.y;
    GetTopRight(gameObject, output);
    parentMatrix.transformPoint(output.x, output.y, output);
    TRx = output.x;
    TRy = output.y;
    GetBottomLeft(gameObject, output);
    ;
    parentMatrix.transformPoint(output.x, output.y, output);
    BLx = output.x;
    BLy = output.y;
    GetBottomRight(gameObject, output);
    parentMatrix.transformPoint(output.x, output.y, output);
    BRx = output.x;
    BRy = output.y;
  } else {
    GetTopLeft(gameObject, output);
    TLx = output.x;
    TLy = output.y;
    GetTopRight(gameObject, output);
    ;
    TRx = output.x;
    TRy = output.y;
    GetBottomLeft(gameObject, output);
    ;
    BLx = output.x;
    BLy = output.y;
    GetBottomRight(gameObject, output);
    BRx = output.x;
    BRy = output.y;
  }
  output.x = Math.min(TLx, TRx, BLx, BRx);
  output.y = Math.min(TLy, TRy, BLy, BRy);
  output.width = Math.max(TLx, TRx, BLx, BRx) - output.x;
  output.height = Math.max(TLy, TRy, BLy, BRy) - output.y;
  return output;
};
var GlobRect = undefined;
var GetTopLeft = function (gameObject, output, includeParent) {
  if (output === undefined) {
    output = new Vector2();
  } else if (output === true) {
    if (GlobVector === undefined) {
      GlobVector = new Vector2();
    }
    output = GlobVector;
  }
  if (gameObject.getTopLeft) {
    return gameObject.getTopLeft(output);
  }
  output.x = gameObject.x - (0,_GetDisplaySize_js__WEBPACK_IMPORTED_MODULE_0__.GetDisplayWidth)(gameObject) * gameObject.originX;
  output.y = gameObject.y - (0,_GetDisplaySize_js__WEBPACK_IMPORTED_MODULE_0__.GetDisplayHeight)(gameObject) * gameObject.originY;
  return PrepareBoundsOutput(gameObject, output, includeParent);
};
var GetTopRight = function (gameObject, output, includeParent) {
  if (output === undefined) {
    output = new Vector2();
  } else if (output === true) {
    if (GlobVector === undefined) {
      GlobVector = new Vector2();
    }
    output = GlobVector;
  }
  if (gameObject.getTopRight) {
    return gameObject.getTopRight(output);
  }
  output.x = gameObject.x - (0,_GetDisplaySize_js__WEBPACK_IMPORTED_MODULE_0__.GetDisplayWidth)(gameObject) * gameObject.originX + (0,_GetDisplaySize_js__WEBPACK_IMPORTED_MODULE_0__.GetDisplayWidth)(gameObject);
  output.y = gameObject.y - (0,_GetDisplaySize_js__WEBPACK_IMPORTED_MODULE_0__.GetDisplayHeight)(gameObject) * gameObject.originY;
  return PrepareBoundsOutput(gameObject, output, includeParent);
};
var GetBottomLeft = function (gameObject, output, includeParent) {
  if (output === undefined) {
    output = new Vector2();
  } else if (output === true) {
    if (GlobVector === undefined) {
      GlobVector = new Vector2();
    }
    output = GlobVector;
  }
  if (gameObject.getBottomLeft) {
    return gameObject.getBottomLeft(output);
  }
  output.x = gameObject.x - (0,_GetDisplaySize_js__WEBPACK_IMPORTED_MODULE_0__.GetDisplayWidth)(gameObject) * gameObject.originX;
  output.y = gameObject.y - (0,_GetDisplaySize_js__WEBPACK_IMPORTED_MODULE_0__.GetDisplayHeight)(gameObject) * gameObject.originY + (0,_GetDisplaySize_js__WEBPACK_IMPORTED_MODULE_0__.GetDisplayHeight)(gameObject);
  return PrepareBoundsOutput(gameObject, output, includeParent);
};
var GetBottomRight = function (gameObject, output, includeParent) {
  if (output === undefined) {
    output = new Vector2();
  } else if (output === true) {
    if (GlobVector === undefined) {
      GlobVector = new Vector2();
    }
    output = GlobVector;
  }
  if (gameObject.getBottomRight) {
    return gameObject.getBottomRight(output);
  }
  output.x = gameObject.x - (0,_GetDisplaySize_js__WEBPACK_IMPORTED_MODULE_0__.GetDisplayWidth)(gameObject) * gameObject.originX + (0,_GetDisplaySize_js__WEBPACK_IMPORTED_MODULE_0__.GetDisplayWidth)(gameObject);
  output.y = gameObject.y - (0,_GetDisplaySize_js__WEBPACK_IMPORTED_MODULE_0__.GetDisplayHeight)(gameObject) * gameObject.originY + (0,_GetDisplaySize_js__WEBPACK_IMPORTED_MODULE_0__.GetDisplayHeight)(gameObject);
  return PrepareBoundsOutput(gameObject, output, includeParent);
};
var GlobVector = undefined;
var PrepareBoundsOutput = function (gameObject, output, includeParent) {
  if (includeParent === undefined) {
    includeParent = false;
  }
  if (gameObject.rotation !== 0) {
    RotateAround(output, gameObject.x, gameObject.y, gameObject.rotation);
  }
  if (includeParent && gameObject.parentContainer) {
    var parentMatrix = gameObject.parentContainer.getBoundsTransformMatrix();
    parentMatrix.transformPoint(output.x, output.y, output);
  }
  return output;
};


/***/ }),

/***/ "./raycaster/GetDisplaySize.js":
/*!*************************************!*\
  !*** ./raycaster/GetDisplaySize.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetDisplayWidth": () => (/* binding */ GetDisplayWidth),
/* harmony export */   "GetDisplayHeight": () => (/* binding */ GetDisplayHeight)
/* harmony export */ });
var GetDisplayWidth = function (gameObject) {
  if (gameObject.displayWidth !== undefined) {
    return gameObject.displayWidth;
  } else {
    return gameObject.width;
  }
};
var GetDisplayHeight = function (gameObject) {
  if (gameObject.displayHeight !== undefined) {
    return gameObject.displayHeight;
  } else {
    return gameObject.height;
  }
};


/***/ }),

/***/ "./raycaster/GetLineToPoints.js":
/*!**************************************!*\
  !*** ./raycaster/GetLineToPoints.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const GetLineToLine = Phaser.Geom.Intersects.GetLineToLine;
const PointToLine = Phaser.Geom.Intersects.PointToLine;
var GetLineToPoints = function (line, points, out) {
  if (out === undefined) {
    out = {};
  } else if (out === true) {
    out = globResult;
  }
  /* 
  out: {
      x,y,      // intersection point
      d,        // intersection distance
      segIndex  // intersection segment
  }
  */

  var closestIntersect = false;
  startPoint.setTo(line.x1, line.y1);
  out.d = Infinity;
  tempIntersect.set();
  var prev = points[0];
  for (var i = 1; i < points.length; i++) {
    var current = points[i];
    segment.setTo(prev.x, prev.y, current.x, current.y);
    prev = current;

    // Ignore case: start point of line is at segment
    if (PointToLine(startPoint, segment)) {
      continue;
    }
    if (GetLineToLine(line, segment, tempIntersect)) {
      if (tempIntersect.z < out.d) {
        out.x = tempIntersect.x;
        out.y = tempIntersect.y;
        out.d = tempIntersect.z;
        out.segIndex = i - 1;
        closestIntersect = true;
      }
    }
  }
  return closestIntersect ? out : null;
};
var globResult = {};
var startPoint = new Phaser.Geom.Point();
var segment = new Phaser.Geom.Line();
var tempIntersect = new Phaser.Math.Vector3();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetLineToPoints);

/***/ }),

/***/ "./raycaster/GetLineToPolygon.js":
/*!***************************************!*\
  !*** ./raycaster/GetLineToPolygon.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GetLineToPoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetLineToPoints.js */ "./raycaster/GetLineToPoints.js");
/* harmony import */ var _Clone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Clone.js */ "./raycaster/Clone.js");


const GetAABB = Phaser.Geom.Polygon.GetAABB;
const LineToRectangle = Phaser.Geom.Intersects.LineToRectangle;
var GetLineToPolygon = function (line, polygons, out) {
  if (out === undefined) {
    out = {};
  } else if (out === true) {
    out = globResult;
  }
  /* 
  out: {
      x,y,        // intersection point
      d,          // intersection distance
      segIndex,   // index of intersection segment
      shapeIndex  // index of intersection polygon
  }
  */

  if (!Array.isArray(polygons)) {
    polygons = [polygons];
  }
  var closestIntersect = false;
  out.d = Infinity;

  //  Reset our vec4s

  for (var i = 0; i < polygons.length; i++) {
    var polygon = polygons[i];

    // Run AABBTest when polygon is more than 8 edges
    if (polygon.points.length > 9 && !LineToRectangle(line, GetAABB(polygon, AABBRect))) {
      continue;
    }
    var intersectionResult = (0,_GetLineToPoints_js__WEBPACK_IMPORTED_MODULE_0__["default"])(line, polygon.points, true);
    if (intersectionResult) {
      if (intersectionResult.d < out.d) {
        (0,_Clone_js__WEBPACK_IMPORTED_MODULE_1__["default"])(intersectionResult, out); // x,y,d,segIndex
        out.shapeIndex = i;
        closestIntersect = true;
      }
    }
  }
  return closestIntersect ? out : null;
};
var globResult = {};
var AABBRect = new Phaser.Geom.Rectangle();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetLineToPolygon);

/***/ }),

/***/ "./raycaster/IsGameObject.js":
/*!***********************************!*\
  !*** ./raycaster/IsGameObject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const GameObjectClass = Phaser.GameObjects.GameObject;
var IsGameObject = function (object) {
  return object instanceof GameObjectClass;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IsGameObject);

/***/ }),

/***/ "./raycaster/Obstacles.js":
/*!********************************!*\
  !*** ./raycaster/Obstacles.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IsGameObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IsGameObject.js */ "./raycaster/IsGameObject.js");
/* harmony import */ var _BoundsToPolygon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoundsToPolygon.js */ "./raycaster/BoundsToPolygon.js");


const Polygon = Phaser.Geom.Polygon;
const SpliceOne = Phaser.Utils.Array.SpliceOne;
class Obstacles {
  constructor() {
    this.gameObjects = [];
    this.polygons = [];
  }
  contains(gameObject) {
    return this.gameObjects.indexOf(gameObject) !== -1;
  }
  get(index) {
    Obstacle.gameObject = this.gameObjects[index];
    Obstacle.polygon = this.polygons[index];
    return Obstacle;
  }
  addDestroyCallback(gameObject) {
    if (Array.isArray(gameObject)) {
      var gameObjects = gameObject;
      for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
        this.addDestroyCallback(gameObjects[i]);
      }
      return this;
    }
    if (gameObject.on) {
      gameObject.once('destroy', this.onChildDestroy, this);
    }
    return this;
  }
  removeDestroyCallback(gameObject) {
    if (Array.isArray(gameObject)) {
      var gameObjects = gameObject;
      for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
        this.removeDestroyCallback(gameObjects[i]);
      }
      return this;
    }
    if (gameObject.off) {
      gameObject.off('destroy', this.onChildDestroy, this);
    }
    return this;
  }
  clear() {
    this.removeDestroyCallback(this.gameObjects);
    this.gameObjects.length = 0;
    this.polygons.length = 0;
    return this;
  }
  add(gameObject, polygon) {
    if (this.contains(gameObject)) {
      return this;
    }
    if ((0,_IsGameObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(gameObject)) {
      if (polygon === undefined) {
        polygon = (0,_BoundsToPolygon_js__WEBPACK_IMPORTED_MODULE_1__["default"])(gameObject);
      }
    } else if (gameObject instanceof Polygon) {
      polygon = gameObject;
    }
    this.gameObjects.push(gameObject);
    this.polygons.push(polygon);
    this.addDestroyCallback(gameObject);
    return this;
  }
  remove(gameObject) {
    var index = this.gameObjects.indexOf(gameObject);
    if (index === -1) {
      return this;
    }
    SpliceOne(this.gameObjects, index);
    SpliceOne(this.polygons, index);
    this.removeDestroyCallback(gameObject);
    return this;
  }
  onChildDestroy(child, fromScene) {
    this.remove(child);
  }
  update(gameObject, polygon) {
    var index = this.gameObjects.indexOf(gameObject);
    if (index === -1) {
      return this;
    }
    if (polygon === undefined) {
      polygon = (0,_BoundsToPolygon_js__WEBPACK_IMPORTED_MODULE_1__["default"])(gameObject, this.polygons[index]);
    }
    this.polygons[index] = polygon;
    return this;
  }
}
var Obstacle = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Obstacles);

/***/ }),

/***/ "./raycaster/Raycaster.js":
/*!********************************!*\
  !*** ./raycaster/Raycaster.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RayCaster": () => (/* binding */ RayCaster)
/* harmony export */ });
/* harmony import */ var _Obstacles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Obstacles.js */ "./raycaster/Obstacles.js");
/* harmony import */ var _GetLineToPolygon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetLineToPolygon.js */ "./raycaster/GetLineToPolygon.js");


const GetValue = Phaser.Utils.Objects.GetValue;
const Line = Phaser.Geom.Line;
const SetToAngle = Phaser.Geom.Line.SetToAngle;
const ReflectAngle = Phaser.Geom.Line.ReflectAngle;
class RayCaster {
  constructor(config) {
    this.obstacles = new _Obstacles_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.ray = new Line();
    this.setMaxRayLength(GetValue(config, 'maxRayLength', 10000));
    this.result = {
      hit: false,
      x: 0,
      y: 0,
      segment: new Line(),
      polygon: null,
      gameObject: null,
      reflectAngle: 0
    };
  }
  destroy() {
    this.obstacles.clear();
    this.obstacles = null;
    this.ray = null;
    this.result = null;
  }
  setMaxRayLength(length) {
    this.maxRayLength = length;
    return this;
  }
  addObstacle(gameObject, polygon) {
    if (Array.isArray(gameObject)) {
      var gameObjects = gameObject;
      for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
        this.obstacles.add(gameObjects[i]);
      }
    } else {
      this.obstacles.add(gameObject, polygon);
    }
    return this;
  }
  clearObstacle() {
    this.obstacles.clear();
    return this;
  }
  removeObstacle(gameObject) {
    if (Array.isArray(gameObject)) {
      var gameObjects = gameObject;
      for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
        this.obstacles.remove(gameObjects[i]);
      }
    } else {
      this.obstacles.remove(gameObject);
    }
    return this;
  }
  updateObstacle(gameObject, polygon) {
    if (Array.isArray(gameObject)) {
      var gameObjects = gameObject;
      for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
        this.obstacles.update(gameObjects[i]);
      }
    } else {
      this.obstacles.update(gameObject, polygon);
    }
    return this;
  }
  hitTest() {
    var result = (0,_GetLineToPolygon_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.ray, this.obstacles.polygons, true);
    if (result) {
      this.ray.x2 = result.x;
      this.ray.y2 = result.y;
      this.result.hit = true;
      this.result.x = result.x;
      this.result.y = result.y;
      var obstacle = this.obstacles.get(result.shapeIndex);
      this.result.polygon = obstacle.polygon;
      this.result.gameObject = obstacle.gameObject;
      var points = this.result.polygon.points,
        segIndex = result.segIndex,
        p0 = points[segIndex],
        p1 = points[segIndex + 1];
      var segment = this.result.segment;
      segment.setTo(p0.x, p0.y, p1.x, p1.y);
      this.result.reflectAngle = ReflectAngle(this.ray, segment);
    } else {
      this.result.hit = false;
    }
    return result ? this.result : false;
  }
  rayToward(x, y, angle) {
    SetToAngle(this.ray, x, y, angle, this.maxRayLength);
    return this.hitTest();
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./raycaster/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RayCaster": () => (/* reexport safe */ _Raycaster__WEBPACK_IMPORTED_MODULE_0__.RayCaster)
/* harmony export */ });
/* harmony import */ var _Raycaster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Raycaster */ "./raycaster/Raycaster.js");

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF5Y2FzdGVyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7QUNQd0I7QUFFeEIsTUFBTUksT0FBTyxHQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQ0YsT0FBTztBQUVuQyxJQUFJRyxlQUFlLEdBQUcsVUFBVUMsVUFBVSxFQUFFQyxHQUFHLEVBQUU7RUFDN0MsSUFBSUEsR0FBRyxLQUFLQyxTQUFTLEVBQUU7SUFDbkJELEdBQUcsR0FBRyxJQUFJTCxPQUFPLEVBQUU7RUFDdkI7RUFDQSxJQUFJTyxFQUFFLEdBQUdYLHlEQUFVLENBQUNRLFVBQVUsQ0FBQztJQUMzQkksRUFBRSxHQUFHWCwwREFBVyxDQUFDTyxVQUFVLENBQUM7SUFDNUJLLEVBQUUsR0FBR1YsNkRBQWMsQ0FBQ0ssVUFBVSxDQUFDO0lBQy9CTSxFQUFFLEdBQUdaLDREQUFhLENBQUNNLFVBQVUsQ0FBQztFQUNsQ0MsR0FBRyxDQUFDTSxLQUFLLENBQUMsQ0FBQ0osRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFSCxFQUFFLENBQUMsQ0FBQztFQUMvQixPQUFPRixHQUFHO0FBQ2QsQ0FBQztBQUVELGlFQUFlRixlQUFlOzs7Ozs7Ozs7Ozs7OztBQ25COUIsSUFBSVMsS0FBSyxHQUFHLFVBQVVDLEdBQUcsRUFBRTtFQUN2QixJQUFLLE9BQVFBLEdBQUksS0FBSyxRQUFRLElBQU1BLEdBQUcsS0FBSyxJQUFLLEVBQUU7SUFDL0MsT0FBT0EsR0FBRztFQUNkO0VBRUEsSUFBSUMsS0FBSyxDQUFDQyxPQUFPLENBQUNGLEdBQUcsQ0FBQyxFQUFFO0lBQ3BCQSxHQUFHLENBQUNHLE1BQU0sR0FBRyxDQUFDO0VBQ2xCLENBQUMsTUFBTTtJQUNILEtBQUssSUFBSUMsR0FBRyxJQUFJSixHQUFHLEVBQUU7TUFDakIsT0FBT0EsR0FBRyxDQUFDSSxHQUFHLENBQUM7SUFDbkI7RUFDSjtFQUVBLE9BQU9KLEdBQUc7QUFDZCxDQUFDO0FBRUQsaUVBQWVELEtBQUs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCVzs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSU0sS0FBSyxHQUFHLFVBQVVMLEdBQUcsRUFBRVIsR0FBRyxFQUFFO0VBQzVCLElBQUljLFVBQVUsR0FBR0wsS0FBSyxDQUFDQyxPQUFPLENBQUNGLEdBQUcsQ0FBQztFQUVuQyxJQUFJUixHQUFHLEtBQUtDLFNBQVMsRUFBRTtJQUNuQkQsR0FBRyxHQUFJYyxVQUFVLEdBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztFQUNoQyxDQUFDLE1BQU07SUFDSFAscURBQUssQ0FBQ1AsR0FBRyxDQUFDO0VBQ2Q7RUFFQSxJQUFJYyxVQUFVLEVBQUU7SUFDWmQsR0FBRyxDQUFDVyxNQUFNLEdBQUdILEdBQUcsQ0FBQ0csTUFBTTtJQUN2QixLQUFLLElBQUlJLENBQUMsR0FBRyxDQUFDLEVBQUVDLEdBQUcsR0FBR1IsR0FBRyxDQUFDRyxNQUFNLEVBQUVJLENBQUMsR0FBR0MsR0FBRyxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUM1Q2YsR0FBRyxDQUFDZSxDQUFDLENBQUMsR0FBR1AsR0FBRyxDQUFDTyxDQUFDLENBQUM7SUFDbkI7RUFDSixDQUFDLE1BQU07SUFDSCxLQUFLLElBQUlILEdBQUcsSUFBSUosR0FBRyxFQUFFO01BQ2pCUixHQUFHLENBQUNZLEdBQUcsQ0FBQyxHQUFHSixHQUFHLENBQUNJLEdBQUcsQ0FBQztJQUN2QjtFQUNKO0VBRUEsT0FBT1osR0FBRztBQUNkLENBQUM7QUFFRCxpRUFBZWEsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCUztBQUU3QixNQUFNTSxTQUFTLEdBQUd2QixNQUFNLENBQUNDLElBQUksQ0FBQ3NCLFNBQVM7QUFDdkMsTUFBTUMsT0FBTyxHQUFHeEIsTUFBTSxDQUFDeUIsSUFBSSxDQUFDRCxPQUFPO0FBQ25DLE1BQU1FLFlBQVksR0FBRzFCLE1BQU0sQ0FBQ3lCLElBQUksQ0FBQ0MsWUFBWTtBQUU3QyxJQUFJQyxTQUFTLEdBQUcsVUFBVXhCLFVBQVUsRUFBRXlCLE1BQU0sRUFBRTtFQUMxQyxJQUFJQSxNQUFNLEtBQUt2QixTQUFTLEVBQUU7SUFDdEJ1QixNQUFNLEdBQUcsSUFBSUwsU0FBUyxFQUFFO0VBQzVCLENBQUMsTUFBTSxJQUFJSyxNQUFNLEtBQUssSUFBSSxFQUFFO0lBQ3hCLElBQUlDLFFBQVEsS0FBS3hCLFNBQVMsRUFBRTtNQUN4QndCLFFBQVEsR0FBRyxJQUFJTixTQUFTLEVBQUU7SUFDOUI7SUFDQUssTUFBTSxHQUFHQyxRQUFRO0VBQ3JCO0VBRUEsSUFBSTFCLFVBQVUsQ0FBQzJCLFNBQVMsRUFBRTtJQUN0QixPQUFPM0IsVUFBVSxDQUFDMkIsU0FBUyxDQUFDRixNQUFNLENBQUM7RUFDdkM7O0VBRUE7O0VBRUEsSUFBSUcsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHOztFQUUxQztFQUNBO0VBQ0EsSUFBSW5DLFVBQVUsQ0FBQ29DLGVBQWUsRUFBRTtJQUM1QixJQUFJQyxZQUFZLEdBQUdyQyxVQUFVLENBQUNvQyxlQUFlLENBQUNFLHdCQUF3QixFQUFFO0lBRXhFOUMsVUFBVSxDQUFDUSxVQUFVLEVBQUV5QixNQUFNLENBQUM7SUFDOUJZLFlBQVksQ0FBQ0UsY0FBYyxDQUFDZCxNQUFNLENBQUNlLENBQUMsRUFBRWYsTUFBTSxDQUFDZ0IsQ0FBQyxFQUFFaEIsTUFBTSxDQUFDO0lBRXZERyxHQUFHLEdBQUdILE1BQU0sQ0FBQ2UsQ0FBQztJQUNkWCxHQUFHLEdBQUdKLE1BQU0sQ0FBQ2dCLENBQUM7SUFFZGhELFdBQVcsQ0FBQ08sVUFBVSxFQUFFeUIsTUFBTSxDQUFDO0lBQy9CWSxZQUFZLENBQUNFLGNBQWMsQ0FBQ2QsTUFBTSxDQUFDZSxDQUFDLEVBQUVmLE1BQU0sQ0FBQ2dCLENBQUMsRUFBRWhCLE1BQU0sQ0FBQztJQUV2REssR0FBRyxHQUFHTCxNQUFNLENBQUNlLENBQUM7SUFDZFQsR0FBRyxHQUFHTixNQUFNLENBQUNnQixDQUFDO0lBRWQvQyxhQUFhLENBQUNNLFVBQVUsRUFBRXlCLE1BQU0sQ0FBQztJQUFDO0lBQ2xDWSxZQUFZLENBQUNFLGNBQWMsQ0FBQ2QsTUFBTSxDQUFDZSxDQUFDLEVBQUVmLE1BQU0sQ0FBQ2dCLENBQUMsRUFBRWhCLE1BQU0sQ0FBQztJQUV2RE8sR0FBRyxHQUFHUCxNQUFNLENBQUNlLENBQUM7SUFDZFAsR0FBRyxHQUFHUixNQUFNLENBQUNnQixDQUFDO0lBRWQ5QyxjQUFjLENBQUNLLFVBQVUsRUFBRXlCLE1BQU0sQ0FBQztJQUNsQ1ksWUFBWSxDQUFDRSxjQUFjLENBQUNkLE1BQU0sQ0FBQ2UsQ0FBQyxFQUFFZixNQUFNLENBQUNnQixDQUFDLEVBQUVoQixNQUFNLENBQUM7SUFFdkRTLEdBQUcsR0FBR1QsTUFBTSxDQUFDZSxDQUFDO0lBQ2RMLEdBQUcsR0FBR1YsTUFBTSxDQUFDZ0IsQ0FBQztFQUNsQixDQUFDLE1BQ0k7SUFDRGpELFVBQVUsQ0FBQ1EsVUFBVSxFQUFFeUIsTUFBTSxDQUFDO0lBRTlCRyxHQUFHLEdBQUdILE1BQU0sQ0FBQ2UsQ0FBQztJQUNkWCxHQUFHLEdBQUdKLE1BQU0sQ0FBQ2dCLENBQUM7SUFFZGhELFdBQVcsQ0FBQ08sVUFBVSxFQUFFeUIsTUFBTSxDQUFDO0lBQUM7SUFFaENLLEdBQUcsR0FBR0wsTUFBTSxDQUFDZSxDQUFDO0lBQ2RULEdBQUcsR0FBR04sTUFBTSxDQUFDZ0IsQ0FBQztJQUVkL0MsYUFBYSxDQUFDTSxVQUFVLEVBQUV5QixNQUFNLENBQUM7SUFBQztJQUVsQ08sR0FBRyxHQUFHUCxNQUFNLENBQUNlLENBQUM7SUFDZFAsR0FBRyxHQUFHUixNQUFNLENBQUNnQixDQUFDO0lBRWQ5QyxjQUFjLENBQUNLLFVBQVUsRUFBRXlCLE1BQU0sQ0FBQztJQUVsQ1MsR0FBRyxHQUFHVCxNQUFNLENBQUNlLENBQUM7SUFDZEwsR0FBRyxHQUFHVixNQUFNLENBQUNnQixDQUFDO0VBQ2xCO0VBRUFoQixNQUFNLENBQUNlLENBQUMsR0FBR2xCLElBQUksQ0FBQ29CLEdBQUcsQ0FBQ2QsR0FBRyxFQUFFRSxHQUFHLEVBQUVFLEdBQUcsRUFBRUUsR0FBRyxDQUFDO0VBQ3ZDVCxNQUFNLENBQUNnQixDQUFDLEdBQUduQixJQUFJLENBQUNvQixHQUFHLENBQUNiLEdBQUcsRUFBRUUsR0FBRyxFQUFFRSxHQUFHLEVBQUVFLEdBQUcsQ0FBQztFQUN2Q1YsTUFBTSxDQUFDa0IsS0FBSyxHQUFHckIsSUFBSSxDQUFDc0IsR0FBRyxDQUFDaEIsR0FBRyxFQUFFRSxHQUFHLEVBQUVFLEdBQUcsRUFBRUUsR0FBRyxDQUFDLEdBQUdULE1BQU0sQ0FBQ2UsQ0FBQztFQUN0RGYsTUFBTSxDQUFDb0IsTUFBTSxHQUFHdkIsSUFBSSxDQUFDc0IsR0FBRyxDQUFDZixHQUFHLEVBQUVFLEdBQUcsRUFBRUUsR0FBRyxFQUFFRSxHQUFHLENBQUMsR0FBR1YsTUFBTSxDQUFDZ0IsQ0FBQztFQUV2RCxPQUFPaEIsTUFBTTtBQUNqQixDQUFDO0FBRUQsSUFBSUMsUUFBUSxHQUFHeEIsU0FBUztBQUV4QixJQUFJVixVQUFVLEdBQUcsVUFBVVEsVUFBVSxFQUFFeUIsTUFBTSxFQUFFcUIsYUFBYSxFQUFFO0VBQzFELElBQUlyQixNQUFNLEtBQUt2QixTQUFTLEVBQUU7SUFDdEJ1QixNQUFNLEdBQUcsSUFBSUosT0FBTyxFQUFFO0VBQzFCLENBQUMsTUFBTSxJQUFJSSxNQUFNLEtBQUssSUFBSSxFQUFFO0lBQ3hCLElBQUlzQixVQUFVLEtBQUs3QyxTQUFTLEVBQUU7TUFDMUI2QyxVQUFVLEdBQUcsSUFBSTFCLE9BQU8sRUFBRTtJQUM5QjtJQUNBSSxNQUFNLEdBQUdzQixVQUFVO0VBQ3ZCO0VBRUEsSUFBSS9DLFVBQVUsQ0FBQ2dELFVBQVUsRUFBRTtJQUN2QixPQUFPaEQsVUFBVSxDQUFDZ0QsVUFBVSxDQUFDdkIsTUFBTSxDQUFDO0VBQ3hDO0VBRUFBLE1BQU0sQ0FBQ2UsQ0FBQyxHQUFHeEMsVUFBVSxDQUFDd0MsQ0FBQyxHQUFJdEIsbUVBQWUsQ0FBQ2xCLFVBQVUsQ0FBQyxHQUFHQSxVQUFVLENBQUNpRCxPQUFRO0VBQzVFeEIsTUFBTSxDQUFDZ0IsQ0FBQyxHQUFHekMsVUFBVSxDQUFDeUMsQ0FBQyxHQUFJdEIsb0VBQWdCLENBQUNuQixVQUFVLENBQUMsR0FBR0EsVUFBVSxDQUFDa0QsT0FBUTtFQUU3RSxPQUFPQyxtQkFBbUIsQ0FBQ25ELFVBQVUsRUFBRXlCLE1BQU0sRUFBRXFCLGFBQWEsQ0FBQztBQUNqRSxDQUFDO0FBRUQsSUFBSXJELFdBQVcsR0FBRyxVQUFVTyxVQUFVLEVBQUV5QixNQUFNLEVBQUVxQixhQUFhLEVBQUU7RUFDM0QsSUFBSXJCLE1BQU0sS0FBS3ZCLFNBQVMsRUFBRTtJQUN0QnVCLE1BQU0sR0FBRyxJQUFJSixPQUFPLEVBQUU7RUFDMUIsQ0FBQyxNQUFNLElBQUlJLE1BQU0sS0FBSyxJQUFJLEVBQUU7SUFDeEIsSUFBSXNCLFVBQVUsS0FBSzdDLFNBQVMsRUFBRTtNQUMxQjZDLFVBQVUsR0FBRyxJQUFJMUIsT0FBTyxFQUFFO0lBQzlCO0lBQ0FJLE1BQU0sR0FBR3NCLFVBQVU7RUFDdkI7RUFFQSxJQUFJL0MsVUFBVSxDQUFDb0QsV0FBVyxFQUFFO0lBQ3hCLE9BQU9wRCxVQUFVLENBQUNvRCxXQUFXLENBQUMzQixNQUFNLENBQUM7RUFDekM7RUFFQUEsTUFBTSxDQUFDZSxDQUFDLEdBQUl4QyxVQUFVLENBQUN3QyxDQUFDLEdBQUl0QixtRUFBZSxDQUFDbEIsVUFBVSxDQUFDLEdBQUdBLFVBQVUsQ0FBQ2lELE9BQVEsR0FBSS9CLG1FQUFlLENBQUNsQixVQUFVLENBQUM7RUFDNUd5QixNQUFNLENBQUNnQixDQUFDLEdBQUd6QyxVQUFVLENBQUN5QyxDQUFDLEdBQUl0QixvRUFBZ0IsQ0FBQ25CLFVBQVUsQ0FBQyxHQUFHQSxVQUFVLENBQUNrRCxPQUFRO0VBRTdFLE9BQU9DLG1CQUFtQixDQUFDbkQsVUFBVSxFQUFFeUIsTUFBTSxFQUFFcUIsYUFBYSxDQUFDO0FBQ2pFLENBQUM7QUFFRCxJQUFJcEQsYUFBYSxHQUFHLFVBQVVNLFVBQVUsRUFBRXlCLE1BQU0sRUFBRXFCLGFBQWEsRUFBRTtFQUM3RCxJQUFJckIsTUFBTSxLQUFLdkIsU0FBUyxFQUFFO0lBQ3RCdUIsTUFBTSxHQUFHLElBQUlKLE9BQU8sRUFBRTtFQUMxQixDQUFDLE1BQU0sSUFBSUksTUFBTSxLQUFLLElBQUksRUFBRTtJQUN4QixJQUFJc0IsVUFBVSxLQUFLN0MsU0FBUyxFQUFFO01BQzFCNkMsVUFBVSxHQUFHLElBQUkxQixPQUFPLEVBQUU7SUFDOUI7SUFDQUksTUFBTSxHQUFHc0IsVUFBVTtFQUN2QjtFQUVBLElBQUkvQyxVQUFVLENBQUNxRCxhQUFhLEVBQUU7SUFDMUIsT0FBT3JELFVBQVUsQ0FBQ3FELGFBQWEsQ0FBQzVCLE1BQU0sQ0FBQztFQUMzQztFQUVBQSxNQUFNLENBQUNlLENBQUMsR0FBR3hDLFVBQVUsQ0FBQ3dDLENBQUMsR0FBSXRCLG1FQUFlLENBQUNsQixVQUFVLENBQUMsR0FBR0EsVUFBVSxDQUFDaUQsT0FBUTtFQUM1RXhCLE1BQU0sQ0FBQ2dCLENBQUMsR0FBSXpDLFVBQVUsQ0FBQ3lDLENBQUMsR0FBSXRCLG9FQUFnQixDQUFDbkIsVUFBVSxDQUFDLEdBQUdBLFVBQVUsQ0FBQ2tELE9BQVEsR0FBSS9CLG9FQUFnQixDQUFDbkIsVUFBVSxDQUFDO0VBRTlHLE9BQU9tRCxtQkFBbUIsQ0FBQ25ELFVBQVUsRUFBRXlCLE1BQU0sRUFBRXFCLGFBQWEsQ0FBQztBQUNqRSxDQUFDO0FBRUQsSUFBSW5ELGNBQWMsR0FBRyxVQUFVSyxVQUFVLEVBQUV5QixNQUFNLEVBQUVxQixhQUFhLEVBQUU7RUFDOUQsSUFBSXJCLE1BQU0sS0FBS3ZCLFNBQVMsRUFBRTtJQUN0QnVCLE1BQU0sR0FBRyxJQUFJSixPQUFPLEVBQUU7RUFDMUIsQ0FBQyxNQUFNLElBQUlJLE1BQU0sS0FBSyxJQUFJLEVBQUU7SUFDeEIsSUFBSXNCLFVBQVUsS0FBSzdDLFNBQVMsRUFBRTtNQUMxQjZDLFVBQVUsR0FBRyxJQUFJMUIsT0FBTyxFQUFFO0lBQzlCO0lBQ0FJLE1BQU0sR0FBR3NCLFVBQVU7RUFDdkI7RUFFQSxJQUFJL0MsVUFBVSxDQUFDc0QsY0FBYyxFQUFFO0lBQzNCLE9BQU90RCxVQUFVLENBQUNzRCxjQUFjLENBQUM3QixNQUFNLENBQUM7RUFDNUM7RUFFQUEsTUFBTSxDQUFDZSxDQUFDLEdBQUl4QyxVQUFVLENBQUN3QyxDQUFDLEdBQUl0QixtRUFBZSxDQUFDbEIsVUFBVSxDQUFDLEdBQUdBLFVBQVUsQ0FBQ2lELE9BQVEsR0FBSS9CLG1FQUFlLENBQUNsQixVQUFVLENBQUM7RUFDNUd5QixNQUFNLENBQUNnQixDQUFDLEdBQUl6QyxVQUFVLENBQUN5QyxDQUFDLEdBQUl0QixvRUFBZ0IsQ0FBQ25CLFVBQVUsQ0FBQyxHQUFHQSxVQUFVLENBQUNrRCxPQUFRLEdBQUkvQixvRUFBZ0IsQ0FBQ25CLFVBQVUsQ0FBQztFQUU5RyxPQUFPbUQsbUJBQW1CLENBQUNuRCxVQUFVLEVBQUV5QixNQUFNLEVBQUVxQixhQUFhLENBQUM7QUFDakUsQ0FBQztBQUVELElBQUlDLFVBQVUsR0FBRzdDLFNBQVM7QUFFMUIsSUFBSWlELG1CQUFtQixHQUFHLFVBQVVuRCxVQUFVLEVBQUV5QixNQUFNLEVBQUVxQixhQUFhLEVBQUU7RUFDbkUsSUFBSUEsYUFBYSxLQUFLNUMsU0FBUyxFQUFFO0lBQUU0QyxhQUFhLEdBQUcsS0FBSztFQUFFO0VBRTFELElBQUk5QyxVQUFVLENBQUN1RCxRQUFRLEtBQUssQ0FBQyxFQUFFO0lBQzNCaEMsWUFBWSxDQUFDRSxNQUFNLEVBQUV6QixVQUFVLENBQUN3QyxDQUFDLEVBQUV4QyxVQUFVLENBQUN5QyxDQUFDLEVBQUV6QyxVQUFVLENBQUN1RCxRQUFRLENBQUM7RUFDekU7RUFFQSxJQUFJVCxhQUFhLElBQUk5QyxVQUFVLENBQUNvQyxlQUFlLEVBQUU7SUFDN0MsSUFBSUMsWUFBWSxHQUFHckMsVUFBVSxDQUFDb0MsZUFBZSxDQUFDRSx3QkFBd0IsRUFBRTtJQUV4RUQsWUFBWSxDQUFDRSxjQUFjLENBQUNkLE1BQU0sQ0FBQ2UsQ0FBQyxFQUFFZixNQUFNLENBQUNnQixDQUFDLEVBQUVoQixNQUFNLENBQUM7RUFDM0Q7RUFFQSxPQUFPQSxNQUFNO0FBQ2pCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4TEQsSUFBSVAsZUFBZSxHQUFHLFVBQVVsQixVQUFVLEVBQUU7RUFDeEMsSUFBSUEsVUFBVSxDQUFDd0QsWUFBWSxLQUFLdEQsU0FBUyxFQUFFO0lBQ3ZDLE9BQU9GLFVBQVUsQ0FBQ3dELFlBQVk7RUFDbEMsQ0FBQyxNQUFNO0lBQ0gsT0FBT3hELFVBQVUsQ0FBQzJDLEtBQUs7RUFDM0I7QUFDSixDQUFDO0FBRUQsSUFBSXhCLGdCQUFnQixHQUFHLFVBQVVuQixVQUFVLEVBQUU7RUFDekMsSUFBSUEsVUFBVSxDQUFDeUQsYUFBYSxLQUFLdkQsU0FBUyxFQUFFO0lBQ3hDLE9BQU9GLFVBQVUsQ0FBQ3lELGFBQWE7RUFDbkMsQ0FBQyxNQUFNO0lBQ0gsT0FBT3pELFVBQVUsQ0FBQzZDLE1BQU07RUFDNUI7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNkRCxNQUFNYSxhQUFhLEdBQUc3RCxNQUFNLENBQUNDLElBQUksQ0FBQzZELFVBQVUsQ0FBQ0QsYUFBYTtBQUMxRCxNQUFNRSxXQUFXLEdBQUcvRCxNQUFNLENBQUNDLElBQUksQ0FBQzZELFVBQVUsQ0FBQ0MsV0FBVztBQUV0RCxJQUFJQyxlQUFlLEdBQUcsVUFBVUMsSUFBSSxFQUFFQyxNQUFNLEVBQUU5RCxHQUFHLEVBQUU7RUFDL0MsSUFBSUEsR0FBRyxLQUFLQyxTQUFTLEVBQUU7SUFDbkJELEdBQUcsR0FBRyxDQUFDLENBQUM7RUFDWixDQUFDLE1BQU0sSUFBSUEsR0FBRyxLQUFLLElBQUksRUFBRTtJQUNyQkEsR0FBRyxHQUFHK0QsVUFBVTtFQUNwQjtFQUNBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztFQUVJLElBQUlDLGdCQUFnQixHQUFHLEtBQUs7RUFFNUJDLFVBQVUsQ0FBQzNELEtBQUssQ0FBQ3VELElBQUksQ0FBQ0ssRUFBRSxFQUFFTCxJQUFJLENBQUNNLEVBQUUsQ0FBQztFQUNsQ25FLEdBQUcsQ0FBQ29FLENBQUMsR0FBR0MsUUFBUTtFQUNoQkMsYUFBYSxDQUFDQyxHQUFHLEVBQUU7RUFFbkIsSUFBSUMsSUFBSSxHQUFHVixNQUFNLENBQUMsQ0FBQyxDQUFDO0VBRXBCLEtBQUssSUFBSS9DLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRytDLE1BQU0sQ0FBQ25ELE1BQU0sRUFBRUksQ0FBQyxFQUFFLEVBQUU7SUFDcEMsSUFBSTBELE9BQU8sR0FBR1gsTUFBTSxDQUFDL0MsQ0FBQyxDQUFDO0lBRXZCMkQsT0FBTyxDQUFDcEUsS0FBSyxDQUFDa0UsSUFBSSxDQUFDakMsQ0FBQyxFQUFFaUMsSUFBSSxDQUFDaEMsQ0FBQyxFQUFFaUMsT0FBTyxDQUFDbEMsQ0FBQyxFQUFFa0MsT0FBTyxDQUFDakMsQ0FBQyxDQUFDO0lBQ25EZ0MsSUFBSSxHQUFHQyxPQUFPOztJQUVkO0lBQ0EsSUFBSWQsV0FBVyxDQUFDTSxVQUFVLEVBQUVTLE9BQU8sQ0FBQyxFQUFFO01BQ2xDO0lBQ0o7SUFFQSxJQUFJakIsYUFBYSxDQUFDSSxJQUFJLEVBQUVhLE9BQU8sRUFBRUosYUFBYSxDQUFDLEVBQUU7TUFDN0MsSUFBSUEsYUFBYSxDQUFDSyxDQUFDLEdBQUczRSxHQUFHLENBQUNvRSxDQUFDLEVBQUU7UUFDekJwRSxHQUFHLENBQUN1QyxDQUFDLEdBQUcrQixhQUFhLENBQUMvQixDQUFDO1FBQ3ZCdkMsR0FBRyxDQUFDd0MsQ0FBQyxHQUFHOEIsYUFBYSxDQUFDOUIsQ0FBQztRQUN2QnhDLEdBQUcsQ0FBQ29FLENBQUMsR0FBR0UsYUFBYSxDQUFDSyxDQUFDO1FBQ3ZCM0UsR0FBRyxDQUFDNEUsUUFBUSxHQUFHN0QsQ0FBQyxHQUFHLENBQUM7UUFFcEJpRCxnQkFBZ0IsR0FBRyxJQUFJO01BQzNCO0lBQ0o7RUFDSjtFQUVBLE9BQVFBLGdCQUFnQixHQUFJaEUsR0FBRyxHQUFHLElBQUk7QUFDMUMsQ0FBQztBQUVELElBQUkrRCxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLElBQUlFLFVBQVUsR0FBRyxJQUFJckUsTUFBTSxDQUFDQyxJQUFJLENBQUNnRixLQUFLLEVBQUU7QUFDeEMsSUFBSUgsT0FBTyxHQUFHLElBQUk5RSxNQUFNLENBQUNDLElBQUksQ0FBQ2lGLElBQUksRUFBRTtBQUNwQyxJQUFJUixhQUFhLEdBQUcsSUFBSTFFLE1BQU0sQ0FBQ3lCLElBQUksQ0FBQzBELE9BQU8sRUFBRTtBQUU3QyxpRUFBZW5CLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RHFCO0FBQ3BCO0FBRS9CLE1BQU1vQixPQUFPLEdBQUdwRixNQUFNLENBQUNDLElBQUksQ0FBQ0YsT0FBTyxDQUFDcUYsT0FBTztBQUMzQyxNQUFNQyxlQUFlLEdBQUdyRixNQUFNLENBQUNDLElBQUksQ0FBQzZELFVBQVUsQ0FBQ3VCLGVBQWU7QUFFOUQsSUFBSUMsZ0JBQWdCLEdBQUcsVUFBVXJCLElBQUksRUFBRXNCLFFBQVEsRUFBRW5GLEdBQUcsRUFBRTtFQUNsRCxJQUFJQSxHQUFHLEtBQUtDLFNBQVMsRUFBRTtJQUNuQkQsR0FBRyxHQUFHLENBQUMsQ0FBQztFQUNaLENBQUMsTUFBTSxJQUFJQSxHQUFHLEtBQUssSUFBSSxFQUFFO0lBQ3JCQSxHQUFHLEdBQUcrRCxVQUFVO0VBQ3BCO0VBQ0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFSSxJQUFJLENBQUN0RCxLQUFLLENBQUNDLE9BQU8sQ0FBQ3lFLFFBQVEsQ0FBQyxFQUFFO0lBQzFCQSxRQUFRLEdBQUcsQ0FBQ0EsUUFBUSxDQUFDO0VBQ3pCO0VBRUEsSUFBSW5CLGdCQUFnQixHQUFHLEtBQUs7RUFDNUJoRSxHQUFHLENBQUNvRSxDQUFDLEdBQUdDLFFBQVE7O0VBRWhCOztFQUVBLEtBQUssSUFBSXRELENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR29FLFFBQVEsQ0FBQ3hFLE1BQU0sRUFBRUksQ0FBQyxFQUFFLEVBQUU7SUFDdEMsSUFBSXFFLE9BQU8sR0FBR0QsUUFBUSxDQUFDcEUsQ0FBQyxDQUFDOztJQUV6QjtJQUNBLElBQUtxRSxPQUFPLENBQUN0QixNQUFNLENBQUNuRCxNQUFNLEdBQUcsQ0FBQyxJQUMxQixDQUFDc0UsZUFBZSxDQUFDcEIsSUFBSSxFQUFFbUIsT0FBTyxDQUFDSSxPQUFPLEVBQUVDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7TUFDcEQ7SUFDSjtJQUVBLElBQUlDLGtCQUFrQixHQUFHMUIsK0RBQWUsQ0FBQ0MsSUFBSSxFQUFFdUIsT0FBTyxDQUFDdEIsTUFBTSxFQUFFLElBQUksQ0FBQztJQUNwRSxJQUFJd0Isa0JBQWtCLEVBQUU7TUFDcEIsSUFBSUEsa0JBQWtCLENBQUNsQixDQUFDLEdBQUdwRSxHQUFHLENBQUNvRSxDQUFDLEVBQUU7UUFDOUJ2RCxxREFBSyxDQUFDeUUsa0JBQWtCLEVBQUV0RixHQUFHLENBQUMsQ0FBQyxDQUFFO1FBQ2pDQSxHQUFHLENBQUN1RixVQUFVLEdBQUd4RSxDQUFDO1FBRWxCaUQsZ0JBQWdCLEdBQUcsSUFBSTtNQUMzQjtJQUNKO0VBQ0o7RUFFQSxPQUFRQSxnQkFBZ0IsR0FBSWhFLEdBQUcsR0FBRyxJQUFJO0FBQzFDLENBQUM7QUFFRCxJQUFJK0QsVUFBVSxHQUFHLENBQUMsQ0FBQztBQUNuQixJQUFJc0IsUUFBUSxHQUFHLElBQUl6RixNQUFNLENBQUNDLElBQUksQ0FBQ3NCLFNBQVMsRUFBRTtBQUUxQyxpRUFBZStELGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7QUN4RC9CLE1BQU1NLGVBQWUsR0FBRzVGLE1BQU0sQ0FBQzZGLFdBQVcsQ0FBQ0MsVUFBVTtBQUNyRCxJQUFJQyxZQUFZLEdBQUcsVUFBVUMsTUFBTSxFQUFFO0VBQ2pDLE9BQVFBLE1BQU0sWUFBWUosZUFBZTtBQUM3QyxDQUFDO0FBQ0QsaUVBQWVHLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKa0I7QUFDTTtBQUVuRCxNQUFNaEcsT0FBTyxHQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQ0YsT0FBTztBQUNuQyxNQUFNa0csU0FBUyxHQUFHakcsTUFBTSxDQUFDa0csS0FBSyxDQUFDckYsS0FBSyxDQUFDb0YsU0FBUztBQUU5QyxNQUFNRSxTQUFTLENBQUM7RUFDWkMsV0FBVyxHQUFHO0lBQ1YsSUFBSSxDQUFDQyxXQUFXLEdBQUcsRUFBRTtJQUNyQixJQUFJLENBQUNkLFFBQVEsR0FBRyxFQUFFO0VBQ3RCO0VBRUFlLFFBQVEsQ0FBQ25HLFVBQVUsRUFBRTtJQUNqQixPQUFRLElBQUksQ0FBQ2tHLFdBQVcsQ0FBQ0UsT0FBTyxDQUFDcEcsVUFBVSxDQUFDLEtBQU0sQ0FBQyxDQUFFO0VBQ3pEO0VBRUFxRyxHQUFHLENBQUNDLEtBQUssRUFBRTtJQUNQQyxRQUFRLENBQUN2RyxVQUFVLEdBQUcsSUFBSSxDQUFDa0csV0FBVyxDQUFDSSxLQUFLLENBQUM7SUFDN0NDLFFBQVEsQ0FBQ2xCLE9BQU8sR0FBRyxJQUFJLENBQUNELFFBQVEsQ0FBQ2tCLEtBQUssQ0FBQztJQUN2QyxPQUFPQyxRQUFRO0VBQ25CO0VBRUFDLGtCQUFrQixDQUFDeEcsVUFBVSxFQUFFO0lBQzNCLElBQUlVLEtBQUssQ0FBQ0MsT0FBTyxDQUFDWCxVQUFVLENBQUMsRUFBRTtNQUMzQixJQUFJa0csV0FBVyxHQUFHbEcsVUFBVTtNQUM1QixLQUFLLElBQUlnQixDQUFDLEdBQUcsQ0FBQyxFQUFFQyxHQUFHLEdBQUdpRixXQUFXLENBQUN0RixNQUFNLEVBQUVJLENBQUMsR0FBR0MsR0FBRyxFQUFFRCxDQUFDLEVBQUUsRUFBRTtRQUNwRCxJQUFJLENBQUN3RixrQkFBa0IsQ0FBQ04sV0FBVyxDQUFDbEYsQ0FBQyxDQUFDLENBQUM7TUFDM0M7TUFDQSxPQUFPLElBQUk7SUFDZjtJQUVBLElBQUloQixVQUFVLENBQUN5RyxFQUFFLEVBQUU7TUFDZnpHLFVBQVUsQ0FBQzBHLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDQyxjQUFjLEVBQUUsSUFBSSxDQUFDO0lBQ3pEO0lBQ0EsT0FBTyxJQUFJO0VBQ2Y7RUFFQUMscUJBQXFCLENBQUM1RyxVQUFVLEVBQUU7SUFDOUIsSUFBSVUsS0FBSyxDQUFDQyxPQUFPLENBQUNYLFVBQVUsQ0FBQyxFQUFFO01BQzNCLElBQUlrRyxXQUFXLEdBQUdsRyxVQUFVO01BQzVCLEtBQUssSUFBSWdCLENBQUMsR0FBRyxDQUFDLEVBQUVDLEdBQUcsR0FBR2lGLFdBQVcsQ0FBQ3RGLE1BQU0sRUFBRUksQ0FBQyxHQUFHQyxHQUFHLEVBQUVELENBQUMsRUFBRSxFQUFFO1FBQ3BELElBQUksQ0FBQzRGLHFCQUFxQixDQUFDVixXQUFXLENBQUNsRixDQUFDLENBQUMsQ0FBQztNQUM5QztNQUNBLE9BQU8sSUFBSTtJQUNmO0lBRUEsSUFBSWhCLFVBQVUsQ0FBQzZHLEdBQUcsRUFBRTtNQUNoQjdHLFVBQVUsQ0FBQzZHLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDRixjQUFjLEVBQUUsSUFBSSxDQUFDO0lBQ3hEO0lBQ0EsT0FBTyxJQUFJO0VBQ2Y7RUFFQUcsS0FBSyxHQUFHO0lBQ0osSUFBSSxDQUFDRixxQkFBcUIsQ0FBQyxJQUFJLENBQUNWLFdBQVcsQ0FBQztJQUM1QyxJQUFJLENBQUNBLFdBQVcsQ0FBQ3RGLE1BQU0sR0FBRyxDQUFDO0lBQzNCLElBQUksQ0FBQ3dFLFFBQVEsQ0FBQ3hFLE1BQU0sR0FBRyxDQUFDO0lBQ3hCLE9BQU8sSUFBSTtFQUNmO0VBRUFtRyxHQUFHLENBQUMvRyxVQUFVLEVBQUVxRixPQUFPLEVBQUU7SUFDckIsSUFBSSxJQUFJLENBQUNjLFFBQVEsQ0FBQ25HLFVBQVUsQ0FBQyxFQUFFO01BQzNCLE9BQU8sSUFBSTtJQUNmO0lBRUEsSUFBSTRGLDREQUFZLENBQUM1RixVQUFVLENBQUMsRUFBRTtNQUMxQixJQUFJcUYsT0FBTyxLQUFLbkYsU0FBUyxFQUFFO1FBQ3ZCbUYsT0FBTyxHQUFHdEYsK0RBQWUsQ0FBQ0MsVUFBVSxDQUFDO01BQ3pDO0lBQ0osQ0FBQyxNQUFNLElBQUlBLFVBQVUsWUFBYUosT0FBUSxFQUFFO01BQ3hDeUYsT0FBTyxHQUFHckYsVUFBVTtJQUN4QjtJQUVBLElBQUksQ0FBQ2tHLFdBQVcsQ0FBQ2MsSUFBSSxDQUFDaEgsVUFBVSxDQUFDO0lBQ2pDLElBQUksQ0FBQ29GLFFBQVEsQ0FBQzRCLElBQUksQ0FBQzNCLE9BQU8sQ0FBQztJQUUzQixJQUFJLENBQUNtQixrQkFBa0IsQ0FBQ3hHLFVBQVUsQ0FBQztJQUNuQyxPQUFPLElBQUk7RUFDZjtFQUVBaUgsTUFBTSxDQUFDakgsVUFBVSxFQUFFO0lBQ2YsSUFBSXNHLEtBQUssR0FBRyxJQUFJLENBQUNKLFdBQVcsQ0FBQ0UsT0FBTyxDQUFDcEcsVUFBVSxDQUFDO0lBQ2hELElBQUlzRyxLQUFLLEtBQU0sQ0FBQyxDQUFFLEVBQUU7TUFDaEIsT0FBTyxJQUFJO0lBQ2Y7SUFFQVIsU0FBUyxDQUFDLElBQUksQ0FBQ0ksV0FBVyxFQUFFSSxLQUFLLENBQUM7SUFDbENSLFNBQVMsQ0FBQyxJQUFJLENBQUNWLFFBQVEsRUFBRWtCLEtBQUssQ0FBQztJQUUvQixJQUFJLENBQUNNLHFCQUFxQixDQUFDNUcsVUFBVSxDQUFDO0lBQ3RDLE9BQU8sSUFBSTtFQUNmO0VBRUEyRyxjQUFjLENBQUNPLEtBQUssRUFBRUMsU0FBUyxFQUFFO0lBQzdCLElBQUksQ0FBQ0YsTUFBTSxDQUFDQyxLQUFLLENBQUM7RUFDdEI7RUFFQUUsTUFBTSxDQUFDcEgsVUFBVSxFQUFFcUYsT0FBTyxFQUFFO0lBQ3hCLElBQUlpQixLQUFLLEdBQUcsSUFBSSxDQUFDSixXQUFXLENBQUNFLE9BQU8sQ0FBQ3BHLFVBQVUsQ0FBQztJQUNoRCxJQUFJc0csS0FBSyxLQUFNLENBQUMsQ0FBRSxFQUFFO01BQ2hCLE9BQU8sSUFBSTtJQUNmO0lBQ0EsSUFBSWpCLE9BQU8sS0FBS25GLFNBQVMsRUFBRTtNQUN2Qm1GLE9BQU8sR0FBR3RGLCtEQUFlLENBQUNDLFVBQVUsRUFBRSxJQUFJLENBQUNvRixRQUFRLENBQUNrQixLQUFLLENBQUMsQ0FBQztJQUMvRDtJQUNBLElBQUksQ0FBQ2xCLFFBQVEsQ0FBQ2tCLEtBQUssQ0FBQyxHQUFHakIsT0FBTztJQUM5QixPQUFPLElBQUk7RUFDZjtBQUNKO0FBRUEsSUFBSWtCLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFFakIsaUVBQWVQLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvR2U7QUFDYztBQUVyRCxNQUFNcUIsUUFBUSxHQUFHeEgsTUFBTSxDQUFDa0csS0FBSyxDQUFDdUIsT0FBTyxDQUFDRCxRQUFRO0FBQzlDLE1BQU10QyxJQUFJLEdBQUdsRixNQUFNLENBQUNDLElBQUksQ0FBQ2lGLElBQUk7QUFDN0IsTUFBTXdDLFVBQVUsR0FBRzFILE1BQU0sQ0FBQ0MsSUFBSSxDQUFDaUYsSUFBSSxDQUFDd0MsVUFBVTtBQUM5QyxNQUFNQyxZQUFZLEdBQUczSCxNQUFNLENBQUNDLElBQUksQ0FBQ2lGLElBQUksQ0FBQ3lDLFlBQVk7QUFFM0MsTUFBTUMsU0FBUyxDQUFDO0VBQ25CeEIsV0FBVyxDQUFDeUIsTUFBTSxFQUFFO0lBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHLElBQUkzQixxREFBUyxFQUFFO0lBQ2hDLElBQUksQ0FBQzRCLEdBQUcsR0FBRyxJQUFJN0MsSUFBSSxFQUFFO0lBQ3JCLElBQUksQ0FBQzhDLGVBQWUsQ0FBQ1IsUUFBUSxDQUFDSyxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdELElBQUksQ0FBQ0ksTUFBTSxHQUFHO01BQ1ZDLEdBQUcsRUFBRSxLQUFLO01BQ1Z2RixDQUFDLEVBQUUsQ0FBQztNQUFFQyxDQUFDLEVBQUUsQ0FBQztNQUNWa0MsT0FBTyxFQUFFLElBQUlJLElBQUksRUFBRTtNQUNuQk0sT0FBTyxFQUFFLElBQUk7TUFDYnJGLFVBQVUsRUFBRSxJQUFJO01BQ2hCZ0ksWUFBWSxFQUFFO0lBQ2xCLENBQUM7RUFFTDtFQUVBQyxPQUFPLEdBQUc7SUFDTixJQUFJLENBQUNOLFNBQVMsQ0FBQ2IsS0FBSyxFQUFFO0lBQ3RCLElBQUksQ0FBQ2EsU0FBUyxHQUFHLElBQUk7SUFDckIsSUFBSSxDQUFDQyxHQUFHLEdBQUcsSUFBSTtJQUNmLElBQUksQ0FBQ0UsTUFBTSxHQUFHLElBQUk7RUFDdEI7RUFFQUQsZUFBZSxDQUFDakgsTUFBTSxFQUFFO0lBQ3BCLElBQUksQ0FBQ3NILFlBQVksR0FBR3RILE1BQU07SUFDMUIsT0FBTyxJQUFJO0VBQ2Y7RUFFQXVILFdBQVcsQ0FBQ25JLFVBQVUsRUFBRXFGLE9BQU8sRUFBRTtJQUM3QixJQUFJM0UsS0FBSyxDQUFDQyxPQUFPLENBQUNYLFVBQVUsQ0FBQyxFQUFFO01BQzNCLElBQUlrRyxXQUFXLEdBQUdsRyxVQUFVO01BQzVCLEtBQUssSUFBSWdCLENBQUMsR0FBRyxDQUFDLEVBQUVDLEdBQUcsR0FBR2lGLFdBQVcsQ0FBQ3RGLE1BQU0sRUFBRUksQ0FBQyxHQUFHQyxHQUFHLEVBQUVELENBQUMsRUFBRSxFQUFFO1FBQ3BELElBQUksQ0FBQzJHLFNBQVMsQ0FBQ1osR0FBRyxDQUFDYixXQUFXLENBQUNsRixDQUFDLENBQUMsQ0FBQztNQUN0QztJQUNKLENBQUMsTUFBTTtNQUNILElBQUksQ0FBQzJHLFNBQVMsQ0FBQ1osR0FBRyxDQUFDL0csVUFBVSxFQUFFcUYsT0FBTyxDQUFDO0lBQzNDO0lBQ0EsT0FBTyxJQUFJO0VBQ2Y7RUFFQStDLGFBQWEsR0FBRztJQUNaLElBQUksQ0FBQ1QsU0FBUyxDQUFDYixLQUFLLEVBQUU7SUFDdEIsT0FBTyxJQUFJO0VBQ2Y7RUFFQXVCLGNBQWMsQ0FBQ3JJLFVBQVUsRUFBRTtJQUN2QixJQUFJVSxLQUFLLENBQUNDLE9BQU8sQ0FBQ1gsVUFBVSxDQUFDLEVBQUU7TUFDM0IsSUFBSWtHLFdBQVcsR0FBR2xHLFVBQVU7TUFDNUIsS0FBSyxJQUFJZ0IsQ0FBQyxHQUFHLENBQUMsRUFBRUMsR0FBRyxHQUFHaUYsV0FBVyxDQUFDdEYsTUFBTSxFQUFFSSxDQUFDLEdBQUdDLEdBQUcsRUFBRUQsQ0FBQyxFQUFFLEVBQUU7UUFDcEQsSUFBSSxDQUFDMkcsU0FBUyxDQUFDVixNQUFNLENBQUNmLFdBQVcsQ0FBQ2xGLENBQUMsQ0FBQyxDQUFDO01BQ3pDO0lBQ0osQ0FBQyxNQUFNO01BQ0gsSUFBSSxDQUFDMkcsU0FBUyxDQUFDVixNQUFNLENBQUNqSCxVQUFVLENBQUM7SUFDckM7SUFDQSxPQUFPLElBQUk7RUFDZjtFQUVBc0ksY0FBYyxDQUFDdEksVUFBVSxFQUFFcUYsT0FBTyxFQUFFO0lBQ2hDLElBQUkzRSxLQUFLLENBQUNDLE9BQU8sQ0FBQ1gsVUFBVSxDQUFDLEVBQUU7TUFDM0IsSUFBSWtHLFdBQVcsR0FBR2xHLFVBQVU7TUFDNUIsS0FBSyxJQUFJZ0IsQ0FBQyxHQUFHLENBQUMsRUFBRUMsR0FBRyxHQUFHaUYsV0FBVyxDQUFDdEYsTUFBTSxFQUFFSSxDQUFDLEdBQUdDLEdBQUcsRUFBRUQsQ0FBQyxFQUFFLEVBQUU7UUFDcEQsSUFBSSxDQUFDMkcsU0FBUyxDQUFDUCxNQUFNLENBQUNsQixXQUFXLENBQUNsRixDQUFDLENBQUMsQ0FBQztNQUN6QztJQUNKLENBQUMsTUFBTTtNQUNILElBQUksQ0FBQzJHLFNBQVMsQ0FBQ1AsTUFBTSxDQUFDcEgsVUFBVSxFQUFFcUYsT0FBTyxDQUFDO0lBQzlDO0lBQ0EsT0FBTyxJQUFJO0VBQ2Y7RUFFQWtELE9BQU8sR0FBRztJQUNOLElBQUlULE1BQU0sR0FBRzNDLGdFQUFnQixDQUFDLElBQUksQ0FBQ3lDLEdBQUcsRUFBRSxJQUFJLENBQUNELFNBQVMsQ0FBQ3ZDLFFBQVEsRUFBRSxJQUFJLENBQUM7SUFDdEUsSUFBSTBDLE1BQU0sRUFBRTtNQUNSLElBQUksQ0FBQ0YsR0FBRyxDQUFDWSxFQUFFLEdBQUdWLE1BQU0sQ0FBQ3RGLENBQUM7TUFDdEIsSUFBSSxDQUFDb0YsR0FBRyxDQUFDYSxFQUFFLEdBQUdYLE1BQU0sQ0FBQ3JGLENBQUM7TUFFdEIsSUFBSSxDQUFDcUYsTUFBTSxDQUFDQyxHQUFHLEdBQUcsSUFBSTtNQUN0QixJQUFJLENBQUNELE1BQU0sQ0FBQ3RGLENBQUMsR0FBR3NGLE1BQU0sQ0FBQ3RGLENBQUM7TUFDeEIsSUFBSSxDQUFDc0YsTUFBTSxDQUFDckYsQ0FBQyxHQUFHcUYsTUFBTSxDQUFDckYsQ0FBQztNQUV4QixJQUFJaUcsUUFBUSxHQUFHLElBQUksQ0FBQ2YsU0FBUyxDQUFDdEIsR0FBRyxDQUFDeUIsTUFBTSxDQUFDdEMsVUFBVSxDQUFDO01BQ3BELElBQUksQ0FBQ3NDLE1BQU0sQ0FBQ3pDLE9BQU8sR0FBR3FELFFBQVEsQ0FBQ3JELE9BQU87TUFDdEMsSUFBSSxDQUFDeUMsTUFBTSxDQUFDOUgsVUFBVSxHQUFHMEksUUFBUSxDQUFDMUksVUFBVTtNQUU1QyxJQUFJK0QsTUFBTSxHQUFHLElBQUksQ0FBQytELE1BQU0sQ0FBQ3pDLE9BQU8sQ0FBQ3RCLE1BQU07UUFDbkNjLFFBQVEsR0FBR2lELE1BQU0sQ0FBQ2pELFFBQVE7UUFDMUIxRSxFQUFFLEdBQUc0RCxNQUFNLENBQUNjLFFBQVEsQ0FBQztRQUNyQnpFLEVBQUUsR0FBRzJELE1BQU0sQ0FBQ2MsUUFBUSxHQUFHLENBQUMsQ0FBQztNQUM3QixJQUFJRixPQUFPLEdBQUcsSUFBSSxDQUFDbUQsTUFBTSxDQUFDbkQsT0FBTztNQUNqQ0EsT0FBTyxDQUFDcEUsS0FBSyxDQUFDSixFQUFFLENBQUNxQyxDQUFDLEVBQUVyQyxFQUFFLENBQUNzQyxDQUFDLEVBQUVyQyxFQUFFLENBQUNvQyxDQUFDLEVBQUVwQyxFQUFFLENBQUNxQyxDQUFDLENBQUM7TUFDckMsSUFBSSxDQUFDcUYsTUFBTSxDQUFDRSxZQUFZLEdBQUdSLFlBQVksQ0FBQyxJQUFJLENBQUNJLEdBQUcsRUFBRWpELE9BQU8sQ0FBQztJQUM5RCxDQUFDLE1BQU07TUFDSCxJQUFJLENBQUNtRCxNQUFNLENBQUNDLEdBQUcsR0FBRyxLQUFLO0lBQzNCO0lBQ0EsT0FBUUQsTUFBTSxHQUFJLElBQUksQ0FBQ0EsTUFBTSxHQUFHLEtBQUs7RUFDekM7RUFFQWEsU0FBUyxDQUFDbkcsQ0FBQyxFQUFFQyxDQUFDLEVBQUVtRyxLQUFLLEVBQUU7SUFDbkJyQixVQUFVLENBQUMsSUFBSSxDQUFDSyxHQUFHLEVBQUVwRixDQUFDLEVBQUVDLENBQUMsRUFBRW1HLEtBQUssRUFBRSxJQUFJLENBQUNWLFlBQVksQ0FBQztJQUNwRCxPQUFPLElBQUksQ0FBQ0ssT0FBTyxFQUFFO0VBQ3pCO0FBQ0o7Ozs7OztVQzVHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCIsInNvdXJjZXMiOlsid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcmF5Y2FzdGVyL0JvdW5kc1RvUG9seWdvbi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9yYXljYXN0ZXIvQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcmF5Y2FzdGVyL0Nsb25lLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3JheWNhc3Rlci9HZXRCb3VuZHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcmF5Y2FzdGVyL0dldERpc3BsYXlTaXplLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3JheWNhc3Rlci9HZXRMaW5lVG9Qb2ludHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcmF5Y2FzdGVyL0dldExpbmVUb1BvbHlnb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcmF5Y2FzdGVyL0lzR2FtZU9iamVjdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9yYXljYXN0ZXIvT2JzdGFjbGVzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3JheWNhc3Rlci9SYXljYXN0ZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcmF5Y2FzdGVyL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1haW5cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibWFpblwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImltcG9ydCB7XG4gICAgR2V0VG9wTGVmdCwgR2V0VG9wUmlnaHQsXG4gICAgR2V0Qm90dG9tTGVmdCwgR2V0Qm90dG9tUmlnaHRcbn0gZnJvbSAnLi9HZXRCb3VuZHMuanMnO1xuXG5jb25zdCBQb2x5Z29uID0gUGhhc2VyLkdlb20uUG9seWdvbjtcblxudmFyIEJvdW5kc1RvUG9seWdvbiA9IGZ1bmN0aW9uIChnYW1lT2JqZWN0LCBvdXQpIHtcbiAgICBpZiAob3V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3V0ID0gbmV3IFBvbHlnb24oKTtcbiAgICB9XG4gICAgdmFyIHAwID0gR2V0VG9wTGVmdChnYW1lT2JqZWN0KSxcbiAgICAgICAgcDEgPSBHZXRUb3BSaWdodChnYW1lT2JqZWN0KSxcbiAgICAgICAgcDIgPSBHZXRCb3R0b21SaWdodChnYW1lT2JqZWN0KSxcbiAgICAgICAgcDMgPSBHZXRCb3R0b21MZWZ0KGdhbWVPYmplY3QpO1xuICAgIG91dC5zZXRUbyhbcDAsIHAxLCBwMiwgcDMsIHAwXSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm91bmRzVG9Qb2x5Z29uOyIsInZhciBDbGVhciA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiAob2JqKSAhPT0gJ29iamVjdCcpIHx8IChvYmogPT09IG51bGwpKSB7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICBvYmoubGVuZ3RoID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDbGVhcjsiLCJpbXBvcnQgQ2xlYXIgZnJvbSAnLi9DbGVhci5qcyc7XG5cbi8qKlxuICogU2hhbGxvdyBPYmplY3QgQ2xvbmUuIFdpbGwgbm90IG91dCBuZXN0ZWQgb2JqZWN0cy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogSlNPTiBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSByZXQgSlNPTiBvYmplY3QgdG8gcmV0dXJuLCBzZXQgbnVsbCB0byByZXR1cm4gYSBuZXcgb2JqZWN0XG4gKiBAcmV0dXJucyB7b2JqZWN0fSB0aGlzIG9iamVjdFxuICovXG52YXIgQ2xvbmUgPSBmdW5jdGlvbiAob2JqLCBvdXQpIHtcbiAgICB2YXIgb2JqSXNBcnJheSA9IEFycmF5LmlzQXJyYXkob2JqKTtcblxuICAgIGlmIChvdXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvdXQgPSAob2JqSXNBcnJheSkgPyBbXSA6IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIENsZWFyKG91dCk7XG4gICAgfVxuXG4gICAgaWYgKG9iaklzQXJyYXkpIHtcbiAgICAgICAgb3V0Lmxlbmd0aCA9IG9iai5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBjbnQgPSBvYmoubGVuZ3RoOyBpIDwgY250OyBpKyspIHtcbiAgICAgICAgICAgIG91dFtpXSA9IG9ialtpXTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgIG91dFtrZXldID0gb2JqW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xvbmU7XG4iLCJpbXBvcnQge1xuICAgIEdldERpc3BsYXlXaWR0aCxcbiAgICBHZXREaXNwbGF5SGVpZ2h0XG59IGZyb20gJy4vR2V0RGlzcGxheVNpemUuanMnO1xuXG5jb25zdCBSZWN0YW5nbGUgPSBQaGFzZXIuR2VvbS5SZWN0YW5nbGU7XG5jb25zdCBWZWN0b3IyID0gUGhhc2VyLk1hdGguVmVjdG9yMjtcbmNvbnN0IFJvdGF0ZUFyb3VuZCA9IFBoYXNlci5NYXRoLlJvdGF0ZUFyb3VuZDtcblxudmFyIEdldEJvdW5kcyA9IGZ1bmN0aW9uIChnYW1lT2JqZWN0LCBvdXRwdXQpIHtcbiAgICBpZiAob3V0cHV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3V0cHV0ID0gbmV3IFJlY3RhbmdsZSgpO1xuICAgIH0gZWxzZSBpZiAob3V0cHV0ID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChHbG9iUmVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBHbG9iUmVjdCA9IG5ldyBSZWN0YW5nbGUoKTtcbiAgICAgICAgfVxuICAgICAgICBvdXRwdXQgPSBHbG9iUmVjdDtcbiAgICB9XG5cbiAgICBpZiAoZ2FtZU9iamVjdC5nZXRCb3VuZHMpIHtcbiAgICAgICAgcmV0dXJuIGdhbWVPYmplY3QuZ2V0Qm91bmRzKG91dHB1dCk7XG4gICAgfVxuXG4gICAgLy8gIFdlIGNhbiB1c2UgdGhlIG91dHB1dCBvYmplY3QgdG8gdGVtcG9yYXJpbHkgc3RvcmUgdGhlIHgveSBjb29yZHMgaW46XG5cbiAgICB2YXIgVEx4LCBUTHksIFRSeCwgVFJ5LCBCTHgsIEJMeSwgQlJ4LCBCUnk7XG5cbiAgICAvLyBJbnN0ZWFkIG9mIGRvaW5nIGEgY2hlY2sgaWYgcGFyZW50IGNvbnRhaW5lciBpc1xuICAgIC8vIGRlZmluZWQgcGVyIGNvcm5lciB3ZSBvbmx5IGRvIGl0IG9uY2UuXG4gICAgaWYgKGdhbWVPYmplY3QucGFyZW50Q29udGFpbmVyKSB7XG4gICAgICAgIHZhciBwYXJlbnRNYXRyaXggPSBnYW1lT2JqZWN0LnBhcmVudENvbnRhaW5lci5nZXRCb3VuZHNUcmFuc2Zvcm1NYXRyaXgoKTtcblxuICAgICAgICBHZXRUb3BMZWZ0KGdhbWVPYmplY3QsIG91dHB1dCk7XG4gICAgICAgIHBhcmVudE1hdHJpeC50cmFuc2Zvcm1Qb2ludChvdXRwdXQueCwgb3V0cHV0LnksIG91dHB1dCk7XG5cbiAgICAgICAgVEx4ID0gb3V0cHV0Lng7XG4gICAgICAgIFRMeSA9IG91dHB1dC55O1xuXG4gICAgICAgIEdldFRvcFJpZ2h0KGdhbWVPYmplY3QsIG91dHB1dCk7XG4gICAgICAgIHBhcmVudE1hdHJpeC50cmFuc2Zvcm1Qb2ludChvdXRwdXQueCwgb3V0cHV0LnksIG91dHB1dCk7XG5cbiAgICAgICAgVFJ4ID0gb3V0cHV0Lng7XG4gICAgICAgIFRSeSA9IG91dHB1dC55O1xuXG4gICAgICAgIEdldEJvdHRvbUxlZnQoZ2FtZU9iamVjdCwgb3V0cHV0KTs7XG4gICAgICAgIHBhcmVudE1hdHJpeC50cmFuc2Zvcm1Qb2ludChvdXRwdXQueCwgb3V0cHV0LnksIG91dHB1dCk7XG5cbiAgICAgICAgQkx4ID0gb3V0cHV0Lng7XG4gICAgICAgIEJMeSA9IG91dHB1dC55O1xuXG4gICAgICAgIEdldEJvdHRvbVJpZ2h0KGdhbWVPYmplY3QsIG91dHB1dCk7XG4gICAgICAgIHBhcmVudE1hdHJpeC50cmFuc2Zvcm1Qb2ludChvdXRwdXQueCwgb3V0cHV0LnksIG91dHB1dCk7XG5cbiAgICAgICAgQlJ4ID0gb3V0cHV0Lng7XG4gICAgICAgIEJSeSA9IG91dHB1dC55O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgR2V0VG9wTGVmdChnYW1lT2JqZWN0LCBvdXRwdXQpO1xuXG4gICAgICAgIFRMeCA9IG91dHB1dC54O1xuICAgICAgICBUTHkgPSBvdXRwdXQueTtcblxuICAgICAgICBHZXRUb3BSaWdodChnYW1lT2JqZWN0LCBvdXRwdXQpOztcblxuICAgICAgICBUUnggPSBvdXRwdXQueDtcbiAgICAgICAgVFJ5ID0gb3V0cHV0Lnk7XG5cbiAgICAgICAgR2V0Qm90dG9tTGVmdChnYW1lT2JqZWN0LCBvdXRwdXQpOztcblxuICAgICAgICBCTHggPSBvdXRwdXQueDtcbiAgICAgICAgQkx5ID0gb3V0cHV0Lnk7XG5cbiAgICAgICAgR2V0Qm90dG9tUmlnaHQoZ2FtZU9iamVjdCwgb3V0cHV0KTtcblxuICAgICAgICBCUnggPSBvdXRwdXQueDtcbiAgICAgICAgQlJ5ID0gb3V0cHV0Lnk7XG4gICAgfVxuXG4gICAgb3V0cHV0LnggPSBNYXRoLm1pbihUTHgsIFRSeCwgQkx4LCBCUngpO1xuICAgIG91dHB1dC55ID0gTWF0aC5taW4oVEx5LCBUUnksIEJMeSwgQlJ5KTtcbiAgICBvdXRwdXQud2lkdGggPSBNYXRoLm1heChUTHgsIFRSeCwgQkx4LCBCUngpIC0gb3V0cHV0Lng7XG4gICAgb3V0cHV0LmhlaWdodCA9IE1hdGgubWF4KFRMeSwgVFJ5LCBCTHksIEJSeSkgLSBvdXRwdXQueTtcblxuICAgIHJldHVybiBvdXRwdXQ7XG59XG5cbnZhciBHbG9iUmVjdCA9IHVuZGVmaW5lZDtcblxudmFyIEdldFRvcExlZnQgPSBmdW5jdGlvbiAoZ2FtZU9iamVjdCwgb3V0cHV0LCBpbmNsdWRlUGFyZW50KSB7XG4gICAgaWYgKG91dHB1dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG91dHB1dCA9IG5ldyBWZWN0b3IyKCk7XG4gICAgfSBlbHNlIGlmIChvdXRwdXQgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKEdsb2JWZWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgR2xvYlZlY3RvciA9IG5ldyBWZWN0b3IyKCk7XG4gICAgICAgIH1cbiAgICAgICAgb3V0cHV0ID0gR2xvYlZlY3RvcjtcbiAgICB9XG5cbiAgICBpZiAoZ2FtZU9iamVjdC5nZXRUb3BMZWZ0KSB7XG4gICAgICAgIHJldHVybiBnYW1lT2JqZWN0LmdldFRvcExlZnQob3V0cHV0KTtcbiAgICB9XG5cbiAgICBvdXRwdXQueCA9IGdhbWVPYmplY3QueCAtIChHZXREaXNwbGF5V2lkdGgoZ2FtZU9iamVjdCkgKiBnYW1lT2JqZWN0Lm9yaWdpblgpO1xuICAgIG91dHB1dC55ID0gZ2FtZU9iamVjdC55IC0gKEdldERpc3BsYXlIZWlnaHQoZ2FtZU9iamVjdCkgKiBnYW1lT2JqZWN0Lm9yaWdpblkpO1xuXG4gICAgcmV0dXJuIFByZXBhcmVCb3VuZHNPdXRwdXQoZ2FtZU9iamVjdCwgb3V0cHV0LCBpbmNsdWRlUGFyZW50KTtcbn07XG5cbnZhciBHZXRUb3BSaWdodCA9IGZ1bmN0aW9uIChnYW1lT2JqZWN0LCBvdXRwdXQsIGluY2x1ZGVQYXJlbnQpIHtcbiAgICBpZiAob3V0cHV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3V0cHV0ID0gbmV3IFZlY3RvcjIoKTtcbiAgICB9IGVsc2UgaWYgKG91dHB1dCA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAoR2xvYlZlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBHbG9iVmVjdG9yID0gbmV3IFZlY3RvcjIoKTtcbiAgICAgICAgfVxuICAgICAgICBvdXRwdXQgPSBHbG9iVmVjdG9yO1xuICAgIH1cblxuICAgIGlmIChnYW1lT2JqZWN0LmdldFRvcFJpZ2h0KSB7XG4gICAgICAgIHJldHVybiBnYW1lT2JqZWN0LmdldFRvcFJpZ2h0KG91dHB1dCk7XG4gICAgfVxuXG4gICAgb3V0cHV0LnggPSAoZ2FtZU9iamVjdC54IC0gKEdldERpc3BsYXlXaWR0aChnYW1lT2JqZWN0KSAqIGdhbWVPYmplY3Qub3JpZ2luWCkpICsgR2V0RGlzcGxheVdpZHRoKGdhbWVPYmplY3QpO1xuICAgIG91dHB1dC55ID0gZ2FtZU9iamVjdC55IC0gKEdldERpc3BsYXlIZWlnaHQoZ2FtZU9iamVjdCkgKiBnYW1lT2JqZWN0Lm9yaWdpblkpO1xuXG4gICAgcmV0dXJuIFByZXBhcmVCb3VuZHNPdXRwdXQoZ2FtZU9iamVjdCwgb3V0cHV0LCBpbmNsdWRlUGFyZW50KTtcbn07XG5cbnZhciBHZXRCb3R0b21MZWZ0ID0gZnVuY3Rpb24gKGdhbWVPYmplY3QsIG91dHB1dCwgaW5jbHVkZVBhcmVudCkge1xuICAgIGlmIChvdXRwdXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvdXRwdXQgPSBuZXcgVmVjdG9yMigpO1xuICAgIH0gZWxzZSBpZiAob3V0cHV0ID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChHbG9iVmVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIEdsb2JWZWN0b3IgPSBuZXcgVmVjdG9yMigpO1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dCA9IEdsb2JWZWN0b3I7XG4gICAgfVxuXG4gICAgaWYgKGdhbWVPYmplY3QuZ2V0Qm90dG9tTGVmdCkge1xuICAgICAgICByZXR1cm4gZ2FtZU9iamVjdC5nZXRCb3R0b21MZWZ0KG91dHB1dCk7XG4gICAgfVxuXG4gICAgb3V0cHV0LnggPSBnYW1lT2JqZWN0LnggLSAoR2V0RGlzcGxheVdpZHRoKGdhbWVPYmplY3QpICogZ2FtZU9iamVjdC5vcmlnaW5YKTtcbiAgICBvdXRwdXQueSA9IChnYW1lT2JqZWN0LnkgLSAoR2V0RGlzcGxheUhlaWdodChnYW1lT2JqZWN0KSAqIGdhbWVPYmplY3Qub3JpZ2luWSkpICsgR2V0RGlzcGxheUhlaWdodChnYW1lT2JqZWN0KTtcblxuICAgIHJldHVybiBQcmVwYXJlQm91bmRzT3V0cHV0KGdhbWVPYmplY3QsIG91dHB1dCwgaW5jbHVkZVBhcmVudCk7XG59O1xuXG52YXIgR2V0Qm90dG9tUmlnaHQgPSBmdW5jdGlvbiAoZ2FtZU9iamVjdCwgb3V0cHV0LCBpbmNsdWRlUGFyZW50KSB7XG4gICAgaWYgKG91dHB1dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG91dHB1dCA9IG5ldyBWZWN0b3IyKCk7XG4gICAgfSBlbHNlIGlmIChvdXRwdXQgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKEdsb2JWZWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgR2xvYlZlY3RvciA9IG5ldyBWZWN0b3IyKCk7XG4gICAgICAgIH1cbiAgICAgICAgb3V0cHV0ID0gR2xvYlZlY3RvcjtcbiAgICB9XG5cbiAgICBpZiAoZ2FtZU9iamVjdC5nZXRCb3R0b21SaWdodCkge1xuICAgICAgICByZXR1cm4gZ2FtZU9iamVjdC5nZXRCb3R0b21SaWdodChvdXRwdXQpO1xuICAgIH1cblxuICAgIG91dHB1dC54ID0gKGdhbWVPYmplY3QueCAtIChHZXREaXNwbGF5V2lkdGgoZ2FtZU9iamVjdCkgKiBnYW1lT2JqZWN0Lm9yaWdpblgpKSArIEdldERpc3BsYXlXaWR0aChnYW1lT2JqZWN0KTtcbiAgICBvdXRwdXQueSA9IChnYW1lT2JqZWN0LnkgLSAoR2V0RGlzcGxheUhlaWdodChnYW1lT2JqZWN0KSAqIGdhbWVPYmplY3Qub3JpZ2luWSkpICsgR2V0RGlzcGxheUhlaWdodChnYW1lT2JqZWN0KTtcblxuICAgIHJldHVybiBQcmVwYXJlQm91bmRzT3V0cHV0KGdhbWVPYmplY3QsIG91dHB1dCwgaW5jbHVkZVBhcmVudCk7XG59O1xuXG52YXIgR2xvYlZlY3RvciA9IHVuZGVmaW5lZDtcblxudmFyIFByZXBhcmVCb3VuZHNPdXRwdXQgPSBmdW5jdGlvbiAoZ2FtZU9iamVjdCwgb3V0cHV0LCBpbmNsdWRlUGFyZW50KSB7XG4gICAgaWYgKGluY2x1ZGVQYXJlbnQgPT09IHVuZGVmaW5lZCkgeyBpbmNsdWRlUGFyZW50ID0gZmFsc2U7IH1cblxuICAgIGlmIChnYW1lT2JqZWN0LnJvdGF0aW9uICE9PSAwKSB7XG4gICAgICAgIFJvdGF0ZUFyb3VuZChvdXRwdXQsIGdhbWVPYmplY3QueCwgZ2FtZU9iamVjdC55LCBnYW1lT2JqZWN0LnJvdGF0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoaW5jbHVkZVBhcmVudCAmJiBnYW1lT2JqZWN0LnBhcmVudENvbnRhaW5lcikge1xuICAgICAgICB2YXIgcGFyZW50TWF0cml4ID0gZ2FtZU9iamVjdC5wYXJlbnRDb250YWluZXIuZ2V0Qm91bmRzVHJhbnNmb3JtTWF0cml4KCk7XG5cbiAgICAgICAgcGFyZW50TWF0cml4LnRyYW5zZm9ybVBvaW50KG91dHB1dC54LCBvdXRwdXQueSwgb3V0cHV0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xufTtcblxuZXhwb3J0IHtcbiAgICBHZXRCb3VuZHMsXG4gICAgR2V0VG9wTGVmdCxcbiAgICBHZXRUb3BSaWdodCxcbiAgICBHZXRCb3R0b21MZWZ0LFxuICAgIEdldEJvdHRvbVJpZ2h0LFxufSIsInZhciBHZXREaXNwbGF5V2lkdGggPSBmdW5jdGlvbiAoZ2FtZU9iamVjdCkge1xuICAgIGlmIChnYW1lT2JqZWN0LmRpc3BsYXlXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBnYW1lT2JqZWN0LmRpc3BsYXlXaWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZ2FtZU9iamVjdC53aWR0aDtcbiAgICB9XG59XG5cbnZhciBHZXREaXNwbGF5SGVpZ2h0ID0gZnVuY3Rpb24gKGdhbWVPYmplY3QpIHtcbiAgICBpZiAoZ2FtZU9iamVjdC5kaXNwbGF5SGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGdhbWVPYmplY3QuZGlzcGxheUhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZ2FtZU9iamVjdC5oZWlnaHQ7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIEdldERpc3BsYXlXaWR0aCxcbiAgICBHZXREaXNwbGF5SGVpZ2h0XG59IiwiY29uc3QgR2V0TGluZVRvTGluZSA9IFBoYXNlci5HZW9tLkludGVyc2VjdHMuR2V0TGluZVRvTGluZTtcbmNvbnN0IFBvaW50VG9MaW5lID0gUGhhc2VyLkdlb20uSW50ZXJzZWN0cy5Qb2ludFRvTGluZVxuXG52YXIgR2V0TGluZVRvUG9pbnRzID0gZnVuY3Rpb24gKGxpbmUsIHBvaW50cywgb3V0KSB7XG4gICAgaWYgKG91dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG91dCA9IHt9O1xuICAgIH0gZWxzZSBpZiAob3V0ID09PSB0cnVlKSB7XG4gICAgICAgIG91dCA9IGdsb2JSZXN1bHQ7XG4gICAgfVxuICAgIC8qIFxuICAgIG91dDoge1xuICAgICAgICB4LHksICAgICAgLy8gaW50ZXJzZWN0aW9uIHBvaW50XG4gICAgICAgIGQsICAgICAgICAvLyBpbnRlcnNlY3Rpb24gZGlzdGFuY2VcbiAgICAgICAgc2VnSW5kZXggIC8vIGludGVyc2VjdGlvbiBzZWdtZW50XG4gICAgfVxuICAgICovXG5cbiAgICB2YXIgY2xvc2VzdEludGVyc2VjdCA9IGZhbHNlO1xuXG4gICAgc3RhcnRQb2ludC5zZXRUbyhsaW5lLngxLCBsaW5lLnkxKTtcbiAgICBvdXQuZCA9IEluZmluaXR5O1xuICAgIHRlbXBJbnRlcnNlY3Quc2V0KCk7XG5cbiAgICB2YXIgcHJldiA9IHBvaW50c1swXTtcblxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjdXJyZW50ID0gcG9pbnRzW2ldO1xuXG4gICAgICAgIHNlZ21lbnQuc2V0VG8ocHJldi54LCBwcmV2LnksIGN1cnJlbnQueCwgY3VycmVudC55KTtcbiAgICAgICAgcHJldiA9IGN1cnJlbnQ7XG5cbiAgICAgICAgLy8gSWdub3JlIGNhc2U6IHN0YXJ0IHBvaW50IG9mIGxpbmUgaXMgYXQgc2VnbWVudFxuICAgICAgICBpZiAoUG9pbnRUb0xpbmUoc3RhcnRQb2ludCwgc2VnbWVudCkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEdldExpbmVUb0xpbmUobGluZSwgc2VnbWVudCwgdGVtcEludGVyc2VjdCkpIHtcbiAgICAgICAgICAgIGlmICh0ZW1wSW50ZXJzZWN0LnogPCBvdXQuZCkge1xuICAgICAgICAgICAgICAgIG91dC54ID0gdGVtcEludGVyc2VjdC54O1xuICAgICAgICAgICAgICAgIG91dC55ID0gdGVtcEludGVyc2VjdC55O1xuICAgICAgICAgICAgICAgIG91dC5kID0gdGVtcEludGVyc2VjdC56O1xuICAgICAgICAgICAgICAgIG91dC5zZWdJbmRleCA9IGkgLSAxO1xuXG4gICAgICAgICAgICAgICAgY2xvc2VzdEludGVyc2VjdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKGNsb3Nlc3RJbnRlcnNlY3QpID8gb3V0IDogbnVsbDtcbn07XG5cbnZhciBnbG9iUmVzdWx0ID0ge307XG52YXIgc3RhcnRQb2ludCA9IG5ldyBQaGFzZXIuR2VvbS5Qb2ludCgpO1xudmFyIHNlZ21lbnQgPSBuZXcgUGhhc2VyLkdlb20uTGluZSgpO1xudmFyIHRlbXBJbnRlcnNlY3QgPSBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMygpO1xuXG5leHBvcnQgZGVmYXVsdCBHZXRMaW5lVG9Qb2ludHM7IiwiaW1wb3J0IEdldExpbmVUb1BvaW50cyBmcm9tICcuL0dldExpbmVUb1BvaW50cy5qcyc7XG5pbXBvcnQgQ2xvbmUgZnJvbSAnLi9DbG9uZS5qcyc7XG5cbmNvbnN0IEdldEFBQkIgPSBQaGFzZXIuR2VvbS5Qb2x5Z29uLkdldEFBQkI7XG5jb25zdCBMaW5lVG9SZWN0YW5nbGUgPSBQaGFzZXIuR2VvbS5JbnRlcnNlY3RzLkxpbmVUb1JlY3RhbmdsZTtcblxudmFyIEdldExpbmVUb1BvbHlnb24gPSBmdW5jdGlvbiAobGluZSwgcG9seWdvbnMsIG91dCkge1xuICAgIGlmIChvdXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvdXQgPSB7fTtcbiAgICB9IGVsc2UgaWYgKG91dCA9PT0gdHJ1ZSkge1xuICAgICAgICBvdXQgPSBnbG9iUmVzdWx0O1xuICAgIH1cbiAgICAvKiBcbiAgICBvdXQ6IHtcbiAgICAgICAgeCx5LCAgICAgICAgLy8gaW50ZXJzZWN0aW9uIHBvaW50XG4gICAgICAgIGQsICAgICAgICAgIC8vIGludGVyc2VjdGlvbiBkaXN0YW5jZVxuICAgICAgICBzZWdJbmRleCwgICAvLyBpbmRleCBvZiBpbnRlcnNlY3Rpb24gc2VnbWVudFxuICAgICAgICBzaGFwZUluZGV4ICAvLyBpbmRleCBvZiBpbnRlcnNlY3Rpb24gcG9seWdvblxuICAgIH1cbiAgICAqL1xuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHBvbHlnb25zKSkge1xuICAgICAgICBwb2x5Z29ucyA9IFtwb2x5Z29uc107XG4gICAgfVxuXG4gICAgdmFyIGNsb3Nlc3RJbnRlcnNlY3QgPSBmYWxzZTtcbiAgICBvdXQuZCA9IEluZmluaXR5O1xuXG4gICAgLy8gIFJlc2V0IG91ciB2ZWM0c1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2x5Z29ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcG9seWdvbiA9IHBvbHlnb25zW2ldO1xuXG4gICAgICAgIC8vIFJ1biBBQUJCVGVzdCB3aGVuIHBvbHlnb24gaXMgbW9yZSB0aGFuIDggZWRnZXNcbiAgICAgICAgaWYgKChwb2x5Z29uLnBvaW50cy5sZW5ndGggPiA5KSAmJlxuICAgICAgICAgICAgIUxpbmVUb1JlY3RhbmdsZShsaW5lLCBHZXRBQUJCKHBvbHlnb24sIEFBQkJSZWN0KSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGludGVyc2VjdGlvblJlc3VsdCA9IEdldExpbmVUb1BvaW50cyhsaW5lLCBwb2x5Z29uLnBvaW50cywgdHJ1ZSk7XG4gICAgICAgIGlmIChpbnRlcnNlY3Rpb25SZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChpbnRlcnNlY3Rpb25SZXN1bHQuZCA8IG91dC5kKSB7XG4gICAgICAgICAgICAgICAgQ2xvbmUoaW50ZXJzZWN0aW9uUmVzdWx0LCBvdXQpOyAgLy8geCx5LGQsc2VnSW5kZXhcbiAgICAgICAgICAgICAgICBvdXQuc2hhcGVJbmRleCA9IGk7XG5cbiAgICAgICAgICAgICAgICBjbG9zZXN0SW50ZXJzZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoY2xvc2VzdEludGVyc2VjdCkgPyBvdXQgOiBudWxsO1xufTtcblxudmFyIGdsb2JSZXN1bHQgPSB7fTtcbnZhciBBQUJCUmVjdCA9IG5ldyBQaGFzZXIuR2VvbS5SZWN0YW5nbGUoKTtcblxuZXhwb3J0IGRlZmF1bHQgR2V0TGluZVRvUG9seWdvbjtcbiIsImNvbnN0IEdhbWVPYmplY3RDbGFzcyA9IFBoYXNlci5HYW1lT2JqZWN0cy5HYW1lT2JqZWN0O1xudmFyIElzR2FtZU9iamVjdCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICByZXR1cm4gKG9iamVjdCBpbnN0YW5jZW9mIEdhbWVPYmplY3RDbGFzcyk7XG59XG5leHBvcnQgZGVmYXVsdCBJc0dhbWVPYmplY3Q7IiwiaW1wb3J0IElzR2FtZU9iamVjdCBmcm9tICcuL0lzR2FtZU9iamVjdC5qcyc7XG5pbXBvcnQgQm91bmRzVG9Qb2x5Z29uIGZyb20gJy4vQm91bmRzVG9Qb2x5Z29uLmpzJztcblxuY29uc3QgUG9seWdvbiA9IFBoYXNlci5HZW9tLlBvbHlnb247XG5jb25zdCBTcGxpY2VPbmUgPSBQaGFzZXIuVXRpbHMuQXJyYXkuU3BsaWNlT25lO1xuXG5jbGFzcyBPYnN0YWNsZXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdhbWVPYmplY3RzID0gW107XG4gICAgICAgIHRoaXMucG9seWdvbnMgPSBbXTtcbiAgICB9XG5cbiAgICBjb250YWlucyhnYW1lT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiAodGhpcy5nYW1lT2JqZWN0cy5pbmRleE9mKGdhbWVPYmplY3QpICE9PSAoLTEpKTtcbiAgICB9XG5cbiAgICBnZXQoaW5kZXgpIHtcbiAgICAgICAgT2JzdGFjbGUuZ2FtZU9iamVjdCA9IHRoaXMuZ2FtZU9iamVjdHNbaW5kZXhdO1xuICAgICAgICBPYnN0YWNsZS5wb2x5Z29uID0gdGhpcy5wb2x5Z29uc1tpbmRleF07XG4gICAgICAgIHJldHVybiBPYnN0YWNsZTtcbiAgICB9XG5cbiAgICBhZGREZXN0cm95Q2FsbGJhY2soZ2FtZU9iamVjdCkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShnYW1lT2JqZWN0KSkge1xuICAgICAgICAgICAgdmFyIGdhbWVPYmplY3RzID0gZ2FtZU9iamVjdDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBjbnQgPSBnYW1lT2JqZWN0cy5sZW5ndGg7IGkgPCBjbnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRGVzdHJveUNhbGxiYWNrKGdhbWVPYmplY3RzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdhbWVPYmplY3Qub24pIHtcbiAgICAgICAgICAgIGdhbWVPYmplY3Qub25jZSgnZGVzdHJveScsIHRoaXMub25DaGlsZERlc3Ryb3ksIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbW92ZURlc3Ryb3lDYWxsYmFjayhnYW1lT2JqZWN0KSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGdhbWVPYmplY3QpKSB7XG4gICAgICAgICAgICB2YXIgZ2FtZU9iamVjdHMgPSBnYW1lT2JqZWN0O1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGNudCA9IGdhbWVPYmplY3RzLmxlbmd0aDsgaSA8IGNudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVEZXN0cm95Q2FsbGJhY2soZ2FtZU9iamVjdHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2FtZU9iamVjdC5vZmYpIHtcbiAgICAgICAgICAgIGdhbWVPYmplY3Qub2ZmKCdkZXN0cm95JywgdGhpcy5vbkNoaWxkRGVzdHJveSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRGVzdHJveUNhbGxiYWNrKHRoaXMuZ2FtZU9iamVjdHMpO1xuICAgICAgICB0aGlzLmdhbWVPYmplY3RzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMucG9seWdvbnMubGVuZ3RoID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkKGdhbWVPYmplY3QsIHBvbHlnb24pIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnMoZ2FtZU9iamVjdCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKElzR2FtZU9iamVjdChnYW1lT2JqZWN0KSkge1xuICAgICAgICAgICAgaWYgKHBvbHlnb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBvbHlnb24gPSBCb3VuZHNUb1BvbHlnb24oZ2FtZU9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZU9iamVjdCBpbnN0YW5jZW9mIChQb2x5Z29uKSkge1xuICAgICAgICAgICAgcG9seWdvbiA9IGdhbWVPYmplY3Q7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWVPYmplY3RzLnB1c2goZ2FtZU9iamVjdCk7XG4gICAgICAgIHRoaXMucG9seWdvbnMucHVzaChwb2x5Z29uKTtcblxuICAgICAgICB0aGlzLmFkZERlc3Ryb3lDYWxsYmFjayhnYW1lT2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVtb3ZlKGdhbWVPYmplY3QpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nYW1lT2JqZWN0cy5pbmRleE9mKGdhbWVPYmplY3QpO1xuICAgICAgICBpZiAoaW5kZXggPT09ICgtMSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgU3BsaWNlT25lKHRoaXMuZ2FtZU9iamVjdHMsIGluZGV4KTtcbiAgICAgICAgU3BsaWNlT25lKHRoaXMucG9seWdvbnMsIGluZGV4KTtcblxuICAgICAgICB0aGlzLnJlbW92ZURlc3Ryb3lDYWxsYmFjayhnYW1lT2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25DaGlsZERlc3Ryb3koY2hpbGQsIGZyb21TY2VuZSkge1xuICAgICAgICB0aGlzLnJlbW92ZShjaGlsZCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGdhbWVPYmplY3QsIHBvbHlnb24pIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nYW1lT2JqZWN0cy5pbmRleE9mKGdhbWVPYmplY3QpO1xuICAgICAgICBpZiAoaW5kZXggPT09ICgtMSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb2x5Z29uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHBvbHlnb24gPSBCb3VuZHNUb1BvbHlnb24oZ2FtZU9iamVjdCwgdGhpcy5wb2x5Z29uc1tpbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9seWdvbnNbaW5kZXhdID0gcG9seWdvbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG52YXIgT2JzdGFjbGUgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgT2JzdGFjbGVzO1xuIiwiaW1wb3J0IE9ic3RhY2xlcyBmcm9tICcuL09ic3RhY2xlcy5qcyc7XG5pbXBvcnQgR2V0TGluZVRvUG9seWdvbiBmcm9tICcuL0dldExpbmVUb1BvbHlnb24uanMnO1xuXG5jb25zdCBHZXRWYWx1ZSA9IFBoYXNlci5VdGlscy5PYmplY3RzLkdldFZhbHVlO1xuY29uc3QgTGluZSA9IFBoYXNlci5HZW9tLkxpbmU7XG5jb25zdCBTZXRUb0FuZ2xlID0gUGhhc2VyLkdlb20uTGluZS5TZXRUb0FuZ2xlO1xuY29uc3QgUmVmbGVjdEFuZ2xlID0gUGhhc2VyLkdlb20uTGluZS5SZWZsZWN0QW5nbGU7XG5cbmV4cG9ydCBjbGFzcyBSYXlDYXN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICB0aGlzLm9ic3RhY2xlcyA9IG5ldyBPYnN0YWNsZXMoKTtcbiAgICAgICAgdGhpcy5yYXkgPSBuZXcgTGluZSgpO1xuICAgICAgICB0aGlzLnNldE1heFJheUxlbmd0aChHZXRWYWx1ZShjb25maWcsICdtYXhSYXlMZW5ndGgnLCAxMDAwMCkpO1xuICAgICAgICB0aGlzLnJlc3VsdCA9IHtcbiAgICAgICAgICAgIGhpdDogZmFsc2UsXG4gICAgICAgICAgICB4OiAwLCB5OiAwLFxuICAgICAgICAgICAgc2VnbWVudDogbmV3IExpbmUoKSxcbiAgICAgICAgICAgIHBvbHlnb246IG51bGwsXG4gICAgICAgICAgICBnYW1lT2JqZWN0OiBudWxsLFxuICAgICAgICAgICAgcmVmbGVjdEFuZ2xlOiAwXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLm9ic3RhY2xlcy5jbGVhcigpO1xuICAgICAgICB0aGlzLm9ic3RhY2xlcyA9IG51bGw7XG4gICAgICAgIHRoaXMucmF5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSBudWxsO1xuICAgIH1cblxuICAgIHNldE1heFJheUxlbmd0aChsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5tYXhSYXlMZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZE9ic3RhY2xlKGdhbWVPYmplY3QsIHBvbHlnb24pIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZ2FtZU9iamVjdCkpIHtcbiAgICAgICAgICAgIHZhciBnYW1lT2JqZWN0cyA9IGdhbWVPYmplY3Q7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgY250ID0gZ2FtZU9iamVjdHMubGVuZ3RoOyBpIDwgY250OyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9ic3RhY2xlcy5hZGQoZ2FtZU9iamVjdHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vYnN0YWNsZXMuYWRkKGdhbWVPYmplY3QsIHBvbHlnb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNsZWFyT2JzdGFjbGUoKSB7XG4gICAgICAgIHRoaXMub2JzdGFjbGVzLmNsZWFyKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbW92ZU9ic3RhY2xlKGdhbWVPYmplY3QpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZ2FtZU9iamVjdCkpIHtcbiAgICAgICAgICAgIHZhciBnYW1lT2JqZWN0cyA9IGdhbWVPYmplY3Q7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgY250ID0gZ2FtZU9iamVjdHMubGVuZ3RoOyBpIDwgY250OyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9ic3RhY2xlcy5yZW1vdmUoZ2FtZU9iamVjdHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vYnN0YWNsZXMucmVtb3ZlKGdhbWVPYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHVwZGF0ZU9ic3RhY2xlKGdhbWVPYmplY3QsIHBvbHlnb24pIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZ2FtZU9iamVjdCkpIHtcbiAgICAgICAgICAgIHZhciBnYW1lT2JqZWN0cyA9IGdhbWVPYmplY3Q7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgY250ID0gZ2FtZU9iamVjdHMubGVuZ3RoOyBpIDwgY250OyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9ic3RhY2xlcy51cGRhdGUoZ2FtZU9iamVjdHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vYnN0YWNsZXMudXBkYXRlKGdhbWVPYmplY3QsIHBvbHlnb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGhpdFRlc3QoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBHZXRMaW5lVG9Qb2x5Z29uKHRoaXMucmF5LCB0aGlzLm9ic3RhY2xlcy5wb2x5Z29ucywgdHJ1ZSk7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMucmF5LngyID0gcmVzdWx0Lng7XG4gICAgICAgICAgICB0aGlzLnJheS55MiA9IHJlc3VsdC55O1xuXG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5oaXQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQueCA9IHJlc3VsdC54O1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQueSA9IHJlc3VsdC55O1xuXG4gICAgICAgICAgICB2YXIgb2JzdGFjbGUgPSB0aGlzLm9ic3RhY2xlcy5nZXQocmVzdWx0LnNoYXBlSW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQucG9seWdvbiA9IG9ic3RhY2xlLnBvbHlnb247XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5nYW1lT2JqZWN0ID0gb2JzdGFjbGUuZ2FtZU9iamVjdDtcblxuICAgICAgICAgICAgdmFyIHBvaW50cyA9IHRoaXMucmVzdWx0LnBvbHlnb24ucG9pbnRzLFxuICAgICAgICAgICAgICAgIHNlZ0luZGV4ID0gcmVzdWx0LnNlZ0luZGV4LFxuICAgICAgICAgICAgICAgIHAwID0gcG9pbnRzW3NlZ0luZGV4XSxcbiAgICAgICAgICAgICAgICBwMSA9IHBvaW50c1tzZWdJbmRleCArIDFdO1xuICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSB0aGlzLnJlc3VsdC5zZWdtZW50O1xuICAgICAgICAgICAgc2VnbWVudC5zZXRUbyhwMC54LCBwMC55LCBwMS54LCBwMS55KTtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LnJlZmxlY3RBbmdsZSA9IFJlZmxlY3RBbmdsZSh0aGlzLnJheSwgc2VnbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5oaXQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHJlc3VsdCkgPyB0aGlzLnJlc3VsdCA6IGZhbHNlO1xuICAgIH1cblxuICAgIHJheVRvd2FyZCh4LCB5LCBhbmdsZSkge1xuICAgICAgICBTZXRUb0FuZ2xlKHRoaXMucmF5LCB4LCB5LCBhbmdsZSwgdGhpcy5tYXhSYXlMZW5ndGgpO1xuICAgICAgICByZXR1cm4gdGhpcy5oaXRUZXN0KCk7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHtSYXlDYXN0ZXJ9IGZyb20gXCIuL1JheWNhc3RlclwiOyJdLCJuYW1lcyI6WyJHZXRUb3BMZWZ0IiwiR2V0VG9wUmlnaHQiLCJHZXRCb3R0b21MZWZ0IiwiR2V0Qm90dG9tUmlnaHQiLCJQb2x5Z29uIiwiUGhhc2VyIiwiR2VvbSIsIkJvdW5kc1RvUG9seWdvbiIsImdhbWVPYmplY3QiLCJvdXQiLCJ1bmRlZmluZWQiLCJwMCIsInAxIiwicDIiLCJwMyIsInNldFRvIiwiQ2xlYXIiLCJvYmoiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJrZXkiLCJDbG9uZSIsIm9iaklzQXJyYXkiLCJpIiwiY250IiwiR2V0RGlzcGxheVdpZHRoIiwiR2V0RGlzcGxheUhlaWdodCIsIlJlY3RhbmdsZSIsIlZlY3RvcjIiLCJNYXRoIiwiUm90YXRlQXJvdW5kIiwiR2V0Qm91bmRzIiwib3V0cHV0IiwiR2xvYlJlY3QiLCJnZXRCb3VuZHMiLCJUTHgiLCJUTHkiLCJUUngiLCJUUnkiLCJCTHgiLCJCTHkiLCJCUngiLCJCUnkiLCJwYXJlbnRDb250YWluZXIiLCJwYXJlbnRNYXRyaXgiLCJnZXRCb3VuZHNUcmFuc2Zvcm1NYXRyaXgiLCJ0cmFuc2Zvcm1Qb2ludCIsIngiLCJ5IiwibWluIiwid2lkdGgiLCJtYXgiLCJoZWlnaHQiLCJpbmNsdWRlUGFyZW50IiwiR2xvYlZlY3RvciIsImdldFRvcExlZnQiLCJvcmlnaW5YIiwib3JpZ2luWSIsIlByZXBhcmVCb3VuZHNPdXRwdXQiLCJnZXRUb3BSaWdodCIsImdldEJvdHRvbUxlZnQiLCJnZXRCb3R0b21SaWdodCIsInJvdGF0aW9uIiwiZGlzcGxheVdpZHRoIiwiZGlzcGxheUhlaWdodCIsIkdldExpbmVUb0xpbmUiLCJJbnRlcnNlY3RzIiwiUG9pbnRUb0xpbmUiLCJHZXRMaW5lVG9Qb2ludHMiLCJsaW5lIiwicG9pbnRzIiwiZ2xvYlJlc3VsdCIsImNsb3Nlc3RJbnRlcnNlY3QiLCJzdGFydFBvaW50IiwieDEiLCJ5MSIsImQiLCJJbmZpbml0eSIsInRlbXBJbnRlcnNlY3QiLCJzZXQiLCJwcmV2IiwiY3VycmVudCIsInNlZ21lbnQiLCJ6Iiwic2VnSW5kZXgiLCJQb2ludCIsIkxpbmUiLCJWZWN0b3IzIiwiR2V0QUFCQiIsIkxpbmVUb1JlY3RhbmdsZSIsIkdldExpbmVUb1BvbHlnb24iLCJwb2x5Z29ucyIsInBvbHlnb24iLCJBQUJCUmVjdCIsImludGVyc2VjdGlvblJlc3VsdCIsInNoYXBlSW5kZXgiLCJHYW1lT2JqZWN0Q2xhc3MiLCJHYW1lT2JqZWN0cyIsIkdhbWVPYmplY3QiLCJJc0dhbWVPYmplY3QiLCJvYmplY3QiLCJTcGxpY2VPbmUiLCJVdGlscyIsIk9ic3RhY2xlcyIsImNvbnN0cnVjdG9yIiwiZ2FtZU9iamVjdHMiLCJjb250YWlucyIsImluZGV4T2YiLCJnZXQiLCJpbmRleCIsIk9ic3RhY2xlIiwiYWRkRGVzdHJveUNhbGxiYWNrIiwib24iLCJvbmNlIiwib25DaGlsZERlc3Ryb3kiLCJyZW1vdmVEZXN0cm95Q2FsbGJhY2siLCJvZmYiLCJjbGVhciIsImFkZCIsInB1c2giLCJyZW1vdmUiLCJjaGlsZCIsImZyb21TY2VuZSIsInVwZGF0ZSIsIkdldFZhbHVlIiwiT2JqZWN0cyIsIlNldFRvQW5nbGUiLCJSZWZsZWN0QW5nbGUiLCJSYXlDYXN0ZXIiLCJjb25maWciLCJvYnN0YWNsZXMiLCJyYXkiLCJzZXRNYXhSYXlMZW5ndGgiLCJyZXN1bHQiLCJoaXQiLCJyZWZsZWN0QW5nbGUiLCJkZXN0cm95IiwibWF4UmF5TGVuZ3RoIiwiYWRkT2JzdGFjbGUiLCJjbGVhck9ic3RhY2xlIiwicmVtb3ZlT2JzdGFjbGUiLCJ1cGRhdGVPYnN0YWNsZSIsImhpdFRlc3QiLCJ4MiIsInkyIiwib2JzdGFjbGUiLCJyYXlUb3dhcmQiLCJhbmdsZSJdLCJzb3VyY2VSb290IjoiIn0=