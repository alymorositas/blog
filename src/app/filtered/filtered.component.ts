import { Component, OnInit } from '@angular/core';
import { Post } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.css']
})
export class FilteredComponent implements OnInit {
  constructor(private blogService: BlogService) {
  }
  posts: Post[] = [];
  ngOnInit(): void {
    this.posts = this.blogService.arrayPosts;
  }
}
