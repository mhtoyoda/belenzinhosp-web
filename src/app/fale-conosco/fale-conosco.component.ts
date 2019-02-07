import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../service/http.service';
import { Router } from '@angular/router';

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
  mensagem = '';

  formFaleConosco: FormGroup;

  constructor(private http: HttpService, formBuilder: FormBuilder, private router: Router) {
    this.formFaleConosco = formBuilder.group({
      name: '',
      email: ['', Validators.compose(
        [Validators.required,
        Validators.email]
      )],
      subject: '',
      message: ['', Validators.required],
      recaptchaReactive: ['', Validators.required]
    });
  }
  sendMessage(event: Event) {
    event.preventDefault();
    // tslint:disable-next-line:max-line-length
    this.http.post('http://18.228.163.212:8080/api/email', { 'email': this.email, 'message': this.message, 'subject': this.subject }).subscribe(resposta => {
      if (resposta.status === 'OK') {
        this.mensagem = 'Mensagem enviada com sucesso';
      } else {
        this.mensagem = 'Ocorreu um problema, tente novamente mais tarde!';
      }
        setTimeout(
          () => this.router.navigate(['']), 5000);
    });
  }

}
