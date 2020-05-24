import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { Courseservice } from './courses.service';
import appRoutes from './routerConfig';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [
     Courseservice
],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
