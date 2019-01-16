import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './service/http.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';
import { BannerMainComponent } from './banner-main/banner-main.component';
import { BannerComponent } from './banner/banner.component';
import { ListComponent } from './list/list.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { AnuncieAquiComponent } from './anuncie-aqui/anuncie-aqui.component';
import { PrivacidadeComponent } from './privacidade/privacidade.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ItemComponent } from './item/item.component';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ResultadoComponent } from './resultado/resultado.component';
import { ItemPrestadorComponent } from './item-prestador/item-prestador.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SearchComponent,
    InfoComponent,
    FooterComponent,
    BannerMainComponent,
    BannerComponent,
    ListComponent,
    FaleConoscoComponent,
    AnuncieAquiComponent,
    PrivacidadeComponent,
    QuemSomosComponent,
    ServicosComponent,
    ItemComponent,
    ResultadoComponent,
    ItemPrestadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    RecaptchaModule,
    RecaptchaFormsModule,
    NgbModule
  ],
  providers: [HttpService, {
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      /*siteKey: '6LfW6YcUAAAAAFkEpSz5QAT-bX3R_VeDckoxfm83', real sitekey para dominio belenzinhosp.com.br*/
      siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
    } as RecaptchaSettings,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
