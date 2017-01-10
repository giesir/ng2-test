import { Component } from '@angular/core';

const TESTS: { id: number, name: string }[] = [
  { id: 11, name: 'Test 11' },
  { id: 12, name: 'Test 12' },
  { id: 13, name: 'Test 13' },
  { id: 14, name: 'Test 14' },
  { id: 15, name: 'Test 15' },
  { id: 16, name: 'Test 16' },
  { id: 17, name: 'Test 17' },
  { id: 18, name: 'Test 18' },
  { id: 19, name: 'Test 19' },
  { id: 20, name: 'Test 20' }
];

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <div>
      <label>Name:</label>
      <input [(ngModel)]="name" placeholder="Name">
    </div>
    <div>
      <ul>
        <li *ngFor="let test of TESTS">
          <span>{{test.id}}</span> {{test.name}}
        </li>
      </ul>
    </div>
  `,
})

export class AppComponent  { 
  name = 'Angular';
  TESTS = TESTS;
}