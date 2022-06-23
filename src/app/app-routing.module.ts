import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetupComponent } from './setup/setup.component';

const routes: Routes = [

  {path:'', redirectTo: 'setup', pathMatch:  'full'},
  {path: 'setup', component: SetupComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
