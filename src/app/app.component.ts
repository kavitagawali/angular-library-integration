import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Books';
  subTitle = '';
  src = `./assets/images/books.jpg`;
  imageHeight = `200px`;
}
