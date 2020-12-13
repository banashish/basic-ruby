import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResolveMovieService } from './resolve-movie.service';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'view/:id',
    component: ViewComponent,
    resolve: {data : ResolveMovieService}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
