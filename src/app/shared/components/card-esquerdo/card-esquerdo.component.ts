import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-esquerdo',
  templateUrl: './card-esquerdo.component.html',
  styleUrls: ['./card-esquerdo.component.scss']
})
export class CardEsquerdoComponent implements OnInit {

  @Input() nome = "";
  @Input()foto = "";
  @Input() seguidores = "";
  constructor() { }

  ngOnInit(): void {
  }

}
