import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Thought } from './thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ThoughtService {
  private readonly API = "http://localhost:3000/pensamentos";

  constructor(private http : HttpClient) { }

  list() : Observable<Thought[]> {
    return this.http.get<Thought[]>(this.API);
  }

  create(thought : Thought) : Observable<Thought> {
    return this.http.post<Thought>(this.API, thought);
  }

  delete(id : number) : Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Thought>(url);
  }

  getById(id : number) : Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.get<Thought>(url);
  }

  edit(thought : Thought) : Observable<Thought> {
    const url = `${this.API}/${thought.id}`;
    return this.http.put<Thought>(url, thought);
  }
}
