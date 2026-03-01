import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { LibraryComponent } from './components/library/library.component';
import { SubmitPuzzleComponent } from './components/submit-puzzle/submit-puzzle.component';

const routes: Routes = [
  { path: 'test-page', component: GameBoardComponent, data: { testMode: true } },
  { path: 'test-page2', component: GameBoardComponent, data: { testMode2: true } },
  { path: 'library', component: LibraryComponent },
  { path: 'submit', component: SubmitPuzzleComponent },
  { path: '', component: GameBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
