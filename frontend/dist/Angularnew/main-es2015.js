(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet><h2>Welcome to My First Angular Application</h2><hr>\n  <div class=\"navbar\"><a routerLink=\"/calc\">CALCULATOR</a><a routerLink=\"/game\">GAMES</a><a routerLink=\"/dispuser\">Users</a><a routerLink=\"/insert\">Signup</a><a href=\"http://booksdealing.tk/\">BooksDealing System</a><a href=\"http://www.google.co.in\">Google</a></div>\n</router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login.component.html ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Welcome to My First Angular Application</h2><hr>\r\n<div>\r\n  <form autocomplete=\"off\" (ngSubmit)=\"verifiy()\" method=\"POST\">\r\n  <h3>User Login</h3>\r\n  <h3>{{err}}</h3><br>\r\n  <input type=\"email\" name=\"uemail\" placeholder=\"Enter Email\" ([ngModel])=\"user.uemail\"><br>\r\n  <input type=\"password\" name=\"upasswd\" ([ngModel])=\"user.upasswd\"><br>\r\n  <input type=\"submit\" value=\"login\">\r\n</form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/calculator.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/calculator.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<hr><br><div>\r\n  Enter Expression <input type=\"text\" name=\"letter\" [(ngModel)] = \"input\">\r\n  <button (click)=\"calculate()\">Submit</button>\r\n  <br><br>\r\n  <div class=\"text_box\"><b>Result : </b>{{result}}</div><br>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/dispuser.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/dispuser.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<hr><div class=\"navbar\"><input type=\"text\" name=\"username\" [(ngModel)]=\"uname\" placeholder=\"UserName\"/><button (click)=\" search()\">Search</button></div>\r\n<table >\r\n  <thead >\r\n      <tr>\r\n          <th>Profile</th>\r\n          <th>User-Name</th>\r\n          <th>User-Gender</th>\r\n          <th>User-D-O-B</th>\r\n          <th>User-email</th>\r\n          <th>User-Address</th>\r\n          <th>Edit/delete</th>\r\n      </tr>\r\n  </thead>\r\n  <tbody >\r\n    <tr *ngFor=\"let d of udata\">\r\n     <td><a href=\"http://localhost:3000/public/pictures/{{d.email}}.jpg\"><img src=\"http://localhost:3000/pictures/{{d.email}}.jpg\" style=\"width:200px;height:100px;\"></a><br>\r\n      <form ngNativeValidate enctype=\"multipart/form-data\" method=\"POST\">\r\n        <input\r\n      style=\"display:none\"\r\n      type=\"file\"\r\n      name=\"upic\"\r\n      (change)=\"onFileSelected($event,d.email)\"\r\n      #fileinput/>\r\n      <input style=\"display:none\" type=\"text\" name=\"email\" [(ngModel)]=\"d.email\">\r\n      <button type=\"submit\" (click)=\"fileinput.click()\">Select-Pic</button>\r\n      <!--<input style=\"width:30%\" type=\"submit\" value=\"upload\">_--></form></td>\r\n     <td>{{d.username}}</td>\r\n     <td>{{d.gender}}</td>\r\n     <td>{{d.dob}}</td>\r\n     <td>{{d.email}}</td>\r\n     <td>{{d.country}}, {{d.state}}, {{d.district}}, {{d.postal}}</td>\r\n     <td> <button (click)=\"update(d)\"><b>Edit</b></button><a (click)=\"delete(d.email)\"><b>Delete</b></a></td>\r\n    </tr>\r\n</tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/game.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/game.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<hr><button (click)=\"newgame()\" class='stylebutton'>Start Game</button>\r\n<div class=\"maindiv\">\r\n  <div> Gusses left   :  {{gusses}} </div><br>\r\n  <div>Incorrect Gusses Made :<span *ngFor=\"let letter of incorrectletterschoosen\">{{letter}}</span> <br><br>\r\n  <div>Correct Gusses Made  : <span *ngFor=\"let letter of correctletterschoosen\">{{letter}}</span><br><br>\r\n  <div> You have to guss this word : {{displayword}}</div><br>\r\n  <div>\r\n      Enter your gussing letter <input type=\"text\" name=\"letter\" [(ngModel)]=\"input.letter\">\r\n      <button (click)=\"letterchoosen()\">Submit</button>\r\n      <br><br>\r\n      <div> Hint : {{hintname}}</div><br>\r\n  </div>\r\n  <h2>{{msg}}</h2>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/insert.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/insert.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<hr><div id=\"main-div\" style=\"background-color: burlywood; padding:1%; width:90%;overflow:scroll;\">\r\n  <h3 style=\"background-color: darkcyan;\"><hr><b>Insert User Details</b><hr></h3>\r\n  <h3 style=\"background-color: red;\">{{err}}</h3>\r\n  <form autocomplete=\"off\" ngNativeValidate (ngSubmit)=\"submitvalues()\" enctype=\"multipart/form-data\" method=\"POST\">\r\n      Name :<input type=\"text\" name=\"uname\" [(ngModel)]=\"user.name\" placeholder=\"UserName\"><br><br>\r\n      date of birth :<input type=\"date\" name=\"udob\" [(ngModel)]=\"user.dob\" placeholder=\"yyyy-mm-dd\"><br><br>\r\n      Gender:<select name=\"ugender\" [(ngModel)]=\"user.gender\">\r\n          <option value=\"Male\" >Male </option>\r\n          <option value=\"Female\" >Female </option>\r\n      </select><br><br>\r\n      Email:<input type=\"email\" name=\"uemail\" [(ngModel)]=\"user.email\" placeholder=\"Useremail\"><br><br>\r\n      Country:<select name=\"ucountry\" [(ngModel)]=\"user.country\">\r\n          <option value=\"India\" >India </option>\r\n          <option value=\"America\" >America </option>\r\n          <option value=\"Austrialia\" >Austrialia </option>\r\n          <option value=\"England\" >England </option>\r\n      </select>\r\n      State:<select name=\"ustate\" [(ngModel)]=\"user.state\">\r\n          <option value=\"Karnataka\" >Karnataka </option>\r\n          <option value=\"Maharastra\" >Maharastra </option>\r\n          <option value=\"tamil nadu\" >tamil nadu</option>\r\n          <option value=\"Goa\" >Goa </option>\r\n          <option value=\"kerala\" >kerala</option>\r\n          <option value=\"Andra\" >Andra</option>\r\n          <option value=\"Orissa\" >Orissa</option>\r\n          <option value=\"Bihar\" >Bihar </option>\r\n      </select><br><br>\r\n      District:<select name=\"udistrict\" [(ngModel)]=\"user.district\">\r\n          <option value=\"Bangaluru\" >Bangaluru </option>\r\n          <option value=\"Tumkuru\" >Tumkuru </option>\r\n          <option value=\"Mysore\" >Mysore </option>\r\n          <option value=\"gadag\" >gadag </option>\r\n      </select>\r\n      post:<input type=\"number\" name=\"upin\" [(ngModel)]=\"user.pin\"><br><br>\r\n      Password<input type=\"password\" name=\"upasswd\" [(ngModel)]='user.passwd'>\r\n      Retype password<input type=\"password\" name=\"urpasswd\" [(ngModel)]=\"user.rpasswd\"><br><br>\r\n     <!-- Select profile picture<input type=\"file\" name=\"upic\" ng2FileSelect [uploader]=\"uploader\"/><br><br>-->\r\n      <input type=\"hidden\" name=\"flg\" value=\"0\" [(ngModel)]=\"user.flg\"><br><br>\r\n      <!--<button (click)=\"submitvalues()\">Submit</button>-->\r\n      <input type=\"submit\" name=\"submit\" />\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/update.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/update.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<hr><div id=\"main-div\" style=\"background-color: burlywood; padding:1%; width:90%;overflow:scroll;\">\r\n  <h3 style=\"background-color: darkcyan;\"><hr><b>Update User Details</b><hr></h3>\r\n  <h3 style=\"background-color: red;\">{{err}}</h3>\r\n  <form autocomplete=\"off\" ngNativeValidate (ngSubmit)=\"submitvalues()\" enctype=\"multipart/form-data\" method=\"POST\">\r\n      Name :<input type=\"text\" name=\"uname\" [(ngModel)]=\"userdata.username\" placeholder=\"UserName\" ><br><br>\r\n      date of birth :<input type=\"date\" name=\"udob\" [(ngModel)]=\"userdata.dob\" placeholder=\"yyyy-mm-dd\" ><br><br>\r\n      Gender:<select name=\"ugender\" [(ngModel)]=\"userdata.gender\">\r\n          <option value=\"Male\" >Male </option>\r\n          <option value=\"Female\" >Female </option>\r\n      </select><br><br>\r\n      Email:<input type=\"email\" name=\"uemail\" [(ngModel)]=\"userdata.email\" placeholder=\"Useremail\" readonly><br><br>\r\n      Country:<select name=\"ucountry\" [(ngModel)]=\"userdata.country\">\r\n          <option value=\"India\" >India </option>\r\n          <option value=\"America\" >America </option>\r\n          <option value=\"Austrialia\" >Austrialia </option>\r\n          <option value=\"England\" >England </option>\r\n      </select>\r\n      State:<select name=\"ustate\" [(ngModel)]=\"userdata.state\">\r\n          <option value=\"Karnataka\" >Karnataka </option>\r\n          <option value=\"Maharastra\" >Maharastra </option>\r\n          <option value=\"tamil nadu\" >tamil nadu</option>\r\n          <option value=\"Goa\" >Goa </option>\r\n          <option value=\"kerala\" >kerala</option>\r\n          <option value=\"Andra\" >Andra</option>\r\n          <option value=\"Orissa\" >Orissa</option>\r\n          <option value=\"Bihar\" >Bihar </option>\r\n      </select><br><br>\r\n      District:<select name=\"udistrict\" [(ngModel)]=\"userdata.district\">\r\n          <option value=\"Bangaluru\" >Bangaluru </option>\r\n          <option value=\"Tumkuru\" >Tumkuru </option>\r\n          <option value=\"Mysore\" >Mysore </option>\r\n          <option value=\"gadag\" >gadag </option>\r\n      </select>\r\n      post:<input type=\"number\" name=\"upin\" [(ngModel)]=\"userdata.postal\"><br><br>\r\n      Password<input type=\"password\" name=\"upasswd\" [(ngModel)]='userdata.password'>\r\n      Retype password<input type=\"password\" name=\"urpasswd\" [(ngModel)]=\"userdata.password\"><br><br>\r\n      <!--Select profile picture<input type=\"file\" name=\"upic\" ng2FileSelect [uploader]=\"uploader\"/>--><br><br>\r\n      <!--<input type=\"hidden\" name=\"flg\" ngvalue=\"1\" [(ngModel)]=\"user.flg\"><br><br>-->\r\n      <!--<button (click)=\"submitvalues()\">Submit</button>-->\r\n      <input type=\"submit\" name=\"submit\" />\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _public_calculator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public/calculator.component */ "./src/app/public/calculator.component.ts");
/* harmony import */ var _public_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public/game.component */ "./src/app/public/game.component.ts");
/* harmony import */ var _public_dispuser_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./public/dispuser.component */ "./src/app/public/dispuser.component.ts");
/* harmony import */ var _public_insert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./public/insert.component */ "./src/app/public/insert.component.ts");
/* harmony import */ var _public_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./public/update.component */ "./src/app/public/update.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login.component */ "./src/app/login.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");










const routes = [
    { path: 'calc', component: _public_calculator_component__WEBPACK_IMPORTED_MODULE_3__["CalculatorComponent"] },
    { path: 'game', component: _public_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"] },
    { path: 'dispuser', component: _public_dispuser_component__WEBPACK_IMPORTED_MODULE_5__["DispuserComponent"] },
    { path: 'insert', component: _public_insert_component__WEBPACK_IMPORTED_MODULE_6__["InsertComponent"] },
    { path: 'update', component: _public_update_component__WEBPACK_IMPORTED_MODULE_7__["UpdateComponent"] },
    { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'nav', component: _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

const routingComponents = [_public_calculator_component__WEBPACK_IMPORTED_MODULE_3__["CalculatorComponent"], _public_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"], _public_dispuser_component__WEBPACK_IMPORTED_MODULE_5__["DispuserComponent"], _public_insert_component__WEBPACK_IMPORTED_MODULE_6__["InsertComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a{\r\n  background-color:darkolivegreen;\r\n  color:white;\r\n  padding:2%;\r\n  -webkit-text-decoration-style: none;\r\n          text-decoration-style: none;\r\n\r\n}\r\na:hover{\r\n  background-color:cadetblue;\r\n}\r\n.navbar{\r\n  width:100%;\r\n  background-color:darkolivegreen;\r\n  padding-right:2%;\r\n  padding-top:2%;\r\n  padding-bottom:2%;\r\n}\r\n.text_box{\r\n  background-color:darkgray;\r\n  width:25%;\r\n  height:10%;\r\n  border: 2px solid #000044;\r\n  padding:3px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLFVBQVU7RUFDVixtQ0FBMkI7VUFBM0IsMkJBQTJCOztBQUU3QjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsU0FBUztFQUNULFVBQVU7RUFDVix5QkFBeUI7RUFDekIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ZGFya29saXZlZ3JlZW47XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgcGFkZGluZzoyJTtcclxuICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IG5vbmU7XHJcblxyXG59XHJcbmE6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpjYWRldGJsdWU7XHJcbn1cclxuLm5hdmJhcntcclxuICB3aWR0aDoxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ZGFya29saXZlZ3JlZW47XHJcbiAgcGFkZGluZy1yaWdodDoyJTtcclxuICBwYWRkaW5nLXRvcDoyJTtcclxuICBwYWRkaW5nLWJvdHRvbToyJTtcclxufVxyXG4udGV4dF9ib3h7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpkYXJrZ3JheTtcclxuICB3aWR0aDoyNSU7XHJcbiAgaGVpZ2h0OjEwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDQ0O1xyXG4gIHBhZGRpbmc6M3B4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Angularnew';
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({ url: 'http://localhost:3000/upload' });
        /*ngOnInit(){
       var pswd=prompt("Please provide admin password ??");
       while(pswd!="naveen")
       {
      alert("sorry Incorrect password  !!!!");
      pswd=prompt("Please provide admin password ??");
       }
        }*/
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _public_calculator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./public/calculator.component */ "./src/app/public/calculator.component.ts");
/* harmony import */ var _public_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./public/game.component */ "./src/app/public/game.component.ts");
/* harmony import */ var _public_dispuser_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./public/dispuser.component */ "./src/app/public/dispuser.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_freeapiservice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/freeapiservice */ "./src/app/services/freeapiservice.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_insert_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./public/insert.component */ "./src/app/public/insert.component.ts");
/* harmony import */ var _public_update_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./public/update.component */ "./src/app/public/update.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login.component */ "./src/app/login.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _public_calculator_component__WEBPACK_IMPORTED_MODULE_7__["CalculatorComponent"],
            _public_game_component__WEBPACK_IMPORTED_MODULE_8__["GameComponent"],
            _public_dispuser_component__WEBPACK_IMPORTED_MODULE_9__["DispuserComponent"],
            _public_insert_component__WEBPACK_IMPORTED_MODULE_13__["InsertComponent"],
            _public_update_component__WEBPACK_IMPORTED_MODULE_14__["UpdateComponent"],
            _login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__["FileUploadModule"]
        ],
        providers: [_services_freeapiservice__WEBPACK_IMPORTED_MODULE_11__["FreeApiServices"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/login.component.ts":
/*!************************************!*\
  !*** ./src/app/login.component.ts ***!
  \************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const urll = 'http://localhost:3000/login';
let LoginComponent = class LoginComponent {
    constructor(http, rout) {
        this.http = http;
        this.rout = rout;
        this.user = {
            uemail: '',
            upasswd: ''
        };
        this.temp = {};
        this.err = '';
    }
    verifiy() {
        if (this.user.uemail == '' || this.user.upasswd == '') {
            this.err = 'Please Enter email and password';
        }
        else {
            alert('requesting');
            this.http.post(urll, this.user).subscribe(data => this.rout.navigate(['nav']), error => this.err = 'User email and password incorrect');
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dispuser',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/public/calculator.component.ts":
/*!************************************************!*\
  !*** ./src/app/public/calculator.component.ts ***!
  \************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CalculatorComponent = class CalculatorComponent {
    constructor() {
        this.title = 'Angularnew';
        this.result = '';
        this.input = '';
    }
    calculate() {
        var temp = this.input;
        if (isNaN(parseFloat(temp))) {
            this.result = 'This Expression cannot be evaluated';
        }
        else {
            // tslint:disable-next-line: max-line-length
            if (temp.includes('@') || temp.includes('#') || temp.includes('!') || temp.includes('$') || temp.includes('&') || temp.includes('_') || temp.includes('~') || temp.includes(';') || temp.includes(':') || temp.includes('>') || temp.includes('<')) {
                this.result = 'This Expression cannot be evaluated';
            }
            else {
                this.result = eval(this.input);
            }
        }
    }
};
CalculatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calculator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/calculator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./common.component.css */ "./src/app/public/common.component.css")).default]
    })
], CalculatorComponent);



/***/ }),

/***/ "./src/app/public/common.component.css":
/*!*********************************************!*\
  !*** ./src/app/public/common.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text_box{\r\n  background-color:darkgray;\r\n  width:25%;\r\n  height:10%;\r\n  border: 2px solid #000044;\r\n  padding:3px;\r\n}\r\n.navbar{\r\n  width:100%;\r\n  background-color:darkolivegreen;\r\n  padding-right:1%;\r\n  padding-top:0.6%;\r\n  padding-bottom:0.6%;\r\n  padding-left:20%;\r\n}\r\ninput,select{\r\n  padding: 4px;\r\n  background-color:whitesmoke;\r\n  border-radius: 2px;\r\n  border-bottom-color: black;\r\n  border-top-style: none;\r\n  border-left-style: none;\r\n  border-right-style: none;\r\n  width:20%;\r\n}\r\n.stylebutton{\r\n  border-radius: 7%;\r\n  background-color:teal;\r\n  color:white;\r\n  padding: 4px;\r\n  border-style: none;\r\n  width:200px;\r\n}\r\n.maindiv{\r\n  width: 50%;\r\n  background-color: burlywood;\r\n  padding: 5%;\r\n  border-radius: 6%;\r\ntext-align: left;\r\n}\r\n.imgdisp{\r\n  width:50px;\r\n  height:50px;\r\n}\r\ntable{\r\n  width:90%;\r\n}\r\nth{\r\n  padding:1%;\r\n  background-color: darkolivegreen;\r\n}\r\ntd{\r\n  padding:1%;\r\n  background-color:silver;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL2NvbW1vbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkIsZ0JBQWdCO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7RUFDVixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLFVBQVU7RUFDVix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvY29tbW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dF9ib3h7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpkYXJrZ3JheTtcclxuICB3aWR0aDoyNSU7XHJcbiAgaGVpZ2h0OjEwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDQ0O1xyXG4gIHBhZGRpbmc6M3B4O1xyXG59XHJcbi5uYXZiYXJ7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOmRhcmtvbGl2ZWdyZWVuO1xyXG4gIHBhZGRpbmctcmlnaHQ6MSU7XHJcbiAgcGFkZGluZy10b3A6MC42JTtcclxuICBwYWRkaW5nLWJvdHRvbTowLjYlO1xyXG4gIHBhZGRpbmctbGVmdDoyMCU7XHJcbn1cclxuaW5wdXQsc2VsZWN0e1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IG5vbmU7XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xyXG4gIHdpZHRoOjIwJTtcclxufVxyXG4uc3R5bGVidXR0b257XHJcbiAgYm9yZGVyLXJhZGl1czogNyU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp0ZWFsO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgd2lkdGg6MjAwcHg7XHJcbn1cclxuLm1haW5kaXZ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XHJcbiAgcGFkZGluZzogNSU7XHJcbiAgYm9yZGVyLXJhZGl1czogNiU7XHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmltZ2Rpc3B7XHJcbiAgd2lkdGg6NTBweDtcclxuICBoZWlnaHQ6NTBweDtcclxufVxyXG50YWJsZXtcclxuICB3aWR0aDo5MCU7XHJcbn1cclxudGh7XHJcbiAgcGFkZGluZzoxJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb2xpdmVncmVlbjtcclxufVxyXG50ZHtcclxuICBwYWRkaW5nOjElO1xyXG4gIGJhY2tncm91bmQtY29sb3I6c2lsdmVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/public/dispuser.component.ts":
/*!**********************************************!*\
  !*** ./src/app/public/dispuser.component.ts ***!
  \**********************************************/
/*! exports provided: DispuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispuserComponent", function() { return DispuserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_freeapiservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/freeapiservice */ "./src/app/services/freeapiservice.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_sharesservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/sharesservice */ "./src/app/services/sharesservice.ts");






let DispuserComponent = class DispuserComponent {
    constructor(freeapiservice, rout, httpclient, sharedservice) {
        this.freeapiservice = freeapiservice;
        this.rout = rout;
        this.httpclient = httpclient;
        this.sharedservice = sharedservice;
        this.title = 'User Details';
        this.uname = '';
        this.uemail = '';
        this.user = {
            email: ''
        };
    }
    ngOnInit() {
        this.freeapiservice.getcomments().subscribe(data => {
            this.udata = data;
        });
    }
    search() {
        if (this.uname == '') {
            this.uname = '0';
        }
        this.freeapiservice.getusers(this.uname).subscribe(data => {
            this.udata = data;
            this.uname = '';
        });
    }
    delete(email) {
        this.uemail = email;
        var flg = confirm('Are you shure to delete this user ??');
        if (flg) {
            this.freeapiservice.deleteuser(this.uemail).subscribe(data => {
                console.log(data);
            });
            this.rout.navigate(['dispuser']);
        }
    }
    update(upddata) {
        this.sharedservice.setuserData(upddata);
        this.rout.navigate(['update']);
    }
    onFileSelected(event, tempemail) {
        //console.log(event);
        this.uploadedFiles = event.target.files;
        const fd = new FormData();
        //tempemail = tempemail + '.jpg';
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            fd.append('uploads[]', this.uploadedFiles[i], tempemail);
        }
        fd.append('email', tempemail);
        console.log(fd);
        if (tempemail == '') {
            alert("please Select image to upload");
        }
        else {
            var flg = confirm('Are you willing to change your profile picture ??');
            if (flg) {
                var url = 'http://localhost:3000/fileupload';
                var req = {
                    method: 'POST',
                    body: fd
                };
                /*this.httpclient.post(url,fd).subscribe(
                  data => {console.log(data);
                  },
                  error=>{console.log(error);
                  });*/
                fetch(url, req).then(function (response) {
                    console.log("the file has been uploaded to local server ", response.body);
                });
                this.rout.navigate(['dispuser']);
            }
        }
    }
};
DispuserComponent.ctorParameters = () => [
    { type: _services_freeapiservice__WEBPACK_IMPORTED_MODULE_2__["FreeApiServices"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _services_sharesservice__WEBPACK_IMPORTED_MODULE_5__["Sharedservice"] }
];
DispuserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dispuser',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dispuser.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/dispuser.component.html")).default,
        providers: [_services_sharesservice__WEBPACK_IMPORTED_MODULE_5__["Sharedservice"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./common.component.css */ "./src/app/public/common.component.css")).default]
    })
], DispuserComponent);



/***/ }),

/***/ "./src/app/public/game.component.ts":
/*!******************************************!*\
  !*** ./src/app/public/game.component.ts ***!
  \******************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GameComponent = class GameComponent {
    constructor() {
        this.title = 'Game';
        // tslint:disable-next-line: max-line-length
        this.words = ['elephant', 'monkey', 'rabbit', 'gorilla', 'peacock', 'butterfly', 'housefly', 'aeroplane', 'banana', 'rose', 'jamoon', 'lover', 'father', , 'mother', 'pubg', 'cricket', 'ludo'];
        this.incorrectletterschoosen = [];
        this.correctletterschoosen = [];
        this.gusses = 6;
        this.displayword = '';
        this.msg = '';
        this.hintname = 'is available for only last chance';
        this.index1 = 0;
        this.input = {
            letter: ''
        };
        this.selectedword = '';
        this.newgame = function () {
            this.incorrectletterschoosen = [];
            this.correctletterschoosen = [];
            this.gusses = 6;
            this.msg = '';
            this.displayword = '';
            var index = Math.round(Math.random() * this.words.length);
            this.index1 = index;
            this.selectedword = this.words[index];
            console.log(this.selectedword);
            let tempdisplay = '';
            for (let i = 0; i < this.selectedword.length; i++) {
                tempdisplay += '*';
            }
            this.displayword = tempdisplay;
        };
    }
    letterchoosen() {
        for (let i = 0; i < this.correctletterschoosen.length; i++) {
            if (this.correctletterschoosen[i].toLowerCase() == this.input.letter.toLowerCase()) {
                this.input.letter = '';
                return;
            }
        }
        for (let i = 0; i < this.incorrectletterschoosen.length; i++) {
            if (this.incorrectletterschoosen[i].toLowerCase() == this.input.letter.toLowerCase()) {
                this.input.letter = '';
                return;
            }
        }
        let correct = false;
        for (let i = 0; i < this.selectedword.length; i++) {
            if (this.selectedword[i].toLowerCase() == this.input.letter.toLowerCase() && this.displayword[i] == '*') {
                let temp = this.displayword.substr(0, i) + this.input.letter.toLowerCase() + this.displayword.substr(i + 1, this.displayword.length);
                this.displayword = temp;
                correct = true;
            }
        }
        if (correct) {
            this.correctletterschoosen.push(this.input.letter.toLowerCase());
        }
        else {
            this.incorrectletterschoosen.push(this.input.letter.toLowerCase());
            this.gusses = this.gusses - 1;
        }
        this.input.letter = '';
        if (this.gusses < 1) {
            this.msg = 'Sorry you have lost the game try again ??? The Word is ' + this.selectedword;
        }
        if (this.selectedword.toLowerCase() == this.displayword.toLowerCase()) {
            this.msg = 'Congrulations you have won the game ///';
        }
        if (this.gusses == 1) {
            if (this.index1 <= 3) {
                this.hintname = 'Animal name';
            }
            if (this.index1 == 3) {
                this.hintname = 'esds employee';
            }
            else if (this.index1 == 4) {
                this.hintname = 'bird name';
            }
            else if (this.index1 <= 6) {
                this.hintname = 'insect name';
            }
            else if (this.index1 == 7) {
                this.hintname = 'Automobile name';
            }
            else if (this.index1 == 8) {
                this.hintname = 'fruit name';
            }
            else if (this.index1 == 9) {
                this.hintname = 'flower name';
            }
            else if (this.index1 == 10) {
                this.hintname = 'sweet name';
            }
            else if (this.index1 <= 13) {
                this.hintname = 'relation ship name';
            }
            else if (this.index1 == 16) {
                this.hintname = 'game name';
            }
        }
    }
};
GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/game.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./common.component.css */ "./src/app/public/common.component.css")).default]
    })
], GameComponent);



/***/ }),

/***/ "./src/app/public/insert.component.ts":
/*!********************************************!*\
  !*** ./src/app/public/insert.component.ts ***!
  \********************************************/
/*! exports provided: InsertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertComponent", function() { return InsertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





const urll = 'http://localhost:3000/insertuser';
let InsertComponent = class InsertComponent {
    constructor(http, rout) {
        this.http = http;
        this.rout = rout;
        this.title = 'Insert new users';
        this.user = {
            name: '',
            email: '',
            gender: '',
            dob: '',
            country: '',
            state: '',
            district: '',
            pin: '',
            passwd: '',
            rpasswd: '',
            pic: '',
            flg: '0'
        };
        this.err = '';
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({
            url: urll
        });
    }
    submitvalues() {
        if (this.user.name == '' || this.user.email == '' || this.user.gender == '' || this.user.dob == '' || this.user.country == '' || this.user.state == '' || this.user.district == '' || this.user.pin == '' || this.user.passwd == '' || this.user.rpasswd == '') {
            alert(this.user.name);
            this.err = 'All fields are manditory please verifiy !!! ';
        }
        else {
            if (this.user.passwd != this.user.rpasswd) {
                this.err = 'please verifiy the password ??';
            }
            else {
                // tslint:disable-next-line: no-unused-expression
                this.http.post(urll, this.user).subscribe(data => alert("Successfull"), error => console.log(error));
                this.rout.navigate(['dispuser']);
            }
        }
    }
};
InsertComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
InsertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-insert',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./insert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/insert.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./common.component.css */ "./src/app/public/common.component.css")).default]
    })
], InsertComponent);



/***/ }),

/***/ "./src/app/public/update.component.ts":
/*!********************************************!*\
  !*** ./src/app/public/update.component.ts ***!
  \********************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_sharesservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/sharesservice */ "./src/app/services/sharesservice.ts");





const urll = 'http://localhost:3000/update';
let UpdateComponent = class UpdateComponent {
    constructor(http, rout, sharedservice) {
        this.http = http;
        this.rout = rout;
        this.sharedservice = sharedservice;
        this.title = 'Insert new users';
        this.user = {
            flg: '1',
        };
        this.err = '';
        this.userdata = {};
    }
    ngOnInit() {
        this.userdata = this.sharedservice.getuserData();
        console.log(this.userdata);
    }
    submitvalues() {
        this.userdata;
        // tslint:disable-next-line: no-unused-expression
        this.http.post(urll, this.userdata).subscribe(data => console.log(data), error => console.log(error));
        this.rout.navigate(['dispuser']);
    }
};
UpdateComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_sharesservice__WEBPACK_IMPORTED_MODULE_4__["Sharedservice"] }
];
UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dispuser',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/update.component.html")).default,
        providers: [_services_sharesservice__WEBPACK_IMPORTED_MODULE_4__["Sharedservice"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./common.component.css */ "./src/app/public/common.component.css")).default]
    })
], UpdateComponent);



/***/ }),

/***/ "./src/app/services/freeapiservice.ts":
/*!********************************************!*\
  !*** ./src/app/services/freeapiservice.ts ***!
  \********************************************/
/*! exports provided: FreeApiServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeApiServices", function() { return FreeApiServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let FreeApiServices = class FreeApiServices {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    getcomments() {
        return this.httpclient.get('http://localhost:3000/users');
    }
    getusers(n) {
        var url = 'http://localhost:3000/search/';
        url = url + n;
        return this.httpclient.get(url);
    }
    deleteuser(email) {
        var url = 'http://localhost:3000/delete/';
        var url = url + email;
        return this.httpclient.get(url);
    }
};
FreeApiServices.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FreeApiServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FreeApiServices);



/***/ }),

/***/ "./src/app/services/sharesservice.ts":
/*!*******************************************!*\
  !*** ./src/app/services/sharesservice.ts ***!
  \*******************************************/
/*! exports provided: Sharedservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sharedservice", function() { return Sharedservice; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var userdata = {};
let Sharedservice = class Sharedservice {
    constructor() {
        this.userdata = {};
    }
    setuserData(val) {
        userdata = val;
    }
    getuserData() {
        return userdata;
    }
};
Sharedservice = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], Sharedservice);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\naveen.g\Desktop\Angularnew\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map