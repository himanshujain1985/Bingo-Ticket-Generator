"use strict";
(self["webpackChunkbingo_generator"] = self["webpackChunkbingo_generator"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function AppComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r3 = ctx.$implicit;
    const row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.bingoData[column_r3][row_r1]);
} }
function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_4_div_1_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.columns);
} }
const RANGE = 10;
const generateRandom = (min, max) => Math.floor((Math.random() * (max - min)) + min);
const getMin = (multiplier) => multiplier * RANGE + (multiplier === 0 ? 1 : 0);
const getMax = (multiplier) => multiplier * RANGE + RANGE + (multiplier === 8 ? 1 : 0);
class AppComponent {
    constructor() {
        this.title = 'bingo-generator';
        this.columns = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        this.rows = [0, 1, 2];
    }
    ngOnInit() {
        this.generateBingoTicket();
    }
    generateBingoTicket() {
        this.bingoData = Array(this.columns.length)
            .fill(null)
            .map((_, colIndex) => this.generateColumnArray(colIndex, this.rows.length));
        // Transpose, Remove extra elements and then transpose back
        this.bingoData = this.sortColumnElements(this.transposeArray(this.removeExtraElements(this.transposeArray(this.bingoData))));
    }
    generateColumnArray(colIndex, arraySize) {
        const returnedArray = [];
        while (returnedArray.length < arraySize) {
            const randomNumber = generateRandom(getMin(colIndex), getMax(colIndex));
            if (!returnedArray.includes(randomNumber)) {
                returnedArray.push(randomNumber);
            }
        }
        return returnedArray;
    }
    transposeArray(inputArray) {
        const [column] = inputArray;
        return column.map((_, colIndex) => inputArray.map(row => row[colIndex]));
    }
    removeExtraElements(inputArray) {
        return inputArray
            .map((row, rowIndex, inputArrayParam) => {
            while (row.filter(item => item).length > 5) {
                const randomColumnIndex = generateRandom(0, this.columns.length);
                if (rowIndex < 2) {
                    row[randomColumnIndex] = null;
                }
                else {
                    if (inputArrayParam[rowIndex - 2][randomColumnIndex] || inputArrayParam[rowIndex - 1][randomColumnIndex]) {
                        row[randomColumnIndex] = null;
                    }
                }
            }
            return row;
        });
    }
    sortColumnElements(inputArray) {
        return inputArray
            .map((column) => {
            const validArrayLength = column.filter(item => item).length;
            switch (validArrayLength) {
                case 1:
                    return column;
                case 2:
                    const indexesToSwap = column
                        .map((item, index) => item ? index : -1)
                        .filter(item => item !== -1);
                    if (column[indexesToSwap[0]] > column[indexesToSwap[1]]) {
                        // Swap the numbers if not in order
                        [column[indexesToSwap[0]], column[indexesToSwap[1]]] = [column[indexesToSwap[1]], column[indexesToSwap[0]]];
                    }
                    return column;
                case 3:
                    return column.sort();
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [[1, "flex-container"], [1, "button-margin", 3, "click"], [1, "bingo-container"], ["class", "flex-content", 4, "ngFor", "ngForOf"], [1, "flex-content"], ["class", "bingo-cell", 4, "ngFor", "ngForOf"], [1, "bingo-cell"], [1, "center"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() { return ctx.generateBingoTicket(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Generate New Bingo Ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\n\r\n.button-margin[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n}\r\n\r\n.bingo-container[_ngcontent-%COMP%] {\r\n  border: double black;\r\n}\r\n\r\n.flex-content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.bingo-cell[_ngcontent-%COMP%] {\r\n  width: 90px;\r\n  height: 90px;\r\n}\r\n\r\n.bingo-cell[_ngcontent-%COMP%]:nth-child(even) {\r\n  border-top: 1px solid black;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.bingo-cell[_ngcontent-%COMP%]:nth-child(odd) {\r\n  border: 1px solid black;\r\n}\r\n\r\n.flex-content[_ngcontent-%COMP%]:nth-child(odd)    > .bingo-cell[_ngcontent-%COMP%]:nth-child(odd), .flex-content[_ngcontent-%COMP%]:nth-child(even)    > .bingo-cell[_ngcontent-%COMP%]:nth-child(even) {\r\n  background-color: pink;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding-top: 35px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uLW1hcmdpbiB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uYmluZ28tY29udGFpbmVyIHtcclxuICBib3JkZXI6IGRvdWJsZSBibGFjaztcclxufVxyXG5cclxuLmZsZXgtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJpbmdvLWNlbGwge1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIGhlaWdodDogOTBweDtcclxufVxyXG5cclxuLmJpbmdvLWNlbGw6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uYmluZ28tY2VsbDpudGgtY2hpbGQob2RkKSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRlbnQ6bnRoLWNoaWxkKG9kZCkgPiAuYmluZ28tY2VsbDpudGgtY2hpbGQob2RkKSxcclxuLmZsZXgtY29udGVudDpudGgtY2hpbGQoZXZlbikgPiAuYmluZ28tY2VsbDpudGgtY2hpbGQoZXZlbikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMzVweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map