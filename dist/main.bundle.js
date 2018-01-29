webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

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

module.exports = "<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/components/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_calendar_header_calendar_header_component__ = __webpack_require__("../../../../../src/app/components/calendar-header/calendar-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_logout_logout_component__ = __webpack_require__("../../../../../src/app/components/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_user_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularx_social_login__ = __webpack_require__("../../../../angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular_calendar__ = __webpack_require__("../../../../angular-calendar/esm5/angular-calendar.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ng specific







// components








// services


// angularx social login


// bootstrap

// angular calendar

// add this file to .gitignore
//config stuff
var config = new __WEBPACK_IMPORTED_MODULE_17_angularx_social_login__["b" /* AuthServiceConfig */]([
    {
        id: __WEBPACK_IMPORTED_MODULE_17_angularx_social_login__["d" /* GoogleLoginProvider */].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_17_angularx_social_login__["d" /* GoogleLoginProvider */]("309159613841-ul4mrtd0a0mqsds7038868ubieiq8aso.apps.googleusercontent.com")
    },
    {
        id: __WEBPACK_IMPORTED_MODULE_17_angularx_social_login__["c" /* FacebookLoginProvider */].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_17_angularx_social_login__["c" /* FacebookLoginProvider */]("198132994096278")
    }
]);
// define ng routes
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_12__components_logout_logout_component__["a" /* LogoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'calendar', component: __WEBPACK_IMPORTED_MODULE_8__components_calendar_calendar_component__["a" /* CalendarComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_calendar_calendar_component__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_calendar_header_calendar_header_component__["a" /* CalendarHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_17_angularx_social_login__["e" /* SocialLoginModule */].initialize(config),
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_19_angular_calendar__["a" /* CalendarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_15__services_auth_user_auth_service__["a" /* UserAuthService */], __WEBPACK_IMPORTED_MODULE_18__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/calendar-header/calendar-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".m-top{\n  margin-top: 60px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/calendar-header/calendar-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center m-top\">\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarPreviousView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"viewDateChange.next(viewDate)\">\n        Previous\n      </div>\n      <div\n        class=\"btn btn-outline-secondary\"\n        mwlCalendarToday\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"viewDateChange.next(viewDate)\">\n        Today\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarNextView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"viewDateChange.next(viewDate)\">\n        Next\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"col-md-4\">\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):locale  }}</h3>\n  </div>\n\n\n\n\n<!--\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"viewChange.emit('month')\"\n        [class.active]=\"view === 'month'\">\n        Month\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"viewChange.emit('week')\"\n        [class.active]=\"view === 'week'\">\n        Week\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"viewChange.emit('day')\"\n        [class.active]=\"view === 'day'\">\n        Day\n      </div>\n    </div>\n  </div>\n-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/calendar-header/calendar-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarHeaderComponent = /** @class */ (function () {
    function CalendarHeaderComponent() {
        this.locale = 'en';
        this.viewChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.viewDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CalendarHeaderComponent.prototype, "view", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Date)
    ], CalendarHeaderComponent.prototype, "viewDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CalendarHeaderComponent.prototype, "locale", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], CalendarHeaderComponent.prototype, "viewChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], CalendarHeaderComponent.prototype, "viewDateChange", void 0);
    CalendarHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-calendar-header',
            template: __webpack_require__("../../../../../src/app/components/calendar-header/calendar-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/calendar-header/calendar-header.component.css")]
        })
    ], CalendarHeaderComponent);
    return CalendarHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".m-top-sm{\n  margin-top: 10px;\n}\n.m-top-md{\n  margin-top: 30px;\n}\n.m-top-lg{\n  margin-top: 60px;\n}\n.m-btm-sm{\n  margin-bottom: 10px;\n}\n.m-btm-md{\n  margin-bottom: 30px;\n}\n.m-btm-lg{\n  margin-bottom: 60px;\n}\n.m-btm-xlg{\n  margin-bottom: 120px;\n}\n.cal-day-selected,\n.cal-day-selected:hover {\n  background-color: #faffad !important;\n}\n.right {\n    position: absolute;\n    right: 0px;\n}\n.pos-abs {\n    position: absolute;\n    right: 5px;\n    bottom: 5px;\n}\n.pos-rel {\n  position:relative;\n}\n.circle {\n\tborder-radius: 50%;\n\twidth: 60px;\n\theight: 60px;\n  font-size: 30px;\n  text-align: center;\n  line-height: 45px;\n}\n.background-div{\n  background-color: #f4f8ff;\n}\n.center{\n  text-align: center;\n}\n.pad-vert-sm{\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.pad-bottom-large{\n  padding-bottom: 120px;\n}\n.side-margin{\n  display: block;\n  width: 50%;\n  background-color: #f8f8ff;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n.side-margin-bottom{\n  display: block;\n  width: 75%;\n  background-color: #add7ff;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30px;\n  margin-bottom: 120px;\n}\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n:required  {\nbackground: url(https://cdn0.iconfinder.com/data/icons/fugue/icon/asterisk-small.png) no-repeat;\nbackground-position:right top;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- modal used for user input to create session -->\n<ng-template #sessionModal let-close=\"close\">\n\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Create Session</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n    <div class=\"container\">\n      <div [hidden]=\"submitted\">\n\n        <!-- form asking user to define session -->\n        <form (ngSubmit)=\"onSubmit()\" #sessionForm=\"ngForm\">\n\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"name\"\n                   required\n                   minlength=\"4\"\n                   [(ngModel)]=\"tempSessionName\" name=\"name\"\n                   #name=\"ngModel\">\n\n            <!-- display alert if the user input is not sufficient -->\n            <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n                 class=\"alert alert-danger\">\n              <!-- user input cannot be empty -->\n              <div *ngIf=\"name.errors.required\">\n                Name is required.\n              </div>\n              <!-- input has to 4 characters or longer -->\n              <div *ngIf=\"name.errors.minlength\">\n                Name must be at least 4 characters long.\n              </div>\n            </div>\n          </div>\n\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!sessionForm.form.valid\" (click)=\"createSession();\">Submit</button>\n\n        </form>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">Cancel</button>\n  </div>\n\n</ng-template>\n\n<!-- modal used for user input to create session -->\n<ng-template #updateSessionModal let-close=\"close\">\n\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Update Session</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n    <div class=\"container\">\n      <div [hidden]=\"submitted\">\n\n        <!-- form asking user to define session -->\n        <form (ngSubmit)=\"onSubmit()\" #updateSessionForm=\"ngForm\">\n\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"name\"\n                   required\n                   minlength=\"4\"\n                   [(ngModel)]=\"tempSessionName\" name=\"name\"\n                   #name=\"ngModel\"\n                   >\n\n\n\n            <!-- display alert if the user input is not sufficient -->\n            <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n                 class=\"alert alert-danger\">\n              <!-- user input cannot be empty -->\n              <div *ngIf=\"name.errors.required\">\n                Name is required.\n              </div>\n              <!-- input has to 4 characters or longer -->\n              <div *ngIf=\"name.errors.minlength\">\n                Name must be at least 4 characters long.\n              </div>\n            </div>\n          </div>\n\n          <!-- show update button only if the user touched the input field-->\n          <button *ngIf=\"name.dirty\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!updateSessionForm.form.valid\" (click)=\"updateSession();\">Update</button>\n\n        </form>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">Cancel</button>\n  </div>\n\n</ng-template>\n\n<!-- modal used for user input to create session -->\n<ng-template #updateWorkoutModal let-close=\"close\">\n\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Update Workout</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n    <div class=\"container\">\n      <div [hidden]=\"submitted\">\n\n        <!-- form asking user to define session -->\n        <form (ngSubmit)=\"onSubmit()\" #updateWorkoutForm=\"ngForm\">\n\n\n          <!-- define group type -->\n          <div *ngIf=\"currentGroup.type == 'Boulder'\" class=\"form-group\">\n            <label for=\"grade\">Boulder Grade</label>\n            <select class=\"form-control\"\n                    required\n                    [(ngModel)]=\"tempWorkoutName\"\n                    #type=\"ngModel\"\n                    name=\"grade\">\n              <option value=\"\" selected default>--     select a grade    --</option>\n              <option *ngFor=\"let grade of boulderGradeArr\" [ngValue]=\"grade\">{{ grade }}</option>\n\n            </select>\n          </div>\n\n          <div *ngIf=\"currentGroup.type == 'Sport'\" class=\"form-group\">\n            <label for=\"grade\">Sport Grade</label>\n            <select class=\"form-control\"\n                    required\n                    [(ngModel)]=\"tempWorkoutName\"\n                    #type=\"ngModel\"\n                    name=\"grade\">\n              <option value=\"\" selected default>--     select a grade    --</option>\n              <option *ngFor=\"let grade of sportGradeArr\" [ngValue]=\"grade\">{{ grade }}</option>\n\n            </select>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"set\">Sets</label>\n            <select class=\"form-control\"\n              required\n              [(ngModel)]=\"tempWorkoutSets\"\n              #set=\"ngModel\"\n              name=\"set\">\n              <option *ngFor=\"let set of numArr\" [ngValue]=\"set\">{{ set }}</option>\n            </select>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"reps\">Reps</label>\n            <select class=\"form-control\"\n              required\n              [(ngModel)]=\"tempWorkoutReps\"\n              #reps=\"ngModel\"\n              name=\"reps\">\n              <option *ngFor=\"let rep of numArr\" [ngValue]=\"rep\">{{ rep }}</option>\n            </select>\n          </div>\n\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!updateWorkoutForm.form.valid\" (click)=\"updateWorkout();\">Submit</button>\n\n        </form>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">Cancel</button>\n  </div>\n\n</ng-template>\n\n<!-- modal used for user input to create group -->\n<ng-template #groupModal let-close=\"close\">\n\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Create Group</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n    <div class=\"container\">\n      <div [hidden]=\"submitted\">\n\n        <!-- form asking user to define session -->\n        <form (ngSubmit)=\"onSubmit()\" #groupForm=\"ngForm\">\n\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"name\"\n                   required\n                   minlength=\"4\"\n                   [(ngModel)]=\"tempGroupName\" name=\"name\"\n                   #name=\"ngModel\">\n\n            <!-- display alert if the user input is not sufficient -->\n            <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n                 class=\"alert alert-danger\">\n              <!-- user input cannot be empty -->\n              <div *ngIf=\"name.errors.required\">\n                Name is required.\n              </div>\n              <!-- input has to 4 characters or longer -->\n              <div *ngIf=\"name.errors.minlength\">\n                Name must be at least 4 characters long.\n              </div>\n            </div>\n          </div>\n\n          <!-- define group type -->\n          <div class=\"form-group\">\n            <label for=\"type\">Workout Type</label>\n            <select class=\"form-control\"\n                    required\n                    [(ngModel)]=\"tempGroupType\"\n                    #type=\"ngModel\"\n                    name=\"type\">\n              <option value=\"\" selected default>--     select a type    --</option>\n              <option *ngFor=\"let type of groupTypeArr\" [ngValue]=\"type\">{{ type }}</option>\n\n            </select>\n          </div>\n\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!groupForm.form.valid\" (click)=\"createGroup();\">Submit</button>\n\n        </form>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"groupForm.reset(); close();\">Cancel</button>\n  </div>\n\n</ng-template>\n\n<!-- modal used for user input to create boulder workout -->\n<ng-template #boulderModal let-close=\"close\">\n\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Create Boulder Workout</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n    <div class=\"container\">\n      <div [hidden]=\"submitted\">\n\n        <!-- form asking user to define session -->\n        <form (ngSubmit)=\"onSubmit()\" #boulderForm=\"ngForm\">\n\n\n          <!-- define group type -->\n          <div class=\"form-group\">\n            <label for=\"grade\">Boulder Grade</label>\n            <select class=\"form-control\"\n                    required\n                    [(ngModel)]=\"tempWorkoutName\"\n                    #type=\"ngModel\"\n                    name=\"grade\">\n              <option value=\"\" selected default>--     select a grade    --</option>\n              <option *ngFor=\"let grade of boulderGradeArr\" [ngValue]=\"grade\">{{ grade }}</option>\n\n            </select>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"set\">Sets</label>\n            <select class=\"form-control\"\n              required\n              [(ngModel)]=\"tempWorkoutSets\"\n              #set=\"ngModel\"\n              name=\"set\">\n              <option *ngFor=\"let set of numArr\" [ngValue]=\"set\">{{ set }}</option>\n            </select>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"reps\">Reps</label>\n            <select class=\"form-control\"\n              required\n              [(ngModel)]=\"tempWorkoutReps\"\n              #reps=\"ngModel\"\n              name=\"reps\">\n              <option *ngFor=\"let rep of numArr\" [ngValue]=\"rep\">{{ rep }}</option>\n            </select>\n          </div>\n\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!boulderForm.form.valid\" (click)=\"createWorkout();\">Submit</button>\n\n        </form>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"boulderForm.reset(); close();\">Cancel</button>\n  </div>\n\n</ng-template>\n\n\n<!-- modal used for user input to create boulder workout -->\n<ng-template #sportModal let-close=\"close\">\n\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Create Sport Climbing Workout</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n    <div class=\"container\">\n      <div [hidden]=\"submitted\">\n\n        <!-- form asking user to define session -->\n        <form (ngSubmit)=\"onSubmit()\" #sportForm=\"ngForm\">\n\n\n          <!-- define group type -->\n          <div class=\"form-group\">\n            <label for=\"grade\">Sport Grade</label>\n            <select class=\"form-control\"\n                    required\n                    [(ngModel)]=\"tempWorkoutName\"\n                    #type=\"ngModel\"\n                    name=\"grade\">\n              <option value=\"\" selected default>--     select a grade    --</option>\n              <option *ngFor=\"let grade of sportGradeArr\" [ngValue]=\"grade\">{{ grade }}</option>\n\n            </select>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"set\">Sets</label>\n            <select class=\"form-control\"\n              required\n              [(ngModel)]=\"tempWorkoutSets\"\n              #set=\"ngModel\"\n              name=\"set\">\n              <option *ngFor=\"let set of numArr\" [ngValue]=\"set\">{{ set }}</option>\n            </select>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"reps\">Reps</label>\n            <select class=\"form-control\"\n              required\n              [(ngModel)]=\"tempWorkoutReps\"\n              #reps=\"ngModel\"\n              name=\"reps\">\n              <option *ngFor=\"let rep of numArr\" [ngValue]=\"rep\">{{ rep }}</option>\n            </select>\n          </div>\n\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!sportForm.form.valid\" (click)=\"createWorkout();\">Submit</button>\n\n        </form>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"boulderForm.reset(); close();\">Cancel</button>\n  </div>\n\n</ng-template>\n\n<!-- calendar header -->\n<app-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\"\n  (viewDateChange)=\"updateMonth()\">\n</app-calendar-header>\n\n<!-- calendar -->\n<div class=\"container\">\n  <div class=\"pos-rel\">\n    <div [ngSwitch]=\"view\">\n      <mwl-calendar-month-view\n        *ngSwitchCase=\"'month'\"\n        [viewDate]=\"viewDate\"\n        [events]=\"events\"\n        [refresh]=\"refresh\"\n        [activeDayIsOpen]=\"activeDayIsOpen\"\n        (beforeViewRender)=\"beforeMonthViewRender($event)\"\n        (dayClicked)=\"dayClicked($event.day)\">\n      </mwl-calendar-month-view>\n      <mwl-calendar-week-view\n        *ngSwitchCase=\"'week'\"\n        [viewDate]=\"viewDate\"\n        [events]=\"events\">\n      </mwl-calendar-week-view>\n      <mwl-calendar-day-view\n        *ngSwitchCase=\"'day'\"\n        [viewDate]=\"viewDate\"\n        [events]=\"events\"\n        (beforeViewRender)=\"beforeDayViewRender($event.body)\"\n        (hourSegmentClicked)=\"hourSegmentClicked($event.date)\">\n      </mwl-calendar-day-view>\n    </div>\n    <a class=\"btn btn-primary pos-abs circle\" (click)=\"openSessionModal()\">+</a>\n  </div>\n</div>\n\n<!-- table used to display session data to user -->\n<div  *ngIf=\"sessionId\" class=\"container m-top-md m-bottom-xlg\">\n\n  <div>\n    <h1 class=\"center\">\n      {{ sessionName }}\n      <i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"openUpdateSessionModal()\"></i>\n      <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)=\"removeSession()\"></i>\n    </h1>\n\n  </div>\n\n\n  <!-- create a table for each group contained in the session -->\n\n  <div class=\"m-bottom-md background-div container no-gutters\" *ngFor=\"let group of groups, let i = index\">\n    <div>\n      <h3 class=\"center pad-vert-sm\" (click)=\"removeGroup(group)\">\n        {{ group.name }} ({{ group.type }})\n        <i class=\"fa fa-trash-o fa\" aria-hidden=\"true\" (click)=\"removeGroup(group)\"></i>\n      </h3>\n    </div>\n\n    <table class=\"table table-bordered\">\n\n      <thead>\n        <tr scope=\"row\">\n          <th>Name</th>\n          <th>Sets</th>\n          <th>Reps</th>\n          <th></th>\n        </tr>\n      </thead>\n\n      <!-- create row for each workout in the group -->\n      <tbody>\n        <tr scope=\"row\" *ngFor=\"let workout of group.workouts, let k = index\">\n          <td>{{ workout.name }}</td>\n          <td>{{ workout.sets }}</td>\n          <td>{{ workout.reps }}</td>\n          <td>\n            <div style=\"text-align : right\">\n              <a><i class=\"fa fa-pencil fa\" aria-hidden=\"true\" (click)=\"openUpdateWorkoutModal(workout, group, k, i)\"></i></a>\n              <a><i class=\"fa fa-trash-o fa\" aria-hidden=\"true\" (click)=\"removeWorkout(workout, group)\"></i></a>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n\n      <tfoot>\n        <tr scope=\"row\">\n          <td colspan=\"4\" *ngIf=\"group.type == 'Boulder'\"><a class=\"btn btn-secondary side-margin\" (click)=\"openBoulderModal(group)\">Create Boulder Workout</a></td>\n          <td colspan=\"4\" *ngIf=\"group.type == 'Sport'\"><a class=\"btn btn-secondary side-margin\" (click)=\"openSportModal(group)\">Create Sport Climbing Workout</a></td>\n        </tr>\n      </tfoot>\n\n    </table>\n\n  </div>\n\n  <!-- button to create a group for the session-->\n  <a class=\"btn btn-primary side-margin-bottom\" (click)=\"openGroupModal()\">Create Group</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_user_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(authService, modal, activeModal) {
        this.authService = authService;
        this.modal = modal;
        this.activeModal = activeModal;
        // array used for select element
        this.numArr = [];
        //calendar variables
        this.refresh = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.view = 'month';
        this.viewDate = new Date();
        this.events = [];
        //group variables
        this.groupId = '5a63e8a12de4125cf5ae2edf';
        this.groupName = 'Workout 1';
        this.groupType = 'Boulder';
        this.groups = [];
        this.groupTypeArr = [
            'Boulder',
            'Sport'
        ];
        this.boulderGradeArr = [
            'VB',
            'V0',
            'V1',
            'V2',
            'V3',
            'V4',
            'V5',
            'V6',
            'V7',
            'V8',
            'V9',
            'V10',
            'V11',
            'V12',
            'V13',
            'V14',
            'V15',
            'V16'
        ];
        this.sportGradeArr = [
            '5.10a',
            '5.10b',
            '5.10c',
            '5.10d',
            '5.11a',
            '5.11b',
            '5.11c',
            '5.11d',
            '5.12a',
            '5.12b',
            '5.12c',
            '5.12d',
            '5.13a',
            '5.13b',
            '5.13c',
            '5.13d',
            '5.14a',
            '5.14b',
            '5.14c',
            '5.14d',
            '5.15a',
            '5.15b',
            '5.15c'
        ];
        // fill the numArr
        for (var i = 0; i < 100; i++) {
            this.numArr.push(i);
        }
    }
    CalendarComponent.prototype.ngOnInit = function () {
        // set to today's date
        this.selectedDate = new Date();
        // get sessions for the current month/year
        if (this.authService.userExists()) {
            this.getSessions();
        }
    };
    // close the current modal
    CalendarComponent.prototype.onSubmit = function () {
        this.currentModal.close();
    };
    // open session modal to create a session
    CalendarComponent.prototype.openSessionModal = function () {
        this.currentModal = this.modal.open(this.sessionModal, { size: 'lg' });
    };
    // open the group modal to create a new group
    CalendarComponent.prototype.openGroupModal = function () {
        this.currentModal = this.modal.open(this.groupModal, { size: 'lg' });
    };
    // open the modal to update the session
    CalendarComponent.prototype.openUpdateSessionModal = function () {
        this.tempSessionName = this.sessionName;
        this.currentModal = this.modal.open(this.updateSessionModal, { size: 'lg' });
    };
    // open the boulder modal to create a new workout
    CalendarComponent.prototype.openBoulderModal = function (group) {
        this.currentGroup = group;
        this.currentModal = this.modal.open(this.boulderModal, { size: 'lg' });
    };
    // open the sports modal to create a new workout
    CalendarComponent.prototype.openSportModal = function (group) {
        this.currentGroup = group;
        this.currentModal = this.modal.open(this.sportModal, { size: 'lg' });
    };
    // open the workout modal to update the workout
    CalendarComponent.prototype.openUpdateWorkoutModal = function (workout, group, workoutIndex, groupIndex) {
        this.tempWorkoutID = workout._id;
        this.tempWorkoutName = workout.name;
        this.tempWorkoutSets = workout.sets;
        this.tempWorkoutReps = workout.reps;
        this.workoutIndex = workoutIndex;
        this.groupIndex = groupIndex;
        this.currentGroup = group;
        this.currentModal = this.modal.open(this.updateWorkoutModal, { size: 'lg' });
    };
    // remove the session
    CalendarComponent.prototype.removeSession = function () {
        var _this = this;
        this.authService.removeSession(this.sessionId).subscribe(function (data) {
            // clear the session
            _this.clearSession();
            // remove the event that ref the session
            _this.events = _this.events.filter(function (iEvent) { return iEvent !== _this.currentEvent; });
            _this.currentEvent = null;
            _this.activeDayIsOpen = false;
            _this.refresh.next();
        }, function (err) {
            console.log(err);
        });
    };
    // remove the group
    CalendarComponent.prototype.removeGroup = function (group) {
        var _this = this;
        this.authService.removeGroup(this.sessionId, group._id).subscribe(function (data) {
            // remove the group from the groups array
            _this.groups = _this.groups.filter(function (iGroups) { return iGroups !== group; });
        }, function (err) {
            console.log(err);
        });
    };
    // remove the workout
    CalendarComponent.prototype.removeWorkout = function (workout, group) {
        this.authService.removeWorkout(workout._id).subscribe(function (data) {
            // remove the workout from the group
            group.workouts = group.workouts.filter(function (iGroup) { return iGroup !== workout; });
        }, function (err) {
            console.log(err);
        });
    };
    // update the session
    CalendarComponent.prototype.updateSession = function () {
        var _this = this;
        this.authService.updateSession(this.sessionId, this.tempSessionName).subscribe(function (data) {
            _this.clearTempSession();
            _this.sessionName = data.name;
            _this.currentEvent.title = data.name;
            _this.refresh.next();
        }, function (err) {
            if (err.status == 401) {
                console.log('not authorized');
                _this.authService.signOut();
            }
        });
    };
    // update the workout
    CalendarComponent.prototype.updateWorkout = function () {
        var _this = this;
        this.authService.updateWorkout(this.tempWorkoutID, this.tempWorkoutName, this.tempWorkoutSets, this.tempWorkoutReps).subscribe(function (data) {
            _this.groups[_this.groupIndex].workouts[_this.workoutIndex].name = _this.tempWorkoutName;
            _this.groups[_this.groupIndex].workouts[_this.workoutIndex].sets = _this.tempWorkoutSets;
            _this.groups[_this.groupIndex].workouts[_this.workoutIndex].reps = _this.tempWorkoutReps;
        }, function (err) {
            console.log(err);
        });
    };
    // called when user changes months
    CalendarComponent.prototype.updateMonth = function () {
        // clear events and set activeDayIsOpen to false
        this.events = [];
        this.activeDayIsOpen = false;
        // get the sessions for the identified month/year
        this.getSessions();
    };
    // get groups using session id
    CalendarComponent.prototype.getGroupsBySessionId = function () {
        var _this = this;
        this.authService.getGroupsBySessionId(this.sessionId).subscribe(function (data) {
            _this.groups = data;
        });
    };
    // get sessions for the current month/year for the current user
    CalendarComponent.prototype.getSessions = function () {
        var _this = this;
        this.sessionsArr = null;
        // call auth service getSessions
        this.authService.getSessions(this.viewDate.getMonth(), this.viewDate.getFullYear()).subscribe(function (data) {
            // for each session retrieved, create an event that will be displayed on calendar
            if (data.length !== 0) {
                for (var session in data) {
                    _this.createEvent(data[session].name, data[session].date.day, data[session].date.month, data[session].date.year, data[session]._id);
                    _this.refresh.next();
                }
            }
        });
    };
    // create workout for the currentGroup
    CalendarComponent.prototype.createWorkout = function () {
        var _this = this;
        // call service createWorkout
        this.authService.createWorkout(this.currentGroup._id, this.tempWorkoutName, this.tempWorkoutSets, this.tempWorkoutReps).subscribe(function (data) {
            // add the workout that was returned to group workouts
            _this.clearTempWorkout();
            _this.currentGroup.workouts.push(data);
        }, function (err) {
            if (err.status == 401) {
                console.log('not authorized');
                _this.authService.signOut();
            }
        });
    };
    // create session for the selected date
    CalendarComponent.prototype.createSession = function () {
        var _this = this;
        this.authService.createSession(this.tempSessionName, this.selectedDate.getDate(), this.selectedDate.getMonth(), this.selectedDate.getFullYear()).subscribe(function (data) {
            // create an event from the session returned from the server
            _this.clearTempSession();
            _this.createEvent(data.name, data.date.day, data.date.month, data.date.year, data._id);
        }, function (err) {
            if (err.status == 401) {
                console.log('not authorized');
                _this.authService.signOut();
            }
        });
    };
    // create a group for the selected session
    CalendarComponent.prototype.createGroup = function () {
        var _this = this;
        this.authService.createGroup(this.sessionId, this.tempGroupName, this.tempGroupType).subscribe(function (data) {
            // add the group returned from the server to the groups array
            _this.clearTempGroup();
            _this.groups.push(data);
        }, function (err) {
            if (err.status == 401) {
                console.log('not authorized');
                _this.authService.signOut();
            }
        });
    };
    // display events to the user when they click on a calendar cell
    CalendarComponent.prototype.dayClicked = function (day) {
        // if the day clicked on and the viewdate are the same, determine if the events window will be open or closed
        if (Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameMonth"])(day.date, this.viewDate)) {
            // if the the day selected has the events window open or the day has no events, close the events window
            // else open the events window
            if ((Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameDay"])(this.viewDate, day.date) && this.activeDayIsOpen === true) || day.events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = day.date;
            }
            // set the selectedDate to the day that the user clicked
            this.selectedDate = day.date;
            this.dayOn = true;
        }
        // delete the cssclass from the selectedmonthviewday
        if (this.selectedMonthViewDay) {
            delete this.selectedMonthViewDay.cssClass;
        }
        // set the css class for the day clicked on
        day.cssClass = 'cal-day-selected';
        // set selectedMonthViewDay
        this.selectedMonthViewDay = day;
        // set selectedDate
        this.selectedDate = day.date;
        // clear the sessionid and sessionname
        this.clearSession();
        // empty groups
        this.groups = null;
    };
    // called when the month needs to be rendered
    CalendarComponent.prototype.beforeMonthViewRender = function (_a) {
        var _this = this;
        var body = _a.body;
        // set up the Calendar
        // for each cell, determine which cell needs to be highlighted for the user (determined when the user clicks on a calendar cell)
        body.forEach(function (day) {
            if (_this.dayOn && day.date.getTime() === _this.selectedDate.getTime()) {
                day.cssClass = 'cal-day-selected';
                _this.selectedMonthViewDay = day;
            }
            else {
                day.cssClass = null;
            }
        });
    };
    // set sessionid and sessionname using the event
    CalendarComponent.prototype.setSession = function (event) {
        this.sessionId = event.meta.id;
        this.sessionName = event.title;
    };
    // clear sessionid and sessionName
    CalendarComponent.prototype.clearSession = function () {
        this.sessionId = null;
        this.sessionName = null;
    };
    // clear temp session variables
    CalendarComponent.prototype.clearTempSession = function () {
        this.tempSessionName = null;
    };
    // clear temp group variables
    CalendarComponent.prototype.clearTempGroup = function () {
        this.tempGroupName = null;
        this.tempGroupType = null;
    };
    CalendarComponent.prototype.clearTempWorkout = function () {
        this.tempWorkoutName = null;
        this.tempWorkoutSets = null;
        this.tempWorkoutReps = null;
    };
    // create an event that will be displayed on the calendar
    // parameters coincide with the session variables
    CalendarComponent.prototype.createEvent = function (name, day, month, year, id) {
        var _this = this;
        this.events.push({
            title: name,
            start: Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfDay"])(new Date(year, month, day, 0, 0, 0, 0)),
            end: Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["endOfDay"])(new Date(year, month, day, 0, 0, 0, 0)),
            color: colors.red,
            meta: {
                id: id
            },
            actions: [
                {
                    label: '<i class="fa fa-fw fa-book"></i>',
                    onClick: function (_a) {
                        var event = _a.event;
                        _this.currentEvent = event;
                        _this.setSession(event);
                        _this.getGroupsBySessionId();
                    }
                },
                {
                    label: '<i class="fa fa-fw fa-trash-o"></i>',
                    onClick: function (_a) {
                        var event = _a.event;
                        _this.sessionId = event.meta.id;
                        _this.currentEvent = event;
                        _this.removeSession();
                        //this.events = this.events.filter(iEvent => iEvent !== event);
                        console.log('Event deleted', event);
                    }
                }
            ]
        });
        this.refresh.next();
    };
    /*
    Note: methods defined below will be used when the calendar is updated for week and day views
    */
    CalendarComponent.prototype.hourSegmentClicked = function (date) {
        this.selectedDayViewDate = date;
        this.addSelectedDayViewClass();
    };
    CalendarComponent.prototype.beforeDayViewRender = function (dayView) {
        this.dayView = dayView;
        this.addSelectedDayViewClass();
    };
    CalendarComponent.prototype.addSelectedDayViewClass = function () {
        var _this = this;
        this.dayView.forEach(function (hourSegment) {
            hourSegment.segments.forEach(function (segment) {
                delete segment.cssClass;
                if (_this.selectedDayViewDate &&
                    segment.date.getTime() === _this.selectedDayViewDate.getTime()) {
                    segment.cssClass = 'cal-day-selected';
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('sessionModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */])
    ], CalendarComponent.prototype, "sessionModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('groupModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */])
    ], CalendarComponent.prototype, "groupModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('boulderModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */])
    ], CalendarComponent.prototype, "boulderModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('sportModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */])
    ], CalendarComponent.prototype, "sportModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('updateSessionModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */])
    ], CalendarComponent.prototype, "updateSessionModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('updateWorkoutModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */])
    ], CalendarComponent.prototype, "updateWorkoutModal", void 0);
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-calendar',
            //changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewEncapsulation */].None,
            template: __webpack_require__("../../../../../src/app/components/calendar/calendar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/calendar/calendar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_user_auth_service__["a" /* UserAuthService */], __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".m-top {\n  margin-top: 60px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container m-top\">\n  <div class=\"jumbotron bg-transparent text-center\">\n    <h1 class=\"display-3\">Gym Logger</h1>\n    <p class=\"lead\">Track your workouts with Gym Logger!</p>\n    <hr class=\"my-4\">\n    <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login/Register</a> \n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_user_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_user_auth_service__["a" /* UserAuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg-transparent {\n  background-color: transparent;\n}\n\n:host {\n  height: 100%;\n}\n\n.photo {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.card {\n  width: 20rem;\n  margin: 0 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron bg-transparent text-center\">\n  <div *ngIf=\"!userAuthService.user\" class=\"card text-center\">\n    <h6 class=\"card-header\">\n      Log In\n    </h6>\n    <div class=\"card-block\">\n    </div>\n    <div class=\"card-block\">\n      <button class=\"btn btn-social-icon btn-google\" (click)=\"userAuthService.signInWithGoogle()\"><img [src]=\"googleSignInImg\"></button>\n      <!--<button class=\"btn btn-social-icon btn-facebook\" (click)=\"userAuthService.signInWithFB()\"><span class=\"fa fa-facebook fa-5x\"></span></button>-->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_user_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/user-auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(userAuthService) {
        this.userAuthService = userAuthService;
        this.googleSignInImg = '../../assets/btn_google_signin_light_normal_web.png';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userAuthService.startService();
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_user_auth_service__["a" /* UserAuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .m-top{\n    margin-top: 60px;\n  }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container m-top text-center\">\n  <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"signOut()\">Sign Out</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_user_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/user-auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authService, router, zone) {
        this.authService = authService;
        this.router = router;
        this.zone = zone;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.signOut = function () {
        this.authService.signOut();
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/components/logout/logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_user_auth_service__["a" /* UserAuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\">\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" >\n        <a class=\"nav-link\" *ngIf=\"!authService.loggedIn\"[routerLink]=\"['/']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" *ngIf=\"!authService.loggedIn\" [routerLink]=\"['/login']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Log In</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" *ngIf=\"authService.loggedIn\" [routerLink]=\"['/profile']\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\">Profile</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" *ngIf=\"authService.loggedIn\" [routerLink]=\"['/calendar']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Calendar</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" *ngIf=\"authService.loggedIn\" [routerLink]=\"['/logout']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Log Out</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_user_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/user-auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_user_auth_service__["a" /* UserAuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg-transparent {\n  background-color: transparent;\n}\n\n:host {\n  height: 100%;\n}\n\n.photo {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.card {\n  width: 20rem;\n  margin: 0 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron bg-transparent text-center\">\n    <div *ngIf=\"authService.serverUser\" class=\"card text-center\">\n      <h6 class=\"card-header\">\n        User Profile\n      </h6>\n      <div class=\"card-block\"></div>\n      <img class=\"card-img-top img-responsive photo\" src=\"{{ authService.user.photoUrl }}\">\n      <div class=\"card-block\">\n        <h4 class=\"card-title\">{{ authService.serverUser.email }}</h4>\n        <p class=\"card-text\">{{ authService.serverUser.firstName }} {{ authService.serverUser.lastName }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_user_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/user-auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_user_auth_service__["a" /* UserAuthService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_user_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/user-auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn) {
            return true;
        }
        else {
            //window.alert("Sign in to view this page.");
            //this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_user_auth_service__["a" /* UserAuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth/user-auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularx_social_login__ = __webpack_require__("../../../../angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserAuthService = /** @class */ (function () {
    function UserAuthService(authService, router, http) {
        this.authService = authService;
        this.router = router;
        this.http = http;
        this.loggedIn = false;
        this.createSessionURL = 'session/createSession';
        this.createGroupURL = 'session/createGroup';
        this.createWorkoutURL = 'session/createWorkout';
        this.getSessionURL = 'session/getSessionsByUserId';
        //getGroupsURL = 'session/getGroupsBySessionId';
        //getWorkoutsURL = 'session/getWorkoutsByGroupId';
        this.getGroupsBySessionURL = 'session/getGroupsBySessionId';
        this.getUserURL = 'auth/google/getUserByUserId';
        this.removeSessionURL = 'session/removeSession';
        this.removeWorkoutURL = 'session/removeWorkout';
        this.removeGroupURL = 'session/removeGroup';
        this.updateSessionURL = 'session/updateSession';
        this.updateWorkoutURL = 'session/updateWorkout';
    }
    UserAuthService.prototype.userExists = function () {
        if (this.user) {
            return true;
        }
        else {
            return false;
        }
        //console.log(this.serverUser);
    };
    // check if the user is authenticated to gain access
    UserAuthService.prototype.startService = function () {
        var _this = this;
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
            if (_this.user) {
                _this.loggedIn = true;
                localStorage.setItem('accessToken', user.authToken);
                _this.loadUser();
            }
        }, function (error) {
            console.log('error getting user');
            console.log(error);
        });
    };
    UserAuthService.prototype.loadUser = function () {
        var _this = this;
        this.getUser().subscribe(function (data) {
            if (data) {
                _this.serverUser = data[0];
                _this.router.navigate(['/calendar']);
            }
        }, function (err) {
            if (err.status == 401) {
                console.log('not authorized');
                _this.signOut();
            }
        });
    };
    UserAuthService.prototype.signInWithGoogle = function () {
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_1_angularx_social_login__["d" /* GoogleLoginProvider */].PROVIDER_ID);
    };
    //retrieve the user from the server
    UserAuthService.prototype.getUser = function () {
        return this.http.post(this.getUserURL, {
            'firstName': this.user.firstName,
            'lastName': this.user.lastName,
            'email': this.user.email,
            'provider': this.user.provider,
            'userId': this.user.id
        }, { headers: {
                'Content-Type': 'application/json',
                'Access_token': localStorage.getItem('accessToken')
            } });
    };
    // create session using day month year
    UserAuthService.prototype.createSession = function (name, day, month, year) {
        return this.http.post(this.createSessionURL, {
            '_id': this.serverUser._id,
            'name': name,
            'date': { 'day': day, 'month': month, 'year': year }
        }, { headers: {
                'Content-Type': 'application/json',
                'Access_token': localStorage.getItem('accessToken')
            } });
    };
    // create group
    UserAuthService.prototype.createGroup = function (sessionId, name, type) {
        return this.http.post(this.createGroupURL, {
            'id': sessionId,
            'name': name,
            'type': type
        }, { headers: {
                'Content-Type': 'application/json',
                'Access_token': localStorage.getItem('accessToken')
            } });
    };
    // create workout
    UserAuthService.prototype.createWorkout = function (groupId, name, sets, reps) {
        return this.http.post(this.createWorkoutURL, {
            'groupId': groupId,
            'type': 'Boulder',
            'name': name,
            'sets': sets,
            'reps': reps
        }, { headers: {
                'Content-Type': 'application/json',
                'Access_token': localStorage.getItem('accessToken')
            } });
    };
    // retrieve sessions
    UserAuthService.prototype.getSessions = function (month, year) {
        return this.http.get(this.getSessionURL, {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Access_token', localStorage.getItem('accessToken')),
            params: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpParams */]().set('id', this.serverUser._id.toString()).set('month', month.toString()).set('year', year.toString())
        });
    };
    // retrieve groups using session id
    UserAuthService.prototype.getGroupsBySessionId = function (sessionId) {
        return this.http.get(this.getGroupsBySessionURL, {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Access_token', localStorage.getItem('accessToken')),
            params: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpParams */]().set('id', sessionId)
        });
    };
    // updateSession
    UserAuthService.prototype.updateSession = function (id, name) {
        return this.http.post(this.updateSessionURL, {
            'updatedName': name,
            'id': id
        }, { headers: {
                'Content-Type': 'application/json',
                'Access_token': localStorage.getItem('accessToken')
            } });
    };
    // updateSession
    UserAuthService.prototype.removeSession = function (id) {
        return this.http.delete(this.removeSessionURL, {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Access_token', localStorage.getItem('accessToken')),
            params: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpParams */]().set('id', id)
        });
    };
    UserAuthService.prototype.removeGroup = function (sessionId, groupId) {
        return this.http.post(this.removeGroupURL, {
            'sessionId': sessionId,
            'groupId': groupId
        }, { headers: {
                'Content-Type': 'application/json',
                'Access_token': localStorage.getItem('accessToken')
            } });
    };
    // updateSession
    UserAuthService.prototype.removeWorkout = function (id) {
        return this.http.post(this.removeWorkoutURL, {
            'id': id
        }, { headers: {
                'Content-Type': 'application/json',
                'Access_token': localStorage.getItem('accessToken')
            } });
    };
    // updateSession
    UserAuthService.prototype.updateWorkout = function (id, name, sets, reps) {
        return this.http.post(this.updateWorkoutURL, {
            'id': id,
            'updatedName': name,
            'updatedSets': sets,
            'updatedReps': reps
        }, { headers: {
                'Content-Type': 'application/json',
                'Access_token': localStorage.getItem('accessToken')
            } });
    };
    // sign the user out
    UserAuthService.prototype.signOut = function () {
        var _this = this;
        this.authService.signOut().then(function () {
            console.log('signed out');
            localStorage.clear();
            _this.loggedIn = false;
            _this.serverUser = null;
            _this.user = null;
            _this.router.navigate(['/']);
        });
    };
    /*
    facebook sign in will be implemented at a later date
    */
    // sign in using facebook
    UserAuthService.prototype.signInWithFB = function () {
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_1_angularx_social_login__["c" /* FacebookLoginProvider */].PROVIDER_ID);
    };
    UserAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularx_social_login__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], UserAuthService);
    return UserAuthService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map