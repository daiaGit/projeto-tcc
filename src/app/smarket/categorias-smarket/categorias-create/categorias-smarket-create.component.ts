import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';


/**Sevices*/
import { CategoriaService } from 'app/services/categoria.service';
import { SubcategoriaService } from './../../../services/subcategoria.service';

@Component({
  selector: 'app-categorias-smarket-create',
  templateUrl: './categorias-smarket-create.component.html',
  styleUrls: ['./categorias-smarket-create.component.scss'],
  providers: [
    CategoriaService,
    SubcategoriaService
  ],
  encapsulation: ViewEncapsulation.None
})
export class CategoriasSmarketCreateComponent implements OnInit {
  public router: Router;
  public form: FormGroup;
  public erros: Array<any> = [];
  public formSubmit: any = {
    descricao: '',
    status: false
  };

  @ViewChild('cropper', undefined)
  cropper: ImageCropperComponent;
  cropperSettings: CropperSettings;
  data: any;

  public categoria_descricao: AbstractControl;
  public subcategoria_descricao: AbstractControl;
  public subcategorias: Array<any> = [];

  constructor(router: Router,
    fb: FormBuilder,
    public categoriaService: CategoriaService,
    public subcategoriaService: SubcategoriaService
  ) {

    this.cropperSettings = new CropperSettings();
    this.cropperSettings.noFileInput = true;
    this.data = {};
    this.data.image = "../../../../../assets/img/icone/upload.png";

    

    this.router = router;

    this.form = fb.group({
      categoria_descricao: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(150)])],
      subcategoria_descricao: ['']
    });

    this.categoria_descricao = this.form.controls['categoria_descricao'];
    this.subcategoria_descricao = this.form.controls['subcategoria_descricao'];
  }

  ngOnInit() {

  }

  public onSubmit(values: Object): void {
    this.cadastrarCategoria();
  }

  public cadastrarCategoria(): void {
    var resp: any;

    var msgErro: any = {
      item: '',
      descricao: ''
    };

    this.categoriaService.setCategoria(this.categoria_descricao, this.data.image).subscribe(
      categoria => {
        resp = categoria['response'];
        if (resp.status == 'true') {
          console.log(resp.objeto[0].categoria_id);
          this.cadastrarSubcategoria(resp.objeto[0].categoria_id);
        }
        else {
          msgErro.item = 'Erro ao adicionar categoria!';
          msgErro.descricao = resp.descricao;
          this.erros.push(msgErro);
        }
      },
      err => {
        msgErro.item = 'Erro ao adicionar categoria!';
        msgErro.descricao = err;
        this.erros.push(msgErro);
      }
    );
  }

  public cadastrarSubcategoria(idCategoria): void {
    var resp: any;

    var msgErro: any = {
      item: '',
      descricao: ''
    };
    this.subcategorias.forEach(subcategoria => {
      this.subcategoriaService.setSubCategoria(subcategoria, idCategoria).subscribe(
        subcategoria => {
          resp = subcategoria['response'];
          if (resp['status'] == 'true') {
            console.log(subcategoria, resp['status']);
          }
          else {
            msgErro.item = 'Erro ao adicionar categoria!';
            msgErro.descricao = resp.descricao;
            this.erros.push(msgErro);
          }
        },
        err => {
          msgErro.item = 'Erro ao adicionar categoria!';
          msgErro.descricao = err;
          this.erros.push(msgErro);
        }
      );
    });
    
  }



  fileChangeListener($event) {
    var image: any = new Image();
    var file: File = $event.target.files[0];
    var myReader: FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function (loadEvent: any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);
    };

    myReader.readAsDataURL(file);
  }

  fileInit() {

  }

  public closeAlert(index) {
    this.erros.splice(index, 1);
  }

  public adicionarSubcategoria() {
    this.subcategorias.push(this.subcategoria_descricao.value);
  }

  public removerSubcategoria(index) {
    console.log(this.subcategorias.length);
    if(this.subcategorias.length > 1){
      this.subcategorias.splice(index, 1);
    }
    else{
      this.subcategorias = [];
    }
  }

}
