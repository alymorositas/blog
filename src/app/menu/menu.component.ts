import { BlogService } from './../blog.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../blog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private blogService: BlogService) {}

  @Output()
  onPageChanged = new EventEmitter<string>();

  categories?: Category[] = this.blogService.getCategory();

  filterCat(id: string) {
    this.blogService.createArray(id);
    this.onPageChanged.emit(id);
    document.getElementsByClassName("button");
  }

  getPosts() {
    this.onPageChanged.emit('tutti');
  }

  ngOnInit(): void {}
}
