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
export class ProdutoService {
 
	private path = 'produto/';
 
	constructor(private http: Http, private httpUtil: HttpUtilService) {
	}
 	
	setProduto(produto: any): Observable<any> {
		
		var params = {
			estabelecimento_id:		produto.estabelecimentoId,
			produto_descricao:		produto.produtoDescricao,
			produto_path_foto:		produto.pathFoto,	
			marca_id:				produto.marcaId,	
			categoria_id:			produto.categoriaId,
			unidade_medida_id:		produto.unidadeMedidaId,
			sub_categoria_id:		produto.subCategoriaId
		};
 
    	return this.http.post(this.httpUtil.url(this.path) + "adicionar", params)
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros); 
	}

	setLote(lote: any): Observable<any>{

		var params = {
			produto_id:				lote.produtoId,
			estabelecimento_id:		lote.estabelecimentoId,
			lote_data_fabricacao:	lote.dataFabricacao,
			lote_data_vencimento:	lote.dataVencimento,
			lote_preco:				lote.preco,
			lote_obs:				lote.observacao,
			lote_quantidade:		lote.quantidade,
			unidade_medida_id:		lote.unidadeMedidaId
		};

		return this.http.post(this.httpUtil.url(this.path) + "adicionarLote",params)
			.map(this.httpUtil.extrairDados)
			.catch(this.httpUtil.processarErros);
	}
	
}