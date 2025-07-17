import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.scss']
})
export class GameTileComponent {
  @Input() word: string = '';
  @Input() isDraggable: boolean = true;
}
