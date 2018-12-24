import { Component, OnInit, Injectable } from '@angular/core';
import { Banner } from './banner';

@Component({
  selector: 'app-banner',
  styleUrls: ['./banner.component.css'],
  template : `
                <img *ngFor="let banner of banners" class="img-fluid d-block img-thumbnail" [src]="banner.url" [alt]="banner.description">
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
