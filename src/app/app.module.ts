import { SmarketAuthGuard } from './guards/smarket-auth.guard';
import { AdmAuthGuard } from './guards/adm-auth.guard';
import { Http } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppSettings } from './app.settings';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { FacebookModule } from 'ngx-facebook';


import { AcessoService } from './services/acesso.service';
import { HttpUtilService } from './services/http-util.service';

/** App Componentes */
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { SucessoCadastroComponent } from './pages/sucesso/sucesso-cadastro.component';
import { AtivaCadastroComponent } from './pages/ativa-cadastro/ativa-cadastro.component';
import { SmarketAuthChildGuard } from 'app/guards/smarket-auth-child.guard';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SucessoCadastroComponent,
    AtivaCadastroComponent
  ],
  imports: [
    BrowserModule,
    routing,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
  }),
    FacebookModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ 
    AppSettings,
    AcessoService,
    AdmAuthGuard,
    SmarketAuthGuard,
    SmarketAuthChildGuard,
    HttpUtilService
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule { }
