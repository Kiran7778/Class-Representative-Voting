import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title(title: any) {
  throw new Error('Method not implemented.');
}
submitVote() {
throw new Error('Method not implemented.');
}
selectedElective: any;
}
