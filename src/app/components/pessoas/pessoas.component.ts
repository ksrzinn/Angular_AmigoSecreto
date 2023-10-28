import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {


  @Input()
  nome:string = ''
  @Input()
  email:string = ''


  constructor() { }

  ngOnInit(): void {
  }

}
