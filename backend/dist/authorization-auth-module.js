(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['authorization-auth-module'],
    {
        /***/ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/authorization/chat/chat.component.html':
            /*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/authorization/chat/chat.component.html ***!
  \*****************************************************************************************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '<app-sidebar>\r\n  <app-chat-layout (submitted)="onNewMessage($event)">\r\n    <div class="chat-content-wrapper" fxLayout="column">\r\n      <div *ngFor="let item of chatData" class="spacer">\r\n        <span [ngClass]="item.isOwnMessage ? \'right\': \'left\'">{{item.formData}}</span>\r\n      </div>\r\n    </div>\r\n\r\n  </app-chat-layout>\r\n</app-sidebar>\r\n';

                /***/
            },

        /***/ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/authorization/posts/post-create/post-create.component.html':
            /*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/authorization/posts/post-create/post-create.component.html ***!
  \*************************************************************************************************************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '\r\n  <mat-spinner *ngIf="isLoading"></mat-spinner>\r\n  <app-form [formGroup]="form"  (submitted)="onSavePost()"  *ngIf="!isLoading">\r\n    <mat-card-title>Create new Post</mat-card-title>\r\n    <app-input-form\r\n      label="Title"\r\n      minLength="3"\r\n      errorMessage="Please enter a post title"\r\n      [control]="getTitle()"\r\n      [placeholder]="getTitle().placeholder"\r\n    ></app-input-form>\r\n    <div>\r\n      <button mat-stroked-button type="button" (click)="filepicker.click()">Pick Image</button>\r\n      <input type="file" #filepicker (change)="onImagePicked($event)"/>\r\n    </div>\r\n    <div class="image-preview" *ngIf="imagePreview !== \'\' && imagePreview && form.valid">\r\n      <img [src]="imagePreview" [alt]="form.value.title"/>\r\n    </div>\r\n    <app-form-text-area\r\n      label="Content"\r\n      rows="4"\r\n      errorMessage="Please enter content"\r\n      minLength="3"\r\n      [control]="getContent()"\r\n      [placeholder]="getContent().placeholder"\r\n    ></app-form-text-area>\r\n    <app-form-actions accept="submit" reject="cancel" [formGroup]="form"></app-form-actions>\r\n  </app-form>\r\n\r\n';

                /***/
            },

        /***/ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/authorization/posts/post-list/post-list.component.html':
            /*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/authorization/posts/post-list/post-list.component.html ***!
  \*********************************************************************************************************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '<mat-spinner *ngIf="isLoading"></mat-spinner>\r\n<mat-accordion multi="true" *ngIf="posts.length > 0 && !isLoading">\r\n  <mat-expansion-panel *ngFor="let post of posts">\r\n    <mat-expansion-panel-header>\r\n        <mat-panel-title fxLayoutAlign="space-between">\r\n          <div>\r\n            {{ post.title }}\r\n          </div>\r\n          <div>\r\n            {{post.currentDate}}\r\n          </div>\r\n        </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    <div class="post-image">\r\n      <img [src]="post.imagePath" [alt]="post.title">\r\n      <div fxLayout="row" fxLayoutAlign="left center"  class="content-wrapper">\r\n        <p id="postContent">{{ post.content }}</p>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <mat-action-row *ngIf="isAuthenticated">\r\n      <a mat-button color="primary" [routerLink]="[\'/p/edit\', post.id]" >EDIT</a>\r\n      <button mat-button color="warn" (click)="onDelete(post.id)">DELETE</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n\r\n</mat-accordion>\r\n<mat-paginator [length]="totalPosts"\r\n               [pageSize]="pagesize"\r\n               [pageIndex]="page"\r\n               [pageSizeOptions]="pageSizeOptions" (page)="onChangePage($event)" *ngIf="posts.length > 0">\r\n</mat-paginator>\r\n<p class="info-text mat-body-1" *ngIf="posts.length <= 0  && !isLoading">No posts added yet!</p>\r\n';

                /***/
            },

        /***/ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/authorization/posts/posts.component.html':
            /*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/authorization/posts/posts.component.html ***!
  \*******************************************************************************************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '<div>\r\n  <app-sidebar>\r\n    <div class="content-wrapper">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </app-sidebar>\r\n</div>\r\n';

                /***/
            },

        /***/ './src/app/authorization/auth-routing.module.ts':
            /*!******************************************************!*\
  !*** ./src/app/authorization/auth-routing.module.ts ***!
  \******************************************************/
            /*! exports provided: AuthRoutingModule */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'AuthRoutingModule',
                    function () {
                        return AuthRoutingModule;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
                );
                /* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./posts/posts.component */ './src/app/authorization/posts/posts.component.ts'
                );
                /* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./posts/post-list/post-list.component */ './src/app/authorization/posts/post-list/post-list.component.ts'
                );
                /* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./posts/post-create/post-create.component */ './src/app/authorization/posts/post-create/post-create.component.ts'
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
                        path: '',
                        component:
                            _posts_posts_component__WEBPACK_IMPORTED_MODULE_2__[
                                'PostsComponent'
                            ],
                        children: [
                            {
                                path: 'list',
                                component:
                                    _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__[
                                        'PostListComponent'
                                    ],
                            },
                            {
                                path: 'create',
                                component:
                                    _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__[
                                        'PostCreateComponent'
                                    ],
                            },
                            {
                                path: 'edit/:postId',
                                component:
                                    _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__[
                                        'PostCreateComponent'
                                    ],
                            },
                            { path: '**', redirectTo: 'list' },
                        ],
                    },
                ];
                var AuthRoutingModule = /** @class */ (function () {
                    function AuthRoutingModule() {}
                    AuthRoutingModule = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'NgModule'
                                ]
                            )({
                                imports: [
                                    _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                                        'RouterModule'
                                    ].forChild(routes),
                                ],
                                exports: [
                                    _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                                        'RouterModule'
                                    ],
                                ],
                            }),
                        ],
                        AuthRoutingModule
                    );
                    return AuthRoutingModule;
                })();

                /***/
            },

        /***/ './src/app/authorization/auth.module.ts':
            /*!**********************************************!*\
  !*** ./src/app/authorization/auth.module.ts ***!
  \**********************************************/
            /*! exports provided: AuthModule */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'AuthModule',
                    function () {
                        return AuthModule;
                    }
                );
                /* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./posts/post-list/post-list.component */ './src/app/authorization/posts/post-list/post-list.component.ts'
                );
                /* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./posts/post-create/post-create.component */ './src/app/authorization/posts/post-create/post-create.component.ts'
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ../components/components.module */ './src/app/components/components.module.ts'
                );
                /* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./chat/chat.component */ './src/app/authorization/chat/chat.component.ts'
                );
                /* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! ./posts/posts.component */ './src/app/authorization/posts/posts.component.ts'
                );
                /* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! ./auth-routing.module */ './src/app/authorization/auth-routing.module.ts'
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

                var AuthModule = /** @class */ (function () {
                    function AuthModule() {}
                    AuthModule = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_2__[
                                    'NgModule'
                                ]
                            )({
                                declarations: [
                                    _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__[
                                        'ChatComponent'
                                    ],
                                    _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_0__[
                                        'PostListComponent'
                                    ],
                                    _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_1__[
                                        'PostCreateComponent'
                                    ],
                                    _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__[
                                        'PostsComponent'
                                    ],
                                ],
                                imports: [
                                    _components_components_module__WEBPACK_IMPORTED_MODULE_3__[
                                        'ComponentsModule'
                                    ],
                                    _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__[
                                        'AuthRoutingModule'
                                    ],
                                ],
                                exports: [
                                    _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__[
                                        'ChatComponent'
                                    ],
                                    _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_0__[
                                        'PostListComponent'
                                    ],
                                    _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_1__[
                                        'PostCreateComponent'
                                    ],
                                    _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__[
                                        'PostsComponent'
                                    ],
                                ],
                            }),
                        ],
                        AuthModule
                    );
                    return AuthModule;
                })();

                /***/
            },

        /***/ './src/app/authorization/chat/chat.component.scss':
            /*!********************************************************!*\
  !*** ./src/app/authorization/chat/chat.component.scss ***!
  \********************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '.chat-content-wrapper {\n  padding-bottom: 50px;\n}\n.chat-content-wrapper .spacer {\n  margin: 1rem 0px;\n}\n.chat-content-wrapper .spacer .right {\n  padding: 20px 25px;\n  background-color: #cfcfcf;\n  opacity: 0.9;\n  border-radius: 20px;\n  max-width: 40%;\n  float: right;\n}\n.chat-content-wrapper .spacer .left {\n  padding: 20px 25px;\n  background-color: #eee;\n  opacity: 0.9;\n  border-radius: 20px;\n  max-width: 40%;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yaXphdGlvbi9jaGF0L0M6XFxlbnR3aWNrbHVuZ1xcV2ViXFxtZWFuXFxtZWFuL3NyY1xcYXBwXFxhdXRob3JpemF0aW9uXFxjaGF0XFxjaGF0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRob3JpemF0aW9uL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG9CQUFBO0FDQUY7QURFRTtFQUNFLGdCQUFBO0FDQUo7QURFSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0FOO0FER0k7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcml6YXRpb24vY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jaGF0LWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcblxyXG4gIC5zcGFjZXIge1xyXG4gICAgbWFyZ2luOiAxcmVtIDBweDtcclxuXHJcbiAgICAucmlnaHQge1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDI1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmNmY2Y7XHJcbiAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAubGVmdCB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMjVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDQwJTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5jaGF0LWNvbnRlbnQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuLmNoYXQtY29udGVudC13cmFwcGVyIC5zcGFjZXIge1xuICBtYXJnaW46IDFyZW0gMHB4O1xufVxuLmNoYXQtY29udGVudC13cmFwcGVyIC5zcGFjZXIgLnJpZ2h0IHtcbiAgcGFkZGluZzogMjBweCAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZjZmNmO1xuICBvcGFjaXR5OiAwLjk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1heC13aWR0aDogNDAlO1xuICBmbG9hdDogcmlnaHQ7XG59XG4uY2hhdC1jb250ZW50LXdyYXBwZXIgLnNwYWNlciAubGVmdCB7XG4gIHBhZGRpbmc6IDIwcHggMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgb3BhY2l0eTogMC45O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXgtd2lkdGg6IDQwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59Il19 */';

                /***/
            },

        /***/ './src/app/authorization/chat/chat.component.ts':
            /*!******************************************************!*\
  !*** ./src/app/authorization/chat/chat.component.ts ***!
  \******************************************************/
            /*! exports provided: ChatComponent */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'ChatComponent',
                    function () {
                        return ChatComponent;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _public_services_socketio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../../public/services/socketio.service */ './src/app/public/services/socketio.service.ts'
                );
                /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ../auth.service */ './src/app/authorization/auth.service.ts'
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

                var ChatComponent = /** @class */ (function () {
                    function ChatComponent(socketioService, authService) {
                        this.socketioService = socketioService;
                        this.authService = authService;
                        this.chatData = [];
                    }
                    ChatComponent.prototype.ngOnInit = function () {
                        var _this = this;
                        this.authService
                            .getAuthStatusListener()
                            .subscribe(function (x) {
                                _this.id = x._id;
                            });
                        this.socketioService
                            .listen('receivedMssage')
                            .subscribe(function (data) {
                                _this.chatData.push({
                                    formData: data.formData,
                                    isOwnMessage: _this.id === data.userId,
                                });
                            });
                        this.socketioService
                            .listen('message')
                            .subscribe(function (data) {
                                _this.chatData.push({
                                    formData: data.formData,
                                    isOwnMessage: _this.id === data.userId,
                                });
                            });
                    };
                    ChatComponent.prototype.onNewMessage = function (formData) {
                        var msg = { formData: formData, userId: this.id };
                        this.socketioService.emit('emittedMessage', msg);
                    };
                    ChatComponent.ctorParameters = function () {
                        return [
                            {
                                type:
                                    _public_services_socketio_service__WEBPACK_IMPORTED_MODULE_1__[
                                        'SocketioService'
                                    ],
                            },
                            {
                                type:
                                    _auth_service__WEBPACK_IMPORTED_MODULE_2__[
                                        'AuthService'
                                    ],
                            },
                        ];
                    };
                    ChatComponent = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Component'
                                ]
                            )({
                                selector: 'app-chat',
                                template: __importDefault(
                                    __webpack_require__(
                                        /*! raw-loader!./chat.component.html */ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/authorization/chat/chat.component.html'
                                    )
                                ).default,
                                styles: [
                                    __importDefault(
                                        __webpack_require__(
                                            /*! ./chat.component.scss */ './src/app/authorization/chat/chat.component.scss'
                                        )
                                    ).default,
                                ],
                            }),
                            __metadata('design:paramtypes', [
                                _public_services_socketio_service__WEBPACK_IMPORTED_MODULE_1__[
                                    'SocketioService'
                                ],
                                _auth_service__WEBPACK_IMPORTED_MODULE_2__[
                                    'AuthService'
                                ],
                            ]),
                        ],
                        ChatComponent
                    );
                    return ChatComponent;
                })();

                /***/
            },

        /***/ './src/app/authorization/posts/post-create/mime-type.validator.ts':
            /*!************************************************************************!*\
  !*** ./src/app/authorization/posts/post-create/mime-type.validator.ts ***!
  \************************************************************************/
            /*! exports provided: mimeType */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'mimeType',
                    function () {
                        return mimeType;
                    }
                );
                /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
                );
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var mimeType = function (control) {
                    if (typeof control.value === 'string') {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__['of'])(
                            null
                        );
                    }
                    var file = control.value;
                    var fileReader = new FileReader();
                    var frObs = new rxjs__WEBPACK_IMPORTED_MODULE_0__[
                        'Observable'
                    ](function (observer) {
                        fileReader.addEventListener('loadend', function () {
                            var arr = new Uint8Array(
                                fileReader.result
                            ).subarray(0, 4);
                            var header = '';
                            var isValid = false;
                            for (var i = 0; i < arr.length; i++) {
                                header += arr[i].toString(16);
                            }
                            switch (header) {
                                case '89504e47':
                                    isValid = true;
                                    break;
                                case 'ffd8ffe0':
                                case 'ffd8ffe1':
                                case 'ffd8ffe2':
                                case 'ffd8ffe3':
                                case 'ffd8ffe8':
                                    isValid = true;
                                    break;
                                default:
                                    isValid = false; // Or you can use the blob.type as fallback
                                    break;
                            }
                            if (isValid) {
                                observer.next(null);
                            } else {
                                observer.next({ invalidMimeType: true });
                            }
                            observer.complete();
                        });
                        fileReader.readAsArrayBuffer(file);
                    });
                    return frObs;
                };

                /***/
            },

        /***/ './src/app/authorization/posts/post-create/post-create.component.scss':
            /*!****************************************************************************!*\
  !*** ./src/app/authorization/posts/post-create/post-create.component.scss ***!
  \****************************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    'mat-form-field,\ntextarea {\n  width: 100%;\n}\n\ninput[type=file] {\n  visibility: hidden;\n}\n\n.image-preview {\n  height: 8rem;\n  margin: 1rem 2rem;\n}\n\n.image-preview img {\n  height: 100%;\n}\n\nmat-spinner {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yaXphdGlvbi9wb3N0cy9wb3N0LWNyZWF0ZS9DOlxcZW50d2lja2x1bmdcXFdlYlxcbWVhblxcbWVhbi9zcmNcXGFwcFxcYXV0aG9yaXphdGlvblxccG9zdHNcXHBvc3QtY3JlYXRlXFxwb3N0LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aG9yaXphdGlvbi9wb3N0cy9wb3N0LWNyZWF0ZS9wb3N0LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEREU7RUFDRSxZQUFBO0FDR0o7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvYXV0aG9yaXphdGlvbi9wb3N0cy9wb3N0LWNyZWF0ZS9wb3N0LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkLFxyXG50ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmltYWdlLXByZXZpZXcge1xyXG4gIGhlaWdodDogOHJlbTtcclxuICBtYXJnaW46IDFyZW0gMnJlbTtcclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG4iLCJtYXQtZm9ybS1maWVsZCxcbnRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0W3R5cGU9ZmlsZV0ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5pbWFnZS1wcmV2aWV3IHtcbiAgaGVpZ2h0OiA4cmVtO1xuICBtYXJnaW46IDFyZW0gMnJlbTtcbn1cbi5pbWFnZS1wcmV2aWV3IGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LXNwaW5uZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59Il19 */';

                /***/
            },

        /***/ './src/app/authorization/posts/post-create/post-create.component.ts':
            /*!**************************************************************************!*\
  !*** ./src/app/authorization/posts/post-create/post-create.component.ts ***!
  \**************************************************************************/
            /*! exports provided: PostCreateComponent */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'PostCreateComponent',
                    function () {
                        return PostCreateComponent;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js'
                );
                /* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ../posts.service */ './src/app/authorization/posts/posts.service.ts'
                );
                /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
                );
                /* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./mime-type.validator */ './src/app/authorization/posts/post-create/mime-type.validator.ts'
                );
                /* harmony import */ var _model_ExtendedFormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

                var PostCreateComponent = /** @class */ (function () {
                    function PostCreateComponent(postsService, route) {
                        this.postsService = postsService;
                        this.route = route;
                        this.isLoading = false;
                        this.mode = 'create';
                    }
                    PostCreateComponent.prototype.ngOnInit = function () {
                        var _this = this;
                        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                            'FormGroup'
                        ]({
                            title: new _model_ExtendedFormControl__WEBPACK_IMPORTED_MODULE_5__[
                                'ExtendedFormControl'
                            ](null, 'Title', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                                    'Validators'
                                ].required,
                                _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                                    'Validators'
                                ].minLength(3),
                            ]),
                            content: new _model_ExtendedFormControl__WEBPACK_IMPORTED_MODULE_5__[
                                'ExtendedFormControl'
                            ](null, 'Content', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                                    'Validators'
                                ].required,
                            ]),
                            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                                'FormControl'
                            ](
                                null,
                                [
                                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                                        'Validators'
                                    ].required,
                                ],
                                [
                                    _mime_type_validator__WEBPACK_IMPORTED_MODULE_4__[
                                        'mimeType'
                                    ],
                                ]
                            ),
                        });
                        this.route.paramMap.subscribe(function (paramMap) {
                            if (paramMap.get('postId')) {
                                _this.mode = 'edit';
                                _this.postId = paramMap.get('postId');
                                _this.isLoading = true;
                                _this.postsService
                                    .getPost(_this.postId)
                                    .subscribe(function (postData) {
                                        _this.post = {
                                            id: postData._id,
                                            title: postData.title,
                                            content: postData.content,
                                            imagePath: postData.imagePath,
                                            currentDate: postData.currentDate,
                                        };
                                        _this.isLoading = false;
                                        _this.form.patchValue({
                                            title: _this.post.title,
                                            content: _this.post.content,
                                            image: _this.post.imagePath,
                                        });
                                    });
                            }
                        });
                    };
                    PostCreateComponent.prototype.getTitle = function () {
                        return this.form.get('title');
                    };
                    PostCreateComponent.prototype.getContent = function () {
                        return this.form.get('content');
                    };
                    PostCreateComponent.prototype.onImagePicked = function (
                        event
                    ) {
                        var _this = this;
                        var file = event.target.files[0];
                        this.form.patchValue({ image: file });
                        this.form.get('image').updateValueAndValidity();
                        var reader = new FileReader();
                        reader.onload = function () {
                            _this.imagePreview = reader.result;
                        };
                        reader.readAsDataURL(file);
                    };
                    PostCreateComponent.prototype.onSavePost = function () {
                        if (this.form.invalid) {
                            return;
                        }
                        if (this.mode === 'create') {
                            this.postsService.addPost(
                                this.form.value.title,
                                this.form.value.content,
                                this.form.value.image
                            );
                        } else {
                            this.postsService.updatePost(
                                this.postId,
                                this.form.value.title,
                                this.form.value.content,
                                this.form.value.image
                            );
                        }
                    };
                    PostCreateComponent.ctorParameters = function () {
                        return [
                            {
                                type:
                                    _posts_service__WEBPACK_IMPORTED_MODULE_2__[
                                        'PostsService'
                                    ],
                            },
                            {
                                type:
                                    _angular_router__WEBPACK_IMPORTED_MODULE_3__[
                                        'ActivatedRoute'
                                    ],
                            },
                        ];
                    };
                    PostCreateComponent = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Component'
                                ]
                            )({
                                selector: 'app-post-create',
                                template: __importDefault(
                                    __webpack_require__(
                                        /*! raw-loader!./post-create.component.html */ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/authorization/posts/post-create/post-create.component.html'
                                    )
                                ).default,
                                styles: [
                                    __importDefault(
                                        __webpack_require__(
                                            /*! ./post-create.component.scss */ './src/app/authorization/posts/post-create/post-create.component.scss'
                                        )
                                    ).default,
                                ],
                            }),
                            __metadata('design:paramtypes', [
                                _posts_service__WEBPACK_IMPORTED_MODULE_2__[
                                    'PostsService'
                                ],
                                _angular_router__WEBPACK_IMPORTED_MODULE_3__[
                                    'ActivatedRoute'
                                ],
                            ]),
                        ],
                        PostCreateComponent
                    );
                    return PostCreateComponent;
                })();

                /***/
            },

        /***/ './src/app/authorization/posts/post-list/post-list.component.scss':
            /*!************************************************************************!*\
  !*** ./src/app/authorization/posts/post-list/post-list.component.scss ***!
  \************************************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    ':host {\n  display: block;\n  margin-top: 1rem;\n}\n\n.info-text {\n  text-align: center;\n}\n\n.post-image {\n  width: 100%;\n}\n\n.post-image img {\n  display: block;\n  margin: 0px auto;\n  width: 50vw;\n  max-width: 200px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n}\n\ndiv {\n  display: block;\n}\n\n.content-wrapper {\n  margin: 10px 48px;\n  padding: 10px;\n  border: 1px solid gray;\n}\n\nmat-paginator {\n  margin: 20px;\n}\n\nmat-spinner {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yaXphdGlvbi9wb3N0cy9wb3N0LWxpc3QvQzpcXGVudHdpY2tsdW5nXFxXZWJcXG1lYW5cXG1lYW4vc3JjXFxhcHBcXGF1dGhvcml6YXRpb25cXHBvc3RzXFxwb3N0LWxpc3RcXHBvc3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aG9yaXphdGlvbi9wb3N0cy9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FERUE7RUFDRyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NIIiwiZmlsZSI6InNyYy9hcHAvYXV0aG9yaXphdGlvbi9wb3N0cy9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5pbmZvLXRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBvc3QtaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucG9zdC1pbWFnZSBpbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jb250ZW50LXdyYXBwZXIge1xyXG4gIG1hcmdpbjogMTBweCA0OHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuXHJcbn1cclxuXHJcbm1hdC1wYWdpbmF0b3Ige1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgIG1hcmdpbi10b3A6IDEwJTtcclxuIH1cclxuXHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5pbmZvLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wb3N0LWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wb3N0LWltYWdlIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICB3aWR0aDogNTB2dztcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5kaXYge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIG1hcmdpbjogMTBweCA0OHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufVxuXG5tYXQtcGFnaW5hdG9yIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG5tYXQtc3Bpbm5lciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwJTtcbn0iXX0= */';

                /***/
            },

        /***/ './src/app/authorization/posts/post-list/post-list.component.ts':
            /*!**********************************************************************!*\
  !*** ./src/app/authorization/posts/post-list/post-list.component.ts ***!
  \**********************************************************************/
            /*! exports provided: PostListComponent */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'PostListComponent',
                    function () {
                        return PostListComponent;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../posts.service */ './src/app/authorization/posts/posts.service.ts'
                );
                /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ../../auth.service */ './src/app/authorization/auth.service.ts'
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

                var PostListComponent = /** @class */ (function () {
                    function PostListComponent(postsService, authService) {
                        this.postsService = postsService;
                        this.authService = authService;
                        this.isLoading = false;
                        this.posts = [];
                        this.totalPosts = 0;
                        this.pagesize = 2;
                        this.page = 0;
                        this.pageSizeOptions = [2, 5, 10];
                        this.isAuthenticated = false;
                    }
                    PostListComponent.prototype.ngOnInit = function () {
                        var _this = this;
                        this.isLoading = true;
                        this.postsService.getPosts(this.pagesize, this.page);
                        this.postsSub = this.postsService
                            .getPostUpdateListener()
                            .subscribe(function (postData) {
                                _this.isLoading = false;
                                _this.posts = postData.posts;
                                _this.totalPosts = postData.maxPosts;
                            });
                        this.authService
                            .getAuthStatusListener()
                            .subscribe(function (x) {
                                if (x) {
                                    _this.isAuthenticated = true;
                                } else {
                                    _this.isAuthenticated = false;
                                }
                            });
                    };
                    PostListComponent.prototype.onChangePage = function (
                        pageData
                    ) {
                        this.isLoading = true;
                        this.totalPosts = pageData.length;
                        this.pagesize = pageData.pageSize;
                        this.page = pageData.pageIndex;
                        this.postsService.getPosts(this.pagesize, this.page);
                    };
                    PostListComponent.prototype.ngOnDestroy = function () {
                        this.postsSub.unsubscribe();
                    };
                    PostListComponent.prototype.onDelete = function (id) {
                        var _this = this;
                        this.postsService.deletePost(id).subscribe(function () {
                            _this.postsService.getPosts(
                                _this.pagesize,
                                _this.page
                            );
                        });
                    };
                    PostListComponent.ctorParameters = function () {
                        return [
                            {
                                type:
                                    _posts_service__WEBPACK_IMPORTED_MODULE_1__[
                                        'PostsService'
                                    ],
                            },
                            {
                                type:
                                    _auth_service__WEBPACK_IMPORTED_MODULE_2__[
                                        'AuthService'
                                    ],
                            },
                        ];
                    };
                    PostListComponent = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Component'
                                ]
                            )({
                                selector: 'app-post-list',
                                template: __importDefault(
                                    __webpack_require__(
                                        /*! raw-loader!./post-list.component.html */ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/authorization/posts/post-list/post-list.component.html'
                                    )
                                ).default,
                                styles: [
                                    __importDefault(
                                        __webpack_require__(
                                            /*! ./post-list.component.scss */ './src/app/authorization/posts/post-list/post-list.component.scss'
                                        )
                                    ).default,
                                ],
                            }),
                            __metadata('design:paramtypes', [
                                _posts_service__WEBPACK_IMPORTED_MODULE_1__[
                                    'PostsService'
                                ],
                                _auth_service__WEBPACK_IMPORTED_MODULE_2__[
                                    'AuthService'
                                ],
                            ]),
                        ],
                        PostListComponent
                    );
                    return PostListComponent;
                })();

                /***/
            },

        /***/ './src/app/authorization/posts/posts.component.scss':
            /*!**********************************************************!*\
  !*** ./src/app/authorization/posts/posts.component.scss ***!
  \**********************************************************/
            /*! exports provided: default */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcml6YXRpb24vcG9zdHMvcG9zdHMuY29tcG9uZW50LnNjc3MifQ== */';

                /***/
            },

        /***/ './src/app/authorization/posts/posts.component.ts':
            /*!********************************************************!*\
  !*** ./src/app/authorization/posts/posts.component.ts ***!
  \********************************************************/
            /*! exports provided: PostsComponent */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'PostsComponent',
                    function () {
                        return PostsComponent;
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
                var __importDefault =
                    (undefined && undefined.__importDefault) ||
                    function (mod) {
                        return mod && mod.__esModule ? mod : { default: mod };
                    };

                var PostsComponent = /** @class */ (function () {
                    function PostsComponent() {}
                    PostsComponent.prototype.ngOnInit = function () {};
                    PostsComponent = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Component'
                                ]
                            )({
                                selector: 'app-posts',
                                template: __importDefault(
                                    __webpack_require__(
                                        /*! raw-loader!./posts.component.html */ './node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/authorization/posts/posts.component.html'
                                    )
                                ).default,
                                styles: [
                                    __importDefault(
                                        __webpack_require__(
                                            /*! ./posts.component.scss */ './src/app/authorization/posts/posts.component.scss'
                                        )
                                    ).default,
                                ],
                            }),
                        ],
                        PostsComponent
                    );
                    return PostsComponent;
                })();

                /***/
            },

        /***/ './src/app/authorization/posts/posts.service.ts':
            /*!******************************************************!*\
  !*** ./src/app/authorization/posts/posts.service.ts ***!
  \******************************************************/
            /*! exports provided: PostsService */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'PostsService',
                    function () {
                        return PostsService;
                    }
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
                );
                /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
                );
                /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
                );
                /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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

                var PostsService = /** @class */ (function () {
                    function PostsService(httpClient, router) {
                        this.httpClient = httpClient;
                        this.router = router;
                        this.posts = [];
                        this.postsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__[
                            'Subject'
                        ]();
                    }
                    PostsService.prototype.getPosts = function (
                        pagesize,
                        page
                    ) {
                        var _this = this;
                        var queryParams =
                            '?pagesize=' + pagesize + '&page=' + page;
                        return this.httpClient
                            .get(
                                'http://localhost:3000/api/posts' + queryParams
                            )
                            .subscribe(function (x) {
                                _this.posts = x.posts;
                                _this.postsUpdated.next({
                                    posts: _this.posts.slice(),
                                    maxPosts: x.maxPosts,
                                });
                            });
                    };
                    PostsService.prototype.getPostUpdateListener = function () {
                        return this.postsUpdated.asObservable();
                    };
                    PostsService.prototype.getPost = function (id) {
                        return this.httpClient.get(
                            'http://localhost:3000/api/posts/' + id
                        );
                    };
                    PostsService.prototype.addPost = function (
                        title,
                        content,
                        image
                    ) {
                        var _this = this;
                        var date = new Date().toLocaleDateString('de-AT', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                        });
                        var postData = new FormData();
                        postData.append('title', title);
                        postData.append('content', content);
                        postData.append('image', image, title);
                        postData.append('currentDate', date);
                        this.httpClient
                            .post('http://localhost:3000/api/posts', postData)
                            .subscribe(function (x) {
                                _this.redirectToBlog();
                            });
                    };
                    PostsService.prototype.updatePost = function (
                        id,
                        title,
                        content,
                        image
                    ) {
                        var _this = this;
                        var postData;
                        if (typeof image === 'object') {
                            postData = new FormData();
                            postData.append('id', id);
                            postData.append('title', title);
                            postData.append('content', content);
                            postData.append('image', image, title);
                        } else {
                            postData = {
                                id: id,
                                title: title,
                                content: content,
                                imagePath: image,
                            };
                        }
                        this.httpClient
                            .put(
                                'http://localhost:3000/api/posts/' + id,
                                postData
                            )
                            // tslint:disable-next-line:no-shadowed-variable
                            .subscribe(function (response) {
                                _this.redirectToBlog();
                            });
                    };
                    PostsService.prototype.deletePost = function (id) {
                        return this.httpClient.delete(
                            'http://localhost:3000/api/posts/' + id
                        );
                    };
                    PostsService.prototype.redirectToBlog = function () {
                        this.router.navigate(['/p/list']);
                    };
                    PostsService.ctorParameters = function () {
                        return [
                            {
                                type:
                                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__[
                                        'HttpClient'
                                    ],
                            },
                            {
                                type:
                                    _angular_router__WEBPACK_IMPORTED_MODULE_3__[
                                        'Router'
                                    ],
                            },
                        ];
                    };
                    PostsService = __decorate(
                        [
                            Object(
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                    'Injectable'
                                ]
                            )({ providedIn: 'root' }),
                            __metadata('design:paramtypes', [
                                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__[
                                    'HttpClient'
                                ],
                                _angular_router__WEBPACK_IMPORTED_MODULE_3__[
                                    'Router'
                                ],
                            ]),
                        ],
                        PostsService
                    );
                    return PostsService;
                })();

                /***/
            },
    },
]);
//# sourceMappingURL=authorization-auth-module.js.map
