import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <div>
      <label>Name:</label>
      <input [(ngModel)]="name" placeholder="Name">
    </div>
  `,
})
export class AppComponent  { name = 'Angular'; }