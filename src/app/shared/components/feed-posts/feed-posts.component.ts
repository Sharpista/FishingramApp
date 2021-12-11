import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed-posts',
  templateUrl: './feed-posts.component.html',
  styleUrls: ['./feed-posts.component.scss']
})
export class FeedPostsComponent implements OnInit {

  constructor() { }

  @Input() dataDePublicacao = ""
  @Input() foto = ""
  @Input() titulo = ""
  @Input() descricao = ""

  ngOnInit(): void {
  }

}
