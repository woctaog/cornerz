"use strict";
(self["webpackChunkcornerz"] = self["webpackChunkcornerz"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/game-board/game-board.component */ 8987);
/* harmony import */ var _components_library_library_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/library/library.component */ 2923);
/* harmony import */ var _components_submit_puzzle_submit_puzzle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/submit-puzzle/submit-puzzle.component */ 6434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    { path: 'test-page', component: _components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_0__.GameBoardComponent, data: { testMode: true } },
    { path: 'test-page2', component: _components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_0__.GameBoardComponent, data: { testMode2: true } },
    { path: 'library', component: _components_library_library_component__WEBPACK_IMPORTED_MODULE_1__.LibraryComponent },
    { path: 'submit', component: _components_submit_puzzle_submit_puzzle_component__WEBPACK_IMPORTED_MODULE_2__.SubmitPuzzleComponent },
    { path: '', component: _components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_0__.GameBoardComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { useHash: true }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
    constructor() {
        this.title = 'cornerz';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "main-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100dvh;\n  max-height: 100dvh;\n  padding: 0.6rem 0.6rem 0.5rem;\n  background: var(--app-bg);\n  font-family: var(--font-sans);\n}\n.main-container[_ngcontent-%COMP%]   app-game-board[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: 1;\n  min-height: 0;\n  display: flex;\n  justify-content: center;\n}\n.main-container[_ngcontent-%COMP%]   app-submit-puzzle[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: 1;\n  min-height: 0;\n}\n.main-container[_ngcontent-%COMP%]   app-library[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: 1;\n  min-height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBRUo7QUFDRTtFQUNFLFdBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtBQUNKO0FBRUU7RUFDRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7QUFBSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGhlaWdodDogMTAwZHZoO1xuICBtYXgtaGVpZ2h0OiAxMDBkdmg7XG4gIHBhZGRpbmc6IDAuNnJlbSAwLjZyZW0gMC41cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmcpO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zYW5zKTtcbiAgYXBwLWdhbWUtYm9hcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDE7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgYXBwLXN1Ym1pdC1wdXp6bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDE7XG4gICAgbWluLWhlaWdodDogMDtcbiAgfVxuXG4gIGFwcC1saWJyYXJ5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gIH1cbn1cbiJdfQ== */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/game-board/game-board.component */ 8987);
/* harmony import */ var _components_game_tile_game_tile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/game-tile/game-tile.component */ 3506);
/* harmony import */ var _components_win_modal_win_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/win-modal/win-modal.component */ 7958);
/* harmony import */ var _directives_fit_text_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/fit-text.directive */ 6812);
/* harmony import */ var _components_library_library_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/library/library.component */ 2923);
/* harmony import */ var _components_submit_puzzle_submit_puzzle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/submit-puzzle/submit-puzzle.component */ 6434);
/* harmony import */ var _components_stats_modal_stats_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/stats-modal/stats-modal.component */ 3289);
/* harmony import */ var _services_puzzle_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/puzzle-provider */ 5080);
/* harmony import */ var _services_static_puzzle_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/static-puzzle-provider */ 6127);
/* harmony import */ var _services_stats_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/stats-provider */ 9792);
/* harmony import */ var _services_local_stats_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/local-stats-provider */ 5578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
        { provide: _services_puzzle_provider__WEBPACK_IMPORTED_MODULE_9__.PuzzleProvider, useClass: _services_static_puzzle_provider__WEBPACK_IMPORTED_MODULE_10__.StaticPuzzleProvider },
        { provide: _services_stats_provider__WEBPACK_IMPORTED_MODULE_11__.StatsProvider, useClass: _services_local_stats_provider__WEBPACK_IMPORTED_MODULE_12__.LocalStatsProvider }
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.DragDropModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_2__.GameBoardComponent,
        _components_game_tile_game_tile_component__WEBPACK_IMPORTED_MODULE_3__.GameTileComponent,
        _components_win_modal_win_modal_component__WEBPACK_IMPORTED_MODULE_4__.WinModalComponent,
        _directives_fit_text_directive__WEBPACK_IMPORTED_MODULE_5__.FitTextDirective,
        _components_library_library_component__WEBPACK_IMPORTED_MODULE_6__.LibraryComponent,
        _components_submit_puzzle_submit_puzzle_component__WEBPACK_IMPORTED_MODULE_7__.SubmitPuzzleComponent,
        _components_stats_modal_stats_modal_component__WEBPACK_IMPORTED_MODULE_8__.StatsModalComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.DragDropModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule] }); })();


/***/ }),

/***/ 8987:
/*!***************************************************************!*\
  !*** ./src/app/components/game-board/game-board.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameBoardComponent": () => (/* binding */ GameBoardComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _models_puzzle_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/puzzle.model */ 6927);
/* harmony import */ var _constants_grid_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/grid.constants */ 117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _services_puzzle_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/puzzle-provider */ 5080);
/* harmony import */ var _services_progress_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/progress.service */ 8458);
/* harmony import */ var _services_puzzle_validator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/puzzle-validator.service */ 8390);
/* harmony import */ var _services_stats_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/stats-provider */ 9792);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _game_tile_game_tile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../game-tile/game-tile.component */ 3506);
/* harmony import */ var _win_modal_win_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../win-modal/win-modal.component */ 7958);
/* harmony import */ var _directives_fit_text_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../directives/fit-text.directive */ 6812);
/* harmony import */ var _stats_modal_stats_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../stats-modal/stats-modal.component */ 3289);
















function GameBoardComponent_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("by ", ctx_r10.currentPuzzle.author, "");
} }
function GameBoardComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GameBoardComponent_div_1_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r12.statsModalOpen = true); })("keydown.enter", function GameBoardComponent_div_1_div_8_Template_div_keydown_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r14.statsModalOpen = true); })("keydown.space", function GameBoardComponent_div_1_div_8_Template_div_keydown_space_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); ctx_r15.statsModalOpen = true; return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event.preventDefault()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-label", ctx_r11.currentStreak + " day streak. View stats.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" \uD83D\uDD25 ", ctx_r11.currentStreak, " ");
} }
function GameBoardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "CORNERZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 14)(4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, GameBoardComponent_div_1_span_6_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, GameBoardComponent_div_1_div_8_Template, 2, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GameBoardComponent_div_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r16.statsModalOpen = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "rect", 21)(12, "rect", 22)(13, "rect", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GameBoardComponent_div_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r18.openHelp()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.isDailyPuzzleMode ? "Daily Puzzle" : ctx_r0.currentPuzzle.title || "Puzzle");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.currentPuzzle.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.currentStreak > 0);
} }
function GameBoardComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 36);
} if (rf & 2) {
    const i_r22 = ctx.index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("disabled", ctx_r19.isSpotDisabled(i_r22));
} }
function GameBoardComponent_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 36);
} }
function GameBoardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "div", 29)(3, "div", 30)(4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, GameBoardComponent_div_2_div_6_Template, 1, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, GameBoardComponent_div_2_div_8_Template, 1, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.skeletonCells);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.skeletonTiles);
} }
function GameBoardComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Loading puzzle...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function GameBoardComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 38)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.error);
} }
function GameBoardComponent_div_5_div_1_div_2_app_game_tile_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-game-tile", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("cdkDragStarted", function GameBoardComponent_div_5_div_1_div_2_app_game_tile_1_Template_app_game_tile_cdkDragStarted_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r36.onDragStarted($event)); })("cdkDragEnded", function GameBoardComponent_div_5_div_1_div_2_app_game_tile_1_Template_app_game_tile_cdkDragEnded_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r38.onDragEnded($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("word", ctx_r33.gridTiles[i_r32].word)("isDraggable", ctx_r33.isGridTileDraggable(i_r32))("isSelected", ctx_r33.isGridCellSelected(i_r32))("cdkDragDisabled", !ctx_r33.isGridTileDraggable(i_r32));
} }
function GameBoardComponent_div_5_div_1_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keydown.enter", function GameBoardComponent_div_5_div_1_div_2_div_2_Template_div_keydown_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42); const i_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); ctx_r40.onCenterIndicatorClick(i_r32); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event.stopPropagation()); })("keydown.space", function GameBoardComponent_div_5_div_1_div_2_div_2_Template_div_keydown_space_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42); const i_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); ctx_r43.onCenterIndicatorClick(i_r32); $event.stopPropagation(); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event.preventDefault()); })("click", function GameBoardComponent_div_5_div_1_div_2_div_2_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42); const i_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); ctx_r45.onCenterIndicatorClick(i_r32); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-difficulty", ctx_r34.getCenterDifficulty(i_r32))("aria-label", "Show solution for category " + ctx_r34.getCenterIndicatorCategory(i_r32));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r34.getCenterIndicatorArrow(i_r32));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("appFitText", 12)("fitTextWrap", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r34.getCenterIndicatorCategory(i_r32));
} }
function GameBoardComponent_div_5_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 58);
} }
const _c0 = function (a0) { return [a0]; };
function GameBoardComponent_div_5_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("cdkDropListDropped", function GameBoardComponent_div_5_div_1_div_2_Template_div_cdkDropListDropped_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r49); const i_r32 = restoredCtx.index; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r48.dropOnCell($event, i_r32)); })("keydown.enter", function GameBoardComponent_div_5_div_1_div_2_Template_div_keydown_enter_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r49); const i_r32 = restoredCtx.index; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r50.onGridCellClick(i_r32)); })("keydown.space", function GameBoardComponent_div_5_div_1_div_2_Template_div_keydown_space_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r49); const i_r32 = restoredCtx.index; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); ctx_r51.onGridCellClick(i_r32); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event.preventDefault()); })("click", function GameBoardComponent_div_5_div_1_div_2_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r49); const i_r32 = restoredCtx.index; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r52.onGridCellClick(i_r32)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, GameBoardComponent_div_5_div_1_div_2_app_game_tile_1_Template, 1, 4, "app-game-tile", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, GameBoardComponent_div_5_div_1_div_2_div_2_Template, 5, 6, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, GameBoardComponent_div_5_div_1_div_2_div_3_Template, 1, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tile_r31 = ctx.$implicit;
    const i_r32 = ctx.index;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("occupied", ctx_r27.gridTiles[i_r32] !== null && !ctx_r27.isSpotDisabled(i_r32))("disabled", ctx_r27.isSpotDisabled(i_r32))("completed", ctx_r27.isCellCompleted(i_r32))("corner-locked", ctx_r27.isCornerLocked(i_r32))("movable-corner", ctx_r27.isMovableCorner(i_r32))("drop-target", ctx_r27.isValidDropTarget(i_r32) && ctx_r27.gridTiles[i_r32] === null)("selected", ctx_r27.isGridCellSelected(i_r32))("bounce", ctx_r27.isBouncing(i_r32))("shake", ctx_r27.isShaking(i_r32));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", "grid-cell-" + i_r32)("cdkDropListDisabled", ctx_r27.isSpotDisabled(i_r32))("cdkDropListData", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](29, _c0, tile_r31))("cdkDropListConnectedTo", ctx_r27.getConnectedDropLists());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-difficulty", ctx_r27.getCellDifficulty(i_r32))("tabindex", ctx_r27.isCellInteractive(i_r32) ? 0 : null)("role", ctx_r27.isCellInteractive(i_r32) ? "button" : null)("aria-label", ctx_r27.isCellInteractive(i_r32) ? ctx_r27.getCellAriaLabel(i_r32) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r27.gridTiles[i_r32] && !ctx_r27.isSpotDisabled(i_r32));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r27.isSpotDisabled(i_r32) && ctx_r27.isCenterIndicatorActive(i_r32));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r27.isSpotDisabled(i_r32) && !ctx_r27.isCenterIndicatorActive(i_r32));
} }
function GameBoardComponent_div_5_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keydown.enter", function GameBoardComponent_div_5_div_1_div_5_Template_div_keydown_enter_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r56); const i_r54 = restoredCtx.index; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); ctx_r55.onBankTileClick(i_r54); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event.stopPropagation()); })("keydown.space", function GameBoardComponent_div_5_div_1_div_5_Template_div_keydown_space_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r56); const i_r54 = restoredCtx.index; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); ctx_r57.onBankTileClick(i_r54); $event.stopPropagation(); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event.preventDefault()); })("click", function GameBoardComponent_div_5_div_1_div_5_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r56); const i_r54 = restoredCtx.index; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); ctx_r58.onBankTileClick(i_r54); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "app-game-tile", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("cdkDragStarted", function GameBoardComponent_div_5_div_1_div_5_Template_app_game_tile_cdkDragStarted_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r56); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r59.onDragStarted($event)); })("cdkDragEnded", function GameBoardComponent_div_5_div_1_div_5_Template_app_game_tile_cdkDragEnded_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r56); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r60.onDragEnded($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tile_r53 = ctx.$implicit;
    const i_r54 = ctx.index;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("--tile-index", i_r54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("selected", ctx_r28.isBankTileSelected(i_r54));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-pressed", ctx_r28.isBankTileSelected(i_r54))("aria-label", "Tile " + tile_r53.word);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("word", tile_r53.word)("isDraggable", !ctx_r28.isResolvingInvalidLine)("isSelected", ctx_r28.isBankTileSelected(i_r54))("cdkDragDisabled", ctx_r28.isResolvingInvalidLine);
} }
function GameBoardComponent_div_5_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 60)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Next daily puzzle in ", ctx_r29.dailyCountdown, "");
} }
function GameBoardComponent_div_5_div_1_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GameBoardComponent_div_5_div_1_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r61.onReopenWinModal()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " View Results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function GameBoardComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, GameBoardComponent_div_5_div_1_div_2_Template, 4, 31, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 45)(4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("cdkDropListDropped", function GameBoardComponent_div_5_div_1_Template_div_cdkDropListDropped_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r63.dropToBank($event)); })("click", function GameBoardComponent_div_5_div_1_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r64); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r65.onBankClick()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, GameBoardComponent_div_5_div_1_div_5_Template, 2, 10, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, GameBoardComponent_div_5_div_1_div_6_Template, 3, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, GameBoardComponent_div_5_div_1_button_7_Template, 2, 0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r24.gridTiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("cdkDropListSortingDisabled", true)("cdkDropListData", ctx_r24.availableTiles)("cdkDropListConnectedTo", ctx_r24.getConnectedDropLists());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r24.availableTiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r24.isDailyPuzzleMode && !ctx_r24.isDailyLocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r24.gameWon && !ctx_r24.winModalOpen);
} }
function GameBoardComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 62)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Come back tomorrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "You already solved today's puzzle.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Next puzzle in ", ctx_r25.dailyCountdown, "");
} }
function GameBoardComponent_div_5_app_win_modal_3_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-win-modal", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("playAgain", function GameBoardComponent_div_5_app_win_modal_3_Template_app_win_modal_playAgain_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r66.onPlayAgain()); })("nextPuzzle", function GameBoardComponent_div_5_app_win_modal_3_Template_app_win_modal_nextPuzzle_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r67); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r68.onNextPuzzle()); })("close", function GameBoardComponent_div_5_app_win_modal_3_Template_app_win_modal_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r67); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r69.onCloseWinModal()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("mistakes", ctx_r26.mistakes)("puzzleId", (ctx_r26.currentPuzzle == null ? null : ctx_r26.currentPuzzle.id) || 1)("categories", ctx_r26.completedCategories)("completionOrder", ctx_r26.lineCompletionOrder)("gameSequence", ctx_r26.gameSequence);
} }
function GameBoardComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, GameBoardComponent_div_5_div_1_Template, 8, 7, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, GameBoardComponent_div_5_div_2_Template, 7, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, GameBoardComponent_div_5_app_win_modal_3_Template, 1, 5, "app-win-modal", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.currentPuzzle && ctx_r4.currentPuzzle.words.length > 0 && (!ctx_r4.isDailyLocked || ctx_r4.keepBoardVisibleAfterWin));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.currentPuzzle && ctx_r4.currentPuzzle.words.length > 0 && ctx_r4.isDailyLocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.gameWon && ctx_r4.winModalOpen);
} }
function GameBoardComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GameBoardComponent_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r70.closeHelp()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GameBoardComponent_div_8_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 67)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "How To Play");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GameBoardComponent_div_8_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r71); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r73.closeHelp()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ul")(8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Place 12 words on the outer edge of the 4x4 grid. The 4 center cells are disabled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Complete 4 lines: top, bottom, left, and right. Each line must match exactly one category.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Corner words are shared between two categories and connect intersecting lines.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Use drag and drop, or tap a tile then tap a cell. You can swap by dropping on an occupied cell.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Correct lines lock as solved. Incorrect guesses return only newly placed tiles and increase mistakes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Win when all 4 lines are solved.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 69)(21, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GameBoardComponent_div_8_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r71); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r74.closeHelp()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Puzzle Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GameBoardComponent_div_8_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r71); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r75.closeHelp()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Submit Your Own");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} }
function GameBoardComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GameBoardComponent_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r76.closeSolution()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GameBoardComponent_div_9_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 74)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GameBoardComponent_div_9_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r77); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r79.closeSolution()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-label", "Solution for " + ctx_r6.activeSolution.name)("data-difficulty", ctx_r6.activeSolution.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r6.activeSolution.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-difficulty", ctx_r6.activeSolution.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r6.getDifficultyLabel(ctx_r6.activeSolution.difficulty));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", ctx_r6.activeSolution.solutionHtml, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
function GameBoardComponent_app_stats_modal_10_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-stats-modal", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("close", function GameBoardComponent_app_stats_modal_10_Template_app_stats_modal_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r80.statsModalOpen = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function GameBoardComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "One Away!");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function GameBoardComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GameBoardComponent_div_12_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r82.dismissCornerHint()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\u21C4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Tip: You can rearrange tiles within a completed line \u2014 corners can still be swapped!");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GameBoardComponent_div_12_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r83); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r84.dismissCornerHint()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
class GameBoardComponent {
    constructor(route, router, sanitizer, puzzleProvider, progressService, validator, statsProvider) {
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.puzzleProvider = puzzleProvider;
        this.progressService = progressService;
        this.validator = validator;
        this.statsProvider = statsProvider;
        this.gridTiles = new Array(16).fill(null);
        this.availableTiles = [];
        this.currentPuzzle = null;
        this.loading = true;
        this.error = null;
        this.disabledSpots = _constants_grid_constants__WEBPACK_IMPORTED_MODULE_1__.DISABLED_SPOTS;
        // Track completed lines (green and locked)
        this.completedLines = new Set();
        // Track which category is assigned to each completed line
        this.lineCategories = new Map();
        this.lineDifficulties = new Map();
        this.lineCategoryData = new Map();
        // Solution modal state
        this.activeSolution = null;
        // Animation state: cells currently playing an animation
        this.bouncingCells = new Set();
        this.shakingCells = new Set();
        // Drag state: true while a tile is being dragged
        this.isDragging = false;
        this.isResolvingInvalidLine = false;
        // Tap-to-place: currently selected tile source
        this.selectedTile = null;
        // Line completion order (difficulty values in order lines were solved)
        this.lineCompletionOrder = [];
        // Interleaved play sequence: difficulty 1-4 = correct line, 0 = mistake
        this.gameSequence = [];
        // Scoring
        this.mistakes = 0;
        this.gameWon = false;
        this.winModalOpen = false;
        this.statsModalOpen = false;
        this.currentStreak = 0;
        this.showCornerHint = false;
        this.showOneAway = false;
        this.cornerHintKey = 'cornerz-corner-hint-shown';
        this.keepBoardVisibleAfterWin = false;
        this.isHelpOpen = false;
        this.isDailyPuzzleMode = false;
        this.dailyPuzzleId = null;
        this.isDailyLocked = false;
        this.dailyCountdown = '';
        this.countdownTimer = null;
        this.lines = _constants_grid_constants__WEBPACK_IMPORTED_MODULE_1__.LINES;
        this.centerIndicators = _constants_grid_constants__WEBPACK_IMPORTED_MODULE_1__.CENTER_INDICATORS;
        // Skeleton loader placeholders
        this.skeletonCells = new Array(16).fill(0);
        this.skeletonTiles = new Array(12).fill(0);
        // Screen reader announcement (aria-live)
        this.announcement = '';
    }
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    ngOnInit() {
        this.currentStreak = this.statsProvider.getAggregate().currentStreak;
        this.startDailyCountdown();
        const testMode = this.route.snapshot.data['testMode'];
        const testMode2 = this.route.snapshot.data['testMode2'];
        if (testMode || testMode2) {
            this.isDailyPuzzleMode = false;
            this.loadPuzzle(-1);
        }
        else {
            this.route.queryParams.subscribe(params => {
                const puzzleParam = params['puzzle'];
                if (puzzleParam) {
                    this.isDailyPuzzleMode = false;
                    this.dailyPuzzleId = null;
                    const puzzleId = parseInt(puzzleParam, 10);
                    this.loadPuzzle(puzzleId);
                }
                else {
                    this.loadDailyPuzzle();
                }
            });
        }
    }
    ngOnDestroy() {
        if (this.countdownTimer) {
            clearInterval(this.countdownTimer);
            this.countdownTimer = null;
        }
        if (this.oneAwayTimer)
            clearTimeout(this.oneAwayTimer);
        if (this.announceTimer)
            clearTimeout(this.announceTimer);
    }
    // --- Accessibility helpers ---
    /** Queue a polite screen reader announcement (clearing first so repeats re-announce). */
    announce(message) {
        this.announcement = '';
        if (this.announceTimer)
            clearTimeout(this.announceTimer);
        this.announceTimer = setTimeout(() => { this.announcement = message; }, 50);
    }
    isCellInteractive(cellIndex) {
        return !this.isSpotDisabled(cellIndex) && !this.isCornerLocked(cellIndex) && !this.isDailyLocked;
    }
    getCellAriaLabel(cellIndex) {
        const row = Math.floor(cellIndex / 4) + 1;
        const col = (cellIndex % 4) + 1;
        const tile = this.gridTiles[cellIndex];
        const base = `Grid cell row ${row}, column ${col}`;
        if (!tile) {
            return this.selectedTile ? `${base}, empty. Press Enter to place the selected tile.` : `${base}, empty`;
        }
        const state = this.isGridCellSelected(cellIndex)
            ? ', selected'
            : this.isCellInCompletedLine(cellIndex) ? ', in a solved line' : '';
        return `${base}: ${tile.word}${state}`;
    }
    onEscapeKey() {
        if (this.activeSolution) {
            this.closeSolution();
        }
        else if (this.isHelpOpen) {
            this.closeHelp();
        }
        else if (this.statsModalOpen) {
            this.statsModalOpen = false;
        }
        else if (this.winModalOpen) {
            this.winModalOpen = false;
        }
        else if (this.selectedTile) {
            this.selectedTile = null;
            this.announce('Selection cleared');
        }
    }
    onDeleteKey() {
        // Return the selected grid tile to the bank (keyboard alternative to clicking the bank)
        if (this.selectedTile?.source === 'grid') {
            const word = this.gridTiles[this.selectedTile.index]?.word;
            this.onBankClick();
            if (word)
                this.announce(`${word} returned to the bank`);
        }
    }
    loadDailyPuzzle() {
        this.isDailyPuzzleMode = true;
        this.puzzleProvider.getDailyPuzzle().subscribe({
            next: (puzzle) => {
                this.dailyPuzzleId = puzzle.id;
                this.loadPuzzle(puzzle.id);
            },
            error: () => {
                this.error = 'Failed to load daily puzzle';
                this.loading = false;
            }
        });
    }
    loadPuzzle(puzzleId, updateUrl = false) {
        this.loading = true;
        this.error = null;
        this.selectedTile = null;
        this.gameWon = false;
        this.winModalOpen = false;
        this.keepBoardVisibleAfterWin = false;
        this.mistakes = 0;
        this.isDailyLocked = false;
        if (updateUrl) {
            this.router.navigate([], {
                relativeTo: this.route,
                queryParams: { puzzle: puzzleId },
                queryParamsHandling: 'merge'
            });
        }
        this.puzzleProvider.getPuzzleById(puzzleId).subscribe({
            next: (puzzle) => {
                if (puzzle) {
                    this.currentPuzzle = puzzle;
                    const shuffledWords = this.shuffleArray(puzzle.words);
                    this.availableTiles = shuffledWords.map((word, index) => ({
                        id: index + 1,
                        word: word
                    }));
                    this.gridTiles = new Array(16).fill(null);
                    this.completedLines = new Set();
                    this.lineCategories = new Map();
                    this.lineDifficulties = new Map();
                    this.lineCategoryData = new Map();
                    this.lineCompletionOrder = [];
                    this.gameSequence = [];
                    if (puzzleId === -1 && this.route.snapshot.data['testMode']) {
                        this.prePopulateTestPuzzle();
                    }
                    else if (puzzleId === -1 && this.route.snapshot.data['testMode2']) {
                        this.prePopulateTestPuzzle2();
                    }
                    this.updateDailyLockState();
                    this.restoreLockedDailyBoardState();
                }
                else {
                    this.error = `Puzzle ${puzzleId} not found. Available puzzles: 1`;
                    this.loadPuzzle(1);
                }
                this.loading = false;
            },
            error: () => {
                this.error = 'Failed to load puzzle data';
                this.loading = false;
            }
        });
    }
    prePopulateTestPuzzle() {
        // Place tiles for completed Top and Left lines
        const placements = [
            [0, 'COUNTERPRODUCTIVE'],
            [1, 'BAMBOOZLE'],
            [2, 'HI'],
            [3, 'GO'],
            [4, 'PERPENDICULAR'],
            [8, 'ME'],
            [12, 'EXTRAORDINARY'], // Left + Bottom corner (only Left done)
        ];
        for (const [cellIndex, word] of placements) {
            const tileIndex = this.availableTiles.findIndex(t => t.word === word);
            if (tileIndex !== -1) {
                this.gridTiles[cellIndex] = this.availableTiles[tileIndex];
                this.availableTiles.splice(tileIndex, 1);
            }
        }
        // Mark Top and Left as completed
        this.completedLines.add('top');
        this.completedLines.add('left');
        // Set category info for completed lines
        const topCategory = this.currentPuzzle.categories.find(c => this.arraysEqual([...c.words].sort(), ['COUNTERPRODUCTIVE', 'BAMBOOZLE', 'HI', 'GO'].sort()));
        const leftCategory = this.currentPuzzle.categories.find(c => this.arraysEqual([...c.words].sort(), ['COUNTERPRODUCTIVE', 'PERPENDICULAR', 'ME', 'EXTRAORDINARY'].sort()));
        if (topCategory) {
            this.lineCategories.set('top', topCategory.name);
            this.lineDifficulties.set('top', topCategory.difficulty);
            this.lineCategoryData.set('top', topCategory);
        }
        if (leftCategory) {
            this.lineCategories.set('left', leftCategory.name);
            this.lineDifficulties.set('left', leftCategory.difficulty);
            this.lineCategoryData.set('left', leftCategory);
        }
    }
    prePopulateTestPuzzle2() {
        // Place all words except JUXTAPOSITION and RAZZMATAZZ (bottom inner cells)
        // Grid layout for test puzzle:
        //   [0]=COUNTERPRODUCTIVE  [1]=BAMBOOZLE  [2]=HI             [3]=GO
        //   [4]=PERPENDICULAR      [5-6]=disabled [5-6]=disabled     [7]=QUINTESSENTIAL
        //   [8]=ME                 [9-10]=disabled                   [11]=UP
        //   [12]=EXTRAORDINARY     [13]=JUXTAPOSITION [14]=RAZZMATAZZ [15]=AX
        const placements = [
            [0, 'COUNTERPRODUCTIVE'],
            [1, 'BAMBOOZLE'],
            [2, 'HI'],
            [3, 'GO'],
            [4, 'PERPENDICULAR'],
            [7, 'QUINTESSENTIAL'],
            [8, 'ME'],
            [11, 'UP'],
            [12, 'EXTRAORDINARY'],
            [15, 'AX'],
        ];
        for (const [cellIndex, word] of placements) {
            const tileIndex = this.availableTiles.findIndex(t => t.word === word);
            if (tileIndex !== -1) {
                this.gridTiles[cellIndex] = this.availableTiles[tileIndex];
                this.availableTiles.splice(tileIndex, 1);
            }
        }
        // Mark top, left, right as completed
        this.completedLines.add('top');
        this.completedLines.add('left');
        this.completedLines.add('right');
        const cats = this.currentPuzzle.categories;
        const topWords = ['BAMBOOZLE', 'COUNTERPRODUCTIVE', 'GO', 'HI'];
        const leftWords = ['COUNTERPRODUCTIVE', 'EXTRAORDINARY', 'ME', 'PERPENDICULAR'];
        const rightWords = ['AX', 'GO', 'QUINTESSENTIAL', 'UP'];
        const topCat = cats.find(c => this.arraysEqual([...c.words].sort(), topWords));
        const leftCat = cats.find(c => this.arraysEqual([...c.words].sort(), leftWords));
        const rightCat = cats.find(c => this.arraysEqual([...c.words].sort(), rightWords));
        for (const [lineName, cat] of [['top', topCat], ['left', leftCat], ['right', rightCat]]) {
            this.lineCategories.set(lineName, cat.name);
            this.lineDifficulties.set(lineName, cat.difficulty);
            this.lineCategoryData.set(lineName, cat);
            this.lineCompletionOrder.push(cat.difficulty);
            this.gameSequence.push(cat.difficulty);
        }
    }
    // --- Drag-and-drop handlers ---
    onDragStarted(_event) {
        this.isDragging = true;
        this.selectedTile = null;
    }
    onDragEnded(_event) {
        this.isDragging = false;
    }
    dropOnCell(event, cellIndex) {
        if (this.isDailyLocked)
            return;
        if (this.isResolvingInvalidLine)
            return;
        if (this.isSpotDisabled(cellIndex) || this.isCornerLocked(cellIndex)) {
            return;
        }
        if (event.previousContainer === event.container) {
            return;
        }
        if (event.previousContainer.id === 'bank-list') {
            if (this.isCellInCompletedLine(cellIndex)) {
                return;
            }
            const tile = event.previousContainer.data[event.previousIndex];
            if (this.gridTiles[cellIndex] !== null) {
                const existingTile = this.gridTiles[cellIndex];
                this.availableTiles.splice(event.previousIndex, 1, existingTile);
                this.gridTiles[cellIndex] = tile;
            }
            else {
                this.gridTiles[cellIndex] = tile;
                this.availableTiles.splice(event.previousIndex, 1);
            }
        }
        else if (event.previousContainer.id.startsWith('grid-cell-')) {
            const fromIndex = parseInt(event.previousContainer.id.split('-')[2]);
            if (!this.canMoveBetweenCells(fromIndex, cellIndex)) {
                return;
            }
            const movingTile = this.gridTiles[fromIndex];
            if (movingTile) {
                if (this.gridTiles[cellIndex] !== null) {
                    const destinationTile = this.gridTiles[cellIndex];
                    this.gridTiles[fromIndex] = destinationTile;
                    this.gridTiles[cellIndex] = movingTile;
                }
                else {
                    this.gridTiles[cellIndex] = movingTile;
                    this.gridTiles[fromIndex] = null;
                }
            }
        }
        this.playBounce(cellIndex);
        this.checkForCompletedLines();
    }
    dropToBank(event) {
        if (this.isDailyLocked)
            return;
        if (this.isResolvingInvalidLine)
            return;
        if (event.previousContainer !== event.container) {
            if (event.previousContainer.id.startsWith('grid-cell-')) {
                const gridIndex = parseInt(event.previousContainer.id.split('-')[2]);
                if (this.isCellInCompletedLine(gridIndex)) {
                    return;
                }
                const tile = this.gridTiles[gridIndex];
                if (tile) {
                    this.availableTiles.push(tile);
                    this.gridTiles[gridIndex] = null;
                }
            }
        }
        else {
            (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__.moveItemInArray)(event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    // --- Tap-to-place handlers ---
    onBankTileClick(index) {
        if (this.isDailyLocked)
            return;
        if (this.isDragging || this.isResolvingInvalidLine)
            return;
        if (this.selectedTile?.source === 'bank' && this.selectedTile.index === index) {
            this.selectedTile = null;
            this.announce('Selection cleared');
            return;
        }
        this.selectedTile = { source: 'bank', index };
        this.announce(`${this.availableTiles[index].word} selected. Choose a grid cell to place it.`);
    }
    onGridCellClick(cellIndex) {
        if (this.isDailyLocked)
            return;
        if (this.isDragging || this.isResolvingInvalidLine || this.isSpotDisabled(cellIndex) || this.isCornerLocked(cellIndex)) {
            return;
        }
        if (this.selectedTile) {
            // Place or swap the selected tile into this cell
            if (this.selectedTile.source === 'bank') {
                if (this.isCellInCompletedLine(cellIndex)) {
                    this.selectedTile = null;
                    return;
                }
                const tile = this.availableTiles[this.selectedTile.index];
                if (this.gridTiles[cellIndex] !== null) {
                    const existingTile = this.gridTiles[cellIndex];
                    this.availableTiles.splice(this.selectedTile.index, 1, existingTile);
                }
                else {
                    this.availableTiles.splice(this.selectedTile.index, 1);
                }
                this.gridTiles[cellIndex] = tile;
            }
            else if (this.selectedTile.source === 'grid') {
                const fromIndex = this.selectedTile.index;
                if (fromIndex === cellIndex) {
                    this.selectedTile = null;
                    return;
                }
                if (!this.canMoveBetweenCells(fromIndex, cellIndex)) {
                    this.selectedTile = null;
                    return;
                }
                const movingTile = this.gridTiles[fromIndex];
                if (movingTile) {
                    this.gridTiles[fromIndex] = this.gridTiles[cellIndex];
                    this.gridTiles[cellIndex] = movingTile;
                }
            }
            this.selectedTile = null;
            const placedWord = this.gridTiles[cellIndex]?.word;
            if (placedWord)
                this.announce(`${placedWord} placed`);
            this.playBounce(cellIndex);
            this.checkForCompletedLines();
        }
        else if (this.gridTiles[cellIndex] !== null) {
            // Select this grid tile
            this.selectedTile = { source: 'grid', index: cellIndex };
            this.announce(`${this.gridTiles[cellIndex].word} selected. Choose a cell to move it, or press Delete to return it to the bank.`);
        }
    }
    onBankClick() {
        if (this.isDailyLocked)
            return;
        if (this.isDragging || this.isResolvingInvalidLine)
            return;
        // If a grid tile is selected, return it to the bank
        if (this.selectedTile?.source === 'grid') {
            const gridIndex = this.selectedTile.index;
            if (this.isCellInCompletedLine(gridIndex)) {
                this.selectedTile = null;
                return;
            }
            const tile = this.gridTiles[gridIndex];
            if (tile) {
                this.availableTiles.push(tile);
                this.gridTiles[gridIndex] = null;
            }
            this.selectedTile = null;
        }
    }
    // --- Selection state helpers ---
    isBankTileSelected(index) {
        return this.selectedTile?.source === 'bank' && this.selectedTile.index === index;
    }
    isGridCellSelected(cellIndex) {
        return this.selectedTile?.source === 'grid' && this.selectedTile.index === cellIndex;
    }
    isGridTileDraggable(cellIndex) {
        return !this.isDailyLocked && !this.isCornerLocked(cellIndex) && !this.isResolvingInvalidLine;
    }
    isValidDropTarget(cellIndex) {
        if (this.isDailyLocked || this.isSpotDisabled(cellIndex) || this.isCornerLocked(cellIndex) || this.isResolvingInvalidLine) {
            return false;
        }
        // Show targets when dragging OR when a tile is selected
        return this.isDragging || this.selectedTile !== null;
    }
    // --- Animation helpers ---
    playBounce(cellIndex) {
        this.bouncingCells.add(cellIndex);
        setTimeout(() => this.bouncingCells.delete(cellIndex), 300);
    }
    playShake(positions) {
        positions.forEach(pos => this.shakingCells.add(pos));
        setTimeout(() => {
            positions.forEach(pos => this.shakingCells.delete(pos));
        }, 400);
    }
    isBouncing(cellIndex) {
        return this.bouncingCells.has(cellIndex);
    }
    isShaking(cellIndex) {
        return this.shakingCells.has(cellIndex);
    }
    // --- Connected drop lists ---
    getConnectedDropLists() {
        const gridCells = Array.from({ length: 16 }, (_, i) => `grid-cell-${i}`)
            .filter(cellId => {
            const index = parseInt(cellId.split('-')[2]);
            return !this.disabledSpots.has(index);
        });
        return ['bank-list', ...gridCells];
    }
    // --- Grid state helpers ---
    isSpotDisabled(index) {
        return this.disabledSpots.has(index);
    }
    isCellInCompletedLine(index) {
        return Object.entries(this.lines).some(([lineName, positions]) => positions.includes(index) && this.completedLines.has(lineName));
    }
    isCellCompleted(index) {
        return this.isCellInCompletedLine(index);
    }
    // --- Locking / movement rules ---
    getCompletedLinesForCell(index) {
        return Object.entries(this.lines)
            .filter(([lineName, positions]) => positions.includes(index) && this.completedLines.has(lineName))
            .map(([lineName]) => lineName);
    }
    isCornerCell(index) {
        return index === 0 || index === 3 || index === 12 || index === 15;
    }
    isCornerLocked(index) {
        if (!this.isCornerCell(index))
            return false;
        const completedLinesForCell = this.getCompletedLinesForCell(index);
        return completedLinesForCell.length === 2;
    }
    isMovableCorner(index) {
        if (!this.isCornerCell(index))
            return false;
        return this.getCompletedLinesForCell(index).length === 1;
    }
    maybeShowCornerHint() {
        if (this.completedLines.size === 0)
            return;
        if (localStorage.getItem(this.cornerHintKey))
            return;
        this.showCornerHint = true;
        localStorage.setItem(this.cornerHintKey, '1');
    }
    dismissCornerHint() {
        this.showCornerHint = false;
    }
    triggerOneAwayIfApplicable(submittedWords) {
        if (!this.currentPuzzle)
            return false;
        const isOneAway = this.currentPuzzle.categories
            .filter(cat => !this.completedLines.has(this.getCategoryLineName(cat)))
            .some(cat => {
            const matches = submittedWords.filter(w => cat.words.includes(w)).length;
            return matches === 3;
        });
        if (!isOneAway)
            return false;
        this.showOneAway = true;
        if (this.oneAwayTimer)
            clearTimeout(this.oneAwayTimer);
        this.oneAwayTimer = setTimeout(() => { this.showOneAway = false; }, 3000);
        return true;
    }
    getCategoryLineName(cat) {
        // Returns the line name if this category is already completed, otherwise empty string
        for (const [lineName, data] of this.lineCategoryData.entries()) {
            if (data === cat)
                return lineName;
        }
        return '';
    }
    canMoveBetweenCells(fromIndex, toIndex) {
        if (this.isCornerLocked(fromIndex) || this.isCornerLocked(toIndex))
            return false;
        const fromCompleted = this.getCompletedLinesForCell(fromIndex);
        const toCompleted = this.getCompletedLinesForCell(toIndex);
        if (fromCompleted.length === 0 && toCompleted.length === 0) {
            return true;
        }
        return fromCompleted.some(lineName => toCompleted.includes(lineName));
    }
    // --- Line checking ---
    checkForCompletedLines() {
        if (this.isDailyLocked)
            return;
        if (this.isResolvingInvalidLine)
            return;
        if (!this.currentPuzzle || !this.currentPuzzle.categories)
            return;
        Object.entries(this.lines).forEach(([lineName, positions]) => {
            if (this.completedLines.has(lineName))
                return;
            const lineWords = positions
                .map(pos => this.gridTiles[pos]?.word)
                .filter((word) => Boolean(word));
            if (lineWords.length === 4) {
                const matchingCategory = this.currentPuzzle.categories.find(category => this.arraysEqual([...lineWords].sort(), [...category.words].sort()));
                if (matchingCategory) {
                    this.completedLines.add(lineName);
                    this.lineCategories.set(lineName, matchingCategory.name);
                    this.lineDifficulties.set(lineName, matchingCategory.difficulty);
                    this.lineCategoryData.set(lineName, matchingCategory);
                    this.lineCompletionOrder.push(matchingCategory.difficulty);
                    this.gameSequence.push(matchingCategory.difficulty);
                    this.announce(`${lineName} line solved: ${matchingCategory.name}. ${this.completedLines.size} of 4 lines complete.`);
                    this.checkWinCondition();
                }
                else {
                    this.mistakes++;
                    this.gameSequence.push(0);
                    const oneAway = this.triggerOneAwayIfApplicable(lineWords);
                    this.announce(`That ${lineName} line is not a category.${oneAway ? ' One away!' : ''} Tiles returned to the bank. Mistakes: ${this.mistakes}.`);
                    this.maybeShowCornerHint();
                    this.isResolvingInvalidLine = true;
                    this.playShake(positions);
                    setTimeout(() => {
                        this.returnLineToBank(positions);
                        this.isResolvingInvalidLine = false;
                    }, 500);
                }
            }
        });
    }
    returnLineToBank(positions) {
        positions.forEach(pos => {
            if (this.isCellInCompletedLine(pos)) {
                return;
            }
            const tile = this.gridTiles[pos];
            if (tile) {
                this.availableTiles.push(tile);
                this.gridTiles[pos] = null;
            }
        });
    }
    arraysEqual(a, b) {
        return a.length === b.length && a.every((val, i) => val === b[i]);
    }
    // --- Win condition ---
    checkWinCondition() {
        if (this.completedLines.size === 4) {
            this.keepBoardVisibleAfterWin = true;
            const puzzleId = this.currentPuzzle?.id ?? 0;
            const isDaily = this.isDailyPuzzleMode && puzzleId === this.dailyPuzzleId;
            if (puzzleId > 0) {
                this.progressService.markPuzzleCompleted(puzzleId);
                this.statsProvider.recordResult({
                    puzzleId,
                    completedAt: new Date().toISOString(),
                    mistakes: this.mistakes,
                    gameSequence: [...this.gameSequence],
                    completionOrder: [...this.lineCompletionOrder],
                    isDaily,
                });
                this.currentStreak = this.statsProvider.getAggregate().currentStreak;
            }
            if (isDaily) {
                this.progressService.saveTodayDailySnapshot(this.dailyPuzzleId, this.gridTiles.map(tile => tile?.word ?? null));
                this.markDailyCompleted();
            }
            this.gameWon = true;
            this.winModalOpen = true;
            this.announce(`Puzzle solved with ${this.mistakes} mistake${this.mistakes === 1 ? '' : 's'}! Well done.`);
        }
    }
    onPlayAgain() {
        if (this.isDailyPuzzleMode && this.isDailyLocked) {
            this.winModalOpen = false;
            return;
        }
        if (this.currentPuzzle) {
            this.loadPuzzle(this.currentPuzzle.id);
        }
    }
    onNextPuzzle() {
        if (this.currentPuzzle) {
            this.loadPuzzle(this.currentPuzzle.id + 1, true);
        }
    }
    onCloseWinModal() {
        this.winModalOpen = false;
    }
    onReopenWinModal() {
        this.winModalOpen = true;
    }
    openHelp() {
        this.isHelpOpen = true;
    }
    closeHelp() {
        this.isHelpOpen = false;
    }
    onCenterIndicatorClick(index) {
        const lineName = Object.entries(this.centerIndicators)
            .find(([, centerIndex]) => centerIndex === index)?.[0];
        if (!lineName || !this.completedLines.has(lineName))
            return;
        const category = this.lineCategoryData.get(lineName);
        if (!category?.solution)
            return;
        this.activeSolution = {
            name: category.name,
            difficulty: category.difficulty,
            solutionHtml: this.sanitizer.bypassSecurityTrustHtml(category.solution)
        };
    }
    closeSolution() {
        this.activeSolution = null;
    }
    startDailyCountdown() {
        this.updateDailyCountdown();
        this.countdownTimer = setInterval(() => this.updateDailyCountdown(), 1000);
    }
    updateDailyCountdown() {
        const now = new Date();
        const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        const diffMs = tomorrow.getTime() - now.getTime();
        const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        this.dailyCountdown = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    markDailyCompleted() {
        if (this.dailyPuzzleId == null)
            return;
        this.progressService.markDailyCompleted(this.dailyPuzzleId);
        this.isDailyLocked = true;
    }
    updateDailyLockState() {
        if (!this.isDailyPuzzleMode || this.dailyPuzzleId == null || this.currentPuzzle?.id !== this.dailyPuzzleId) {
            this.isDailyLocked = false;
            return;
        }
        this.isDailyLocked = this.progressService.isDailyCompleted(this.dailyPuzzleId);
    }
    restoreLockedDailyBoardState() {
        if (!this.isDailyPuzzleMode || !this.isDailyLocked || this.dailyPuzzleId == null || !this.currentPuzzle) {
            return;
        }
        const snapshot = this.progressService.getTodayDailySnapshot(this.dailyPuzzleId);
        if (!snapshot) {
            if (this.buildSolvedGridFromCategories()) {
                this.keepBoardVisibleAfterWin = true;
            }
            return;
        }
        const tileByWord = new Map(this.currentPuzzle.words.map((word, index) => [word, { id: index + 1, word }]));
        const invalidWord = snapshot.gridWords.find((word) => word !== null && !tileByWord.has(word));
        if (invalidWord) {
            return;
        }
        this.gridTiles = snapshot.gridWords.map((word) => (word ? tileByWord.get(word) : null));
        const placedWords = new Set(snapshot.gridWords.filter((word) => word !== null));
        this.availableTiles = this.currentPuzzle.words
            .filter(word => !placedWords.has(word))
            .map((word, index) => ({
            id: index + 1,
            word
        }));
        this.rebuildCompletedLineStateFromGrid();
        this.keepBoardVisibleAfterWin = this.completedLines.size === 4;
    }
    buildSolvedGridFromCategories() {
        if (!this.currentPuzzle) {
            return false;
        }
        const categories = this.currentPuzzle.categories;
        if (categories.length !== 4) {
            return false;
        }
        const permutations = this.getPermutations(categories.map((_, i) => i));
        for (const perm of permutations) {
            const top = categories[perm[0]];
            const right = categories[perm[1]];
            const bottom = categories[perm[2]];
            const left = categories[perm[3]];
            const topLeft = this.getSingleSharedWord(top.words, left.words);
            const topRight = this.getSingleSharedWord(top.words, right.words);
            const bottomLeft = this.getSingleSharedWord(bottom.words, left.words);
            const bottomRight = this.getSingleSharedWord(bottom.words, right.words);
            if (!topLeft || !topRight || !bottomLeft || !bottomRight) {
                continue;
            }
            const corners = [topLeft, topRight, bottomLeft, bottomRight];
            if (new Set(corners).size !== 4) {
                continue;
            }
            const topInner = top.words.filter(word => word !== topLeft && word !== topRight);
            const rightInner = right.words.filter(word => word !== topRight && word !== bottomRight);
            const bottomInner = bottom.words.filter(word => word !== bottomLeft && word !== bottomRight);
            const leftInner = left.words.filter(word => word !== topLeft && word !== bottomLeft);
            if (topInner.length !== 2 || rightInner.length !== 2 || bottomInner.length !== 2 || leftInner.length !== 2) {
                continue;
            }
            const tileByWord = new Map(this.currentPuzzle.words.map((word, index) => [word, { id: index + 1, word }]));
            const orderedGridWords = [
                topLeft, topInner[0], topInner[1], topRight,
                leftInner[0], null, null, rightInner[0],
                leftInner[1], null, null, rightInner[1],
                bottomLeft, bottomInner[0], bottomInner[1], bottomRight
            ];
            if (orderedGridWords.some((word) => word !== null && !tileByWord.has(word))) {
                continue;
            }
            this.gridTiles = orderedGridWords.map((word) => (word ? tileByWord.get(word) : null));
            this.availableTiles = [];
            this.completedLines = new Set(['top', 'right', 'bottom', 'left']);
            this.lineCategories = new Map([
                ['top', top.name],
                ['right', right.name],
                ['bottom', bottom.name],
                ['left', left.name]
            ]);
            this.lineDifficulties = new Map([
                ['top', top.difficulty],
                ['right', right.difficulty],
                ['bottom', bottom.difficulty],
                ['left', left.difficulty]
            ]);
            this.lineCategoryData = new Map([
                ['top', top],
                ['right', right],
                ['bottom', bottom],
                ['left', left]
            ]);
            return true;
        }
        return false;
    }
    getSingleSharedWord(a, b) {
        return this.validator.getSingleSharedWord(a, b);
    }
    getPermutations(values) {
        return this.validator.getPermutations(values);
    }
    rebuildCompletedLineStateFromGrid() {
        if (!this.currentPuzzle) {
            return;
        }
        this.completedLines = new Set();
        this.lineCategories = new Map();
        this.lineDifficulties = new Map();
        this.lineCategoryData = new Map();
        this.lineCompletionOrder = [];
        this.gameSequence = [];
        Object.entries(this.lines).forEach(([lineName, positions]) => {
            const lineWords = positions
                .map(pos => this.gridTiles[pos]?.word)
                .filter((word) => Boolean(word));
            if (lineWords.length !== 4) {
                return;
            }
            const matchingCategory = this.currentPuzzle.categories.find(category => this.arraysEqual([...lineWords].sort(), [...category.words].sort()));
            if (matchingCategory) {
                this.completedLines.add(lineName);
                this.lineCategories.set(lineName, matchingCategory.name);
                this.lineDifficulties.set(lineName, matchingCategory.difficulty);
                this.lineCategoryData.set(lineName, matchingCategory);
                this.lineCompletionOrder.push(matchingCategory.difficulty);
                this.gameSequence.push(matchingCategory.difficulty);
            }
        });
    }
    get completedCategories() {
        return Array.from(this.lineCategoryData.values())
            .sort((a, b) => a.difficulty - b.difficulty);
    }
    getDifficultyLabel(difficulty) {
        return _models_puzzle_model__WEBPACK_IMPORTED_MODULE_0__.DIFFICULTY_LABELS[difficulty] || '';
    }
    // --- Difficulty color helpers ---
    getCellDifficulty(cellIndex) {
        for (const [lineName, positions] of Object.entries(this.lines)) {
            if (positions.includes(cellIndex) && this.completedLines.has(lineName)) {
                return this.lineDifficulties.get(lineName) || 0;
            }
        }
        return 0;
    }
    getCenterDifficulty(index) {
        const lineName = Object.entries(this.centerIndicators)
            .find(([, centerIndex]) => centerIndex === index)?.[0];
        if (lineName && this.completedLines.has(lineName)) {
            return this.lineDifficulties.get(lineName) || 0;
        }
        return 0;
    }
    // --- Center indicator helpers ---
    getCenterIndicatorCategory(index) {
        const lineName = Object.entries(this.centerIndicators)
            .find(([, centerIndex]) => centerIndex === index)?.[0];
        if (lineName && this.completedLines.has(lineName)) {
            return this.lineCategories.get(lineName) || '';
        }
        return '';
    }
    getCenterIndicatorArrow(index) {
        const lineName = Object.entries(this.centerIndicators)
            .find(([, centerIndex]) => centerIndex === index)?.[0];
        switch (lineName) {
            case 'top': return '↑';
            case 'right': return '→';
            case 'bottom': return '↓';
            case 'left': return '←';
            default: return '';
        }
    }
    isCenterIndicatorActive(index) {
        const lineName = Object.entries(this.centerIndicators)
            .find(([, centerIndex]) => centerIndex === index)?.[0];
        return lineName ? this.completedLines.has(lineName) : false;
    }
}
GameBoardComponent.ɵfac = function GameBoardComponent_Factory(t) { return new (t || GameBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_puzzle_provider__WEBPACK_IMPORTED_MODULE_2__.PuzzleProvider), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_progress_service__WEBPACK_IMPORTED_MODULE_3__.ProgressService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_puzzle_validator_service__WEBPACK_IMPORTED_MODULE_4__.PuzzleValidatorService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_stats_provider__WEBPACK_IMPORTED_MODULE_5__.StatsProvider)); };
GameBoardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: GameBoardComponent, selectors: [["app-game-board"]], hostBindings: function GameBoardComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keydown.escape", function GameBoardComponent_keydown_escape_HostBindingHandler() { return ctx.onEscapeKey(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveDocument"])("keydown.delete", function GameBoardComponent_keydown_delete_HostBindingHandler() { return ctx.onDeleteKey(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveDocument"])("keydown.backspace", function GameBoardComponent_keydown_backspace_HostBindingHandler() { return ctx.onDeleteKey(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveDocument"]);
    } }, decls: 13, vars: 11, consts: [[1, "game-container"], ["class", "game-header", 4, "ngIf"], ["class", "skeleton-loader", "aria-hidden", "true", 4, "ngIf"], ["class", "sr-only", 4, "ngIf"], ["class", "error", 4, "ngIf"], ["class", "game-content", 4, "ngIf"], ["role", "status", "aria-live", "polite", 1, "sr-only"], ["class", "help-modal-backdrop", 3, "click", 4, "ngIf"], ["class", "solution-modal-backdrop", 3, "click", 4, "ngIf"], [3, "close", 4, "ngIf"], ["class", "one-away-toast", 4, "ngIf"], ["class", "corner-hint-toast", 3, "click", 4, "ngIf"], [1, "game-header"], [1, "wordmark"], [1, "puzzle-meta"], [1, "puzzle-title"], ["class", "puzzle-author", 4, "ngIf"], [1, "header-actions"], ["class", "streak-badge", "role", "button", "tabindex", "0", 3, "click", "keydown.enter", "keydown.space", 4, "ngIf"], ["type", "button", "aria-label", "View stats", 1, "icon-button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", "width", "18", "height", "18", "aria-hidden", "true"], ["x", "3", "y", "13", "width", "4", "height", "8", "rx", "1"], ["x", "10", "y", "7", "width", "4", "height", "14", "rx", "1"], ["x", "17", "y", "3", "width", "4", "height", "18", "rx", "1"], ["type", "button", "aria-label", "Open how to play help", 1, "icon-button", 3, "click"], [1, "puzzle-author"], ["role", "button", "tabindex", "0", 1, "streak-badge", 3, "click", "keydown.enter", "keydown.space"], ["aria-hidden", "true", 1, "skeleton-loader"], [1, "skeleton-header"], [1, "skeleton-block", "skeleton-wordmark"], [1, "skeleton-block", "skeleton-title"], [1, "skeleton-block", "skeleton-circle"], [1, "skeleton-grid"], ["class", "skeleton-cell", 3, "disabled", 4, "ngFor", "ngForOf"], [1, "skeleton-bank"], ["class", "skeleton-cell", 4, "ngFor", "ngForOf"], [1, "skeleton-cell"], [1, "sr-only"], [1, "error"], [1, "game-content"], [4, "ngIf"], ["class", "daily-locked-card", 4, "ngIf"], [3, "mistakes", "puzzleId", "categories", "completionOrder", "gameSequence", "playAgain", "nextPuzzle", "close", 4, "ngIf"], [1, "game-board"], ["class", "grid-cell", "cdkDropList", "", 3, "occupied", "disabled", "completed", "corner-locked", "movable-corner", "drop-target", "selected", "bounce", "shake", "id", "cdkDropListDisabled", "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped", "keydown.enter", "keydown.space", "click", 4, "ngFor", "ngForOf"], [1, "tile-bank"], ["cdkDropList", "", "id", "bank-list", "role", "group", "aria-label", "Tile bank. Select a tile, then choose a grid cell. Press Delete to return a selected grid tile to the bank.", 1, "bank-container", 3, "cdkDropListSortingDisabled", "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped", "click"], ["class", "bank-tile-wrapper", "tabindex", "0", "role", "button", 3, "--tile-index", "selected", "keydown.enter", "keydown.space", "click", 4, "ngFor", "ngForOf"], ["class", "daily-status", 4, "ngIf"], ["class", "view-results-btn", 3, "click", 4, "ngIf"], ["cdkDropList", "", 1, "grid-cell", 3, "id", "cdkDropListDisabled", "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped", "keydown.enter", "keydown.space", "click"], ["cdkDrag", "", 3, "word", "isDraggable", "isSelected", "cdkDragDisabled", "cdkDragStarted", "cdkDragEnded", 4, "ngIf"], ["class", "center-indicator clickable", "tabindex", "0", "role", "button", 3, "keydown.enter", "keydown.space", "click", 4, "ngIf"], ["class", "disabled-spot", 4, "ngIf"], ["cdkDrag", "", 3, "word", "isDraggable", "isSelected", "cdkDragDisabled", "cdkDragStarted", "cdkDragEnded"], ["tabindex", "0", "role", "button", 1, "center-indicator", "clickable", 3, "keydown.enter", "keydown.space", "click"], [1, "arrow"], [1, "category-label", 3, "appFitText", "fitTextWrap"], [1, "disabled-spot"], ["tabindex", "0", "role", "button", 1, "bank-tile-wrapper", 3, "keydown.enter", "keydown.space", "click"], [1, "daily-status"], [1, "view-results-btn", 3, "click"], [1, "daily-locked-card"], [1, "countdown"], [3, "mistakes", "puzzleId", "categories", "completionOrder", "gameSequence", "playAgain", "nextPuzzle", "close"], [1, "help-modal-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "How to play", 1, "help-modal", 3, "click"], [1, "help-modal-header"], ["type", "button", "aria-label", "Close help", 1, "close-button", 3, "click"], [1, "help-modal-links"], ["type", "button", "routerLink", "/library", 1, "archive-link", 3, "click"], ["type", "button", "routerLink", "/submit", 1, "archive-link", 3, "click"], [1, "solution-modal-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "solution-modal", 3, "click"], [1, "solution-modal-header"], [1, "solution-difficulty-label"], ["type", "button", "aria-label", "Close solution", 1, "close-button", 3, "click"], [1, "solution-body", 3, "innerHTML"], [3, "close"], [1, "one-away-toast"], [1, "corner-hint-toast", 3, "click"], [1, "corner-hint-icon"], [1, "corner-hint-text"], ["aria-label", "Dismiss tip", 1, "corner-hint-dismiss", 3, "click"]], template: function GameBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, GameBoardComponent_div_1_Template, 16, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, GameBoardComponent_div_2_Template, 9, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, GameBoardComponent_p_3_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, GameBoardComponent_div_4_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, GameBoardComponent_div_5_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, GameBoardComponent_div_8_Template, 25, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, GameBoardComponent_div_9_Template, 10, 6, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, GameBoardComponent_app_stats_modal_10_Template, 1, 0, "app-stats-modal", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, GameBoardComponent_div_11_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, GameBoardComponent_div_12_Template, 7, 0, "div", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currentPuzzle && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.announcement);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isHelpOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.activeSolution);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.statsModalOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showOneAway);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showCornerHint);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__.CdkDrag, _game_tile_game_tile_component__WEBPACK_IMPORTED_MODULE_6__.GameTileComponent, _win_modal_win_modal_component__WEBPACK_IMPORTED_MODULE_7__.WinModalComponent, _directives_fit_text_directive__WEBPACK_IMPORTED_MODULE_8__.FitTextDirective, _stats_modal_stats_modal_component__WEBPACK_IMPORTED_MODULE_9__.StatsModalComponent], styles: ["@charset \"UTF-8\";\n@keyframes tile-entrance {\n  from {\n    opacity: 0;\n    transform: translateY(8px) scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes bounce {\n  0% {\n    transform: scale(1);\n  }\n  40% {\n    transform: scale(1.1);\n  }\n  70% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  15% {\n    transform: translateX(-4px);\n  }\n  30% {\n    transform: translateX(4px);\n  }\n  45% {\n    transform: translateX(-4px);\n  }\n  60% {\n    transform: translateX(4px);\n  }\n  75% {\n    transform: translateX(-2px);\n  }\n  90% {\n    transform: translateX(2px);\n  }\n}\n@keyframes pulse-border {\n  0%, 100% {\n    border-color: rgba(33, 150, 243, 0.3);\n  }\n  50% {\n    border-color: rgba(33, 150, 243, 0.7);\n  }\n}\n.game-container[_ngcontent-%COMP%] {\n  --board-width: min(90vw, 400px, calc(100dvh - 285px));\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0 0.75rem 0.5rem;\n  width: 100%;\n  max-height: 100%;\n}\n.game-header[_ngcontent-%COMP%] {\n  width: min(92vw, 400px);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.wordmark[_ngcontent-%COMP%] {\n  font-size: clamp(1.05rem, 2.8vw, 1.3rem);\n  font-weight: 900;\n  letter-spacing: 0.12em;\n  background: var(--brand-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  flex-shrink: 0;\n  line-height: 1;\n  padding: 2px 0;\n}\n.puzzle-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  min-width: 0;\n  flex: 1;\n  gap: 0;\n}\n.puzzle-title[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: clamp(0.72rem, 2vw, 0.85rem);\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n}\n.puzzle-author[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.68rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  flex-shrink: 0;\n}\n.streak-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 30px;\n  padding: 0 0.5rem;\n  border-radius: 15px;\n  border: 1px solid #ffcc80;\n  background: #fff8e1;\n  color: #e65100;\n  font-size: 0.82rem;\n  font-weight: 700;\n  cursor: pointer;\n  white-space: nowrap;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.streak-badge[_ngcontent-%COMP%]:hover {\n  background: #fff3e0;\n}\n.icon-button[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 1px solid var(--border-subtle);\n  background: var(--surface);\n  color: var(--text-secondary);\n  font-size: 0.95rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s ease, border-color 0.15s ease;\n}\n.icon-button[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n}\n.view-results-btn[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 8px;\n  padding: 0.6rem 1.4rem;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: #fff;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  width: var(--board-width);\n}\n.view-results-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.daily-status[_ngcontent-%COMP%] {\n  width: min(92vw, 400px);\n  text-align: center;\n  color: #455a64;\n  font-size: 0.78rem;\n  line-height: 1.2;\n}\n.loading[_ngcontent-%COMP%], .error[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  font-size: 1.2rem;\n}\n@keyframes skeleton-shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.skeleton-cell[_ngcontent-%COMP%], .skeleton-circle[_ngcontent-%COMP%], .skeleton-block[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #e8edf2 25%, #f8fafc 50%, #e8edf2 75%);\n  background-size: 200% 100%;\n  animation: skeleton-shimmer 1.4s ease-in-out infinite;\n}\n.skeleton-loader[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.45rem;\n  width: 100%;\n}\n.skeleton-header[_ngcontent-%COMP%] {\n  width: min(92vw, 400px);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.skeleton-block[_ngcontent-%COMP%] {\n  border-radius: 6px;\n}\n.skeleton-wordmark[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 20px;\n}\n.skeleton-title[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 13px;\n  flex: 1;\n  max-width: 140px;\n}\n.skeleton-circle[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  margin-left: auto;\n  flex-shrink: 0;\n}\n.skeleton-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  gap: clamp(4px, 1.5vw, 8px);\n  width: var(--board-width);\n  aspect-ratio: 1;\n  border: 2px solid #e0e4ea;\n  border-radius: 8px;\n  padding: clamp(4px, 1.5vw, 8px);\n  background-color: #f5f5f5;\n}\n.skeleton-bank[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: clamp(4px, 1.5vw, 8px);\n  width: var(--board-width);\n  border: 2px solid #e8ecef;\n  border-radius: 8px;\n  padding: clamp(4px, 1.5vw, 8px);\n  background-color: #fafafa;\n}\n.skeleton-cell[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  border-radius: 4px;\n}\n.skeleton-cell.disabled[_ngcontent-%COMP%] {\n  animation: none;\n  background: #e0e0e0;\n}\n.error[_ngcontent-%COMP%] {\n  color: #f44336;\n  background-color: #ffebee;\n  border-radius: 4px;\n}\n.game-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.45rem;\n  width: 100%;\n}\n.game-board[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  gap: clamp(4px, 1.5vw, 8px);\n  width: var(--board-width);\n  aspect-ratio: 1;\n  border: 2px solid #333;\n  border-radius: 8px;\n  padding: clamp(4px, 1.5vw, 8px);\n  background-color: #f5f5f5;\n}\n.grid-cell[_ngcontent-%COMP%] {\n  border: 2px dashed #ccc;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  aspect-ratio: 1;\n  overflow: hidden;\n  transition: all 0.2s ease;\n  touch-action: none;\n  position: relative;\n}\n.grid-cell.movable-corner[_ngcontent-%COMP%]::after {\n  content: \"\u21C4\";\n  position: absolute;\n  bottom: 3px;\n  right: 4px;\n  font-size: 0.6rem;\n  line-height: 1;\n  color: white;\n  opacity: 0.55;\n  pointer-events: none;\n  z-index: 2;\n}\n.grid-cell.occupied[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-color: #4CAF50;\n  background-color: #e8f5e8;\n}\n.grid-cell.completed[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-color: #888 !important;\n  background-color: #e0e0e0 !important;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.grid-cell.completed[data-difficulty=\"1\"][_ngcontent-%COMP%] {\n  border-color: var(--difficulty-1-color) !important;\n  background-color: var(--difficulty-1-bg) !important;\n  box-shadow: 0 0 10px rgba(var(--difficulty-1-glow), 0.3);\n}\n.grid-cell.completed[data-difficulty=\"2\"][_ngcontent-%COMP%] {\n  border-color: var(--difficulty-2-color) !important;\n  background-color: var(--difficulty-2-bg) !important;\n  box-shadow: 0 0 10px rgba(var(--difficulty-2-glow), 0.3);\n}\n.grid-cell.completed[data-difficulty=\"3\"][_ngcontent-%COMP%] {\n  border-color: var(--difficulty-3-color) !important;\n  background-color: var(--difficulty-3-bg) !important;\n  box-shadow: 0 0 10px rgba(var(--difficulty-3-glow), 0.3);\n}\n.grid-cell.completed[data-difficulty=\"4\"][_ngcontent-%COMP%] {\n  border-color: var(--difficulty-4-color) !important;\n  background-color: var(--difficulty-4-bg) !important;\n  box-shadow: 0 0 10px rgba(var(--difficulty-4-glow), 0.3);\n}\n.grid-cell.corner-locked[_ngcontent-%COMP%]   app-game-tile[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.grid-cell.disabled[_ngcontent-%COMP%] {\n  border: 2px solid #666;\n  background-color: #333;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .disabled-spot[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #444;\n  border-radius: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .disabled-spot[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 20%;\n  height: 20%;\n  background-color: #666;\n  border-radius: 50%;\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #666;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: bold;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);\n  border: 2px solid #888;\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  pointer-events: auto;\n  transition: filter 0.15s ease;\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator.clickable[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.15);\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator.clickable[_ngcontent-%COMP%]:active {\n  filter: brightness(0.9);\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[data-difficulty=\"1\"][_ngcontent-%COMP%] {\n  background-color: var(--difficulty-1-color);\n  border-color: var(--difficulty-1-accent);\n  box-shadow: 0 0 15px rgba(var(--difficulty-1-glow), 0.5);\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[data-difficulty=\"2\"][_ngcontent-%COMP%] {\n  background-color: var(--difficulty-2-color);\n  border-color: var(--difficulty-2-accent);\n  box-shadow: 0 0 15px rgba(var(--difficulty-2-glow), 0.5);\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[data-difficulty=\"3\"][_ngcontent-%COMP%] {\n  background-color: var(--difficulty-3-color);\n  border-color: var(--difficulty-3-accent);\n  box-shadow: 0 0 15px rgba(var(--difficulty-3-glow), 0.5);\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[data-difficulty=\"4\"][_ngcontent-%COMP%] {\n  background-color: var(--difficulty-4-color);\n  border-color: var(--difficulty-4-accent);\n  box-shadow: 0 0 15px rgba(var(--difficulty-4-glow), 0.5);\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[data-difficulty=\"1\"][_ngcontent-%COMP%] {\n  color: #3E2723;\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  font-size: clamp(0.9rem, 3vw, 1.5rem);\n  margin-bottom: 2px;\n  line-height: 1;\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[_ngcontent-%COMP%]   .category-label[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 1.2;\n  max-width: 90%;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  overflow-wrap: break-word;\n}\n.grid-cell.drop-target[_ngcontent-%COMP%] {\n  border-color: rgba(33, 150, 243, 0.4);\n  background-color: rgba(227, 242, 253, 0.5);\n  animation: pulse-border 1.5s ease-in-out infinite;\n}\n.grid-cell.selected[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-color: #FF9800;\n  background-color: #fff3e0;\n  box-shadow: 0 0 8px rgba(255, 152, 0, 0.4);\n}\n.grid-cell.bounce[_ngcontent-%COMP%] {\n  animation: bounce 0.3s ease;\n}\n.grid-cell.shake[_ngcontent-%COMP%] {\n  animation: shake 0.4s ease;\n  border-color: #f44336 !important;\n  background-color: #ffebee !important;\n}\n.grid-cell.cdk-drop-list-dragging[_ngcontent-%COMP%]:not(.disabled) {\n  border-color: #2196F3;\n  background-color: #e3f2fd;\n}\n.grid-cell.cdk-drop-list-receiving[_ngcontent-%COMP%]:not(.disabled) {\n  border-color: #FF9800;\n  background-color: #fff3e0;\n}\n.tile-bank[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  margin-top: 0.2rem;\n}\n.tile-bank[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  color: #333;\n  font-size: clamp(0.9rem, 2.5vw, 1.1rem);\n}\n.bank-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: clamp(4px, 1.5vw, 8px);\n  padding: clamp(4px, 1.5vw, 8px);\n  border: 2px solid #ddd;\n  border-radius: 8px;\n  background-color: #fafafa;\n  width: var(--board-width);\n  margin: 0 auto;\n}\n.bank-tile-wrapper[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  overflow: hidden;\n  border-radius: 6px;\n  transition: box-shadow 0.15s ease;\n  animation: tile-entrance 0.3s ease backwards;\n  animation-delay: calc(var(--tile-index, 0) * 45ms);\n}\n.bank-tile-wrapper.selected[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 3px #FF9800;\n  border-radius: 8px;\n}\n.grid-cell[_ngcontent-%COMP%]:focus-visible, .bank-tile-wrapper[_ngcontent-%COMP%]:focus-visible, .center-indicator[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #2196F3;\n  outline-offset: 2px;\n}\n.help-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  z-index: 1100;\n}\n.help-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  width: min(92vw, 520px);\n  border-radius: 10px;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.28);\n  padding: 0.9rem 1rem 1rem;\n}\n.help-modal[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 1.05rem;\n  color: #37474f;\n  font-size: 0.9rem;\n  line-height: 1.45;\n  margin-bottom: 0.8rem;\n}\n.help-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.6rem;\n}\n.help-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  color: #1f2a30;\n}\n.close-button[_ngcontent-%COMP%] {\n  border: 1px solid #cfd8dc;\n  background: #fff;\n  color: #607d8b;\n  border-radius: 6px;\n  width: 28px;\n  height: 28px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.help-modal-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.archive-link[_ngcontent-%COMP%] {\n  border: 1px solid #cfd8dc;\n  background: #fff;\n  color: #455a64;\n  border-radius: 8px;\n  padding: 0.35rem 0.6rem;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.daily-locked-card[_ngcontent-%COMP%] {\n  width: min(90vw, 400px);\n  background: #ffffff;\n  border: 1px solid #d6dee3;\n  border-radius: 10px;\n  padding: 1rem;\n  text-align: center;\n}\n.daily-locked-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1.05rem;\n  color: #263238;\n}\n.daily-locked-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #546e7a;\n  font-size: 0.9rem;\n}\n.daily-locked-card[_ngcontent-%COMP%]   .countdown[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-weight: 600;\n  color: #37474f;\n}\n.solution-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  z-index: 1100;\n}\n.solution-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  width: min(92vw, 420px);\n  border-radius: 10px;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.28);\n  padding: 0.9rem 1rem 1rem;\n  border-top: 4px solid #888;\n}\n.solution-modal[data-difficulty=\"1\"][_ngcontent-%COMP%] {\n  border-top-color: var(--difficulty-1-color);\n}\n.solution-modal[data-difficulty=\"2\"][_ngcontent-%COMP%] {\n  border-top-color: var(--difficulty-2-color);\n}\n.solution-modal[data-difficulty=\"3\"][_ngcontent-%COMP%] {\n  border-top-color: var(--difficulty-3-color);\n}\n.solution-modal[data-difficulty=\"4\"][_ngcontent-%COMP%] {\n  border-top-color: var(--difficulty-4-color);\n}\n.solution-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.6rem;\n}\n.solution-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  color: #1f2a30;\n}\n.solution-difficulty-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.1rem 0.5rem;\n  border-radius: 10px;\n  color: white;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  vertical-align: middle;\n  margin-left: 0.4rem;\n}\n.solution-difficulty-label[data-difficulty=\"1\"][_ngcontent-%COMP%] {\n  background-color: var(--difficulty-1-color);\n}\n.solution-difficulty-label[data-difficulty=\"2\"][_ngcontent-%COMP%] {\n  background-color: var(--difficulty-2-color);\n}\n.solution-difficulty-label[data-difficulty=\"3\"][_ngcontent-%COMP%] {\n  background-color: var(--difficulty-3-color);\n}\n.solution-difficulty-label[data-difficulty=\"4\"][_ngcontent-%COMP%] {\n  background-color: var(--difficulty-4-color);\n}\n.solution-difficulty-label[data-difficulty=\"1\"][_ngcontent-%COMP%] {\n  color: #3E2723;\n}\n.solution-body[_ngcontent-%COMP%] {\n  color: #37474f;\n  font-size: 0.9rem;\n  line-height: 1.6;\n}\n@keyframes one-away-in-out {\n  0% {\n    opacity: 0;\n    transform: translateX(-50%) translateY(8px);\n  }\n  15% {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n  75% {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) translateY(0);\n  }\n}\n.one-away-toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1.25rem;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #37474f;\n  color: #fff;\n  border-radius: 12px;\n  padding: 0.7rem 1.5rem;\n  font-size: 1rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);\n  z-index: 2000;\n  pointer-events: none;\n  animation: one-away-in-out 3s ease forwards;\n}\n@keyframes toast-slide-up {\n  from {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.corner-hint-toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1.25rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  background: #37474f;\n  color: #fff;\n  border-radius: 12px;\n  padding: 0.75rem 1rem;\n  width: min(90vw, 380px);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);\n  z-index: 2000;\n  cursor: pointer;\n  animation: toast-slide-up 0.3s ease;\n}\n.corner-hint-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  flex-shrink: 0;\n}\n.corner-hint-text[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  line-height: 1.35;\n  flex: 1;\n}\n.corner-hint-dismiss[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 0.85rem;\n  cursor: pointer;\n  padding: 0 0.1rem;\n  flex-shrink: 0;\n  line-height: 1;\n}\n.corner-hint-dismiss[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n@media (max-width: 768px) {\n  .wordmark[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .icon-button[_ngcontent-%COMP%] {\n    width: 34px;\n    height: 34px;\n    font-size: 1.05rem;\n  }\n  .grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[_ngcontent-%COMP%]   .category-label[_ngcontent-%COMP%] {\n    line-height: 1.2;\n  }\n  .tile-bank[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .game-container[_ngcontent-%COMP%] {\n    --board-width: min(91vw, calc(100dvh - 245px));\n  }\n  .help-modal[_ngcontent-%COMP%] {\n    width: 92vw;\n  }\n  .help-modal[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    line-height: 1.5;\n  }\n  .daily-locked-card[_ngcontent-%COMP%] {\n    width: min(91vw, 100dvh - 245px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtYm9hcmQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQU9oQjtFQUNFO0lBQ0UsVUFBQTtJQUNBLHFDQUFBO0VBTEY7RUFPQTtJQUNFLFVBQUE7SUFDQSxpQ0FBQTtFQUxGO0FBQ0Y7QUFRQTtFQUNFO0lBQU8sbUJBQUE7RUFMUDtFQU1BO0lBQU8scUJBQUE7RUFIUDtFQUlBO0lBQU8sc0JBQUE7RUFEUDtFQUVBO0lBQU8sbUJBQUE7RUFDUDtBQUNGO0FBQ0E7RUFDRTtJQUFXLHdCQUFBO0VBRVg7RUFEQTtJQUFXLDJCQUFBO0VBSVg7RUFIQTtJQUFXLDBCQUFBO0VBTVg7RUFMQTtJQUFXLDJCQUFBO0VBUVg7RUFQQTtJQUFXLDBCQUFBO0VBVVg7RUFUQTtJQUFXLDJCQUFBO0VBWVg7RUFYQTtJQUFXLDBCQUFBO0VBY1g7QUFDRjtBQVpBO0VBQ0U7SUFBVyxxQ0FBQTtFQWVYO0VBZEE7SUFBVyxxQ0FBQTtFQWlCWDtBQUNGO0FBZkE7RUFDRSxxREFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBaUJGO0FBZEE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQWlCRjtBQWRBO0VBQ0Usd0NBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFpQkY7QUFkQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FBaUJGO0FBZEE7RUFDRSw0QkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQWlCRjtBQWRBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBaUJGO0FBZEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQWlCRjtBQWRBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBaUJGO0FBZkU7RUFDRSxtQkFBQTtBQWlCSjtBQWJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwwREFBQTtBQWdCRjtBQWRFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQWdCSjtBQVpBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2REFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUFlRjtBQWJFO0VBQ0UsWUFBQTtBQWVKO0FBWEE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFjRjtBQVhBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFjRjtBQVRBO0VBQ0U7SUFBTywyQkFBQTtFQWFQO0VBWkE7SUFBTyw0QkFBQTtFQWVQO0FBQ0Y7QUFiQTtFQUNFLHlFQUFBO0VBQ0EsMEJBQUE7RUFDQSxxREFBQTtBQWVGO0FBWkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBZUY7QUFaQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQWVGO0FBWkE7RUFFRSxrQkFBQTtBQWNGO0FBWEE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQWNGO0FBWEE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQWNGO0FBWEE7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBYUY7QUFWQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtBQWFGO0FBVkE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7QUFhRjtBQVZBO0VBRUUsZUFBQTtFQUNBLGtCQUFBO0FBWUY7QUFWRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQVlKO0FBUkE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQVdGO0FBUkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBV0Y7QUFSQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtBQVdGO0FBUkE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFXRjtBQVRFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQVdKO0FBUkU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFVSjtBQVBFO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7QUFTSjtBQU5NO0VBQ0Usa0RBQUE7RUFDQSxtREFBQTtFQUNBLHdEQUFBO0FBUVI7QUFYTTtFQUNFLGtEQUFBO0VBQ0EsbURBQUE7RUFDQSx3REFBQTtBQWFSO0FBaEJNO0VBQ0Usa0RBQUE7RUFDQSxtREFBQTtFQUNBLHdEQUFBO0FBa0JSO0FBckJNO0VBQ0Usa0RBQUE7RUFDQSxtREFBQTtFQUNBLHdEQUFBO0FBdUJSO0FBakJJO0VBQ0Usb0JBQUE7QUFtQk47QUFmRTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBaUJKO0FBZkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWlCTjtBQWZNO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQWlCUjtBQWJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7QUFlTjtBQWJNO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUFlUjtBQWJRO0VBQ0Usd0JBQUE7QUFlVjtBQWJRO0VBQ0UsdUJBQUE7QUFlVjtBQVZRO0VBQ0UsMkNBQUE7RUFDQSx3Q0FBQTtFQUNBLHdEQUFBO0FBWVY7QUFmUTtFQUNFLDJDQUFBO0VBQ0Esd0NBQUE7RUFDQSx3REFBQTtBQWlCVjtBQXBCUTtFQUNFLDJDQUFBO0VBQ0Esd0NBQUE7RUFDQSx3REFBQTtBQXNCVjtBQXpCUTtFQUNFLDJDQUFBO0VBQ0Esd0NBQUE7RUFDQSx3REFBQTtBQTJCVjtBQXRCTTtFQUNFLGNBQUE7QUF3QlI7QUFyQk07RUFDRSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQXVCUjtBQXBCTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBc0JSO0FBaEJFO0VBQ0UscUNBQUE7RUFDQSwwQ0FBQTtFQUNBLGlEQUFBO0FBa0JKO0FBZEU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtBQWdCSjtBQVpFO0VBQ0UsMkJBQUE7QUFjSjtBQVZFO0VBQ0UsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0FBWUo7QUFURTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUFXSjtBQVJFO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtBQVVKO0FBTkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVNGO0FBUEU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtBQVNKO0FBTEE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBUUY7QUFMQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0Q0FBQTtFQUNBLGtEQUFBO0FBUUY7QUFORTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7QUFRSjtBQUhBOzs7RUFHRSwwQkFBQTtFQUNBLG1CQUFBO0FBTUY7QUFIQTtFQzVlRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBRG1mRjtBQVZBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtBQWFGO0FBWEU7RUFDRSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBYUo7QUFUQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFZRjtBQVZFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBWUo7QUFSQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBV0Y7QUFSQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBV0Y7QUFSQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVdGO0FBUkE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVdGO0FBVEU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVdKO0FBUkU7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBVUo7QUFQRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBU0o7QUFMQTtFQ3BrQkUsZUFBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUQ2a0JGO0FBWkE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFlRjtBQzltQkk7RUFDRSwyQ0FBQTtBRGduQk47QUNqbkJJO0VBQ0UsMkNBQUE7QURtbkJOO0FDcG5CSTtFQUNFLDJDQUFBO0FEc25CTjtBQ3ZuQkk7RUFDRSwyQ0FBQTtBRHluQk47QUF0QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBeUJGO0FBdkJFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBeUJKO0FBckJBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQXdCRjtBQ25wQkk7RUFDRSwyQ0FBQTtBRHFwQk47QUN0cEJJO0VBQ0UsMkNBQUE7QUR3cEJOO0FDenBCSTtFQUNFLDJDQUFBO0FEMnBCTjtBQzVwQkk7RUFDRSwyQ0FBQTtBRDhwQk47QUEvQkU7RUFDRSxjQUFBO0FBaUNKO0FBN0JBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFnQ0Y7QUEzQkE7RUFDRTtJQUFPLFVBQUE7SUFBWSwyQ0FBQTtFQWdDbkI7RUEvQkE7SUFBTyxVQUFBO0lBQVkseUNBQUE7RUFtQ25CO0VBbENBO0lBQU8sVUFBQTtJQUFZLHlDQUFBO0VBc0NuQjtFQXJDQTtJQUFPLFVBQUE7SUFBWSx5Q0FBQTtFQXlDbkI7QUFDRjtBQXZDQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQ0FBQTtBQXlDRjtBQXBDQTtFQUNFO0lBQU8sMkJBQUE7SUFBNkIsVUFBQTtFQXlDcEM7RUF4Q0E7SUFBTyx3QkFBQTtJQUE2QixVQUFBO0VBNENwQztBQUNGO0FBMUNBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FBNENGO0FBekNBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBNENGO0FBekNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLE9BQUE7QUE0Q0Y7QUF6Q0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUE0Q0Y7QUExQ0U7RUFDRSxXQUFBO0FBNENKO0FBeENBO0VBQ0U7SUFDRSxlQUFBO0VBMkNGO0VBeENBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQTBDRjtFQXRDRTtJQUNFLGlCQUFBO0VBd0NKO0VBckNFO0lBQ0UsZ0JBQUE7RUF1Q0o7RUFuQ0E7SUFDRSxrQkFBQTtFQXFDRjtFQWxDQTtJQUNFLDhDQUFBO0VBb0NGO0VBakNBO0lBQ0UsV0FBQTtFQW1DRjtFQWpDRTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7RUFtQ0o7RUEvQkE7SUFDRSxnQ0FBQTtFQWlDRjtBQUNGIiwiZmlsZSI6ImdhbWUtYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdtaXhpbnMnIGFzICo7XG5cbi8vIEJvYXJkIHNpemluZzogc2NhbGVzIHdpdGggdmlld3BvcnQsIGNhcHBlZCBhdCA0MDBweFxuJGJvYXJkLW1heDogNDAwcHg7XG5cbi8vIC0tLSBBbmltYXRpb25zIC0tLVxuXG5Aa2V5ZnJhbWVzIHRpbGUtZW50cmFuY2Uge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpIHNjYWxlKDAuOSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlIHtcbiAgMCUgICB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbiAgNDAlICB7IHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxuICA3MCUgIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgMTUlICAgICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTRweCk7IH1cbiAgMzAlICAgICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTsgfVxuICA0NSUgICAgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNHB4KTsgfVxuICA2MCUgICAgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpOyB9XG4gIDc1JSAgICAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpOyB9XG4gIDkwJSAgICAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7IH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZS1ib3JkZXIge1xuICAwJSwgMTAwJSB7IGJvcmRlci1jb2xvcjogcmdiYSgzMywgMTUwLCAyNDMsIDAuMyk7IH1cbiAgNTAlICAgICAgeyBib3JkZXItY29sb3I6IHJnYmEoMzMsIDE1MCwgMjQzLCAwLjcpOyB9XG59XG5cbi5nYW1lLWNvbnRhaW5lciB7XG4gIC0tYm9hcmQtd2lkdGg6IG1pbig5MHZ3LCAjeyRib2FyZC1tYXh9LCBjYWxjKDEwMGR2aCAtIDI4NXB4KSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC40NXJlbTtcbiAgcGFkZGluZzogMCAwLjc1cmVtIDAuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5nYW1lLWhlYWRlciB7XG4gIHdpZHRoOiBtaW4oOTJ2dywgJGJvYXJkLW1heCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi53b3JkbWFyayB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4wNXJlbSwgMi44dncsIDEuM3JlbSk7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjEyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLWJyYW5kLWdyYWRpZW50KTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBmbGV4LXNocmluazogMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHBhZGRpbmc6IDJweCAwO1xufVxuXG4ucHV6emxlLW1ldGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWluLXdpZHRoOiAwO1xuICBmbGV4OiAxO1xuICBnYXA6IDA7XG59XG5cbi5wdXp6bGUtdGl0bGUge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IGNsYW1wKDAuNzJyZW0sIDJ2dywgMC44NXJlbSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4ucHV6emxlLWF1dGhvciB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAwLjY4cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLmhlYWRlci1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjM1cmVtO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLnN0cmVhay1iYWRnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMzBweDtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmNjODA7XG4gIGJhY2tncm91bmQ6ICNmZmY4ZTE7XG4gIGNvbG9yOiAjZTY1MTAwO1xuICBmb250LXNpemU6IDAuODJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjNlMDtcbiAgfVxufVxuXG4uaWNvbi1idXR0b24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zdWJ0bGUpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gICAgYm9yZGVyLWNvbG9yOiAjY2JkNWUxO1xuICB9XG59XG5cbi52aWV3LXJlc3VsdHMtYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDAuNnJlbSAxLjRyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIHdpZHRoOiB2YXIoLS1ib2FyZC13aWR0aCk7XG5cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG59XG5cbi5kYWlseS1zdGF0dXMge1xuICB3aWR0aDogbWluKDkydncsICRib2FyZC1tYXgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNDU1YTY0O1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi5sb2FkaW5nLCAuZXJyb3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4vLyAtLS0gU2tlbGV0b24gbG9hZGVyIC0tLVxuXG5Aa2V5ZnJhbWVzIHNrZWxldG9uLXNoaW1tZXIge1xuICAwJSAgIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwOyB9XG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwJSAwOyB9XG59XG5cbiVzaGltbWVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZThlZGYyIDI1JSwgI2Y4ZmFmYyA1MCUsICNlOGVkZjIgNzUlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gIGFuaW1hdGlvbjogc2tlbGV0b24tc2hpbW1lciAxLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4uc2tlbGV0b24tbG9hZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjQ1cmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNrZWxldG9uLWhlYWRlciB7XG4gIHdpZHRoOiBtaW4oOTJ2dywgJGJvYXJkLW1heCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uc2tlbGV0b24tYmxvY2sge1xuICBAZXh0ZW5kICVzaGltbWVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5za2VsZXRvbi13b3JkbWFyayB7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uc2tlbGV0b24tdGl0bGUge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTNweDtcbiAgZmxleDogMTtcbiAgbWF4LXdpZHRoOiAxNDBweDtcbn1cblxuLnNrZWxldG9uLWNpcmNsZSB7XG4gIEBleHRlbmQgJXNoaW1tZXI7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uc2tlbGV0b24tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogY2xhbXAoNHB4LCAxLjV2dywgOHB4KTtcbiAgd2lkdGg6IHZhcigtLWJvYXJkLXdpZHRoKTtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTBlNGVhO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IGNsYW1wKDRweCwgMS41dncsIDhweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5za2VsZXRvbi1iYW5rIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiBjbGFtcCg0cHgsIDEuNXZ3LCA4cHgpO1xuICB3aWR0aDogdmFyKC0tYm9hcmQtd2lkdGgpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZThlY2VmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IGNsYW1wKDRweCwgMS41dncsIDhweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5cbi5za2VsZXRvbi1jZWxsIHtcbiAgQGV4dGVuZCAlc2hpbW1lcjtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgJi5kaXNhYmxlZCB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gIH1cbn1cblxuLmVycm9yIHtcbiAgY29sb3I6ICNmNDQzMzY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmViZWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmdhbWUtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC40NXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5nYW1lLWJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiBjbGFtcCg0cHgsIDEuNXZ3LCA4cHgpO1xuICB3aWR0aDogdmFyKC0tYm9hcmQtd2lkdGgpO1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogY2xhbXAoNHB4LCAxLjV2dywgOHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLmdyaWQtY2VsbCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICYubW92YWJsZS1jb3JuZXI6OmFmdGVyIHtcbiAgICBjb250ZW50OiAn4oeEJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAzcHg7XG4gICAgcmlnaHQ6IDRweDtcbiAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3BhY2l0eTogMC41NTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG5cbiAgJi5vY2N1cGllZCB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICM0Q0FGNTA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZjVlODtcbiAgfVxuXG4gICYuY29tcGxldGVkIHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogIzg4OCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTAgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDQge1xuICAgICAgJltkYXRhLWRpZmZpY3VsdHk9XCIjeyRpfVwiXSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGlmZmljdWx0eS0jeyRpfS1jb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlmZmljdWx0eS0jeyRpfS1iZykgIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSh2YXIoLS1kaWZmaWN1bHR5LSN7JGl9LWdsb3cpLCAwLjMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuY29ybmVyLWxvY2tlZCB7XG4gICAgYXBwLWdhbWUtdGlsZSB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmLmRpc2FibGVkIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNjY2O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcblxuICAgIC5kaXNhYmxlZC1zcG90IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jZW50ZXItaW5kaWNhdG9yIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjODg4O1xuXG4gICAgICAmLmNsaWNrYWJsZSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjE1cyBlYXNlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjE1KTtcbiAgICAgICAgfVxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA0IHtcbiAgICAgICAgJltkYXRhLWRpZmZpY3VsdHk9XCIjeyRpfVwiXSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlmZmljdWx0eS0jeyRpfS1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kaWZmaWN1bHR5LSN7JGl9LWFjY2VudCk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSh2YXIoLS1kaWZmaWN1bHR5LSN7JGl9LWdsb3cpLCAwLjUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIERhcmsgdGV4dCBvbiB0aGUgeWVsbG93IChkaWZmaWN1bHR5IDEpIGJhY2tncm91bmQgZm9yIFdDQUcgY29udHJhc3RcbiAgICAgICZbZGF0YS1kaWZmaWN1bHR5PVwiMVwiXSB7XG4gICAgICAgIGNvbG9yOiAjM0UyNzIzO1xuICAgICAgfVxuXG4gICAgICAuYXJyb3cge1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDAuOXJlbSwgM3Z3LCAxLjVyZW0pO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgfVxuXG4gICAgICAuY2F0ZWdvcnktbGFiZWwge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgIG1heC13aWR0aDogOTAlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVmFsaWQgZHJvcCB0YXJnZXQgaGlnaGxpZ2h0IChlbXB0eSBjZWxscyB3aGlsZSBkcmFnZ2luZyBvciB0aWxlIHNlbGVjdGVkKVxuICAmLmRyb3AtdGFyZ2V0IHtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMzMsIDE1MCwgMjQzLCAwLjQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyNDIsIDI1MywgMC41KTtcbiAgICBhbmltYXRpb246IHB1bHNlLWJvcmRlciAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG5cbiAgLy8gU2VsZWN0ZWQgY2VsbCAodGFwLXRvLXBsYWNlKVxuICAmLnNlbGVjdGVkIHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogI0ZGOTgwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2UwO1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgyNTUsIDE1MiwgMCwgMC40KTtcbiAgfVxuXG4gIC8vIEJvdW5jZSBvbiBzdWNjZXNzZnVsIGRyb3BcbiAgJi5ib3VuY2Uge1xuICAgIGFuaW1hdGlvbjogYm91bmNlIDAuM3MgZWFzZTtcbiAgfVxuXG4gIC8vIFNoYWtlIG9uIGludmFsaWQgbGluZVxuICAmLnNoYWtlIHtcbiAgICBhbmltYXRpb246IHNoYWtlIDAuNHMgZWFzZTtcbiAgICBib3JkZXItY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmc6bm90KC5kaXNhYmxlZCkge1xuICAgIGJvcmRlci1jb2xvcjogIzIxOTZGMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMmZkO1xuICB9XG5cbiAgJi5jZGstZHJvcC1saXN0LXJlY2VpdmluZzpub3QoLmRpc2FibGVkKSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjRkY5ODAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYzZTA7XG4gIH1cbn1cblxuLnRpbGUtYmFuayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcblxuICBoMyB7XG4gICAgbWFyZ2luOiAwIDAgMC4yNXJlbTtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXNpemU6IGNsYW1wKDAuOXJlbSwgMi41dncsIDEuMXJlbSk7XG4gIH1cbn1cblxuLmJhbmstY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiBjbGFtcCg0cHgsIDEuNXZ3LCA4cHgpO1xuICBwYWRkaW5nOiBjbGFtcCg0cHgsIDEuNXZ3LCA4cHgpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIHdpZHRoOiB2YXIoLS1ib2FyZC13aWR0aCk7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYmFuay10aWxlLXdyYXBwZXIge1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjE1cyBlYXNlO1xuICBhbmltYXRpb246IHRpbGUtZW50cmFuY2UgMC4zcyBlYXNlIGJhY2t3YXJkcztcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLXRpbGUtaW5kZXgsIDApICogNDVtcyk7XG5cbiAgJi5zZWxlY3RlZCB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4ICNGRjk4MDA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG59XG5cbi8vIEtleWJvYXJkIGZvY3VzIGluZGljYXRvcnMgZm9yIGludGVyYWN0aXZlIGdhbWUgZWxlbWVudHNcbi5ncmlkLWNlbGw6Zm9jdXMtdmlzaWJsZSxcbi5iYW5rLXRpbGUtd3JhcHBlcjpmb2N1cy12aXNpYmxlLFxuLmNlbnRlci1pbmRpY2F0b3I6Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDNweCBzb2xpZCAjMjE5NkYzO1xuICBvdXRsaW5lLW9mZnNldDogMnB4O1xufVxuXG4uaGVscC1tb2RhbC1iYWNrZHJvcCB7XG4gIEBpbmNsdWRlIG1vZGFsLWJhY2tkcm9wO1xufVxuXG4uaGVscC1tb2RhbCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiBtaW4oOTJ2dywgNTIwcHgpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDEycHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICBwYWRkaW5nOiAwLjlyZW0gMXJlbSAxcmVtO1xuXG4gIHVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjA1cmVtO1xuICAgIGNvbG9yOiAjMzc0NzRmO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ1O1xuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbiAgfVxufVxuXG4uaGVscC1tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcblxuICBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogIzFmMmEzMDtcbiAgfVxufVxuXG4uY2xvc2UtYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmZDhkYztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICM2MDdkOGI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlbHAtbW9kYWwtbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLmFyY2hpdmUtbGluayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmQ4ZGM7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjNDU1YTY0O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDAuMzVyZW0gMC42cmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGFpbHktbG9ja2VkLWNhcmQge1xuICB3aWR0aDogbWluKDkwdncsICRib2FyZC1tYXgpO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkZWUzO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMCAwIDAuMzVyZW07XG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgIGNvbG9yOiAjMjYzMjM4O1xuICB9XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiAjNTQ2ZTdhO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG5cbiAgLmNvdW50ZG93biB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMzNzQ3NGY7XG4gIH1cbn1cblxuLnNvbHV0aW9uLW1vZGFsLWJhY2tkcm9wIHtcbiAgQGluY2x1ZGUgbW9kYWwtYmFja2Ryb3A7XG59XG5cbi5zb2x1dGlvbi1tb2RhbCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiBtaW4oOTJ2dywgNDIwcHgpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDEycHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICBwYWRkaW5nOiAwLjlyZW0gMXJlbSAxcmVtO1xuICBib3JkZXItdG9wOiA0cHggc29saWQgIzg4ODtcblxuICBAaW5jbHVkZSBkaWZmaWN1bHR5LWNvbG9yKGJvcmRlci10b3AtY29sb3IpO1xufVxuXG4uc29sdXRpb24tbW9kYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6ICMxZjJhMzA7XG4gIH1cbn1cblxuLnNvbHV0aW9uLWRpZmZpY3VsdHktbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuMXJlbSAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjY1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1sZWZ0OiAwLjRyZW07XG5cbiAgQGluY2x1ZGUgZGlmZmljdWx0eS1jb2xvcihiYWNrZ3JvdW5kLWNvbG9yKTtcblxuICAvLyBEYXJrIHRleHQgb24gdGhlIHllbGxvdyAoZGlmZmljdWx0eSAxKSBiYWNrZ3JvdW5kIGZvciBXQ0FHIGNvbnRyYXN0XG4gICZbZGF0YS1kaWZmaWN1bHR5PVwiMVwiXSB7XG4gICAgY29sb3I6ICMzRTI3MjM7XG4gIH1cbn1cblxuLnNvbHV0aW9uLWJvZHkge1xuICBjb2xvcjogIzM3NDc0ZjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi8vIC0tLSBPbmUgQXdheSB0b2FzdCAtLS1cblxuQGtleWZyYW1lcyBvbmUtYXdheS1pbi1vdXQge1xuICAwJSAgIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoOHB4KTsgfVxuICAxNSUgIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoMCk7IH1cbiAgNzUlICB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDApOyB9XG4gIDEwMCUgeyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgwKTsgfVxufVxuXG4ub25lLWF3YXktdG9hc3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMS4yNXJlbTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJhY2tncm91bmQ6ICMzNzQ3NGY7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAwLjdyZW0gMS41cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgei1pbmRleDogMjAwMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGFuaW1hdGlvbjogb25lLWF3YXktaW4tb3V0IDNzIGVhc2UgZm9yd2FyZHM7XG59XG5cbi8vIC0tLSBDb3JuZXIgaGludCB0b2FzdCAtLS1cblxuQGtleWZyYW1lcyB0b2FzdC1zbGlkZS11cCB7XG4gIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7IG9wYWNpdHk6IDA7IH1cbiAgdG8gICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgICAgb3BhY2l0eTogMTsgfVxufVxuXG4uY29ybmVyLWhpbnQtdG9hc3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMS4yNXJlbTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC42cmVtO1xuICBiYWNrZ3JvdW5kOiAjMzc0NzRmO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICB3aWR0aDogbWluKDkwdncsIDM4MHB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB6LWluZGV4OiAyMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFuaW1hdGlvbjogdG9hc3Qtc2xpZGUtdXAgMC4zcyBlYXNlO1xufVxuXG4uY29ybmVyLWhpbnQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmNvcm5lci1oaW50LXRleHQge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICBmbGV4OiAxO1xufVxuXG4uY29ybmVyLWhpbnQtZGlzbWlzcyB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAgMC4xcmVtO1xuICBmbGV4LXNocmluazogMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53b3JkbWFyayB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgLmljb24tYnV0dG9uIHtcbiAgICB3aWR0aDogMzRweDtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICB9XG5cbiAgLmdyaWQtY2VsbC5kaXNhYmxlZCAuY2VudGVyLWluZGljYXRvciB7XG4gICAgLmFycm93IHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cblxuICAgIC5jYXRlZ29yeS1sYWJlbCB7XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIH1cbiAgfVxuXG4gIC50aWxlLWJhbmsgaDMge1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgfVxuXG4gIC5nYW1lLWNvbnRhaW5lciB7XG4gICAgLS1ib2FyZC13aWR0aDogbWluKDkxdncsIGNhbGMoMTAwZHZoIC0gMjQ1cHgpKTtcbiAgfVxuXG4gIC5oZWxwLW1vZGFsIHtcbiAgICB3aWR0aDogOTJ2dztcblxuICAgIHVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB9XG4gIH1cblxuICAuZGFpbHktbG9ja2VkLWNhcmQge1xuICAgIHdpZHRoOiBtaW4oOTF2dywgY2FsYygxMDBkdmggLSAyNDVweCkpO1xuICB9XG59XG4iLCIvLyBHZW5lcmF0ZXMgW2RhdGEtZGlmZmljdWx0eT1cIk5cIl0geyAkcHJvcGVydHk6IHZhcigtLWRpZmZpY3VsdHktTi1jb2xvcikgfSBmb3IgMeKAkzRcbkBtaXhpbiBkaWZmaWN1bHR5LWNvbG9yKCRwcm9wZXJ0eSkge1xuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDQge1xuICAgICZbZGF0YS1kaWZmaWN1bHR5PVwiI3skaX1cIl0ge1xuICAgICAgI3skcHJvcGVydHl9OiB2YXIoLS1kaWZmaWN1bHR5LSN7JGl9LWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gR2VuZXJhdGVzIFtkYXRhLWRpZmZpY3VsdHk9XCJOXCJdIHsgJHByb3BlcnR5OiB2YXIoLS1kaWZmaWN1bHR5LU4tYmcpIH0gZm9yIDHigJM0XG5AbWl4aW4gZGlmZmljdWx0eS1iZygkcHJvcGVydHkpIHtcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA0IHtcbiAgICAmW2RhdGEtZGlmZmljdWx0eT1cIiN7JGl9XCJdIHtcbiAgICAgICN7JHByb3BlcnR5fTogdmFyKC0tZGlmZmljdWx0eS0jeyRpfS1iZyk7XG4gICAgfVxuICB9XG59XG5cbi8vIFNoYXJlZCBmaXhlZC1vdmVybGF5IGJhY2tkcm9wIHVzZWQgYnkgaGVscCwgc29sdXRpb24sIGFuZCB3aW4gbW9kYWxzXG5AbWl4aW4gbW9kYWwtYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbiAgei1pbmRleDogMTEwMDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 3506:
/*!*************************************************************!*\
  !*** ./src/app/components/game-tile/game-tile.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameTileComponent": () => (/* binding */ GameTileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _directives_fit_text_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/fit-text.directive */ 6812);


class GameTileComponent {
    constructor() {
        this.word = '';
        this.isDraggable = true;
        this.isSelected = false;
    }
}
GameTileComponent.ɵfac = function GameTileComponent_Factory(t) { return new (t || GameTileComponent)(); };
GameTileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameTileComponent, selectors: [["app-game-tile"]], inputs: { word: "word", isDraggable: "isDraggable", isSelected: "isSelected" }, decls: 3, vars: 7, consts: [[1, "tile"], [1, "word", 3, "appFitText", "fitTextWrap"]], template: function GameTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("draggable", ctx.isDraggable)("selected", ctx.isSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appFitText", 16)("fitTextWrap", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.word);
    } }, dependencies: [_directives_fit_text_directive__WEBPACK_IMPORTED_MODULE_0__.FitTextDirective], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.tile[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  transition: all 0.2s ease;\n  cursor: default;\n  touch-action: none;\n}\n\n.tile.draggable[_ngcontent-%COMP%] {\n  cursor: grab;\n}\n\n.tile.draggable[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);\n}\n\n.tile.draggable[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n\n.tile.selected[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 3px #FF9800, 0 2px 8px rgba(0, 0, 0, 0.15);\n  transform: scale(1.05);\n}\n\n.tile[_ngcontent-%COMP%]   .word[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  line-height: 1.2;\n  padding: 2px;\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 6px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  transform: rotate(5deg);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  background: #ccc;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n@media (max-width: 768px) {\n  .tile[_ngcontent-%COMP%]   .word[_ngcontent-%COMP%] {\n    line-height: 1.15;\n    padding: 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtdGlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw2REFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxZQUFBO0FBQ0o7O0FBQ0k7RUFDRSwyQkFBQTtFQUNBLDBDQUFBO0FBQ047O0FBRUk7RUFDRSxnQkFBQTtBQUFOOztBQUlFO0VBQ0UsNERBQUE7RUFDQSxzQkFBQTtBQUZKOztBQUtFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFISjs7QUFPQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHVCQUFBO0FBSkY7O0FBT0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLHNEQUFBO0FBSkY7O0FBT0E7RUFFSTtJQUNFLGlCQUFBO0lBQ0EsWUFBQTtFQUxKO0FBQ0YiLCJmaWxlIjoiZ2FtZS10aWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpbGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG5cbiAgJi5kcmFnZ2FibGUge1xuICAgIGN1cnNvcjogZ3JhYjtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XG4gICAgfVxuICB9XG5cbiAgJi5zZWxlY3RlZCB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4ICNGRjk4MDAsIDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIH1cblxuICAud29yZCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgYmFja2dyb3VuZDogI2NjYztcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50aWxlIHtcbiAgICAud29yZCB7XG4gICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgIHBhZGRpbmc6IDNweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2923:
/*!*********************************************************!*\
  !*** ./src/app/components/library/library.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryComponent": () => (/* binding */ LibraryComponent)
/* harmony export */ });
/* harmony import */ var _models_puzzle_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/puzzle.model */ 6927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_puzzle_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/puzzle-provider */ 5080);
/* harmony import */ var _services_progress_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/progress.service */ 8458);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);







function LibraryComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 19)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 22)(5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function LibraryComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LibraryComponent_div_27_div_1_Template, 6, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.skeletonCards);
} }
function LibraryComponent_p_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Loading archive...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LibraryComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.error);
} }
function LibraryComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No puzzles match your filters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LibraryComponent_div_31_div_1_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const puzzle_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](puzzle_r8.description);
} }
function LibraryComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "div")(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, LibraryComponent_div_31_div_1_p_9_Template, 2, 1, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 34)(11, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LibraryComponent_div_31_div_1_Template_button_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const puzzle_r8 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.playPuzzle(puzzle_r8.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Play");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const puzzle_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](puzzle_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.formatDate(puzzle_r8.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("completed", puzzle_r8.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", puzzle_r8.completed ? "Completed" : "Not solved", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", puzzle_r8.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-difficulty", puzzle_r8.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.difficultyLabels[puzzle_r8.difficulty] || "Unknown");
} }
function LibraryComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LibraryComponent_div_31_div_1_Template, 15, 8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.filteredPuzzles);
} }
class LibraryComponent {
    constructor(router, puzzleProvider, progressService) {
        this.router = router;
        this.puzzleProvider = puzzleProvider;
        this.progressService = progressService;
        this.puzzles = [];
        this.loading = true;
        this.error = null;
        this.difficultyLabels = _models_puzzle_model__WEBPACK_IMPORTED_MODULE_0__.DIFFICULTY_LABELS;
        this.difficultyFilter = 'all';
        this.completionFilter = 'all';
        this.skeletonCards = new Array(4).fill(0);
    }
    ngOnInit() {
        this.puzzleProvider.getLibrary().subscribe({
            next: (puzzles) => {
                this.puzzles = puzzles.map((puzzle) => ({
                    ...puzzle,
                    completed: this.progressService.isPuzzleCompleted(puzzle.id)
                }));
                this.loading = false;
            },
            error: () => {
                this.error = 'Failed to load puzzle archive';
                this.loading = false;
            }
        });
    }
    get filteredPuzzles() {
        return this.puzzles.filter((puzzle) => {
            const difficultyMatch = this.difficultyFilter === 'all' || puzzle.difficulty === +this.difficultyFilter;
            const completionMatch = this.completionFilter === 'all' ||
                (this.completionFilter === 'completed' && puzzle.completed) ||
                (this.completionFilter === 'incomplete' && !puzzle.completed);
            return difficultyMatch && completionMatch;
        });
    }
    formatDate(date) {
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
    playPuzzle(puzzleId) {
        this.router.navigate(['/'], { queryParams: { puzzle: puzzleId } });
    }
    goToDaily() {
        this.router.navigate(['/']);
    }
}
LibraryComponent.ɵfac = function LibraryComponent_Factory(t) { return new (t || LibraryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_puzzle_provider__WEBPACK_IMPORTED_MODULE_1__.PuzzleProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_progress_service__WEBPACK_IMPORTED_MODULE_2__.ProgressService)); };
LibraryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LibraryComponent, selectors: [["app-library"]], decls: 32, vars: 7, consts: [[1, "library-container"], [1, "library-header"], ["type", "button", 1, "daily-link", 3, "click"], [1, "filters"], [3, "ngModel", "ngModelChange"], ["value", "all"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "completed"], ["value", "incomplete"], ["class", "skeleton-list", "aria-hidden", "true", 4, "ngIf"], ["class", "sr-only", 4, "ngIf"], ["class", "error", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "puzzle-list", 4, "ngIf"], ["aria-hidden", "true", 1, "skeleton-list"], ["class", "skeleton-card", 4, "ngFor", "ngForOf"], [1, "skeleton-card"], [1, "skeleton-line", "skeleton-line-title"], [1, "skeleton-line", "skeleton-line-sub"], [1, "skeleton-card-footer"], [1, "skeleton-line", "skeleton-line-tag"], [1, "skeleton-line", "skeleton-line-btn"], [1, "sr-only"], [1, "error"], [1, "empty-state"], [1, "puzzle-list"], ["class", "puzzle-card", 4, "ngFor", "ngForOf"], [1, "puzzle-card"], [1, "card-title-row"], [1, "puzzle-date"], [1, "completion-tag"], [4, "ngIf"], [1, "card-footer"], [1, "difficulty"], ["type", "button", 3, "click"]], template: function LibraryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Puzzle Archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LibraryComponent_Template_button_click_4_listener() { return ctx.goToDaily(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Back To Daily");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3)(7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Difficulty ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LibraryComponent_Template_select_ngModelChange_9_listener($event) { return ctx.difficultyFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Easy");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Hard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LibraryComponent_Template_select_ngModelChange_20_listener($event) { return ctx.completionFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Incomplete");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, LibraryComponent_div_27_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, LibraryComponent_p_28_Template, 2, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, LibraryComponent_div_29_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, LibraryComponent_div_30_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, LibraryComponent_div_31_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.difficultyFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.completionFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && ctx.filteredPuzzles.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && ctx.filteredPuzzles.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.library-container[_ngcontent-%COMP%] {\n  width: min(92vw, 720px);\n  margin: 0 auto;\n  padding: 0.75rem 0.75rem 1rem;\n  color: #263238;\n}\n\n.library-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.75rem;\n}\n\n.library-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n}\n\n.daily-link[_ngcontent-%COMP%] {\n  border: 1px solid #cfd8dc;\n  border-radius: 8px;\n  background: #fff;\n  color: #37474f;\n  padding: 0.35rem 0.65rem;\n  cursor: pointer;\n}\n\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 0.75rem;\n}\n\n.filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  font-size: 0.82rem;\n  color: #455a64;\n}\n\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid #cfd8dc;\n  border-radius: 6px;\n  padding: 0.25rem 0.35rem;\n  background: #fff;\n  color: #263238;\n}\n\n.loading[_ngcontent-%COMP%], .error[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%] {\n  padding: 0.8rem;\n  border-radius: 8px;\n  background: #ffffff;\n  border: 1px solid #d7e0e6;\n}\n\n@keyframes skeleton-shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n\n.skeleton-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0.6rem;\n}\n\n.skeleton-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #d7e0e6;\n  border-radius: 10px;\n  padding: 0.7rem 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.skeleton-line[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  background: linear-gradient(90deg, #e8edf2 25%, #f8fafc 50%, #e8edf2 75%);\n  background-size: 200% 100%;\n  animation: skeleton-shimmer 1.4s ease-in-out infinite;\n  height: 12px;\n}\n\n.skeleton-line.skeleton-line-title[_ngcontent-%COMP%] {\n  width: 45%;\n  height: 15px;\n}\n\n.skeleton-line.skeleton-line-sub[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.skeleton-line.skeleton-line-tag[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.skeleton-line.skeleton-line-btn[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 26px;\n  border-radius: 8px;\n}\n\n.skeleton-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 0.2rem;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n\n.puzzle-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0.6rem;\n}\n\n.puzzle-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #d7e0e6;\n  border-radius: 10px;\n  padding: 0.7rem 0.75rem;\n}\n\n.puzzle-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  color: #1f2a30;\n}\n\n.puzzle-card[_ngcontent-%COMP%]   .puzzle-date[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #78909c;\n  margin-top: 0.1rem;\n  display: block;\n}\n\n.puzzle-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.45rem 0 0.6rem;\n  color: #546e7a;\n  font-size: 0.86rem;\n  line-height: 1.35;\n}\n\n.card-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.6rem;\n}\n\n.completion-tag[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  padding: 0.15rem 0.4rem;\n  border-radius: 999px;\n  background: #eceff1;\n  color: #455a64;\n}\n\n.completion-tag.completed[_ngcontent-%COMP%] {\n  background: #dcedc8;\n  color: #33691e;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 8px;\n  padding: 0.35rem 0.7rem;\n  background: #1976d2;\n  color: #fff;\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n\n.difficulty[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  font-weight: 600;\n  color: #455a64;\n}\n\n.difficulty[data-difficulty=\"1\"][_ngcontent-%COMP%] {\n  color: var(--difficulty-1-color);\n}\n\n.difficulty[data-difficulty=\"2\"][_ngcontent-%COMP%] {\n  color: var(--difficulty-2-color);\n}\n\n.difficulty[data-difficulty=\"3\"][_ngcontent-%COMP%] {\n  color: var(--difficulty-3-color);\n}\n\n@media (max-width: 768px) {\n  .filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnJhcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNFO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQUY7O0FBRUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFLQTs7O0VBR0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUZGOztBQU9BO0VBQ0U7SUFBTywyQkFBQTtFQUhQO0VBSUE7SUFBTyw0QkFBQTtFQURQO0FBQ0Y7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EseUVBQUE7RUFDQSwwQkFBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtBQURGOztBQUdFO0VBQXdCLFVBQUE7RUFBWSxZQUFBO0FBQ3RDOztBQUFFO0VBQXdCLFVBQUE7QUFHMUI7O0FBRkU7RUFBd0IsV0FBQTtBQUsxQjs7QUFKRTtFQUF3QixXQUFBO0VBQWEsWUFBQTtFQUFjLGtCQUFBO0FBU3JEOztBQU5BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQVNGOztBQU5BO0VBQ0UsY0FBQTtBQVNGOztBQU5BO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQVNGOztBQU5BO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFTRjs7QUFQRTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVNKOztBQU5FO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBUUo7O0FBTEU7RUFDRSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBT0o7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFNRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQU1GOztBQUpFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBTUo7O0FBRkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUtGOztBQUhFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUZFO0VBQ0UsZ0NBQUE7QUFJSjs7QUFERTtFQUNFLGdDQUFBO0FBR0o7O0FBQUU7RUFDRSxnQ0FBQTtBQUVKOztBQUVBO0VBQ0U7SUFDRSxzQkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoibGlicmFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuXG4ubGlicmFyeS1jb250YWluZXIge1xuICB3aWR0aDogbWluKDkydncsIDcyMHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAuNzVyZW0gMC43NXJlbSAxcmVtO1xuICBjb2xvcjogIzI2MzIzODtcbn1cblxuLmxpYnJhcnktaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuXG4gIGgyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbn1cblxuLmRhaWx5LWxpbmsge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2ZkOGRjO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMzc0NzRmO1xuICBwYWRkaW5nOiAwLjM1cmVtIDAuNjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbHRlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcblxuICBsYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC4yNXJlbTtcbiAgICBmb250LXNpemU6IDAuODJyZW07XG4gICAgY29sb3I6ICM0NTVhNjQ7XG4gIH1cblxuICBzZWxlY3Qge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZmQ4ZGM7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC4zNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGNvbG9yOiAjMjYzMjM4O1xuICB9XG59XG5cbi5sb2FkaW5nLFxuLmVycm9yLFxuLmVtcHR5LXN0YXRlIHtcbiAgcGFkZGluZzogMC44cmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkN2UwZTY7XG59XG5cbi8vIC0tLSBTa2VsZXRvbiBsb2FkZXIgLS0tXG5cbkBrZXlmcmFtZXMgc2tlbGV0b24tc2hpbW1lciB7XG4gIDAlICAgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7IH1cbiAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIDA7IH1cbn1cblxuLnNrZWxldG9uLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ2FwOiAwLjZyZW07XG59XG5cbi5za2VsZXRvbi1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q3ZTBlNjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMC43cmVtIDAuNzVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xufVxuXG4uc2tlbGV0b24tbGluZSB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZThlZGYyIDI1JSwgI2Y4ZmFmYyA1MCUsICNlOGVkZjIgNzUlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gIGFuaW1hdGlvbjogc2tlbGV0b24tc2hpbW1lciAxLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBoZWlnaHQ6IDEycHg7XG5cbiAgJi5za2VsZXRvbi1saW5lLXRpdGxlIHsgd2lkdGg6IDQ1JTsgaGVpZ2h0OiAxNXB4OyB9XG4gICYuc2tlbGV0b24tbGluZS1zdWIgICB7IHdpZHRoOiAyNSU7IH1cbiAgJi5za2VsZXRvbi1saW5lLXRhZyAgIHsgd2lkdGg6IDYwcHg7IH1cbiAgJi5za2VsZXRvbi1saW5lLWJ0biAgIHsgd2lkdGg6IDY0cHg7IGhlaWdodDogMjZweDsgYm9yZGVyLXJhZGl1czogOHB4OyB9XG59XG5cbi5za2VsZXRvbi1jYXJkLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogI2M2MjgyODtcbn1cblxuLnB1enpsZS1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdhcDogMC42cmVtO1xufVxuXG4ucHV6emxlLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDdlMGU2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwLjdyZW0gMC43NXJlbTtcblxuICBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogIzFmMmEzMDtcbiAgfVxuXG4gIC5wdXp6bGUtZGF0ZSB7XG4gICAgZm9udC1zaXplOiAwLjc4cmVtO1xuICAgIGNvbG9yOiAjNzg5MDljO1xuICAgIG1hcmdpbi10b3A6IDAuMXJlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMC40NXJlbSAwIDAuNnJlbTtcbiAgICBjb2xvcjogIzU0NmU3YTtcbiAgICBmb250LXNpemU6IDAuODZyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gIH1cbn1cblxuLmNhcmQtdGl0bGUtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDAuNnJlbTtcbn1cblxuLmNvbXBsZXRpb24tdGFnIHtcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBwYWRkaW5nOiAwLjE1cmVtIDAuNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6ICNlY2VmZjE7XG4gIGNvbG9yOiAjNDU1YTY0O1xuXG4gICYuY29tcGxldGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGNlZGM4O1xuICAgIGNvbG9yOiAjMzM2OTFlO1xuICB9XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBidXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMC4zNXJlbSAwLjdyZW07XG4gICAgYmFja2dyb3VuZDogIzE5NzZkMjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbn1cblxuLmRpZmZpY3VsdHkge1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNDU1YTY0O1xuXG4gICZbZGF0YS1kaWZmaWN1bHR5PScxJ10ge1xuICAgIGNvbG9yOiB2YXIoLS1kaWZmaWN1bHR5LTEtY29sb3IpO1xuICB9XG5cbiAgJltkYXRhLWRpZmZpY3VsdHk9JzInXSB7XG4gICAgY29sb3I6IHZhcigtLWRpZmZpY3VsdHktMi1jb2xvcik7XG4gIH1cblxuICAmW2RhdGEtZGlmZmljdWx0eT0nMyddIHtcbiAgICBjb2xvcjogdmFyKC0tZGlmZmljdWx0eS0zLWNvbG9yKTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZpbHRlcnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 3289:
/*!*****************************************************************!*\
  !*** ./src/app/components/stats-modal/stats-modal.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsModalComponent": () => (/* binding */ StatsModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_stats_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/stats-provider */ 9792);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




function StatsModalComponent_ng_container_28_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r4.mistakes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", row_r4.barPct, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r4.count);
} }
function StatsModalComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Mistake Distribution");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, StatsModalComponent_ng_container_28_div_4_Template, 7, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.distributionRows);
} }
function StatsModalComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Complete a puzzle to start tracking stats!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class StatsModalComponent {
    constructor(statsProvider) {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.stats = statsProvider.getAggregate();
        const dist = this.stats.mistakeDistribution;
        const maxCount = Math.max(...Object.values(dist), 1);
        this.distributionRows = Object.entries(dist)
            .map(([k, v]) => ({ mistakes: Number(k), count: v, barPct: (v / maxCount) * 100 }))
            .sort((a, b) => a.mistakes - b.mistakes);
    }
    get avgMistakesDisplay() {
        return this.stats.averageMistakes.toFixed(1);
    }
}
StatsModalComponent.ɵfac = function StatsModalComponent_Factory(t) { return new (t || StatsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_stats_provider__WEBPACK_IMPORTED_MODULE_0__.StatsProvider)); };
StatsModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StatsModalComponent, selectors: [["app-stats-modal"]], outputs: { close: "close" }, decls: 31, vars: 6, consts: [[1, "overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "Your stats", 1, "modal", 3, "click"], [1, "modal-header"], ["aria-label", "Close stats", 1, "close-btn", 3, "click"], [1, "summary-grid"], [1, "summary-stat"], [1, "summary-value"], [1, "summary-label"], [4, "ngIf", "ngIfElse"], ["noData", ""], [1, "dist-title"], [1, "distribution"], ["class", "dist-row", 4, "ngFor", "ngForOf"], [1, "dist-row"], [1, "dist-label"], [1, "dist-bar-track"], [1, "dist-bar"], [1, "dist-count"], [1, "no-data"]], template: function StatsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StatsModalComponent_Template_div_click_0_listener() { return ctx.close.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StatsModalComponent_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Your Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StatsModalComponent_Template_button_click_5_listener() { return ctx.close.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u2715");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Played");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5)(14, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Streak");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5)(19, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Best Streak");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 5)(24, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Avg Mistakes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, StatsModalComponent_ng_container_28_Template, 5, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, StatsModalComponent_ng_template_29_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.totalSolved);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.currentStreak);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stats.maxStreak);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.avgMistakesDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.distributionRows.length > 0)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  z-index: 1100;\n}\n\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 1.5rem 1.75rem;\n  width: min(90vw, 360px);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n}\n\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.4rem;\n  color: #333;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  border: 1px solid #cfd8dc;\n  background: #fff;\n  color: #607d8b;\n  border-radius: 6px;\n  width: 30px;\n  height: 30px;\n  font-size: 0.9rem;\n  cursor: pointer;\n}\n\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.summary-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.2rem;\n}\n\n.summary-value[_ngcontent-%COMP%] {\n  font-size: 1.9rem;\n  font-weight: 700;\n  color: #333;\n  line-height: 1;\n}\n\n.summary-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #888;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  text-align: center;\n}\n\n.dist-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.6rem;\n  font-size: 0.85rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #555;\n}\n\n.distribution[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.dist-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.5rem 1fr 1.75rem;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.dist-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #555;\n  text-align: right;\n}\n\n.dist-bar-track[_ngcontent-%COMP%] {\n  background: #eee;\n  border-radius: 3px;\n  height: 18px;\n  overflow: hidden;\n}\n\n.dist-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(90deg, #667eea, #764ba2);\n  border-radius: 3px;\n  min-width: 4px;\n  transition: width 0.4s ease;\n}\n\n.dist-count[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #777;\n  text-align: right;\n}\n\n.no-data[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #999;\n  font-size: 0.9rem;\n  font-style: italic;\n  margin: 0.5rem 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQ2tCRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBRGxCRjs7QUFIQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMENBQUE7QUFNRjs7QUFIQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUFNRjs7QUFKRTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFNSjs7QUFGQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUtGOztBQUhFO0VBQ0UsbUJBQUE7QUFLSjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFFRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLG9EQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQUY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFGRiIsImZpbGUiOiJzdGF0cy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ21peGlucycgYXMgKjtcblxuLm92ZXJsYXkge1xuICBAaW5jbHVkZSBtb2RhbC1iYWNrZHJvcDtcbn1cblxuLm1vZGFsIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDEuNXJlbSAxLjc1cmVtO1xuICB3aWR0aDogbWluKDkwdncsIDM2MHB4KTtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuXG4gIGgyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbn1cblxuLmNsb3NlLWJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmQ4ZGM7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjNjA3ZDhiO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgfVxufVxuXG4vLyAtLS0gU3VtbWFyeSBzdGF0cyAtLS1cblxuLnN1bW1hcnktZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5zdW1tYXJ5LXN0YXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMnJlbTtcbn1cblxuLnN1bW1hcnktdmFsdWUge1xuICBmb250LXNpemU6IDEuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMzMzM7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uc3VtbWFyeS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBjb2xvcjogIzg4ODtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8vIC0tLSBEaXN0cmlidXRpb24gY2hhcnQgLS0tXG5cbi5kaXN0LXRpdGxlIHtcbiAgbWFyZ2luOiAwIDAgMC42cmVtO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5kaXN0cmlidXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDVweDtcbn1cblxuLmRpc3Qtcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVyZW0gMWZyIDEuNzVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uZGlzdC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM1NTU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZGlzdC1iYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGhlaWdodDogMThweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmRpc3QtYmFyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2NjdlZWEsICM3NjRiYTIpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1pbi13aWR0aDogNHB4O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2U7XG59XG5cbi5kaXN0LWNvdW50IHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjNzc3O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLy8gLS0tIEVtcHR5IHN0YXRlIC0tLVxuXG4ubm8tZGF0YSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbjogMC41cmVtIDAgMDtcbn1cbiIsIi8vIEdlbmVyYXRlcyBbZGF0YS1kaWZmaWN1bHR5PVwiTlwiXSB7ICRwcm9wZXJ0eTogdmFyKC0tZGlmZmljdWx0eS1OLWNvbG9yKSB9IGZvciAx4oCTNFxuQG1peGluIGRpZmZpY3VsdHktY29sb3IoJHByb3BlcnR5KSB7XG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggNCB7XG4gICAgJltkYXRhLWRpZmZpY3VsdHk9XCIjeyRpfVwiXSB7XG4gICAgICAjeyRwcm9wZXJ0eX06IHZhcigtLWRpZmZpY3VsdHktI3skaX0tY29sb3IpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBHZW5lcmF0ZXMgW2RhdGEtZGlmZmljdWx0eT1cIk5cIl0geyAkcHJvcGVydHk6IHZhcigtLWRpZmZpY3VsdHktTi1iZykgfSBmb3IgMeKAkzRcbkBtaXhpbiBkaWZmaWN1bHR5LWJnKCRwcm9wZXJ0eSkge1xuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDQge1xuICAgICZbZGF0YS1kaWZmaWN1bHR5PVwiI3skaX1cIl0ge1xuICAgICAgI3skcHJvcGVydHl9OiB2YXIoLS1kaWZmaWN1bHR5LSN7JGl9LWJnKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gU2hhcmVkIGZpeGVkLW92ZXJsYXkgYmFja2Ryb3AgdXNlZCBieSBoZWxwLCBzb2x1dGlvbiwgYW5kIHdpbiBtb2RhbHNcbkBtaXhpbiBtb2RhbC1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41NSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICB6LWluZGV4OiAxMTAwO1xufVxuIl19 */"] });


/***/ }),

/***/ 6434:
/*!*********************************************************************!*\
  !*** ./src/app/components/submit-puzzle/submit-puzzle.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitPuzzleComponent": () => (/* binding */ SubmitPuzzleComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var _data_placeholder_words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/placeholder-words */ 1338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_puzzle_validator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/puzzle-validator.service */ 8390);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _directives_fit_text_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/fit-text.directive */ 6812);









function SubmitPuzzleComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Puzzle Submitted!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Thanks for your contribution. We'll review your puzzle and add it to the archive if it meets our guidelines.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubmitPuzzleComponent_div_6_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.goBack()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u2190 Back to Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function SubmitPuzzleComponent_ng_container_7_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Display name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SubmitPuzzleComponent_ng_container_7_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SubmitPuzzleComponent_ng_container_7_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.emailError, " ");
} }
function SubmitPuzzleComponent_ng_container_7_div_27_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r17.validationResult.errors.categories[i_r16].name, " ");
} }
function SubmitPuzzleComponent_ng_container_7_div_27_div_11_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SubmitPuzzleComponent_ng_container_7_div_27_div_11_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r23.validationResult.errors.categories[i_r16].words[j_r21], " ");
} }
function SubmitPuzzleComponent_ng_container_7_div_27_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44)(1, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SubmitPuzzleComponent_ng_container_7_div_27_div_11_span_3_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SubmitPuzzleComponent_ng_container_7_div_27_div_11_Template_input_ngModelChange_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const j_r21 = restoredCtx.index; const cat_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]((cat_r15.words[j_r21] = $event)); })("ngModelChange", function SubmitPuzzleComponent_ng_container_7_div_27_div_11_Template_input_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r29.onPuzzleFieldChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SubmitPuzzleComponent_ng_container_7_div_27_div_11_div_5_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r21 = ctx.index;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r16 = ctx_r30.index;
    const cat_r15 = ctx_r30.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("corner-field", j_r21 === 0 || j_r21 === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("corner-word-label", j_r21 === 0 || j_r21 === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r18.getWordLabel(j_r21), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r18.isAutoFilled(i_r16, j_r21));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("input-error", ctx_r18.submitted && !ctx_r18.isAutoFilled(i_r16, j_r21) && (ctx_r18.validationResult == null ? null : ctx_r18.validationResult.errors == null ? null : ctx_r18.validationResult.errors.categories == null ? null : ctx_r18.validationResult.errors.categories[i_r16] == null ? null : ctx_r18.validationResult.errors.categories[i_r16].words == null ? null : ctx_r18.validationResult.errors.categories[i_r16].words[j_r21]))("auto-filled-input", ctx_r18.isAutoFilled(i_r16, j_r21));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", cat_r15.words[j_r21])("name", "word" + i_r16 + "_" + j_r21)("placeholder", ctx_r18.isAutoFilled(i_r16, j_r21) ? ctx_r18.getAutoFillHint(i_r16, j_r21) : "")("readonly", ctx_r18.isAutoFilled(i_r16, j_r21));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r18.submitted && !ctx_r18.isAutoFilled(i_r16, j_r21) && (ctx_r18.validationResult == null ? null : ctx_r18.validationResult.errors == null ? null : ctx_r18.validationResult.errors.categories == null ? null : ctx_r18.validationResult.errors.categories[i_r16] == null ? null : ctx_r18.validationResult.errors.categories[i_r16].words == null ? null : ctx_r18.validationResult.errors.categories[i_r16].words[j_r21]));
} }
function SubmitPuzzleComponent_ng_container_7_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35)(1, "div", 36)(2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 10)(6, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Category Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SubmitPuzzleComponent_ng_container_7_div_27_Template_input_ngModelChange_8_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const cat_r15 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](cat_r15.name = $event); })("ngModelChange", function SubmitPuzzleComponent_ng_container_7_div_27_Template_input_ngModelChange_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r33.onPuzzleFieldChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, SubmitPuzzleComponent_ng_container_7_div_27_div_9_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SubmitPuzzleComponent_ng_container_7_div_27_div_11_Template, 6, 15, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 42)(13, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Category Description (optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "textarea", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SubmitPuzzleComponent_ng_container_7_div_27_Template_textarea_ngModelChange_15_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const cat_r15 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](cat_r15.description = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const cat_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", ctx_r7.catBgColors[i_r16 + 1])("border-color", ctx_r7.catColors[i_r16 + 1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r16 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cat_r15.name.trim() || ctx_r7.getCategoryLabel(i_r16), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", "catName" + i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("input-error", ctx_r7.submitted && (ctx_r7.validationResult == null ? null : ctx_r7.validationResult.errors == null ? null : ctx_r7.validationResult.errors.categories == null ? null : ctx_r7.validationResult.errors.categories[i_r16] == null ? null : ctx_r7.validationResult.errors.categories[i_r16].name));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "catName" + i_r16)("ngModel", cat_r15.name)("name", "catName" + i_r16)("placeholder", ctx_r7.categoryPlaceholders[i_r16]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.submitted && (ctx_r7.validationResult == null ? null : ctx_r7.validationResult.errors == null ? null : ctx_r7.validationResult.errors.categories == null ? null : ctx_r7.validationResult.errors.categories[i_r16] == null ? null : ctx_r7.validationResult.errors.categories[i_r16].name));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", cat_r15.words)("ngForTrackBy", ctx_r7.trackByIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", "catDesc" + i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "catDesc" + i_r16)("ngModel", cat_r15.description)("name", "catDesc" + i_r16);
} }
function SubmitPuzzleComponent_ng_container_7_div_33_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cell_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r37.getCenterArrow(cell_r35.centerFor));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appFitText", 12)("fitTextWrap", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cell_r35.word);
} }
function SubmitPuzzleComponent_ng_container_7_div_33_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("cell-empty", !cell_r35.word);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appFitText", 16)("fitTextWrap", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cell_r35.word || "\u00B7", " ");
} }
function SubmitPuzzleComponent_ng_container_7_div_33_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("cell-empty", !cell_r35.word);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appFitText", 16)("fitTextWrap", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cell_r35.word || "\u00B7", " ");
} }
function SubmitPuzzleComponent_ng_container_7_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SubmitPuzzleComponent_ng_container_7_div_33_ng_container_1_Template, 5, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SubmitPuzzleComponent_ng_container_7_div_33_span_2_Template, 2, 5, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SubmitPuzzleComponent_ng_container_7_div_33_span_3_Template, 2, 5, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r35 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", cell_r35.catIndex === -1 ? ctx_r8.catColors[cell_r35.centerFor] : cell_r35.catIndex > 0 && cell_r35.word ? ctx_r8.catColors[cell_r35.catIndex] : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("preview-corner", cell_r35.isCorner)("preview-center", cell_r35.catIndex === -1)("preview-cat-filled", cell_r35.catIndex > 0 && cell_r35.word)("preview-cat-empty", cell_r35.catIndex > 0 && !cell_r35.word);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cat", cell_r35.catIndex === -1 ? cell_r35.centerFor : cell_r35.catIndex > 0 ? cell_r35.catIndex : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", cell_r35.catIndex === -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", cell_r35.isCorner);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !cell_r35.isCorner && cell_r35.catIndex > 0);
} }
function SubmitPuzzleComponent_ng_container_7_div_39_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const err_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](err_r44);
} }
function SubmitPuzzleComponent_ng_container_7_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54)(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SubmitPuzzleComponent_ng_container_7_div_39_li_2_Template, 2, 1, "li", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r9.validationResult.errors.global);
} }
function SubmitPuzzleComponent_ng_container_7_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r10.submitError, " ");
} }
function SubmitPuzzleComponent_ng_container_7_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " You must agree before submitting. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SubmitPuzzleComponent_ng_container_7_div_46_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const err_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](err_r46);
} }
function SubmitPuzzleComponent_ng_container_7_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 57)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Please fix the following before submitting:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SubmitPuzzleComponent_ng_container_7_div_46_li_4_Template, 2, 1, "li", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r12.summaryErrors);
} }
function SubmitPuzzleComponent_ng_container_7_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Submit Puzzle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SubmitPuzzleComponent_ng_container_7_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Submitting...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SubmitPuzzleComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Propose a new puzzle for the community. Fill in 4 categories with 4 words each. Categories form a ring \u2014 each shares one ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "corner word");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " with the next. The First and Second Corner fields link automatically as you fill them in. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SubmitPuzzleComponent_ng_container_7_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r47.onSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "fieldset", 8)(8, "section", 9)(9, "div", 10)(10, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Display Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SubmitPuzzleComponent_ng_container_7_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r49.formData.displayName = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SubmitPuzzleComponent_ng_container_7_div_13_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10)(15, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SubmitPuzzleComponent_ng_container_7_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r50.formData.email = $event); })("blur", function SubmitPuzzleComponent_ng_container_7_Template_input_blur_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r51.onEmailBlur()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, SubmitPuzzleComponent_ng_container_7_div_18_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, SubmitPuzzleComponent_ng_container_7_div_19_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 10)(21, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Puzzle Title (optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SubmitPuzzleComponent_ng_container_7_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r52.formData.title = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "section", 18)(25, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, SubmitPuzzleComponent_ng_container_7_div_27_Template, 16, 20, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "section", 20)(29, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Puzzle Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 21)(32, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, SubmitPuzzleComponent_ng_container_7_div_33_Template, 4, 14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "section", 24)(35, "div", 10)(36, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Notes (optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SubmitPuzzleComponent_ng_container_7_Template_textarea_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r53.formData.notes = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, SubmitPuzzleComponent_ng_container_7_div_39_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, SubmitPuzzleComponent_ng_container_7_div_40_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 29)(42, "label", 30)(43, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SubmitPuzzleComponent_ng_container_7_Template_input_ngModelChange_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r54.permissionGranted = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " By submitting, you grant permission for this puzzle to be included in Cornerz. Your display name will be credited. Your puzzle may be selected as a daily puzzle! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, SubmitPuzzleComponent_ng_container_7_div_45_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, SubmitPuzzleComponent_ng_container_7_div_46_Template, 5, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, SubmitPuzzleComponent_ng_container_7_span_48_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, SubmitPuzzleComponent_ng_container_7_span_49_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.formData.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.submitted && !ctx_r1.formData.displayName.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.formData.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.submitted && !ctx_r1.formData.email.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.emailError && ctx_r1.formData.email.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.formData.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.formData.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.previewCells)("ngForTrackBy", ctx_r1.trackByIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.formData.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.submitted && (ctx_r1.validationResult == null ? null : ctx_r1.validationResult.errors == null ? null : ctx_r1.validationResult.errors.global == null ? null : ctx_r1.validationResult.errors.global.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.submitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.permissionGranted);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.submitted && !ctx_r1.permissionGranted);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.summaryErrors.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.submitting);
} }
class SubmitPuzzleComponent {
    constructor(http, router, validator) {
        this.http = http;
        this.router = router;
        this.validator = validator;
        this.formData = {
            displayName: '',
            email: '',
            title: '',
            categories: [
                { name: '', words: ['', '', '', ''], description: '' },
                { name: '', words: ['', '', '', ''], description: '' },
                { name: '', words: ['', '', '', ''], description: '' },
                { name: '', words: ['', '', '', ''], description: '' }
            ],
            notes: ''
        };
        this.validationResult = null;
        this.emailError = null;
        this.submitted = false;
        this.submitting = false;
        this.submitSuccess = false;
        this.submitError = null;
        this.permissionGranted = false;
        this.categoryPlaceholders = [];
        this.previewCells = [];
        this.catColors = {
            1: '#F9A825', 2: '#2E7D32', 3: '#1565C0', 4: '#6A1B9A'
        };
        this.catBgColors = {
            1: '#FFF8E1', 2: '#E8F5E9', 3: '#E3F2FD', 4: '#F3E5F5'
        };
        this.categoryNumbers = [1, 2, 3, 4];
        this.categoryPositions = ['Top', 'Right', 'Bottom', 'Left'];
        this.basinUrl = 'https://usebasin.com/f/9da8fc322bb0';
    }
    getCategoryLabel(index) {
        return this.categoryPositions[index] + ' Category';
    }
    ngOnInit() {
        this.generatePlaceholders();
        this.computePreviewCells();
    }
    pick(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    generatePlaceholders() {
        // Cat 0 (Top):    "e.g. Types of [noun]"
        this.categoryPlaceholders[0] = `e.g. Types of ${this.pick(_data_placeholder_words__WEBPACK_IMPORTED_MODULE_0__.NOUNS)}`;
        // Cat 1 (Right):  "e.g. _______ [noun]"
        this.categoryPlaceholders[1] = `e.g. _______ ${this.pick(_data_placeholder_words__WEBPACK_IMPORTED_MODULE_0__.NOUNS)}`;
        // Cat 2 (Bottom): "e.g. [adjective] [plural noun]"
        this.categoryPlaceholders[2] = `e.g. ${this.pick(_data_placeholder_words__WEBPACK_IMPORTED_MODULE_0__.ADJECTIVES)} ${this.pluralize(this.pick(_data_placeholder_words__WEBPACK_IMPORTED_MODULE_0__.NOUNS))}`;
        // Cat 3 (Left):   random pattern (Homophones of X / Shades of X / etc.)
        const pattern = this.pick(_data_placeholder_words__WEBPACK_IMPORTED_MODULE_0__.CAT4_PATTERNS);
        const word = pattern.bank === 'colors' ? this.pick(_data_placeholder_words__WEBPACK_IMPORTED_MODULE_0__.COLORS) : this.pick(_data_placeholder_words__WEBPACK_IMPORTED_MODULE_0__.NOUNS);
        this.categoryPlaceholders[3] = `e.g. ${pattern.prefix} ${word}`;
    }
    pluralize(word) {
        // Pluralize the last space-separated token so multi-word nouns work too
        const parts = word.split(' ');
        const last = parts[parts.length - 1];
        const lo = last.toLowerCase();
        let plural;
        if (lo.endsWith('ch') || lo.endsWith('sh') || lo.endsWith('x') || lo.endsWith('z') || lo.endsWith('s')) {
            plural = last + 'es';
        }
        else if (lo.endsWith('fe')) {
            plural = last.slice(0, -2) + 'ves';
        }
        else if (lo.endsWith('f') && !lo.endsWith('ff')) {
            plural = last.slice(0, -1) + 'ves';
        }
        else if (lo.endsWith('y') && lo.length > 1 && !'aeiou'.includes(lo[lo.length - 2])) {
            plural = last.slice(0, -1) + 'ies';
        }
        else {
            plural = last + 's';
        }
        parts[parts.length - 1] = plural;
        return parts.join(' ');
    }
    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    syncCorners() {
        const cats = this.formData.categories;
        // Each category's First Corner is the previous category's Second Corner
        cats[1].words[0] = cats[0].words[3];
        cats[2].words[0] = cats[1].words[3];
        cats[3].words[0] = cats[2].words[3];
        // Category 4's Second Corner closes the ring back to Category 1's First Corner
        cats[3].words[3] = cats[0].words[0];
    }
    onPuzzleFieldChange() {
        this.syncCorners();
        this.computePreviewCells();
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => this.runPuzzleValidation(), 400);
    }
    runPuzzleValidation() {
        const categories = this.formData.categories.map(c => ({
            name: c.name,
            words: [...c.words]
        }));
        this.validationResult = this.validator.validate(categories);
    }
    onEmailBlur() {
        const email = this.formData.email.trim();
        this.emailError = email && !this.isValidEmail(email) ? 'Please enter a valid email address.' : null;
    }
    get summaryErrors() {
        if (!this.submitted)
            return [];
        const errors = [];
        if (!this.formData.displayName.trim())
            errors.push('Display name is required.');
        if (!this.formData.email.trim())
            errors.push('Email is required.');
        else if (this.emailError)
            errors.push(this.emailError);
        for (let i = 0; i < 4; i++) {
            const catErrs = this.validationResult?.errors?.categories?.[i];
            const label = this.getCategoryLabel(i);
            if (catErrs?.name)
                errors.push(`${label}: ${catErrs.name}`);
            const wordErrs = catErrs?.words;
            if (wordErrs?.some((w, j) => w && !this.isAutoFilled(i, j))) {
                errors.push(`${label}: one or more words have errors.`);
            }
        }
        const globalErrs = this.validationResult?.errors?.global;
        if (globalErrs?.length)
            errors.push(...globalErrs);
        if (!this.permissionGranted)
            errors.push('You must agree before submitting.');
        return errors;
    }
    onSubmit() {
        this.submitted = true;
        clearTimeout(this.debounceTimer);
        this.syncCorners();
        this.computePreviewCells();
        this.runPuzzleValidation();
        const email = this.formData.email.trim();
        if (email)
            this.emailError = this.isValidEmail(email) ? null : 'Please enter a valid email address.';
        if (this.summaryErrors.length > 0) {
            return;
        }
        this.submitting = true;
        this.submitError = null;
        const payload = this.buildBasinPayload();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({ Accept: 'application/json' });
        this.http.post(this.basinUrl, payload, { headers }).subscribe({
            next: () => {
                this.submitting = false;
                this.submitSuccess = true;
            },
            error: () => {
                this.submitting = false;
                this.submitError = 'Something went wrong. Please try again.';
            }
        });
    }
    buildBasinPayload() {
        const payload = {
            display_name: this.formData.displayName.trim(),
            email: this.formData.email.trim(),
            title: this.formData.title.trim(),
            notes: this.formData.notes.trim()
        };
        for (let i = 0; i < 4; i++) {
            const cat = this.formData.categories[i];
            payload[`category_${i + 1}_name`] = cat.name.trim();
            payload[`category_${i + 1}_description`] = cat.description.trim();
            for (let j = 0; j < 4; j++) {
                payload[`category_${i + 1}_word_${j + 1}`] = cat.words[j].trim();
            }
        }
        return payload;
    }
    trackByIndex(index) {
        return index;
    }
    goBack() {
        this.router.navigate(['/']);
    }
    getWordLabel(wordIndex) {
        return ['First Corner', 'Unique Word 1', 'Unique Word 2', 'Second Corner'][wordIndex];
    }
    isAutoFilled(catIndex, wordIndex) {
        return (wordIndex === 0 && catIndex > 0) || (wordIndex === 3 && catIndex === 3);
    }
    getAutoFillHint(catIndex, wordIndex) {
        if (wordIndex === 0 && catIndex > 0) {
            return `Filled from ${this.categoryPositions[catIndex - 1]} Category's 2nd Corner`;
        }
        if (wordIndex === 3 && catIndex === 3) {
            return `Filled from ${this.categoryPositions[0]} Category's 1st Corner`;
        }
        return '';
    }
    getCenterArrow(centerFor) {
        return ['', '↑', '→', '↓', '←'][centerFor] || '';
    }
    computePreviewCells() {
        const cats = this.formData.categories;
        const w = (ci) => cats[ci].words;
        const corner = (word) => ({ word: word.trim().toUpperCase(), catIndex: 0, isCorner: true });
        const catCell = (word, ci) => ({ word: word.trim().toUpperCase(), catIndex: ci, isCorner: false });
        const center = (ci) => ({ word: cats[ci - 1].name.trim() || `${this.categoryPositions[ci - 1]} Category`, catIndex: -1, isCorner: false, centerFor: ci });
        this.previewCells = [
            corner(w(0)[0]),
            catCell(w(0)[1], 1),
            catCell(w(0)[2], 1),
            corner(w(0)[3]),
            catCell(w(3)[2], 4),
            center(4),
            center(1),
            catCell(w(1)[1], 2),
            catCell(w(3)[1], 4),
            center(3),
            center(2),
            catCell(w(1)[2], 2),
            corner(w(3)[0]),
            catCell(w(2)[2], 3),
            catCell(w(2)[1], 3),
            corner(w(2)[0]), // 15: BR = Cat3 First Corner = Cat2 Second Corner
        ];
    }
}
SubmitPuzzleComponent.ɵfac = function SubmitPuzzleComponent_Factory(t) { return new (t || SubmitPuzzleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_puzzle_validator_service__WEBPACK_IMPORTED_MODULE_1__.PuzzleValidatorService)); };
SubmitPuzzleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SubmitPuzzleComponent, selectors: [["app-submit-puzzle"]], decls: 8, vars: 2, consts: [[1, "submit-container"], [1, "submit-header"], ["type", "button", 1, "back-btn", 3, "click"], ["class", "success-card", 4, "ngIf"], [4, "ngIf"], [1, "success-card"], [1, "submit-description"], [3, "ngSubmit"], [3, "disabled"], [1, "meta-section"], [1, "field-group"], ["for", "displayName"], ["id", "displayName", "type", "text", "name", "displayName", "placeholder", "Your name", 3, "ngModel", "ngModelChange"], ["class", "field-error", 4, "ngIf"], ["for", "email"], ["id", "email", "type", "email", "name", "email", "placeholder", "you@example.com", 3, "ngModel", "ngModelChange", "blur"], ["for", "title"], ["id", "title", "type", "text", "name", "title", "placeholder", "Give your puzzle a name", 3, "ngModel", "ngModelChange"], [1, "categories-section"], ["class", "category-block", 4, "ngFor", "ngForOf"], [1, "preview-section"], [1, "preview-grid-wrap"], [1, "preview-grid"], ["class", "preview-cell", 3, "preview-corner", "preview-center", "preview-cat-filled", "preview-cat-empty", "backgroundColor", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "notes-section"], ["for", "notes"], ["id", "notes", "name", "notes", "rows", "3", "placeholder", "Any additional context about your puzzle...", 3, "ngModel", "ngModelChange"], ["class", "global-errors", 4, "ngIf"], ["class", "submit-error", 4, "ngIf"], [1, "permission-checkbox"], [1, "checkbox-label"], ["type", "checkbox", "name", "permissionGranted", 3, "ngModel", "ngModelChange"], ["class", "error-summary", 4, "ngIf"], ["type", "submit", 1, "submit-btn", 3, "disabled"], [1, "field-error"], [1, "category-block"], [1, "category-header"], [1, "category-number"], [3, "for"], ["type", "text", 3, "id", "ngModel", "name", "placeholder", "ngModelChange"], [1, "words-grid"], ["class", "field-group word-field", 3, "corner-field", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "field-group", "category-description"], ["rows", "2", "placeholder", "Explain the theme or how the words connect...", 3, "id", "ngModel", "name", "ngModelChange"], [1, "field-group", "word-field"], [1, "word-label"], ["class", "auto-fill-badge", 4, "ngIf"], ["type", "text", 3, "ngModel", "name", "placeholder", "readonly", "ngModelChange"], [1, "auto-fill-badge"], [1, "preview-cell"], ["class", "cell-word", 3, "cell-empty", "appFitText", "fitTextWrap", 4, "ngIf"], [1, "center-arrow"], [1, "center-label", 3, "appFitText", "fitTextWrap"], [1, "cell-word", 3, "appFitText", "fitTextWrap"], [1, "global-errors"], [4, "ngFor", "ngForOf"], [1, "submit-error"], [1, "error-summary"]], template: function SubmitPuzzleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Submit a Puzzle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubmitPuzzleComponent_Template_button_click_4_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u2190 Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SubmitPuzzleComponent_div_6_Template, 7, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SubmitPuzzleComponent_ng_container_7_Template, 50, 19, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.submitSuccess);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _directives_fit_text_directive__WEBPACK_IMPORTED_MODULE_2__.FitTextDirective], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.submit-container[_ngcontent-%COMP%] {\n  width: min(92vw, 720px);\n  margin: 0 auto;\n  padding: 0.75rem 0.75rem 1.5rem;\n  color: #263238;\n}\n\n.submit-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.75rem;\n}\n\n.submit-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n}\n\n.back-btn[_ngcontent-%COMP%] {\n  border: 1px solid #cfd8dc;\n  border-radius: 8px;\n  background: #fff;\n  color: #37474f;\n  padding: 0.35rem 0.65rem;\n  cursor: pointer;\n}\n\n.submit-description[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  color: #546e7a;\n  font-size: 0.86rem;\n  line-height: 1.4;\n}\n\n.meta-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n  margin-bottom: 1.25rem;\n}\n\n.field-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n\n.field-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #455a64;\n  font-weight: 500;\n}\n\n.field-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .field-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: 1px solid #cfd8dc;\n  border-radius: 6px;\n  padding: 0.35rem 0.5rem;\n  width: 100%;\n  font-size: 0.88rem;\n  color: #263238;\n  background: #fff;\n  box-sizing: border-box;\n}\n\n.field-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .field-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #90a4ae;\n}\n\n.field-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .field-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1976d2;\n}\n\n.field-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  font-family: inherit;\n}\n\n.input-error[_ngcontent-%COMP%] {\n  border-color: #c62828 !important;\n}\n\n.field-error[_ngcontent-%COMP%] {\n  color: #c62828;\n  font-size: 0.78rem;\n  margin-top: 0.2rem;\n}\n\n.word-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  color: #546e7a;\n  font-weight: 500;\n}\n\n.corner-word-label[_ngcontent-%COMP%] {\n  color: #1f2a30;\n  font-weight: 600;\n}\n\n.auto-fill-badge[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  background: #e3f2fd;\n  color: #1565c0;\n  border-radius: 3px;\n  padding: 0 4px;\n  line-height: 1.4;\n  font-weight: 500;\n}\n\n.auto-filled-input[_ngcontent-%COMP%] {\n  background: #e3f2fd !important;\n  color: #1565c0 !important;\n  cursor: default;\n  border-color: #90caf9 !important;\n}\n\n.auto-filled-input[_ngcontent-%COMP%]::placeholder {\n  color: #90a4ae;\n  font-style: italic;\n  font-size: 0.75rem;\n}\n\n.categories-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n\n.categories-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.6rem;\n  font-size: 1.05rem;\n  color: #1f2a30;\n}\n\n.category-block[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #d7e0e6;\n  border-radius: 10px;\n  padding: 0.7rem 0.75rem;\n  margin-bottom: 0.6rem;\n}\n\n.category-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: #37474f;\n  margin-bottom: 0.5rem;\n}\n\n.category-number[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  border: 1px solid;\n  font-size: 0.75rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n\n.words-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n}\n\n.category-description[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n\n.preview-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n\n.preview-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1.05rem;\n  color: #1f2a30;\n}\n\n.preview-grid-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.preview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: clamp(4px, 1.5vw, 8px);\n  width: min(100%, 400px);\n  border: 2px solid #333;\n  border-radius: 8px;\n  padding: clamp(4px, 1.5vw, 8px);\n  background-color: #f5f5f5;\n}\n\n.preview-cell[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3px;\n  background: transparent;\n  border: 2px dashed #ccc;\n  overflow: hidden;\n  text-align: center;\n}\n\n.preview-corner[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border: 2px solid #666 !important;\n  border-radius: 6px !important;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.preview-corner[_ngcontent-%COMP%]   .cell-word[_ngcontent-%COMP%] {\n  color: #263238 !important;\n  text-shadow: none !important;\n  font-weight: 700;\n}\n\n.preview-center[_ngcontent-%COMP%] {\n  border: 2px solid #888 !important;\n  border-radius: 4px !important;\n  background: #666 !important;\n  gap: 2px;\n}\n\n.preview-cat-filled[_ngcontent-%COMP%] {\n  border: none !important;\n  border-radius: 6px !important;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n\n.preview-cat-empty[_ngcontent-%COMP%] {\n  border: 2px dashed #ccc !important;\n  background: transparent !important;\n}\n\n.center-arrow[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  line-height: 1;\n  font-weight: 700;\n  color: white;\n}\n\n.preview-cell[data-cat=\"1\"][_ngcontent-%COMP%]   .center-arrow[_ngcontent-%COMP%], .preview-cell[data-cat=\"1\"][_ngcontent-%COMP%]   .center-label[_ngcontent-%COMP%], .preview-cell[data-cat=\"1\"][_ngcontent-%COMP%]:not(.preview-corner)   .cell-word[_ngcontent-%COMP%]:not(.cell-empty) {\n  color: #3E2723;\n  text-shadow: none;\n}\n\n.center-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  line-height: 1.2;\n  overflow: hidden;\n  max-width: 100%;\n  padding: 0 2px;\n  width: 100%;\n  text-align: center;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.cell-word[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-transform: uppercase;\n  line-height: 1.2;\n  color: white;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  text-align: center;\n  width: 100%;\n  padding: 2px;\n  box-sizing: border-box;\n}\n\n.cell-word.cell-empty[_ngcontent-%COMP%] {\n  color: #b0bec5;\n  font-size: 1.2rem;\n  font-weight: 400;\n  text-shadow: none;\n}\n\n.notes-section[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.error-summary[_ngcontent-%COMP%], .global-errors[_ngcontent-%COMP%] {\n  border: 1px solid #ef9a9a;\n  border-radius: 8px;\n  background: #ffebee;\n  padding: 0.5rem 0.75rem;\n}\n\n.error-summary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .global-errors[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 1.2rem;\n}\n\n.error-summary[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .global-errors[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #c62828;\n  font-size: 0.82rem;\n  line-height: 1.4;\n}\n\n.global-errors[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: none;\n  margin: 0;\n  padding: 0;\n}\n\nfieldset[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.success-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #c8e6c9;\n  border-radius: 10px;\n  padding: 1.5rem 1rem;\n  text-align: center;\n}\n\n.success-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1.1rem;\n  color: #2e7d32;\n}\n\n.success-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  color: #546e7a;\n  font-size: 0.88rem;\n  line-height: 1.4;\n}\n\n.submit-error[_ngcontent-%COMP%] {\n  color: #c62828;\n  font-size: 0.86rem;\n  margin-bottom: 0.75rem;\n}\n\n.permission-checkbox[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n}\n\n.permission-checkbox[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n  font-size: 0.78rem;\n  color: #546e7a;\n  cursor: pointer;\n  line-height: 1.4;\n}\n\n.permission-checkbox[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin-top: 2px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n\n.error-summary[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n\n.error-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #c62828;\n  font-size: 0.82rem;\n  margin-bottom: 0.25rem;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 8px;\n  padding: 0.5rem 1.2rem;\n  background: #1976d2;\n  color: #fff;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1565c0;\n}\n\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pdC1wdXp6bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDRTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQUY7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdFOztFQUVFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBREo7O0FBR0k7O0VBQ0UsY0FBQTtBQUFOOztBQUdJOztFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQUFOOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtBQUZKOztBQU1BO0VBQ0UsZ0NBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBTEY7O0FBT0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUxKOztBQVdBO0VBQ0Usc0JBQUE7QUFSRjs7QUFVRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBUko7O0FBWUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQVRGOztBQVlBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFURjs7QUFZQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVRGOztBQWdCQTtFQUNFLGtCQUFBO0FBYkY7O0FBa0JBO0VBQ0Usc0JBQUE7QUFmRjs7QUFpQkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQWZKOztBQW1CQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQWhCRjs7QUFtQkE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWhCRjs7QUFvQkE7RUFDRSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EsNkJBQUE7RUFDQSx3Q0FBQTtBQWpCRjs7QUFtQkU7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFqQko7O0FBc0JBO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsUUFBQTtBQW5CRjs7QUF1QkE7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7QUFwQkY7O0FBd0JBO0VBQ0Usa0NBQUE7RUFDQSxrQ0FBQTtBQXJCRjs7QUF3QkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFyQkY7O0FBMEJFOztFQUdFLGNBQUE7RUFDQSxpQkFBQTtBQXhCSjs7QUE0QkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBekJGOztBQTRCQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQXpCRjs7QUEyQkU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBekJKOztBQStCQTtFQUNFLG1CQUFBO0FBNUJGOztBQStCQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBNUJGOztBQThCRTtFQUNFLFNBQUE7RUFDQSxvQkFBQTtBQTVCSjs7QUErQkU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQTdCSjs7QUFpQ0E7RUFFRSxtQkFBQTtBQS9CRjs7QUFrQ0E7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUEvQkY7O0FBaUNFO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0FBL0JKOztBQW1DQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFoQ0Y7O0FBa0NFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFoQ0o7O0FBbUNFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWpDSjs7QUFxQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQWxDRjs7QUFxQ0E7RUFDRSxtQkFBQTtBQWxDRjs7QUFvQ0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBbENKOztBQW9DSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWxDTjs7QUF1Q0E7RUFFRSxzQkFBQTtBQXJDRjs7QUF1Q0U7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFyQ0o7O0FBeUNBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQXRDRjs7QUF3Q0U7RUFDRSxtQkFBQTtBQXRDSjs7QUF5Q0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUF2Q0oiLCJmaWxlIjoic3VibWl0LXB1enpsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cblxuLnN1Ym1pdC1jb250YWluZXIge1xuICB3aWR0aDogbWluKDkydncsIDcyMHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAuNzVyZW0gMC43NXJlbSAxLjVyZW07XG4gIGNvbG9yOiAjMjYzMjM4O1xufVxuXG4uc3VibWl0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcblxuICBoMiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG59XG5cbi5iYWNrLWJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmQ4ZGM7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMzNzQ3NGY7XG4gIHBhZGRpbmc6IDAuMzVyZW0gMC42NXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3VibWl0LWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwIDAgMXJlbTtcbiAgY29sb3I6ICM1NDZlN2E7XG4gIGZvbnQtc2l6ZTogMC44NnJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuLm1ldGEtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC42cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuXG4uZmllbGQtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuMTVyZW07XG5cbiAgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgICBjb2xvcjogIzQ1NWE2NDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgaW5wdXQsXG4gIHRleHRhcmVhIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2ZkOGRjO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nOiAwLjM1cmVtIDAuNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDAuODhyZW07XG4gICAgY29sb3I6ICMyNjMyMzg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICM5MGE0YWU7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMTk3NmQyO1xuICAgIH1cbiAgfVxuXG4gIHRleHRhcmVhIHtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICB9XG59XG5cbi5pbnB1dC1lcnJvciB7XG4gIGJvcmRlci1jb2xvcjogI2M2MjgyOCAhaW1wb3J0YW50O1xufVxuXG4uZmllbGQtZXJyb3Ige1xuICBjb2xvcjogI2M2MjgyODtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBtYXJnaW4tdG9wOiAwLjJyZW07XG59XG5cbi8vIOKUgOKUgCBXb3JkIGxhYmVsIHN0eWxlcyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuLndvcmQtbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjb2xvcjogIzU0NmU3YTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNvcm5lci13b3JkLWxhYmVsIHtcbiAgY29sb3I6ICMxZjJhMzA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5hdXRvLWZpbGwtYmFkZ2Uge1xuICBmb250LXNpemU6IDAuNjJyZW07XG4gIGJhY2tncm91bmQ6ICNlM2YyZmQ7XG4gIGNvbG9yOiAjMTU2NWMwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDAgNHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYXV0by1maWxsZWQtaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjZTNmMmZkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMTU2NWMwICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgYm9yZGVyLWNvbG9yOiAjOTBjYWY5ICFpbXBvcnRhbnQ7XG5cbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjOTBhNGFlO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbn1cblxuLy8g4pSA4pSAIENhdGVnb3JpZXMgc2VjdGlvbiDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuLmNhdGVnb3JpZXMtc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMCAwIDAuNnJlbTtcbiAgICBmb250LXNpemU6IDEuMDVyZW07XG4gICAgY29sb3I6ICMxZjJhMzA7XG4gIH1cbn1cblxuLmNhdGVnb3J5LWJsb2NrIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q3ZTBlNjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMC43cmVtIDAuNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcbn1cblxuLmNhdGVnb3J5LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC40cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICMzNzQ3NGY7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLmNhdGVnb3J5LW51bWJlciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLndvcmRzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMC41cmVtO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi5jb3JuZXItZmllbGQge1xuICAvLyBTdWJ0bGUgdmlzdWFsIGdyb3VwaW5nIGZvciBjb3JuZXIgZmllbGRzIOKAlCByZWxpZXMgb24gbGFiZWwvaW5wdXQgc3R5bGluZ1xufVxuXG4uY2F0ZWdvcnktZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi8vIOKUgOKUgCBQcmV2aWV3IHNlY3Rpb24g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5cbi5wcmV2aWV3LXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuXG4gIGgzIHtcbiAgICBtYXJnaW46IDAgMCAwLjVyZW07XG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgIGNvbG9yOiAjMWYyYTMwO1xuICB9XG59XG5cbi5wcmV2aWV3LWdyaWQtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJldmlldy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiBjbGFtcCg0cHgsIDEuNXZ3LCA4cHgpO1xuICB3aWR0aDogbWluKDEwMCUsIDQwMHB4KTtcbiAgYm9yZGVyOiAycHggc29saWQgIzMzMztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiBjbGFtcCg0cHgsIDEuNXZ3LCA4cHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuXG4ucHJldmlldy1jZWxsIHtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAzcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBkYXNoZWQgI2NjYztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vLyBDb3JuZXIgY2VsbHM6IHdoaXRlIHRpbGUgd2l0aCBzb2xpZCBib3JkZXIgdG8gc2hvdyB0aGV5J3JlIHNoYXJlZCBiZXR3ZWVuIHR3byBjYXRlZ29yaWVzXG4ucHJldmlldy1jb3JuZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM2NjYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgLmNlbGwtd29yZCB7XG4gICAgY29sb3I6ICMyNjMyMzggIWltcG9ydGFudDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbn1cblxuLy8gQ2VudGVyIGluZGljYXRvcnM6IG1hdGNoIHJlYWwgZ2FtZSdzIGNlbnRlci1pbmRpY2F0b3Igc3R5bGVcbi5wcmV2aWV3LWNlbnRlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4ODggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM2NjYgIWltcG9ydGFudDsgLy8gZmFsbGJhY2s7IGlubGluZSBzdHlsZSBhcHBsaWVzIGNhdENvbG9yIG92ZXIgdGhpc1xuICBnYXA6IDJweDtcbn1cblxuLy8gRmlsbGVkIGNhdGVnb3J5IHRpbGVzOiBsb29rIGxpa2UgcmVhbCBnYW1lIHRpbGVzXG4ucHJldmlldy1jYXQtZmlsbGVkIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLy8gRW1wdHkgY2F0ZWdvcnkgY2VsbHM6IGRhc2hlZCBib3JkZXIsIG5vIGZpbGxcbi5wcmV2aWV3LWNhdC1lbXB0eSB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjY2NjICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5jZW50ZXItYXJyb3cge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8vIE1hdGNoIHRoZSBnYW1lIGJvYXJkOiBkYXJrIHRleHQgb24gdGhlIHllbGxvdyAoY2F0ZWdvcnkgMSkgYmFja2dyb3VuZCBmb3IgV0NBRyBjb250cmFzdFxuLnByZXZpZXctY2VsbFtkYXRhLWNhdD1cIjFcIl0ge1xuICAuY2VudGVyLWFycm93LFxuICAuY2VudGVyLWxhYmVsLFxuICAmOm5vdCgucHJldmlldy1jb3JuZXIpIC5jZWxsLXdvcmQ6bm90KC5jZWxsLWVtcHR5KSB7XG4gICAgY29sb3I6ICMzRTI3MjM7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbn1cblxuLmNlbnRlci1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4uY2VsbC13b3JkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAmLmNlbGwtZW1wdHkge1xuICAgIGNvbG9yOiAjYjBiZWM1O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbn1cblxuLy8g4pSA4pSAIE5vdGVzIC8gc3VibWl0IOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG4ubm90ZXMtc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbiVlcnJvci1ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWY5YTlhO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNmZmViZWU7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuXG4gIHVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjJyZW07XG4gIH1cblxuICBsaSB7XG4gICAgY29sb3I6ICNjNjI4Mjg7XG4gICAgZm9udC1zaXplOiAwLjgycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIH1cbn1cblxuLmdsb2JhbC1lcnJvcnMge1xuICBAZXh0ZW5kICVlcnJvci1ib3g7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbmZpZWxkc2V0IHtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5cbiAgJltkaXNhYmxlZF0ge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxufVxuXG4uc3VjY2Vzcy1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4ZTZjOTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMS41cmVtIDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBoMyB7XG4gICAgbWFyZ2luOiAwIDAgMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGNvbG9yOiAjMmU3ZDMyO1xuICB9XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwIDAgMXJlbTtcbiAgICBjb2xvcjogIzU0NmU3YTtcbiAgICBmb250LXNpemU6IDAuODhyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgfVxufVxuXG4uc3VibWl0LWVycm9yIHtcbiAgY29sb3I6ICNjNjI4Mjg7XG4gIGZvbnQtc2l6ZTogMC44NnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbn1cblxuLnBlcm1pc3Npb24tY2hlY2tib3gge1xuICBtYXJnaW46IDAgMCAwLjc1cmVtO1xuXG4gIC5jaGVja2JveC1sYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDAuNzhyZW07XG4gICAgY29sb3I6ICM1NDZlN2E7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG5cbiAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG59XG5cbi5lcnJvci1zdW1tYXJ5IHtcbiAgQGV4dGVuZCAlZXJyb3ItYm94O1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuXG4gIHN0cm9uZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICNjNjI4Mjg7XG4gICAgZm9udC1zaXplOiAwLjgycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gIH1cbn1cblxuLnN1Ym1pdC1idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcbiAgYmFja2dyb3VuZDogIzE5NzZkMjtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZDogIzE1NjVjMDtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 7958:
/*!*************************************************************!*\
  !*** ./src/app/components/win-modal/win-modal.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WinModalComponent": () => (/* binding */ WinModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _models_puzzle_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/puzzle.model */ 6927);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function WinModalComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 5);
} if (rf & 2) {
    const piece_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("left", piece_r3.left)("background", piece_r3.color)("width", piece_r3.size)("height", piece_r3.size)("animation-delay", piece_r3.delay)("animation-duration", piece_r3.duration)("--rot", piece_r3.rotation)("border-radius", piece_r3.round ? "50%" : "2px");
} }
function WinModalComponent_ng_container_4_div_14_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r11 === 0 ? "\u274C" : ctx_r10.difficultyEmoji(item_r11), " ");
} }
function WinModalComponent_ng_container_4_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WinModalComponent_ng_container_4_div_14_div_1_span_1_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", row_r9);
} }
function WinModalComponent_ng_container_4_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" +", ctx_r8.gameSequence.length - ctx_r8.MAX_SEQUENCE, " more ");
} }
function WinModalComponent_ng_container_4_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WinModalComponent_ng_container_4_div_14_div_1_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, WinModalComponent_ng_container_4_div_14_div_2_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.sequenceRows);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.gameSequence.length > ctx_r4.MAX_SEQUENCE);
} }
function WinModalComponent_ng_container_4_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WinModalComponent_ng_container_4_div_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.shareResult()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.copied ? "Copied!" : "Share Result", " ");
} }
function WinModalComponent_ng_container_4_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WinModalComponent_ng_container_4_div_16_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const cat_r15 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.viewSolution(cat_r15)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 31)(2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u203A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const cat_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-difficulty", cat_r15.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cat_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-difficulty", cat_r15.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.getDifficultyLabel(cat_r15.difficulty));
} }
function WinModalComponent_ng_container_4_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WinModalComponent_ng_container_4_div_16_div_1_Template, 8, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.categories);
} }
function WinModalComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Puzzle Complete!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6)(4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 9)(9, "div", 10)(10, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, WinModalComponent_ng_container_4_div_14_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, WinModalComponent_ng_container_4_div_15_Template, 3, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, WinModalComponent_ng_container_4_div_16_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 16)(18, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WinModalComponent_ng_container_4_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.playAgain.emit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Play Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WinModalComponent_ng_container_4_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.nextPuzzle.emit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Next Puzzle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WinModalComponent_ng_container_4_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.close.emit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.ratingStars);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.ratingLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.mistakes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.mistakes === 1 ? "Mistake" : "Mistakes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.displaySequence.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.completionOrder.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.categories.length > 0);
} }
function WinModalComponent_ng_container_5_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 40);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r22.selectedSolutionHtml, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function WinModalComponent_ng_container_5_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No solution details available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WinModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 35)(2, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WinModalComponent_ng_container_5_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r24.backToList()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u2039 Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, WinModalComponent_ng_container_5_div_8_Template, 1, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, WinModalComponent_ng_container_5_div_9_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 16)(11, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WinModalComponent_ng_container_5_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r26.backToList()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Back to Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.selectedCategory.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-difficulty", ctx_r2.selectedCategory.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.getDifficultyLabel(ctx_r2.selectedCategory.difficulty), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.selectedSolutionHtml);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.selectedSolutionHtml);
} }
const RATING_TIERS = [
    { threshold: 0, stars: '★★★', label: 'Perfect!' },
    { threshold: 2, stars: '★★☆', label: 'Great!' },
    { threshold: 4, stars: '★☆☆', label: 'Good' },
    { threshold: Infinity, stars: '☆☆☆', label: 'Keep practicing!' },
];
class WinModalComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.mistakes = 0;
        this.puzzleId = 1;
        this.categories = [];
        this.completionOrder = [];
        this.gameSequence = [];
        this.playAgain = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.nextPuzzle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.MAX_SEQUENCE = 20;
        this.selectedCategory = null;
        this.selectedSolutionHtml = null;
        this.copied = false;
        this.confettiPieces = [];
        this.shareTimeout = null;
        this.confettiPieces = this.generateConfetti();
    }
    generateConfetti() {
        const colors = [
            '#FFCA28', '#FFE082', '#43A047', '#A5D6A7',
            '#1E88E5', '#90CAF9', '#8E24AA', '#CE93D8',
            '#FF7043', '#FFFFFF',
        ];
        return Array.from({ length: 50 }, () => {
            const rotDir = Math.random() > 0.5 ? 1 : -1;
            const rotAmt = 360 + Math.floor(Math.random() * 3) * 360;
            return {
                left: `${(Math.random() * 100).toFixed(1)}%`,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: `${(6 + Math.random() * 8).toFixed(1)}px`,
                delay: `${(Math.random() * 1.5).toFixed(2)}s`,
                duration: `${(2 + Math.random() * 1.5).toFixed(2)}s`,
                rotation: `${rotDir * rotAmt}deg`,
                round: Math.random() > 0.5,
            };
        });
    }
    ngOnDestroy() {
        if (this.shareTimeout)
            clearTimeout(this.shareTimeout);
    }
    get displaySequence() {
        return this.gameSequence.slice(0, this.MAX_SEQUENCE);
    }
    get sequenceRows() {
        const items = this.displaySequence;
        const n = items.length;
        if (n === 0)
            return [];
        // Pick per-row count (4–6) that maximises the last row's fullness
        let perRow = 4;
        for (let p = 4; p <= 6; p++) {
            const lastRow = n % p || p;
            const currentLastRow = n % perRow || perRow;
            if (lastRow > currentLastRow)
                perRow = p;
        }
        const rows = [];
        for (let i = 0; i < n; i += perRow)
            rows.push(items.slice(i, i + perRow));
        return rows;
    }
    getRatingTier() {
        return RATING_TIERS.find(t => this.mistakes <= t.threshold);
    }
    get ratingStars() { return this.getRatingTier().stars; }
    get ratingLabel() { return this.getRatingTier().label; }
    difficultyEmoji(d) {
        return _models_puzzle_model__WEBPACK_IMPORTED_MODULE_0__.DIFFICULTY_EMOJIS[d] || '⬜';
    }
    get shareText() {
        const emojiRow = this.gameSequence
            .map(item => item === 0 ? '❌' : (_models_puzzle_model__WEBPACK_IMPORTED_MODULE_0__.DIFFICULTY_EMOJIS[item] || '⬜'))
            .join(' ');
        return `Cornerz #${this.puzzleId}\n${emojiRow}\nMistakes: ${this.mistakes}`;
    }
    get canNativeShare() {
        return !!navigator.share;
    }
    shareResult() {
        if (navigator.share) {
            navigator.share({ text: this.shareText }).catch(() => { });
        }
        else {
            navigator.clipboard.writeText(this.shareText).then(() => {
                this.copied = true;
                if (this.shareTimeout)
                    clearTimeout(this.shareTimeout);
                this.shareTimeout = setTimeout(() => this.copied = false, 2000);
            });
        }
    }
    getDifficultyLabel(difficulty) {
        return _models_puzzle_model__WEBPACK_IMPORTED_MODULE_0__.DIFFICULTY_LABELS[difficulty] || '';
    }
    viewSolution(cat) {
        this.selectedCategory = cat;
        this.selectedSolutionHtml = cat.solution
            ? this.sanitizer.bypassSecurityTrustHtml(cat.solution)
            : null;
    }
    backToList() {
        this.selectedCategory = null;
        this.selectedSolutionHtml = null;
    }
}
WinModalComponent.ɵfac = function WinModalComponent_Factory(t) { return new (t || WinModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer)); };
WinModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WinModalComponent, selectors: [["app-win-modal"]], inputs: { mistakes: "mistakes", puzzleId: "puzzleId", categories: "categories", completionOrder: "completionOrder", gameSequence: "gameSequence" }, outputs: { playAgain: "playAgain", nextPuzzle: "nextPuzzle", close: "close" }, decls: 6, vars: 3, consts: [["aria-hidden", "true", 1, "confetti-container"], ["class", "confetti-piece", 3, "left", "background", "width", "height", "animation-delay", "animation-duration", "--rot", "border-radius", 4, "ngFor", "ngForOf"], [1, "overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "Puzzle complete", 1, "modal"], [4, "ngIf"], [1, "confetti-piece"], [1, "rating-section"], [1, "rating"], [1, "rating-label"], [1, "stats"], [1, "stat"], [1, "stat-value"], [1, "stat-label"], ["class", "sequence-grid", 4, "ngIf"], ["class", "share-section", 4, "ngIf"], ["class", "category-list", 4, "ngIf"], [1, "actions"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], [1, "sequence-grid"], ["class", "sequence-row", 4, "ngFor", "ngForOf"], ["class", "sequence-overflow", 4, "ngIf"], [1, "sequence-row"], ["class", "sequence-emoji", 4, "ngFor", "ngForOf"], [1, "sequence-emoji"], [1, "sequence-overflow"], [1, "share-section"], [1, "btn", "btn-secondary", "share-btn", 3, "click"], [1, "category-list"], ["class", "category-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "category-row", 3, "click"], [1, "category-info"], [1, "category-name"], [1, "difficulty-label"], [1, "chevron"], [1, "solution-header"], [1, "back-button", 3, "click"], [1, "difficulty-badge"], ["class", "solution-body", 3, "innerHTML", 4, "ngIf"], ["class", "solution-body no-solution", 4, "ngIf"], [1, "solution-body", 3, "innerHTML"], [1, "solution-body", "no-solution"]], template: function WinModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WinModalComponent_div_1_Template, 1, 16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WinModalComponent_Template_div_click_2_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, WinModalComponent_ng_container_4_Template, 24, 7, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, WinModalComponent_ng_container_5_Template, 13, 5, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.confettiPieces);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.selectedCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedCategory);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["@keyframes confetti-fall {\n  0% {\n    transform: translateY(-20px) rotate(0deg);\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(110vh) rotate(var(--rot, 360deg));\n    opacity: 0;\n  }\n}\n.confetti-container[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  pointer-events: none;\n  overflow: hidden;\n  z-index: 1200;\n}\n.confetti-piece[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  animation: confetti-fall linear forwards;\n}\n@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slide-up {\n  from {\n    opacity: 0;\n    transform: translateY(30px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  z-index: 1100;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  animation: fade-in 0.3s ease;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 2rem 2.5rem;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  animation: slide-up 0.4s ease;\n  width: min(90vw, 400px);\n  max-height: 85vh;\n  overflow-y: auto;\n}\n.modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1.6rem;\n  color: #333;\n}\n.rating-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 1.25rem;\n}\n.rating[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin: 0.25rem 0;\n  color: #FF9800;\n}\n.rating-label[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #666;\n  margin-bottom: 0.75rem;\n}\n.stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: bold;\n  color: #333;\n  line-height: 1.2;\n}\n.stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #888;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.sequence-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 1.25rem;\n}\n.sequence-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n  justify-content: center;\n}\n.sequence-emoji[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  line-height: 1;\n}\n.sequence-overflow[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #999;\n  margin-top: 2px;\n}\n.share-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n  text-align: center;\n}\n.share-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.5rem;\n  font-size: 0.9rem;\n}\n.category-list[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n  text-align: left;\n}\n.category-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.6rem 0.75rem;\n  border-left: 4px solid #888;\n  border-radius: 4px;\n  background: #fafafa;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.category-row[data-difficulty=\"1\"][_ngcontent-%COMP%] {\n  border-left-color: var(--difficulty-1-color);\n}\n.category-row[data-difficulty=\"2\"][_ngcontent-%COMP%] {\n  border-left-color: var(--difficulty-2-color);\n}\n.category-row[data-difficulty=\"3\"][_ngcontent-%COMP%] {\n  border-left-color: var(--difficulty-3-color);\n}\n.category-row[data-difficulty=\"4\"][_ngcontent-%COMP%] {\n  border-left-color: var(--difficulty-4-color);\n}\n.category-row[_ngcontent-%COMP%]    + .category-row[_ngcontent-%COMP%] {\n  margin-top: 0.4rem;\n}\n.category-row[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.category-row[_ngcontent-%COMP%]:active {\n  background: #e8e8e8;\n}\n.category-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n}\n.category-name[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #333;\n}\n.difficulty-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.difficulty-label[data-difficulty=\"1\"][_ngcontent-%COMP%] {\n  color: var(--difficulty-1-color);\n}\n.difficulty-label[data-difficulty=\"2\"][_ngcontent-%COMP%] {\n  color: var(--difficulty-2-color);\n}\n.difficulty-label[data-difficulty=\"3\"][_ngcontent-%COMP%] {\n  color: var(--difficulty-3-color);\n}\n.difficulty-label[data-difficulty=\"4\"][_ngcontent-%COMP%] {\n  color: var(--difficulty-4-color);\n}\n.chevron[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #aaa;\n  line-height: 1;\n}\n.solution-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.75rem;\n}\n.solution-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.3rem;\n}\n.back-button[_ngcontent-%COMP%] {\n  border: 1px solid #cfd8dc;\n  background: #fff;\n  color: #607d8b;\n  border-radius: 6px;\n  padding: 0.25rem 0.5rem;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.difficulty-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.2rem 0.75rem;\n  border-radius: 12px;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 1rem;\n}\n.difficulty-badge[data-difficulty=\"1\"][_ngcontent-%COMP%] {\n  background-color: var(--difficulty-1-color);\n}\n.difficulty-badge[data-difficulty=\"2\"][_ngcontent-%COMP%] {\n  background-color: var(--difficulty-2-color);\n}\n.difficulty-badge[data-difficulty=\"3\"][_ngcontent-%COMP%] {\n  background-color: var(--difficulty-3-color);\n}\n.difficulty-badge[data-difficulty=\"4\"][_ngcontent-%COMP%] {\n  background-color: var(--difficulty-4-color);\n}\n.solution-body[_ngcontent-%COMP%] {\n  text-align: left;\n  color: #37474f;\n  font-size: 0.9rem;\n  line-height: 1.6;\n  margin-bottom: 1.25rem;\n}\n.solution-body.no-solution[_ngcontent-%COMP%] {\n  color: #999;\n  font-style: italic;\n  text-align: center;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.7rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  color: #333;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}\n@media (max-height: 700px) {\n  .modal[_ngcontent-%COMP%] {\n    padding: 1.25rem 1.5rem;\n  }\n  .modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n    margin-bottom: 0.25rem;\n  }\n  .rating-section[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    margin-bottom: 0.75rem;\n  }\n  .rating[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    margin: 0;\n  }\n  .rating-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .stats[_ngcontent-%COMP%] {\n    border-left: 1px solid #ddd;\n    padding-left: 1rem;\n  }\n  .stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n    font-size: 0.72rem;\n  }\n  .sequence-grid[_ngcontent-%COMP%] {\n    margin-bottom: 0.65rem;\n  }\n  .sequence-emoji[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .share-section[_ngcontent-%COMP%] {\n    margin-bottom: 0.65rem;\n  }\n  .share-btn[_ngcontent-%COMP%] {\n    padding: 0.4rem 1.25rem;\n    font-size: 0.85rem;\n  }\n  .category-list[_ngcontent-%COMP%] {\n    margin-bottom: 0.65rem;\n  }\n  .category-row[_ngcontent-%COMP%] {\n    padding: 0.4rem 0.6rem;\n  }\n  .category-row[_ngcontent-%COMP%]    + .category-row[_ngcontent-%COMP%] {\n    margin-top: 0.25rem;\n  }\n  .category-name[_ngcontent-%COMP%] {\n    font-size: 0.88rem;\n  }\n  .difficulty-label[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n  }\n  .actions[_ngcontent-%COMP%] {\n    gap: 0.35rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 0.55rem 1.25rem;\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbi1tb2RhbC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRTtJQUNFLHlDQUFBO0lBQ0EsVUFBQTtFQUhGO0VBS0E7SUFDRSxVQUFBO0VBSEY7RUFLQTtJQUNFLHVEQUFBO0lBQ0EsVUFBQTtFQUhGO0FBQ0Y7QUFNQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFKRjtBQU9BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7QUFKRjtBQVNBO0VBQ0U7SUFBTyxVQUFBO0VBTFA7RUFNQTtJQUFPLFVBQUE7RUFIUDtBQUNGO0FBS0E7RUFDRTtJQUNFLFVBQUE7SUFDQSx1Q0FBQTtFQUhGO0VBS0E7SUFDRSxVQUFBO0lBQ0EsaUNBQUE7RUFIRjtBQUNGO0FBTUE7RUM5QkUsZUFBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUR5QkEsb0NBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7QUFHRjtBQUFBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBR0Y7QUFERTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBR0o7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFBRjtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBRjtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQURKO0FBT0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtBQUpGO0FBT0E7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0FBSkY7QUFPQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQUpGO0FBT0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBSkY7QUFTQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUFORjtBQVNBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQU5GO0FBV0E7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0FBUkY7QUFXQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFSRjtBQ3JLSTtFQUNFLDRDQUFBO0FEdUtOO0FDeEtJO0VBQ0UsNENBQUE7QUQwS047QUMzS0k7RUFDRSw0Q0FBQTtBRDZLTjtBQzlLSTtFQUNFLDRDQUFBO0FEZ0xOO0FBQUU7RUFDRSxrQkFBQTtBQUVKO0FBQ0U7RUFDRSxtQkFBQTtBQUNKO0FBRUU7RUFDRSxtQkFBQTtBQUFKO0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBREY7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBREY7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBREY7QUM3TUk7RUFDRSxnQ0FBQTtBRCtNTjtBQ2hOSTtFQUNFLGdDQUFBO0FEa05OO0FDbk5JO0VBQ0UsZ0NBQUE7QURxTk47QUN0Tkk7RUFDRSxnQ0FBQTtBRHdOTjtBQU5BO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQVNGO0FBSkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFPRjtBQUxFO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0FBT0o7QUFIQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFNRjtBQUpFO0VBQ0UsbUJBQUE7QUFNSjtBQUZBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFLRjtBQ3JRSTtFQUNFLDJDQUFBO0FEdVFOO0FDeFFJO0VBQ0UsMkNBQUE7QUQwUU47QUMzUUk7RUFDRSwyQ0FBQTtBRDZRTjtBQzlRSTtFQUNFLDJDQUFBO0FEZ1JOO0FBWkE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFlRjtBQWJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFlSjtBQVRBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQVlGO0FBVEE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQVlGO0FBVkU7RUFDRSwyQkFBQTtFQUNBLHlDQUFBO0FBWUo7QUFURTtFQUNFLHdCQUFBO0FBV0o7QUFQQTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtBQVVGO0FBUEE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFVRjtBQVJFO0VBQ0UseUJBQUE7QUFVSjtBQUpBO0VBQ0U7SUFDRSx1QkFBQTtFQU9GO0VBTEU7SUFDRSxpQkFBQTtJQUNBLHNCQUFBO0VBT0o7RUFGQTtJQUNFLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLFNBQUE7SUFDQSxzQkFBQTtFQUlGO0VBREE7SUFDRSxlQUFBO0lBQ0EsU0FBQTtFQUdGO0VBQ0E7SUFDRSxhQUFBO0VBQ0Y7RUFFQTtJQUVFLDJCQUFBO0lBQ0Esa0JBQUE7RUFERjtFQUtFO0lBQWMsaUJBQUE7RUFGaEI7RUFHRTtJQUFjLGtCQUFBO0VBQWhCO0VBR0E7SUFDRSxzQkFBQTtFQURGO0VBSUE7SUFDRSxpQkFBQTtFQUZGO0VBS0E7SUFDRSxzQkFBQTtFQUhGO0VBTUE7SUFDRSx1QkFBQTtJQUNBLGtCQUFBO0VBSkY7RUFPQTtJQUNFLHNCQUFBO0VBTEY7RUFRQTtJQUNFLHNCQUFBO0VBTkY7RUFRRTtJQUNFLG1CQUFBO0VBTko7RUFVQTtJQUNFLGtCQUFBO0VBUkY7RUFXQTtJQUNFLGtCQUFBO0VBVEY7RUFZQTtJQUNFLFlBQUE7RUFWRjtFQWFBO0lBQ0Usd0JBQUE7SUFDQSxpQkFBQTtFQVhGO0FBQ0YiLCJmaWxlIjoid2luLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnbWl4aW5zJyBhcyAqO1xuXG4vLyAtLS0gQ29uZmV0dGkgLS0tXG5cbkBrZXlmcmFtZXMgY29uZmV0dGktZmFsbCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpIHJvdGF0ZSgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDgwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTEwdmgpIHJvdGF0ZSh2YXIoLS1yb3QsIDM2MGRlZykpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLmNvbmZldHRpLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxMjAwO1xufVxuXG4uY29uZmV0dGktcGllY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEycHg7XG4gIGFuaW1hdGlvbjogY29uZmV0dGktZmFsbCBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbi8vIC0tLSBNb2RhbCBlbnRyYW5jZSAtLS1cblxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8gICB7IG9wYWNpdHk6IDE7IH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpIHNjYWxlKDAuOTUpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgfVxufVxuXG4ub3ZlcmxheSB7XG4gIEBpbmNsdWRlIG1vZGFsLWJhY2tkcm9wO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjNzIGVhc2U7XG59XG5cbi5tb2RhbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAycmVtIDIuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDIwcHggNjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC40cyBlYXNlO1xuICB3aWR0aDogbWluKDkwdncsIDQwMHB4KTtcbiAgbWF4LWhlaWdodDogODV2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcblxuICBoMiB7XG4gICAgbWFyZ2luOiAwIDAgMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG59XG5cbi8vIC0tLSBTdGFycyAmIHN0YXRzIC0tLVxuXG4ucmF0aW5nLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuXG4ucmF0aW5nIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG1hcmdpbjogMC4yNXJlbSAwO1xuICBjb2xvcjogI0ZGOTgwMDtcbn1cblxuLnJhdGluZy1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogIzY2NjtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbn1cblxuLnN0YXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdGF0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuc3RhdC12YWx1ZSB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgfVxuXG4gIC5zdGF0LWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBjb2xvcjogIzg4ODtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgfVxufVxuXG4vLyAtLS0gUGxheSBzZXF1ZW5jZSAtLS1cblxuLnNlcXVlbmNlLWdyaWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbn1cblxuLnNlcXVlbmNlLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNlcXVlbmNlLWVtb2ppIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uc2VxdWVuY2Utb3ZlcmZsb3cge1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi8vIC0tLSBTaGFyZSBzZWN0aW9uIC0tLVxuXG4uc2hhcmUtc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNoYXJlLWJ0biB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4vLyAtLS0gQ2F0ZWdvcnkgbGlzdCAtLS1cblxuLmNhdGVnb3J5LWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY2F0ZWdvcnktcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwLjZyZW0gMC43NXJlbTtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjODg4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xuXG4gIEBpbmNsdWRlIGRpZmZpY3VsdHktY29sb3IoYm9yZGVyLWxlZnQtY29sb3IpO1xuXG4gICYgKyAmIHtcbiAgICBtYXJnaW4tdG9wOiAwLjRyZW07XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIH1cbn1cblxuLmNhdGVnb3J5LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuMXJlbTtcbn1cblxuLmNhdGVnb3J5LW5hbWUge1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZGlmZmljdWx0eS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXG4gIEBpbmNsdWRlIGRpZmZpY3VsdHktY29sb3IoY29sb3IpO1xufVxuXG4uY2hldnJvbiB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogI2FhYTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi8vIC0tLSBTb2x1dGlvbiBkZXRhaWwgLS0tXG5cbi5zb2x1dGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcblxuICBoMiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmQ4ZGM7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjNjA3ZDhiO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICB9XG59XG5cbi5kaWZmaWN1bHR5LWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjJyZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICBAaW5jbHVkZSBkaWZmaWN1bHR5LWNvbG9yKGJhY2tncm91bmQtY29sb3IpO1xufVxuXG4uc29sdXRpb24tYm9keSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMzc0NzRmO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcblxuICAmLm5vLXNvbHV0aW9uIHtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbi8vIC0tLSBBY3Rpb25zIC0tLVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xufVxuXG4uYnRuIHtcbiAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgY29sb3I6ICMzMzM7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgfVxufVxuXG4vLyAtLS0gTW9iaWxlOiBjb21wYWN0IGxheW91dCBzbyBtb2RhbCBmaXRzIHdpdGhvdXQgc2Nyb2xsaW5nIC0tLVxuXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDcwMHB4KSB7XG4gIC5tb2RhbCB7XG4gICAgcGFkZGluZzogMS4yNXJlbSAxLjVyZW07XG5cbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgfVxuICB9XG5cbiAgLy8gU3RhcnMgKyBtaXN0YWtlcyBjb2xsYXBzZSBpbnRvIGEgc2luZ2xlIGhvcml6b250YWwgcm93XG4gIC5yYXRpbmctc2VjdGlvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICB9XG5cbiAgLnJhdGluZyB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC8vIExhYmVsIGlzIHJlZHVuZGFudCBhbG9uZ3NpZGUgdGhlIHN0YXQgdmFsdWUgb24gc21hbGwgc2NyZWVuc1xuICAucmF0aW5nLWxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnN0YXRzIHtcbiAgICAvLyBTZXBhcmF0b3IgYmV0d2VlbiBzdGFycyBhbmQgbWlzdGFrZSBjb3VudFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIH1cblxuICAuc3RhdCB7XG4gICAgLnN0YXQtdmFsdWUgeyBmb250LXNpemU6IDEuNXJlbTsgfVxuICAgIC5zdGF0LWxhYmVsIHsgZm9udC1zaXplOiAwLjcycmVtOyB9XG4gIH1cblxuICAuc2VxdWVuY2UtZ3JpZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC42NXJlbTtcbiAgfVxuXG4gIC5zZXF1ZW5jZS1lbW9qaSB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cblxuICAuc2hhcmUtc2VjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC42NXJlbTtcbiAgfVxuXG4gIC5zaGFyZS1idG4ge1xuICAgIHBhZGRpbmc6IDAuNHJlbSAxLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgfVxuXG4gIC5jYXRlZ29yeS1saXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjY1cmVtO1xuICB9XG5cbiAgLmNhdGVnb3J5LXJvdyB7XG4gICAgcGFkZGluZzogMC40cmVtIDAuNnJlbTtcblxuICAgICYgKyAmIHtcbiAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gICAgfVxuICB9XG5cbiAgLmNhdGVnb3J5LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgfVxuXG4gIC5kaWZmaWN1bHR5LWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuNjVyZW07XG4gIH1cblxuICAuYWN0aW9ucyB7XG4gICAgZ2FwOiAwLjM1cmVtO1xuICB9XG5cbiAgLmJ0biB7XG4gICAgcGFkZGluZzogMC41NXJlbSAxLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG59XG4iLCIvLyBHZW5lcmF0ZXMgW2RhdGEtZGlmZmljdWx0eT1cIk5cIl0geyAkcHJvcGVydHk6IHZhcigtLWRpZmZpY3VsdHktTi1jb2xvcikgfSBmb3IgMeKAkzRcbkBtaXhpbiBkaWZmaWN1bHR5LWNvbG9yKCRwcm9wZXJ0eSkge1xuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDQge1xuICAgICZbZGF0YS1kaWZmaWN1bHR5PVwiI3skaX1cIl0ge1xuICAgICAgI3skcHJvcGVydHl9OiB2YXIoLS1kaWZmaWN1bHR5LSN7JGl9LWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gR2VuZXJhdGVzIFtkYXRhLWRpZmZpY3VsdHk9XCJOXCJdIHsgJHByb3BlcnR5OiB2YXIoLS1kaWZmaWN1bHR5LU4tYmcpIH0gZm9yIDHigJM0XG5AbWl4aW4gZGlmZmljdWx0eS1iZygkcHJvcGVydHkpIHtcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA0IHtcbiAgICAmW2RhdGEtZGlmZmljdWx0eT1cIiN7JGl9XCJdIHtcbiAgICAgICN7JHByb3BlcnR5fTogdmFyKC0tZGlmZmljdWx0eS0jeyRpfS1iZyk7XG4gICAgfVxuICB9XG59XG5cbi8vIFNoYXJlZCBmaXhlZC1vdmVybGF5IGJhY2tkcm9wIHVzZWQgYnkgaGVscCwgc29sdXRpb24sIGFuZCB3aW4gbW9kYWxzXG5AbWl4aW4gbW9kYWwtYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbiAgei1pbmRleDogMTEwMDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 8093:
/*!**********************************************!*\
  !*** ./src/app/constants/daily.constants.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PUZZLE_START_DATE": () => (/* binding */ PUZZLE_START_DATE)
/* harmony export */ });
/**
 * The date puzzle #1 goes live.
 * To shift the schedule, change this date — everything else updates automatically.
 * Format: new Date(YYYY, MM-1, DD)  ← month is 0-indexed
 */
const PUZZLE_START_DATE = new Date(2026, 2, 25); // March 25, 2026


/***/ }),

/***/ 117:
/*!*********************************************!*\
  !*** ./src/app/constants/grid.constants.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CENTER_INDICATORS": () => (/* binding */ CENTER_INDICATORS),
/* harmony export */   "DISABLED_SPOTS": () => (/* binding */ DISABLED_SPOTS),
/* harmony export */   "LINES": () => (/* binding */ LINES)
/* harmony export */ });
/** Center 4 spots in the 4x4 grid that are permanently disabled. */
const DISABLED_SPOTS = new Set([5, 6, 9, 10]);
/** The four lines (edges) of the grid and their cell indices. */
const LINES = {
    top: [0, 1, 2, 3],
    bottom: [12, 13, 14, 15],
    left: [0, 4, 8, 12],
    right: [3, 7, 11, 15]
};
/** Maps each line to its corresponding center indicator cell index. */
const CENTER_INDICATORS = {
    top: 6,
    right: 10,
    bottom: 9,
    left: 5
};


/***/ }),

/***/ 1338:
/*!*******************************************!*\
  !*** ./src/app/data/placeholder-words.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADJECTIVES": () => (/* binding */ ADJECTIVES),
/* harmony export */   "CAT4_PATTERNS": () => (/* binding */ CAT4_PATTERNS),
/* harmony export */   "COLORS": () => (/* binding */ COLORS),
/* harmony export */   "NOUNS": () => (/* binding */ NOUNS)
/* harmony export */ });
// Word banks for randomized category name placeholders on the submit form.
// Add or edit freely — more words = more variety.
const NOUNS = [
    // Animals — common
    'Dog', 'Cat', 'Fish', 'Bird', 'Horse', 'Cow', 'Pig', 'Sheep', 'Goat', 'Rabbit',
    'Hamster', 'Snake', 'Turtle', 'Frog', 'Bear', 'Deer', 'Wolf', 'Fox', 'Eagle', 'Hawk',
    'Owl', 'Penguin', 'Dolphin', 'Whale', 'Shark', 'Crab', 'Lobster', 'Octopus', 'Jellyfish', 'Parrot',
    'Flamingo', 'Alligator', 'Cheetah', 'Lion', 'Tiger', 'Elephant', 'Giraffe', 'Hippo', 'Rhino', 'Zebra',
    'Gorilla', 'Chimpanzee', 'Orangutan', 'Baboon', 'Lemur', 'Sloth', 'Anteater', 'Armadillo', 'Porcupine', 'Skunk',
    'Otter', 'Seal', 'Walrus', 'Manatee', 'Mole', 'Hedgehog', 'Bat', 'Raccoon', 'Opossum', 'Ferret',
    'Moose', 'Bison', 'Yak', 'Meerkat', 'Mongoose', 'Weasel', 'Stoat', 'Mink', 'Vole', 'Shrew',
    // Animals — silly / unusual
    'Wombat', 'Platypus', 'Narwhal', 'Axolotl', 'Blobfish', 'Capybara', 'Quokka', 'Pangolin', 'Tapir', 'Aardvark',
    'Ocelot', 'Binturong', 'Kinkajou', 'Tarsier', 'Mudskipper', 'Hagfish', 'Tardigrade', 'Mantis Shrimp', 'Fossa', 'Numbat',
    'Saiga', 'Gerenuk', 'Okapi', 'Babirusa', 'Dumbo Octopus', 'Star-Nosed Mole', 'Naked Mole Rat', 'Aye-Aye', 'Toad', 'Newt',
    // Foods
    'Pizza', 'Burger', 'Taco', 'Sandwich', 'Soup', 'Pasta', 'Rice', 'Bread', 'Cake', 'Pie',
    'Cookie', 'Donut', 'Muffin', 'Bagel', 'Pretzel', 'Waffle', 'Pancake', 'Sushi', 'Burrito', 'Noodle',
    'Dumpling', 'Croissant', 'Scone', 'Biscuit', 'Brownie', 'Cupcake', 'Pudding', 'Custard', 'Quiche', 'Fondue',
    'Goulash', 'Risotto', 'Paella', 'Ramen', 'Falafel', 'Hummus', 'Guacamole', 'Nachos', 'Enchilada', 'Tamale',
    'Samosa', 'Biryani', 'Tagine', 'Pho', 'Kimchi', 'Tempura', 'Schnitzel', 'Stroganoff', 'Pierogi', 'Empanada',
    'Kebab', 'Bratwurst', 'Churro', 'Crepe', 'Beignet', 'Cannoli', 'Tiramisu', 'Baklava', 'Mochi', 'Eclair',
    // Fruits & vegetables
    'Apple', 'Banana', 'Orange', 'Grape', 'Strawberry', 'Blueberry', 'Raspberry', 'Mango', 'Pineapple', 'Watermelon',
    'Kiwi', 'Peach', 'Pear', 'Plum', 'Cherry', 'Lemon', 'Lime', 'Coconut', 'Avocado', 'Broccoli',
    'Carrot', 'Potato', 'Tomato', 'Cucumber', 'Zucchini', 'Eggplant', 'Artichoke', 'Asparagus', 'Celery', 'Spinach',
    'Kale', 'Lettuce', 'Cabbage', 'Onion', 'Garlic', 'Ginger', 'Pumpkin', 'Squash', 'Turnip', 'Radish',
    'Beetroot', 'Parsnip', 'Leek', 'Cauliflower', 'Fennel', 'Okra', 'Yam', 'Jackfruit', 'Durian', 'Lychee',
    'Rambutan', 'Dragonfruit', 'Starfruit', 'Persimmon', 'Pomelo', 'Kumquat', 'Guava', 'Papaya', 'Tamarind', 'Quince',
    // Musical instruments
    'Guitar', 'Piano', 'Violin', 'Drums', 'Trumpet', 'Saxophone', 'Flute', 'Clarinet', 'Cello', 'Bass',
    'Banjo', 'Ukulele', 'Harp', 'Oboe', 'Tuba', 'Accordion', 'Harmonica', 'Kazoo', 'Xylophone', 'Marimba',
    'Theremin', 'Didgeridoo', 'Bagpipe', 'Lute', 'Sitar', 'Mandolin', 'Dulcimer', 'Hurdy-Gurdy', 'Zither', 'Balalaika',
    // Sports
    'Basketball', 'Football', 'Baseball', 'Soccer', 'Tennis', 'Golf', 'Hockey', 'Volleyball', 'Cycling', 'Boxing',
    'Wrestling', 'Fencing', 'Archery', 'Skiing', 'Snowboarding', 'Surfing', 'Rowing', 'Sailing', 'Badminton', 'Squash',
    'Polo', 'Lacrosse', 'Cricket', 'Curling', 'Bobsled', 'Luge', 'Triathlon', 'Decathlon', 'Steeplechase', 'Heptathlon',
    // Clothing
    'Shirt', 'Pants', 'Dress', 'Skirt', 'Jacket', 'Coat', 'Hat', 'Glove', 'Sock', 'Shoe',
    'Boot', 'Scarf', 'Tie', 'Belt', 'Sweater', 'Hoodie', 'Blazer', 'Vest', 'Shorts', 'Jeans',
    'Tuxedo', 'Gown', 'Robe', 'Kimono', 'Beret', 'Fedora', 'Sombrero', 'Beanie', 'Turban', 'Kilt',
    'Leotard', 'Unitard', 'Poncho', 'Caftan', 'Dashiki', 'Sarong', 'Tutu', 'Romper', 'Onesie', 'Muumuu',
    // Professions
    'Doctor', 'Teacher', 'Lawyer', 'Engineer', 'Plumber', 'Chef', 'Pilot', 'Astronaut', 'Firefighter', 'Nurse',
    'Dentist', 'Architect', 'Artist', 'Musician', 'Writer', 'Scientist', 'Farmer', 'Carpenter', 'Electrician', 'Mechanic',
    'Accountant', 'Librarian', 'Baker', 'Butcher', 'Florist', 'Photographer', 'Reporter', 'Programmer', 'Comedian', 'Magician',
    'Acrobat', 'Mime', 'Puppeteer', 'Taxidermist', 'Sommelier', 'Cartographer', 'Cryptographer', 'Falconer', 'Luthier', 'Farrier',
    // Objects & tools
    'Spoon', 'Fork', 'Knife', 'Plate', 'Bowl', 'Cup', 'Mug', 'Bottle', 'Jar', 'Box',
    'Bag', 'Basket', 'Bucket', 'Ladder', 'Hammer', 'Nail', 'Screw', 'Wrench', 'Saw', 'Drill',
    'Shovel', 'Rake', 'Broom', 'Mop', 'Toaster', 'Blender', 'Mixer', 'Kettle', 'Lamp', 'Lantern',
    'Candle', 'Clock', 'Mirror', 'Compass', 'Telescope', 'Microscope', 'Hourglass', 'Umbrella', 'Periscope', 'Spatula',
    'Thimble', 'Doily', 'Whisk', 'Colander', 'Ladle', 'Tongs', 'Skillet', 'Wok', 'Mortar', 'Pestle',
    // Places & geography
    'Mountain', 'River', 'Ocean', 'Desert', 'Forest', 'Jungle', 'Island', 'Valley', 'Canyon', 'Volcano',
    'Glacier', 'Waterfall', 'Cave', 'Swamp', 'Meadow', 'Prairie', 'Savanna', 'Tundra', 'Rainforest', 'Beach',
    'Lagoon', 'Reef', 'Fjord', 'Plateau', 'Peninsula', 'Archipelago', 'Atoll', 'Bayou', 'Geyser', 'Sinkhole',
    'Mesa', 'Butte', 'Dune', 'Estuary', 'Tidepool', 'Bog', 'Fen', 'Moor', 'Steppe', 'Karst',
    // Fantasy & mythology
    'Goblin', 'Wizard', 'Gnome', 'Sprite', 'Dragon', 'Unicorn', 'Mermaid', 'Vampire', 'Zombie', 'Robot',
    'Cyborg', 'Alien', 'Spaceship', 'Portal', 'Dungeon', 'Potion', 'Spell', 'Wand', 'Broomstick', 'Cauldron',
    'Troll', 'Ogre', 'Gremlin', 'Pixie', 'Banshee', 'Wraith', 'Ghoul', 'Specter', 'Werewolf', 'Yeti',
    'Centaur', 'Minotaur', 'Griffin', 'Sphinx', 'Kraken', 'Phoenix', 'Basilisk', 'Chimera', 'Hydra', 'Manticore',
    // Dances
    'Tango', 'Waltz', 'Foxtrot', 'Polka', 'Jive', 'Salsa', 'Samba', 'Cha-Cha', 'Floss', 'Macarena',
    'Moonwalk', 'Shimmy', 'Twist', 'Hustle', 'Charleston', 'Quickstep', 'Bolero', 'Merengue', 'Cumbia', 'Bhangra',
    // Gems & materials
    'Diamond', 'Ruby', 'Emerald', 'Sapphire', 'Opal', 'Pearl', 'Topaz', 'Amethyst', 'Turquoise', 'Obsidian',
    'Marble', 'Granite', 'Limestone', 'Sandstone', 'Slate', 'Quartz', 'Garnet', 'Jasper', 'Onyx', 'Jade',
    // Vehicles
    'Car', 'Truck', 'Bus', 'Train', 'Plane', 'Helicopter', 'Submarine', 'Rocket', 'Hovercraft', 'Jetpack',
    'Bicycle', 'Motorcycle', 'Skateboard', 'Scooter', 'Rickshaw', 'Gondola', 'Zeppelin', 'Catamaran', 'Kayak', 'Dogsled',
    'Tractor', 'Zamboni', 'Segway', 'Monorail', 'Blimp', 'Dirigible', 'Triplane', 'Houseboat', 'Bathyscaphe', 'Gyrocopter',
    // Silly / random
    'Pickle', 'Noodle', 'Sock Puppet', 'Kazoo', 'Mitten', 'Confetti', 'Sprinkle', 'Glitter', 'Freckle', 'Dimple',
    'Hiccup', 'Sneeze', 'Wobble', 'Jiggle', 'Squish', 'Blob', 'Giggle', 'Snorkel', 'Googly Eye', 'Doodle',
    'Kerfuffle', 'Hullabaloo', 'Brouhaha', 'Shenanigan', 'Bumble', 'Fumble', 'Stumble', 'Splat', 'Bonk', 'Thud',
    'Flibbertigibbet', 'Whatchamacallit', 'Thingamajig', 'Doohickey', 'Gizmo', 'Widget', 'Doodad', 'Gewgaw', 'Tchotchke', 'Knickknack',
    // Body parts (silly ones)
    'Earlobe', 'Kneecap', 'Elbow', 'Nostril', 'Uvula', 'Pancreas', 'Spleen', 'Toenail', 'Eyebrow', 'Armpit',
    'Shinbone', 'Collarbone', 'Bellybutton', 'Knuckle', 'Tonsil', 'Appendix', 'Philtrum', 'Coccyx', 'Epiglottis', 'Tympanum',
    // Concepts & abstract
    'Dream', 'Shadow', 'Echo', 'Silence', 'Chaos', 'Mystery', 'Legend', 'Myth', 'Prophecy', 'Paradox',
    'Enigma', 'Adventure', 'Nostalgia', 'Serendipity', 'Epiphany', 'Euphoria', 'Melancholy', 'Whimsy', 'Absurdity', 'Irony',
    'Conspiracy', 'Phenomenon', 'Anomaly', 'Conundrum', 'Dilemma', 'Fiasco', 'Debacle', 'Hullabaloo', 'Ruckus', 'Pandemonium',
    // Games & hobbies
    'Chess', 'Poker', 'Bingo', 'Scrabble', 'Jenga', 'Monopoly', 'Sudoku', 'Origami', 'Knitting', 'Juggling',
    'Beekeeping', 'Taxidermy', 'Spelunking', 'Birdwatching', 'Trainspotting', 'Yodeling', 'Ventriloquism', 'Falconry', 'Curling', 'Competitive Eating',
];
const ADJECTIVES = [
    // Sensible
    'Ancient', 'Beautiful', 'Brilliant', 'Colorful', 'Dangerous', 'Elegant', 'Fearless', 'Golden', 'Hidden', 'Infinite',
    'Luminous', 'Mysterious', 'Notorious', 'Ordinary', 'Peculiar', 'Quirky', 'Remarkable', 'Secret', 'Tiny', 'Unusual',
    'Vibrant', 'Whimsical', 'Zealous', 'Agile', 'Bold', 'Calm', 'Daring', 'Eerie', 'Fierce', 'Gentle',
    'Hollow', 'Icy', 'Jealous', 'Kind', 'Loyal', 'Noble', 'Ornate', 'Patient', 'Rapid', 'Tender',
    'Vivid', 'Wild', 'Youthful', 'Absurd', 'Brave', 'Clever', 'Deadly', 'Enchanted', 'Famous', 'Grumpy',
    'Haunted', 'Invisible', 'Jumbled', 'Lazy', 'Magical', 'Naughty', 'Outrageous', 'Prickly', 'Rotten', 'Sly',
    'Twisted', 'Vicious', 'Extinct', 'Forgotten', 'Glorious', 'Humble', 'Imaginary', 'Legendary', 'Majestic', 'Obscure',
    'Prehistoric', 'Radioactive', 'Subterranean', 'Telepathic', 'Underrated', 'Venomous', 'Waterproof', 'Xenophobic', 'Yogic', 'Zero-Gravity',
    // Silly
    'Wobbly', 'Jiggly', 'Squishy', 'Blobby', 'Bubbly', 'Wiggly', 'Squiggly', 'Loopy', 'Goofy', 'Wacky',
    'Zany', 'Kooky', 'Nutty', 'Crunchy', 'Fluffy', 'Fuzzy', 'Spiky', 'Lumpy', 'Bumpy', 'Gnarly',
    'Wonky', 'Jangly', 'Tingly', 'Sparkly', 'Twinkly', 'Glittery', 'Shimmery', 'Bouncy', 'Crinkly', 'Wrinkly',
    'Soggy', 'Gooey', 'Sticky', 'Slippery', 'Squeaky', 'Creaky', 'Rusty', 'Dusty', 'Crusty', 'Musty',
    'Floppy', 'Droopy', 'Sleepy', 'Grumpy', 'Sneezy', 'Bashful', 'Dopey', 'Cranky', 'Hangry', 'Snippy',
    'Discombobulated', 'Bamboozled', 'Flummoxed', 'Befuddled', 'Perplexed', 'Gobsmacked', 'Flabbergasted', 'Dumbfounded', 'Stupefied', 'Bewildered',
    'Bedraggled', 'Befuddled', 'Besmirched', 'Beleaguered', 'Disheveled', 'Frazzled', 'Haggard', 'Ragged', 'Rumpled', 'Tousled',
];
const COLORS = [
    'Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Brown', 'Gray', 'Black',
    'White', 'Teal', 'Cyan', 'Magenta', 'Violet', 'Indigo', 'Coral', 'Crimson', 'Scarlet', 'Turquoise',
    'Beige', 'Ivory', 'Gold', 'Silver', 'Lavender', 'Periwinkle', 'Chartreuse', 'Ochre', 'Sienna', 'Umber',
    'Vermillion', 'Fuchsia', 'Maroon', 'Navy', 'Olive', 'Khaki', 'Tan', 'Peach', 'Salmon', 'Rose',
    'Amber', 'Bronze', 'Copper', 'Rust', 'Mauve', 'Plum', 'Lilac', 'Mint', 'Sage', 'Cerulean',
];
// Patterns for the 4th category placeholder.
// 'nouns' draws from NOUNS; 'colors' draws from COLORS.
const CAT4_PATTERNS = [
    { prefix: 'Homophones of', bank: 'nouns' },
    { prefix: 'Shades of', bank: 'colors' },
    { prefix: 'Types of', bank: 'nouns' },
    { prefix: 'Synonyms for', bank: 'nouns' },
    { prefix: 'Things that rhyme with', bank: 'nouns' },
    { prefix: 'Anagrams of', bank: 'nouns' },
    { prefix: 'Famous', bank: 'nouns' },
    { prefix: 'Fictional', bank: 'nouns' },
    { prefix: 'Things that smell like', bank: 'nouns' },
    { prefix: 'Things that sound like', bank: 'nouns' },
    { prefix: 'Words containing', bank: 'nouns' },
    { prefix: 'Portmanteaus involving', bank: 'nouns' },
];


/***/ }),

/***/ 6812:
/*!**************************************************!*\
  !*** ./src/app/directives/fit-text.directive.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FitTextDirective": () => (/* binding */ FitTextDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class FitTextDirective {
    constructor(el, ngZone) {
        this.el = el;
        this.ngZone = ngZone;
        this.maxFontSize = '';
        this.fitTextWrap = false;
        this.resizeObserver = null;
        this.mutationObserver = null;
    }
    ngAfterViewInit() {
        const element = this.el.nativeElement;
        if (this.fitTextWrap) {
            // Don't constrain height upfront — fit() manages overflow after measuring
        }
        else {
            element.style.whiteSpace = 'nowrap';
            element.style.overflow = 'hidden';
        }
        this.fit();
        this.ngZone.runOutsideAngular(() => {
            this.resizeObserver = new ResizeObserver(() => this.fit());
            this.resizeObserver.observe(element.parentElement || element);
            this.mutationObserver = new MutationObserver(() => this.fit());
            this.mutationObserver.observe(element, { childList: true, characterData: true, subtree: true });
        });
    }
    ngOnDestroy() {
        this.resizeObserver?.disconnect();
        this.mutationObserver?.disconnect();
    }
    fit() {
        const el = this.el.nativeElement;
        const max = (typeof this.maxFontSize === 'number' && this.maxFontSize > 0)
            ? this.maxFontSize
            : 16;
        let size = max;
        el.style.fontSize = size + 'px';
        if (this.fitTextWrap) {
            const parent = el.parentElement;
            if (!parent)
                return;
            // Let element flow naturally so we can measure its real height
            el.style.overflow = 'visible';
            el.style.height = 'auto';
            // Available height = parent's inner height minus all siblings
            let siblingHeight = 0;
            Array.from(parent.children).forEach(child => {
                if (child !== el) {
                    siblingHeight += child.offsetHeight;
                }
            });
            const availableHeight = parent.clientHeight - siblingHeight;
            while (size > 4) {
                el.style.fontSize = size + 'px';
                // Check width: temporarily disable word-breaking to see if any
                // single word overflows the line (would cause mid-word break)
                el.style.overflowWrap = 'normal';
                const wordOverflows = el.scrollWidth > el.clientWidth;
                el.style.overflowWrap = '';
                // Check height: does the naturally-wrapped text exceed available space?
                const heightOverflows = el.offsetHeight > availableHeight;
                if (!wordOverflows && !heightOverflows)
                    break;
                size--;
            }
            el.style.overflow = 'hidden';
            el.style.height = '';
        }
        else {
            while (el.scrollWidth > el.clientWidth && size > 4) {
                size--;
                el.style.fontSize = size + 'px';
            }
        }
    }
}
FitTextDirective.ɵfac = function FitTextDirective_Factory(t) { return new (t || FitTextDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
FitTextDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FitTextDirective, selectors: [["", "appFitText", ""]], inputs: { maxFontSize: ["appFitText", "maxFontSize"], fitTextWrap: "fitTextWrap" } });


/***/ }),

/***/ 6927:
/*!****************************************!*\
  !*** ./src/app/models/puzzle.model.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIFFICULTY_COLORS": () => (/* binding */ DIFFICULTY_COLORS),
/* harmony export */   "DIFFICULTY_EMOJIS": () => (/* binding */ DIFFICULTY_EMOJIS),
/* harmony export */   "DIFFICULTY_LABELS": () => (/* binding */ DIFFICULTY_LABELS)
/* harmony export */ });
const DIFFICULTY_LABELS = {
    1: 'Easy', 2: 'Medium', 3: 'Hard', 4: 'Hardest'
};
const DIFFICULTY_COLORS = {
    1: '#F9A825', 2: '#2E7D32', 3: '#1565C0', 4: '#6A1B9A'
};
const DIFFICULTY_EMOJIS = {
    1: '🟨', 2: '🟩', 3: '🟦', 4: '🟪'
};


/***/ }),

/***/ 5578:
/*!**************************************************!*\
  !*** ./src/app/services/local-stats-provider.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStatsProvider": () => (/* binding */ LocalStatsProvider)
/* harmony export */ });
/* harmony import */ var _stats_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stats-provider */ 9792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class LocalStatsProvider extends _stats_provider__WEBPACK_IMPORTED_MODULE_0__.StatsProvider {
    constructor() {
        super(...arguments);
        this.storageKey = 'cornerz-stats-v1';
    }
    load() {
        const raw = localStorage.getItem(this.storageKey);
        if (!raw)
            return {};
        try {
            return JSON.parse(raw);
        }
        catch {
            return {};
        }
    }
    save(data) {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
    }
    /** Convert an ISO datetime string to a local YYYY-MM-DD string for streak math. */
    toLocalDateStr(isoString) {
        const d = new Date(isoString);
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${y}-${m}-${day}`;
    }
    todayLocalStr() {
        return this.toLocalDateStr(new Date().toISOString());
    }
    recordResult(result) {
        const data = this.load();
        // Only update if not already recorded, or if the new result has fewer mistakes
        const existing = data[result.puzzleId];
        if (!existing || result.mistakes < existing.mistakes) {
            data[result.puzzleId] = result;
            this.save(data);
        }
    }
    getResult(puzzleId) {
        return this.load()[puzzleId] ?? null;
    }
    getAllResults() {
        return Object.values(this.load());
    }
    getAggregate() {
        const results = this.getAllResults();
        if (results.length === 0) {
            return { totalSolved: 0, currentStreak: 0, maxStreak: 0, averageMistakes: 0, mistakeDistribution: {} };
        }
        // Mistake distribution
        const mistakeDistribution = {};
        let totalMistakes = 0;
        for (const r of results) {
            totalMistakes += r.mistakes;
            mistakeDistribution[r.mistakes] = (mistakeDistribution[r.mistakes] ?? 0) + 1;
        }
        const { current, max } = this.computeStreak(results);
        return {
            totalSolved: results.length,
            currentStreak: current,
            maxStreak: max,
            averageMistakes: totalMistakes / results.length,
            mistakeDistribution,
        };
    }
    computeStreak(results) {
        // Collect unique local dates where a daily puzzle was completed
        const dailyDates = new Set(results.filter(r => r.isDaily).map(r => this.toLocalDateStr(r.completedAt)));
        if (dailyDates.size === 0)
            return { current: 0, max: 0 };
        // --- Current streak ---
        // Start from today; if today isn't done, start from yesterday
        // (streak persists until tomorrow as long as yesterday was completed)
        const today = this.todayLocalStr();
        const yesterday = this.offsetDay(today, -1);
        const startDate = dailyDates.has(today) ? today : yesterday;
        let current = 0;
        let cursor = startDate;
        while (dailyDates.has(cursor)) {
            current++;
            cursor = this.offsetDay(cursor, -1);
        }
        // --- Max streak ---
        const sortedDates = [...dailyDates].sort(); // ascending
        let max = 0;
        let streak = 0;
        let prev = null;
        for (const dateStr of sortedDates) {
            if (prev === null || this.offsetDay(prev, 1) === dateStr) {
                streak++;
            }
            else {
                streak = 1;
            }
            if (streak > max)
                max = streak;
            prev = dateStr;
        }
        return { current, max };
    }
    /** Return a YYYY-MM-DD string offset by `days` from the given date string. */
    offsetDay(dateStr, days) {
        const d = new Date(dateStr + 'T12:00:00'); // noon avoids DST edge cases
        d.setDate(d.getDate() + days);
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${y}-${m}-${day}`;
    }
}
LocalStatsProvider.ɵfac = /*@__PURE__*/ function () { let ɵLocalStatsProvider_BaseFactory; return function LocalStatsProvider_Factory(t) { return (ɵLocalStatsProvider_BaseFactory || (ɵLocalStatsProvider_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](LocalStatsProvider)))(t || LocalStatsProvider); }; }();
LocalStatsProvider.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LocalStatsProvider, factory: LocalStatsProvider.ɵfac });


/***/ }),

/***/ 8458:
/*!**********************************************!*\
  !*** ./src/app/services/progress.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressService": () => (/* binding */ ProgressService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ProgressService {
    constructor() {
        this.dailyCompletionsKey = 'cornerz-daily-completions';
        this.puzzleCompletionsKey = 'cornerz-puzzle-completions';
        this.dailySnapshotsKey = 'cornerz-daily-snapshots';
    }
    getTodayKey() {
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    safeParse(raw, fallback) {
        if (!raw)
            return fallback;
        try {
            return JSON.parse(raw);
        }
        catch {
            return fallback;
        }
    }
    getDailyCompletions() {
        return this.safeParse(localStorage.getItem(this.dailyCompletionsKey), {});
    }
    getPuzzleCompletions() {
        return this.safeParse(localStorage.getItem(this.puzzleCompletionsKey), {});
    }
    getDailySnapshots() {
        return this.safeParse(localStorage.getItem(this.dailySnapshotsKey), {});
    }
    isDailyCompleted(puzzleId) {
        const completions = this.getDailyCompletions();
        return completions[this.getTodayKey()] === puzzleId;
    }
    markDailyCompleted(puzzleId) {
        const completions = this.getDailyCompletions();
        completions[this.getTodayKey()] = puzzleId;
        localStorage.setItem(this.dailyCompletionsKey, JSON.stringify(completions));
    }
    saveTodayDailySnapshot(puzzleId, gridWords) {
        const snapshots = this.getDailySnapshots();
        snapshots[this.getTodayKey()] = {
            puzzleId,
            gridWords: gridWords.slice(0, 16)
        };
        localStorage.setItem(this.dailySnapshotsKey, JSON.stringify(snapshots));
    }
    getTodayDailySnapshot(puzzleId) {
        const snapshots = this.getDailySnapshots();
        const snapshot = snapshots[this.getTodayKey()];
        if (!snapshot || snapshot.puzzleId !== puzzleId) {
            return null;
        }
        if (!Array.isArray(snapshot.gridWords) || snapshot.gridWords.length !== 16) {
            return null;
        }
        return snapshot;
    }
    markPuzzleCompleted(puzzleId) {
        const completions = this.getPuzzleCompletions();
        completions[String(puzzleId)] = Date.now();
        localStorage.setItem(this.puzzleCompletionsKey, JSON.stringify(completions));
    }
    isPuzzleCompleted(puzzleId) {
        const completions = this.getPuzzleCompletions();
        return Number.isFinite(completions[String(puzzleId)]);
    }
}
ProgressService.ɵfac = function ProgressService_Factory(t) { return new (t || ProgressService)(); };
ProgressService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProgressService, factory: ProgressService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5080:
/*!*********************************************!*\
  !*** ./src/app/services/puzzle-provider.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PuzzleProvider": () => (/* binding */ PuzzleProvider)
/* harmony export */ });
/**
 * Abstract puzzle data provider.
 * Swap implementations via Angular DI to switch between static JSON and a remote API.
 */
class PuzzleProvider {
}


/***/ }),

/***/ 8390:
/*!******************************************************!*\
  !*** ./src/app/services/puzzle-validator.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PuzzleValidatorService": () => (/* binding */ PuzzleValidatorService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PuzzleValidatorService {
    validate(categories) {
        const errors = this.emptyErrors(categories.length || 0);
        let shapeValid = true;
        // 1. Structural shape
        if (categories.length !== 4) {
            errors.global.push(`Expected exactly 4 categories, got ${categories.length}.`);
            shapeValid = false;
        }
        for (let i = 0; i < categories.length; i++) {
            if (!categories[i].words || categories[i].words.length !== 4) {
                errors.global.push(`Category ${i + 1} must have exactly 4 words.`);
                shapeValid = false;
            }
        }
        if (!shapeValid) {
            return { valid: false, errors };
        }
        // 2. Empty/whitespace checks
        for (let i = 0; i < 4; i++) {
            if (!categories[i].name || !categories[i].name.trim()) {
                errors.categories[i].name = 'Category name is required.';
            }
            for (let j = 0; j < 4; j++) {
                if (!categories[i].words[j] || !categories[i].words[j].trim()) {
                    errors.categories[i].words[j] = 'Word is required.';
                }
            }
        }
        // 3. Character limits
        for (let i = 0; i < 4; i++) {
            if (categories[i].name && categories[i].name.length > 30) {
                errors.categories[i].name = 'Category name must be 30 characters or fewer.';
            }
            for (let j = 0; j < 4; j++) {
                if (categories[i].words[j] && categories[i].words[j].length > 20) {
                    errors.categories[i].words[j] = 'Word must be 20 characters or fewer.';
                }
            }
        }
        // 4. Duplicate words — collect all words and count occurrences
        const wordCounts = new Map();
        for (const cat of categories) {
            for (const word of cat.words) {
                const normalized = word.trim().toUpperCase();
                if (normalized) {
                    wordCounts.set(normalized, (wordCounts.get(normalized) || 0) + 1);
                }
            }
        }
        for (const [word, count] of wordCounts) {
            if (count >= 3) {
                errors.global.push(`"${word}" is used too many times — each word can only appear in 1 category (or 2 if it's a corner).`);
            }
        }
        // 5. Word distribution — each unique word must appear in exactly 1 or 2 categories
        const wordCategories = new Map();
        for (const cat of categories) {
            const seen = new Set();
            for (const word of cat.words) {
                const normalized = word.trim().toUpperCase();
                if (normalized && !seen.has(normalized)) {
                    seen.add(normalized);
                    wordCategories.set(normalized, (wordCategories.get(normalized) || 0) + 1);
                }
            }
        }
        for (const [word, catCount] of wordCategories) {
            if (catCount > 2) {
                errors.global.push(`"${word}" is used too many times — each word can only appear in 1 category (or 2 if it's a corner).`);
            }
        }
        // 6. Corner count — exactly 4 words must appear in exactly 2 categories
        const cornerWords = [...wordCategories.entries()].filter(([, count]) => count === 2);
        if (cornerWords.length !== 4) {
            errors.global.push(`Expected exactly 4 corner words (words shared between 2 categories), found ${cornerWords.length}.`);
        }
        // 7. Solvability
        if (errors.global.length === 0) {
            const isSolvable = this.checkSolvability(categories);
            if (!isSolvable) {
                errors.global.push('No valid corner arrangement found. Check that each pair of adjacent categories shares exactly one word.');
            }
        }
        return {
            valid: errors.global.length === 0 && errors.categories.every(c => c.name === null && c.words.every(w => w === null)),
            errors
        };
    }
    getPermutations(values) {
        if (values.length <= 1) {
            return [values];
        }
        const result = [];
        values.forEach((value, index) => {
            const remaining = [...values.slice(0, index), ...values.slice(index + 1)];
            this.getPermutations(remaining).forEach((perm) => result.push([value, ...perm]));
        });
        return result;
    }
    getSingleSharedWord(a, b) {
        const shared = a.filter(word => b.includes(word));
        return shared.length === 1 ? shared[0] : null;
    }
    checkSolvability(categories) {
        const permutations = this.getPermutations(categories.map((_, i) => i));
        for (const perm of permutations) {
            const top = categories[perm[0]];
            const right = categories[perm[1]];
            const bottom = categories[perm[2]];
            const left = categories[perm[3]];
            const topLeft = this.getSingleSharedWord(top.words, left.words);
            const topRight = this.getSingleSharedWord(top.words, right.words);
            const bottomLeft = this.getSingleSharedWord(bottom.words, left.words);
            const bottomRight = this.getSingleSharedWord(bottom.words, right.words);
            if (!topLeft || !topRight || !bottomLeft || !bottomRight) {
                continue;
            }
            const corners = [topLeft, topRight, bottomLeft, bottomRight];
            if (new Set(corners).size !== 4) {
                continue;
            }
            // Verify inner words have exactly 2 each
            const topInner = top.words.filter(w => w !== topLeft && w !== topRight);
            const rightInner = right.words.filter(w => w !== topRight && w !== bottomRight);
            const bottomInner = bottom.words.filter(w => w !== bottomLeft && w !== bottomRight);
            const leftInner = left.words.filter(w => w !== topLeft && w !== bottomLeft);
            if (topInner.length === 2 && rightInner.length === 2 &&
                bottomInner.length === 2 && leftInner.length === 2) {
                return true;
            }
        }
        return false;
    }
    emptyErrors(categoryCount = 4) {
        return {
            global: [],
            categories: Array.from({ length: categoryCount }, () => ({
                name: null,
                words: [null, null, null, null]
            }))
        };
    }
}
PuzzleValidatorService.ɵfac = function PuzzleValidatorService_Factory(t) { return new (t || PuzzleValidatorService)(); };
PuzzleValidatorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PuzzleValidatorService, factory: PuzzleValidatorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6127:
/*!****************************************************!*\
  !*** ./src/app/services/static-puzzle-provider.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaticPuzzleProvider": () => (/* binding */ StaticPuzzleProvider)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9196);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _puzzle_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./puzzle-provider */ 5080);
/* harmony import */ var _constants_daily_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/daily.constants */ 8093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8798);





class StaticPuzzleProvider extends _puzzle_provider__WEBPACK_IMPORTED_MODULE_0__.PuzzleProvider {
    constructor(http) {
        super();
        this.http = http;
    }
    loadPuzzles() {
        if (!this.puzzles$) {
            this.puzzles$ = this.http.get('assets/puzzles.json').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.shareReplay)(1));
        }
        return this.puzzles$;
    }
    getPlayablePuzzles() {
        return this.loadPuzzles().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => data.puzzles.filter(p => p.id > 0 && p.words.length > 0)));
    }
    getDailyPuzzle(today = new Date()) {
        return this.getPlayablePuzzles().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(candidates => {
            if (candidates.length === 0) {
                throw new Error('No daily puzzle candidates available');
            }
            const dayMs = 24 * 60 * 60 * 1000;
            const startMidnight = new Date(_constants_daily_constants__WEBPACK_IMPORTED_MODULE_1__.PUZZLE_START_DATE.getFullYear(), _constants_daily_constants__WEBPACK_IMPORTED_MODULE_1__.PUZZLE_START_DATE.getMonth(), _constants_daily_constants__WEBPACK_IMPORTED_MODULE_1__.PUZZLE_START_DATE.getDate());
            const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            const daysSinceStart = Math.max(0, Math.floor((todayMidnight.getTime() - startMidnight.getTime()) / dayMs));
            const puzzleId = daysSinceStart + 1;
            return candidates.find(p => p.id === puzzleId) ?? candidates[candidates.length - 1];
        }));
    }
    getPuzzleById(id) {
        return this.loadPuzzles().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => data.puzzles.find(puzzle => puzzle.id === id) || null));
    }
    getLibrary(today = new Date()) {
        const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        return this.getPlayablePuzzles().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(puzzles => puzzles
            .map(puzzle => {
            const date = new Date(_constants_daily_constants__WEBPACK_IMPORTED_MODULE_1__.PUZZLE_START_DATE.getFullYear(), _constants_daily_constants__WEBPACK_IMPORTED_MODULE_1__.PUZZLE_START_DATE.getMonth(), _constants_daily_constants__WEBPACK_IMPORTED_MODULE_1__.PUZZLE_START_DATE.getDate() + (puzzle.id - 1));
            return {
                id: puzzle.id,
                title: puzzle.title,
                description: puzzle.description,
                difficulty: puzzle.difficulty ?? this.computeFallbackDifficulty(puzzle),
                date
            };
        })
            .filter(puzzle => puzzle.date <= todayMidnight)
            .sort((a, b) => b.id - a.id)));
    }
    computeFallbackDifficulty(puzzle) {
        const maxCategoryDifficulty = Math.max(...puzzle.categories.map(c => c.difficulty));
        if (maxCategoryDifficulty <= 2)
            return 1;
        if (maxCategoryDifficulty === 3)
            return 2;
        return 3;
    }
}
StaticPuzzleProvider.ɵfac = function StaticPuzzleProvider_Factory(t) { return new (t || StaticPuzzleProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
StaticPuzzleProvider.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: StaticPuzzleProvider, factory: StaticPuzzleProvider.ɵfac });


/***/ }),

/***/ 9792:
/*!********************************************!*\
  !*** ./src/app/services/stats-provider.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsProvider": () => (/* binding */ StatsProvider)
/* harmony export */ });
/**
 * Abstract stats provider.
 * Swap implementations via Angular DI to switch between localStorage and a remote API.
 */
class StatsProvider {
}


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
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
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