import { Favorite } from './../blog';
import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  @Input()
  posts?: Post;

  constructor(private blogService: BlogService) {
  }
  ngOnInit(): void {}

  addFav(post: Post) {
    let p: Favorite = {
      id: post.id,
      title: post.title,
    };

    this.blogService.aggiungi(p);
  }
}
