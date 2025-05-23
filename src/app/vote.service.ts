import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  private apiUrl = 'http://localhost:3000/api/vote'; // Backend URL

  constructor(private http: HttpClient) {}

  submitVote(subjectId: number, subjectName: string) {
    return this.http.post(this.apiUrl, { subjectId, subjectName });
  }
}
