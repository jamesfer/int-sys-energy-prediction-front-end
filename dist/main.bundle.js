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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_charts__);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12_ng2_charts__["ChartsModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__graph_graph_component__["a" /* GraphComponent */],
            __WEBPACK_IMPORTED_MODULE_7__graph_chart_chart_component__["a" /* ChartComponent */],
            __WEBPACK_IMPORTED_MODULE_8__graph_stats_stats_component__["a" /* StatsComponent */],
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

module.exports = "<div style=\"width: 100%\">\n  <canvas *ngIf=\"datasets.length && labels.length\" baseChart\n          [datasets]=\"datasets\"\n          [labels]=\"labels\"\n          [chartType]=\"'line'\"></canvas>\n  <div class=\"display-2\" style=\"line-height: 400px; text-align: center; opacity: 0.5;\" *ngIf=\"!(datasets.length && labels.length)\">\n    Loading\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/graph/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__energy_data_service__ = __webpack_require__("../../../../../src/app/graph/energy-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings_service__ = __webpack_require__("../../../../../src/app/settings/settings.service.ts");
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
    function ChartComponent(energyData, settings) {
        var _this = this;
        this.energyData = energyData;
        this.settings = settings;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["AnonymousSubject"]();
        this.datasets = [];
        this.labels = [];
        settings.settings()
            .takeUntil(this.unsubscribe)
            .subscribe(function () {
            _this.datasets = [];
            _this.labels = [];
        });
        energyData.data()
            .takeUntil(this.unsubscribe)
            .subscribe(function (results) {
            console.log('Received', results);
            _this.labels = results.keys;
            _this.datasets = [{
                    label: 'Actual',
                    data: results.expected,
                }, {
                    label: 'Predicted',
                    data: results.predicted,
                }];
        });
    }
    ChartComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    return ChartComponent;
}());
ChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chart',
        template: __webpack_require__("../../../../../src/app/graph/chart/chart.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__energy_data_service__["a" /* EnergyDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__energy_data_service__["a" /* EnergyDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__settings_settings_service__["a" /* SettingsService */]) === "function" && _b || Object])
], ChartComponent);

var _a, _b;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// function fakeData(): PredictionResult {
//   return {
//     expected: {
//       '1': 1,
//       '2': 2,
//       '3': 3,
//       '4': 4,
//       '5': 5,
//       '6': 6,
//       '7': 7,
//       '8': 8,
//       '9': 9,
//     },
//     predicted: {
//       '1': 1.1,
//       '2': 2.2,
//       '3': 3.1,
//       '4': 3.9,
//       '5': 4.5,
//       '6': 5,
//       '7': 6.3,
//       '8': 7.8,
//       '9': 9,
//     }
//   };
// }
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
        var _this = this;
        return this.settingsService.settings()
            .switchMap(function (params) {
            console.log('Requesting new data', params);
            if (params.lookback === 0) {
                params.lookback = null;
            }
            return _this.http.get(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].apiUrl, { params: params });
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
    EnergyDataService.prototype.expectedData = function () {
        return this.data().map(function (res) { return res.expected; });
    };
    EnergyDataService.prototype.dataPairs = function () {
        return this.data().map(function (result) {
            return Object(__WEBPACK_IMPORTED_MODULE_7_lodash__["reduce"])(Object(__WEBPACK_IMPORTED_MODULE_7_lodash__["keys"])(result.expected), function (accum, index) {
                var predicted = result.predicted[index];
                var expected = result.expected[index];
                if (predicted !== undefined) {
                    accum.push({ predicted: predicted, expected: expected });
                }
                return accum;
            }, []);
        });
    };
    return EnergyDataService;
}());
EnergyDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
        return this.energyData.predictedData().map(function (predicted) { return predicted.length; });
    };
    EnergyStatsService.prototype.meanSquaredError = function () {
        return this.energyData.dataPairs()
            .map(function (result) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["reduce"])(result, function (errorSum, _a) {
                var predicted = _a.predicted, expected = _a.expected;
                return errorSum + Math.pow((predicted - expected), 2);
            }, 0);
        })
            .withLatestFrom(this.numPoints(), function (errorSum, count) { return errorSum / count; });
    };
    EnergyStatsService.prototype.meanPercentError = function () {
        return this.energyData.dataPairs()
            .map(function (result) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["reduce"])(result, function (errorSum, _a) {
                var predicted = _a.predicted, expected = _a.expected;
                return errorSum + Math.abs(predicted - expected) / expected;
            }, 0) * 100;
        })
            .withLatestFrom(this.numPoints(), function (errorSum, count) { return errorSum / count; });
    };
    return EnergyStatsService;
}());
EnergyStatsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = "<span class=\"summary-data\">\n  <strong>Data points</strong> {{ numPoints | async }}\n</span>\n<span class=\"summary-data\">\n  <strong>Mean squared error</strong> {{ meanSquaredError | async }} watts<span style=\"vertical-align: super; font-size: 65%\">2</span>\n</span>\n<span class=\"summary-data\">\n  <strong>Mean percent error</strong> {{ meanPercentError | async }}%\n</span>\n"

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"form-group\">\n      <label for=\"country-input\">Country</label>\n      <select [(ngModel)]=\"country\" class=\"form-control\" id=\"country-input\">\n        <option value=\"ALL\">All</option>\n        <option value=\"AT\">Austria</option>\n        <option value=\"BA\">Bosnia</option>\n        <option value=\"BE\">Belgium</option>\n        <option value=\"BG\">Bulgaria</option>\n        <option value=\"CH\">Switzerland</option>\n        <option value=\"CY\">Cyprus</option>\n        <option value=\"CZ\">Czech Republic</option>\n        <option value=\"DE\">Germany</option>\n        <option value=\"DK\">Denmark</option>\n        <option value=\"EE\">Estonia</option>\n        <option value=\"ES\">Spain</option>\n        <option value=\"FI\">Finland</option>\n        <option value=\"FR\">France</option>\n        <option value=\"GB\">United Kingdom</option>\n        <option value=\"GR\">Greece</option>\n        <option value=\"HR\">Croatia</option>\n        <option value=\"HU\">Hungry</option>\n        <option value=\"IE\">Ireland</option>\n        <option value=\"IS\">Iceland</option>\n        <option value=\"IT\">Italy</option>\n        <option value=\"LT\">Lithuania</option>\n        <option value=\"LU\">Luxembourg</option>\n        <option value=\"LV\">Latvia</option>\n        <option value=\"ME\">Montenegro</option>\n        <option value=\"MK\">Macedonia</option>\n        <option value=\"NI\">Northern Ireland</option>\n        <option value=\"NL\">Netherlands</option>\n        <option value=\"NO\">Norway</option>\n        <option value=\"PL\">Poland</option>\n        <option value=\"PT\">Portugal</option>\n        <option value=\"RO\">Romania</option>\n        <option value=\"RS\">Serbia</option>\n        <option value=\"SE\">Sweden</option>\n        <option value=\"SI\">Slovenia</option>\n        <option value=\"SK\">Slovakia</option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"interval-input\">Interval</label>\n      <select [(ngModel)]=\"interval\" class=\"form-control\" id=\"interval-input\">\n        <option value=\"\">Select an interval...</option>\n        <option value=\"hourly\">Hourly</option>\n        <option value=\"monthly\">Monthly</option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <div class=\"form-check\">\n        <label class=\"form-check-label\">\n          <input [(ngModel)]=\"compressed\" type=\"checkbox\" class=\"form-check-input\"> Compressed\n        </label>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"lookback-window-input\">Lookback window</label>\n      <select [(ngModel)]=\"lookback\" id=\"lookback-window-input\" class=\"form-control\">\n        <option *ngIf=\"compressed\" value=\"\">None</option>\n        <option value=\"1\">1</option>\n        <option value=\"2\">2</option>\n        <option value=\"3\">3</option>\n        <option value=\"4\">4</option>\n        <option value=\"5\">5</option>\n        <option value=\"6\">6</option>\n        <option value=\"7\">7</option>\n        <option value=\"8\">8</option>\n        <option value=\"9\">9</option>\n        <option value=\"10\">10</option>\n        <option value=\"11\">11</option>\n        <option value=\"12\">12</option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Start</label>\n      <div class=\"row\">\n        <div class=\"col\" *ngIf=\"!compressed\">\n          <select [(ngModel)]=\"startYear\" class=\"form-control\" id=\"start-year-input\">\n            <option value=\"2010\">2010</option>\n            <option value=\"2011\">2011</option>\n            <option value=\"2012\">2012</option>\n            <option value=\"2013\">2013</option>\n            <option value=\"2014\">2014</option>\n            <option value=\"2015\">2015</option>\n            <option value=\"2016\">2016</option>\n          </select>\n        </div>\n        <div class=\"col\" *ngIf=\"interval == 'hourly' && !compressed || interval == 'monthly'\">\n          <select [(ngModel)]=\"startMonth\" class=\"form-control\" id=\"start-month-input\">\n            <option value=\"01\">January</option>\n            <option value=\"02\">February</option>\n            <option value=\"03\">March</option>\n            <option value=\"04\">April</option>\n            <option value=\"05\">May</option>\n            <option value=\"06\">June</option>\n            <option value=\"07\">July</option>\n            <option value=\"08\">August</option>\n            <option value=\"09\">September</option>\n            <option value=\"10\">October</option>\n            <option value=\"11\">November</option>\n            <option value=\"12\">December</option>\n          </select>\n        </div>\n        <div class=\"col\" *ngIf=\"interval == 'hourly' && compressed\">\n          <select [(ngModel)]=\"startHour\" class=\"form-control\" id=\"start-hour-input\">\n            <option value=\"01\">1am</option>\n            <option value=\"02\">2am</option>\n            <option value=\"03\">3am</option>\n            <option value=\"04\">4am</option>\n            <option value=\"05\">5am</option>\n            <option value=\"06\">6am</option>\n            <option value=\"07\">7am</option>\n            <option value=\"08\">8am</option>\n            <option value=\"09\">9am</option>\n            <option value=\"10\">10am</option>\n            <option value=\"11\">11am</option>\n            <option value=\"12\">12pm</option>\n            <option value=\"13\">1pm</option>\n            <option value=\"14\">2pm</option>\n            <option value=\"15\">3pm</option>\n            <option value=\"16\">4pm</option>\n            <option value=\"17\">5pm</option>\n            <option value=\"18\">6pm</option>\n            <option value=\"19\">7pm</option>\n            <option value=\"20\">8pm</option>\n            <option value=\"21\">9pm</option>\n            <option value=\"22\">10pm</option>\n            <option value=\"23\">11pm</option>\n            <option value=\"24\">12am</option>\n          </select>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>End</label>\n      <div class=\"row\">\n        <div class=\"col\" *ngIf=\"!compressed\">\n          <select [(ngModel)]=\"endYear\" class=\"form-control\" id=\"end-year-input\">\n            <option value=\"2010\">2010</option>\n            <option value=\"2011\">2011</option>\n            <option value=\"2012\">2012</option>\n            <option value=\"2013\">2013</option>\n            <option value=\"2014\">2014</option>\n            <option value=\"2015\">2015</option>\n            <option value=\"2016\">2016</option>\n          </select>\n        </div>\n        <div class=\"col\" *ngIf=\"!compressed && interval == 'hourly' || interval == 'monthly'\">\n          <select [(ngModel)]=\"endMonth\" class=\"form-control\" id=\"end-month-input\">\n            <option value=\"01\">January</option>\n            <option value=\"02\">February</option>\n            <option value=\"03\">March</option>\n            <option value=\"04\">April</option>\n            <option value=\"05\">May</option>\n            <option value=\"06\">June</option>\n            <option value=\"07\">July</option>\n            <option value=\"08\">August</option>\n            <option value=\"09\">September</option>\n            <option value=\"10\">October</option>\n            <option value=\"11\">November</option>\n            <option value=\"12\">December</option>\n          </select>\n        </div>\n        <div class=\"col\" *ngIf=\"interval == 'hourly' && compressed\">\n          <select [(ngModel)]=\"endHour\" class=\"form-control\" id=\"end-hour-input\">\n            <option value=\"01\">1am</option>\n            <option value=\"02\">2am</option>\n            <option value=\"03\">3am</option>\n            <option value=\"04\">4am</option>\n            <option value=\"05\">5am</option>\n            <option value=\"06\">6am</option>\n            <option value=\"07\">7am</option>\n            <option value=\"08\">8am</option>\n            <option value=\"09\">9am</option>\n            <option value=\"10\">10am</option>\n            <option value=\"11\">11am</option>\n            <option value=\"12\">12pm</option>\n            <option value=\"13\">1pm</option>\n            <option value=\"14\">2pm</option>\n            <option value=\"15\">3pm</option>\n            <option value=\"16\">4pm</option>\n            <option value=\"17\">5pm</option>\n            <option value=\"18\">6pm</option>\n            <option value=\"19\">7pm</option>\n            <option value=\"20\">8pm</option>\n            <option value=\"21\">9pm</option>\n            <option value=\"22\">10pm</option>\n            <option value=\"23\">11pm</option>\n            <option value=\"24\">12am</option>\n          </select>\n        </div>\n      </div>\n    </div>\n\n\n    <!--<button type=\"submit\" class=\"btn btn-primary\">Submit</button>-->\n  </div>\n</div>\n"

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
        this.country = 'DE';
        this.interval = 'hourly';
        this.lookback = '';
        this.compressed = true;
        this.startYear = '2014';
        this.startMonth = '01';
        this.startHour = '08';
        this.endYear = '2015';
        this.endMonth = '01';
        this.endHour = '20';
        this._settings = {};
    }
    SettingsComponent.prototype.ngDoCheck = function () {
        if (!this.compressed && !this.lookback) {
            this.lookback = 1;
        }
        var start = '';
        var end = '';
        if (this.interval === 'hourly') {
            if (this.compressed) {
                start = this.startHour;
                end = this.endHour;
            }
            else {
                start = this.startYear + "/" + this.startMonth;
                end = this.endYear + "/" + this.endMonth;
            }
        }
        else {
            if (this.compressed) {
                start = this.startMonth;
                end = this.endMonth;
            }
            else {
                start = this.startYear;
                end = this.endYear;
            }
        }
        this.emitSettings({
            country: this.country,
            interval: this.interval,
            lookback: this.lookback === '' ? null : this.lookback,
            compressed: this.compressed,
            start: start,
            end: end,
        });
    };
    SettingsComponent.prototype.emitSettings = function (settings) {
        var changed = false;
        for (var key in settings) {
            if (this._settings[key] !== settings[key]) {
                changed = true;
                break;
            }
        }
        if (changed) {
            console.log(settings);
            this._settings = settings;
            this.settings.setSettings(settings);
        }
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        // protected _country = 'DE';
        // protected _interval: Interval = 'hourly';
        // protected _lookback = 0;
        this._settings = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // get country() {
        //   return this._country;
        // }
        // set country(value: string) {
        //   this._country = value;
        //   this.emitUpdate();
        // }
        //
        // get interval() {
        //   return this._interval;
        // }
        // set interval(value: Interval) {
        //   this._interval = value;
        //   this.emitUpdate();
        // }
        //
        // get lookback() {
        //   return this._lookback;
        // }
        // set lookback(value: number) {
        //   this._lookback = value;
        //   this.emitUpdate();
        // }
        // private makeSettings(): Settings {
        //   return {
        //     country: this.country,
        //     interval: this.interval,
        //     lookback: this.lookback,
        //   };
        // }
        // private emitUpdate() {
        //   this._settings.next(this.makeSettings());
        // }
    }
    SettingsService.prototype.settings = function () {
        return this._settings;
    };
    SettingsService.prototype.setSettings = function (value) {
        this._settings.next(value);
    };
    return SettingsService;
}());
SettingsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
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
    production: false,
    apiUrl: 'http://localhost:8000/',
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map