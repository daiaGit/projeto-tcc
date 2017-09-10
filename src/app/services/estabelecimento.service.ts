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
export class EstabelecimentoService {
 
	private path = 'estabelecimento/';
 
	constructor(private http: Http, private httpUtil: HttpUtilService) {
	}
 	
	setEstabelecimento(estabelecimento: any): Observable<any> {
		
		var params = {
			estabelecimento_cnpj:				estabelecimento.cnpj,
			estabelecimento_razao_social:		estabelecimento.razaoSocial,
			estabelecimento_nome_fantasia:		estabelecimento.nomeFantasia,
			estabelecimento_inscricao_estadual:	estabelecimento.inscricaoEstadual,
			tipo_estabelecimento_id:			estabelecimento.tipoEstabelecimento, 
			endereco_rua:						estabelecimento.rua,
			endereco_numero:					estabelecimento.numero, 
			endereco_complemento:				estabelecimento.complemento, 
			endereco_bairro:					estabelecimento.bairro, 
			endereco_cep:						estabelecimento.cep, 
			estado_id:							estabelecimento.estadoId, 
			cidade_id:							estabelecimento.cidadeId, 
			email_descricao:					estabelecimento.emailDescricao, 
			email_setor:						estabelecimento.emailSetor, 
			tipo_telefone_id:					estabelecimento.tipoTelefoneId,
			telefone_ddd:						estabelecimento.telefoneDDD,
			telefone_numero:					estabelecimento.telefoneNumero,
			telefone_setor:						estabelecimento.telefoneSetor

		};
 
    	return this.http.post(this.httpUtil.url(this.path) + "adicionar", params)
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros); 
	}
	
}