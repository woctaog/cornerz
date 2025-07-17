import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { GameTileComponent } from './components/game-tile/game-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GameTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
