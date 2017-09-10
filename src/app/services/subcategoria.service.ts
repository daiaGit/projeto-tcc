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
export class SubcategoriaService {
 
	private path = 'subcategoria/';
 
	constructor(private http: Http, private httpUtil: HttpUtilService) {
	}
 	
	setSubCategoria(subcategoria: any): Observable<any> {
		
		var params = {
			sub_categoria_descricao:	subcategoria.descricao,
			Categoria_id:				subcategoria.categoriaId
		};
 
    	return this.http.post(this.httpUtil.url(this.path) + "adicionar", params)
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros); 
	}
	
}