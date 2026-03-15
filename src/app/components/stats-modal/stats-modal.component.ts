import { Component, Output, EventEmitter } from '@angular/core';
import { StatsProvider } from '../../services/stats-provider';
import { PlayerStats } from '../../models/stats.model';

interface DistributionRow {
  mistakes: number;
  count: number;
  barPct: number;
}

@Component({
  selector: 'app-stats-modal',
  templateUrl: './stats-modal.component.html',
  styleUrls: ['./stats-modal.component.scss']
})
export class StatsModalComponent {
  @Output() close = new EventEmitter<void>();

  readonly stats: PlayerStats;
  readonly distributionRows: DistributionRow[];

  constructor(statsProvider: StatsProvider) {
    this.stats = statsProvider.getAggregate();
    const dist = this.stats.mistakeDistribution;
    const maxCount = Math.max(...Object.values(dist), 1);
    this.distributionRows = Object.entries(dist)
      .map(([k, v]) => ({ mistakes: Number(k), count: v, barPct: (v / maxCount) * 100 }))
      .sort((a, b) => a.mistakes - b.mistakes);
  }

  get avgMistakesDisplay(): string {
    return this.stats.averageMistakes.toFixed(1);
  }
}
