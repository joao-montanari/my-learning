import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css']
})

export class CreateThoughtsComponent implements OnInit {

  thought : Thought = {
    conteudo : "",
    autoria : "",
    modelo : "modelo1",
  }

  constructor(
    private service : ThoughtService,
    private router : Router
  ) { }

  ngOnInit(): void { }

  createThought() {
    this.service.create(this.thought).subscribe(() => {
      this.router.navigate(["/list-thoughts"]);
    });
  }

  cancelThought() {
    this.router.navigate(["/list-thoughts"]);
  }

}
