import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryComponent } from './repository/repository.component';


const routes: Routes = [
  {path: 'repository',component:RepositoryComponent},
  {path: 'favorite',component: FavoriteComponent},
  {path: 'home',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
