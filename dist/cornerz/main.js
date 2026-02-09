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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/game-board/game-board.component */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: 'test-page', component: _components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_0__.GameBoardComponent, data: { testMode: true } },
    { path: '', component: _components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_0__.GameBoardComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { useHash: true }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


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
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100dvh;\n  max-height: 100dvh;\n  padding: 0.6rem 0.6rem 0.5rem;\n  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  overflow: hidden;\n}\n.main-container[_ngcontent-%COMP%]   app-game-board[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: 1;\n  min-height: 0;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZEQUFBO0VBQ0EsNERBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGhlaWdodDogMTAwZHZoO1xuICBtYXgtaGVpZ2h0OiAxMDBkdmg7XG4gIHBhZGRpbmc6IDAuNnJlbSAwLjZyZW0gMC41cmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVmN2ZhIDAlLCAjYzNjZmUyIDEwMCUpO1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgYXBwLWdhbWUtYm9hcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDE7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG4iXX0= */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/game-board/game-board.component */ 8987);
/* harmony import */ var _components_game_tile_game_tile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/game-tile/game-tile.component */ 3506);
/* harmony import */ var _components_win_modal_win_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/win-modal/win-modal.component */ 7958);
/* harmony import */ var _directives_fit_text_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/fit-text.directive */ 6812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.DragDropModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_2__.GameBoardComponent,
        _components_game_tile_game_tile_component__WEBPACK_IMPORTED_MODULE_3__.GameTileComponent,
        _components_win_modal_win_modal_component__WEBPACK_IMPORTED_MODULE_4__.WinModalComponent,
        _directives_fit_text_directive__WEBPACK_IMPORTED_MODULE_5__.FitTextDirective], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.DragDropModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule] }); })();


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
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/game.service */ 1397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _game_tile_game_tile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-tile/game-tile.component */ 3506);
/* harmony import */ var _win_modal_win_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../win-modal/win-modal.component */ 7958);
/* harmony import */ var _directives_fit_text_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/fit-text.directive */ 6812);









function GameBoardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Cornerz Daily Puzzle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 8)(4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GameBoardComponent_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.openHelp()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} }
function GameBoardComponent_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Today's daily puzzle is complete.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function GameBoardComponent_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Next daily puzzle in ", ctx_r9.dailyCountdown, "");
} }
function GameBoardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GameBoardComponent_div_2_span_1_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GameBoardComponent_div_2_span_2_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isDailyLocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.isDailyLocked);
} }
function GameBoardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Loading puzzle...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function GameBoardComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.error);
} }
function GameBoardComponent_div_5_div_1_div_2_app_game_tile_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-game-tile", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkDragStarted", function GameBoardComponent_div_5_div_1_div_2_app_game_tile_1_Template_app_game_tile_cdkDragStarted_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r21.onDragStarted($event)); })("cdkDragEnded", function GameBoardComponent_div_5_div_1_div_2_app_game_tile_1_Template_app_game_tile_cdkDragEnded_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r23.onDragEnded($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("word", ctx_r18.gridTiles[i_r17].word)("isDraggable", ctx_r18.isGridTileDraggable(i_r17))("isSelected", ctx_r18.isGridCellSelected(i_r17))("cdkDragDisabled", !ctx_r18.isGridTileDraggable(i_r17));
} }
function GameBoardComponent_div_5_div_1_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-difficulty", ctx_r19.getCenterDifficulty(i_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r19.getCenterIndicatorArrow(i_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("appFitText", 12)("fitTextWrap", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r19.getCenterIndicatorCategory(i_r17));
} }
function GameBoardComponent_div_5_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 31);
} }
const _c0 = function (a0) { return [a0]; };
function GameBoardComponent_div_5_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkDropListDropped", function GameBoardComponent_div_5_div_1_div_2_Template_div_cdkDropListDropped_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const i_r17 = restoredCtx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r26.dropOnCell($event, i_r17)); })("click", function GameBoardComponent_div_5_div_1_div_2_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const i_r17 = restoredCtx.index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r28.onGridCellClick(i_r17)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GameBoardComponent_div_5_div_1_div_2_app_game_tile_1_Template, 1, 4, "app-game-tile", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GameBoardComponent_div_5_div_1_div_2_div_2_Template, 5, 5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GameBoardComponent_div_5_div_1_div_2_div_3_Template, 1, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tile_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("occupied", ctx_r14.gridTiles[i_r17] !== null && !ctx_r14.isSpotDisabled(i_r17))("disabled", ctx_r14.isSpotDisabled(i_r17))("completed", ctx_r14.isCellCompleted(i_r17))("corner-locked", ctx_r14.isCornerLocked(i_r17))("drop-target", ctx_r14.isValidDropTarget(i_r17) && ctx_r14.gridTiles[i_r17] === null)("selected", ctx_r14.isGridCellSelected(i_r17))("bounce", ctx_r14.isBouncing(i_r17))("shake", ctx_r14.isShaking(i_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", "grid-cell-" + i_r17)("cdkDropListDisabled", ctx_r14.isSpotDisabled(i_r17))("cdkDropListData", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](24, _c0, tile_r16))("cdkDropListConnectedTo", ctx_r14.getConnectedDropLists());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-difficulty", ctx_r14.getCellDifficulty(i_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r14.gridTiles[i_r17] && !ctx_r14.isSpotDisabled(i_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r14.isSpotDisabled(i_r17) && ctx_r14.isCenterIndicatorActive(i_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r14.isSpotDisabled(i_r17) && !ctx_r14.isCenterIndicatorActive(i_r17));
} }
function GameBoardComponent_div_5_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GameBoardComponent_div_5_div_1_div_5_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const i_r30 = restoredCtx.index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); ctx_r31.onBankTileClick(i_r30); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-game-tile", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkDragStarted", function GameBoardComponent_div_5_div_1_div_5_Template_app_game_tile_cdkDragStarted_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r33.onDragStarted($event)); })("cdkDragEnded", function GameBoardComponent_div_5_div_1_div_5_Template_app_game_tile_cdkDragEnded_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.onDragEnded($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tile_r29 = ctx.$implicit;
    const i_r30 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("selected", ctx_r15.isBankTileSelected(i_r30));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("word", tile_r29.word)("isDraggable", !ctx_r15.isResolvingInvalidLine)("isSelected", ctx_r15.isBankTileSelected(i_r30))("cdkDragDisabled", ctx_r15.isResolvingInvalidLine);
} }
function GameBoardComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GameBoardComponent_div_5_div_1_div_2_Template, 4, 26, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 20)(4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkDropListDropped", function GameBoardComponent_div_5_div_1_Template_div_cdkDropListDropped_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r35.dropToBank($event)); })("click", function GameBoardComponent_div_5_div_1_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r37.onBankClick()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, GameBoardComponent_div_5_div_1_div_5_Template, 2, 6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.gridTiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkDropListData", ctx_r10.availableTiles)("cdkDropListConnectedTo", ctx_r10.getConnectedDropLists());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.availableTiles);
} }
function GameBoardComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Come back tomorrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "You already solved today's puzzle.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Next puzzle in ", ctx_r11.dailyCountdown, "");
} }
function GameBoardComponent_div_5_app_win_modal_3_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-win-modal", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("playAgain", function GameBoardComponent_div_5_app_win_modal_3_Template_app_win_modal_playAgain_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r38.onPlayAgain()); })("nextPuzzle", function GameBoardComponent_div_5_app_win_modal_3_Template_app_win_modal_nextPuzzle_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r40.onNextPuzzle()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mistakes", ctx_r12.mistakes)("puzzleId", (ctx_r12.currentPuzzle == null ? null : ctx_r12.currentPuzzle.id) || 1);
} }
function GameBoardComponent_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Coming Soon!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "This puzzle is still being crafted. Check back later for more challenging word puzzles!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function GameBoardComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GameBoardComponent_div_5_div_1_Template, 6, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GameBoardComponent_div_5_div_2_Template, 7, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GameBoardComponent_div_5_app_win_modal_3_Template, 1, 2, "app-win-modal", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, GameBoardComponent_div_5_div_4_Template, 5, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.currentPuzzle && ctx_r4.currentPuzzle.words.length > 0 && !ctx_r4.isDailyLocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.currentPuzzle && ctx_r4.currentPuzzle.words.length > 0 && ctx_r4.isDailyLocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.gameWon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.currentPuzzle && (ctx_r4.currentPuzzle.id === 2 || ctx_r4.currentPuzzle.id === 3));
} }
function GameBoardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GameBoardComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r41.closeHelp()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GameBoardComponent_div_6_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 39)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "How To Play");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GameBoardComponent_div_6_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r44.closeHelp()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ul")(8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Place 12 words on the outer edge of the 4x4 grid. The 4 center cells are disabled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Complete 4 lines: top, bottom, left, and right. Each line must match exactly one category.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Corner words are shared between two categories and connect intersecting lines.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Use drag and drop, or tap a tile then tap a cell. You can swap by dropping on an occupied cell.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Correct lines lock as solved. Incorrect guesses return only newly placed tiles and increase mistakes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Win when all 4 lines are solved.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} }
class GameBoardComponent {
    constructor(route, router, gameService) {
        this.route = route;
        this.router = router;
        this.gameService = gameService;
        this.gridTiles = new Array(16).fill(null);
        this.availableTiles = [];
        this.currentPuzzle = null;
        this.loading = true;
        this.error = null;
        // Define which spots are disabled (center 4 spots in 4x4 grid)
        this.disabledSpots = new Set([5, 6, 9, 10]);
        // Track completed lines (green and locked)
        this.completedLines = new Set();
        // Track which category is assigned to each completed line
        this.lineCategories = new Map();
        this.lineDifficulties = new Map();
        // Animation state: cells currently playing an animation
        this.bouncingCells = new Set();
        this.shakingCells = new Set();
        // Drag state: true while a tile is being dragged
        this.isDragging = false;
        this.isResolvingInvalidLine = false;
        // Tap-to-place: currently selected tile source
        this.selectedTile = null;
        // Scoring
        this.mistakes = 0;
        this.gameWon = false;
        this.isHelpOpen = false;
        this.isDailyPuzzleMode = false;
        this.dailyPuzzleId = null;
        this.isDailyLocked = false;
        this.dailyCountdown = '';
        this.countdownTimer = null;
        // Define the possible lines (top, bottom, left, right)
        this.lines = {
            top: [0, 1, 2, 3],
            bottom: [12, 13, 14, 15],
            left: [0, 4, 8, 12],
            right: [3, 7, 11, 15]
        };
        // Map lines to their corresponding center indicator squares
        this.centerIndicators = {
            top: 6,
            right: 10,
            bottom: 9,
            left: 5
        };
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
        this.startDailyCountdown();
        const testMode = this.route.snapshot.data['testMode'];
        if (testMode) {
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
    }
    loadDailyPuzzle() {
        this.isDailyPuzzleMode = true;
        this.gameService.getDailyPuzzle().subscribe({
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
        this.mistakes = 0;
        this.isDailyLocked = false;
        if (updateUrl) {
            this.router.navigate([], {
                relativeTo: this.route,
                queryParams: { puzzle: puzzleId },
                queryParamsHandling: 'merge'
            });
        }
        if (puzzleId === 2 || puzzleId === 3) {
            this.currentPuzzle = {
                id: puzzleId,
                title: `Puzzle ${puzzleId}`,
                description: 'Coming Soon!',
                words: [],
                categories: []
            };
            this.availableTiles = [];
            this.gridTiles = new Array(16).fill(null);
            this.loading = false;
            return;
        }
        this.gameService.getPuzzleById(puzzleId).subscribe({
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
                    if (puzzleId === -1 && this.route.snapshot.data['testMode']) {
                        this.prePopulateTestPuzzle();
                    }
                    this.updateDailyLockState();
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
        }
        if (leftCategory) {
            this.lineCategories.set('left', leftCategory.name);
            this.lineDifficulties.set('left', leftCategory.difficulty);
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
            (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__.moveItemInArray)(event.container.data, event.previousIndex, event.currentIndex);
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
            return;
        }
        this.selectedTile = { source: 'bank', index };
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
            this.playBounce(cellIndex);
            this.checkForCompletedLines();
        }
        else if (this.gridTiles[cellIndex] !== null) {
            // Select this grid tile
            this.selectedTile = { source: 'grid', index: cellIndex };
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
                    this.checkWinCondition();
                }
                else {
                    this.mistakes++;
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
            if (this.isDailyPuzzleMode && this.currentPuzzle?.id === this.dailyPuzzleId) {
                this.markDailyCompleted();
            }
            this.gameWon = true;
        }
    }
    onPlayAgain() {
        if (this.isDailyPuzzleMode && this.isDailyLocked) {
            this.gameWon = false;
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
    openHelp() {
        this.isHelpOpen = true;
    }
    closeHelp() {
        this.isHelpOpen = false;
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
    getTodayKey() {
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    getDailyCompletions() {
        const raw = localStorage.getItem(GameBoardComponent.DAILY_STORAGE_KEY);
        if (!raw)
            return {};
        try {
            return JSON.parse(raw);
        }
        catch {
            return {};
        }
    }
    markDailyCompleted() {
        if (this.dailyPuzzleId == null)
            return;
        const completions = this.getDailyCompletions();
        completions[this.getTodayKey()] = this.dailyPuzzleId;
        localStorage.setItem(GameBoardComponent.DAILY_STORAGE_KEY, JSON.stringify(completions));
        this.isDailyLocked = true;
    }
    updateDailyLockState() {
        if (!this.isDailyPuzzleMode || this.dailyPuzzleId == null || this.currentPuzzle?.id !== this.dailyPuzzleId) {
            this.isDailyLocked = false;
            return;
        }
        const completions = this.getDailyCompletions();
        this.isDailyLocked = completions[this.getTodayKey()] === this.dailyPuzzleId;
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
GameBoardComponent.DAILY_STORAGE_KEY = 'cornerz-daily-completions';
GameBoardComponent.ɵfac = function GameBoardComponent_Factory(t) { return new (t || GameBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService)); };
GameBoardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GameBoardComponent, selectors: [["app-game-board"]], decls: 7, vars: 6, consts: [[1, "game-container"], ["class", "puzzle-info", 4, "ngIf"], ["class", "daily-status", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "error", 4, "ngIf"], ["class", "game-content", 4, "ngIf"], ["class", "help-modal-backdrop", 3, "click", 4, "ngIf"], [1, "puzzle-info"], [1, "header-actions"], ["type", "button", "aria-label", "Open how to play help", 1, "help-button", 3, "click"], [1, "daily-status"], [4, "ngIf"], [1, "loading"], [1, "error"], [1, "game-content"], ["class", "daily-locked-card", 4, "ngIf"], [3, "mistakes", "puzzleId", "playAgain", "nextPuzzle", 4, "ngIf"], ["class", "coming-soon", 4, "ngIf"], [1, "game-board"], ["class", "grid-cell", "cdkDropList", "", 3, "occupied", "disabled", "completed", "corner-locked", "drop-target", "selected", "bounce", "shake", "id", "cdkDropListDisabled", "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped", "click", 4, "ngFor", "ngForOf"], [1, "tile-bank"], ["cdkDropList", "", "id", "bank-list", 1, "bank-container", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped", "click"], ["class", "bank-tile-wrapper", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["cdkDropList", "", 1, "grid-cell", 3, "id", "cdkDropListDisabled", "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped", "click"], ["cdkDrag", "", 3, "word", "isDraggable", "isSelected", "cdkDragDisabled", "cdkDragStarted", "cdkDragEnded", 4, "ngIf"], ["class", "center-indicator", 4, "ngIf"], ["class", "disabled-spot", 4, "ngIf"], ["cdkDrag", "", 3, "word", "isDraggable", "isSelected", "cdkDragDisabled", "cdkDragStarted", "cdkDragEnded"], [1, "center-indicator"], [1, "arrow"], [1, "category-label", 3, "appFitText", "fitTextWrap"], [1, "disabled-spot"], [1, "bank-tile-wrapper", 3, "click"], [1, "daily-locked-card"], [1, "countdown"], [3, "mistakes", "puzzleId", "playAgain", "nextPuzzle"], [1, "coming-soon"], [1, "help-modal-backdrop", 3, "click"], [1, "help-modal", 3, "click"], [1, "help-modal-header"], ["type", "button", "aria-label", "Close help", 1, "close-button", 3, "click"]], template: function GameBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GameBoardComponent_div_1_Template, 6, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GameBoardComponent_div_2_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GameBoardComponent_div_3_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, GameBoardComponent_div_4_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, GameBoardComponent_div_5_Template, 5, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, GameBoardComponent_div_6_Template, 20, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentPuzzle && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentPuzzle && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isHelpOpen);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__.CdkDrag, _game_tile_game_tile_component__WEBPACK_IMPORTED_MODULE_1__.GameTileComponent, _win_modal_win_modal_component__WEBPACK_IMPORTED_MODULE_2__.WinModalComponent, _directives_fit_text_directive__WEBPACK_IMPORTED_MODULE_3__.FitTextDirective], styles: ["@keyframes bounce {\n  0% {\n    transform: scale(1);\n  }\n  40% {\n    transform: scale(1.1);\n  }\n  70% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  15% {\n    transform: translateX(-4px);\n  }\n  30% {\n    transform: translateX(4px);\n  }\n  45% {\n    transform: translateX(-4px);\n  }\n  60% {\n    transform: translateX(4px);\n  }\n  75% {\n    transform: translateX(-2px);\n  }\n  90% {\n    transform: translateX(2px);\n  }\n}\n@keyframes pulse-border {\n  0%, 100% {\n    border-color: rgba(33, 150, 243, 0.3);\n  }\n  50% {\n    border-color: rgba(33, 150, 243, 0.7);\n  }\n}\n.game-container[_ngcontent-%COMP%] {\n  --board-width: min(90vw, 400px, calc(100dvh - 285px));\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0 0.75rem 0.5rem;\n  width: 100%;\n  max-height: 100%;\n}\n.puzzle-info[_ngcontent-%COMP%] {\n  width: min(92vw, 400px);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.puzzle-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #333;\n  margin: 0;\n  font-size: clamp(0.98rem, 2.4vw, 1.2rem);\n}\n.puzzle-info[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.puzzle-info[_ngcontent-%COMP%]   .help-button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 1px solid #b0bec5;\n  background-color: #fff;\n  color: #455a64;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.daily-status[_ngcontent-%COMP%] {\n  width: min(92vw, 400px);\n  text-align: center;\n  color: #455a64;\n  font-size: 0.78rem;\n  line-height: 1.2;\n}\n.loading[_ngcontent-%COMP%], .error[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  font-size: 1.2rem;\n}\n.error[_ngcontent-%COMP%] {\n  color: #f44336;\n  background-color: #ffebee;\n  border-radius: 4px;\n}\n.game-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.45rem;\n  width: 100%;\n}\n.coming-soon[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 1.5rem;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n  border: 1px solid #e9ecef;\n  width: 100%;\n  max-width: 400px;\n}\n.coming-soon[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin: 0 0 0.75rem;\n  font-size: 1.8rem;\n}\n.coming-soon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 1rem;\n  line-height: 1.5;\n  margin: 0;\n}\n.game-board[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  gap: clamp(4px, 1.5vw, 8px);\n  width: var(--board-width);\n  aspect-ratio: 1;\n  border: 2px solid #333;\n  border-radius: 8px;\n  padding: clamp(4px, 1.5vw, 8px);\n  background-color: #f5f5f5;\n}\n.grid-cell[_ngcontent-%COMP%] {\n  border: 2px dashed #ccc;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  aspect-ratio: 1;\n  overflow: hidden;\n  transition: all 0.2s ease;\n  touch-action: none;\n}\n.grid-cell.occupied[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-color: #4CAF50;\n  background-color: #e8f5e8;\n}\n.grid-cell.completed[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-color: #888 !important;\n  background-color: #e0e0e0 !important;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.grid-cell.completed[data-difficulty=\"1\"][_ngcontent-%COMP%] {\n  border-color: #F9A825 !important;\n  background-color: #FFF9C4 !important;\n  box-shadow: 0 0 10px rgba(249, 168, 37, 0.3);\n}\n.grid-cell.completed[data-difficulty=\"2\"][_ngcontent-%COMP%] {\n  border-color: #2E7D32 !important;\n  background-color: #C8E6C9 !important;\n  box-shadow: 0 0 10px rgba(76, 175, 80, 0.3);\n}\n.grid-cell.completed[data-difficulty=\"3\"][_ngcontent-%COMP%] {\n  border-color: #1565C0 !important;\n  background-color: #BBDEFB !important;\n  box-shadow: 0 0 10px rgba(21, 101, 192, 0.3);\n}\n.grid-cell.completed[data-difficulty=\"4\"][_ngcontent-%COMP%] {\n  border-color: #6A1B9A !important;\n  background-color: #E1BEE7 !important;\n  box-shadow: 0 0 10px rgba(106, 27, 154, 0.3);\n}\n.grid-cell.corner-locked[_ngcontent-%COMP%]   app-game-tile[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.grid-cell.disabled[_ngcontent-%COMP%] {\n  border: 2px solid #666;\n  background-color: #333;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .disabled-spot[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #444;\n  border-radius: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .disabled-spot[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 20%;\n  height: 20%;\n  background-color: #666;\n  border-radius: 50%;\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #666;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: bold;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);\n  border: 2px solid #888;\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[data-difficulty=\"1\"][_ngcontent-%COMP%] {\n  background-color: #F9A825;\n  border-color: #F57F17;\n  box-shadow: 0 0 15px rgba(249, 168, 37, 0.5);\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[data-difficulty=\"2\"][_ngcontent-%COMP%] {\n  background-color: #2E7D32;\n  border-color: #4CAF50;\n  box-shadow: 0 0 15px rgba(76, 175, 80, 0.5);\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[data-difficulty=\"3\"][_ngcontent-%COMP%] {\n  background-color: #1565C0;\n  border-color: #42A5F5;\n  box-shadow: 0 0 15px rgba(21, 101, 192, 0.5);\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[data-difficulty=\"4\"][_ngcontent-%COMP%] {\n  background-color: #6A1B9A;\n  border-color: #AB47BC;\n  box-shadow: 0 0 15px rgba(106, 27, 154, 0.5);\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  font-size: clamp(0.9rem, 3vw, 1.5rem);\n  margin-bottom: 2px;\n  line-height: 1;\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[_ngcontent-%COMP%]   .category-label[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 1.2;\n  max-width: 90%;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  overflow-wrap: break-word;\n}\n.grid-cell.drop-target[_ngcontent-%COMP%] {\n  border-color: rgba(33, 150, 243, 0.4);\n  background-color: rgba(227, 242, 253, 0.5);\n  animation: pulse-border 1.5s ease-in-out infinite;\n}\n.grid-cell.selected[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-color: #FF9800;\n  background-color: #fff3e0;\n  box-shadow: 0 0 8px rgba(255, 152, 0, 0.4);\n}\n.grid-cell.bounce[_ngcontent-%COMP%] {\n  animation: bounce 0.3s ease;\n}\n.grid-cell.shake[_ngcontent-%COMP%] {\n  animation: shake 0.4s ease;\n  border-color: #f44336 !important;\n  background-color: #ffebee !important;\n}\n.grid-cell.cdk-drop-list-dragging[_ngcontent-%COMP%]:not(.disabled) {\n  border-color: #2196F3;\n  background-color: #e3f2fd;\n}\n.grid-cell.cdk-drop-list-receiving[_ngcontent-%COMP%]:not(.disabled) {\n  border-color: #FF9800;\n  background-color: #fff3e0;\n}\n.tile-bank[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  margin-top: 0.2rem;\n}\n.tile-bank[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  color: #333;\n  font-size: clamp(0.9rem, 2.5vw, 1.1rem);\n}\n.bank-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: clamp(4px, 1.5vw, 8px);\n  padding: clamp(4px, 1.5vw, 8px);\n  border: 2px solid #ddd;\n  border-radius: 8px;\n  background-color: #fafafa;\n  width: var(--board-width);\n  margin: 0 auto;\n}\n.bank-tile-wrapper[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  overflow: hidden;\n  border-radius: 6px;\n  transition: box-shadow 0.15s ease;\n}\n.bank-tile-wrapper.selected[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 3px #FF9800;\n  border-radius: 8px;\n}\n.help-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  z-index: 1100;\n}\n.help-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  width: min(92vw, 520px);\n  border-radius: 10px;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.28);\n  padding: 0.9rem 1rem 1rem;\n}\n.help-modal[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 1.05rem;\n  color: #37474f;\n  font-size: 0.9rem;\n  line-height: 1.45;\n}\n.help-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.6rem;\n}\n.help-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  color: #1f2a30;\n}\n.close-button[_ngcontent-%COMP%] {\n  border: 1px solid #cfd8dc;\n  background: #fff;\n  color: #607d8b;\n  border-radius: 6px;\n  width: 28px;\n  height: 28px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.daily-locked-card[_ngcontent-%COMP%] {\n  width: min(90vw, 400px);\n  background: #ffffff;\n  border: 1px solid #d6dee3;\n  border-radius: 10px;\n  padding: 1rem;\n  text-align: center;\n}\n.daily-locked-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1.05rem;\n  color: #263238;\n}\n.daily-locked-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #546e7a;\n  font-size: 0.9rem;\n}\n.daily-locked-card[_ngcontent-%COMP%]   .countdown[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-weight: 600;\n  color: #37474f;\n}\n@media (max-width: 768px) {\n  .puzzle-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .puzzle-info[_ngcontent-%COMP%]   .help-button[_ngcontent-%COMP%] {\n    width: 34px;\n    height: 34px;\n    font-size: 1.05rem;\n  }\n  .grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[_ngcontent-%COMP%]   .category-label[_ngcontent-%COMP%] {\n    line-height: 1.2;\n  }\n  .tile-bank[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .game-container[_ngcontent-%COMP%] {\n    --board-width: min(91vw, calc(100dvh - 245px));\n  }\n  .help-modal[_ngcontent-%COMP%] {\n    width: 92vw;\n  }\n  .help-modal[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    line-height: 1.5;\n  }\n  .daily-locked-card[_ngcontent-%COMP%] {\n    width: min(91vw, 100dvh - 245px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRTtJQUFPLG1CQUFBO0VBSFA7RUFJQTtJQUFPLHFCQUFBO0VBRFA7RUFFQTtJQUFPLHNCQUFBO0VBQ1A7RUFBQTtJQUFPLG1CQUFBO0VBR1A7QUFDRjtBQURBO0VBQ0U7SUFBVyx3QkFBQTtFQUlYO0VBSEE7SUFBVywyQkFBQTtFQU1YO0VBTEE7SUFBVywwQkFBQTtFQVFYO0VBUEE7SUFBVywyQkFBQTtFQVVYO0VBVEE7SUFBVywwQkFBQTtFQVlYO0VBWEE7SUFBVywyQkFBQTtFQWNYO0VBYkE7SUFBVywwQkFBQTtFQWdCWDtBQUNGO0FBZEE7RUFDRTtJQUFXLHFDQUFBO0VBaUJYO0VBaEJBO0lBQVcscUNBQUE7RUFtQlg7QUFDRjtBQWpCQTtFQUNFLHFEQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFtQkY7QUFoQkE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBbUJGO0FBakJFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtBQW1CSjtBQWhCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQWtCSjtBQWZFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWlCSjtBQWJBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZ0JGO0FBYkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQWdCRjtBQWJBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFnQkY7QUFiQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFnQkY7QUFiQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBdEdVO0FBc0haO0FBZEU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWdCSjtBQWJFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFlSjtBQVhBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0FBY0Y7QUFYQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFjRjtBQVpFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBY0o7QUFYRTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHVDQUFBO0FBYUo7QUFWSTtFQUNFLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtBQVlOO0FBUkk7RUFDRSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsMkNBQUE7QUFVTjtBQU5JO0VBQ0UsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDRDQUFBO0FBUU47QUFKSTtFQUNFLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtBQU1OO0FBREk7RUFDRSxvQkFBQTtBQUdOO0FBQ0U7RUFDRSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNOO0FBQ007RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ1I7QUFHSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNCQUFBO0FBRE47QUFHTTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSw0Q0FBQTtBQURSO0FBSU07RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7QUFGUjtBQUtNO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRDQUFBO0FBSFI7QUFNTTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSw0Q0FBQTtBQUpSO0FBT007RUFDRSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUxSO0FBUU07RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQU5SO0FBWUU7RUFDRSxxQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsaURBQUE7QUFWSjtBQWNFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMENBQUE7QUFaSjtBQWdCRTtFQUNFLDJCQUFBO0FBZEo7QUFrQkU7RUFDRSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7QUFoQko7QUFtQkU7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0FBakJKO0FBb0JFO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtBQWxCSjtBQXNCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBbkJGO0FBcUJFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7QUFuQko7QUF1QkE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBcEJGO0FBdUJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQXBCRjtBQXNCRTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7QUFwQko7QUF3QkE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQXJCRjtBQXdCQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7QUFyQkY7QUF1QkU7RUFDRSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQXJCSjtBQXlCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUF0QkY7QUF3QkU7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUF0Qko7QUEwQkE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXZCRjtBQTBCQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBdkJGO0FBeUJFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUF2Qko7QUEwQkU7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBeEJKO0FBMkJFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUF6Qko7QUE2QkE7RUFFSTtJQUNFLGtCQUFBO0VBM0JKO0VBOEJFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQTVCSjtFQWlDRTtJQUNFLGlCQUFBO0VBL0JKO0VBa0NFO0lBQ0UsZ0JBQUE7RUFoQ0o7RUFvQ0E7SUFDRSxrQkFBQTtFQWxDRjtFQXFDQTtJQUNFLDhDQUFBO0VBbkNGO0VBc0NBO0lBQ0UsV0FBQTtFQXBDRjtFQXNDRTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7RUFwQ0o7RUF3Q0E7SUFDRSxnQ0FBQTtFQXRDRjtBQUNGIiwiZmlsZSI6ImdhbWUtYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCb2FyZCBzaXppbmc6IHNjYWxlcyB3aXRoIHZpZXdwb3J0LCBjYXBwZWQgYXQgNDAwcHhcclxuJGJvYXJkLW1heDogNDAwcHg7XHJcblxyXG4vLyAtLS0gQW5pbWF0aW9ucyAtLS1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlIHtcclxuICAwJSAgIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxyXG4gIDQwJSAgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cclxuICA3MCUgIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hha2Uge1xyXG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XHJcbiAgMTUlICAgICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTRweCk7IH1cclxuICAzMCUgICAgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpOyB9XHJcbiAgNDUlICAgICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTRweCk7IH1cclxuICA2MCUgICAgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpOyB9XHJcbiAgNzUlICAgICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7IH1cclxuICA5MCUgICAgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2UtYm9yZGVyIHtcclxuICAwJSwgMTAwJSB7IGJvcmRlci1jb2xvcjogcmdiYSgzMywgMTUwLCAyNDMsIDAuMyk7IH1cclxuICA1MCUgICAgICB7IGJvcmRlci1jb2xvcjogcmdiYSgzMywgMTUwLCAyNDMsIDAuNyk7IH1cclxufVxyXG5cclxuLmdhbWUtY29udGFpbmVyIHtcclxuICAtLWJvYXJkLXdpZHRoOiBtaW4oOTB2dywgI3skYm9hcmQtbWF4fSwgY2FsYygxMDBkdmggLSAyODVweCkpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC40NXJlbTtcclxuICBwYWRkaW5nOiAwIDAuNzVyZW0gMC41cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5wdXp6bGUtaW5mbyB7XG4gIHdpZHRoOiBtaW4oOTJ2dywgJGJvYXJkLW1heCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgaDIge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IGNsYW1wKDAuOThyZW0sIDIuNHZ3LCAxLjJyZW0pO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlci1hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmhlbHAtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IwYmVjNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogIzQ1NWE2NDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XG5cbi5kYWlseS1zdGF0dXMge1xuICB3aWR0aDogbWluKDkydncsICRib2FyZC1tYXgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNDU1YTY0O1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi5sb2FkaW5nLCAuZXJyb3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICBjb2xvcjogI2Y0NDMzNjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmdhbWUtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjQ1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29taW5nLXNvb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogJGJvYXJkLW1heDtcclxuXHJcbiAgaDIge1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBtYXJnaW46IDAgMCAwLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi5nYW1lLWJvYXJkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcclxuICBnYXA6IGNsYW1wKDRweCwgMS41dncsIDhweCk7XHJcbiAgd2lkdGg6IHZhcigtLWJvYXJkLXdpZHRoKTtcclxuICBhc3BlY3QtcmF0aW86IDE7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzMzMztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogY2xhbXAoNHB4LCAxLjV2dywgOHB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4uZ3JpZC1jZWxsIHtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFzcGVjdC1yYXRpbzogMTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xyXG5cclxuICAmLm9jY3VwaWVkIHtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmNWU4O1xyXG4gIH1cclxuXHJcbiAgJi5jb21wbGV0ZWQge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzg4OCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuICAgIC8vIFllbGxvdyAtIGVhc2llc3RcclxuICAgICZbZGF0YS1kaWZmaWN1bHR5PVwiMVwiXSB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI0Y5QTgyNSAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOUM0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMjQ5LCAxNjgsIDM3LCAwLjMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdyZWVuXHJcbiAgICAmW2RhdGEtZGlmZmljdWx0eT1cIjJcIl0ge1xyXG4gICAgICBib3JkZXItY29sb3I6ICMyRTdEMzIgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0M4RTZDOSAhaW1wb3J0YW50O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJsdWVcclxuICAgICZbZGF0YS1kaWZmaWN1bHR5PVwiM1wiXSB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzE1NjVDMCAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJERUZCICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMjEsIDEwMSwgMTkyLCAwLjMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1cnBsZSAtIGhhcmRlc3RcclxuICAgICZbZGF0YS1kaWZmaWN1bHR5PVwiNFwiXSB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzZBMUI5QSAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFCRUU3ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMTA2LCAyNywgMTU0LCAwLjMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5jb3JuZXItbG9ja2VkIHtcclxuICAgIGFwcC1nYW1lLXRpbGUge1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZGlzYWJsZWQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzY2NjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcblxyXG4gICAgLmRpc2FibGVkLXNwb3Qge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNlbnRlci1pbmRpY2F0b3Ige1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM4ODg7XHJcblxyXG4gICAgICAmW2RhdGEtZGlmZmljdWx0eT1cIjFcIl0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUE4MjU7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjU3RjE3O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMjQ5LCAxNjgsIDM3LCAwLjUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmW2RhdGEtZGlmZmljdWx0eT1cIjJcIl0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyRTdEMzI7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoNzYsIDE3NSwgODAsIDAuNSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICZbZGF0YS1kaWZmaWN1bHR5PVwiM1wiXSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1NjVDMDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICM0MkE1RjU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgyMSwgMTAxLCAxOTIsIDAuNSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICZbZGF0YS1kaWZmaWN1bHR5PVwiNFwiXSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZBMUI5QTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNBQjQ3QkM7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgxMDYsIDI3LCAxNTQsIDAuNSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hcnJvdyB7XHJcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjlyZW0sIDN2dywgMS41cmVtKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXRlZ29yeS1sYWJlbCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gVmFsaWQgZHJvcCB0YXJnZXQgaGlnaGxpZ2h0IChlbXB0eSBjZWxscyB3aGlsZSBkcmFnZ2luZyBvciB0aWxlIHNlbGVjdGVkKVxyXG4gICYuZHJvcC10YXJnZXQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDMzLCAxNTAsIDI0MywgMC40KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyNDIsIDI1MywgMC41KTtcclxuICAgIGFuaW1hdGlvbjogcHVsc2UtYm9yZGVyIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICAvLyBTZWxlY3RlZCBjZWxsICh0YXAtdG8tcGxhY2UpXHJcbiAgJi5zZWxlY3RlZCB7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRkY5ODAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjNlMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgyNTUsIDE1MiwgMCwgMC40KTtcclxuICB9XHJcblxyXG4gIC8vIEJvdW5jZSBvbiBzdWNjZXNzZnVsIGRyb3BcclxuICAmLmJvdW5jZSB7XHJcbiAgICBhbmltYXRpb246IGJvdW5jZSAwLjNzIGVhc2U7XHJcbiAgfVxyXG5cclxuICAvLyBTaGFrZSBvbiBpbnZhbGlkIGxpbmVcclxuICAmLnNoYWtlIHtcclxuICAgIGFuaW1hdGlvbjogc2hha2UgMC40cyBlYXNlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmc6bm90KC5kaXNhYmxlZCkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjE5NkYzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcclxuICB9XHJcblxyXG4gICYuY2RrLWRyb3AtbGlzdC1yZWNlaXZpbmc6bm90KC5kaXNhYmxlZCkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRkY5ODAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjNlMDtcclxuICB9XHJcbn1cclxuXHJcbi50aWxlLWJhbmsge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcblxyXG4gIGgzIHtcclxuICAgIG1hcmdpbjogMCAwIDAuMjVyZW07XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMC45cmVtLCAyLjV2dywgMS4xcmVtKTtcclxuICB9XHJcbn1cclxuXHJcbi5iYW5rLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIGdhcDogY2xhbXAoNHB4LCAxLjV2dywgOHB4KTtcclxuICBwYWRkaW5nOiBjbGFtcCg0cHgsIDEuNXZ3LCA4cHgpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgd2lkdGg6IHZhcigtLWJvYXJkLXdpZHRoKTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmJhbmstdGlsZS13cmFwcGVyIHtcclxuICBhc3BlY3QtcmF0aW86IDE7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjE1cyBlYXNlO1xyXG5cclxuICAmLnNlbGVjdGVkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCAjRkY5ODAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmhlbHAtbW9kYWwtYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU1KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB6LWluZGV4OiAxMTAwO1xyXG59XHJcblxyXG4uaGVscC1tb2RhbCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB3aWR0aDogbWluKDkydncsIDUyMHB4KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTJweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XHJcbiAgcGFkZGluZzogMC45cmVtIDFyZW0gMXJlbTtcclxuXHJcbiAgdWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjA1cmVtO1xyXG4gICAgY29sb3I6ICMzNzQ3NGY7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ1O1xyXG4gIH1cclxufVxyXG5cclxuLmhlbHAtbW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcclxuXHJcbiAgaDMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6ICMxZjJhMzA7XHJcbiAgfVxyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2ZkOGRjO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgY29sb3I6ICM2MDdkOGI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHdpZHRoOiAyOHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxuXG4uZGFpbHktbG9ja2VkLWNhcmQge1xuICB3aWR0aDogbWluKDkwdncsICRib2FyZC1tYXgpO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkZWUzO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMCAwIDAuMzVyZW07XG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgIGNvbG9yOiAjMjYzMjM4O1xuICB9XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiAjNTQ2ZTdhO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG5cbiAgLmNvdW50ZG93biB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMzNzQ3NGY7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wdXp6bGUtaW5mbyB7XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuaGVscC1idXR0b24ge1xyXG4gICAgICB3aWR0aDogMzRweDtcclxuICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICBmb250LXNpemU6IDEuMDVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jZWxsLmRpc2FibGVkIC5jZW50ZXItaW5kaWNhdG9yIHtcclxuICAgIC5hcnJvdyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXRlZ29yeS1sYWJlbCB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGlsZS1iYW5rIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICB9XHJcblxyXG4gIC5nYW1lLWNvbnRhaW5lciB7XHJcbiAgICAtLWJvYXJkLXdpZHRoOiBtaW4oOTF2dywgY2FsYygxMDBkdmggLSAyNDVweCkpO1xyXG4gIH1cclxuXHJcbiAgLmhlbHAtbW9kYWwge1xuICAgIHdpZHRoOiA5MnZ3O1xyXG5cclxuICAgIHVsIHtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgfVxuICB9XG5cbiAgLmRhaWx5LWxvY2tlZC1jYXJkIHtcbiAgICB3aWR0aDogbWluKDkxdncsIGNhbGMoMTAwZHZoIC0gMjQ1cHgpKTtcbiAgfVxufVxuIl19 */"] });


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
GameTileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameTileComponent, selectors: [["app-game-tile"]], inputs: { word: "word", isDraggable: "isDraggable", isSelected: "isSelected" }, decls: 3, vars: 6, consts: [[1, "tile"], [1, "word", 3, "appFitText"]], template: function GameTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("draggable", ctx.isDraggable)("selected", ctx.isSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appFitText", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.word);
    } }, dependencies: [_directives_fit_text_directive__WEBPACK_IMPORTED_MODULE_0__.FitTextDirective], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.tile[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  transition: all 0.2s ease;\n  cursor: default;\n  touch-action: none;\n}\n\n.tile.draggable[_ngcontent-%COMP%] {\n  cursor: grab;\n}\n\n.tile.draggable[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);\n}\n\n.tile.draggable[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n\n.tile.selected[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 3px #FF9800, 0 2px 8px rgba(0, 0, 0, 0.15);\n  transform: scale(1.05);\n}\n\n.tile[_ngcontent-%COMP%]   .word[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  line-height: 1.2;\n  padding: 2px;\n  white-space: nowrap;\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 6px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  transform: rotate(5deg);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  background: #ccc;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n@media (max-width: 768px) {\n  .tile[_ngcontent-%COMP%]   .word[_ngcontent-%COMP%] {\n    line-height: 1.15;\n    padding: 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtdGlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw2REFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxZQUFBO0FBQ0o7O0FBQ0k7RUFDRSwyQkFBQTtFQUNBLDBDQUFBO0FBQ047O0FBRUk7RUFDRSxnQkFBQTtBQUFOOztBQUlFO0VBQ0UsNERBQUE7RUFDQSxzQkFBQTtBQUZKOztBQUtFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUhKOztBQU9BO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7QUFKRjs7QUFPQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUpGOztBQU9BO0VBQ0Usc0RBQUE7QUFKRjs7QUFPQTtFQUVJO0lBQ0UsaUJBQUE7SUFDQSxZQUFBO0VBTEo7QUFDRiIsImZpbGUiOiJnYW1lLXRpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGlsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICB0b3VjaC1hY3Rpb246IG5vbmU7XHJcblxyXG4gICYuZHJhZ2dhYmxlIHtcclxuICAgIGN1cnNvcjogZ3JhYjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICB9XHJcblxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICBjdXJzb3I6IGdyYWJiaW5nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5zZWxlY3RlZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggI0ZGOTgwMCwgMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gIH1cclxuXHJcbiAgLndvcmQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRpbGUge1xyXG4gICAgLndvcmQge1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class WinModalComponent {
    constructor() {
        this.mistakes = 0;
        this.puzzleId = 1;
        this.playAgain = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.nextPuzzle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    get ratingStars() {
        if (this.mistakes === 0)
            return '★★★';
        if (this.mistakes <= 2)
            return '★★☆';
        if (this.mistakes <= 4)
            return '★☆☆';
        return '☆☆☆';
    }
    get ratingLabel() {
        if (this.mistakes === 0)
            return 'Perfect!';
        if (this.mistakes <= 2)
            return 'Great!';
        if (this.mistakes <= 4)
            return 'Good';
        return 'Keep practicing!';
    }
}
WinModalComponent.ɵfac = function WinModalComponent_Factory(t) { return new (t || WinModalComponent)(); };
WinModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WinModalComponent, selectors: [["app-win-modal"]], inputs: { mistakes: "mistakes", puzzleId: "puzzleId" }, outputs: { playAgain: "playAgain", nextPuzzle: "nextPuzzle" }, decls: 19, vars: 4, consts: [[1, "overlay", 3, "click"], [1, "modal"], [1, "rating"], [1, "rating-label"], [1, "stats"], [1, "stat"], [1, "stat-value"], [1, "stat-label"], [1, "actions"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"]], template: function WinModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WinModalComponent_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Puzzle Complete!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8)(15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WinModalComponent_Template_button_click_15_listener() { return ctx.playAgain.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Play Again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WinModalComponent_Template_button_click_17_listener() { return ctx.nextPuzzle.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Next Puzzle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ratingStars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ratingLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mistakes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mistakes === 1 ? "Mistake" : "Mistakes");
    } }, styles: ["@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slide-up {\n  from {\n    opacity: 0;\n    transform: translateY(30px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: fade-in 0.3s ease;\n  padding: 1rem;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 2rem 2.5rem;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  animation: slide-up 0.4s ease;\n  width: min(90vw, 340px);\n}\n.modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1.6rem;\n  color: #333;\n}\n.rating[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin: 0.25rem 0;\n  color: #FF9800;\n}\n.rating-label[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #666;\n  margin-bottom: 1.25rem;\n}\n.stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 2.5rem;\n  margin-bottom: 1.5rem;\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: bold;\n  color: #333;\n  line-height: 1.2;\n}\n.stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #888;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.7rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  color: #333;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbi1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQU8sVUFBQTtFQUVQO0VBREE7SUFBTyxVQUFBO0VBSVA7QUFDRjtBQUZBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsdUNBQUE7RUFJRjtFQUZBO0lBQ0UsVUFBQTtJQUNBLGlDQUFBO0VBSUY7QUFDRjtBQURBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQUdGO0FBQUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtBQUdGO0FBREU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUdKO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVGO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUVGO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFFRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUFFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQ0U7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFBRjtBQUdBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFBRjtBQUVFO0VBQ0UsMkJBQUE7RUFDQSx5Q0FBQTtBQUFKO0FBR0U7RUFDRSx3QkFBQTtBQURKO0FBS0E7RUFDRSw2REFBQTtFQUNBLFlBQUE7QUFGRjtBQUtBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBRkY7QUFJRTtFQUNFLHlCQUFBO0FBRkoiLCJmaWxlIjoid2luLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8gICB7IG9wYWNpdHk6IDE7IH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpIHNjYWxlKDAuOTUpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgfVxufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjNzIGVhc2U7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5tb2RhbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAycmVtIDIuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDIwcHggNjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC40cyBlYXNlO1xuICB3aWR0aDogbWluKDkwdncsIDM0MHB4KTtcblxuICBoMiB7XG4gICAgbWFyZ2luOiAwIDAgMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG59XG5cbi5yYXRpbmcge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luOiAwLjI1cmVtIDA7XG4gIGNvbG9yOiAjRkY5ODAwO1xufVxuXG4ucmF0aW5nLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiAjNjY2O1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuXG4uc3RhdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLnN0YXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5zdGF0LXZhbHVlIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICB9XG5cbiAgLnN0YXQtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGNvbG9yOiAjODg4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICB9XG59XG5cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5idG4ge1xuICBwYWRkaW5nOiAwLjdyZW0gMS41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBjb2xvcjogIzMzMztcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICB9XG59XG4iXX0= */"] });


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

/***/ 1397:
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameService": () => (/* binding */ GameService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 9196);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8798);



class GameService {
    constructor(http) {
        this.http = http;
        this.launchDate = new Date(2026, 1, 9); // February 9, 2026 (local time)
    }
    loadPuzzles() {
        if (!this.puzzles$) {
            this.puzzles$ = this.http.get('assets/puzzles.json').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.shareReplay)(1));
        }
        return this.puzzles$;
    }
    getPuzzleById(id) {
        return this.loadPuzzles().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => data.puzzles.find(puzzle => puzzle.id === id) || null));
    }
    getAvailablePuzzles() {
        return this.loadPuzzles().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => data.puzzles));
    }
    getDailyPuzzle(today = new Date()) {
        return this.getAvailablePuzzles().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(puzzles => {
            const candidates = puzzles.filter(puzzle => puzzle.id > 0 && puzzle.words.length > 0);
            if (candidates.length === 0) {
                throw new Error('No daily puzzle candidates available');
            }
            const dayMs = 24 * 60 * 60 * 1000;
            const launchMidnight = new Date(this.launchDate.getFullYear(), this.launchDate.getMonth(), this.launchDate.getDate());
            const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            const daysSinceLaunch = Math.max(0, Math.floor((todayMidnight.getTime() - launchMidnight.getTime()) / dayMs));
            const index = daysSinceLaunch % candidates.length;
            return candidates[index];
        }));
    }
    // Calculate grid layout from categories
    calculateGridLayout(puzzle) {
        if (puzzle.categories.length !== 4) {
            throw new Error('Puzzle must have exactly 4 categories for corner layout');
        }
        // Find corner words (words that appear in exactly 2 categories)
        const wordCounts = new Map();
        puzzle.categories.forEach(category => {
            category.words.forEach(word => {
                if (!wordCounts.has(word)) {
                    wordCounts.set(word, []);
                }
                wordCounts.get(word).push(category);
            });
        });
        // Find corners (words appearing in exactly 2 categories)
        const corners = [];
        const edges = [];
        wordCounts.forEach((categories, word) => {
            if (categories.length === 2) {
                corners.push(word);
            }
            else if (categories.length === 1) {
                edges.push(word);
            }
        });
        // For now, return a basic layout - this can be enhanced based on category order
        return {
            corners: {
                topLeft: corners[0] || '',
                topRight: corners[1] || '',
                bottomLeft: corners[2] || '',
                bottomRight: corners[3] || ''
            },
            edges: {
                top: edges.slice(0, 2),
                right: edges.slice(2, 4),
                bottom: edges.slice(4, 6),
                left: edges.slice(6, 8)
            }
        };
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
GameService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });


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