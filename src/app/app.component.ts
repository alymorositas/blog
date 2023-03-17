import { BlogService } from './blog.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public blogService: BlogService) {}
  paginaSelezionata = 'tutti';

  mostraPagina(id: string) {
    this.paginaSelezionata = id;
  }
}
