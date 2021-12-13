import { PostService } from './../../services/post.service';
import { FollowService } from './../../services/follow.service';
import { TokenStorageService } from './../../services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  posts!: Post[];
  currentUser : any;
  constructor(private tokenService : TokenStorageService,
              private followService : FollowService,
              private postService : PostService) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe(
      respose => this.posts = respose
    )
    this.currentUser = this.tokenService.getUser();
    console.log(this.currentUser.login['name']);

  }



}
