import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {
  listThoughts : Thought[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
