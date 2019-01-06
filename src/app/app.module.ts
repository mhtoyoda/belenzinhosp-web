import {HttpClientModule} from '@angular/common/http';
import { HttpService } from './service/http.service';
import { BrowserModule } from '@angular/platform-browser';
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
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
