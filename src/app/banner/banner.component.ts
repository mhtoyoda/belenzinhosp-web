import { Component, OnInit, Injectable } from '@angular/core';
import { Banner } from './banner';

@Component({
  selector: 'app-banner',
  styleUrls: ['./banner.component.css'],
  template : `
                <a href="#" *ngFor="let banner of banners">
                  <img class="img-fluid d-block img-thumbnail" [src]="banner.url" [alt]="banner.description">
                </a>
              `
})

export class BannerComponent implements OnInit {

  banners: Banner[] = [
    new Banner('assets/img/arte_bann.jpg', 'Arte'),
    new Banner('assets/img/destaque_cadastro.jpg', 'Destaque'),
    new Banner('assets/img/geolocalizadas.jpg', 'Geolocalizadas')
  ];

  constructor() {}

  ngOnInit() {
  }

}
