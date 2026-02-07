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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/game-board/game-board.component */ 8987);



class AppComponent {
    constructor() {
        this.title = 'cornerz';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "main-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-game-board");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_0__.GameBoardComponent], styles: [".main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100dvh;\n  max-height: 100dvh;\n  padding: 0.6rem 0.6rem 0.5rem;\n  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  overflow: hidden;\n}\n.main-container[_ngcontent-%COMP%]   app-game-board[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: 1;\n  min-height: 0;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZEQUFBO0VBQ0EsNERBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGhlaWdodDogMTAwZHZoO1xuICBtYXgtaGVpZ2h0OiAxMDBkdmg7XG4gIHBhZGRpbmc6IDAuNnJlbSAwLjZyZW0gMC41cmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVmN2ZhIDAlLCAjYzNjZmUyIDEwMCUpO1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgYXBwLWdhbWUtYm9hcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDE7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG4iXX0= */"] });


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
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Cornerz Daily Puzzle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 7)(4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GameBoardComponent_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.openHelp()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} }
function GameBoardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Loading puzzle...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function GameBoardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.error);
} }
function GameBoardComponent_div_4_div_1_div_2_app_game_tile_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-game-tile", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkDragStarted", function GameBoardComponent_div_4_div_1_div_2_app_game_tile_1_Template_app_game_tile_cdkDragStarted_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.onDragStarted($event)); })("cdkDragEnded", function GameBoardComponent_div_4_div_1_div_2_app_game_tile_1_Template_app_game_tile_cdkDragEnded_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r19.onDragEnded($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("word", ctx_r14.gridTiles[i_r13].word)("isDraggable", ctx_r14.isGridTileDraggable(i_r13))("isSelected", ctx_r14.isGridCellSelected(i_r13))("cdkDragDisabled", !ctx_r14.isGridTileDraggable(i_r13));
} }
function GameBoardComponent_div_4_div_1_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-difficulty", ctx_r15.getCenterDifficulty(i_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r15.getCenterIndicatorArrow(i_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("appFitText", 12)("fitTextWrap", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r15.getCenterIndicatorCategory(i_r13));
} }
function GameBoardComponent_div_4_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 28);
} }
const _c0 = function (a0) { return [a0]; };
function GameBoardComponent_div_4_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkDropListDropped", function GameBoardComponent_div_4_div_1_div_2_Template_div_cdkDropListDropped_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const i_r13 = restoredCtx.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.dropOnCell($event, i_r13)); })("click", function GameBoardComponent_div_4_div_1_div_2_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const i_r13 = restoredCtx.index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.onGridCellClick(i_r13)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GameBoardComponent_div_4_div_1_div_2_app_game_tile_1_Template, 1, 4, "app-game-tile", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GameBoardComponent_div_4_div_1_div_2_div_2_Template, 5, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GameBoardComponent_div_4_div_1_div_2_div_3_Template, 1, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tile_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("occupied", ctx_r10.gridTiles[i_r13] !== null && !ctx_r10.isSpotDisabled(i_r13))("disabled", ctx_r10.isSpotDisabled(i_r13))("completed", ctx_r10.isCellCompleted(i_r13))("corner-locked", ctx_r10.isCornerLocked(i_r13))("drop-target", ctx_r10.isValidDropTarget(i_r13) && ctx_r10.gridTiles[i_r13] === null)("selected", ctx_r10.isGridCellSelected(i_r13))("bounce", ctx_r10.isBouncing(i_r13))("shake", ctx_r10.isShaking(i_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", "grid-cell-" + i_r13)("cdkDropListDisabled", ctx_r10.isSpotDisabled(i_r13))("cdkDropListData", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](24, _c0, tile_r12))("cdkDropListConnectedTo", ctx_r10.getConnectedDropLists());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-difficulty", ctx_r10.getCellDifficulty(i_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.gridTiles[i_r13] && !ctx_r10.isSpotDisabled(i_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.isSpotDisabled(i_r13) && ctx_r10.isCenterIndicatorActive(i_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.isSpotDisabled(i_r13) && !ctx_r10.isCenterIndicatorActive(i_r13));
} }
function GameBoardComponent_div_4_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GameBoardComponent_div_4_div_1_div_7_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const i_r26 = restoredCtx.index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); ctx_r27.onBankTileClick(i_r26); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-game-tile", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkDragStarted", function GameBoardComponent_div_4_div_1_div_7_Template_app_game_tile_cdkDragStarted_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.onDragStarted($event)); })("cdkDragEnded", function GameBoardComponent_div_4_div_1_div_7_Template_app_game_tile_cdkDragEnded_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r30.onDragEnded($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tile_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("selected", ctx_r11.isBankTileSelected(i_r26));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("word", tile_r25.word)("isDraggable", !ctx_r11.isResolvingInvalidLine)("isSelected", ctx_r11.isBankTileSelected(i_r26))("cdkDragDisabled", ctx_r11.isResolvingInvalidLine);
} }
function GameBoardComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GameBoardComponent_div_4_div_1_div_2_Template, 4, 26, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 17)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Available Tiles");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkDropListDropped", function GameBoardComponent_div_4_div_1_Template_div_cdkDropListDropped_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r31.dropToBank($event)); })("click", function GameBoardComponent_div_4_div_1_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r33.onBankClick()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, GameBoardComponent_div_4_div_1_div_7_Template, 2, 6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r7.gridTiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkDropListData", ctx_r7.availableTiles)("cdkDropListConnectedTo", ctx_r7.getConnectedDropLists());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r7.availableTiles);
} }
function GameBoardComponent_div_4_app_win_modal_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-win-modal", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("playAgain", function GameBoardComponent_div_4_app_win_modal_2_Template_app_win_modal_playAgain_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.onPlayAgain()); })("nextPuzzle", function GameBoardComponent_div_4_app_win_modal_2_Template_app_win_modal_nextPuzzle_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r36.onNextPuzzle()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mistakes", ctx_r8.mistakes)("puzzleId", (ctx_r8.currentPuzzle == null ? null : ctx_r8.currentPuzzle.id) || 1);
} }
function GameBoardComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Coming Soon!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "This puzzle is still being crafted. Check back later for more challenging word puzzles!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function GameBoardComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GameBoardComponent_div_4_div_1_Template, 8, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GameBoardComponent_div_4_app_win_modal_2_Template, 1, 2, "app-win-modal", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GameBoardComponent_div_4_div_3_Template, 5, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.currentPuzzle && ctx_r3.currentPuzzle.id === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.gameWon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.currentPuzzle && (ctx_r3.currentPuzzle.id === 2 || ctx_r3.currentPuzzle.id === 3));
} }
function GameBoardComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GameBoardComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r37.closeHelp()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GameBoardComponent_div_5_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 34)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "How To Play");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GameBoardComponent_div_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r40.closeHelp()); });
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
        this.route.queryParams.subscribe(params => {
            const puzzleId = params['puzzle'] ? parseInt(params['puzzle']) : 1;
            this.loadPuzzle(puzzleId);
        });
    }
    loadPuzzle(puzzleId, updateUrl = false) {
        this.loading = true;
        this.error = null;
        this.selectedTile = null;
        this.gameWon = false;
        this.mistakes = 0;
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
    // --- Drag-and-drop handlers ---
    onDragStarted(_event) {
        this.isDragging = true;
        this.selectedTile = null;
    }
    onDragEnded(_event) {
        this.isDragging = false;
    }
    dropOnCell(event, cellIndex) {
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
        if (this.isDragging || this.isResolvingInvalidLine)
            return;
        if (this.selectedTile?.source === 'bank' && this.selectedTile.index === index) {
            this.selectedTile = null;
            return;
        }
        this.selectedTile = { source: 'bank', index };
    }
    onGridCellClick(cellIndex) {
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
        return !this.isCornerLocked(cellIndex) && !this.isResolvingInvalidLine;
    }
    isValidDropTarget(cellIndex) {
        if (this.isSpotDisabled(cellIndex) || this.isCornerLocked(cellIndex) || this.isResolvingInvalidLine) {
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
            this.gameWon = true;
        }
    }
    onPlayAgain() {
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
GameBoardComponent.ɵfac = function GameBoardComponent_Factory(t) { return new (t || GameBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService)); };
GameBoardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GameBoardComponent, selectors: [["app-game-board"]], decls: 6, vars: 5, consts: [[1, "game-container"], ["class", "puzzle-info", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "error", 4, "ngIf"], ["class", "game-content", 4, "ngIf"], ["class", "help-modal-backdrop", 3, "click", 4, "ngIf"], [1, "puzzle-info"], [1, "header-actions"], ["type", "button", "aria-label", "Open how to play help", 1, "help-button", 3, "click"], [1, "loading"], [1, "error"], [1, "game-content"], [4, "ngIf"], [3, "mistakes", "puzzleId", "playAgain", "nextPuzzle", 4, "ngIf"], ["class", "coming-soon", 4, "ngIf"], [1, "game-board"], ["class", "grid-cell", "cdkDropList", "", 3, "occupied", "disabled", "completed", "corner-locked", "drop-target", "selected", "bounce", "shake", "id", "cdkDropListDisabled", "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped", "click", 4, "ngFor", "ngForOf"], [1, "tile-bank"], ["cdkDropList", "", "id", "bank-list", 1, "bank-container", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped", "click"], ["class", "bank-tile-wrapper", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["cdkDropList", "", 1, "grid-cell", 3, "id", "cdkDropListDisabled", "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped", "click"], ["cdkDrag", "", 3, "word", "isDraggable", "isSelected", "cdkDragDisabled", "cdkDragStarted", "cdkDragEnded", 4, "ngIf"], ["class", "center-indicator", 4, "ngIf"], ["class", "disabled-spot", 4, "ngIf"], ["cdkDrag", "", 3, "word", "isDraggable", "isSelected", "cdkDragDisabled", "cdkDragStarted", "cdkDragEnded"], [1, "center-indicator"], [1, "arrow"], [1, "category-label", 3, "appFitText", "fitTextWrap"], [1, "disabled-spot"], [1, "bank-tile-wrapper", 3, "click"], [3, "mistakes", "puzzleId", "playAgain", "nextPuzzle"], [1, "coming-soon"], [1, "help-modal-backdrop", 3, "click"], [1, "help-modal", 3, "click"], [1, "help-modal-header"], ["type", "button", "aria-label", "Close help", 1, "close-button", 3, "click"]], template: function GameBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GameBoardComponent_div_1_Template, 6, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GameBoardComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GameBoardComponent_div_3_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, GameBoardComponent_div_4_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, GameBoardComponent_div_5_Template, 20, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__.CdkDrag, _game_tile_game_tile_component__WEBPACK_IMPORTED_MODULE_1__.GameTileComponent, _win_modal_win_modal_component__WEBPACK_IMPORTED_MODULE_2__.WinModalComponent, _directives_fit_text_directive__WEBPACK_IMPORTED_MODULE_3__.FitTextDirective], styles: ["@keyframes bounce {\n  0% {\n    transform: scale(1);\n  }\n  40% {\n    transform: scale(1.1);\n  }\n  70% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  15% {\n    transform: translateX(-4px);\n  }\n  30% {\n    transform: translateX(4px);\n  }\n  45% {\n    transform: translateX(-4px);\n  }\n  60% {\n    transform: translateX(4px);\n  }\n  75% {\n    transform: translateX(-2px);\n  }\n  90% {\n    transform: translateX(2px);\n  }\n}\n@keyframes pulse-border {\n  0%, 100% {\n    border-color: rgba(33, 150, 243, 0.3);\n  }\n  50% {\n    border-color: rgba(33, 150, 243, 0.7);\n  }\n}\n.game-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0 0.75rem 0.5rem;\n  width: 100%;\n  max-height: 100%;\n}\n.puzzle-info[_ngcontent-%COMP%] {\n  width: min(92vw, 400px);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.puzzle-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #333;\n  margin: 0;\n  font-size: clamp(0.98rem, 2.4vw, 1.2rem);\n}\n.puzzle-info[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.puzzle-info[_ngcontent-%COMP%]   .help-button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 1px solid #b0bec5;\n  background-color: #fff;\n  color: #455a64;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.loading[_ngcontent-%COMP%], .error[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  font-size: 1.2rem;\n}\n.error[_ngcontent-%COMP%] {\n  color: #f44336;\n  background-color: #ffebee;\n  border-radius: 4px;\n}\n.game-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.45rem;\n  width: 100%;\n}\n.coming-soon[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 1.5rem;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n  border: 1px solid #e9ecef;\n  width: 100%;\n  max-width: 400px;\n}\n.coming-soon[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin: 0 0 0.75rem;\n  font-size: 1.8rem;\n}\n.coming-soon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 1rem;\n  line-height: 1.5;\n  margin: 0;\n}\n.game-board[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  gap: clamp(4px, 1.5vw, 8px);\n  width: min(90vw, 400px, 100dvh - 285px);\n  aspect-ratio: 1;\n  border: 2px solid #333;\n  border-radius: 8px;\n  padding: clamp(4px, 1.5vw, 8px);\n  background-color: #f5f5f5;\n}\n.grid-cell[_ngcontent-%COMP%] {\n  border: 2px dashed #ccc;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  aspect-ratio: 1;\n  overflow: hidden;\n  transition: all 0.2s ease;\n  touch-action: none;\n}\n.grid-cell.occupied[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-color: #4CAF50;\n  background-color: #e8f5e8;\n}\n.grid-cell.completed[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-color: #888 !important;\n  background-color: #e0e0e0 !important;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.grid-cell.completed[data-difficulty=\"1\"][_ngcontent-%COMP%] {\n  border-color: #F9A825 !important;\n  background-color: #FFF9C4 !important;\n  box-shadow: 0 0 10px rgba(249, 168, 37, 0.3);\n}\n.grid-cell.completed[data-difficulty=\"2\"][_ngcontent-%COMP%] {\n  border-color: #2E7D32 !important;\n  background-color: #C8E6C9 !important;\n  box-shadow: 0 0 10px rgba(76, 175, 80, 0.3);\n}\n.grid-cell.completed[data-difficulty=\"3\"][_ngcontent-%COMP%] {\n  border-color: #1565C0 !important;\n  background-color: #BBDEFB !important;\n  box-shadow: 0 0 10px rgba(21, 101, 192, 0.3);\n}\n.grid-cell.completed[data-difficulty=\"4\"][_ngcontent-%COMP%] {\n  border-color: #6A1B9A !important;\n  background-color: #E1BEE7 !important;\n  box-shadow: 0 0 10px rgba(106, 27, 154, 0.3);\n}\n.grid-cell.corner-locked[_ngcontent-%COMP%]   app-game-tile[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.grid-cell.disabled[_ngcontent-%COMP%] {\n  border: 2px solid #666;\n  background-color: #333;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .disabled-spot[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #444;\n  border-radius: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .disabled-spot[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 20%;\n  height: 20%;\n  background-color: #666;\n  border-radius: 50%;\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #666;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: bold;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);\n  border: 2px solid #888;\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[data-difficulty=\"1\"][_ngcontent-%COMP%] {\n  background-color: #F9A825;\n  border-color: #F57F17;\n  box-shadow: 0 0 15px rgba(249, 168, 37, 0.5);\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[data-difficulty=\"2\"][_ngcontent-%COMP%] {\n  background-color: #2E7D32;\n  border-color: #4CAF50;\n  box-shadow: 0 0 15px rgba(76, 175, 80, 0.5);\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[data-difficulty=\"3\"][_ngcontent-%COMP%] {\n  background-color: #1565C0;\n  border-color: #42A5F5;\n  box-shadow: 0 0 15px rgba(21, 101, 192, 0.5);\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[data-difficulty=\"4\"][_ngcontent-%COMP%] {\n  background-color: #6A1B9A;\n  border-color: #AB47BC;\n  box-shadow: 0 0 15px rgba(106, 27, 154, 0.5);\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  font-size: clamp(0.9rem, 3vw, 1.5rem);\n  margin-bottom: 2px;\n  line-height: 1;\n}\n.grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[_ngcontent-%COMP%]   .category-label[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 1.2;\n  max-width: 90%;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  overflow-wrap: break-word;\n}\n.grid-cell.drop-target[_ngcontent-%COMP%] {\n  border-color: rgba(33, 150, 243, 0.4);\n  background-color: rgba(227, 242, 253, 0.5);\n  animation: pulse-border 1.5s ease-in-out infinite;\n}\n.grid-cell.selected[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-color: #FF9800;\n  background-color: #fff3e0;\n  box-shadow: 0 0 8px rgba(255, 152, 0, 0.4);\n}\n.grid-cell.bounce[_ngcontent-%COMP%] {\n  animation: bounce 0.3s ease;\n}\n.grid-cell.shake[_ngcontent-%COMP%] {\n  animation: shake 0.4s ease;\n  border-color: #f44336 !important;\n  background-color: #ffebee !important;\n}\n.grid-cell.cdk-drop-list-dragging[_ngcontent-%COMP%]:not(.disabled) {\n  border-color: #2196F3;\n  background-color: #e3f2fd;\n}\n.grid-cell.cdk-drop-list-receiving[_ngcontent-%COMP%]:not(.disabled) {\n  border-color: #FF9800;\n  background-color: #fff3e0;\n}\n.tile-bank[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n.tile-bank[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  color: #333;\n  font-size: clamp(0.9rem, 2.5vw, 1.1rem);\n}\n.bank-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: clamp(4px, 1.5vw, 8px);\n  padding: clamp(4px, 1.5vw, 8px);\n  border: 2px solid #ddd;\n  border-radius: 8px;\n  background-color: #fafafa;\n  width: min(90vw, 400px);\n  margin: 0 auto;\n}\n.bank-tile-wrapper[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  border-radius: 6px;\n  transition: box-shadow 0.15s ease;\n}\n.bank-tile-wrapper.selected[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 3px #FF9800;\n  border-radius: 8px;\n}\n.help-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  z-index: 1100;\n}\n.help-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  width: min(92vw, 520px);\n  border-radius: 10px;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.28);\n  padding: 0.9rem 1rem 1rem;\n}\n.help-modal[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 1.05rem;\n  color: #37474f;\n  font-size: 0.9rem;\n  line-height: 1.45;\n}\n.help-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.6rem;\n}\n.help-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  color: #1f2a30;\n}\n.close-button[_ngcontent-%COMP%] {\n  border: 1px solid #cfd8dc;\n  background: #fff;\n  color: #607d8b;\n  border-radius: 6px;\n  width: 28px;\n  height: 28px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n@media (max-width: 768px) {\n  .puzzle-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .puzzle-info[_ngcontent-%COMP%]   .help-button[_ngcontent-%COMP%] {\n    width: 34px;\n    height: 34px;\n    font-size: 1.05rem;\n  }\n  .grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .grid-cell.disabled[_ngcontent-%COMP%]   .center-indicator[_ngcontent-%COMP%]   .category-label[_ngcontent-%COMP%] {\n    line-height: 1.2;\n  }\n  .tile-bank[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .game-board[_ngcontent-%COMP%] {\n    width: min(91vw, 100dvh - 245px);\n  }\n  .help-modal[_ngcontent-%COMP%] {\n    width: 92vw;\n  }\n  .help-modal[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    line-height: 1.5;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRTtJQUFPLG1CQUFBO0VBSFA7RUFJQTtJQUFPLHFCQUFBO0VBRFA7RUFFQTtJQUFPLHNCQUFBO0VBQ1A7RUFBQTtJQUFPLG1CQUFBO0VBR1A7QUFDRjtBQURBO0VBQ0U7SUFBVyx3QkFBQTtFQUlYO0VBSEE7SUFBVywyQkFBQTtFQU1YO0VBTEE7SUFBVywwQkFBQTtFQVFYO0VBUEE7SUFBVywyQkFBQTtFQVVYO0VBVEE7SUFBVywwQkFBQTtFQVlYO0VBWEE7SUFBVywyQkFBQTtFQWNYO0VBYkE7SUFBVywwQkFBQTtFQWdCWDtBQUNGO0FBZEE7RUFDRTtJQUFXLHFDQUFBO0VBaUJYO0VBaEJBO0lBQVcscUNBQUE7RUFtQlg7QUFDRjtBQWpCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBbUJGO0FBaEJBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQW1CRjtBQWpCRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7QUFtQko7QUFoQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFrQko7QUFmRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFpQko7QUFiQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBZ0JGO0FBYkE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQWdCRjtBQWJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWdCRjtBQWJBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkE3RlU7QUE2R1o7QUFkRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBZ0JKO0FBYkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQWVKO0FBWEE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsdUNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7QUFjRjtBQVhBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQWNGO0FBWkU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFjSjtBQVhFO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7QUFhSjtBQVZJO0VBQ0UsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDRDQUFBO0FBWU47QUFSSTtFQUNFLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQ0FBQTtBQVVOO0FBTkk7RUFDRSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7QUFRTjtBQUpJO0VBQ0UsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDRDQUFBO0FBTU47QUFESTtFQUNFLG9CQUFBO0FBR047QUFDRTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ047QUFDTTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7QUFETjtBQUdNO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRDQUFBO0FBRFI7QUFJTTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtBQUZSO0FBS007RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNENBQUE7QUFIUjtBQU1NO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRDQUFBO0FBSlI7QUFPTTtFQUNFLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBTFI7QUFRTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBTlI7QUFZRTtFQUNFLHFDQUFBO0VBQ0EsMENBQUE7RUFDQSxpREFBQTtBQVZKO0FBY0U7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtBQVpKO0FBZ0JFO0VBQ0UsMkJBQUE7QUFkSjtBQWtCRTtFQUNFLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtBQWhCSjtBQW1CRTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUFqQko7QUFvQkU7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0FBbEJKO0FBc0JBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBbkJGO0FBcUJFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7QUFuQko7QUF1QkE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBcEJGO0FBdUJBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUFwQkY7QUFzQkU7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0FBcEJKO0FBd0JBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFyQkY7QUF3QkE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0FBckJGO0FBdUJFO0VBQ0UsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFyQko7QUF5QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBdEJGO0FBd0JFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBdEJKO0FBMEJBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUF2QkY7QUEwQkE7RUFFSTtJQUNFLGtCQUFBO0VBeEJKO0VBMkJFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQXpCSjtFQThCRTtJQUNFLGlCQUFBO0VBNUJKO0VBK0JFO0lBQ0UsZ0JBQUE7RUE3Qko7RUFpQ0E7SUFDRSxrQkFBQTtFQS9CRjtFQWtDQTtJQUNFLGdDQUFBO0VBaENGO0VBbUNBO0lBQ0UsV0FBQTtFQWpDRjtFQW1DRTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7RUFqQ0o7QUFDRiIsImZpbGUiOiJnYW1lLWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQm9hcmQgc2l6aW5nOiBzY2FsZXMgd2l0aCB2aWV3cG9ydCwgY2FwcGVkIGF0IDQwMHB4XHJcbiRib2FyZC1tYXg6IDQwMHB4O1xyXG5cclxuLy8gLS0tIEFuaW1hdGlvbnMgLS0tXHJcblxyXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XHJcbiAgMCUgICB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cclxuICA0MCUgIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XHJcbiAgNzAlICB7IHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcclxuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxyXG4gIDE1JSAgICAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00cHgpOyB9XHJcbiAgMzAlICAgICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTsgfVxyXG4gIDQ1JSAgICAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00cHgpOyB9XHJcbiAgNjAlICAgICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTsgfVxyXG4gIDc1JSAgICAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpOyB9XHJcbiAgOTAlICAgICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNlLWJvcmRlciB7XHJcbiAgMCUsIDEwMCUgeyBib3JkZXItY29sb3I6IHJnYmEoMzMsIDE1MCwgMjQzLCAwLjMpOyB9XHJcbiAgNTAlICAgICAgeyBib3JkZXItY29sb3I6IHJnYmEoMzMsIDE1MCwgMjQzLCAwLjcpOyB9XHJcbn1cclxuXHJcbi5nYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC40NXJlbTtcbiAgcGFkZGluZzogMCAwLjc1cmVtIDAuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5wdXp6bGUtaW5mbyB7XG4gIHdpZHRoOiBtaW4oOTJ2dywgJGJvYXJkLW1heCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBoMiB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMC45OHJlbSwgMi40dncsIDEuMnJlbSk7XG4gIH1cblxuICAuaGVhZGVyLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5oZWxwLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjBiZWM1O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICM0NTVhNjQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cclxuLmxvYWRpbmcsIC5lcnJvciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgY29sb3I6ICNmNDQzMzY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5nYW1lLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNDVyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXHJcbi5jb21pbmctc29vbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAkYm9hcmQtbWF4O1xyXG5cclxuICBoMiB7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIG1hcmdpbjogMCAwIDAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmdhbWUtYm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xuICBnYXA6IGNsYW1wKDRweCwgMS41dncsIDhweCk7XG4gIHdpZHRoOiBtaW4oOTB2dywgJGJvYXJkLW1heCwgY2FsYygxMDBkdmggLSAyODVweCkpO1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogY2xhbXAoNHB4LCAxLjV2dywgOHB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4uZ3JpZC1jZWxsIHtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFzcGVjdC1yYXRpbzogMTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xyXG5cclxuICAmLm9jY3VwaWVkIHtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmNWU4O1xyXG4gIH1cclxuXHJcbiAgJi5jb21wbGV0ZWQge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzg4OCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuICAgIC8vIFllbGxvdyAtIGVhc2llc3RcclxuICAgICZbZGF0YS1kaWZmaWN1bHR5PVwiMVwiXSB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI0Y5QTgyNSAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOUM0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMjQ5LCAxNjgsIDM3LCAwLjMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdyZWVuXHJcbiAgICAmW2RhdGEtZGlmZmljdWx0eT1cIjJcIl0ge1xyXG4gICAgICBib3JkZXItY29sb3I6ICMyRTdEMzIgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0M4RTZDOSAhaW1wb3J0YW50O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJsdWVcclxuICAgICZbZGF0YS1kaWZmaWN1bHR5PVwiM1wiXSB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzE1NjVDMCAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJERUZCICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMjEsIDEwMSwgMTkyLCAwLjMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1cnBsZSAtIGhhcmRlc3RcclxuICAgICZbZGF0YS1kaWZmaWN1bHR5PVwiNFwiXSB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzZBMUI5QSAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFCRUU3ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMTA2LCAyNywgMTU0LCAwLjMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5jb3JuZXItbG9ja2VkIHtcclxuICAgIGFwcC1nYW1lLXRpbGUge1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZGlzYWJsZWQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzY2NjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcblxyXG4gICAgLmRpc2FibGVkLXNwb3Qge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNlbnRlci1pbmRpY2F0b3Ige1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM4ODg7XHJcblxyXG4gICAgICAmW2RhdGEtZGlmZmljdWx0eT1cIjFcIl0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUE4MjU7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjU3RjE3O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMjQ5LCAxNjgsIDM3LCAwLjUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmW2RhdGEtZGlmZmljdWx0eT1cIjJcIl0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyRTdEMzI7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoNzYsIDE3NSwgODAsIDAuNSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICZbZGF0YS1kaWZmaWN1bHR5PVwiM1wiXSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1NjVDMDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICM0MkE1RjU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgyMSwgMTAxLCAxOTIsIDAuNSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICZbZGF0YS1kaWZmaWN1bHR5PVwiNFwiXSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZBMUI5QTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNBQjQ3QkM7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgxMDYsIDI3LCAxNTQsIDAuNSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hcnJvdyB7XHJcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjlyZW0sIDN2dywgMS41cmVtKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXRlZ29yeS1sYWJlbCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gVmFsaWQgZHJvcCB0YXJnZXQgaGlnaGxpZ2h0IChlbXB0eSBjZWxscyB3aGlsZSBkcmFnZ2luZyBvciB0aWxlIHNlbGVjdGVkKVxyXG4gICYuZHJvcC10YXJnZXQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDMzLCAxNTAsIDI0MywgMC40KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyNDIsIDI1MywgMC41KTtcclxuICAgIGFuaW1hdGlvbjogcHVsc2UtYm9yZGVyIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICAvLyBTZWxlY3RlZCBjZWxsICh0YXAtdG8tcGxhY2UpXHJcbiAgJi5zZWxlY3RlZCB7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRkY5ODAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjNlMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgyNTUsIDE1MiwgMCwgMC40KTtcclxuICB9XHJcblxyXG4gIC8vIEJvdW5jZSBvbiBzdWNjZXNzZnVsIGRyb3BcclxuICAmLmJvdW5jZSB7XHJcbiAgICBhbmltYXRpb246IGJvdW5jZSAwLjNzIGVhc2U7XHJcbiAgfVxyXG5cclxuICAvLyBTaGFrZSBvbiBpbnZhbGlkIGxpbmVcclxuICAmLnNoYWtlIHtcclxuICAgIGFuaW1hdGlvbjogc2hha2UgMC40cyBlYXNlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmc6bm90KC5kaXNhYmxlZCkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjE5NkYzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcclxuICB9XHJcblxyXG4gICYuY2RrLWRyb3AtbGlzdC1yZWNlaXZpbmc6bm90KC5kaXNhYmxlZCkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRkY5ODAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjNlMDtcclxuICB9XHJcbn1cclxuXHJcbi50aWxlLWJhbmsge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuXHJcbiAgaDMge1xuICAgIG1hcmdpbjogMCAwIDAuMjVyZW07XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjlyZW0sIDIuNXZ3LCAxLjFyZW0pO1xuICB9XG59XG5cclxuLmJhbmstY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgZ2FwOiBjbGFtcCg0cHgsIDEuNXZ3LCA4cHgpO1xyXG4gIHBhZGRpbmc6IGNsYW1wKDRweCwgMS41dncsIDhweCk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICB3aWR0aDogbWluKDkwdncsICRib2FyZC1tYXgpO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYmFuay10aWxlLXdyYXBwZXIge1xuICBhc3BlY3QtcmF0aW86IDE7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNXMgZWFzZTtcclxuXHJcbiAgJi5zZWxlY3RlZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggI0ZGOTgwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XG59XG5cbi5oZWxwLW1vZGFsLWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU1KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHotaW5kZXg6IDExMDA7XG59XG5cbi5oZWxwLW1vZGFsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IG1pbig5MnZ3LCA1MjBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMTJweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gIHBhZGRpbmc6IDAuOXJlbSAxcmVtIDFyZW07XG5cbiAgdWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMDVyZW07XG4gICAgY29sb3I6ICMzNzQ3NGY7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gIH1cbn1cblxuLmhlbHAtbW9kYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6ICMxZjJhMzA7XG4gIH1cbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmQ4ZGM7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjNjA3ZDhiO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHV6emxlLWluZm8ge1xuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICB9XG5cbiAgICAuaGVscC1idXR0b24ge1xuICAgICAgd2lkdGg6IDM0cHg7XG4gICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICBmb250LXNpemU6IDEuMDVyZW07XG4gICAgfVxuICB9XG5cbiAgLmdyaWQtY2VsbC5kaXNhYmxlZCAuY2VudGVyLWluZGljYXRvciB7XG4gICAgLmFycm93IHtcclxuICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5LWxhYmVsIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50aWxlLWJhbmsgaDMge1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgfVxuXG4gIC5nYW1lLWJvYXJkIHtcbiAgICB3aWR0aDogbWluKDkxdncsIGNhbGMoMTAwZHZoIC0gMjQ1cHgpKTtcbiAgfVxuXG4gIC5oZWxwLW1vZGFsIHtcbiAgICB3aWR0aDogOTJ2dztcblxuICAgIHVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


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
    } }, dependencies: [_directives_fit_text_directive__WEBPACK_IMPORTED_MODULE_0__.FitTextDirective], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.tile[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  transition: all 0.2s ease;\n  cursor: default;\n  touch-action: none;\n}\n\n.tile.draggable[_ngcontent-%COMP%] {\n  cursor: grab;\n}\n\n.tile.draggable[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);\n}\n\n.tile.draggable[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n\n.tile.selected[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 3px #FF9800, 0 2px 8px rgba(0, 0, 0, 0.15);\n  transform: scale(1.05);\n}\n\n.tile[_ngcontent-%COMP%]   .word[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  line-height: 1.2;\n  padding: 2px;\n  white-space: nowrap;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 6px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  transform: rotate(5deg);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  background: #ccc;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n@media (max-width: 768px) {\n  .tile[_ngcontent-%COMP%]   .word[_ngcontent-%COMP%] {\n    line-height: 1.15;\n    padding: 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtdGlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw2REFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxZQUFBO0FBQ0o7O0FBQ0k7RUFDRSwyQkFBQTtFQUNBLDBDQUFBO0FBQ047O0FBRUk7RUFDRSxnQkFBQTtBQUFOOztBQUlFO0VBQ0UsNERBQUE7RUFDQSxzQkFBQTtBQUZKOztBQUtFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBT0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtBQUpGOztBQU9BO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxzREFBQTtBQUpGOztBQU9BO0VBRUk7SUFDRSxpQkFBQTtJQUNBLFlBQUE7RUFMSjtBQUNGIiwiZmlsZSI6ImdhbWUtdGlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50aWxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcclxuXHJcbiAgJi5kcmFnZ2FibGUge1xyXG4gICAgY3Vyc29yOiBncmFiO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIH1cclxuXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnNlbGVjdGVkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCAjRkY5ODAwLCAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgfVxyXG5cclxuICAud29yZCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRpbGUge1xyXG4gICAgLndvcmQge1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8798);



class GameService {
    constructor(http) {
        this.http = http;
    }
    loadPuzzles() {
        return this.http.get('assets/puzzles.json');
    }
    getPuzzleById(id) {
        return this.loadPuzzles().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(data => data.puzzles.find(puzzle => puzzle.id === id) || null));
    }
    getAvailablePuzzles() {
        return this.loadPuzzles().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(data => data.puzzles));
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
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
GameService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });


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