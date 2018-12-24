import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-main',
  template: `
              <img class="d-block img-fluid img-thumbnail mx-auto" [src]="url" [alt]= "description">
            `,
  styleUrls: ['./banner-main.component.css']
})
export class BannerMainComponent implements OnInit {

  url = 'assets/img/banner_direita.jpg';
  description = 'Banner Direita';
  constructor() { }

  ngOnInit() {
  }

}
