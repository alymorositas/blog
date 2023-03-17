import { BlogService } from './../blog.service';
import { Post } from './../blog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private blogService: BlogService) {
    // chiedo il servizio
  }
  ngOnInit(): void {
    this.posts = this.blogService.getPosts();
  }
}
