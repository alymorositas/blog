import { Favorite } from './../blog';
import { Component } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent {
  constructor(public blogService: BlogService) {}

  delFavList() {
    this.blogService.svuotaFav();
  }

  delFav(post: Favorite) {
    this.blogService.cancelFav(post);
  }

  arrayFav = this.blogService.favorites;
}
