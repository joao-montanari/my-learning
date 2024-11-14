import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css']
})

export class CreateThoughtsComponent implements OnInit {

  thought = {
    id : "1",
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
