/*import { Component } from '@angular/core'; // pour tout component on doit importer ce component decorateur de Angular 
@Component({
  selector: 'courses',
  template:`
  <h2>{{title}}</h2>
  <ul>
  <li *ngFor="let course of courses">
  {{course}}
  </li>
  </ul>
  `*/
  
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
//})
export class Courseservice {
    getCourses(){
   //title = "Courses";
  // courses = ;
   return ["What is Angular","Angular Concept","Angular Architecture","Angular Structure","TypeScript","Web Component"];
  }
}
