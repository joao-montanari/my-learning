import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {
  listThoughts : Thought[] = [];

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.service.list().subscribe((thoughts) => {
      this.listThoughts = thoughts;
    });
  }

}
