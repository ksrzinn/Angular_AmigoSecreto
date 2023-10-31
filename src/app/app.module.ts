import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPessoasComponent } from './components/card-pessoas/card-pessoas.component';
import { PagetitleComponent } from './components/pagetitle/pagetitle.component';
import { PessoasComponent } from './components/pessoas/pessoas.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { SorteioComponent } from './pages/sorteio/sorteio.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { InputCardComponent } from './components/cadastro/input-card/input-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardPessoasComponent,
    PagetitleComponent,
    PessoasComponent,
    NavigationBarComponent,
    SearchBarComponent,
    HomeComponent,
    SorteioComponent,
    CadastroComponent,
    InputCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
