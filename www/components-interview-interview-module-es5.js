(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-interview-interview-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/interview/interview.page.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/interview/interview.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsInterviewInterviewPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>{{interview.platform}} Interview</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button\r\n        [routerLink]=\"['/application/', applicationId]\"\r\n      ></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"addEvent()\">\r\n        <ion-icon name=\"calendar-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-item lines=\"none\">\r\n    <ion-label color=\"tertiary\">Recruiter</ion-label>\r\n    <p>{{interview.recruiter}}</p>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-label color=\"tertiary\">Platform</ion-label>\r\n    <p>{{interview.platform}}</p>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-label color=\"tertiary\">Date</ion-label>\r\n    <p>{{interview.date | date: 'MMM d, y'}}</p>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" color=\"tertiary\">Notes</ion-label>\r\n    <ion-textarea\r\n      autoGrow=\"true\"\r\n      readonly\r\n      value=\"{{interview.notes}}\"\r\n    ></ion-textarea>\r\n  </ion-item>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/components/interview/interview-routing.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/components/interview/interview-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: InterviewPageRoutingModule */

    /***/
    function srcAppComponentsInterviewInterviewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InterviewPageRoutingModule", function () {
        return InterviewPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _interview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./interview.page */
      "./src/app/components/interview/interview.page.ts");

      var routes = [{
        path: '',
        component: _interview_page__WEBPACK_IMPORTED_MODULE_3__["InterviewPage"]
      }];

      var InterviewPageRoutingModule = function InterviewPageRoutingModule() {
        _classCallCheck(this, InterviewPageRoutingModule);
      };

      InterviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InterviewPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/components/interview/interview.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/components/interview/interview.module.ts ***!
      \**********************************************************/

    /*! exports provided: InterviewPageModule */

    /***/
    function srcAppComponentsInterviewInterviewModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InterviewPageModule", function () {
        return InterviewPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _interview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./interview-routing.module */
      "./src/app/components/interview/interview-routing.module.ts");
      /* harmony import */


      var _interview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./interview.page */
      "./src/app/components/interview/interview.page.ts");

      var InterviewPageModule = function InterviewPageModule() {
        _classCallCheck(this, InterviewPageModule);
      };

      InterviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _interview_routing_module__WEBPACK_IMPORTED_MODULE_5__["InterviewPageRoutingModule"]],
        declarations: [_interview_page__WEBPACK_IMPORTED_MODULE_6__["InterviewPage"]]
      })], InterviewPageModule);
      /***/
    },

    /***/
    "./src/app/components/interview/interview.page.scss":
    /*!**********************************************************!*\
      !*** ./src/app/components/interview/interview.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsInterviewInterviewPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50ZXJ2aWV3L2ludGVydmlldy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/interview/interview.page.ts":
    /*!********************************************************!*\
      !*** ./src/app/components/interview/interview.page.ts ***!
      \********************************************************/

    /*! exports provided: InterviewPage */

    /***/
    function srcAppComponentsInterviewInterviewPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InterviewPage", function () {
        return InterviewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_service_calendar_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/service/calendar-service.service */
      "./src/app/service/calendar-service.service.ts");
      /* harmony import */


      var src_app_service_interview_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/interview-service.service */
      "./src/app/service/interview-service.service.ts");

      var InterviewPage = /*#__PURE__*/function () {
        function InterviewPage(actRoute, interviewService, calendar) {
          _classCallCheck(this, InterviewPage);

          this.actRoute = actRoute;
          this.interviewService = interviewService;
          this.calendar = calendar;
          this.interview = {};
          this.interviewId = this.actRoute.snapshot.paramMap.get("id1");
          this.applicationId = this.actRoute.snapshot.paramMap.get("id2");
        }

        _createClass(InterviewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getInterviewById();
          }
        }, {
          key: "getInterviewById",
          value: function getInterviewById() {
            var _this = this;

            this.interviewService.getInterviewsById(this.applicationId, this.interviewId).subscribe(function (data) {
              _this.interview.recruiter = data["recruiter"];
              _this.interview.platform = data["platform"];
              _this.interview.date = data["date"];
              _this.interview.notes = data["notes"];
            });
          }
        }, {
          key: "addEvent",
          value: function addEvent() {
            this.calendar.createCalendar("Entretien");
            this.calendar.createEvent("".concat(this.interview.recruiter, " interview"), "", this.interview.notes, new Date(this.interview.date), new Date(this.interview.date));
          }
        }]);

        return InterviewPage;
      }();

      InterviewPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_service_interview_service_service__WEBPACK_IMPORTED_MODULE_4__["InterviewService"]
        }, {
          type: src_app_service_calendar_service_service__WEBPACK_IMPORTED_MODULE_3__["CalendarService"]
        }];
      };

      InterviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-interview',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./interview.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/interview/interview.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./interview.page.scss */
        "./src/app/components/interview/interview.page.scss"))["default"]]
      })], InterviewPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-interview-interview-module-es5.js.map