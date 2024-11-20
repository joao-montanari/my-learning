import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css']
})
export class DeleteThoughtComponent implements OnInit {

  thought : Thought = {
    id: undefined,
    autoria: "",
    conteudo: "",
    modelo: "",
  }

  constructor(
    private service : ThoughtService,
    private router: Router,
    private route : ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.service.getById(id).subscribe((thoughtParam) => {
      this.thought = thoughtParam;
    });
  }

  deleteThought() {
    if(this.thought.id) {
      this.service.delete(this.thought.id).subscribe(() => {
        this.router.navigate(["/list-thoughts"]);
      });
    }
  }

  cancel() {
    this.router.navigate(["/list-thoughts"]);
  }
}
