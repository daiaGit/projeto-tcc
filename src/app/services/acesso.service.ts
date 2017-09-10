import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpUtilService } from './http-util.service';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

 
@Injectable()
export class AcessoService {
 
	private path = 'acesso/';
 
	constructor(private http: Http, private httpUtil: HttpUtilService) {
	}
 	
	autenticar(login: any): Observable<any> {
		
		var params = {
			usuario_login:login.email,
			usuario_senha:login.password
		};
 
    	return this.http.post(this.httpUtil.url(this.path) + "autenticar", params)
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros); 
	}
	
}