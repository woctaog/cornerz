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

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GameTileComponent,
    WinModalComponent,
    FitTextDirective,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
