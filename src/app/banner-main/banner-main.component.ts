import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-main',
  template: `
              <a href="#">
                <img class="d-block img-fluid img-thumbnail mx-auto" [src]="url" [alt]= "description">
              </a>
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
