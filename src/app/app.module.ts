import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppSettings } from './app.settings';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { HttpUtilService } from './services/http-util.service';
import { FacebookModule } from 'ngx-facebook';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FacebookModule.forRoot()
  ],
  providers: [ 
    AppSettings,
    HttpUtilService
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
