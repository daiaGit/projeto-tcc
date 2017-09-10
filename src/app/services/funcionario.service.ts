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
export class FuncionarioService {
 
	private path = 'funcionario/';
 
	constructor(private http: Http, private httpUtil: HttpUtilService) {
	}
 	
	setFuncionario(funcionario: any): Observable<any> {
		
		var params = {
			tipo_usuario_id : 		funcionario.tipoUsuario,
			funcionario_nome : 		funcionario.nome,
			funcionario_sobrenome: 	funcionario.sobrenome,
			email_descricao: 		funcionario.email,
			tipo_telefone_id: 		funcionario.tipoTelefone,
			telefone_ddd: 			funcionario.ddd,
			telefone_numero: 		funcionario.telefone,
			usuario_senha: 			funcionario.senha
		};
 
    	return this.http.post(this.httpUtil.url(this.path) + "adicionar", params)
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros); 
	}
	
}