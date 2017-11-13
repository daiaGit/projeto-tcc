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

	getProdutosByEstabelecimento(): Observable<any> {

		var usuario = JSON.parse(localStorage.getItem('usuarioAdm'));

		return this.http.get(this.httpUtil.url(this.path) + "getProdutosByEstabelecimento/" + usuario.estabelecimento_id)
			.map(this.httpUtil.extrairDados)
			.catch(this.httpUtil.processarErros);
	}

	getUnidadesMedidas(): Observable<any> {

		return this.http.get(this.httpUtil.url(this.path) + "getUnidadesMedidas")
			.map(this.httpUtil.extrairDados)
			.catch(this.httpUtil.processarErros);
	}

	setProduto(produto: any, image: any): Observable<any> {

		var usuario = JSON.parse(localStorage.getItem('usuarioAdm'));

		var params = {
			estabelecimento_id: usuario.estabelecimento_id,
			produto_descricao: produto.produto_descricao,
			produto_img_b64: image,
			marca_id: produto.marca_id,
			categoria_id: produto.categoria_id,
			unidade_medida_id: produto.unidade_medida_id,
			sub_categoria_id: produto.sub_categoria_id,
			quantidade: produto.quantidade
		};

		console.log(params);
 
		return this.http.post(this.httpUtil.url(this.path) + "adicionarProduto", params)
			.map(this.httpUtil.extrairDados)
			.catch(this.httpUtil.processarErros);
	}

	setLote(lote: any): Observable<any> {

		var params = {
			produto_id: lote.produtoId,
			estabelecimento_id: lote.estabelecimentoId,
			lote_data_fabricacao: lote.dataFabricacao,
			lote_data_vencimento: lote.dataVencimento,
			lote_preco: lote.preco,
			lote_obs: lote.observacao,
			lote_quantidade: lote.quantidade,
			unidade_medida_id: lote.unidadeMedidaId
		};

		return this.http.post(this.httpUtil.url(this.path) + "adicionarLote", params)
			.map(this.httpUtil.extrairDados)
			.catch(this.httpUtil.processarErros);
	}

	doUploadProduto(planilhaProduto: any): Observable<any> {

		var params = {
			file: planilhaProduto
		};

		return this.http.post(this.httpUtil.url(this.path) + "do_upload/", params)
			.map(this.httpUtil.extrairDados)
			.catch(this.httpUtil.processarErros);
	}

}