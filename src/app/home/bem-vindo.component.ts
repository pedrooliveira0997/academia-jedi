import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jedi-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.css']
})
export class BemVindoComponent implements OnInit {
  tituloBemVindo: string = 'Bem Vindo a Academia Jedi OWWWWWWWWW!!!';

  constructor() { }

  ngOnInit() {
  }

}
