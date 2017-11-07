import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';
import {TranslateService} from 'ng2-translate/ng2-translate';

/** SERVICES */
import { AcessoService } from './../../services/acesso.service';

@Component({
  selector: 'app-login-smarket',
  templateUrl: './login-smarket.component.html',
  styleUrls: ['./login-smarket.component.scss'],
  providers: [
    AcessoService
  ],
  encapsulation: ViewEncapsulation.None
})

export class LoginSmarketComponent implements OnInit {
  public erros: Array<any> = [];
  public router: Router;
  public form: FormGroup;
  public formSubmit: any = {
    status: false,
    descricao: ''
  };


  public email: AbstractControl;
  public password: AbstractControl;


  constructor(router: Router, fb: FormBuilder,
    private fs: FacebookService,
    private acessoService: AcessoService) {
    this.router = router;

    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, emailValidator])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

    fs.init({
      appId: '460634367628229',
      version: 'v2.9'
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];

  }

  ngOnInit(): void {

  }

  public handleError(error) {
    console.error('Error processing action', error);
  }

  public onSubmit(values: Object): void {
    var resp: any;
    var msgErro: any = {
        item : '',
        descricao: ''
    };

    if (this.form.valid) {
      this.acessoService.autenticarUsuarioSmarket(values).subscribe(
        login => {
          resp = login['response'];
          this.formSubmit.status = resp['status'];
          this.formSubmit.descricao = resp['descricao'];
          if (this.formSubmit.status == 'true') {
            this.router.navigate(['/smarket/dashboard-smarket']);
          }
          else {
            msgErro.item = 'Erro ao efetuar o login!';
            msgErro.descricao = this.formSubmit.descricao;
            this.erros.push(msgErro);
            this.router.navigate(['/smarket/dashboard-smarket']);
          }
        },
        err => {
          msgErro.item = 'Erro ao efetuar login!';
          msgErro.descricao = err;
          this.erros.push(msgErro);
        }
      );
    }
    else {
      this.email.markAsTouched();
      this.password.markAsTouched();
    }
  }

  public closeAlert(index) {
    this.erros.splice(this.erros.indexOf(index), 1);
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
