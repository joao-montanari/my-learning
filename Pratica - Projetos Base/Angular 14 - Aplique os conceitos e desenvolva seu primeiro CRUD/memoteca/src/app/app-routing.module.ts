import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thoughts.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "list-thoughts",
    pathMatch: "full",
  },
  {
    path: "list-thoughts",
    component: ListThoughtsComponent,
  },
  {
    path: "create-thought",
    component: CreateThoughtsComponent,
  },
  {
    path: "thoughts/delete-thought/:id",
    component: DeleteThoughtComponent,
  },
  {
    path: "thoughts/edit-thought/:id",
    component: EditThoughtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
