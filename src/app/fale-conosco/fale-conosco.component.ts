import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.css']
})
export class FaleConoscoComponent {

  @Input() name = '';
  @Input() email = '';
  @Input() subject = '';
  @Input() message = '';

  sendMessage(event: Event) {
    event.preventDefault();
    console.log(this);
  }

}
