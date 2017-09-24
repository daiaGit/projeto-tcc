import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';

/** SERVICES */
import { AcessoService } from './../../services/acesso.service';

@Component({
  selector: 'app-login-consumidor',
  templateUrl: './login-consumidor.component.html',
  styleUrls: ['./login-consumidor.component.scss'],
  providers: [
    AcessoService
],
  encapsulation: ViewEncapsulation.None
})

export class LoginConsumidorComponent {
  public router: Router;
  public form:FormGroup;
  public formSubmit: any;
  public msgErro: any;

  public email:AbstractControl;
  public password:AbstractControl;

  constructor(  router:Router, fb:FormBuilder, 
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

  private handleError(error) {
    console.error('Error processing action', error);
  }

  public onSubmit(values: Object): void {
    if (this.form.valid) {
        this.loginEmail(values);           
        this.router.navigate(['pages/dashboard']);
    }
  }

  /** Login com Email */
  private loginEmail(consumidor: any) {           
    this.acessoService.autenticar(consumidor).subscribe(
        resp => {
            this.formSubmit = resp['Response'];
            console.log(resp);          
            error => this.msgErro;
        }); 
  }

  /** Login com Facebook */
  public getLoginFacebook() {
    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,user_friends,email,pages_show_list'
    };

    this.fs.login(loginOptions)
      .then((res: LoginResponse) => {
          if(res.status == "connected"){
            console.log('Logando com Facebook:', res);
            this.getProfileFacebook();
          }
      })
      .catch(this.handleError);
  }

  getLoginFacebookStatus() {
    this.fs.getLoginStatus()
      .then(console.log.bind(console))
      .catch(console.error.bind(console));
  }

  private getProfileFacebook() {
    var params: any;
    this.fs.api('/me?fields=id,name,first_name,last_name,gender,email')
      .then((res: any) => {
        console.log('Resgatando dados do Facebook:', res);
        this.loginFacebook(res);  
      })
  }

  private loginFacebook(consumidor: any) {           
    this.acessoService.autenticarFacebook(consumidor).subscribe(
        resp => {
            this.formSubmit = resp['Response'];
            console.log(resp);          
            error => this.msgErro;
        }); 
  }


  ngAfterViewInit(){
      document.getElementById('preloader').classList.add('hide');                 
  }

}

export function emailValidator(control: FormControl): {[key: string]: any} {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;    
    if (control.value && !emailRegexp.test(control.value)) {
        return {invalidEmail: true};
    }
}
