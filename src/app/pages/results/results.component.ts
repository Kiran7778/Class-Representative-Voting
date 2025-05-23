import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultComponent {
  @Input() candidates: { id: number; name: string; votes: number }[] = [];

  get sortedCandidates() {
    return [...this.candidates].sort((a, b) => b.votes - a.votes);
  }

  getTopCandidateId(): number | null {
    if (!this.candidates.length) return null;
    const maxVotes = Math.max(...this.candidates.map(c => c.votes));
    const topCandidate = this.candidates.find(c => c.votes === maxVotes);
    return topCandidate?.id || null;
  }
}
