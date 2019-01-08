import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.css']
})
export class FaleConoscoComponent {

  @Input() name: string;
  @Input() email: string;
  @Input() subject: string;
  @Input() message: string;

  formFaleConosco: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formFaleConosco = formBuilder.group({
      name: '',
      email: ['', Validators.compose(
        [Validators.required,
        Validators.email]
      )],
      subject: '',
      message:  ['', Validators.required]
    });
  }
  sendMessage(event: Event) {
    event.preventDefault();
    console.log(this);
  }

}
