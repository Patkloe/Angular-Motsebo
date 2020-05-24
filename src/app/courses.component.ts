import { Component } from '@angular/core'; // pour tout component on doit importer ce component decorateur de Angular 
import { Courseservice } from './courses.service';
@Component({
  selector: 'courses',
  template:`
  <h2>{{title}}</h2>
  <ul>
  <li *ngFor="let course of courses">
  {{course}}
  </li>
  </ul>
  `
  
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class CoursesComponent {
   title = "Courses/ To learn/ A apprendre";
   courses;
   constructor(service: Courseservice){
     //let service = new Courseservice();
     this.courses = service.getCourses();
   }
  }
