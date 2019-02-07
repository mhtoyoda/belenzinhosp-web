import { Component, OnInit } from '@angular/core';
import { Banner } from './banner';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-banner',
  styleUrls: ['./banner.component.css'],
  template: `
                <a [href]="banner.link" target="_blank" *ngFor="let banner of banners">
                  <img class="img-fluid d-block img-thumbnail" [src]="banner.url" [alt]="banner.description">
                </a>
              `
})

export class BannerComponent implements OnInit {

  banners: Banner[] = [];

  constructor(private http: HttpService) {
    this.http.get('http://18.228.163.212:8080/api/banner/left').subscribe(resposta => {
      resposta.forEach(banner => {
        // tslint:disable-next-line:no-unused-expression
        this.banners.push(new Banner(banner.imagem, banner.clienteBanner, banner.link));
      });
    }
    );
  }

  ngOnInit() {
  }
}
