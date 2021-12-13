import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-albums-cards',
  templateUrl: './photo-albums-cards.component.html',
  styleUrls: ['./photo-albums-cards.component.scss']
})
export class PhotoAlbumsCardsComponent implements OnInit {

  @Input() descricao = "";
  @Input() data = "";
  @Input() foto = ""
  constructor() { }

  ngOnInit(): void {
  }

}
