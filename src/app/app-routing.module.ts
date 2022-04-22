import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokeCatagoriesComponent } from './joke-catagories/joke-catagories.component';
import { JokeCatagoryComponent } from './joke-catagory/joke-catagory.component';
import { SubmitJokeComponent } from './submit-joke/submit-joke.component';

const routes: Routes = [
  { path: 'catagories-list', component: JokeCatagoriesComponent },
  { path: 'catagory/:Catagory', component: JokeCatagoryComponent  },
  { path: 'submit', component: SubmitJokeComponent  },
  { path: '', redirectTo: '/catagories-list', pathMatch: 'full' },
  { path: '**', component: JokeCatagoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
