import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css']
})

export class CreateThoughtsComponent implements OnInit {

  thought : Thought = {
    id : 1,
    conteudo : "Aprendendo Angular",
    autoria : "Dev",
    modelo : "modelo1",
  }

  constructor() { }

  ngOnInit(): void {
  }

  createThought() {
    alert("SALVAR");
  }

  cancelThought() {
    alert("CANCELAR");
  }

}
