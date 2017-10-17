


import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppSettings } from './app.settings';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

import { HttpUtilService } from './services/http-util.service';
import { FacebookModule } from 'ngx-facebook';

/** App Componentes */
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { SucessoCadastroComponent } from './pages/sucesso/sucesso-cadastro.component';
import { AtivaCadastroComponent } from './pages/ativa-cadastro/ativa-cadastro.component';

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
    FacebookModule.forRoot()
  ],
  providers: [ 
    AppSettings,
    HttpUtilService
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
