import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppSettings } from './app.settings';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
<<<<<<< HEAD
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

=======
>>>>>>> f9c101fd1a2b2a734bea6cab9b60e5c8cfc166e6
import { HttpUtilService } from './services/http-util.service';
import { FacebookModule } from 'ngx-facebook';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing,
<<<<<<< HEAD
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
  }),
=======
    FacebookModule.forRoot()
>>>>>>> f9c101fd1a2b2a734bea6cab9b60e5c8cfc166e6
  ],
  providers: [ 
    AppSettings,
    HttpUtilService
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
