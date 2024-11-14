import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thoughts.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
