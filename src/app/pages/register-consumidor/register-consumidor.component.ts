import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TermoUsoService } from './../../services/termo-uso.service';
import { TipoTelefoneService } from './../../services/tipos-telefone.service';
import { ConsumidorService } from './../../services/consumidor.service';

@Component({
    selector: 'app-register-consumidor',
    templateUrl: './register-consumidor.component.html',
    styleUrls: ['./register-consumidor.component.scss'],
    providers: [
        TipoTelefoneService,
        ConsumidorService,
        TermoUsoService  
    ],
    encapsulation: ViewEncapsulation.None
})

export class RegisterConsumidorComponent {
    public router: Router;
    public form: FormGroup;
    public msgErro: any;
    public formSubmit: any;

    public tiposTelefone: Array<any> = [];
    public termoUso: any;  

    public maskFone: any={
        mask: '',
        placeholder: ''
    };
    public passwordType: any = '';;
    public passwordConfirmType: any = '';
    public confirmTermUso: any = {
        status: false,
        validate: false
    }; 

    public nome: AbstractControl;
    public sobrenome: AbstractControl;
    public email: AbstractControl;
    public password: AbstractControl;
    public confirmPassword: AbstractControl;
    public ddd: AbstractControl;
    public telefone: AbstractControl;
    public tipoTelefone: AbstractControl;

    constructor(router: Router,
        fb: FormBuilder,
        public tipoTelefoneService: TipoTelefoneService,
        public consumidorService: ConsumidorService,
        public termoUsoService: TermoUsoService) {

        this.router = router;

        this.listaTiposTelefone();

        this.form = fb.group({
            nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(150)])],
            sobrenome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(150)])],
            email: ['', Validators.compose([Validators.required, emailValidator])],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
            telefone: ['', Validators.compose([Validators.required, foneValidator])],
            ddd: ['', Validators.compose([Validators.required, dddValidator])],
            tipoTelefone: ['', Validators.required]
        }, { validator: matchingPasswords('password', 'confirmPassword') });

        this.nome = this.form.controls['nome'];
        this.sobrenome = this.form.controls['sobrenome'];
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
        this.confirmPassword = this.form.controls['confirmPassword'];
        this.telefone = this.form.controls['telefone'];
        this.ddd = this.form.controls['ddd'];
        this.tipoTelefone = this.form.controls['tipoTelefone'];

        this.maskFone.mask = '0000-0000';
        this.maskFone.placeholder = 'XXXX-XXXX';
        this.passwordType = 'password';
        this.passwordConfirmType = 'password'; 
    }

    public onSubmit(values: Object): void {
        if (this.form.valid && this.confirmTermUso.status) {
            this.cadastrarConsumidor(values);           
        }
        else{
            this.nome.markAsTouched();
            this.sobrenome.markAsTouched();
            this.email.markAsTouched();
            this.password.markAsTouched();
            this.confirmPassword.markAsTouched();
            this.telefone.markAsTouched();
            this.ddd.markAsTouched();
            this.tipoTelefone.markAsTouched();
            this.confirmTermUso.validate = true;
        }
    }

    cadastrarConsumidor(consumidor: any) {           
        this.consumidorService.setConsumidor(consumidor).subscribe(
            resp => {
                this.formSubmit = resp['response'];
                if(this.formSubmit.status){
                    this.router.navigate(['/sucesso-cadastro']);  
                }
                else{
                   this.msgErro = this.formSubmit.msgErro;  
                }   
                
            }); 
    }

    setMaskFone() {           
        if(this.tipoTelefone.value == 2){
            this.maskFone.mask = '00000-0000';
            this.maskFone.placeholder = 'XXXXX-XXXX';  
        }
        else{
            this.maskFone.mask = '0000-0000';
            this.maskFone.placeholder = 'XXXX-XXXX'; 
        }
    }

    setTypePassword(type) {
            this.passwordType = type;
    }

    setTypePasswordConfirm(type) {
        this.passwordConfirmType = type;
    }
    
    listaTiposTelefone() {           
        this.tipoTelefoneService.listarTodos().subscribe(
            tiposTelefone => {
                this.tiposTelefone = tiposTelefone['tiposTelefone'];
                console.log(tiposTelefone);          
                error => this.msgErro;
            });

    }

    confirmarTermoUso(){ 
        if(this.confirmTermUso.status){
            this.confirmTermUso.status = false;
        }
        else{
            this.confirmTermUso.status = true;
        }
    }

    public   ExibirTermoUso() {
        this.termoUso =  this.termoUsoService.listarTermoUso();
    }

    ngAfterViewInit() {
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

export function foneValidator(control: FormControl): { [key: string]: any } {
    var foneRegexp = /[0-9]{8,9}$/;
    if (control.value && !foneRegexp.test(control.value)) {
        return { invalidTelefone: true };
    }
}

export function dddValidator(control: FormControl): { [key: string]: any } {
    var dddRegexp = /[0-9]{2,2}$/;
    if (control.value && !dddRegexp.test(control.value)) {
        return { invalidDDD: true };
    }
}