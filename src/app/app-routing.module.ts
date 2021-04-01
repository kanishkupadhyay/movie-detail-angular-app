import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './site-layout/home/home.component';
import{MovieDetailsComponent} from  './movie/movie-details/movie-details.component'
import { ExactMovieComponent } from './movie/exact-movie/exact-movie.component';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'search-movies',component:MovieDetailsComponent},
  {path:'exact-movie/:Title',component:ExactMovieComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
