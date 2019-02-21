import { Component, OnInit } from '@angular/core';
import { Banner } from '../banner/banner';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-banner-main',
  template: `
              <a [href]="banner.link" target="{{getTarget(banner.target)}}" *ngFor="let banner of banners">
                  <img class="img-fluid d-block img-thumbnail" [src]="banner.url" [alt]="banner.description">
              </a>
            `,
  styleUrls: ['./banner-main.component.css']
})
export class BannerMainComponent implements OnInit {

  banners: Banner[] = [];

  constructor(private http: HttpService) {
    this.http.get('http://18.228.163.212:8080/api/banner/right').subscribe(resposta => {
      resposta.forEach(banner => {
        // tslint:disable-next-line:no-unused-expression
        this.banners.push(new Banner(banner.imagem, banner.clienteBanner, banner.link, banner.sourceBanner));
      });
    }
    );
  }

  getTarget(target: string): string {
    return target === 'externo' ? '_blank' : '_self';
  }

  ngOnInit() {
  }

}
