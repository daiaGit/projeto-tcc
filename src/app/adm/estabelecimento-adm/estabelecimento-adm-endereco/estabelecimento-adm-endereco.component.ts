import { CepService } from './../../../services/cep.service';
import { TermoUsoService } from './../../../services/termo-uso.service';
import { EstadoService } from 'app/services/estado.service';
import { CidadeService } from 'app/services/cidade.service';
import { CargoService } from './../../../services/cargo.service';
import { TiposEstabelecimentoService } from './../../../services/tipos-estabelecimento.service';
import { EstabelecimentoService } from 'app/services/estabelecimento.service';
import { TipoTelefoneService } from './../../../services/tipos-telefone.service';

/** Angular */
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { OnInit } from '@angular/core';

/** Services */


@Component({
    selector: 'app-estabelecimento-adm-endereco',
    templateUrl: './estabelecimento-adm-endereco.component.html',
    styleUrls: ['./estabelecimento-adm-endereco.component.scss'],
    providers: [
        EstabelecimentoService,
        CidadeService,
        EstadoService,
        CepService
    ],
    encapsulation: ViewEncapsulation.None
})

export class EstabelecimentoAdmEnderecoComponent implements OnInit {
    [x: string]: any;
    public router: Router;
    public form: FormGroup;
    public erros: Array<any> = [];
    public carregando: boolean = false;

    public estabelecimento: any;
    public estados: Array<any> = [];
    public cidades: Array<any> = [];
    public endereco: any = '';

    public rua: AbstractControl;
    public numero: AbstractControl;
    public complemento: AbstractControl;
    public bairro: AbstractControl;
    public cep: AbstractControl;
    public estado: AbstractControl;
    public cidade: AbstractControl;

    constructor(router: Router,
        fb: FormBuilder,
        public estabelecimentoService: EstabelecimentoService,
        public cidadeService: CidadeService,
        public estadoService: EstadoService,
        public cepService: CepService
    ) {

        this.router = router;

        this.form = fb.group({
            rua: ['', Validators.required],
            numero: ['', Validators.required],
            complemento: [''],
            bairro: ['', Validators.required],
            cep: ['', Validators.compose([Validators.required, cepValidator])],
            estado: ['', Validators.required],
            cidade: ['', Validators.required]
        });


        this.rua = this.form.controls['rua'];
        this.numero = this.form.controls['numero'];
        this.complemento = this.form.controls['complemento'];
        this.bairro = this.form.controls['bairro'];
        this.cep = this.form.controls['cep'];
        this.estado = this.form.controls['estado'];
        this.cidade = this.form.controls['cidade'];
    }

    public ngOnInit() {
        this.listarEstados();
        this.listarEstabelecimentoVendedor();
    }

    public ngAfterViewInit() {
        document.getElementById('preloader').classList.add('hide');
    }

    public closeAlert(index) {
        this.erros.splice(this.erros.indexOf(index), 1);
    }

    public listarEstados() {
        var msgErro: any = {
            item : '',
            descricao: ''
        };
        this.carregando = true;
        this.estadoService.listarTodos().subscribe(
            estados => {
                this.carregando = false;
                this.estados = estados['estados'];
            },
            err => {
                this.carregando = false;
                msgErro.item = 'Erro ao listar Estados!';
                msgErro.descricao = err;
                this.erros.push(msgErro);
            }
        );

    }

    public selecionarEstadoSigla(estadoSigla) {
        var msgErro: any = {
            item : '',
            descricao: ''
        };
        this.carregando = true;
        var estado: any;
        this.estadoService.listarPorSigla(estadoSigla).subscribe(
            estado => {
                this.carregando = false;                
                estado = estado['estado'];
                this.estado.setValue(estado['estado_id']);
                this.listarCidades();            
            },
            err => {
                this.carregando = false;
                msgErro.item = 'Erro ao listar Estado pela Sigla!';
                msgErro.descricao = err;
                this.erros.push(msgErro);
            }
        );

    }

    public selecionarCidadeNome(estadoSigla, cidadeNome) {
        var msgErro: any = {
            item : '',
            descricao: ''
        };
        this.carregando = true;
        var estado: any;
        this.cidadeService.getCidadesPorDescricaoEstado(estadoSigla, cidadeNome).subscribe(
            cidade => {
                this.carregando = false;                
                cidade = cidade['cidade'];
                this.cidade.setValue(cidade['cidade_id']);          
            },
            err => {
                this.carregando = false;
                msgErro.item = 'Erro ao listar Cidade pelo nome!';
                msgErro.descricao = err;
                this.erros.push(msgErro);
            }
        );

    }

    public listarCidades() {
        var msgErro: any = {
            item : '',
            descricao: ''
        };
        this.carregando = true;
        this.cidade.setValue('');
        this.cidadeService.listarTodos(this.estado.value).subscribe(
            cidades => {
                this.carregando = false;
                this.cidades = cidades['cidades'];
            },
            err => {
                this.carregando = false;
                msgErro.item = 'Erro ao listar Cidades!';
                msgErro.descricao = err;
                this.erros.push(msgErro);
            });
    }

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
                    this.rua.setValue(this.estabelecimento.endereco.endereco_rua);
                    this.numero.setValue(this.estabelecimento.endereco.endereco_numero);
                    this.complemento.setValue(this.estabelecimento.endereco.endereco_complemento);
                    this.bairro.setValue(this.estabelecimento.endereco.endereco_bairro);
                    this.cep.setValue(this.estabelecimento.endereco.endereco_cep);
                    this.estado.setValue(this.estabelecimento.endereco.estado_id);
                    this.cidade.setValue(this.estabelecimento.endereco.cidade_id);
                }
                else {
                    msgErro.item = 'Erro ao carregar endereço do estabelecimento!';
                    msgErro.descricao = resp.descricao;
                    this.erros.push(msgErro);
                }
            },
            err => {                
                this.carregando = false;
                msgErro.item = 'Erro ao carregar endereço do estabelecimento!';
                msgErro.descricao = err;
                this.erros.push(msgErro);
            }
        );
    }

    public buscarCep() {
        var msgErro: any = {
            item : '',
            descricao: ''
        };
        this.carregando = true;
        this.cepService.getEnderecoCep(this.cep.value).subscribe(
            endereco => {
                this.carregando = false;
                if (endereco) {
                    if (!endereco['erro']) {
                        this.rua.setValue(endereco['logradouro']);
                        this.complemento.setValue(endereco['complemento']);
                        this.bairro.setValue(endereco['bairro']);
                        this.selecionarEstadoSigla(endereco['uf']);
                        this.selecionarCidadeNome(endereco['uf'], endereco['localidade'])
                    }
                    else {
                        this.rua.setValue('');
                        this.complemento.setValue('');
                        this.bairro.setValue('');
                    }

                }                
            },
            err => {
                msgErro.item = 'Erro ao buscar cep!';
                msgErro.descricao = err;
                this.erros.push(msgErro);
            });
    }

}

export function cepValidator(control: FormControl): { [key: string]: any } {
    var cepRegexp = /[0-9]{8,8}$/;
    if (control.value && !cepRegexp.test(control.value)) {
        return { invalidCep: true };
    }
}
