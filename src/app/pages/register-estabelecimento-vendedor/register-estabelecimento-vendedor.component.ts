import { OnInit } from '@angular/core';
/** Angular */
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';

/** Services */
import { TipoTelefoneService } from './../../services/tipos-telefone.service';
import { EstabelecimentoService } from './../../services/estabelecimento.service';
import { CargoService } from './../../services/cargo.service';
import { TiposEstabelecimentoService } from './../../services/tipos-estabelecimento.service';
import { CidadeService } from './../../services/cidade.service';
import { TermoUsoService } from './../../services/termo-uso.service';
import { EstadoService } from './../../services/estado.service';
import {Select2Component} from 'angular-select2-component';

@Component({
    selector: 'app-register-estabelecimento-vendedor',
    templateUrl: './register-estabelecimento-vendedor.component.html',
    styleUrls: ['./register-estabelecimento-vendedor.component.scss'],
    providers: [
        TipoTelefoneService,
        EstabelecimentoService,
        TiposEstabelecimentoService,
        CargoService,
        CidadeService,
        EstadoService,
        TermoUsoService  
    ],
    encapsulation: ViewEncapsulation.None
})

export class RegisterEstabelecimentoVendedorComponent implements OnInit{
    public router: Router;
    public form: FormGroup;
    public msgErro: any;
    public formSubmit: any;

    public tiposTelefone: Array<any> = [];
    public tiposEstabelecimento: Array<any> = [];
    public cargos: Array<any> = [];    
    public estados: Array<any> = [];
    public cidades: Array<any> = []; 
    public termoUso: any;       

    public cnpj: AbstractControl;
    public razaoSocial: AbstractControl;
    public nomeFantasia: AbstractControl;
    public inscricaoEstadual: AbstractControl;
    public inscricaoMunicipal: AbstractControl;
    public tipoEstabelecimento: AbstractControl;
    public funcionarioNome: AbstractControl;
    public funcionarioSobrenome: AbstractControl;
    public funcionarioCpf: AbstractControl;
    public funcionarioEmail: AbstractControl;
    public funcionarioCargo: AbstractControl;
    public ddd: AbstractControl;
    public telefone: AbstractControl;
    public tipoTelefone: AbstractControl;
    public password: AbstractControl;
    public confirmPassword: AbstractControl;
    public rua: AbstractControl;
    public numero: AbstractControl;
    public complemento: AbstractControl;
    public bairro: AbstractControl;
    public cep: AbstractControl;
    public estado: AbstractControl;
    public cidade: AbstractControl;

    constructor(router: Router,
        fb: FormBuilder,
        public tipoTelefoneService: TipoTelefoneService,
        public estabelecimentoService: EstabelecimentoService,
        public tiposEstabelecimentoService: TiposEstabelecimentoService,
        public cargoService: CargoService,
        public cidadeService: CidadeService,
        public estadoService: EstadoService,
        public termoUsoService: TermoUsoService
    ) {

        this.router = router; 

        this.form = fb.group({
            cnpj: ['', Validators.required],
            razaoSocial: ['',Validators.compose( [Validators.required, Validators.minLength(3), Validators.maxLength(150)])],
            nomeFantasia: ['',Validators.compose( [Validators.required, Validators.minLength(3), Validators.maxLength(150)])],
            tipoEstabelecimento: ['', Validators.required],
            funcionarioCargo: ['', Validators.required],
            funcionarioNome: ['',Validators.compose( [Validators.required, Validators.minLength(3), Validators.maxLength(150)])],
            funcionarioSobrenome: ['',Validators.compose( [Validators.required, Validators.minLength(3), Validators.maxLength(150)])],
            funcionarioCpf: ['', Validators.required],
            funcionarioEmail: ['', Validators.compose([Validators.required, emailValidator])],
            tipoTelefone: ['', Validators.required],
            ddd: ['', Validators.required],
            telefone: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
            rua: ['', Validators.required],
            numero: ['', Validators.required],
            complemento: [''],
            bairro: ['', Validators.required],
            cep: ['', Validators.required],
            estado: ['', Validators.required],
            cidade: ['', Validators.required],
            inscricaoMunicipal: ['', Validators.required],
            inscricaoEstadual: ['', Validators.required]
        }, 
        { 
            validator: matchingPasswords('password', 'confirmPassword') 
        });

        this.cnpj = this.form.controls['cnpj'];
        this.razaoSocial = this.form.controls['razaoSocial']; 
        this.nomeFantasia = this.form.controls['nomeFantasia'];
        this.tipoEstabelecimento = this.form.controls['tipoEstabelecimento'];
        this.funcionarioCargo = this.form.controls['funcionarioCargo'];
        this.funcionarioNome = this.form.controls['funcionarioNome'];
        this.funcionarioSobrenome = this.form.controls['funcionarioSobrenome'];
        this.funcionarioCpf = this.form.controls['funcionarioCpf'];
        this.funcionarioEmail = this.form.controls['funcionarioEmail'];
        this.tipoTelefone = this.form.controls['tipoTelefone'];
        this.ddd = this.form.controls['ddd'];
        this.telefone = this.form.controls['telefone'];
        this.password = this.form.controls['password'];
        this.confirmPassword = this.form.controls['confirmPassword'];
        this.rua = this.form.controls['rua'];
        this.numero = this.form.controls['numero'];
        this.complemento = this.form.controls['complemento'];
        this.bairro = this.form.controls['bairro'];
        this.cep = this.form.controls['cep'];
        this.estado = this.form.controls['estado'];
        this.cidade = this.form.controls['cidade'];
        this.inscricaoMunicipal = this.form.controls['inscricaoMunicipal'];
        this.inscricaoEstadual = this.form.controls['inscricaoEstadual'];

    }

    public ngOnInit(){
        this.listarTiposTelefone();
        this.listarTiposEstabelecimento();
        this.listarCargos();
        this.listarEstados();
        this.ExibirTermoUso();
    }

    public onSubmit(values: Object): void {
        console.log(values);
        if (this.form.valid) {            
            this.cadastrarEstabelecimento(values);
            this.router.navigate(['/login-estabelecimento']);
        }
        else{
            this.cnpj.markAsTouched();
            this.confirmPassword.markAsTouched();
            this.ddd.markAsTouched();
            this.funcionarioCargo.markAsTouched();
            this.funcionarioCpf.markAsTouched();
            this.funcionarioEmail.markAsTouched();
            this.funcionarioNome.markAsTouched();
            this.funcionarioSobrenome.markAsTouched();
            this.nomeFantasia.markAsTouched();
            this.password.markAsTouched();
            this.razaoSocial.markAsTouched();
            this.telefone.markAsTouched();
            this.tipoEstabelecimento.markAsTouched();
            this.tipoTelefone.markAsTouched();
            this.rua.markAsTouched();
            this.numero.markAsTouched();
            this.complemento.markAsTouched();
            this.bairro.markAsTouched();
            this.cep.markAsTouched();
            this.estado.markAsTouched();
            this.cidade.markAsTouched();
            this.inscricaoMunicipal .markAsTouched();
            this.inscricaoEstadual.markAsTouched();
          }
    }

    public cadastrarEstabelecimento(estabelecimento: any) {
        this.estabelecimentoService.setEstabelecimentoVendedor(estabelecimento).subscribe(
            resp => {
                this.formSubmit = resp['Response'];
                console.log(resp);
                error => this.msgErro;
            });
    }

    public listarTiposTelefone() {
        this.tipoTelefoneService.listarTodos().subscribe(
            tiposTelefone => {
                this.tiposTelefone = tiposTelefone['tiposTelefone'];
                error => this.msgErro;
            });

    }

   public listarTiposEstabelecimento() {
        this.tiposEstabelecimentoService.listarTodos().subscribe(
            tiposEstabelecimento => {
                this.tiposEstabelecimento = tiposEstabelecimento['tiposEstabelecimento'];
                error => this.msgErro;
            });

    }

  public  listarCargos() {
        this.cargoService.listarTodos().subscribe(
            cargos => {
                this.cargos = cargos['cargo'];
                error => this.msgErro;
            });

    }

  public  listarEstados() {
        this.estadoService.listarTodos().subscribe(
            estados => {
                this.estados = estados['estados'];
                error => this.msgErro;
            });

    }

    public   listarCidades(idEstado) {
        this.cidadeService.listarTodos(idEstado).subscribe(
            cidades => {
                this.cidades = cidades['cidades'];
                error => this.msgErro;
            });

    }

    public   ExibirTermoUso() {
        this.termoUso =  this.termoUsoService.listarTermoUso();
    }

    public  ngAfterViewInit() {
        document.getElementById('preloader').classList.add('hide');
    }
   
    
}

export function emailValidator(control: FormControl): { [key: string]: any } {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}

export function matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
        let password = group.controls[passwordKey];
        let passwordConfirmation = group.controls[passwordConfirmationKey];
        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({ mismatchedPasswords: true })
        }
    }
}
