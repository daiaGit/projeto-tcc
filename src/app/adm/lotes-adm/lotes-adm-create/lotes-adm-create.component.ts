import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

/** Services */
import { ProdutoService } from './../../../services/produto.service';
import { CategoriaService } from './../../../services/categoria.service';
import { SubcategoriaService } from './../../../services/subcategoria.service';
import { MarcaService } from './../../../services/marca.service';
import { CompleterData, CompleterService } from 'ng2-completer';

@Component({
  selector: 'app-lotes-adm-create',
  templateUrl: './lotes-adm-create.component.html',
  styleUrls: ['./lotes-adm-create.component.scss'],
  providers: [
    ProdutoService
  ],
  encapsulation: ViewEncapsulation.None
})

export class LotesAdmCreateComponent implements OnInit {
  public router: Router;
  public form: FormGroup;
  public sucessos: Array<any> = [];
  public erros: Array<any> = [];
  public modelPopup: NgbDateStruct = {year: new Date().getFullYear(), month: new Date().getMonth()+1, day: new Date().getDate()-3};
  
  public produtos: Array<any> = [];
  public unidadesMedida: Array<any> = [];

  public produto_id: AbstractControl;
  public lote_data_fabricacao: AbstractControl;
  public lote_data_vencimento: AbstractControl;
  public lote_preco: AbstractControl;
  public lote_obs: AbstractControl;
  public lote_quantidade: AbstractControl;
  public unidade_medida_id: AbstractControl;
  public qtd_minima_pj: AbstractControl;
  public qtd_minima_pf: AbstractControl;
  public vender_para_pf: AbstractControl;
  public vender_para_pj: AbstractControl;


  protected searchStr: string;
  protected captain: string;
  protected dataService: CompleterData;
  protected searchData = [
    { color: 'red', value: '#f00' },
    { color: 'green', value: '#0f0' },
    { color: 'blue', value: '#00f' },
    { color: 'cyan', value: '#0ff' },
    { color: 'magenta', value: '#f0f' },
    { color: 'yellow', value: '#ff0' },
    { color: 'black', value: '#000' }
  ];
  protected captains = ['James T. Kirk', 'Benjamin Sisko', 'Jean-Luc Picard', 'Spock', 'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett' ];


  constructor(router: Router,
    fb: FormBuilder,
    public produtoService: ProdutoService,
    private completerService: CompleterService
  ) {

    this.dataService = completerService.local(this.searchData, 'color', 'color');

    this.router = router;

    this.form = fb.group({
      produto_id: ['', Validators.compose([Validators.required])],
      lote_data_fabricacao: ['', Validators.compose([Validators.required])],
      lote_data_vencimento: ['', Validators.compose([Validators.required])],
      lote_preco: ['', Validators.compose([Validators.required])],
      lote_obs: ['', Validators.compose([Validators.required])],
      lote_quantidade: ['', Validators.compose([Validators.required])],
      unidade_medida_id: ['', Validators.compose([Validators.required])],
      qtd_minima_pj: ['', Validators.compose([Validators.required])],
      qtd_minima_pf: ['', Validators.compose([Validators.required])],
      vender_para_pf: ['', Validators.compose([Validators.required])],
      vender_para_pj: ['', Validators.compose([Validators.required])],
    });

    this.produto_id = this.form.controls['produto_id'];
    this.lote_data_fabricacao = this.form.controls['lote_data_fabricacao'];
    this.lote_data_vencimento = this.form.controls['lote_data_vencimento'];
    this.lote_preco = this.form.controls['lote_preco'];
    this.lote_obs = this.form.controls['lote_obs'];
    this.lote_quantidade = this.form.controls['lote_quantidade'];
    this.unidade_medida_id = this.form.controls['unidade_medida_id'];
    this.qtd_minima_pj = this.form.controls['qtd_minima_pj'];
    this.qtd_minima_pf = this.form.controls['lqtd_minima_pf'];
    this.vender_para_pf = this.form.controls['vender_para_pf'];
    this.vender_para_pj = this.form.controls['vender_para_pj'];

    this.vender_para_pj.setValue(true);
    this.vender_para_pf.setValue(true);
  }

  ngOnInit() {
    this.listarUnidadesMedida();
    this.listarProdutos();
  }

  public onSubmit(values: Object): void {
    var resp: any;
    var msgErro: any = {
      item: '',
      descricao: ''
    };

    if (this.form.valid) {
      this.produtoService.setLote(values).subscribe(
        lote => {
          resp = lote['response'];
          if (resp.status == 'true') {

          }
          else {
            msgErro.item = 'Erro ao efetuar o cadastro de lotes!';
            msgErro.descricao = resp.descricao;
            this.erros.push(msgErro);
          }
        },
        err => {
          msgErro.item = 'Erro ao efetuar o cadastro de lotes!';
          msgErro.descricao = err;
          this.erros.push(msgErro);
        }
      );
    }
    else {
      this.produto_id.markAsTouched();
      this.lote_data_fabricacao.markAsTouched();
      this.lote_data_vencimento.markAsTouched();
      this.lote_preco.markAsTouched();
      this.lote_obs.markAsTouched();
      this.lote_quantidade.markAsTouched();
      this.unidade_medida_id.markAsTouched();
      this.qtd_minima_pj.markAsTouched();
      this.qtd_minima_pf.markAsTouched();
      this.vender_para_pf.markAsTouched();
      this.vender_para_pj.markAsTouched();
    }
  }

  public closeAlert(index) {
    this.erros.splice(index, 1);
  }

  public closeAlertSucesso(index) {
    this.sucessos.splice(index, 1);
  }

  /** LISTAR CONTEÚDO */
  listarUnidadesMedida() {
    var resp: any;
    var msgErro: any = {
      item: '',
      descricao: ''
    };

    this.produtoService.getUnidadesMedidas().subscribe(
      unidadesMedida => {
        resp = unidadesMedida['response'];
        if (resp.status == 'true') {
          this.unidadesMedida = resp.objeto;
        }
        else {
          msgErro.item = 'Erro ao carregar as unidades de medida!';
          msgErro.descricao = resp.descricao;
          this.erros.push(msgErro);
        }
      },
      err => {
        msgErro.item = 'Erro ao carregar as unidades de medida!';
        msgErro.descricao = err;
        this.erros.push(msgErro);
      }
    );
  }

  listarProdutos() {
    var resp: any;
    var msgErro: any = {
      item: '',
      descricao: ''
    };

    this.produtoService.getProdutosByEstabelecimento().subscribe(
      unidadesMedida => {
        resp = unidadesMedida['response'];
        if (resp.status == 'true') {
          this.unidadesMedida = resp.objeto;
        }
        else {
          msgErro.item = 'Erro ao carregar os produtos!';
          msgErro.descricao = resp.descricao;
          this.erros.push(msgErro);
        }
      },
      err => {
        msgErro.item = 'Erro ao carregar os produtos!';
        msgErro.descricao = err;
        this.erros.push(msgErro);
      }
    );
  }

  public isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  public isDisabled(date: NgbDateStruct, current: {month: number}) {
    return date.month !== current.month;
  }

}

