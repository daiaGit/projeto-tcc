import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CategoriaService } from './../../../../services/categoria.service';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';


@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    CategoriaService
  ],
})

export class SmartComponent implements OnInit {
  public router: Router;

  //adicionar
  public formSubmit: any;
  public categoria_descricao: any;
  public categoria_img_b64: any;
  
  //listar
  public data = [];
  public file:any;  
  public msgErro = [];

  public settings = {
    selectMode: 'single',  //single|multi
    hideHeader: false,
    hideSubHeader: false,
    actions: {
      columnTitle: 'Actions',
      add: false,
      edit: false,
      delete: false,
      custom: [],
      position: 'right' // left|right
    },
    noDataMessage: 'Nenhuma categoria encontrada. ',
    columns: {
      categoria_id: {
        title: 'ID',
        editable: false,
        width: '10%',
        type: 'html',
        inputClass: 'validate',
        valuePrepareFunction: (value) => { return '<div class="text-center">' + value + '</div>'; }
      },
      categoria_img_b64: {
        title: 'Imagem',
        editable: false,
        type: 'file',
        valuePrepareFunction: (categoria_img_b64) =>  { return '<img (click)="teste()" src="' + categoria_img_b64 + '" />' },
        width: '50%'       
      },
      categoria_descricao: {
        title: 'Categoria',
        type: 'string',
        width: '40%',
        filter: true,
        editable: true
      }
    },
    pager: {
      display: true,
      perPage: 8
    }
  };

  constructor(
    router: Router,
    public fb: FormBuilder,
    public categoriaService: CategoriaService
  ) {


    this.getData();
  }

  ngOnInit(): void {

  }

cadastrarCategoria() {           
  this.categoriaService.setCategoria(this.categoria_descricao).subscribe(
      resp => {
          this.formSubmit = resp['Response'];
          console.log(resp);          
          error => this.msgErro;
      }); 
}

  public getData() {
    let listCategoria: any;
    this.categoriaService.getCategorias().subscribe(
      data => {
        listCategoria = data['response'];
        this.data = listCategoria.objeto;
        
        console.log(this.data); 
        error => this.msgErro;
        }  
    );
  }

  public teste(parametro: any){
console.log(parametro);
  }

  public onDeleteConfirm(event): void {
    console.log('teste');
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  
  public onSaveConfirm(event):void {
  }

  public onRowSelect(event) {
    // console.log(event);
  }

  public onUserRowSelect(event) {
    //console.log(event);   //this select return only one page rows
  }

  public onRowHover(event) {
    //console.log(event);
  }

  fileChange(input){
    const reader = new FileReader();
    if (input.files.length) {       
        this.file = input.files[0].name;            
    }
}

removeFile():void{
    this.file = '';
}

}
