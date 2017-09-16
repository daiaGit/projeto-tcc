import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TipoTelefoneService } from './../../services/tipos-telefone.service';
import { ConsumidorService } from './../../services/consumidor.service';

@Component({
    selector: 'app-contato',
    templateUrl: './contato.component.html',
    styleUrls: ['./contato.component.scss'],
    providers: [
        TipoTelefoneService,
        ConsumidorService
    ],
    encapsulation: ViewEncapsulation.None
})

export class RegisterConsumidorComponent {
    public router: Router;
    public form: FormGroup;
    public msgErro: any;
    public formSubmit: any;

    public tiposTelefone: Array<any> = [];
    
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
        public consumidorService: ConsumidorService) {

        this.router = router;

        this.listaTiposTelefone();

        this.form = fb.group({
            nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(150)])],
            sobrenome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(150)])],
            email: ['', Validators.compose([Validators.required, emailValidator])],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
            telefone: ['', Validators.required],
            ddd: ['', Validators.required],
            tipoTelefone: ['', Validators.required],
        }, { validator: matchingPasswords('password', 'confirmPassword') });

        this.nome = this.form.controls['nome'];
        this.sobrenome = this.form.controls['sobrenome'];
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
        this.confirmPassword = this.form.controls['confirmPassword'];
        this.telefone = this.form.controls['telefone'];
        this.ddd = this.form.controls['ddd'];
        this.tipoTelefone = this.form.controls['tipoTelefone'];
    }

    public onSubmit(values: Object): void {
        if (this.form.valid) {
            this.cadastrarConsumidor(values);           
            this.router.navigate(['/login-consumidor']);
        }
    }

    cadastrarConsumidor(consumidor: any) {           
        this.consumidorService.setConsumidor(consumidor).subscribe(
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
                console.log(tiposTelefone);          
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

export function matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
        let password = group.controls[passwordKey];
        let passwordConfirmation = group.controls[passwordConfirmationKey];
        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({ mismatchedPasswords: true })
        }
    }
}
