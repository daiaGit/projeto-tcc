import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';

@Component({
  selector: 'app-login-consumidor',
  templateUrl: './login-consumidor.component.html',
  styleUrls: ['./login-consumidor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginConsumidorComponent {
  public router: Router;
  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;

  constructor(router:Router, fb:FormBuilder, private fs: FacebookService) {
      this.router = router;
      this.form = fb.group({
          'email': ['', Validators.compose([Validators.required, emailValidator])],
          'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      });

      fs.init({
        appId: '927901630671604',
        version: 'v2.7'
      });

      this.email = this.form.controls['email'];
      this.password = this.form.controls['password'];
  }


  loginFacebook() {
    this.fs.login()
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
      })
      .catch(this.handleError);
  }

  getLoginFacebookStatus() {
    this.fs.getLoginStatus()
      .then(console.log.bind(console))
      .catch(console.error.bind(console));
  }

  getProfileFacebook() {
    this.fs.api('/me')
      .then((res: any) => {
        console.log('Got the users profile', res);
      })
  }

    /**
   * This is a convenience method for the sake of this example project.
   * Do not use this in production, it's better to handle errors separately.
   * @param error
   */
  private handleError(error) {
    console.error('Error processing action', error);
  }

  public onSubmit(values:Object):void {
      if (this.form.valid) {
          this.router.navigate(['pages/dashboard']);
      }
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
