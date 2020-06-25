import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `,
})
export class CoursesComponent {
  title = 'List of courses';
  courses;
  // = ['course1', 'course2', 'course3'];
  // normally instead of hardcoding we should get those data form HTTP Endpoint - first problem: dependency from HTTP Endpoint - then its not reusable without repeating - component should include just presentation logic
  constructor(service: CoursesService) {
    // to make instance of our component
    this.courses = service.getCourses();
  }
}
