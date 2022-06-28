import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DesktopComponent } from './desktop/desktop.component';
import { ProjectsComponent } from './projects/projects.component';
import { SetupComponent } from './setup/setup.component';

const routes: Routes = [

  {path:'', redirectTo: 'dev', pathMatch:  'full'},
  {path: 'dev', component: SetupComponent},
  {path: 'about', component: AboutComponent},
  {path: 'setup', component: DesktopComponent},
  {path: 'projects', component:   ProjectsComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
