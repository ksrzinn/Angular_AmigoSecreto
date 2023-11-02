import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.css']
})
export class InputCardComponent implements OnInit {
  nome: string = '';
  email: string = '';

  cadastrar(){
    console.log(this.nome);
    console.log(this.email);

    this.nome = '';
    this.email = '';

  }

  constructor() { }

  ngOnInit(): void {
  }

}
