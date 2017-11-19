/** Angular */
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { OnInit } from '@angular/core';

/** Services */
import { TiposEstabelecimentoService } from './../../../services/tipos-estabelecimento.service';
import { EstabelecimentoService } from 'app/services/estabelecimento.service';

@Component({
    selector: 'app-estabelecimento-adm-comercial',
    templateUrl: './estabelecimento-adm-comercial.component.html',
    styleUrls: ['./estabelecimento-adm-comercial.component.scss'],
    providers: [
        TiposEstabelecimentoService,
        EstabelecimentoService
    ],
    encapsulation: ViewEncapsulation.None
})

export class EstabelecimentoAdmComercialComponent implements OnInit {
    [x: string]: any;
    public router: Router;
    public form: FormGroup;
    public erros: Array<any> = [];
    public carregando: boolean = false;

    public estabelecimento: any;

    public tiposEstabelecimento: Array<any> = [];

    public cnpj: AbstractControl;
    public razaoSocial: AbstractControl;
    public nomeFantasia: AbstractControl;
    public inscricaoEstadual: AbstractControl;
    public inscricaoMunicipal: AbstractControl;
    public tipoEstabelecimento: AbstractControl;


    constructor(router: Router,
        fb: FormBuilder,
        public estabelecimentoService: EstabelecimentoService,
        public tiposEstabelecimentoService: TiposEstabelecimentoService
    ) {

        this.router = router;

        this.form = fb.group({
            cnpj: ['', Validators.compose([Validators.required, cnpjValidator])],
            razaoSocial: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(150)])],
            nomeFantasia: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(150)])],
            tipoEstabelecimento: ['', Validators.required],
            inscricaoMunicipal: [''],
            inscricaoEstadual: ['', Validators.required]
        });

        this.cnpj = this.form.controls['cnpj'];
        this.razaoSocial = this.form.controls['razaoSocial'];
        this.nomeFantasia = this.form.controls['nomeFantasia'];
        this.tipoEstabelecimento = this.form.controls['tipoEstabelecimento'];
        this.inscricaoMunicipal = this.form.controls['inscricaoMunicipal'];
        this.inscricaoEstadual = this.form.controls['inscricaoEstadual'];
    }

    public ngOnInit() {
        this.listarTiposEstabelecimento();
        this.listarEstabelecimentoVendedor();
    }

    public ngAfterViewInit() {
        document.getElementById('preloader').classList.add('hide');
    }

    /** Ações ao enviar Formulário */
    public onSubmit(values: Object): void {

    }

    /** Ações Formulário */
    public closeAlert(index) {
        this.erros.splice(this.erros.indexOf(index), 1);
    }

    public closeAlertSucesso(index) {
        this.erros.splice(this.erros.indexOf(index), 1);
    }

    /** LISTAR CONTEÚDO */
    listarEstabelecimentoVendedor() {
        var resp: any;
        var msgErro: any = {
            item: '',
            descricao: ''
        };
        this.carregando = true;
        this.estabelecimentoService.getEstabelecimentoVendedor().subscribe(
            estabelecimento => {
                this.carregando = false;
                resp = estabelecimento['response'];
                if (resp.status == 'true') {
                    this.estabelecimento = resp.objeto[0];
                    this.cnpj.setValue(this.estabelecimento.estabelecimento_cnpj);
                    this.razaoSocial.setValue(this.estabelecimento.estabelecimento_razao_social);
                    this.nomeFantasia.setValue(this.estabelecimento.estabelecimento_cnpj);
                    this.tipoEstabelecimento.setValue(this.estabelecimento.tipo_estabelecimento_descricao);
                    this.inscricaoMunicipal.setValue(this.estabelecimento.estabelecimento_inscricao_municipal);
                    this.inscricaoEstadual.setValue(this.estabelecimento.estabelecimento_inscricao_estadual);
                }
                else {
                    msgErro.item = 'Erro ao carregar o estabelecimento!';
                    msgErro.descricao = resp.descricao;
                    this.erros.push(msgErro);
                }
            },
            err => {
                this.carregando = false;
                msgErro.item = 'Erro ao carregar o estabelecimento!';
                msgErro.descricao = err;
                this.erros.push(msgErro);
            }
        );
    }

    public listarTiposEstabelecimento() {
        var msgErro: any = {
            item: '',
            descricao: ''
        };
        this.carregando = true;
        this.tiposEstabelecimentoService.listarTodos().subscribe(
            tiposEstabelecimento => {
                this.carregando = false;
                this.tiposEstabelecimento = tiposEstabelecimento['tiposEstabelecimento'];
            },
            err => {
                this.carregando = false;
                msgErro.item = 'Erro ao listar tipos de Estabelecimento!';
                msgErro.descricao = err;
                this.erros.push(msgErro);
            }
        );

    }

}

export function cnpjValidator(control: FormControl): { [key: string]: any } {
    var cnpj = control.value;
    var b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    var resp = true;

    if ((cnpj = cnpj.replace(/[^\d]/g, "")).length != 14) {
        resp = false;
    }


    if (/0{14}/.test(cnpj)) {
        resp = false;
    }

    for (var i = 0, n = 0; i < 12; n += cnpj[i] * b[++i]);

    if (cnpj[12] != (((n %= 11) < 2) ? 0 : 11 - n)) {
        resp = false;
    }

    for (var i = 0, n = 0; i <= 12; n += cnpj[i] * b[i++]);

    if (cnpj[13] != (((n %= 11) < 2) ? 0 : 11 - n)) {
        resp = false;
    }


    if (!resp) {
        return { invalidCnpj: true };
    }
}

