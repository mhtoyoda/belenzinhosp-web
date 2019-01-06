import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
              <div class="item-resultado">
                <h5 style="font-weight: bold;">Pizzaria Belém(nome_ativ_com)</h5>
                <ul class="item-list">
                  <li><p class="text-item">PIZZARIA BELÉM (nfantasia_empr)</p></li>
                  <li><p class="text-item">Av Álvaro Ramos 205 (end_empr)</p></li>
                  <li><p class="text-item">Tel.: 3232-3232 Abre: 18h  Fecha: 24h (tel1_empr; abre_empr; fecha_empr)</p></li>
                  <li>
                  <a class="text-item" target="_blank" rel="noopener noreferrer" href="#">www.pizzariabelem.com.br    (website_empr)</a>
                  </li>
                </ul>
              </div>
            `
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
