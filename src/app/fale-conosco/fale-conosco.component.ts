import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../service/http.service';

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

  constructor(private http: HttpService, formBuilder: FormBuilder) {
    this.formFaleConosco = formBuilder.group({
      name: '',
      email: ['', Validators.compose(
        [Validators.required,
        Validators.email]
      )],
      subject: '',
      message:  ['', Validators.required],
      recaptchaReactive: ['', Validators.required]
    });
  }
  sendMessage(event: Event) {
    event.preventDefault();
    this.http.post('http://localhost:8080/api/email', {'email': this.email, 'message': this.message, 'subject': this.subject}).subscribe(resposta => {
      console.log(resposta);
    });
  }

}
