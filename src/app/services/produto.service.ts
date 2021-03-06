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

	getLotesByEstabelecimento(): Observable<any> {

		var usuario = JSON.parse(localStorage.getItem('usuarioAdm'));

		return this.http.get(this.httpUtil.url(this.path) + "getLotesByEstabelecimento/" + usuario.estabelecimento_id)
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

		return this.http.post(this.httpUtil.url(this.path) + "adicionarProduto", params)
			.map(this.httpUtil.extrairDados)
			.catch(this.httpUtil.processarErros);
	}

	setLote(lote: any): Observable<any> {

		var usuario = JSON.parse(localStorage.getItem('usuarioAdm'));

		var params = {
			produto_id: lote.produto_id,
			estabelecimento_id: lote.estabelecimento_id,
			lote_data_fabricacao: lote.lote_data_fabricacao,
			lote_data_vencimento: lote.lote_data_vencimento,
			lote_preco: lote.lote_preco,
			lote_obs: lote.lote_obs,
			lote_quantidade: lote.lote_quantidade,
			unidade_medida_id: lote.unidade_medida_id,
			qtd_minima_pj: lote.qtd_minima_pj,
			qtd_minima_pf: lote.qtd_minima_pf,
			vender_para: lote.vender_para
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