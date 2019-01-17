import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { AnuncieAquiComponent } from './anuncie-aqui/anuncie-aqui.component';
import { PrivacidadeComponent } from './privacidade/privacidade.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { FormularioPrestadorComponent } from './formulario-prestador/formulario-prestador.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'faleConosco', component: FaleConoscoComponent},
  {path: 'anuncieAqui', component: AnuncieAquiComponent},
  {path: 'privacidade', component: PrivacidadeComponent},
  {path: 'quemSomos', component: QuemSomosComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: 'resultado/:type/:term', component: ResultadoComponent},
  {path: 'prestador', component: FormularioPrestadorComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
