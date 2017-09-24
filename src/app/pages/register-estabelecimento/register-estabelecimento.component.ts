import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TipoTelefoneService } from './../../services/tipos-telefone.service';
import { EstabelecimentoService } from './../../services/estabelecimento.service';

@Component({
    selector: 'app-register-estabelecimento',
    templateUrl: './register-estabelecimento.component.html',
    styleUrls: ['./register-estabelecimento.component.scss'],
    providers: [
        TipoTelefoneService,
        EstabelecimentoService
    ],
    encapsulation: ViewEncapsulation.None
})

export class RegisterEstabelecimentoComponent {
    public router: Router;
    public form: FormGroup;
    public msgErro: any;
    public formSubmit: any;

    public tiposTelefone: Array<any> = [];


    public cnpj: AbstractControl;
    public razaoSocial: AbstractControl;
    public nomeFantasia: AbstractControl;
    public tipoEstabelecimento: AbstractControl;
    public contratanteNome: AbstractControl;
    public contratanteSobrenome: AbstractControl;
    public contratanteCpf: AbstractControl;
    public contratanteEmail: AbstractControl;
    public ddd: AbstractControl;
    public telefone: AbstractControl;
    public tipoTelefone: AbstractControl;
    public password: AbstractControl;
    public confirmPassword: AbstractControl;

    constructor(router: Router,
        fb: FormBuilder,
        public tipoTelefoneService: TipoTelefoneService,
        public estabelecimentoService: EstabelecimentoService) {

        this.router = router;

        this.listaTiposTelefone();

        this.form = fb.group({
            cnpj: ['', Validators.required, cnpjValidator],
            razaoSocial: ['', Validators.required, Validators.minLength(3), Validators.maxLength(150)],
            nomeFantasia: ['', Validators.required, Validators.minLength(3), Validators.maxLength(150)],
            tipoEstabelecimento: ['', Validators.required],
            contratanteNome: ['', Validators.required, Validators.minLength(3), Validators.maxLength(150)],
            contratanteSobrenome: ['', Validators.required, Validators.minLength(3), Validators.maxLength(150)],
            contratanteCpf: ['', Validators.required, cpfValidator],
            contratamteEmail: ['', Validators.required, emailValidator],
            tipoTelefone: ['', Validators.required],
            ddd: ['', Validators.required],
            telefone: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        }, 
        { 
            validator: matchingPasswords('password', 'confirmPassword') 
        });

        this.cnpj = this.form.controls['cnpj'];
        this.razaoSocial = this.form.controls['razaoSocial']; 
        this.nomeFantasia = this.form.controls['nomeFantasia'];
        this.tipoEstabelecimento = this.form.controls['tipoEstabelecimento'];
        this.contratanteNome = this.form.controls['contratanteNome'];
        this.contratanteSobrenome = this.form.controls['contratanteSobrenome'];
        this.contratanteCpf = this.form.controls['contratanteCpf'];
        this.contratanteEmail = this.form.controls['contratanteEmail'];
        this.tipoTelefone = this.form.controls['tipoTelefone'];
        this.ddd = this.form.controls['ddd'];
        this.telefone = this.form.controls['telefone'];
        this.password = this.form.controls['password'];
        this.confirmPassword = this.form.controls['confirmPassword'];
    }

    public onSubmit(values: Object): void {
        if (this.form.valid) {
            this.cadastrarEstabelecimento(values);
            this.router.navigate(['/login-estabelecimento']);
        }
    }

    cadastrarEstabelecimento(estabelecimento: any) {
        this.estabelecimentoService.setEstabelecimento(estabelecimento).subscribe(
            resp => {
                this.formSubmit = resp['Response'];
                console.log(resp);
                error => this.msgErro;
            });
    }

    listaTiposTelefone() {
        this.tipoTelefoneService.listarTodos().subscribe(
            tiposTelefone => {
                this.tiposTelefone = tiposTelefone['tiposTelefone'];
                error => this.msgErro;
            });

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

export function cpfValidator(control: FormControl): { [key: string]: any } {
    var multipliers = [10, 9, 8, 7, 6, 5, 4, 3, 2]
    var value = control.value.replace(/\D+/g, '');
    if (value.length === 11) {
        control.markAsTouched();
        var total = value.split('').reduce((total, item) => {
            return total += parseFloat(item)
        }, 0.0);
        total /= 11;
        if (total == value[0]) {
            return { invalidCPF: true };
        }
        var digit = value.substr(value.length - 2, value.length);
        var cpf = value.substr(0, value.length - 2);
        total = multipliers.reduce((total, multipler, index) => {
            return total + (cpf[index] * multipler);
        }, 0);
        var firstDigit = (total * 10) % 11;
        cpf += firstDigit;
        multipliers.unshift(11);
        total = multipliers.reduce((total, multipler, index) => {
            return total + (cpf[index] * multipler);
        }, 0);
        var secondDigit = (total * 10) % 11;
        var calculatedDigit = `${firstDigit}${secondDigit}`;
        if (calculatedDigit === digit) {
            return null;
        } else {
            return { invalidCPF: true };
        }
    } else {
        return { invalidCPF: true };
    }
}

export function cnpjValidator(control: FormControl): { [key: string]: any } {
    var multipliers = [10, 9, 8, 7, 6, 5, 4, 3, 2]
    var value = control.value.replace(/\D+/g, '');
    if (value.length === 11) {
        control.markAsTouched();
        var total = value.split('').reduce((total, item) => {
            return total += parseFloat(item)
        }, 0.0);
        total /= 11;
        if (total == value[0]) {
            return { invalidCPF: true };
        }
        var digit = value.substr(value.length - 2, value.length);
        var cpf = value.substr(0, value.length - 2);
        total = multipliers.reduce((total, multipler, index) => {
            return total + (cpf[index] * multipler);
        }, 0);
        var firstDigit = (total * 10) % 11;
        cpf += firstDigit;
        multipliers.unshift(11);
        total = multipliers.reduce((total, multipler, index) => {
            return total + (cpf[index] * multipler);
        }, 0);
        var secondDigit = (total * 10) % 11;
        var calculatedDigit = `${firstDigit}${secondDigit}`;
        if (calculatedDigit === digit) {
            return null;
        } else {
            return { invalidCPF: true };
        }
    } else {
        return { invalidCPF: true };
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
