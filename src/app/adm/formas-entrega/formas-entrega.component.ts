import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

/** Services */


@Component({
  selector: 'app-formas-entrega',
  templateUrl: './formas-entrega.component.html',
  styleUrls: ['./formas-entrega.component.scss'],
  providers: [

  ],
  encapsulation: ViewEncapsulation.None
})

export class FormasEntregaComponent implements OnInit {
  public router: Router;
  public form: FormGroup;
  public sucessos: Array<any> = [];
  public erros: Array<any> = [];

  public minhasEntregas: Array<any> = [];
  public unidadesMedida: Array<any> = [];

  public entrega_frete: AbstractControl;
  public entrega_retira: AbstractControl;

  public exibir_fretes: boolean = true;

  constructor(router: Router,
    fb: FormBuilder
  ) {
    this.router = router;

    this.form = fb.group({
      entrega_frete: ['', Validators.compose([Validators.required])],
      entrega_retira: ['', Validators.compose([Validators.required])],
    });

    this.entrega_frete = this.form.controls['entrega_frete'];
    this.entrega_retira = this.form.controls['entrega_retira'];
  }

  ngOnInit() {

  }

  public closeAlert(index) {
    this.erros.splice(index, 1);
  }

  public closeAlertSucesso(index) {
    this.sucessos.splice(index, 1);
  }
 

}

