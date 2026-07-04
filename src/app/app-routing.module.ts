import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { LibraryComponent } from './components/library/library.component';
import { SubmitPuzzleComponent } from './components/submit-puzzle/submit-puzzle.component';
import { StatsPageComponent } from './components/stats-page/stats-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'test-page', component: GameBoardComponent, data: { testMode: true } },
  { path: 'test-page2', component: GameBoardComponent, data: { testMode2: true } },
  { path: 'play/:id', component: GameBoardComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'stats', component: StatsPageComponent },
  { path: 'submit', component: SubmitPuzzleComponent },
  { path: '', component: GameBoardComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
