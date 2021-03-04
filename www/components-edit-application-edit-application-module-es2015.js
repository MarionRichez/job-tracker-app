(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-edit-application-edit-application-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-application/edit-application.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-application/edit-application.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Edit Application</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [routerLink]=\"['/home']\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <form [formGroup]=\"applicationForm\" (ngSubmit)=\"submit()\">\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label>Status</ion-label>\n        <ion-select\n          okText=\"Ok\"\n          cancelText=\"Cancel\"\n          formControlName=\"status\"\n          value=\"{{application.status}}\"\n        >\n          <ion-select-option value=\"Whishlist\">Whishlist</ion-select-option>\n          <ion-select-option value=\"Pending\">Pending</ion-select-option>\n          <ion-select-option value=\"Offer\">Offer</ion-select-option>\n          <ion-select-option value=\"Denied\">Denied</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <ion-item lines=\"full\">\n      <ion-label>Company</ion-label>\n      <ion-input\n        class=\"ion-text-right\"\n        type=\"text\"\n        formControlName=\"company\"\n        value=\"{{application.company}}\"\n      ></ion-input>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label>Position</ion-label>\n      <ion-input\n        class=\"ion-text-right\"\n        type=\"text\"\n        formControlName=\"position\"\n        value=\"{{application.position}}\"\n      ></ion-input>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label>Url</ion-label>\n      <ion-input\n        type=\"url\"\n        class=\"ion-text-right\"\n        formControlName=\"url\"\n        value=\"{{application.url}}\"\n      ></ion-input>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label>Date</ion-label>\n      <ion-datetime\n        class=\"ion-text-right\"\n        displayFormat=\"DD/MM/YYYY\"\n        formControlName=\"date\"\n        value=\"{{application.date}}\"\n      ></ion-datetime>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label position=\"stacked\">Notes</ion-label>\n      <ion-textarea\n        autoGrow=\"true\"\n        formControlName=\"notes\"\n        value=\"{{application.notes}}\"\n      ></ion-textarea>\n    </ion-item>\n    <ion-button\n      expand=\"block\"\n      type=\"submit\"\n      [disabled]=\"applicationForm.invalid\"\n      >Update</ion-button\n    >\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/components/edit-application/edit-application-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/edit-application/edit-application-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: EditApplicationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditApplicationPageRoutingModule", function() { return EditApplicationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_application_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-application.page */ "./src/app/components/edit-application/edit-application.page.ts");




const routes = [
    {
        path: '',
        component: _edit_application_page__WEBPACK_IMPORTED_MODULE_3__["EditApplicationPage"]
    }
];
let EditApplicationPageRoutingModule = class EditApplicationPageRoutingModule {
};
EditApplicationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditApplicationPageRoutingModule);



/***/ }),

/***/ "./src/app/components/edit-application/edit-application.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/edit-application/edit-application.module.ts ***!
  \************************************************************************/
/*! exports provided: EditApplicationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditApplicationPageModule", function() { return EditApplicationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_application_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-application-routing.module */ "./src/app/components/edit-application/edit-application-routing.module.ts");
/* harmony import */ var _edit_application_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-application.page */ "./src/app/components/edit-application/edit-application.page.ts");







let EditApplicationPageModule = class EditApplicationPageModule {
};
EditApplicationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_application_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditApplicationPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_edit_application_page__WEBPACK_IMPORTED_MODULE_6__["EditApplicationPage"]]
    })
], EditApplicationPageModule);



/***/ }),

/***/ "./src/app/components/edit-application/edit-application.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/edit-application/edit-application.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1hcHBsaWNhdGlvbi9lZGl0LWFwcGxpY2F0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/edit-application/edit-application.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/edit-application/edit-application.page.ts ***!
  \**********************************************************************/
/*! exports provided: EditApplicationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditApplicationPage", function() { return EditApplicationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_application_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/application-service.service */ "./src/app/service/application-service.service.ts");





let EditApplicationPage = class EditApplicationPage {
    constructor(actRoute, formBuilder, applicationService) {
        this.actRoute = actRoute;
        this.formBuilder = formBuilder;
        this.applicationService = applicationService;
        this.application = {};
        this.id = this.actRoute.snapshot.paramMap.get("id");
    }
    ngOnInit() {
        this.initForm();
        this.getApplication();
    }
    getApplication() {
        this.applicationService
            .getApplicationById(this.id)
            .subscribe(data => {
            this.application.status = data["status"];
            this.application.company = data["company"];
            this.application.position = data["position"];
            this.application.url = data["url"];
            this.application.date = data["date"];
            this.application.notes = data["notes"];
        });
    }
    initForm() {
        this.applicationForm = this.formBuilder.group({
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            position: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            notes: ['']
        });
    }
    submit() {
        if (!this.applicationForm.invalid) {
            this.applicationService.updateApplication(this.id, this.applicationForm.value);
        }
    }
};
EditApplicationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_application_service_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"] }
];
EditApplicationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-application',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-application.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-application/edit-application.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-application.page.scss */ "./src/app/components/edit-application/edit-application.page.scss")).default]
    })
], EditApplicationPage);



/***/ })

}]);
//# sourceMappingURL=components-edit-application-edit-application-module-es2015.js.map