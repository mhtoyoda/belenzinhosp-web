import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Noticia } from './noticia';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  noticias: Noticia[] = [];

  constructor(private http: HttpService) {
    this.http.get('http://localhost:8080/api/noticias').subscribe(resposta => {
      this.noticias = resposta;
    }
    );
  }

  ngOnInit() { }

}
