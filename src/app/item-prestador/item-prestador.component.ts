import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-prestador',
  template: `
              <h5 style="font-weight: bold;">{{nome}}</h5>
              <ul class="item-list">
                <li><p class="text-item">{{nome}}</p></li>
                <li><p class="text-item">{{endereco}}</p></li>
                <li><p class="text-item">Whatsapp.: {{celular}}</p></li>
                <li>
                <a class="text-item" target="_blank" href="#">{{url}}</a>
                </li>
                <li>
                <a class="text-item" target="_blank" href="#">{{redesocial}}</a>
                </li>
              </ul>
            `
})
export class ItemPrestadorComponent implements OnInit {

  @Input() nome: string;
  @Input() endereco: string;
  @Input() celular: string;
  @Input() url: string;
  @Input() redesocial: string;

  constructor() { }

  ngOnInit() {
  }

}
