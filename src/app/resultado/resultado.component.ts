import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpService } from '../service/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  itens: any[] = [];
  currentPage = 1;
  itemsPerPage = 8;
  pageSize: number;
  type: string;
  term: string;
  mensagem = '';

  constructor(private http: HttpService, private route: ActivatedRoute, private ref: ChangeDetectorRef, private router: Router) {
    this.route.params.subscribe(params => {
      this.type = params.type;
      this.term = params.term;
      // tslint:disable-next-line:max-line-length
      this.http.get('http://18.228.163.212:8080/api/search?type=' + this.type + '&term=' + this.term).subscribe(resposta => {
       this.mensagem = '';
       this.itens = resposta;
       if (this.itens.length <= 0) {
         this.mensagem = 'Não existem registros para a consulta';
       }
      });
    });
  }

  ngOnInit() {
  }

  onPageChange = (pageNum: number) => {
    this.pageSize = this.itemsPerPage * (pageNum - 1);
  }

  changePagesize = (num: number) => {
    this.itemsPerPage = this.pageSize + num;
  }
}
