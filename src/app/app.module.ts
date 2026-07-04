import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { GameTileComponent } from './components/game-tile/game-tile.component';
import { WinModalComponent } from './components/win-modal/win-modal.component';
import { FitTextDirective } from './directives/fit-text.directive';
import { LibraryComponent } from './components/library/library.component';
import { SubmitPuzzleComponent } from './components/submit-puzzle/submit-puzzle.component';
import { StatsModalComponent } from './components/stats-modal/stats-modal.component';
import { StatsPageComponent } from './components/stats-page/stats-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PuzzleProvider } from './services/puzzle-provider';
import { StaticPuzzleProvider } from './services/static-puzzle-provider';
import { StatsProvider } from './services/stats-provider';
import { LocalStatsProvider } from './services/local-stats-provider';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GameTileComponent,
    WinModalComponent,
    FitTextDirective,
    LibraryComponent,
    SubmitPuzzleComponent,
    StatsModalComponent,
    StatsPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: PuzzleProvider, useClass: StaticPuzzleProvider },
    { provide: StatsProvider, useClass: LocalStatsProvider }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
