webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Energy Prediction</a>\n</nav>\n\n<div class=\"contents\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-9 slim-col\">\n        <app-graph></app-graph>\n      </div>\n\n      <div class=\"col-lg-3 slim-col\">\n        <app-settings></app-settings>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings_service__ = __webpack_require__("../../../../../src/app/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__graph_graph_component__ = __webpack_require__("../../../../../src/app/graph/graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graph_chart_chart_component__ = __webpack_require__("../../../../../src/app/graph/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graph_stats_stats_component__ = __webpack_require__("../../../../../src/app/graph/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__graph_energy_data_service__ = __webpack_require__("../../../../../src/app/graph/energy-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graph_energy_stats_service__ = __webpack_require__("../../../../../src/app/graph/energy-stats.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__graph_graph_component__["a" /* GraphComponent */],
            __WEBPACK_IMPORTED_MODULE_7__graph_chart_chart_component__["a" /* ChartComponent */],
            __WEBPACK_IMPORTED_MODULE_8__graph_stats_stats_component__["a" /* StatsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__settings_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_9__graph_energy_data_service__["a" /* EnergyDataService */],
            __WEBPACK_IMPORTED_MODULE_10__graph_energy_stats_service__["a" /* EnergyStatsService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/graph/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"https://camo.githubusercontent.com/b20f005d79ef8c46b17b9384d29f81a7aeed2c9b/687474703a2f2f692e696d6775722e636f6d2f6d576c416e64412e706e67\" style=\"width: 100%; max-height: 500px\">\n"

/***/ }),

/***/ "../../../../../src/app/graph/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__energy_data_service__ = __webpack_require__("../../../../../src/app/graph/energy-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartComponent = (function () {
    function ChartComponent(energyData) {
        this.energyData = energyData;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["AnonymousSubject"]();
    }
    ChartComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    return ChartComponent;
}());
ChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-chart',
        template: __webpack_require__("../../../../../src/app/graph/chart/chart.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__energy_data_service__["a" /* EnergyDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__energy_data_service__["a" /* EnergyDataService */]) === "function" && _a || Object])
], ChartComponent);

var _a;
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/graph/energy-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnergyDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings_service__ = __webpack_require__("../../../../../src/app/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_publishReplay__ = __webpack_require__("../../../../rxjs/add/operator/publishReplay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_publishReplay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_publishReplay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









function fakeData() {
    return {
        actual: {
            '1': 1,
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
        },
        predicted: {
            '1': 1.1,
            '2': 2.2,
            '3': 3.1,
            '4': 3.9,
            '5': 4.5,
            '6': 5,
            '7': 6.3,
            '8': 7.8,
            '9': 9,
        }
    };
}
var EnergyDataService = (function () {
    function EnergyDataService(settingsService, http) {
        this.settingsService = settingsService;
        this.http = http;
        this.dataObs = this._data();
        this.dataSubscription = this.dataObs.connect();
    }
    EnergyDataService.prototype.ngOnDestroy = function () {
        this.dataSubscription.unsubscribe();
    };
    EnergyDataService.prototype._data = function () {
        return this.settingsService.settings()
            .switchMap(function (params) {
            // return this.http.get('insert url here', { params });
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of({ json: fakeData });
        })
            .map(function (response) { return response.json(); })
            .publishReplay(1);
    };
    EnergyDataService.prototype.data = function () {
        return this.dataObs;
    };
    EnergyDataService.prototype.predictedData = function () {
        return this.data().map(function (res) { return res.predicted; });
    };
    EnergyDataService.prototype.actualData = function () {
        return this.data().map(function (res) { return res.actual; });
    };
    EnergyDataService.prototype.dataPairs = function () {
        return this.data().map(function (result) {
            return Object(__WEBPACK_IMPORTED_MODULE_8_lodash__["reduce"])(result.actual, function (accum, actual, key) {
                if (result.predicted[key] !== undefined) {
                    accum[key] = {
                        predicted: result.predicted[key],
                        actual: result.actual[key],
                    };
                }
                return accum;
            }, {});
        });
    };
    return EnergyDataService;
}());
EnergyDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */]) === "function" && _b || Object])
], EnergyDataService);

var _a, _b;
//# sourceMappingURL=energy-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/graph/energy-stats.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnergyStatsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__energy_data_service__ = __webpack_require__("../../../../../src/app/graph/energy-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_withLatestFrom__ = __webpack_require__("../../../../rxjs/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_withLatestFrom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_withLatestFrom__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnergyStatsService = (function () {
    function EnergyStatsService(energyData) {
        this.energyData = energyData;
    }
    EnergyStatsService.prototype.numPoints = function () {
        return this.energyData.predictedData().map(function (predicted) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["keys"])(predicted).length;
        });
    };
    EnergyStatsService.prototype.meanSquaredError = function () {
        return this.energyData.dataPairs()
            .withLatestFrom(this.numPoints(), function (result, count) { return ({ result: result, count: count }); })
            .map(function (_a) {
            var result = _a.result, count = _a.count;
            return Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["reduce"])(result, function (errorSum, _a) {
                var predicted = _a.predicted, actual = _a.actual;
                var error = predicted - actual;
                return errorSum + Math.pow(error, 2);
            }, 0) / count;
        });
    };
    EnergyStatsService.prototype.meanPercentError = function () {
        return this.energyData.dataPairs()
            .withLatestFrom(this.numPoints(), function (result, count) { return ({ result: result, count: count }); })
            .map(function (_a) {
            var result = _a.result, count = _a.count;
            return Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["reduce"])(result, function (errorSum, _a) {
                var predicted = _a.predicted, actual = _a.actual;
                var error = Math.abs(predicted - actual) / actual;
                return errorSum + error;
            }, 0) * 100 / count;
        });
    };
    return EnergyStatsService;
}());
EnergyStatsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__energy_data_service__["a" /* EnergyDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__energy_data_service__["a" /* EnergyDataService */]) === "function" && _a || Object])
], EnergyStatsService);

var _a;
//# sourceMappingURL=energy-stats.service.js.map

/***/ }),

/***/ "../../../../../src/app/graph/graph.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <app-chart></app-chart>\n    </div>\n    <div class=\"col-sm-12\">\n      <div class=\"card-body\">\n        <app-stats></app-stats>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/graph/graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__energy_data_service__ = __webpack_require__("../../../../../src/app/graph/energy-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GraphComponent = (function () {
    function GraphComponent(energyData) {
        this.energyData = energyData;
    }
    return GraphComponent;
}());
GraphComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-graph',
        template: __webpack_require__("../../../../../src/app/graph/graph.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__energy_data_service__["a" /* EnergyDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__energy_data_service__["a" /* EnergyDataService */]) === "function" && _a || Object])
], GraphComponent);

var _a;
//# sourceMappingURL=graph.component.js.map

/***/ }),

/***/ "../../../../../src/app/graph/stats/stats.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"summary-data\">\n  <strong>Data points</strong> {{ numPoints | async }}\n</span>\n<span class=\"summary-data\">\n  <strong>Mean squared error</strong> {{ meanSquaredError | async }} degrees<span style=\"vertical-align: super; font-size: 65%\">2</span>\n</span>\n<span class=\"summary-data\">\n  <strong>Mean percent error</strong> {{ meanPercentError | async }}%\n</span>\n"

/***/ }),

/***/ "../../../../../src/app/graph/stats/stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__energy_stats_service__ = __webpack_require__("../../../../../src/app/graph/energy-stats.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatsComponent = (function () {
    function StatsComponent(energyStats) {
        this.energyStats = energyStats;
        this.numPoints = energyStats.numPoints();
        this.meanSquaredError = energyStats.meanSquaredError()
            .map(function (error) { return error.toFixed(2); });
        this.meanPercentError = energyStats.meanPercentError()
            .map(function (error) { return error.toFixed(2); });
    }
    return StatsComponent;
}());
StatsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-stats',
        template: __webpack_require__("../../../../../src/app/graph/stats/stats.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__energy_stats_service__["a" /* EnergyStatsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__energy_stats_service__["a" /* EnergyStatsService */]) === "function" && _a || Object])
], StatsComponent);

var _a;
//# sourceMappingURL=stats.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"form-group\">\n      <label for=\"country-input\">Country</label>\n      <select [(ngModel)]=\"settings.country\" class=\"form-control\" id=\"country-input\">\n        <option value=\"\">All</option>\n        <option value=\"UK\">United Kingdom</option>\n        <option value=\"FR\">France</option>\n        <option value=\"DE\">Germany</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"interval-input\">Interval</label>\n      <select [(ngModel)]=\"settings.interval\" class=\"form-control\" id=\"interval-input\">\n        <option value=\"\">Select an interval...</option>\n        <option value=\"hourly\">Hourly</option>\n        <option value=\"daily\">Daily</option>\n        <option value=\"monthly\">Monthly</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lookback-window-input\">Lookback window</label>\n      <input [(ngModel)]=\"settings.lookbackWindow\" type=\"number\" class=\"form-control\" id=\"lookback-window-input\" min=\"1\" max=\"24\" placeholder=\"Enter a lookback window...\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_service__ = __webpack_require__("../../../../../src/app/settings/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = (function () {
    function SettingsComponent(settings) {
        this.settings = settings;
    }
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__settings_service__["a" /* SettingsService */]) === "function" && _a || Object])
], SettingsComponent);

var _a;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsService = (function () {
    function SettingsService() {
        this._country = '';
        this._interval = 'hourly';
        this._lookbackWindow = 3;
        this._settings = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    SettingsService.prototype.settings = function () {
        return this._settings.startWith(this.makeSettings());
    };
    Object.defineProperty(SettingsService.prototype, "country", {
        get: function () {
            return this._country;
        },
        set: function (value) {
            this._country = value;
            this.emitUpdate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsService.prototype, "interval", {
        get: function () {
            return this._interval;
        },
        set: function (value) {
            this._interval = value;
            this.emitUpdate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsService.prototype, "lookbackWindow", {
        get: function () {
            return this._lookbackWindow;
        },
        set: function (value) {
            this._lookbackWindow = value;
            this.emitUpdate();
        },
        enumerable: true,
        configurable: true
    });
    SettingsService.prototype.makeSettings = function () {
        return {
            country: this.country,
            interval: this.interval,
            lookbackWindow: this.lookbackWindow,
        };
    };
    SettingsService.prototype.emitUpdate = function () {
        this._settings.next(this.makeSettings());
    };
    return SettingsService;
}());
SettingsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], SettingsService);

//# sourceMappingURL=settings.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map