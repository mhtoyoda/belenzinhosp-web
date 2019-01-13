import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  itens: any[] = [
    {
      nome: 'teste1',
      nomeFantasia: 'Pizzaria',
      endereco: 'Rua Paulista, 30',
      telefone: '11 - 90900201',
      horarioAbertura: '18:00',
      horarioFechamento: '23:59',
      url: 'www.uol.com.br'
    },
    {
      nome: 'teste2',
      nomeFantasia: 'Pizzaria',
      endereco: 'Rua Paulista, 30',
      telefone: '11 - 90900201',
      horarioAbertura: '18:00',
      horarioFechamento: '23:59',
      url: 'www.uol.com.br'
    },
    {
      nome: 'teste3',
      nomeFantasia: 'Pizzaria',
      endereco: 'Rua Paulista, 30',
      telefone: '11 - 90900201',
      horarioAbertura: '18:00',
      horarioFechamento: '23:59',
      url: 'www.uol.com.br'
    },
    {
      nome: 'teste4',
      nomeFantasia: 'Pizzaria',
      endereco: 'Rua Paulista, 30',
      telefone: '11 - 90900201',
      horarioAbertura: '18:00',
      horarioFechamento: '23:59',
      url: 'www.uol.com.br'
    },
    {
      nome: 'teste5',
      nomeFantasia: 'Pizzaria',
      endereco: 'Rua Paulista, 30',
      telefone: '11 - 90900201',
      horarioAbertura: '18:00',
      horarioFechamento: '23:59',
      url: 'www.uol.com.br'
    },
    {
      nome: 'teste6',
      nomeFantasia: 'Pizzaria',
      endereco: 'Rua Paulista, 30',
      telefone: '11 - 90900201',
      horarioAbertura: '18:00',
      horarioFechamento: '23:59',
      url: 'www.uol.com.br'
    },
    {
      nome: 'teste7',
      nomeFantasia: 'Pizzaria',
      endereco: 'Rua Paulista, 30',
      telefone: '11 - 90900201',
      horarioAbertura: '18:00',
      horarioFechamento: '23:59',
      url: 'www.uol.com.br'
    },
    {
      nome: 'teste8',
      nomeFantasia: 'Pizzaria',
      endereco: 'Rua Paulista, 30',
      telefone: '11 - 90900201',
      horarioAbertura: '18:00',
      horarioFechamento: '23:59',
      url: 'www.uol.com.br'
    },
    {
      nome: 'teste9',
      nomeFantasia: 'Pizzaria',
      endereco: 'Rua Paulista, 30',
      telefone: '11 - 90900201',
      horarioAbertura: '18:00',
      horarioFechamento: '23:59',
      url: 'www.uol.com.br'
    },
    {
      nome: 'teste10',
      nomeFantasia: 'Pizzaria',
      endereco: 'Rua Paulista, 30',
      telefone: '11 - 90900201',
      horarioAbertura: '18:00',
      horarioFechamento: '23:59',
      url: 'www.uol.com.br'
    },
    {
      nome: 'teste11',
      nomeFantasia: 'Pizzaria',
      endereco: 'Rua Paulista, 30',
      telefone: '11 - 90900201',
      horarioAbertura: '18:00',
      horarioFechamento: '23:59',
      url: 'www.uol.com.br'
    },
    {
      nome: 'teste12',
      nomeFantasia: 'Pizzaria',
      endereco: 'Rua Paulista, 30',
      telefone: '11 - 90900201',
      horarioAbertura: '18:00',
      horarioFechamento: '23:59',
      url: 'www.uol.com.br'
    }
  ];
  currentPage = 1;
  itemsPerPage = 8;
  pageSize: number;

  constructor() { }

  ngOnInit() {
  }

  onPageChange = (pageNum: number) => {
    this.pageSize = this.itemsPerPage * (pageNum - 1);
  }

  changePagesize = (num: number) => {
    this.itemsPerPage = this.pageSize + num;
  }
}