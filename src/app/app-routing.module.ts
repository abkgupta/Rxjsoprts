import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { RxjspracComponent } from './rxjsprac/rxjsprac.component';

const routes: Routes = [
 {
  path: 'search',
  component: SearchComponent
 },
 {
  path: 'rxjsprac',
  component: RxjspracComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
