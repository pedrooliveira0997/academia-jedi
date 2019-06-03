import { Component } from '@angular/core';

@Component({
  selector: 'jedi-root',
  template:
   `
   <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{titulo}}</a>
      <ul class='nav nav-pills'>
      <li><a class='nav-link' [routerLink]="['/bemvindo']">Home</a></li>
      <li><a class='nav-link' [routerLink]="['/estudantes']">Lista de Estudantes</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
    `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Academia Jedi';
}
