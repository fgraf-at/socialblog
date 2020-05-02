(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['main'],
    {
        /***/ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html':
            /*!*********************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \*********************************************************************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '<app-header></app-header>\r\n<main>\r\n    <router-outlet></router-outlet>\r\n</main>\r\n';

                /***/
            },

        /***/ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/authentication/authentication.component.html':
            /*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/authentication/authentication.component.html ***!
  \***********************************************************************************************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '<div class="content-wrapper">\n  <video id="videoElement" width="100%" height="100%" autoplay loop>\n    <source src="./assets/video/background-video.mp4" type="video/mp4">\n  </video>\n  <router-outlet></router-outlet>\n</div>\n';

                /***/
            },

        /***/ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html':
            /*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html ***!
  \********************************************************************************************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '\r\n<app-form [formGroup]="formGroup"  (submitted)="onSubmit()">\r\n   <mat-card-title>Login Form</mat-card-title>\r\n    <app-input-form label="Email address"\r\n                    errorMessage="E-Mail is required"\r\n                    [control]="getEmail()"\r\n                    [placeholder]="getEmail().placeholder"\r\n    ></app-input-form>\r\n    <app-input-form label="Password"\r\n                    errorMessage="Password is required"\r\n                    type="password"\r\n                    [control]="getPassword()"\r\n                    [placeholder]="getPassword().placeholder"\r\n    ></app-input-form>\r\n    <app-form-actions [formGroup]="formGroup" accept="Login" reject="cancel"></app-form-actions>\r\n</app-form>\r\n';

                /***/
            },

        /***/ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/authentication/signup/signup.component.html':
            /*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/authentication/signup/signup.component.html ***!
  \**********************************************************************************************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '<app-form [formGroup]="formGroup"  (submitted)="onSubmit()">\r\n  <mat-card-title>SignUp Form</mat-card-title>\r\n  <app-input-form label="Email address"\r\n                  errorMessage="E-Mail is required"\r\n                  [control]="getEmail()"\r\n                  [placeholder]="getEmail().placeholder"\r\n  ></app-input-form>\r\n  <app-input-form label="Password"\r\n                  errorMessage="Password is required"\r\n                  type="password"\r\n                  [control]="getPassword()"\r\n                  [placeholder]="getPassword().placeholder"\r\n  ></app-input-form>\r\n  <app-form-actions [formGroup]="formGroup" accept="SignUp" reject="cancel"></app-form-actions>\r\n</app-form>\r\n';

                /***/
            },

        /***/ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/chat/chat-layout/chat-layout.component.html':
            /*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/chat/chat-layout/chat-layout.component.html ***!
  \*********************************************************************************************************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '<div\n  class="chat-wrapper"\n     style="height: 100%"\n     fxLayout="column"\n>\n   <div id="upperPanel">\n     <ng-content></ng-content>\n   </div>\n\n    <div id="bottomPanel">\n      <app-form\n                wide="true"\n                [formGroup]="formGroup"\n                (ngSubmit)="onSubmit()">\n\n        <app-input-form\n          id="chat"\n          title=""\n          label=""\n          [control]="this.getChatInput()"\n          [placeholder]="getChatInput().placeholder"\n        >\n        </app-input-form>\n      </app-form>\n    </div>\n\n</div>\n';

                /***/
            },

        /***/ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html':
            /*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html ***!
  \****************************************************************************************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '<h1 mat-dialog-title>\n  An Error occured!\n</h1>\n<div mat-dialog-content>\n  <p class="mat-body-1">{{data.message}}</p>\n</div>\n<div mat-dialog-actions\n     fxLayoutAlign="center center">\n  <button mat-button mat-dialog-close>Okay</button>\n</div>\n\n';

                /***/
            },

        /***/ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/form/form-actions/form-actions.component.html':
            /*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/form/form-actions/form-actions.component.html ***!
  \***********************************************************************************************************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '<mat-card-actions align="center" fxLayout="row" fxLayoutAlign="center center">\r\n  <button type="submit" mat-raised-button color="primary" [disabled]="formGroup.invalid">{{accept}}</button>\r\n  <button type="reset" mat-raised-button color="warn">{{reject}}</button>\r\n</mat-card-actions>\r\n';

                /***/
            },

        /***/ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/form/form-text-area/form-text-area.component.html':
            /*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/form/form-text-area/form-text-area.component.html ***!
  \***************************************************************************************************************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '<mat-card-content >\r\n  <mat-form-field class="form-element">\r\n    <mat-label>{{label}}</mat-label>\r\n    <textarea matInput\r\n              [minlength]="minLength"\r\n              [rows]="rows"\r\n              [placeholder]="placeholder"\r\n              [formControl]="control" >  </textarea>\r\n    <mat-error *ngIf="!control.valid && control.touched">\r\n      {{ errorMessage }}\r\n    </mat-error>\r\n\r\n  </mat-form-field>\r\n</mat-card-content>\r\n\r\n\r\n';

                /***/
            },

        /***/ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/form/form.component.html':
            /*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/form/form.component.html ***!
  \**************************************************************************************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '<form (submit)="onSubmit()" [formGroup]="formGroup" [ngClass]="!wide ? \'small\':\'wide\' ">\r\n  <mat-card\r\n    fxLayout="column"\r\n    fxLayoutGap="0px"\r\n    fxLayoutGap.gt-lg="50px"\r\n    fxLayoutGap.gt-md="20px"\r\n    fxLayoutGap.gt-sm="10px"\r\n    fxLayoutGap.xs="0px"\r\n\r\n  >\r\n    <ng-content></ng-content>\r\n\r\n  </mat-card>\r\n</form>\r\n';

                /***/
            },

        /***/ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/form/input-form/input-form.component.html':
            /*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/form/input-form/input-form.component.html ***!
  \*******************************************************************************************************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '<mat-card-content>\r\n  <mat-form-field class="form-element">\r\n    <mat-label >{{label}}</mat-label>\r\n    <input matInput\r\n           [type]="type"\r\n           [minlength]="minLength"\r\n           [placeholder]="placeholder"\r\n           [formControl]="control"\r\n    >\r\n    <mat-error *ngIf="!control.valid && control.touched">\r\n      {{ errorMessage }}\r\n    </mat-error>\r\n  </mat-form-field>\r\n</mat-card-content>\r\n\r\n';

                /***/
            },

        /***/ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html':
            /*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \********************************************************************************************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '<mat-sidenav-container>\n  <mat-sidenav\n    #sidenav\n    [mode]="isBiggerScreen() ? \'over\' : \'side\'"\n    [(opened)]="opened"\n    [fixedInViewport]="true"\n  >\n    <mat-nav-list>\n      <a mat-list-item href="#" [routerLink]="[\'/welcome\']">Welcome eee eee eee</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n';

                /***/
            },

        /***/ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html':
            /*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \*******************************************************************************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '<!-- Toolbar -->\r\n<div class="content-wrapper">\r\n  <mat-toolbar color="primary">\r\n    <div class="wrapper">\r\n      socialblog\r\n      <ul>\r\n        <li>\r\n          <a routerLink=""></a>\r\n          <a *ngIf="isAuthenticated" mat-button routerLink="/p/chat">Chat</a>\r\n          <a *ngIf="isAuthenticated" mat-button routerLink="/p/create"> New Post</a>\r\n          <a *ngIf="isAuthenticated" mat-button routerLink="/p/list"> Show Post</a>\r\n          <a *ngIf="!isAuthenticated" mat-button routerLink="/auth/login"> Login</a>\r\n          <a *ngIf="!isAuthenticated" mat-button routerLink="/auth/signUp">Sign Up</a>\r\n          <a (click)="onLogout()" *ngIf="isAuthenticated" mat-button>LogOut</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n  </mat-toolbar>\r\n</div>\r\n\r\n';

                /***/
            },

        /***/ './src/$$_lazy_route_resource lazy recursive':
            /*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                function webpackEmptyAsyncContext(req) {
                    // Here Promise.resolve().then() is used instead of new Promise() to prevent
                    // uncaught exception popping up in devtools
                    return Promise.resolve().then(function () {
                        var e = new Error("Cannot find module '" + req + "'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    });
                }
                webpackEmptyAsyncContext.keys = function () {
                    return [];
                };
                webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
                module.exports = webpackEmptyAsyncContext;
                webpackEmptyAsyncContext.id =
                    './src/$$_lazy_route_resource lazy recursive';

                /***/
            },

        /***/ './src/app/app-routing.module.ts':
            /*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
            /*! exports provided: AppRoutingModule */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'AppRoutingModule',
                    function () {
                        return AppRoutingModule;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
                );
                /* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./authentication/login/login.component */ './src/app/authentication/login/login.component.ts'
                );
                /* harmony import */ var _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./authentication/signup/signup.component */ './src/app/authentication/signup/signup.component.ts'
                );
                /* harmony import */ var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./authentication/authentication.component */ './src/app/authentication/authentication.component.ts'
                );
                /* harmony import */ var _authorization_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! ./authorization/guard/auth.guard */ './src/app/authorization/guard/auth.guard.ts'
                );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var routes = [
                    {
                        path: 'auth',
                        component:
                            _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_4__[
                                'AuthenticationComponent'
                            ],
                        children: [
                            {
                                path: 'login',
                                component:
                                    _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__[
                                        'LoginComponent'
                                    ],
                            },
                            {
                                path: 'signUp',
                                component:
                                    _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__[
                                        'SignupComponent'
                                    ],
                            },
                            { path: '**', redirectTo: 'login' },
                        ],
                    },
                    {
                        path: 'p',
                        canActivate: [
                            _authorization_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__[
                                'AuthGuard'
                            ],
                        ],
                        loadChildren: function () {
                            return __webpack_require__
                                .e(
                                    /*! import() | authorization-auth-module */ 'authorization-auth-module'
                                )
                                .then(
                                    __webpack_require__.bind(
                                        null,
                                        /*! ./authorization/auth.module */ './src/app/authorization/auth.module.ts'
                                    )
                                )
                                .then(function (m) {
                                    return m.AuthModule;
                                });
                        },
                    },
                    { path: '**', redirectTo: 'auth' },
                ];
                var AppRoutingModule = /** @class */ (function () {
                    function AppRoutingModule() {}
                    AppRoutingModule = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'NgModule'
                                ]
                            )({
                                imports: [
                                    _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                                        'RouterModule'
                                    ].forRoot(routes, {
                                        preloadingStrategy:
                                            _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                                                'PreloadAllModules'
                                            ],
                                    }),
                                ],
                                exports: [
                                    _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                                        'RouterModule'
                                    ],
                                ],
                            }),
                        ],
                        AppRoutingModule
                    );
                    return AppRoutingModule;
                })();

                /***/
            },

        /***/ './src/app/app.component.scss':
            /*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '* {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n}\n\n.content-wrapper {\n  max-width: 1280px;\n  margin: auto;\n  padding: 20px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGVudHdpY2tsdW5nXFxXZWJcXG1lYW5cXG1lYW4vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG5cclxufVxyXG5cclxuLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcclxufVxyXG5cclxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG59Il19 */';

                /***/
            },

        /***/ './src/app/app.component.ts':
            /*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
            /*! exports provided: AppComponent */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'AppComponent',
                    function () {
                        return AppComponent;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _authorization_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./authorization/auth.service */ './src/app/authorization/auth.service.ts'
                );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };
                var __metadata =
                    (undefined && undefined.__metadata) ||
                    function (k, v) {
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.metadata === 'function'
                        )
                            return Reflect.metadata(k, v);
                    };
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var AppComponent = /** @class */ (function () {
                    function AppComponent(authService) {
                        this.authService = authService;
                    }
                    AppComponent.prototype.ngOnInit = function () {
                        this.authService.autoAuthUser();
                    };
                    AppComponent.ctorParameters = function () {
                        return [
                            {
                                type:
                                    _authorization_auth_service__WEBPACK_IMPORTED_MODULE_1__[
                                        'AuthService'
                                    ],
                            },
                        ];
                    };
                    AppComponent = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Component'
                                ]
                            )({
                                selector: 'app-root',
                                template: __importDefault(
                                    __webpack_require__(
                                        /*! raw-loader!./app.component.html */ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html'
                                    )
                                ).default,
                                encapsulation:
                                    _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                        'ViewEncapsulation'
                                    ].None,
                                styles: [
                                    __importDefault(
                                        __webpack_require__(
                                            /*! ./app.component.scss */ './src/app/app.component.scss'
                                        )
                                    ).default,
                                ],
                            }),
                            __metadata('design:paramtypes', [
                                _authorization_auth_service__WEBPACK_IMPORTED_MODULE_1__[
                                    'AuthService'
                                ],
                            ]),
                        ],
                        AppComponent
                    );
                    return AppComponent;
                })();

                /***/
            },

        /***/ './src/app/app.module.ts':
            /*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
            /*! exports provided: AppModule */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'AppModule',
                    function () {
                        return AppModule;
                    }
                );
                /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/platform-browser */ './node_modules/@angular/platform-browser/fesm5/platform-browser.js'
                );
                /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! @angular/platform-browser/animations */ './node_modules/@angular/platform-browser/fesm5/animations.js'
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./app.component */ './src/app/app.component.ts'
                );
                /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./header/header.component */ './src/app/header/header.component.ts'
                );
                /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
                );
                /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
                );
                /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    /*! ./app-routing.module */ './src/app/app-routing.module.ts'
                );
                /* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                    /*! ./authentication/login/login.component */ './src/app/authentication/login/login.component.ts'
                );
                /* harmony import */ var _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
                    /*! ./authentication/signup/signup.component */ './src/app/authentication/signup/signup.component.ts'
                );
                /* harmony import */ var _public_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
                    /*! ./public/material.module */ './src/app/public/material.module.ts'
                );
                /* harmony import */ var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
                    /*! ./authentication/authentication.component */ './src/app/authentication/authentication.component.ts'
                );
                /* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
                    /*! ./error-interceptor */ './src/app/error-interceptor.ts'
                );
                /* harmony import */ var _authorization_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
                    /*! ./authorization/auth-interceptor */ './src/app/authorization/auth-interceptor.ts'
                );
                /* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
                    /*! ./components/error/error.component */ './src/app/components/error/error.component.ts'
                );
                /* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
                    /*! ./components/components.module */ './src/app/components/components.module.ts'
                );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var AppModule = /** @class */ (function () {
                    function AppModule() {}
                    AppModule = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_2__[
                                    'NgModule'
                                ]
                            )({
                                declarations: [
                                    _app_component__WEBPACK_IMPORTED_MODULE_3__[
                                        'AppComponent'
                                    ],
                                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__[
                                        'HeaderComponent'
                                    ],
                                    _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_8__[
                                        'LoginComponent'
                                    ],
                                    _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__[
                                        'SignupComponent'
                                    ],
                                    _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_11__[
                                        'AuthenticationComponent'
                                    ],
                                    _components_error_error_component__WEBPACK_IMPORTED_MODULE_14__[
                                        'ErrorComponent'
                                    ],
                                ],
                                imports: [
                                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                                        'BrowserModule'
                                    ],
                                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__[
                                        'BrowserAnimationsModule'
                                    ],
                                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__[
                                        'HttpClientModule'
                                    ],
                                    _angular_router__WEBPACK_IMPORTED_MODULE_6__[
                                        'RouterModule'
                                    ],
                                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__[
                                        'AppRoutingModule'
                                    ],
                                    _public_material_module__WEBPACK_IMPORTED_MODULE_10__[
                                        'MaterialModule'
                                    ],
                                    _components_components_module__WEBPACK_IMPORTED_MODULE_15__[
                                        'ComponentsModule'
                                    ],
                                ],
                                providers: [
                                    {
                                        provide:
                                            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__[
                                                'HTTP_INTERCEPTORS'
                                            ],
                                        useClass:
                                            _authorization_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__[
                                                'AuthInterceptor'
                                            ],
                                        multi: true,
                                    },
                                    {
                                        provide:
                                            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__[
                                                'HTTP_INTERCEPTORS'
                                            ],
                                        useClass:
                                            _error_interceptor__WEBPACK_IMPORTED_MODULE_12__[
                                                'ErrorInterceptor'
                                            ],
                                        multi: true,
                                    },
                                ],
                                bootstrap: [
                                    _app_component__WEBPACK_IMPORTED_MODULE_3__[
                                        'AppComponent'
                                    ],
                                ],
                                entryComponents: [
                                    _components_error_error_component__WEBPACK_IMPORTED_MODULE_14__[
                                        'ErrorComponent'
                                    ],
                                ],
                            }),
                        ],
                        AppModule
                    );
                    return AppModule;
                })();

                /***/
            },

        /***/ './src/app/authentication/authentication.component.scss':
            /*!**************************************************************!*\
  !*** ./src/app/authentication/authentication.component.scss ***!
  \**************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '.content-wrapper {\n  width: 80%;\n  margin: auto;\n}\n.content-wrapper form {\n  opacity: 0.95;\n}\n.content-wrapper #videoElement {\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  box-sizing: content-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vQzpcXGVudHdpY2tsdW5nXFxXZWJcXG1lYW5cXG1lYW4vc3JjXFxhcHBcXGF1dGhlbnRpY2F0aW9uXFxhdXRoZW50aWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0FDRUo7QURBRTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtd3JhcHBlcntcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmb3Jte1xyXG4gICAgb3BhY2l0eTogMC45NTtcclxuICB9XHJcbiAgI3ZpZGVvRWxlbWVudCB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICB9XHJcblxyXG59XHJcbiIsIi5jb250ZW50LXdyYXBwZXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG59XG4uY29udGVudC13cmFwcGVyIGZvcm0ge1xuICBvcGFjaXR5OiAwLjk1O1xufVxuLmNvbnRlbnQtd3JhcHBlciAjdmlkZW9FbGVtZW50IHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufSJdfQ== */';

                /***/
            },

        /***/ './src/app/authentication/authentication.component.ts':
            /*!************************************************************!*\
  !*** ./src/app/authentication/authentication.component.ts ***!
  \************************************************************/
            /*! exports provided: AuthenticationComponent */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'AuthenticationComponent',
                    function () {
                        return AuthenticationComponent;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };
                var __metadata =
                    (undefined && undefined.__metadata) ||
                    function (k, v) {
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.metadata === 'function'
                        )
                            return Reflect.metadata(k, v);
                    };
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var AuthenticationComponent = /** @class */ (function () {
                    function AuthenticationComponent() {}
                    AuthenticationComponent.prototype.ngOnInit = function () {};
                    AuthenticationComponent = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Component'
                                ]
                            )({
                                selector: 'app-authentication',
                                template: __importDefault(
                                    __webpack_require__(
                                        /*! raw-loader!./authentication.component.html */ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/authentication/authentication.component.html'
                                    )
                                ).default,
                                styles: [
                                    __importDefault(
                                        __webpack_require__(
                                            /*! ./authentication.component.scss */ './src/app/authentication/authentication.component.scss'
                                        )
                                    ).default,
                                ],
                            }),
                            __metadata('design:paramtypes', []),
                        ],
                        AuthenticationComponent
                    );
                    return AuthenticationComponent;
                })();

                /***/
            },

        /***/ './src/app/authentication/login/login.component.scss':
            /*!***********************************************************!*\
  !*** ./src/app/authentication/login/login.component.scss ***!
  \***********************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */';

                /***/
            },

        /***/ './src/app/authentication/login/login.component.ts':
            /*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
            /*! exports provided: LoginComponent */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'LoginComponent',
                    function () {
                        return LoginComponent;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _model_ExtendedFormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../../model/ExtendedFormControl */ './src/app/model/ExtendedFormControl.ts'
                );
                /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js'
                );
                /* harmony import */ var _authorization_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ../../authorization/auth.service */ './src/app/authorization/auth.service.ts'
                );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };
                var __metadata =
                    (undefined && undefined.__metadata) ||
                    function (k, v) {
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.metadata === 'function'
                        )
                            return Reflect.metadata(k, v);
                    };
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var LoginComponent = /** @class */ (function () {
                    function LoginComponent(formBuilder, authService) {
                        this.formBuilder = formBuilder;
                        this.authService = authService;
                    }
                    LoginComponent.prototype.ngOnInit = function () {
                        this.authService.clearAuthData();
                        this.formGroup = this.formBuilder.group({
                            email: new _model_ExtendedFormControl__WEBPACK_IMPORTED_MODULE_1__[
                                'ExtendedFormControl'
                            ]('', 'E-Mail', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__[
                                    'Validators'
                                ].required,
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__[
                                    'Validators'
                                ].email,
                            ]),
                            password: new _model_ExtendedFormControl__WEBPACK_IMPORTED_MODULE_1__[
                                'ExtendedFormControl'
                            ]('', 'Password', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__[
                                    'Validators'
                                ].required,
                            ]),
                        });
                    };
                    LoginComponent.prototype.getEmail = function () {
                        return this.formGroup.get('email');
                    };
                    LoginComponent.prototype.getPassword = function () {
                        return this.formGroup.get('password');
                    };
                    LoginComponent.prototype.onSubmit = function () {
                        this.authService.login(
                            this.getEmail().value,
                            this.getPassword().value
                        );
                    };
                    LoginComponent.ctorParameters = function () {
                        return [
                            {
                                type:
                                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__[
                                        'FormBuilder'
                                    ],
                            },
                            {
                                type:
                                    _authorization_auth_service__WEBPACK_IMPORTED_MODULE_3__[
                                        'AuthService'
                                    ],
                            },
                        ];
                    };
                    LoginComponent = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Component'
                                ]
                            )({
                                selector: 'app-login',
                                template: __importDefault(
                                    __webpack_require__(
                                        /*! raw-loader!./login.component.html */ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html'
                                    )
                                ).default,
                                styles: [
                                    __importDefault(
                                        __webpack_require__(
                                            /*! ./login.component.scss */ './src/app/authentication/login/login.component.scss'
                                        )
                                    ).default,
                                ],
                            }),
                            __metadata('design:paramtypes', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__[
                                    'FormBuilder'
                                ],
                                _authorization_auth_service__WEBPACK_IMPORTED_MODULE_3__[
                                    'AuthService'
                                ],
                            ]),
                        ],
                        LoginComponent
                    );
                    return LoginComponent;
                })();

                /***/
            },

        /***/ './src/app/authentication/signup/signup.component.scss':
            /*!*************************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.scss ***!
  \*************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */';

                /***/
            },

        /***/ './src/app/authentication/signup/signup.component.ts':
            /*!***********************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.ts ***!
  \***********************************************************/
            /*! exports provided: SignupComponent */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'SignupComponent',
                    function () {
                        return SignupComponent;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _model_ExtendedFormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../../model/ExtendedFormControl */ './src/app/model/ExtendedFormControl.ts'
                );
                /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js'
                );
                /* harmony import */ var _authorization_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ../../authorization/auth.service */ './src/app/authorization/auth.service.ts'
                );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };
                var __metadata =
                    (undefined && undefined.__metadata) ||
                    function (k, v) {
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.metadata === 'function'
                        )
                            return Reflect.metadata(k, v);
                    };
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var SignupComponent = /** @class */ (function () {
                    function SignupComponent(formBuilder, authService) {
                        this.formBuilder = formBuilder;
                        this.authService = authService;
                    }
                    SignupComponent.prototype.ngOnInit = function () {
                        this.authService.clearAuthData();
                        this.formGroup = this.formBuilder.group({
                            email: new _model_ExtendedFormControl__WEBPACK_IMPORTED_MODULE_1__[
                                'ExtendedFormControl'
                            ]('', 'E-Mail', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__[
                                    'Validators'
                                ].required,
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__[
                                    'Validators'
                                ].email,
                            ]),
                            password: new _model_ExtendedFormControl__WEBPACK_IMPORTED_MODULE_1__[
                                'ExtendedFormControl'
                            ]('', 'Password', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__[
                                    'Validators'
                                ].required,
                            ]),
                        });
                    };
                    SignupComponent.prototype.getEmail = function () {
                        return this.formGroup.get('email');
                    };
                    SignupComponent.prototype.getPassword = function () {
                        return this.formGroup.get('password');
                    };
                    SignupComponent.prototype.onSubmit = function () {
                        this.authService.createUser(
                            this.getEmail().value,
                            this.getPassword().value
                        );
                    };
                    SignupComponent.ctorParameters = function () {
                        return [
                            {
                                type:
                                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__[
                                        'FormBuilder'
                                    ],
                            },
                            {
                                type:
                                    _authorization_auth_service__WEBPACK_IMPORTED_MODULE_3__[
                                        'AuthService'
                                    ],
                            },
                        ];
                    };
                    SignupComponent = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Component'
                                ]
                            )({
                                selector: 'app-signup',
                                template: __importDefault(
                                    __webpack_require__(
                                        /*! raw-loader!./signup.component.html */ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/authentication/signup/signup.component.html'
                                    )
                                ).default,
                                styles: [
                                    __importDefault(
                                        __webpack_require__(
                                            /*! ./signup.component.scss */ './src/app/authentication/signup/signup.component.scss'
                                        )
                                    ).default,
                                ],
                            }),
                            __metadata('design:paramtypes', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__[
                                    'FormBuilder'
                                ],
                                _authorization_auth_service__WEBPACK_IMPORTED_MODULE_3__[
                                    'AuthService'
                                ],
                            ]),
                        ],
                        SignupComponent
                    );
                    return SignupComponent;
                })();

                /***/
            },

        /***/ './src/app/authorization/auth-interceptor.ts':
            /*!***************************************************!*\
  !*** ./src/app/authorization/auth-interceptor.ts ***!
  \***************************************************/
            /*! exports provided: AuthInterceptor */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'AuthInterceptor',
                    function () {
                        return AuthInterceptor;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./auth.service */ './src/app/authorization/auth.service.ts'
                );
                /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
                );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };
                var __metadata =
                    (undefined && undefined.__metadata) ||
                    function (k, v) {
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.metadata === 'function'
                        )
                            return Reflect.metadata(k, v);
                    };
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var AuthInterceptor = /** @class */ (function () {
                    function AuthInterceptor(authService) {
                        this.authService = authService;
                    }
                    AuthInterceptor.prototype.intercept = function (req, next) {
                        return this.authService.getAuthStatusListener().pipe(
                            Object(
                                rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[
                                    'take'
                                ]
                            )(1),
                            Object(
                                rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[
                                    'mergeMap'
                                ]
                            )(function (auth) {
                                if (!auth) {
                                    return next.handle(req);
                                }
                                var modRequest = req.clone({
                                    headers: req.headers.set(
                                        'authorization',
                                        'Bearer ' + auth.token
                                    ),
                                });
                                return next.handle(modRequest);
                            })
                        );
                    };
                    AuthInterceptor.ctorParameters = function () {
                        return [
                            {
                                type:
                                    _auth_service__WEBPACK_IMPORTED_MODULE_1__[
                                        'AuthService'
                                    ],
                            },
                        ];
                    };
                    AuthInterceptor = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Injectable'
                                ]
                            )(),
                            __metadata('design:paramtypes', [
                                _auth_service__WEBPACK_IMPORTED_MODULE_1__[
                                    'AuthService'
                                ],
                            ]),
                        ],
                        AuthInterceptor
                    );
                    return AuthInterceptor;
                })();

                /***/
            },

        /***/ './src/app/authorization/auth.model.ts':
            /*!*********************************************!*\
  !*** ./src/app/authorization/auth.model.ts ***!
  \*********************************************/
            /*! exports provided: AuthModel */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'AuthModel',
                    function () {
                        return AuthModel;
                    }
                );
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };
                var AuthModel = /** @class */ (function () {
                    function AuthModel(_id, token) {
                        this._id = _id;
                        this.token = token;
                    }
                    return AuthModel;
                })();

                /***/
            },

        /***/ './src/app/authorization/auth.service.ts':
            /*!***********************************************!*\
  !*** ./src/app/authorization/auth.service.ts ***!
  \***********************************************/
            /*! exports provided: AuthService */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'AuthService',
                    function () {
                        return AuthService;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
                );
                /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
                );
                /* harmony import */ var _auth_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./auth.model */ './src/app/authorization/auth.model.ts'
                );
                /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
                );
                /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
                );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };
                var __metadata =
                    (undefined && undefined.__metadata) ||
                    function (k, v) {
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.metadata === 'function'
                        )
                            return Reflect.metadata(k, v);
                    };
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var AuthService = /** @class */ (function () {
                    function AuthService(http, router, route) {
                        this.http = http;
                        this.router = router;
                        this.route = route;
                        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__[
                            'BehaviorSubject'
                        ](null);
                    }
                    AuthService.prototype.getAuthStatusListener = function () {
                        return this.authStatusListener;
                    };
                    AuthService.prototype.createUser = function (
                        email,
                        password
                    ) {
                        var _this = this;
                        var authData = { email: email, password: password };
                        return this.http
                            .post(
                                'http://localhost:3000/api/user/signup',
                                authData
                            )
                            .pipe(
                                Object(
                                    rxjs_operators__WEBPACK_IMPORTED_MODULE_4__[
                                        'tap'
                                    ]
                                )(function (resData) {
                                    _this.handleAuthentication(
                                        resData._id,
                                        resData.token
                                    );
                                })
                            )
                            .subscribe(
                                function (value) {
                                    _this.redirectToBlog();
                                },
                                function (error) {
                                    console.error('test');
                                    console.error(error);
                                }
                            );
                    };
                    AuthService.prototype.login = function (email, password) {
                        var _this = this;
                        var authData = { email: email, password: password };
                        this.http
                            .post(
                                'http://localhost:3000/api/user/login',
                                authData
                            )
                            .pipe(
                                Object(
                                    rxjs_operators__WEBPACK_IMPORTED_MODULE_4__[
                                        'tap'
                                    ]
                                )(function (resData) {
                                    _this.handleAuthentication(
                                        resData.id,
                                        resData.token
                                    );
                                })
                            )
                            .subscribe(
                                function (value) {
                                    _this.redirectToBlog();
                                },
                                function (error) {
                                    console.error(error);
                                }
                            );
                    };
                    AuthService.prototype.logOut = function () {
                        this.authStatusListener.next(null);
                        this.clearAuthData();
                        this.router.navigate(['/login']);
                    };
                    AuthService.prototype.clearAuthData = function () {
                        sessionStorage.removeItem('token');
                        sessionStorage.removeItem('id');
                        this.authStatusListener.next(null);
                    };
                    AuthService.prototype.autoAuthUser = function () {
                        var authData = this.getAuthData();
                        if (authData) {
                            if (authData.token && authData._id) {
                                this.authStatusListener.next(authData);
                            }
                        }
                    };
                    AuthService.prototype.handleAuthentication = function (
                        _id,
                        token
                    ) {
                        var auth = new _auth_model__WEBPACK_IMPORTED_MODULE_3__[
                            'AuthModel'
                        ](_id, token);
                        this.saveAuthData(_id, token);
                        this.authStatusListener.next(auth);
                    };
                    AuthService.prototype.saveAuthData = function (id, token) {
                        sessionStorage.setItem('token', token);
                        sessionStorage.setItem('id', id);
                    };
                    AuthService.prototype.getAuthData = function () {
                        var token = sessionStorage.getItem('token');
                        var id = sessionStorage.getItem('id');
                        if (token && id) {
                            return new _auth_model__WEBPACK_IMPORTED_MODULE_3__[
                                'AuthModel'
                            ](id, token);
                        } else {
                            return null;
                        }
                    };
                    AuthService.prototype.redirectToBlog = function () {
                        this.router.navigate(['../p/list'], {
                            relativeTo: this.route,
                        });
                    };
                    AuthService.ctorParameters = function () {
                        return [
                            {
                                type:
                                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[
                                        'HttpClient'
                                    ],
                            },
                            {
                                type:
                                    _angular_router__WEBPACK_IMPORTED_MODULE_5__[
                                        'Router'
                                    ],
                            },
                            {
                                type:
                                    _angular_router__WEBPACK_IMPORTED_MODULE_5__[
                                        'ActivatedRoute'
                                    ],
                            },
                        ];
                    };
                    AuthService = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Injectable'
                                ]
                            )({
                                providedIn: 'root',
                            }),
                            __metadata('design:paramtypes', [
                                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[
                                    'HttpClient'
                                ],
                                _angular_router__WEBPACK_IMPORTED_MODULE_5__[
                                    'Router'
                                ],
                                _angular_router__WEBPACK_IMPORTED_MODULE_5__[
                                    'ActivatedRoute'
                                ],
                            ]),
                        ],
                        AuthService
                    );
                    return AuthService;
                })();

                /***/
            },

        /***/ './src/app/authorization/guard/auth.guard.ts':
            /*!***************************************************!*\
  !*** ./src/app/authorization/guard/auth.guard.ts ***!
  \***************************************************/
            /*! exports provided: AuthGuard */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'AuthGuard',
                    function () {
                        return AuthGuard;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
                );
                /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ../auth.service */ './src/app/authorization/auth.service.ts'
                );
                /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
                );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };
                var __metadata =
                    (undefined && undefined.__metadata) ||
                    function (k, v) {
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.metadata === 'function'
                        )
                            return Reflect.metadata(k, v);
                    };
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var AuthGuard = /** @class */ (function () {
                    function AuthGuard(authService, router) {
                        this.authService = authService;
                        this.router = router;
                    }
                    AuthGuard.prototype.canActivate = function (next, state) {
                        var _this = this;
                        return this.authService.getAuthStatusListener().pipe(
                            Object(
                                rxjs_operators__WEBPACK_IMPORTED_MODULE_3__[
                                    'take'
                                ]
                            )(1),
                            Object(
                                rxjs_operators__WEBPACK_IMPORTED_MODULE_3__[
                                    'map'
                                ]
                            )(function (value) {
                                if (value) {
                                    return true;
                                } else {
                                    return _this.router.createUrlTree(['/']);
                                }
                            })
                        );
                    };
                    AuthGuard.ctorParameters = function () {
                        return [
                            {
                                type:
                                    _auth_service__WEBPACK_IMPORTED_MODULE_2__[
                                        'AuthService'
                                    ],
                            },
                            {
                                type:
                                    _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                                        'Router'
                                    ],
                            },
                        ];
                    };
                    AuthGuard = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Injectable'
                                ]
                            )({
                                providedIn: 'root',
                            }),
                            __metadata('design:paramtypes', [
                                _auth_service__WEBPACK_IMPORTED_MODULE_2__[
                                    'AuthService'
                                ],
                                _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                                    'Router'
                                ],
                            ]),
                        ],
                        AuthGuard
                    );
                    return AuthGuard;
                })();

                /***/
            },

        /***/ './src/app/components/chat/chat-layout/chat-layout.component.scss':
            /*!************************************************************************!*\
  !*** ./src/app/components/chat/chat-layout/chat-layout.component.scss ***!
  \************************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '.chat-wrapper {\n  position: relative;\n}\n.chat-wrapper #upperPanel {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 100px;\n  overflow: auto;\n  padding: 30px 60px;\n}\n.chat-wrapper #bottomPanel {\n  height: 100px;\n  background: #EEE;\n  position: absolute;\n  bottom: 37px;\n  left: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQtbGF5b3V0L0M6XFxlbnR3aWNrbHVuZ1xcV2ViXFxtZWFuXFxtZWFuL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjaGF0XFxjaGF0LWxheW91dFxcY2hhdC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9jaGF0LWxheW91dC9jaGF0LWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0FDQUY7QURFRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FKO0FER0U7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQtbGF5b3V0L2NoYXQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jaGF0LXdyYXBwZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAjdXBwZXJQYW5lbHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIGJvdHRvbToxMDBweDtcclxuICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICBwYWRkaW5nOiAzMHB4IDYwcHg7XHJcblxyXG4gIH1cclxuICAjYm90dG9tUGFuZWx7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZDojRUVFO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBib3R0b206IDM3cHg7XHJcbiAgICBsZWZ0OjBweDtcclxuICAgIHJpZ2h0OjBweDtcclxuICB9XHJcbn1cclxuIiwiLmNoYXQtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jaGF0LXdyYXBwZXIgI3VwcGVyUGFuZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMTAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAzMHB4IDYwcHg7XG59XG4uY2hhdC13cmFwcGVyICNib3R0b21QYW5lbCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICNFRUU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzN3B4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59Il19 */';

                /***/
            },

        /***/ './src/app/components/chat/chat-layout/chat-layout.component.ts':
            /*!**********************************************************************!*\
  !*** ./src/app/components/chat/chat-layout/chat-layout.component.ts ***!
  \**********************************************************************/
            /*! exports provided: ChatLayoutComponent */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'ChatLayoutComponent',
                    function () {
                        return ChatLayoutComponent;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js'
                );
                /* harmony import */ var _model_ExtendedFormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ../../../model/ExtendedFormControl */ './src/app/model/ExtendedFormControl.ts'
                );
                /* harmony import */ var _public_services_socketio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ../../../public/services/socketio.service */ './src/app/public/services/socketio.service.ts'
                );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };
                var __metadata =
                    (undefined && undefined.__metadata) ||
                    function (k, v) {
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.metadata === 'function'
                        )
                            return Reflect.metadata(k, v);
                    };
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var ChatLayoutComponent = /** @class */ (function () {
                    function ChatLayoutComponent(socketioService) {
                        this.socketioService = socketioService;
                        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                            'EventEmitter'
                        ]();
                    }
                    ChatLayoutComponent.prototype.ngOnInit = function () {
                        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                            'FormGroup'
                        ]({
                            chatInput: new _model_ExtendedFormControl__WEBPACK_IMPORTED_MODULE_2__[
                                'ExtendedFormControl'
                            ](null, 'Message...'),
                        });
                    };
                    ChatLayoutComponent.prototype.getChatInput = function () {
                        return this.formGroup.get('chatInput');
                    };
                    ChatLayoutComponent.prototype.onSubmit = function () {
                        this.submitted.emit(this.getChatInput().value);
                    };
                    ChatLayoutComponent.ctorParameters = function () {
                        return [
                            {
                                type:
                                    _public_services_socketio_service__WEBPACK_IMPORTED_MODULE_3__[
                                        'SocketioService'
                                    ],
                            },
                        ];
                    };
                    __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Output'
                                ]
                            )(),
                            __metadata('design:type', Object),
                        ],
                        ChatLayoutComponent.prototype,
                        'submitted',
                        void 0
                    );
                    ChatLayoutComponent = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Component'
                                ]
                            )({
                                selector: 'app-chat-layout',
                                template: __importDefault(
                                    __webpack_require__(
                                        /*! raw-loader!./chat-layout.component.html */ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/chat/chat-layout/chat-layout.component.html'
                                    )
                                ).default,
                                styles: [
                                    __importDefault(
                                        __webpack_require__(
                                            /*! ./chat-layout.component.scss */ './src/app/components/chat/chat-layout/chat-layout.component.scss'
                                        )
                                    ).default,
                                ],
                            }),
                            __metadata('design:paramtypes', [
                                _public_services_socketio_service__WEBPACK_IMPORTED_MODULE_3__[
                                    'SocketioService'
                                ],
                            ]),
                        ],
                        ChatLayoutComponent
                    );
                    return ChatLayoutComponent;
                })();

                /***/
            },

        /***/ './src/app/components/components.module.ts':
            /*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
            /*! exports provided: ComponentsModule */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'ComponentsModule',
                    function () {
                        return ComponentsModule;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _chat_chat_layout_chat_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./chat/chat-layout/chat-layout.component */ './src/app/components/chat/chat-layout/chat-layout.component.ts'
                );
                /* harmony import */ var _form_input_form_input_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./form/input-form/input-form.component */ './src/app/components/form/input-form/input-form.component.ts'
                );
                /* harmony import */ var _form_form_actions_form_actions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./form/form-actions/form-actions.component */ './src/app/components/form/form-actions/form-actions.component.ts'
                );
                /* harmony import */ var _form_form_text_area_form_text_area_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./form/form-text-area/form-text-area.component */ './src/app/components/form/form-text-area/form-text-area.component.ts'
                );
                /* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! ./form/form.component */ './src/app/components/form/form.component.ts'
                );
                /* harmony import */ var _public_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! ../public/material.module */ './src/app/public/material.module.ts'
                );
                /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    /*! @angular/common */ './node_modules/@angular/common/fesm5/common.js'
                );
                /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                    /*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js'
                );
                /* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
                    /*! ./sidebar/sidebar.component */ './src/app/components/sidebar/sidebar.component.ts'
                );
                /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
                    /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
                );
                /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
                    /*! @angular/flex-layout */ './node_modules/@angular/flex-layout/esm5/flex-layout.es5.js'
                );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var ComponentsModule = /** @class */ (function () {
                    function ComponentsModule() {}
                    ComponentsModule = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'NgModule'
                                ]
                            )({
                                declarations: [
                                    _chat_chat_layout_chat_layout_component__WEBPACK_IMPORTED_MODULE_1__[
                                        'ChatLayoutComponent'
                                    ],
                                    _form_input_form_input_form_component__WEBPACK_IMPORTED_MODULE_2__[
                                        'InputFormComponent'
                                    ],
                                    _form_form_actions_form_actions_component__WEBPACK_IMPORTED_MODULE_3__[
                                        'FormActionsComponent'
                                    ],
                                    _form_form_text_area_form_text_area_component__WEBPACK_IMPORTED_MODULE_4__[
                                        'FormTextAreaComponent'
                                    ],
                                    _form_form_component__WEBPACK_IMPORTED_MODULE_5__[
                                        'FormComponent'
                                    ],
                                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__[
                                        'SidebarComponent'
                                    ],
                                ],
                                imports: [
                                    _angular_common__WEBPACK_IMPORTED_MODULE_7__[
                                        'CommonModule'
                                    ],
                                    _public_material_module__WEBPACK_IMPORTED_MODULE_6__[
                                        'MaterialModule'
                                    ],
                                    _angular_router__WEBPACK_IMPORTED_MODULE_10__[
                                        'RouterModule'
                                    ],
                                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__[
                                        'ReactiveFormsModule'
                                    ],
                                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__[
                                        'FlexLayoutModule'
                                    ],
                                ],
                                exports: [
                                    _chat_chat_layout_chat_layout_component__WEBPACK_IMPORTED_MODULE_1__[
                                        'ChatLayoutComponent'
                                    ],
                                    _form_input_form_input_form_component__WEBPACK_IMPORTED_MODULE_2__[
                                        'InputFormComponent'
                                    ],
                                    _form_form_actions_form_actions_component__WEBPACK_IMPORTED_MODULE_3__[
                                        'FormActionsComponent'
                                    ],
                                    _form_form_text_area_form_text_area_component__WEBPACK_IMPORTED_MODULE_4__[
                                        'FormTextAreaComponent'
                                    ],
                                    _form_form_component__WEBPACK_IMPORTED_MODULE_5__[
                                        'FormComponent'
                                    ],
                                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__[
                                        'SidebarComponent'
                                    ],
                                    _public_material_module__WEBPACK_IMPORTED_MODULE_6__[
                                        'MaterialModule'
                                    ],
                                    _angular_router__WEBPACK_IMPORTED_MODULE_10__[
                                        'RouterModule'
                                    ],
                                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__[
                                        'ReactiveFormsModule'
                                    ],
                                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__[
                                        'FlexLayoutModule'
                                    ],
                                    _angular_common__WEBPACK_IMPORTED_MODULE_7__[
                                        'CommonModule'
                                    ],
                                ],
                            }),
                        ],
                        ComponentsModule
                    );
                    return ComponentsModule;
                })();

                /***/
            },

        /***/ './src/app/components/error/error.component.scss':
            /*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.scss ***!
  \*******************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */';

                /***/
            },

        /***/ './src/app/components/error/error.component.ts':
            /*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
            /*! exports provided: ErrorComponent */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'ErrorComponent',
                    function () {
                        return ErrorComponent;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! @angular/material */ './node_modules/@angular/material/esm5/material.es5.js'
                );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };
                var __metadata =
                    (undefined && undefined.__metadata) ||
                    function (k, v) {
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.metadata === 'function'
                        )
                            return Reflect.metadata(k, v);
                    };
                var __param =
                    (undefined && undefined.__param) ||
                    function (paramIndex, decorator) {
                        return function (target, key) {
                            decorator(target, key, paramIndex);
                        };
                    };
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var ErrorComponent = /** @class */ (function () {
                    function ErrorComponent(data) {
                        this.data = data;
                    }
                    ErrorComponent.prototype.ngOnInit = function () {};
                    ErrorComponent.ctorParameters = function () {
                        return [
                            {
                                type: undefined,
                                decorators: [
                                    {
                                        type:
                                            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                                'Inject'
                                            ],
                                        args: [
                                            _angular_material__WEBPACK_IMPORTED_MODULE_1__[
                                                'MAT_DIALOG_DATA'
                                            ],
                                        ],
                                    },
                                ],
                            },
                        ];
                    };
                    ErrorComponent = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Component'
                                ]
                            )({
                                template: __importDefault(
                                    __webpack_require__(
                                        /*! raw-loader!./error.component.html */ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html'
                                    )
                                ).default,
                                styles: [
                                    __importDefault(
                                        __webpack_require__(
                                            /*! ./error.component.scss */ './src/app/components/error/error.component.scss'
                                        )
                                    ).default,
                                ],
                            }),
                            __param(
                                0,
                                Object(
                                    _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                        'Inject'
                                    ]
                                )(
                                    _angular_material__WEBPACK_IMPORTED_MODULE_1__[
                                        'MAT_DIALOG_DATA'
                                    ]
                                )
                            ),
                            __metadata('design:paramtypes', [Object]),
                        ],
                        ErrorComponent
                    );
                    return ErrorComponent;
                })();

                /***/
            },

        /***/ './src/app/components/form/form-actions/form-actions.component.scss':
            /*!**************************************************************************!*\
  !*** ./src/app/components/form/form-actions/form-actions.component.scss ***!
  \**************************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS9mb3JtLWFjdGlvbnMvZm9ybS1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIn0= */';

                /***/
            },

        /***/ './src/app/components/form/form-actions/form-actions.component.ts':
            /*!************************************************************************!*\
  !*** ./src/app/components/form/form-actions/form-actions.component.ts ***!
  \************************************************************************/
            /*! exports provided: FormActionsComponent */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'FormActionsComponent',
                    function () {
                        return FormActionsComponent;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js'
                );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };
                var __metadata =
                    (undefined && undefined.__metadata) ||
                    function (k, v) {
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.metadata === 'function'
                        )
                            return Reflect.metadata(k, v);
                    };
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var FormActionsComponent = /** @class */ (function () {
                    function FormActionsComponent() {}
                    FormActionsComponent.prototype.ngOnInit = function () {};
                    __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Input'
                                ]
                            )(),
                            __metadata(
                                'design:type',
                                _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                                    'FormGroup'
                                ]
                            ),
                        ],
                        FormActionsComponent.prototype,
                        'formGroup',
                        void 0
                    );
                    __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Input'
                                ]
                            )(),
                            __metadata('design:type', String),
                        ],
                        FormActionsComponent.prototype,
                        'accept',
                        void 0
                    );
                    __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Input'
                                ]
                            )(),
                            __metadata('design:type', String),
                        ],
                        FormActionsComponent.prototype,
                        'reject',
                        void 0
                    );
                    FormActionsComponent = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Component'
                                ]
                            )({
                                selector: 'app-form-actions',
                                template: __importDefault(
                                    __webpack_require__(
                                        /*! raw-loader!./form-actions.component.html */ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/form/form-actions/form-actions.component.html'
                                    )
                                ).default,
                                styles: [
                                    __importDefault(
                                        __webpack_require__(
                                            /*! ./form-actions.component.scss */ './src/app/components/form/form-actions/form-actions.component.scss'
                                        )
                                    ).default,
                                ],
                            }),
                            __metadata('design:paramtypes', []),
                        ],
                        FormActionsComponent
                    );
                    return FormActionsComponent;
                })();

                /***/
            },

        /***/ './src/app/components/form/form-text-area/form-text-area.component.scss':
            /*!******************************************************************************!*\
  !*** ./src/app/components/form/form-text-area/form-text-area.component.scss ***!
  \******************************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    'mat-form-field,\ntextarea {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtL2Zvcm0tdGV4dC1hcmVhL0M6XFxlbnR3aWNrbHVuZ1xcV2ViXFxtZWFuXFxtZWFuL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb3JtXFxmb3JtLXRleHQtYXJlYVxcZm9ybS10ZXh0LWFyZWEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS9mb3JtLXRleHQtYXJlYS9mb3JtLXRleHQtYXJlYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvcm0vZm9ybS10ZXh0LWFyZWEvZm9ybS10ZXh0LWFyZWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCxcclxudGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIm1hdC1mb3JtLWZpZWxkLFxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */';

                /***/
            },

        /***/ './src/app/components/form/form-text-area/form-text-area.component.ts':
            /*!****************************************************************************!*\
  !*** ./src/app/components/form/form-text-area/form-text-area.component.ts ***!
  \****************************************************************************/
            /*! exports provided: FormTextAreaComponent */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'FormTextAreaComponent',
                    function () {
                        return FormTextAreaComponent;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _model_ExtendedFormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../../../model/ExtendedFormControl */ './src/app/model/ExtendedFormControl.ts'
                );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };
                var __metadata =
                    (undefined && undefined.__metadata) ||
                    function (k, v) {
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.metadata === 'function'
                        )
                            return Reflect.metadata(k, v);
                    };
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var FormTextAreaComponent = /** @class */ (function () {
                    function FormTextAreaComponent() {}
                    FormTextAreaComponent.prototype.ngOnInit = function () {};
                    __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Input'
                                ]
                            )(),
                            __metadata('design:type', String),
                        ],
                        FormTextAreaComponent.prototype,
                        'label',
                        void 0
                    );
                    __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Input'
                                ]
                            )(),
                            __metadata('design:type', Number),
                        ],
                        FormTextAreaComponent.prototype,
                        'rows',
                        void 0
                    );
                    __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Input'
                                ]
                            )(),
                            __metadata('design:type', Number),
                        ],
                        FormTextAreaComponent.prototype,
                        'minLength',
                        void 0
                    );
                    __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Input'
                                ]
                            )(),
                            __metadata('design:type', String),
                        ],
                        FormTextAreaComponent.prototype,
                        'errorMessage',
                        void 0
                    );
                    __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Input'
                                ]
                            )(),
                            __metadata(
                                'design:type',
                                _model_ExtendedFormControl__WEBPACK_IMPORTED_MODULE_1__[
                                    'ExtendedFormControl'
                                ]
                            ),
                        ],
                        FormTextAreaComponent.prototype,
                        'control',
                        void 0
                    );
                    __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Input'
                                ]
                            )(),
                            __metadata('design:type', String),
                        ],
                        FormTextAreaComponent.prototype,
                        'placeholder',
                        void 0
                    );
                    FormTextAreaComponent = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Component'
                                ]
                            )({
                                selector: 'app-form-text-area',
                                template: __importDefault(
                                    __webpack_require__(
                                        /*! raw-loader!./form-text-area.component.html */ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/form/form-text-area/form-text-area.component.html'
                                    )
                                ).default,
                                styles: [
                                    __importDefault(
                                        __webpack_require__(
                                            /*! ./form-text-area.component.scss */ './src/app/components/form/form-text-area/form-text-area.component.scss'
                                        )
                                    ).default,
                                ],
                            }),
                            __metadata('design:paramtypes', []),
                        ],
                        FormTextAreaComponent
                    );
                    return FormTextAreaComponent;
                })();

                /***/
            },

        /***/ './src/app/components/form/form.component.scss':
            /*!*****************************************************!*\
  !*** ./src/app/components/form/form.component.scss ***!
  \*****************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '.small {\n  width: 80%;\n  margin-top: 5%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.wide {\n  width: 100%;\n}\n\nform mat-card {\n  padding: 2rem 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtL0M6XFxlbnR3aWNrbHVuZ1xcV2ViXFxtZWFuXFxtZWFuL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb3JtXFxmb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FGOztBRElBO0VBQ0UsV0FBQTtBQ0RGOztBREtFO0VBQ0Usa0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zbWFsbCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblxyXG59XHJcblxyXG4ud2lkZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIG1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDJyZW0gM3JlbTtcclxuICB9XHJcbn1cclxuIiwiLnNtYWxsIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi53aWRlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmZvcm0gbWF0LWNhcmQge1xuICBwYWRkaW5nOiAycmVtIDNyZW07XG59Il19 */';

                /***/
            },

        /***/ './src/app/components/form/form.component.ts':
            /*!***************************************************!*\
  !*** ./src/app/components/form/form.component.ts ***!
  \***************************************************/
            /*! exports provided: FormComponent */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'FormComponent',
                    function () {
                        return FormComponent;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js'
                );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };
                var __metadata =
                    (undefined && undefined.__metadata) ||
                    function (k, v) {
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.metadata === 'function'
                        )
                            return Reflect.metadata(k, v);
                    };
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var FormComponent = /** @class */ (function () {
                    function FormComponent() {
                        this.wide = false;
                        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                            'EventEmitter'
                        ]();
                    }
                    FormComponent.prototype.onSubmit = function () {
                        this.submitted.emit(this.formGroup);
                    };
                    __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Input'
                                ]
                            )(),
                            __metadata(
                                'design:type',
                                _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                                    'FormGroup'
                                ]
                            ),
                        ],
                        FormComponent.prototype,
                        'formGroup',
                        void 0
                    );
                    __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Input'
                                ]
                            )(),
                            __metadata('design:type', Object),
                        ],
                        FormComponent.prototype,
                        'wide',
                        void 0
                    );
                    __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Output'
                                ]
                            )(),
                            __metadata('design:type', Object),
                        ],
                        FormComponent.prototype,
                        'submitted',
                        void 0
                    );
                    FormComponent = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Component'
                                ]
                            )({
                                selector: 'app-form',
                                template: __importDefault(
                                    __webpack_require__(
                                        /*! raw-loader!./form.component.html */ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/form/form.component.html'
                                    )
                                ).default,
                                styles: [
                                    __importDefault(
                                        __webpack_require__(
                                            /*! ./form.component.scss */ './src/app/components/form/form.component.scss'
                                        )
                                    ).default,
                                ],
                            }),
                            __metadata('design:paramtypes', []),
                        ],
                        FormComponent
                    );
                    return FormComponent;
                })();

                /***/
            },

        /***/ './src/app/components/form/input-form/input-form.component.scss':
            /*!**********************************************************************!*\
  !*** ./src/app/components/form/input-form/input-form.component.scss ***!
  \**********************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    'mat-form-field,\ntextarea {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtL2lucHV0LWZvcm0vQzpcXGVudHdpY2tsdW5nXFxXZWJcXG1lYW5cXG1lYW4vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvcm1cXGlucHV0LWZvcm1cXGlucHV0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS9pbnB1dC1mb3JtL2lucHV0LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JtL2lucHV0LWZvcm0vaW5wdXQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkLFxyXG50ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIiwibWF0LWZvcm0tZmllbGQsXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */';

                /***/
            },

        /***/ './src/app/components/form/input-form/input-form.component.ts':
            /*!********************************************************************!*\
  !*** ./src/app/components/form/input-form/input-form.component.ts ***!
  \********************************************************************/
            /*! exports provided: InputFormComponent */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'InputFormComponent',
                    function () {
                        return InputFormComponent;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _model_ExtendedFormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../../../model/ExtendedFormControl */ './src/app/model/ExtendedFormControl.ts'
                );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };
                var __metadata =
                    (undefined && undefined.__metadata) ||
                    function (k, v) {
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.metadata === 'function'
                        )
                            return Reflect.metadata(k, v);
                    };
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var InputFormComponent = /** @class */ (function () {
                    function InputFormComponent() {
                        this.type = 'text';
                    }
                    InputFormComponent.prototype.ngOnInit = function () {};
                    __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Input'
                                ]
                            )(),
                            __metadata('design:type', String),
                        ],
                        InputFormComponent.prototype,
                        'label',
                        void 0
                    );
                    __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Input'
                                ]
                            )(),
                            __metadata('design:type', Object),
                        ],
                        InputFormComponent.prototype,
                        'type',
                        void 0
                    );
                    __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Input'
                                ]
                            )(),
                            __metadata('design:type', String),
                        ],
                        InputFormComponent.prototype,
                        'errorMessage',
                        void 0
                    );
                    __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Input'
                                ]
                            )(),
                            __metadata('design:type', Number),
                        ],
                        InputFormComponent.prototype,
                        'minLength',
                        void 0
                    );
                    __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Input'
                                ]
                            )(),
                            __metadata(
                                'design:type',
                                _model_ExtendedFormControl__WEBPACK_IMPORTED_MODULE_1__[
                                    'ExtendedFormControl'
                                ]
                            ),
                        ],
                        InputFormComponent.prototype,
                        'control',
                        void 0
                    );
                    __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Input'
                                ]
                            )(),
                            __metadata('design:type', String),
                        ],
                        InputFormComponent.prototype,
                        'placeholder',
                        void 0
                    );
                    InputFormComponent = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Component'
                                ]
                            )({
                                selector: 'app-input-form',
                                template: __importDefault(
                                    __webpack_require__(
                                        /*! raw-loader!./input-form.component.html */ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/form/input-form/input-form.component.html'
                                    )
                                ).default,
                                styles: [
                                    __importDefault(
                                        __webpack_require__(
                                            /*! ./input-form.component.scss */ './src/app/components/form/input-form/input-form.component.scss'
                                        )
                                    ).default,
                                ],
                            }),
                            __metadata('design:paramtypes', []),
                        ],
                        InputFormComponent
                    );
                    return InputFormComponent;
                })();

                /***/
            },

        /***/ './src/app/components/sidebar/sidebar.component.scss':
            /*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    'mat-sidenav-container {\n  background-color: white !important;\n}\nmat-sidenav-container mat-sidenav-content {\n  height: calc(100vh - 64px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL0M6XFxlbnR3aWNrbHVuZ1xcV2ViXFxtZWFuXFxtZWFuL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0FDQ0Y7QURBRTtFQUNFLDBCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgbWF0LXNpZGVuYXYtY29udGVudHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xyXG4gIH1cclxuICBtYXQtc2lkZW5hdntcclxuICB9XHJcbn1cclxuXHJcbiIsIm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYtY29udGVudCB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xufSJdfQ== */';

                /***/
            },

        /***/ './src/app/components/sidebar/sidebar.component.ts':
            /*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
            /*! exports provided: SidebarComponent */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'SidebarComponent',
                    function () {
                        return SidebarComponent;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! @angular/material */ './node_modules/@angular/material/esm5/material.es5.js'
                );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };
                var __metadata =
                    (undefined && undefined.__metadata) ||
                    function (k, v) {
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.metadata === 'function'
                        )
                            return Reflect.metadata(k, v);
                    };
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var SidebarComponent = /** @class */ (function () {
                    function SidebarComponent() {
                        this.sidenavBreakpoint = 750;
                        this.sidenavFixedTopGap = 65;
                        this.opened = true;
                    }
                    SidebarComponent.prototype.ngOnInit = function () {
                        this.sidenavBreakpointLogic(window.innerWidth);
                    };
                    SidebarComponent.prototype.onResize = function (event) {
                        this.sidenavBreakpointLogic(event.target.innerWidth);
                    };
                    SidebarComponent.prototype.sidenavBreakpointLogic = function (
                        checkWidth
                    ) {
                        if (checkWidth < this.sidenavBreakpoint) {
                            this.opened = false;
                        } else {
                            this.opened = true;
                        }
                        this.sidenav.fixedTopGap = this.sidenavFixedTopGap;
                    };
                    SidebarComponent.prototype.isBiggerScreen = function () {
                        var width =
                            window.innerWidth ||
                            document.documentElement.clientWidth ||
                            document.body.clientWidth;
                        if (width < this.sidenavBreakpoint) {
                            return true;
                        } else {
                            return false;
                        }
                    };
                    __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'ViewChild'
                                ]
                            )('sidenav', { static: true }),
                            __metadata(
                                'design:type',
                                _angular_material__WEBPACK_IMPORTED_MODULE_1__[
                                    'MatSidenav'
                                ]
                            ),
                        ],
                        SidebarComponent.prototype,
                        'sidenav',
                        void 0
                    );
                    __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'HostListener'
                                ]
                            )('window:resize', ['$event']),
                            __metadata('design:type', Function),
                            __metadata('design:paramtypes', [Object]),
                            __metadata('design:returntype', void 0),
                        ],
                        SidebarComponent.prototype,
                        'onResize',
                        null
                    );
                    SidebarComponent = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Component'
                                ]
                            )({
                                selector: 'app-sidebar',
                                template: __importDefault(
                                    __webpack_require__(
                                        /*! raw-loader!./sidebar.component.html */ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html'
                                    )
                                ).default,
                                styles: [
                                    __importDefault(
                                        __webpack_require__(
                                            /*! ./sidebar.component.scss */ './src/app/components/sidebar/sidebar.component.scss'
                                        )
                                    ).default,
                                ],
                            }),
                        ],
                        SidebarComponent
                    );
                    return SidebarComponent;
                })();

                /***/
            },

        /***/ './src/app/error-interceptor.ts':
            /*!**************************************!*\
  !*** ./src/app/error-interceptor.ts ***!
  \**************************************/
            /*! exports provided: ErrorInterceptor */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'ErrorInterceptor',
                    function () {
                        return ErrorInterceptor;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
                );
                /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
                );
                /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! @angular/material */ './node_modules/@angular/material/esm5/material.es5.js'
                );
                /* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./components/error/error.component */ './src/app/components/error/error.component.ts'
                );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };
                var __metadata =
                    (undefined && undefined.__metadata) ||
                    function (k, v) {
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.metadata === 'function'
                        )
                            return Reflect.metadata(k, v);
                    };
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var ErrorInterceptor = /** @class */ (function () {
                    function ErrorInterceptor(dialog) {
                        this.dialog = dialog;
                    }
                    ErrorInterceptor.prototype.intercept = function (
                        req,
                        next
                    ) {
                        var _this = this;
                        return next.handle(req).pipe(
                            // tslint:disable-next-line:no-shadowed-variable
                            Object(
                                rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[
                                    'catchError'
                                ]
                            )(function (error) {
                                var errorMessage = 'An error occured';
                                if (error.error.message) {
                                    errorMessage = error.error.message;
                                    _this.dialog.open(
                                        _components_error_error_component__WEBPACK_IMPORTED_MODULE_4__[
                                            'ErrorComponent'
                                        ],
                                        {
                                            data: { message: errorMessage },
                                        }
                                    );
                                    return Object(
                                        rxjs__WEBPACK_IMPORTED_MODULE_1__[
                                            'throwError'
                                        ]
                                    )(error);
                                }
                            })
                        );
                    };
                    ErrorInterceptor.ctorParameters = function () {
                        return [
                            {
                                type:
                                    _angular_material__WEBPACK_IMPORTED_MODULE_3__[
                                        'MatDialog'
                                    ],
                            },
                        ];
                    };
                    ErrorInterceptor = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Injectable'
                                ]
                            )(),
                            __metadata('design:paramtypes', [
                                _angular_material__WEBPACK_IMPORTED_MODULE_3__[
                                    'MatDialog'
                                ],
                            ]),
                        ],
                        ErrorInterceptor
                    );
                    return ErrorInterceptor;
                })();

                /***/
            },

        /***/ './src/app/header/header.component.scss':
            /*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    'ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\n.mat-toolbar {\n  position: fixed;\n  z-index: 2;\n  padding: 1rem;\n  box-sizing: inherit;\n  left: 0;\n  top: 0;\n}\n\n.content-wrapper {\n  width: 100%;\n  height: 64px;\n  position: static;\n}\n\n.content-wrapper .wrapper {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxlbnR3aWNrbHVuZ1xcV2ViXFxtZWFuXFxtZWFuL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNDRjs7QURHQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG5cclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1hdC10b29sYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5jb250ZW50LXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjRweDtcclxuICBwb3NpdGlvbjogc3RhdGljO1xyXG5cclxuICAud3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIH1cclxufVxyXG4iLCJ1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LXRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY0cHg7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG59XG4uY29udGVudC13cmFwcGVyIC53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0iXX0= */';

                /***/
            },

        /***/ './src/app/header/header.component.ts':
            /*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
            /*! exports provided: HeaderComponent */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'HeaderComponent',
                    function () {
                        return HeaderComponent;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _authorization_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../authorization/auth.service */ './src/app/authorization/auth.service.ts'
                );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };
                var __metadata =
                    (undefined && undefined.__metadata) ||
                    function (k, v) {
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.metadata === 'function'
                        )
                            return Reflect.metadata(k, v);
                    };
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var HeaderComponent = /** @class */ (function () {
                    function HeaderComponent(authService) {
                        this.authService = authService;
                        this.isAuthenticated = false;
                    }
                    HeaderComponent.prototype.ngOnInit = function () {
                        var _this = this;
                        this.authSub = this.authService
                            .getAuthStatusListener()
                            .subscribe(function (value) {
                                if (value) {
                                    _this.isAuthenticated = true;
                                } else {
                                    _this.isAuthenticated = false;
                                }
                            });
                    };
                    HeaderComponent.prototype.ngOnDestroy = function () {
                        this.authSub.unsubscribe();
                    };
                    HeaderComponent.prototype.onLogout = function () {
                        this.authService.logOut();
                    };
                    HeaderComponent.ctorParameters = function () {
                        return [
                            {
                                type:
                                    _authorization_auth_service__WEBPACK_IMPORTED_MODULE_1__[
                                        'AuthService'
                                    ],
                            },
                        ];
                    };
                    HeaderComponent = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Component'
                                ]
                            )({
                                selector: 'app-header',
                                template: __importDefault(
                                    __webpack_require__(
                                        /*! raw-loader!./header.component.html */ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html'
                                    )
                                ).default,
                                styles: [
                                    __importDefault(
                                        __webpack_require__(
                                            /*! ./header.component.scss */ './src/app/header/header.component.scss'
                                        )
                                    ).default,
                                ],
                            }),
                            __metadata('design:paramtypes', [
                                _authorization_auth_service__WEBPACK_IMPORTED_MODULE_1__[
                                    'AuthService'
                                ],
                            ]),
                        ],
                        HeaderComponent
                    );
                    return HeaderComponent;
                })();

                /***/
            },

        /***/ './src/app/model/ExtendedFormControl.ts':
            /*!**********************************************!*\
  !*** ./src/app/model/ExtendedFormControl.ts ***!
  \**********************************************/
            /*! exports provided: ExtendedFormControl */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'ExtendedFormControl',
                    function () {
                        return ExtendedFormControl;
                    }
                );
                /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js'
                );
                var __extends =
                    (undefined && undefined.__extends) ||
                    (function () {
                        var extendStatics = function (d, b) {
                            extendStatics =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (d, b) {
                                        d.__proto__ = b;
                                    }) ||
                                function (d, b) {
                                    for (var p in b)
                                        if (b.hasOwnProperty(p)) d[p] = b[p];
                                };
                            return extendStatics(d, b);
                        };
                        return function (d, b) {
                            extendStatics(d, b);
                            function __() {
                                this.constructor = d;
                            }
                            d.prototype =
                                b === null
                                    ? Object.create(b)
                                    : ((__.prototype = b.prototype), new __());
                        };
                    })();
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var ExtendedFormControl = /** @class */ (function (_super) {
                    __extends(ExtendedFormControl, _super);
                    // tslint:disable-next-line:max-line-length
                    function ExtendedFormControl(
                        formState,
                        placeholder,
                        validatorOrOpts,
                        asyncValidator
                    ) {
                        var _this =
                            _super.call(
                                this,
                                formState,
                                validatorOrOpts,
                                asyncValidator
                            ) || this;
                        _this._placeholder = placeholder;
                        return _this;
                    }
                    Object.defineProperty(
                        ExtendedFormControl.prototype,
                        'placeholder',
                        {
                            get: function () {
                                return this._placeholder;
                            },
                            set: function (value) {
                                this._placeholder = value;
                            },
                            enumerable: true,
                            configurable: true,
                        }
                    );
                    return ExtendedFormControl;
                })(_angular_forms__WEBPACK_IMPORTED_MODULE_0__['FormControl']);

                /***/
            },

        /***/ './src/app/public/material.module.ts':
            /*!*******************************************!*\
  !*** ./src/app/public/material.module.ts ***!
  \*******************************************/
            /*! exports provided: MaterialModule */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'MaterialModule',
                    function () {
                        return MaterialModule;
                    }
                );
                /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/material */ './node_modules/@angular/material/esm5/material.es5.js'
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var MaterialModule = /** @class */ (function () {
                    function MaterialModule() {}
                    MaterialModule = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                                    'NgModule'
                                ]
                            )({
                                imports: [
                                    _angular_material__WEBPACK_IMPORTED_MODULE_0__[
                                        'MatInputModule'
                                    ],
                                    _angular_material__WEBPACK_IMPORTED_MODULE_0__[
                                        'MatCardModule'
                                    ],
                                    _angular_material__WEBPACK_IMPORTED_MODULE_0__[
                                        'MatButtonModule'
                                    ],
                                    _angular_material__WEBPACK_IMPORTED_MODULE_0__[
                                        'MatToolbarModule'
                                    ],
                                    _angular_material__WEBPACK_IMPORTED_MODULE_0__[
                                        'MatExpansionModule'
                                    ],
                                    _angular_material__WEBPACK_IMPORTED_MODULE_0__[
                                        'MatProgressSpinnerModule'
                                    ],
                                    _angular_material__WEBPACK_IMPORTED_MODULE_0__[
                                        'MatSidenavModule'
                                    ],
                                    _angular_material__WEBPACK_IMPORTED_MODULE_0__[
                                        'MatPaginatorModule'
                                    ],
                                    _angular_material__WEBPACK_IMPORTED_MODULE_0__[
                                        'MatListModule'
                                    ],
                                    _angular_material__WEBPACK_IMPORTED_MODULE_0__[
                                        'MatIconModule'
                                    ],
                                    _angular_material__WEBPACK_IMPORTED_MODULE_0__[
                                        'MatDialogModule'
                                    ],
                                ],
                                exports: [
                                    _angular_material__WEBPACK_IMPORTED_MODULE_0__[
                                        'MatInputModule'
                                    ],
                                    _angular_material__WEBPACK_IMPORTED_MODULE_0__[
                                        'MatCardModule'
                                    ],
                                    _angular_material__WEBPACK_IMPORTED_MODULE_0__[
                                        'MatButtonModule'
                                    ],
                                    _angular_material__WEBPACK_IMPORTED_MODULE_0__[
                                        'MatToolbarModule'
                                    ],
                                    _angular_material__WEBPACK_IMPORTED_MODULE_0__[
                                        'MatExpansionModule'
                                    ],
                                    _angular_material__WEBPACK_IMPORTED_MODULE_0__[
                                        'MatProgressSpinnerModule'
                                    ],
                                    _angular_material__WEBPACK_IMPORTED_MODULE_0__[
                                        'MatSidenavModule'
                                    ],
                                    _angular_material__WEBPACK_IMPORTED_MODULE_0__[
                                        'MatPaginatorModule'
                                    ],
                                    _angular_material__WEBPACK_IMPORTED_MODULE_0__[
                                        'MatListModule'
                                    ],
                                    _angular_material__WEBPACK_IMPORTED_MODULE_0__[
                                        'MatIconModule'
                                    ],
                                    _angular_material__WEBPACK_IMPORTED_MODULE_0__[
                                        'MatDialogModule'
                                    ],
                                ],
                            }),
                        ],
                        MaterialModule
                    );
                    return MaterialModule;
                })();

                /***/
            },

        /***/ './src/app/public/services/socketio.service.ts':
            /*!*****************************************************!*\
  !*** ./src/app/public/services/socketio.service.ts ***!
  \*****************************************************/
            /*! exports provided: SocketioService */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'SocketioService',
                    function () {
                        return SocketioService;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! socket.io-client */ './node_modules/socket.io-client/lib/index.js'
                );
                /* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    socket_io_client__WEBPACK_IMPORTED_MODULE_1__
                );
                /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ../../../environments/environment */ './src/environments/environment.ts'
                );
                /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
                );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };
                var __metadata =
                    (undefined && undefined.__metadata) ||
                    function (k, v) {
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.metadata === 'function'
                        )
                            return Reflect.metadata(k, v);
                    };
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var SocketioService = /** @class */ (function () {
                    function SocketioService() {
                        this.uri =
                            _environments_environment__WEBPACK_IMPORTED_MODULE_2__[
                                'environment'
                            ].SOCKET_ENDPOINT;
                        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(
                            this.uri
                        );
                    }
                    SocketioService.prototype.listen = function (eventName) {
                        var _this = this;
                        return new rxjs__WEBPACK_IMPORTED_MODULE_3__[
                            'Observable'
                        ](function (subscriber) {
                            _this.socket.on(eventName, function (data) {
                                subscriber.next(data);
                            });
                        });
                    };
                    SocketioService.prototype.emit = function (
                        eventName,
                        data
                    ) {
                        this.socket.emit(eventName, data);
                    };
                    SocketioService = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Injectable'
                                ]
                            )({
                                providedIn: 'root',
                            }),
                            __metadata('design:paramtypes', []),
                        ],
                        SocketioService
                    );
                    return SocketioService;
                })();

                /***/
            },

        /***/ './src/environments/environment.ts':
            /*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
            /*! exports provided: environment */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'environment',
                    function () {
                        return environment;
                    }
                );
                // This file can be replaced during build by using the `fileReplacements` array.
                // `ng build ---prod` replaces `environment.js` with `environment.prod.ts`.
                // The list of file replacements can be found in `angular.json`.
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };
                var environment = {
                    production: false,
                    SOCKET_ENDPOINT: 'http://localhost:3000',
                };
                /*
                 * In development mode, to ignore zone related error stack frames such as
                 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
                 * import the following file, but please comment it out in production mode
                 * because it will have performance impact when throw error
                 */
                // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

                /***/
            },

        /***/ './src/main.ts':
            /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
            /*! no exports provided */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! @angular/platform-browser-dynamic */ './node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js'
                );
                /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./app/app.module */ './src/app/app.module.ts'
                );
                /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./environments/environment */ './src/environments/environment.ts'
                );
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                if (
                    _environments_environment__WEBPACK_IMPORTED_MODULE_3__[
                        'environment'
                    ].production
                ) {
                    Object(
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                            'enableProdMode'
                        ]
                    )();
                }
                Object(
                    _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__[
                        'platformBrowserDynamic'
                    ]
                )()
                    .bootstrapModule(
                        _app_app_module__WEBPACK_IMPORTED_MODULE_2__[
                            'AppModule'
                        ]
                    )
                    .catch(function (err) {
                        return console.log(err);
                    });

                /***/
            },

        /***/ 0:
            /*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                module.exports = __webpack_require__(
                    /*! C:\entwicklung\Web\mean\mean\src\main.ts */ './src/main.ts'
                );

                /***/
            },

        /***/ 1:
            /*!********************!*\
  !*** ws (ignored) ***!
  \********************/
            /*! no static exports found */
            /***/ function (module, exports) {
                /* (ignored) */
                /***/
            },
    },
    [[0, 'runtime', 'vendor']],
]);
//# sourceMappingURL=main.js.map
