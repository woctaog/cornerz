import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { LibraryComponent } from './components/library/library.component';

const routes: Routes = [
  { path: 'test-page', component: GameBoardComponent, data: { testMode: true } },
  { path: 'library', component: LibraryComponent },
  { path: '', component: GameBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
