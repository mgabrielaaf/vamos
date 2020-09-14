import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjComponent } from './components/proj/proj.component';
import { MenuPageLayoutComponent } from './menu-page-layout/menu-page-layout.component';

const routes: Routes = [
{
  path:'',
  component: MenuPageLayoutComponent,
  children:[
    {
      path:'',
      component: ProjComponent,
    }
  ]

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
