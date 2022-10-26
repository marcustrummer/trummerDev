import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetupComponent } from './setup/setup.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { DesktopComponent } from './desktop/desktop.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReminderComponent } from './reminder/reminder.component';

@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    FooterComponent,
    MenuComponent,
    AboutComponent,
    DesktopComponent,
    ProjectsComponent,
    ReminderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
