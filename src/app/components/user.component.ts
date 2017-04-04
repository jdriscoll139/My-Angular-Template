import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1> Hello {{name}} </h1>
  <p> Email: {{email}} </p>
  <p> Address: </p>
  <p> {{address.street}} </p>
  <p> {{address.city}}, {{address.state}} </p> 
  <button (click)='toggleHobbies()'>{{showHobbies ? 'Hide Hobbies' : 'Show Hobbies'}}</button><br /><br />
  <div *ngIf='showHobbies'>
  <h3> Hobbies </h3>
    <ul>
        <li *ngFor='let hobby of hobbies'>{{hobby}}</li>
    </ul>
  </div>
  <form>
    <label>Name: </label>
    <input type='text' name='name' [(ngModel)]='name'/><br /><br />
    <label>Email: </label>
    <input type='text' name='email' [(ngModel)]='email'/><br /><br />
    <label>Address Line 1: </label>
    <input type='text' name='address.street' [(ngModel)]='address.street'/><br /><br />
    <label>City: </label>
    <input type='text' name='address.city' [(ngModel)]='address.city'/><br /><br />
    <label>State: </label>
    <input type='text' name='address.state' [(ngModel)]='address.state'/><br /><br />
  </form>
  `,
})
export class UserComponent  { 
  name: String; 
  email: String;
  address: address;
  hobbies: String[];
  showHobbies: boolean;

  constructor() {
    this.name = 'John Doe'; 
    this.email = 'john@gmail.com';
    this.address = {
        street: '12 Main St',
        city: 'Boston',
        state: 'MA'
    }
    this.hobbies = [
        'Music',
        'Movies',
        'Coding!'
    ]
    this.showHobbies = false;
  }

  toggleHobbies() {
      this.showHobbies = !this.showHobbies;
  }
}

interface address {
    street: String;
    city: String;
    state: String;
}